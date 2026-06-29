import * as THREE from "three";
import type { Input } from "../core/input";
import { PlayerStats } from "../systems/stats";
import { buildHero, COLOR } from "./heroModel";
import { groundHeight, isWalkable, resolveObstacles } from "../world/terrain";
import type { PlayerModelProto, PlayerAnim } from "../world/playerModel";
import type { VRM } from "@pixiv/three-vrm";

const GRAVITY = 28;
const JUMP_SPEED = 11;
const BASE_MOVE_SPEED = 8;
const DODGE_SPEED = 22;
const DODGE_DURATION = 0.25;
const DODGE_INVULN = 0.45;
const DODGE_STAMINA_COST = 25;
const STAMINA_REGEN = 22;
const ATTACK_COOLDOWN = 0.38;
const ATTACK_SWING_TIME = 0.22;
const ATTACK_LUNGE_SPEED = 9;
const TURN_LERP = 14;
/** 按住超過此秒數視為開始集氣(以下為普通攻擊) */
const CHARGE_HOLD_MIN = 0.25;
/** 集氣到滿所需總按住秒數(起手 0.25s + 集氣 1s) */
const CHARGE_FULL = 1.25;
const SPIN_TIME = 0.35;
const BLOCK_MOVE_FACTOR = 0.35;
const CHARGE_MOVE_FACTOR = 0.4;
const BLOCK_STAMINA_COST = 10;
const BLOCK_DAMAGE_FACTOR = 0.15;
/** 格擋有效正面夾角(cos 值,約 ±75°) */
const BLOCK_ARC_COS = 0.26;
/** 緩速時的移速倍率(頭目寒霜爆) */
const CHILL_MOVE_FACTOR = 0.5;
/** VRM 模型正規化身高(僅視覺;邏輯/碰撞不受影響) */
const MODEL_HEIGHT = 3;

/** 攻擊判定參數:距離與面向夾角 */
export const ATTACK_RANGE = 3.4;
export const ATTACK_ARC_COS = Math.cos((75 * Math.PI) / 180);
/** 迴旋斬半徑(360° 無視面向) */
export const SPIN_RANGE = 4.5;


/**
 * 玩家角色:薩爾達風格劍盾勇者。
 * 第三人稱移動、跳躍、閃避、攻擊,程序化走路/待機/揮劍動畫。
 */
export class Player {
  readonly mesh: THREE.Group;
  readonly stats = new PlayerStats();

  hp: number;
  mp: number;
  stamina = 100;

  /** 面向(弧度,繞 Y 軸;邏輯即時,模型旋轉平滑跟隨) */
  facing = 0;

  /** 是否正在舉盾防禦(供 HUD 與測試讀取) */
  blocking = false;
  /** 受擊反應剩餘秒數(takeDamage 設定;供多人遠端 avatar 播受擊動作) */
  hurtT = 0;
  /** 持有風語石(解鎖二段跳與滑翔),由 main 同步 */
  hasWindGem = false;
  /** 風語石升階等級(lv2 滑翔更慢、lv3 三段跳),由 main 同步 */
  windLevel = 1;
  /** 持有霜語晶(解鎖冰面渡水),由 main 同步 */
  hasFrostGem = false;
  /** 正在陡坡滑行(供動畫與測試讀取) */
  sliding = false;
  /** 潛水區域(沉沒古城內可行走範圍),由 main 設定 */
  divingZone: { x: number; z: number; r: number } | null = null;
  /** 本次離地已使用的空中跳躍次數 */
  airJumpsUsed = 0;
  /** 滑翔中(供動畫與測試讀取) */
  gliding = false;
  /** 緩速剩餘秒數(頭目寒霜爆;移速下降) */
  chillT = 0;
  /** 灼燒剩餘秒數(頭目熔核震爆;持續扣血) */
  burnT = 0;
  private burnDps = 0;
  private burnTickAccum = 0;
  /** 被頭目特殊技能擊退的衝量(每幀套用後衰減) */
  private knockbackVel = new THREE.Vector3();

  private velocityY = 0;
  private grounded = true;
  private attackCd = 0;
  private swingT = 0;
  private dodgeT = 0;
  private invulnT = 0;
  private lungeT = 0;
  private spinT = 0;
  private holdT = 0;
  private chargeReadyFired = false;
  private walkPhase = 0;
  private idlePhase = 0;
  private moveAmount = 0;
  private renderYaw = 0;
  private dodgeDir = new THREE.Vector3();

