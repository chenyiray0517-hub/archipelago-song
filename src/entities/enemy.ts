import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import { groundHeight } from "../world/terrain";

export type EnemyKind =
  | "slime"
  | "elite"
  | "vine"
  | "windGuardian"
  | "ember"
  | "earthGuardian"
  | "frost"
  | "frostGuardian"
  | "deep"
  | "voidGuardian"
  | "voidLord"
  | "sand"
  | "magmaGuardian"
  | "reef"
  | "coralGuardian"
  | "spore"
  | "lifeGuardian";

type EnemyState = "patrol" | "chase" | "windup" | "lunge" | "recover" | "dying" | "dead";

const CHASE_RANGE = 12;
const ATTACK_TRIGGER_RANGE = 3.2;
const LEASH_RANGE = 20;
const RESPAWN_SECONDS = 25;
const WINDUP_TIME = 0.45;
const LUNGE_TIME = 0.35;
const LUNGE_SPEED = 14;
const LUNGE_HIT_RANGE = 1.7;
const RECOVER_TIME = 0.8;
const DYING_TIME = 0.3;

interface EnemyConfig {
  hp: number;
  dmg: number;
  speed: number;
  scale: number;
  color: number;
}

const CONFIGS: Record<EnemyKind, EnemyConfig> = {
  slime: { hp: 30, dmg: 8, speed: 3.4, scale: 1, color: 0x52c878 },
  elite: { hp: 120, dmg: 16, speed: 2.8, scale: 1.9, color: 0xe8884a },
  // 翠風林島(企劃書 5–12 級帶)
  vine: { hp: 60, dmg: 12, speed: 3.8, scale: 1.15, color: 0x2e8b57 },
  windGuardian: { hp: 220, dmg: 20, speed: 3.0, scale: 2.3, color: 0x4ad8c8 },
  // 燼岩火山島(企劃書 12–20 級帶)
  ember: { hp: 90, dmg: 16, speed: 4.0, scale: 1.25, color: 0xe85030 },
  earthGuardian: { hp: 320, dmg: 24, speed: 2.8, scale: 2.6, color: 0xb87333 },
  // 霜雪峰島(企劃書 20–28 級帶)
  frost: { hp: 130, dmg: 20, speed: 3.6, scale: 1.3, color: 0x9adcff },
  frostGuardian: { hp: 450, dmg: 28, speed: 2.6, scale: 3.0, color: 0xe8f4ff },
  // 沉沒古城(企劃書 28–35 級帶)
  deep: { hp: 180, dmg: 24, speed: 3.4, scale: 1.4, color: 0x3a5a9a },
  voidGuardian: { hp: 550, dmg: 30, speed: 2.8, scale: 2.8, color: 0x6a3a9a },
  // 虛空之心(最終頭目)
  voidLord: { hp: 800, dmg: 35, speed: 3.2, scale: 3.6, color: 0x2a1a3a },
  // 第二海・熔砂島(界海之後的後期帶)
  sand: { hp: 200, dmg: 26, speed: 3.8, scale: 1.4, color: 0xe0b860 },
  magmaGuardian: { hp: 680, dmg: 34, speed: 2.9, scale: 3.0, color: 0xff5a2c },
  // 第二海・珊瑚礁島:礁石果凍 + 珊瑚守護者(掉碧波石)
  reef: { hp: 210, dmg: 27, speed: 3.7, scale: 1.4, color: 0x46c8b8 },
  coralGuardian: { hp: 700, dmg: 34, speed: 2.9, scale: 3.0, color: 0x2aa6c0 },
  // 第二海・靈脈島:孢子果凍 + 靈脈守護者(掉翠生石)
  spore: { hp: 220, dmg: 28, speed: 3.9, scale: 1.45, color: 0x86d24a },
  lifeGuardian: { hp: 720, dmg: 35, speed: 2.9, scale: 3.1, color: 0x3ab060 },
};

/**
 * 果凍怪(Chuchu 風格):跳躍移動,蓄力 → 突進攻擊,受擊擊退,死亡爆裂。
 * 狀態機:patrol/chase/windup/lunge/recover/dying/dead。
 */
