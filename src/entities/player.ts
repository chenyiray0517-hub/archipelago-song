import * as THREE from "three";
import type { Input } from "../core/input";
import { PlayerStats } from "../systems/stats";
import { toonMaterial, addOutlines } from "../core/toon";
import { groundHeight, isWalkable } from "../world/terrain";

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

/** 攻擊判定參數:距離與面向夾角 */
export const ATTACK_RANGE = 3.4;
export const ATTACK_ARC_COS = Math.cos((75 * Math.PI) / 180);
/** 迴旋斬半徑(360° 無視面向) */
export const SPIN_RANGE = 4.5;

const COLOR = {
  tunic: 0x3e9e4f,
  tunicDark: 0x2e7a3c,
  skin: 0xf2c9a0,
  hair: 0xe8b84a,
  legs: 0xf0e8d0,
  boots: 0x7a5230,
  belt: 0x4a3520,
  blade: 0xdce6f2,
  guard: 0x3a5fd8,
  grip: 0x4a3a6a,
  gold: 0xf0c040,
  shield: 0x2e4fa8,
  shieldRim: 0x9aa4b8,
  glove: 0x6a4a2a,
  brow: 0xb8902e,
  eye: 0x35506e,
  collar: 0xf0d878,
};

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

  constructor() {
    this.hp = this.stats.maxHP;
    this.mp = this.stats.maxMP;

    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    // 腿與靴
    this.legL = this.buildLeg(0.17, "L");
    this.legR = this.buildLeg(-0.17, "R");
    this.body.add(this.legL, this.legR);

    // 綠色長袍軀幹:胸甲 + 外翻下襬 + 腰帶 + 領口
    const tunicMat = toonMaterial(COLOR.tunic);
    const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.44, 0.72, 14), tunicMat);
    chest.position.y = 1.4;
    // 外翻長袍下襬(腰帶以下罩住大腿,做出長衣剪影)
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.6, 0.5, 14, 1, true), tunicMat);
    skirt.position.y = 0.74;
    const collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.26, 0.34, 0.16, 14),
      toonMaterial(COLOR.collar),
    );
    collar.position.y = 1.78;
    const belt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.46, 0.48, 0.13, 14),
      toonMaterial(COLOR.belt),
    );
    belt.position.y = 0.98;
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.05), toonMaterial(COLOR.gold));
    buckle.position.set(0, 0.98, 0.47);
    // 腰側小包
    const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18, 0.12), toonMaterial(COLOR.glove));
    pouch.position.set(0.34, 0.9, 0.18);
    this.body.add(chest, skirt, collar, belt, buckle, pouch);

    // 脖子
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.2, 10), toonMaterial(COLOR.skin));
    neck.position.y = 1.86;
    this.body.add(neck);

    // 頭、髮、尖帽
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 14), toonMaterial(COLOR.skin));
    head.position.y = 2.08;
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.37, 16, 14), toonMaterial(COLOR.hair));
    hair.position.set(0, 2.16, -0.07);
    hair.scale.set(1, 0.85, 1);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.66, 14), toonMaterial(COLOR.tunicDark));
    cap.position.set(0, 2.54, -0.12);
    cap.rotation.x = -0.5;
    // 帽尖垂墜
    const capTip = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 10), toonMaterial(COLOR.tunic));
    capTip.position.set(0, 2.78, -0.5);
    capTip.rotation.x = -1.5;
    // 帽檐
    const capBand = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.05, 8, 16), toonMaterial(COLOR.gold));
    capBand.position.set(0, 2.28, -0.04);
    capBand.rotation.x = Math.PI / 2;
    this.body.add(head, hair, cap, capTip, capBand);

    // 臉:精靈尖耳 + 眼睛 + 眉 + 鼻 + 鬢髮
    const skinMat = toonMaterial(COLOR.skin);
    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 6), skinMat);
      ear.position.set(0.32 * side, 2.06, -0.02);
      ear.rotation.z = side * -1.1; // 尖耳朝外上方
      this.body.add(ear);

      const sideburn = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), toonMaterial(COLOR.hair));
      sideburn.position.set(0.28 * side, 1.96, -0.04);
      sideburn.scale.set(0.7, 1.1, 0.8);
      this.body.add(sideburn);

      const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), toonMaterial(0xffffff));
      eyeWhite.position.set(0.13 * side, 2.1, 0.29);
      eyeWhite.scale.set(0.8, 1.1, 0.6);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), toonMaterial(COLOR.eye));
      pupil.position.set(0.13 * side, 2.09, 0.34);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.035, 0.04), toonMaterial(COLOR.brow));
      brow.position.set(0.13 * side, 2.21, 0.3);
      brow.rotation.z = side * -0.12;
      this.body.add(eyeWhite, pupil, brow);
    }
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 6), skinMat);
    nose.position.set(0, 2.02, 0.34);
    nose.rotation.x = Math.PI / 2;
    this.body.add(nose);

    // 手臂(右手持劍)
    this.armL = this.buildArm(0.46, "L");
    this.armR = this.buildArm(-0.46, "R");
    this.armR.add(this.buildSword());
    this.body.add(this.armL, this.armR);

    // 盾牌(平時揹背後,防禦時舉到身前)
    const shield = new THREE.Group();
    const face = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.46, 0.07, 16),
      toonMaterial(COLOR.shield),
    );
    face.rotation.x = Math.PI / 2;
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.44, 0.05, 8, 16),
      toonMaterial(COLOR.shieldRim),
    );
    const emblem = new THREE.Mesh(new THREE.OctahedronGeometry(0.12), toonMaterial(COLOR.gold));
    emblem.position.z = -0.06;
    emblem.scale.set(1, 1.4, 0.4);
    shield.add(face, rim, emblem);
    shield.position.copy(this.shieldHomePos);
    this.shield = shield;
    this.body.add(shield);

    addOutlines(this.mesh);
    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });

    this.respawn();
  }

  /** 大腿(髖關節群)+ 可彎曲小腿群(膝)+ 靴 */
  private buildLeg(x: number, side: "L" | "R"): THREE.Group {
    const leg = new THREE.Group();
    const thigh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.12, 0.36, 10),
      toonMaterial(COLOR.legs),
    );
    thigh.position.y = -0.18;

    const shin = new THREE.Group();
    shin.position.y = -0.36;
    const calf = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.1, 0.32, 10),
      toonMaterial(COLOR.legs),
    );
    calf.position.y = -0.16;
    // 靴:鞋身 + 外翻靴口
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.18, 0.36), toonMaterial(COLOR.boots));
    boot.position.set(0, -0.36, 0.05);
    const bootCuff = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.13, 0.12, 10),
      toonMaterial(COLOR.boots),
    );
    bootCuff.position.y = -0.28;
    shin.add(calf, boot, bootCuff);
    leg.add(thigh, shin);
    leg.position.set(x, 0.72, 0);
    if (side === "L") this.shinL = shin;
    else this.shinR = shin;
    return leg;
  }

  /** 肩甲 + 上臂 + 可彎曲前臂群(肘)+ 護腕 + 手 */
  private buildArm(x: number, side: "L" | "R"): THREE.Group {
    const arm = new THREE.Group();
    const pauldron = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), toonMaterial(COLOR.guard));
    pauldron.position.y = 0.02;
    pauldron.scale.set(1, 0.8, 1);
    const upper = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.085, 0.34, 10),
      toonMaterial(COLOR.tunic),
    );
    upper.position.y = -0.18;

    const forearm = new THREE.Group();
    forearm.position.y = -0.35;
    const lower = new THREE.Mesh(
      new THREE.CylinderGeometry(0.085, 0.07, 0.26, 10),
      toonMaterial(COLOR.skin),
    );
    lower.position.y = -0.13;
    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.035, 8, 12), toonMaterial(COLOR.glove));
    cuff.position.y = -0.02;
    cuff.rotation.x = Math.PI / 2;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), toonMaterial(COLOR.glove));
    hand.position.y = -0.25;
    forearm.add(lower, cuff, hand);

    arm.add(pauldron, upper, forearm);
    arm.position.set(x, 1.7, 0);
    if (side === "L") this.forearmL = forearm;
    else this.forearmR = forearm;
    return arm;
  }

  /** 大師之劍風格:漸縮劍身 + 藍色護手 + 金色圓頭;劍身材質供集氣發光 */
  private buildSword(): THREE.Group {
    const sword = new THREE.Group();
    this.bladeMaterial = toonMaterial(COLOR.blade, { emissive: 0x66ccff, emissiveIntensity: 0 });
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.13, 1.0, 0.035), this.bladeMaterial);
    blade.position.y = 0.62;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.24, 4), this.bladeMaterial);
    tip.position.y = 1.24;
    tip.rotation.y = Math.PI / 4;
    const ridge = new THREE.Mesh(
      new THREE.BoxGeometry(0.035, 0.95, 0.05),
      toonMaterial(COLOR.shieldRim),
    );
    ridge.position.y = 0.6;
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.09, 0.09), toonMaterial(COLOR.guard));
    guard.position.y = 0.1;
    const wing = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 6), toonMaterial(COLOR.guard));
    wing.position.set(0.2, 0.16, 0);
    const wing2 = wing.clone();
    wing2.position.x = -0.2;
    const grip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8),
      toonMaterial(COLOR.grip),
    );
    grip.position.y = -0.1;
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), toonMaterial(COLOR.gold));
    pommel.position.y = -0.28;
    sword.add(blade, tip, ridge, guard, wing, wing2, grip, pommel);
    // 握在手中,劍尖朝前
    sword.position.y = -0.58;
    sword.rotation.x = Math.PI / 2;
    this.sword = sword;
    return sword;
  }

  /** 是否處於無敵時間(閃避中) */
  get invulnerable(): boolean {
    return this.invulnT > 0;
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