  private body: THREE.Group;
  private armL: THREE.Group;
  private armR: THREE.Group;
  private forearmL!: THREE.Group;
  private forearmR!: THREE.Group;
  private legL: THREE.Group;
  private legR: THREE.Group;
  private shinL!: THREE.Group;
  private shinR!: THREE.Group;
  private shield: THREE.Group;
  private sword!: THREE.Group;
  private bladeMaterial!: THREE.MeshToonMaterial;
  private readonly shieldHomePos = new THREE.Vector3(0, 1.45, -0.46);
  private readonly shieldBlockPos = new THREE.Vector3(0.18, 1.32, 0.5);

  // ── VRM 模型分支(useModel 後啟用;否則維持程序化角色)──
  private vrm: VRM | null = null;
  private vrmMixer: THREE.AnimationMixer | null = null;
  private vrmActions = new Map<PlayerAnim, THREE.AnimationAction>();
  private vrmState: PlayerAnim = "idle";
  private vrmWasAttacking = false;

  constructor() {
    this.hp = this.stats.maxHP;
    this.mp = this.stats.maxMP;

    // 模型組裝抽到 heroModel.buildHero(本機與遠端玩家共用,只差長袍色);動畫仍由本類驅動
    const rig = buildHero(COLOR.tunic, COLOR.tunicDark);
    this.mesh = rig.group;
    this.body = rig.body;
    this.armL = rig.armL;
    this.armR = rig.armR;
    this.forearmL = rig.forearmL;
    this.forearmR = rig.forearmR;
    this.legL = rig.legL;
    this.legR = rig.legR;
    this.shinL = rig.shinL;
    this.shinR = rig.shinR;
    this.shield = rig.shield;
    this.sword = rig.sword;
    this.bladeMaterial = rig.bladeMaterial;

    this.respawn();
  }

  /** 是否處於無敵時間(閃避中) */
  get invulnerable(): boolean {
    return this.invulnT > 0;
  }

  /** 是否正在揮劍/迴旋斬(供多人遠端 avatar 播攻擊動作) */
  get attacking(): boolean {
    return this.swingT > 0 || this.spinT > 0;
  }

  /** 是否騰空(跳躍/滑翔;供多人遠端 avatar 播騰空姿勢) */
  get airborne(): boolean {
    return !this.grounded;
  }

  /** 集氣進度 0–1(未集氣為 0) */
  get chargeRatio(): number {
    return THREE.MathUtils.clamp(
      (this.holdT - CHARGE_HOLD_MIN) / (CHARGE_FULL - CHARGE_HOLD_MIN),
      0,
      1,
    );
  }

  get isDead(): boolean {
    return this.hp <= 0;
  }

  /** 重置位置與資源(初次生成與死亡重生共用) */
  respawn(): void {
    this.hp = this.stats.maxHP;
    this.mp = this.stats.maxMP;
    this.stamina = 100;
    this.velocityY = 0;
    this.mesh.position.set(0, groundHeight(0, -52), -52);
  }

  /**
   * 套用 VRM 模型:隱藏程序化角色,改用此 VRM 當視覺,動畫由 updateModel 依狀態驅動。
   * 載入失敗(未呼叫此法)則維持原程序化角色。
   */
  useModel(p: PlayerModelProto): void {
    this.vrm = p.vrm;
    // 隱藏既有程序化視覺(邏輯仍用各 group 的位置,不受影響)
    for (const child of [...this.mesh.children]) child.visible = false;

    // 包一層 wrapper:正規化身高 + VRM0 面向修正(面向 +Z,與程序化角色一致)
    const root = new THREE.Group();
    root.add(p.vrm.scene);
    const box = new THREE.Box3().setFromObject(p.vrm.scene);
    const h = box.max.y - box.min.y || 1;
    root.scale.setScalar(MODEL_HEIGHT / h);
    root.rotation.y = Math.PI; // VRM0 預設面向 -Z,轉正面向 +Z
    this.mesh.add(root);

    this.vrmMixer = new THREE.AnimationMixer(p.vrm.scene);
    for (const key of ["idle", "run", "attack", "death"] as PlayerAnim[]) {
      this.vrmActions.set(key, this.vrmMixer.clipAction(p.clips[key]));
    }
    this.vrmActions.get("idle")?.play(); // 起始待機
  }