export class Enemy {
  readonly mesh: THREE.Group;
  readonly kind: EnemyKind;

  hp: number;
  state: EnemyState = "patrol";

  private readonly config: EnemyConfig;
  private readonly home: THREE.Vector3;
  private waypoint: THREE.Vector3;
  private attackCd = 0;
  private stateT = 0;
  private respawnT = 0;
  private flashT = 0;
  /** 冰凍剩餘秒數(凍結中不移動不攻擊,仍可受擊) */
  freezeT = 0;
  /** 灼燒剩餘秒數(溶岩石熔岩噴發;持續扣血,傷害由 main 每 0.5s 結算) */
  burnT = 0;
  private burnDps = 0;
  private burnTickAccum = 0;
  /** 麻痺剩餘秒數(雷光果連鎖閃電;定身不動,仍可受擊) */
  stunT = 0;
  private hopPhase = Math.random() * Math.PI * 2;
  private lungeDir = new THREE.Vector3();
  private lungeHitDone = false;
  private knockback = new THREE.Vector3();
  private readonly baseColor: THREE.Color;
  private readonly body: THREE.Group;
  private readonly blob: THREE.Mesh;
  private readonly blobMaterial: THREE.MeshToonMaterial;
  private readonly hpBar: THREE.Sprite;
  private readonly hpCanvas: HTMLCanvasElement;
  private readonly hpTexture: THREE.CanvasTexture;

  constructor(kind: EnemyKind, x: number, z: number) {
    this.kind = kind;
    this.config = CONFIGS[kind];
    this.hp = this.config.hp;
    this.home = new THREE.Vector3(x, 0, z);
    this.waypoint = this.home.clone();
    this.baseColor = new THREE.Color(this.config.color);

    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    // 果凍身體:圓滾水滴狀,半透明
    this.blobMaterial = toonMaterial(this.config.color, { transparent: true, opacity: 0.88 });
    this.blob = new THREE.Mesh(new THREE.SphereGeometry(0.8, 14, 12), this.blobMaterial);
    this.blob.scale.set(1, 0.85, 1);
    this.blob.position.y = 0.62;
    const crown = new THREE.Mesh(
      new THREE.ConeGeometry(0.28, 0.45, 10),
      toonMaterial(this.config.color, { transparent: true, opacity: 0.88 }),
    );
    crown.position.y = 1.35;
    this.body.add(this.blob, crown);

    // 卡通大眼
    const eyeWhiteMat = toonMaterial(0xffffff);
    const pupilMat = toonMaterial(0x202030);
    for (const side of [-1, 1]) {
      const white = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), eyeWhiteMat);
      white.position.set(0.3 * side, 0.78, 0.62);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), pupilMat);
      pupil.position.set(0.3 * side, 0.78, 0.76);
      this.body.add(white, pupil);
    }

    addOutlines(this.body);
    this.body.traverse((child) => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });

    this.hpCanvas = document.createElement("canvas");
    this.hpCanvas.width = 96;
    this.hpCanvas.height = 18;
    this.hpTexture = new THREE.CanvasTexture(this.hpCanvas);
    this.hpBar = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: this.hpTexture, depthTest: false }),
    );
    this.hpBar.scale.set(2.0, 0.38, 1);
    this.hpBar.position.y = 2.0;
    this.drawHpBar();
    this.mesh.add(this.hpBar);

    this.mesh.scale.setScalar(this.config.scale);
    this.mesh.position.set(x, groundHeight(x, z), z);
  }

  get isDead(): boolean {
    return this.state === "dying" || this.state === "dead";
  }

  /**
   * 每幀更新 AI 與動畫。
   * @returns 本幀突進命中玩家則回傳傷害值,否則 0
   */
  update(dt: number, playerPos: THREE.Vector3, playerDead: boolean): number {
    if (this.state === "dead") {
      this.respawnT -= dt;
      if (this.respawnT <= 0) this.revive();
      return 0;
    }
    if (this.state === "dying") {
      this.stateT -= dt;
      // 爆裂:先膨脹再縮小消失
      const p = 1 - Math.max(this.stateT, 0) / DYING_TIME;
      const s = p < 0.4 ? 1 + p * 0.9 : Math.max(1.36 * (1 - (p - 0.4) / 0.6), 0.01);
      this.body.scale.setScalar(s);
      if (this.stateT <= 0) {
        this.state = "dead";
        this.respawnT = RESPAWN_SECONDS;
        this.mesh.visible = false;
      }
      return 0;
    }

    this.attackCd = Math.max(0, this.attackCd - dt);
    this.flashT = Math.max(0, this.flashT - dt);

    // 冰凍:定格不動,只更新顏色
    if (this.freezeT > 0) {
      this.freezeT -= dt;
      this.blobMaterial.color.lerpColors(this.baseColor, new THREE.Color(0xbfeaff), 0.75);
      return 0;
    }

    // 麻痺:定身不動,泛黃白閃爍
    if (this.stunT > 0) {
      this.stunT -= dt;
      const flicker = 0.4 + 0.4 * Math.abs(Math.sin(this.stunT * 30));
      this.blobMaterial.color.lerpColors(this.baseColor, new THREE.Color(0xfff080), flicker);
      return 0;
    }

    const pos = this.mesh.position;
    const distToPlayer = pos.distanceTo(playerPos);
    const distToHome = pos.distanceTo(this.home);
    let dealt = 0;

    // 擊退衰減
    if (this.knockback.lengthSq() > 0.01) {
      pos.addScaledVector(this.knockback, dt);
      this.knockback.multiplyScalar(Math.max(1 - dt * 8, 0));
    }

    switch (this.state) {
      case "windup": {
        this.stateT -= dt;
        // 壓扁蓄力 + 抖動
        this.body.scale.y = 0.6 + Math.sin(this.stateT * 60) * 0.04;
        this.body.scale.x = this.body.scale.z = 1.25;
        if (this.stateT <= 0) {
          this.lungeDir.subVectors(playerPos, pos).setY(0).normalize();
          this.lungeHitDone = false;
          this.state = "lunge";
          this.stateT = LUNGE_TIME;
        }
        break;
      }
      case "lunge": {
        this.stateT -= dt;
        pos.addScaledVector(this.lungeDir, LUNGE_SPEED * dt);
        // 朝突進方向拉長
        this.body.scale.set(0.8, 0.7, 1.35);
        this.mesh.rotation.y = Math.atan2(this.lungeDir.x, this.lungeDir.z);
        if (!this.lungeHitDone && !playerDead && distToPlayer < LUNGE_HIT_RANGE) {
          this.lungeHitDone = true;
          dealt = this.config.dmg;
        }
        if (this.stateT <= 0) {
          this.state = "recover";
          this.stateT = RECOVER_TIME;
        }
        break;
      }
      case "recover": {
        this.stateT -= dt;
        this.body.scale.setScalar(1);
        if (this.stateT <= 0) this.state = "chase";
        break;
      }
      default: {
        // patrol / chase 決策
        if (playerDead) {
          this.state = "patrol";
        } else if (distToHome > LEASH_RANGE) {
          this.state = "patrol";
          this.waypoint.copy(this.home);
        } else if (distToPlayer <= ATTACK_TRIGGER_RANGE && this.attackCd <= 0) {
          this.state = "windup";
          this.stateT = WINDUP_TIME;
          this.attackCd = 1.8;
          break;
        } else if (distToPlayer <= CHASE_RANGE) {
          this.state = "chase";
        } else {
          this.state = "patrol";
        }

        const target = this.state === "chase" ? playerPos : this.waypoint;
        if (this.state === "patrol" && pos.distanceTo(this.waypoint) < 1) this.pickWaypoint();

        const dir = new THREE.Vector3().subVectors(target, pos);
        dir.y = 0;
        const speed = this.state === "chase" ? this.config.speed : this.config.speed * 0.5;
        if (dir.lengthSq() > 0.01) {
          dir.normalize();
          pos.addScaledVector(dir, speed * dt);
          this.mesh.rotation.y = Math.atan2(dir.x, dir.z);
        }

        // 跳躍式移動:彈跳 + 擠壓伸展
        this.hopPhase += dt * (this.state === "chase" ? 9 : 5);
        const bounce = Math.abs(Math.sin(this.hopPhase));
        this.body.position.y = bounce * 0.35;
        this.body.scale.y = 0.8 + bounce * 0.3;
        this.body.scale.x = this.body.scale.z = 1.1 - bounce * 0.15;
        break;
      }
    }

    // 受擊閃白 / 蓄力轉紅
    if (this.flashT > 0) {
      this.blobMaterial.color.setHex(0xffffff);
    } else if (this.state === "windup") {
      this.blobMaterial.color.lerpColors(this.baseColor, new THREE.Color(0xff5544), 0.55);
    } else {
      this.blobMaterial.color.copy(this.baseColor);
    }
    // 灼燒中泛橘紅(疊在前面的基礎色上)
    if (this.burnT > 0 && this.flashT <= 0) {
      this.blobMaterial.color.lerp(new THREE.Color(0xff6a2c), 0.5);
    }

    pos.y = groundHeight(pos.x, pos.z);
    return dealt;
  }

  /** 冰凍指定秒數(霜語晶冰箭) */
  freeze(seconds: number): void {
    if (this.isDead) return;
    this.freezeT = Math.max(this.freezeT, seconds);
  }

  /** 點燃:持續灼燒(溶岩石熔岩噴發);時間與每秒傷害取較大值疊加 */
  burn(seconds: number, dps: number): void {
    if (this.isDead) return;
    this.burnT = Math.max(this.burnT, seconds);
    this.burnDps = Math.max(this.burnDps, dps);
  }

  /** 麻痺指定秒數(雷光果連鎖閃電) */
  stun(seconds: number): void {
    if (this.isDead) return;
    this.stunT = Math.max(this.stunT, seconds);
  }

  /**
   * 推進灼燒計時(由 main 每幀呼叫)。
   * @returns 本幀應結算的灼燒傷害(每 0.5 秒跳一次),無則 0;由 main 走死亡/掉落流程
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

  /**
   * 承受傷害:閃白 + 沿攻擊方向擊退。
   * @returns 是否因此死亡
   */
  takeDamage(amount: number, fromDir?: THREE.Vector3): boolean {
    if (this.isDead) return false;
    this.hp = Math.max(0, this.hp - amount);
    this.flashT = 0.12;
    if (fromDir) this.knockback.copy(fromDir).setY(0).normalize().multiplyScalar(9);
    this.drawHpBar();
    if (this.hp <= 0) {
      this.state = "dying";
      this.stateT = DYING_TIME;
      this.hpBar.visible = false;
      return true;
    }
    return false;
  }

  private revive(): void {
    this.hp = this.config.hp;
    this.state = "patrol";
    this.freezeT = 0;
    this.burnT = 0;
    this.burnDps = 0;
    this.burnTickAccum = 0;
    this.stunT = 0;
    this.mesh.visible = true;
    this.hpBar.visible = true;
    this.body.scale.setScalar(1);
    this.body.position.y = 0;
    this.knockback.set(0, 0, 0);
    this.mesh.position.set(this.home.x, groundHeight(this.home.x, this.home.z), this.home.z);
    this.drawHpBar();
  }

  private pickWaypoint(): void {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 6;
    this.waypoint.set(
      this.home.x + Math.cos(angle) * radius,
      0,
      this.home.z + Math.sin(angle) * radius,
    );
  }

  private drawHpBar(): void {
    const ctx = this.hpCanvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, 96, 18);
    ctx.fillStyle = "rgba(0,0,0,0.65)";
    ctx.fillRect(0, 0, 96, 18);
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(1, 1, 94 * (this.hp / this.config.hp), 16);
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(0,0,0,0.8)";
    ctx.strokeText(`${this.hp}/${this.config.hp}`, 48, 10);
    ctx.fillStyle = "#fff";
    ctx.fillText(`${this.hp}/${this.config.hp}`, 48, 10);
    this.hpTexture.needsUpdate = true;
  }
}