  /** 依玩家狀態切換 VRM 動畫(跑/攻擊/死亡,其餘 idle 休息姿勢)+ 推進骨架與彈簧骨 */
  private updateModel(dt: number): void {
    if (!this.vrm || !this.vrmMixer) return;

    const attackingNow = this.attacking;
    let desired: PlayerAnim;
    if (this.isDead) desired = "death";
    else if (attackingNow) desired = "attack";
    else if (this.moveAmount > 0.08) desired = "run";
    else desired = "idle";

    // 攻擊上升緣 → 重播(連續揮擊也能重新觸發)
    const restartAttack = desired === "attack" && !this.vrmWasAttacking;
    if (desired !== this.vrmState || restartAttack) {
      const prev = this.vrmActions.get(this.vrmState);
      const next = this.vrmActions.get(desired);
      if (next) {
        const once = desired === "attack" || desired === "death";
        next.reset();
        next.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, once ? 1 : Infinity);
        next.clampWhenFinished = once;
        next.fadeIn(0.18).play();
      }
      if (prev && prev !== next) prev.fadeOut(0.18);
      this.vrmState = desired;
    }
    this.vrmWasAttacking = attackingNow;

    this.vrmMixer.update(dt);
    this.vrm.update(dt); // 表情 / 彈簧骨(頭髮、裙襬)
  }

  /**
   * 每幀更新。回傳本幀觸發的動作事件(供音效與命中判定使用)。
   * spin 為迴旋斬集氣比率(0–1),未施放為 null。
   */
  update(
    dt: number,
    input: Input,
    cameraYaw: number,
  ): {
    attacked: boolean;
    spin: number | null;
    chargeReady: boolean;
    jumped: boolean;
    dodged: boolean;
  } {
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.invulnT = Math.max(0, this.invulnT - dt);
    this.swingT = Math.max(0, this.swingT - dt);
    this.dodgeT = Math.max(0, this.dodgeT - dt);
    this.lungeT = Math.max(0, this.lungeT - dt);
    this.spinT = Math.max(0, this.spinT - dt);
    this.chillT = Math.max(0, this.chillT - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);

    const speedMul = this.stats.speedMultiplier;
    const move = new THREE.Vector3();
    let jumped = false;
    let dodged = false;

    this.blocking = input.isDown("KeyQ") && this.dodgeT <= 0;

    if (this.dodgeT > 0) {
      move.copy(this.dodgeDir).multiplyScalar(DODGE_SPEED * dt);
    } else {
      const forward = new THREE.Vector3(-Math.sin(cameraYaw), 0, -Math.cos(cameraYaw));
      const right = new THREE.Vector3(-forward.z, 0, forward.x);
      if (input.isDown("KeyW")) move.add(forward);
      if (input.isDown("KeyS")) move.sub(forward);
      if (input.isDown("KeyD")) move.add(right);
      if (input.isDown("KeyA")) move.sub(right);
      if (move.lengthSq() > 0) {
        move.normalize();
        this.facing = Math.atan2(move.x, move.z);
        // 舉盾與集氣時移速下降
        const slowFactor =
          (this.blocking
            ? BLOCK_MOVE_FACTOR
            : this.holdT > CHARGE_HOLD_MIN
              ? CHARGE_MOVE_FACTOR
              : 1) * (this.chillT > 0 ? CHILL_MOVE_FACTOR : 1);
        move.multiplyScalar(BASE_MOVE_SPEED * speedMul * slowFactor * dt);
      }

      if (
        (input.wasPressed("ShiftLeft") || input.wasPressed("ShiftRight")) &&
        this.stamina >= DODGE_STAMINA_COST
      ) {
        dodged = true;
        this.holdT = 0;
        this.chargeReadyFired = false;
        const dir =
          move.lengthSq() > 0
            ? move.clone().normalize()
            : new THREE.Vector3(Math.sin(this.facing), 0, Math.cos(this.facing));
        this.dodgeDir.copy(dir);
        this.dodgeT = DODGE_DURATION;
        this.invulnT = DODGE_INVULN;
        this.stamina -= DODGE_STAMINA_COST;
      }
    }

    // 揮劍時的前衝步伐
    if (this.lungeT > 0) {
      move.addScaledVector(
        new THREE.Vector3(Math.sin(this.facing), 0, Math.cos(this.facing)),
        ATTACK_LUNGE_SPEED * dt,
      );
    }

    this.stamina = Math.min(100, this.stamina + STAMINA_REGEN * dt);
    this.moveAmount = move.length() / Math.max(dt, 1e-6) / BASE_MOVE_SPEED;

    // 陡坡滑行(企劃書:霜雪峰島滑行玩法):坡度超過閾值時往下坡滑
    this.sliding = false;
    if (this.grounded) {
      const px = this.mesh.position.x;
      const pz = this.mesh.position.z;
      const eps = 0.6;
      const gx = (groundHeight(px + eps, pz) - groundHeight(px - eps, pz)) / (2 * eps);
      const gz = (groundHeight(px, pz + eps) - groundHeight(px, pz - eps)) / (2 * eps);
      const steep = Math.hypot(gx, gz);
      if (steep > 0.85) {
        this.sliding = true;
        move.x += (-gx / steep) * 6.5 * dt;
        move.z += (-gz / steep) * 6.5 * dt;
      }
    }

    // 頭目特殊技能擊退:套用衝量後衰減
    if (this.knockbackVel.lengthSq() > 0.01) {
      move.addScaledVector(this.knockbackVel, dt);
      this.knockbackVel.multiplyScalar(Math.max(1 - dt * 6, 0));
    } else {
      this.knockbackVel.set(0, 0, 0);
    }

    const next = this.mesh.position.clone().add(move);
    // 場景障礙物(樹/石/房子/碼頭柱/古城石柱):把圓心推出,沿障礙滑行
    const resolved = resolveObstacles(next.x, next.z);
    next.x = resolved.x;
    next.z = resolved.z;
    // 可行走:島嶼涉水範圍/冰面渡水(霜語晶+靈力)/潛水區內
    const canWalk =
      isWalkable(next.x, next.z) ||
      (this.hasFrostGem && this.mp > 0) ||
      (this.divingZone !== null &&
        Math.hypot(next.x - this.divingZone.x, next.z - this.divingZone.z) < this.divingZone.r);
    if (canWalk) {
      this.mesh.position.x = next.x;
      this.mesh.position.z = next.z;
    }

    if (input.wasPressed("Space")) {
      if (this.grounded) {
        this.velocityY = JUMP_SPEED;
        this.grounded = false;
        jumped = true;
      } else if (this.hasWindGem && this.airJumpsUsed < (this.windLevel >= 3 ? 2 : 1)) {
        // 風語石:二段跳(升階 lv3 解鎖三段跳)
        this.airJumpsUsed++;
        this.velocityY = JUMP_SPEED * 0.9;
        jumped = true;
      }
    }
    this.velocityY -= GRAVITY * dt;

    // 風語石:下落時按住空白鍵滑翔(緩降;升階滑得更慢)
    this.gliding =
      this.hasWindGem && !this.grounded && this.velocityY < 0 && input.isDown("Space");
    if (this.gliding) {
      this.velocityY = Math.max(this.velocityY, -(2.5 - (this.windLevel - 1) * 0.4));
    }

    this.mesh.position.y += this.velocityY * dt;

    const floor = groundHeight(this.mesh.position.x, this.mesh.position.z);
    if (this.mesh.position.y <= floor) {
      this.mesh.position.y = floor;
      this.velocityY = 0;
      this.grounded = true;
      this.airJumpsUsed = 0;
      this.gliding = false;
    }

    // 攻擊與集氣:舉盾時不可攻擊;短按 = 普攻,按住超過門檻放開 = 迴旋斬
    let attacked = false;
    let spin: number | null = null;
    let chargeReady = false;
    if (this.blocking) {
      this.holdT = 0;
      this.chargeReadyFired = false;
      input.consumeLeftRelease();
    } else {
      if (input.leftDown) {
        this.holdT += dt;
        if (this.chargeRatio >= 1 && !this.chargeReadyFired) {
          this.chargeReadyFired = true;
          chargeReady = true;
        }
      }
      if (input.consumeLeftRelease()) {
        const held = this.holdT;
        this.holdT = 0;
        this.chargeReadyFired = false;
        if (held > CHARGE_HOLD_MIN) {
          spin = this.chargeRatioFor(held);
          this.spinT = SPIN_TIME;
          this.attackCd = ATTACK_COOLDOWN / speedMul;
        } else if (this.attackCd <= 0) {
          this.attackCd = ATTACK_COOLDOWN / speedMul;
          this.swingT = ATTACK_SWING_TIME;
          this.lungeT = 0.12;
          attacked = true;
        }
      }
    }

    this.animate(dt);
    return { attacked, spin, chargeReady, jumped, dodged };
  }

  private chargeRatioFor(held: number): number {
    return THREE.MathUtils.clamp((held - CHARGE_HOLD_MIN) / (CHARGE_FULL - CHARGE_HOLD_MIN), 0, 1);
  }

  /** 程序化動畫:轉身平滑、走路擺動、待機呼吸、揮劍、翻滾 */
  private animate(dt: number): void {
    // 模型旋轉平滑追上邏輯面向
    let delta = this.facing - this.renderYaw;
    while (delta > Math.PI) delta -= Math.PI * 2;
    while (delta < -Math.PI) delta += Math.PI * 2;
    this.renderYaw += delta * Math.min(TURN_LERP * dt, 1);
    this.mesh.rotation.y = this.renderYaw;

    // VRM 模型分支:用骨骼動畫,跳過下方程序化擺動
    if (this.vrm) {
      this.updateModel(dt);
      return;
    }

    this.idlePhase += dt * 2.2;
    const moving = this.moveAmount > 0.05;
    if (moving) this.walkPhase += dt * 11 * Math.min(this.moveAmount, 1.4);

    const rolling = this.dodgeT > 0;
    const swing = moving ? Math.sin(this.walkPhase) * 0.65 : 0;
    this.legL.rotation.x = rolling ? 1.4 : swing;
    this.legR.rotation.x = rolling ? 1.4 : -swing;
    // 膝關節:跨步時抬起的腿屈膝;翻滾時雙膝收起
    this.shinL.rotation.x = rolling ? 1.3 : moving ? Math.max(0, -Math.sin(this.walkPhase)) * 0.8 : 0;
    this.shinR.rotation.x = rolling ? 1.3 : moving ? Math.max(0, Math.sin(this.walkPhase)) * 0.8 : 0;

    // 左臂:舉盾優先,否則走路擺動
    this.armL.rotation.x = this.blocking ? -1.1 : rolling ? -1.6 : -swing * 0.8;
    // 左前臂(肘):舉盾握緊、翻滾收起、平時微屈 + 走路擺動
    this.forearmL.rotation.x = this.blocking
      ? -0.7
      : rolling
        ? -1.4
        : -0.25 - Math.max(0, -swing) * 0.5;

    // 盾牌:防禦時舉到身前,平時揹回背後
    const shieldTarget = this.blocking ? this.shieldBlockPos : this.shieldHomePos;
    this.shield.position.lerp(shieldTarget, Math.min(dt * 14, 1));

    // 右臂:迴旋斬 > 揮劍 > 集氣舉劍 > 走路擺動
    const charging = this.holdT > CHARGE_HOLD_MIN;
    if (this.spinT > 0) {
      // 手臂向前伸直、劍沿手臂方向外伸,水平掃過一圈
      this.armR.rotation.x = -Math.PI / 2;
      this.armR.rotation.z = 0;
      this.sword.rotation.x = Math.PI;
    } else if (this.swingT > 0) {
      const p = 1 - this.swingT / ATTACK_SWING_TIME;
      this.armR.rotation.x = -2.2 + p * 3.1;
      this.armR.rotation.z = Math.sin(p * Math.PI) * -0.7;
    } else if (charging) {
      this.armR.rotation.x = -2.6;
      this.armR.rotation.z = 0;
    } else {
      this.armR.rotation.x = swing * 0.8;
      this.armR.rotation.z = 0;
    }
    // 右前臂(肘):攻擊/集氣時保持伸直讓劍貼手,平時微屈
    this.forearmR.rotation.x =
      this.spinT > 0 || this.swingT > 0 || charging
        ? 0
        : rolling
          ? -1.4
          : -0.2 - Math.max(0, swing) * 0.4;
    if (this.spinT <= 0) this.sword.rotation.x = Math.PI / 2;

    // 集氣劍身發光:集氣中漸亮,滿氣時強烈閃爍 + 劍身刃色閃白
    const ratio = this.chargeRatio;
    if (ratio >= 1) {
      const flash = 0.5 + 0.5 * Math.sin(this.idlePhase * 18);
      this.bladeMaterial.emissiveIntensity = 1.6 + flash * 1.2;
      this.bladeMaterial.color.setHex(0xdce6f2).lerp(new THREE.Color(0xffffff), flash);
    } else {
      this.bladeMaterial.emissiveIntensity = ratio * 1.2;
      this.bladeMaterial.color.setHex(0xdce6f2);
    }

    // 身體:迴旋斬整圈旋轉、走路上下顛、待機呼吸、翻滾前傾
    this.body.rotation.y = this.spinT > 0 ? (1 - this.spinT / SPIN_TIME) * Math.PI * 2 : 0;
    const bob = moving ? Math.abs(Math.sin(this.walkPhase)) * 0.07 : 0;
    const breath = moving ? 0 : Math.sin(this.idlePhase) * 0.02;
    this.body.position.y = bob + breath;
    this.body.rotation.x = this.dodgeT > 0 ? 0.65 : this.gliding ? 0.45 : moving ? 0.08 : 0;
    // 滑翔時雙臂展開
    if (this.gliding) {
      this.armL.rotation.z = 1.2;
      this.armR.rotation.z = -1.2;
    } else if (!this.blocking && this.swingT <= 0 && this.spinT <= 0) {
      this.armL.rotation.z = 0;
    }
  }

  /**
   * 承受傷害(扣除防禦,無敵時間內免疫)。
   * 舉盾且攻擊來自正面時格擋:傷害減 85%、消耗體力(體力不足則格擋失效)。
   * @param fromPos 攻擊來源位置(用於格擋方向判定,省略則無法格擋)
   */
  takeDamage(raw: number, fromPos?: THREE.Vector3): { taken: number; blocked: boolean } {
    if (this.invulnerable || this.isDead) return { taken: 0, blocked: false };

    if (this.blocking && fromPos && this.stamina >= BLOCK_STAMINA_COST) {
      const fromDir = new THREE.Vector3()
        .subVectors(fromPos, this.mesh.position)
        .setY(0)
        .normalize();
      const facingDir = new THREE.Vector3(Math.sin(this.facing), 0, Math.cos(this.facing));
      if (fromDir.dot(facingDir) > BLOCK_ARC_COS) {
        this.stamina -= BLOCK_STAMINA_COST;
        const taken = Math.max(1, Math.round((raw - this.stats.def) * BLOCK_DAMAGE_FACTOR));
        this.hp = Math.max(0, this.hp - taken);
        this.invulnT = 0.25;
        return { taken, blocked: true };
      }
    }

    const dmg = Math.max(1, raw - this.stats.def);
    this.hp = Math.max(0, this.hp - dmg);
    this.invulnT = 0.5;
    this.hurtT = 0.3;
    return { taken: dmg, blocked: false };
  }

  /** 環境傷害(熔岩等):無視格擋與防禦,不觸發受擊無敵時間 */
  applyEnvironmentDamage(amount: number): void {
    if (this.isDead) return;
    this.hp = Math.max(0, this.hp - amount);
  }

  /** 緩速指定秒數(頭目寒霜爆) */
  chill(seconds: number): void {
    if (this.isDead) return;
    this.chillT = Math.max(this.chillT, seconds);
  }

  /** 點燃:持續灼燒(頭目熔核震爆);時間與每秒傷害取較大值疊加 */
  applyBurn(seconds: number, dps: number): void {
    if (this.isDead) return;
    this.burnT = Math.max(this.burnT, seconds);
    this.burnDps = Math.max(this.burnDps, dps);
  }

  /**
   * 推進灼燒計時(由 main 每幀呼叫,鏡像 Enemy.tickBurn)。
   * @returns 本幀應結算的灼燒傷害(每 0.5 秒跳一次),無則 0
   */
  tickBurn(dt: number): number {
    if (this.burnT <= 0 || this.isDead) return 0;
    this.burnT -= dt;
    this.burnTickAccum += dt;
    if (this.burnTickAccum >= 0.5) {
      this.burnTickAccum -= 0.5;
      return Math.round(this.burnDps * 0.5);
    }
    return 0;
  }

  /** 被頭目特殊技能擊退:沿來源反方向給予水平衝量 */
  shove(fromPos: THREE.Vector3, strength: number): void {
    if (this.isDead) return;
    const dir = new THREE.Vector3().subVectors(this.mesh.position, fromPos).setY(0);
    if (dir.lengthSq() < 1e-4) dir.set(Math.sin(this.facing), 0, Math.cos(this.facing));
    this.knockbackVel.copy(dir.normalize()).multiplyScalar(strength);
  }

  /** 虛空石瞬移:移動到指定座標並給予短暫無敵 */
  blinkTo(x: number, z: number): void {
    this.mesh.position.set(x, groundHeight(x, z), z);
    this.invulnT = Math.max(this.invulnT, 0.3);
  }
}
