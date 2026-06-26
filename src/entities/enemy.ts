import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import { groundHeight, seaOf } from "../world/terrain";
import { pickEnemyModel } from "../world/enemyModels";
import type { SfxName } from "../core/audio";

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
  | "lifeGuardian"
  | "marsh"
  | "brine"
  | "solar";

type EnemyState =
  | "patrol"
  | "chase"
  | "windup"
  | "lunge"
  | "recover"
  | "special"
  | "dying"
  | "dead";

/** 頭目特殊技能附加效果:knockback 純擊退、chill 緩速玩家、burn 點燃玩家、drain 吸血回復自身 */
export type SpecialEffect = "knockback" | "chill" | "burn" | "drain";

/** 頭目特殊技能引爆事件:由 main 每幀讀取後清空,負責跳字/音效/結算玩家傷害與狀態 */
export interface SpecialEvent {
  name: string;
  /** 引爆音效名(對應 audio.sfx) */
  sfx: SfxName;
  /** 特效顏色(粒子爆裂 + 警示跳字) */
  color: number;
  dmg: number;
  knock: number;
  effect: SpecialEffect;
  /** 世界座標下的作用半徑(多人:由 main 對範圍內每位玩家分別判定)(階段 4d) */
  radius: number;
  /** 玩家是否落在範圍內(否則只播特效) */
  hitPlayer: boolean;
  /** drain 效果回復自身的量(供跳字顯示) */
  healed: number;
}

interface SpecialDef {
  name: string;
  sfx: SfxName;
  color: number;
  /** 世界座標下的作用半徑 */
  radius: number;
  /** 傷害 = config.dmg × dmgMul */
  dmgMul: number;
  /** 命中時推開玩家的力道 */
  knock: number;
  /** 蓄力預警時間(秒) */
  telegraph: number;
  /** 冷卻(秒) */
  cooldown: number;
  effect: SpecialEffect;
}

/** 各島頭目史萊姆的專屬特殊技能(僅守護者/菁英/魔王擁有) */
const SPECIALS: Partial<Record<EnemyKind, SpecialDef>> = {
  // 曙光嶼菁英:怒震波——強力擊退
  elite: { name: "怒震波", sfx: "quake", color: 0xffae5a, radius: 6.5, dmgMul: 1.4, knock: 14, telegraph: 0.7, cooldown: 7, effect: "knockback" },
  // 翠風林・風之守護者:旋風斬——大範圍強擊退
  windGuardian: { name: "旋風斬", sfx: "spin", color: 0x7ff0e0, radius: 8.0, dmgMul: 1.1, knock: 24, telegraph: 0.6, cooldown: 6, effect: "knockback" },
  // 燼岩火山・大地守護者:震地裂——高傷大範圍
  earthGuardian: { name: "震地裂", sfx: "quake", color: 0xc88a4a, radius: 8.5, dmgMul: 1.6, knock: 18, telegraph: 0.85, cooldown: 8, effect: "knockback" },
  // 霜雪峰・霜之守護者:寒霜爆——命中緩速玩家
  frostGuardian: { name: "寒霜爆", sfx: "shatter", color: 0xbfeaff, radius: 7.5, dmgMul: 1.2, knock: 8, telegraph: 0.7, cooldown: 7, effect: "chill" },
  // 沉沒古城・虛空守護者:虛空波動——吸取玩家生命回復自身
  voidGuardian: { name: "虛空波動", sfx: "blink", color: 0x9a5ad0, radius: 7.0, dmgMul: 1.4, knock: 10, telegraph: 0.75, cooldown: 8, effect: "drain" },
  // 虛空之心・最終魔王:虛空崩裂——超大範圍 + 吸血
  voidLord: { name: "虛空崩裂", sfx: "blink", color: 0x7a3ad0, radius: 10.0, dmgMul: 1.6, knock: 16, telegraph: 0.85, cooldown: 7, effect: "drain" },
  // 第二海・熔砂島・熔岩守護者:熔核震爆——命中點燃玩家
  magmaGuardian: { name: "熔核震爆", sfx: "lava", color: 0xff5a2c, radius: 8.0, dmgMul: 1.4, knock: 12, telegraph: 0.75, cooldown: 7, effect: "burn" },
  // 第二海・珊瑚礁・珊瑚守護者:潮汐衝擊——大範圍強擊退
  coralGuardian: { name: "潮汐衝擊", sfx: "aqua", color: 0x46c8e0, radius: 8.5, dmgMul: 1.3, knock: 20, telegraph: 0.7, cooldown: 7, effect: "knockback" },
  // 第二海・靈脈島・靈脈守護者:靈脈汲取——強力吸血回復
  lifeGuardian: { name: "靈脈汲取", sfx: "life", color: 0x5ae07a, radius: 7.5, dmgMul: 1.3, knock: 8, telegraph: 0.75, cooldown: 6, effect: "drain" },
};

/** drain 效果回復自身傷害量的倍率 */
const DRAIN_HEAL_MUL = 1.5;
/** 引爆後的擴散特效持續時間 */
const BLAST_TIME = 0.45;

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
/** 模型模式死亡:多留時間播完 Death 動畫再消失(果凍模式仍用 DYING_TIME 的爆裂) */
const MODEL_DYING_TIME = 1.1;

interface EnemyConfig {
  hp: number;
  dmg: number;
  speed: number;
  scale: number;
  color: number;
}

/**
 * 第二海(x ≥ SEA_BORDER_X)敵人強度倍率:血量與傷害大幅提升,
 * 拉開第一海/第二海難度梯度(Rai 指定)。依生成座標 seaOf(x) 判定。
 */
const SECOND_SEA_HP_MUL = 2.5;
const SECOND_SEA_DMG_MUL = 2;

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
  // 第二海・迷霧沼島:沼氣果凍(委託清剿,無守護者)
  marsh: { hp: 215, dmg: 27, speed: 3.8, scale: 1.42, color: 0x6a9a6a },
  // 第二海・鹽晶島:鹽晶果凍
  brine: { hp: 230, dmg: 26, speed: 3.6, scale: 1.45, color: 0xc8e8f0 },
  // 第二海・烈陽礁:熾光果凍
  solar: { hp: 225, dmg: 29, speed: 4.0, scale: 1.4, color: 0xf0a838 },
};

/**
 * 敵人種類 → 怪物模型鍵(對應 enemyModels.MODELS)。
 * 列入者用帶骨骼動畫的 glTF 模型;未列或載入失敗者回退程序化果凍 blob。
 * 全 20 種各對應一隻 Quaternius CC0 怪物,依島嶼主題挑選(Big/Blob/Flying 三類混用)。
 */
const KIND_MODEL: Partial<Record<EnemyKind, string>> = {
  // 曙光嶼
  slime: "GreenBlob",
  elite: "GreenSpikyBlob",
  // 翠風林
  vine: "Mushnub",
  windGuardian: "Hywirl",
  // 燼岩火山
  ember: "Goleling",
  earthGuardian: "Goleling_Evolved",
  // 霜雪峰
  frost: "Glub",
  frostGuardian: "Yeti",
  // 沉沒古城 / 虛空
  deep: "Fish",
  voidGuardian: "Ghost",
  voidLord: "BlueDemon",
  // 第二海·熔砂島
  sand: "Cactoro",
  magmaGuardian: "Demon",
  // 第二海·珊瑚礁
  reef: "Squidle",
  coralGuardian: "Glub_Evolved",
  // 第二海·靈脈島
  spore: "Mushnub_Evolved",
  lifeGuardian: "MushroomKing",
  // 第二海·迷霧沼 / 鹽晶 / 烈陽礁
  marsh: "Frog",
  brine: "PinkBlob",
  solar: "Birb",
};

/**
 * FSM 邏輯動作 → 模型 clip 候選名(取第一個存在的);不同怪物 clip 命名不同故用候選序。
 * 三類命名:Blob=Idle/Walk/Bite_Front/HitRecieve、Big=Idle/Walk|Run/Punch|Weapon/HitReact、
 * Flying=Flying_Idle/Fast_Flying/Headbutt|Punch/HitReact。idle 須含 Flying_Idle 否則飛行怪沒待機動畫。
 */
const ANIM_CANDIDATES: Record<string, string[]> = {
  idle: ["Idle", "Flying_Idle"],
  move: ["Walk", "Run", "Fast_Flying", "Flying"],
  attack: ["Bite_Front", "Punch", "Headbutt", "Weapon", "Attack"],
  hit: ["HitRecieve", "HitReact"],
  death: ["Death"],
};

/**
 * 果凍怪(Chuchu 風格)或骨骼動畫怪物:跳躍/行走移動,蓄力 → 突進攻擊,受擊擊退,死亡。
 * 狀態機:patrol/chase/windup/lunge/recover/dying/dead。
 * 視覺有兩種:① 程式組裝果凍 blob(原始,壓扁/彈跳/爆裂全靠 body 變形);
 * ② glTF 怪物模型(KIND_MODEL 有對應且載入成功),改用 AnimationMixer 播動畫。
 */
export class Enemy {
  readonly mesh: THREE.Group;
  readonly kind: EnemyKind;

  hp: number;
  /** 最大血量(= config.hp × 區域倍率;血條分母、drain 回血上限皆用此) */
  readonly maxHp: number;
  /** 實際傷害(= config.dmg × 區域倍率;普攻與特殊技基礎傷害皆用此) */
  readonly dmg: number;
  state: EnemyState = "patrol";

  // ── 多人「房主權威」傀儡模式(階段 3a)──────────────────────
  // remote = true 時本機不模擬此敵人,改由房主快照驅動(updateRemote/applyNetSnapshot);
  // 受擊只記 pendingNetDamage 等 main 送給房主結算,不在本機扣血/宣告死亡。
  /** 是否為遠端傀儡(由 main 每幀依連線角色設定) */
  remote = false;
  /** 在 enemies 陣列中的索引,作為跨端同步的穩定 id(由 main 設定一次) */
  netIndex = -1;
  /** 遠端模式下累積的待送傷害(main 每幀排空後送房主) */
  pendingNetDamage = 0;
  // 遠端模式下累積的待送控場(冰凍/灼燒/麻痺;main 每幀排空後送房主權威套用)(階段 3b)
  pendingNetFreeze = 0;
  pendingNetStun = 0;
  pendingNetBurnSec = 0;
  pendingNetBurnDps = 0;
  /** 遠端傀儡狀態旗標(由房主快照驅動):0 無 / 1 蓄力預警 / 2 引爆 / 3 冰凍 / 4 麻痺 / 5 灼燒 */
  private remoteFlag = 0;
  private remoteRingT = 0;
  private netTarget = new THREE.Vector3();
  private netYaw = 0;
  private netDead = false;

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
  /** 特殊技能引爆事件:由 main 每幀讀取後清空(無則 null) */
  specialEvent: SpecialEvent | null = null;
  /** 特殊技能階段:""=未施放、telegraph=蓄力預警、blast=擴散中(供 HUD/測試讀取) */
  specialPhase: "" | "telegraph" | "blast" = "";
  private hopPhase = Math.random() * Math.PI * 2;
  private lungeDir = new THREE.Vector3();
  private lungeHitDone = false;
  private knockback = new THREE.Vector3();
  private readonly baseColor: THREE.Color;
  private readonly body: THREE.Group;
  /** 果凍模式專用(模型模式為 undefined) */
  private readonly blob?: THREE.Mesh;
  private readonly blobMaterial?: THREE.MeshToonMaterial;
  // ── 模型模式(useModel=true 時啟用 glTF + 骨骼動畫)──────────────
  /** 是否使用 glTF 模型(否則程序化果凍 blob) */
  private readonly useModel: boolean;
  private mixer: THREE.AnimationMixer | null = null;
  private readonly actions = new Map<string, THREE.AnimationAction>();
  private currentAction: THREE.AnimationAction | null = null;
  /** 受擊/控場著色目標材質(果凍:blob 本體;模型:所有 toon 材質,各自 clone 過避免共用) */
  private readonly tintMats: THREE.MeshToonMaterial[] = [];
  private readonly tintBase: THREE.Color[] = [];
  /** 死亡狀態持續時間(模型留時間播 Death,果凍走短爆裂) */
  private readonly dyingTime: number;
  private readonly hpBar: THREE.Sprite;
  private readonly hpCanvas: HTMLCanvasElement;
  private readonly hpTexture: THREE.CanvasTexture;
  /** 本島頭目專屬特殊技能(雜魚為 null) */
  private readonly special: SpecialDef | null;
  private specialCd = 0;
  private specialRing: THREE.Mesh | null = null;
  private specialRingMat: THREE.MeshBasicMaterial | null = null;
  private specialRingT = 0;

  constructor(kind: EnemyKind, x: number, z: number) {
    this.kind = kind;
    this.config = CONFIGS[kind];
    // 第二海敵人大幅強化:依生成座標套區域倍率
    const sea2 = seaOf(x) === 2;
    this.maxHp = Math.round(this.config.hp * (sea2 ? SECOND_SEA_HP_MUL : 1));
    this.dmg = Math.round(this.config.dmg * (sea2 ? SECOND_SEA_DMG_MUL : 1));
    this.hp = this.maxHp;
    this.home = new THREE.Vector3(x, 0, z);
    this.waypoint = this.home.clone();
    this.baseColor = new THREE.Color(this.config.color);
    this.special = SPECIALS[kind] ?? null;
    // 開場給部分冷卻,避免玩家一接觸就被引爆
    this.specialCd = this.special ? this.special.cooldown * 0.6 : 0;

    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    // 嘗試取怪物模型;取到走模型分支,否則回退程序化果凍 blob
    const modelKey = KIND_MODEL[kind];
    const proto = modelKey ? pickEnemyModel(modelKey) : null;
    this.useModel = proto !== null;
    this.dyingTime = this.useModel ? MODEL_DYING_TIME : DYING_TIME;

    if (proto) {
      // ── 模型分支:加入場景、建 mixer 與動作、為每材質 clone 一份著色目標 ──
      this.body.add(proto.scene);
      // SkeletonUtils.clone 會共用材質,而本機要逐隻變色(閃白/冰凍),故 clone 出獨立材質
      proto.scene.traverse((c) => {
        if (c instanceof THREE.Mesh && c.material instanceof THREE.MeshToonMaterial) {
          const m = c.material.clone();
          c.material = m;
          this.tintMats.push(m);
          this.tintBase.push(m.color.clone());
        }
      });
      this.mixer = new THREE.AnimationMixer(proto.scene);
      for (const [logical, cands] of Object.entries(ANIM_CANDIDATES)) {
        const clip = proto.clips.find((c) => cands.includes(c.name));
        if (clip) this.actions.set(logical, this.mixer.clipAction(clip));
      }
      this.play("idle");
    } else {
      // ── 果凍分支(原始程序化外觀)──────────────────────────────
      // 頭目級(菁英/守護者/魔王)外觀更兇:長角 + 怒眉 + 大嘴
      const boss = this.config.scale >= 1.8;
      const accent = new THREE.Color(this.config.color).offsetHSL(0, 0.1, -0.28).getHex();

      // 果凍身體:圓滾水滴狀,半透明
      this.blobMaterial = toonMaterial(this.config.color, { transparent: true, opacity: 0.86 });
      this.blob = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 14), this.blobMaterial);
      this.blob.scale.set(1, 0.85, 1);
      this.blob.position.y = 0.62;
      const crown = new THREE.Mesh(
        new THREE.ConeGeometry(0.26, boss ? 0.6 : 0.45, 10),
        toonMaterial(this.config.color, { transparent: true, opacity: 0.86 }),
      );
      crown.position.y = boss ? 1.42 : 1.35;
      crown.rotation.z = 0.12;
      this.body.add(this.blob, crown);

      // 頭目長角:頭頂兩側往外上方翹
      if (boss) {
        const hornMat = toonMaterial(accent);
        for (const side of [-1, 1]) {
          const horn = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.5, 8), hornMat);
          horn.position.set(0.42 * side, 1.18, -0.05);
          horn.rotation.z = side * -0.7;
          this.body.add(horn);
        }
      }

      // 卡通大眼 + 眉毛
      const eyeWhiteMat = toonMaterial(0xffffff);
      const pupilMat = toonMaterial(0x202030);
      const browMat = toonMaterial(accent);
      const eyeR = boss ? 0.2 : 0.17;
      for (const side of [-1, 1]) {
        const white = new THREE.Mesh(new THREE.SphereGeometry(eyeR, 12, 10), eyeWhiteMat);
        white.position.set(0.3 * side, 0.82, 0.6);
        white.scale.set(0.85, 1.05, 0.7);
        const pupil = new THREE.Mesh(new THREE.SphereGeometry(eyeR * 0.5, 8, 6), pupilMat);
        pupil.position.set(0.3 * side + 0.02 * side, 0.8, 0.74);
        // 眉:頭目向內下壓成怒容,雜魚平緩
        const brow = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.07, 0.07), browMat);
        brow.position.set(0.3 * side, 1.04, 0.62);
        brow.rotation.z = side * (boss ? 0.5 : 0.15);
        this.body.add(white, pupil, brow);
      }

      // 嘴:頭目咧開大口(深色),雜魚一抹小嘴
      const mouth = new THREE.Mesh(
        new THREE.SphereGeometry(boss ? 0.22 : 0.12, 12, 8),
        toonMaterial(0x301820),
      );
      mouth.position.set(0, boss ? 0.5 : 0.54, 0.66);
      mouth.scale.set(1.3, boss ? 0.8 : 0.45, 0.5);
      this.body.add(mouth);

      addOutlines(this.body);
      this.body.traverse((child) => {
        if (child instanceof THREE.Mesh) child.castShadow = true;
      });

      // 描邊之後再加:不參與卡通輪廓的內核與高光,做出果凍通透感
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 12, 10),
        toonMaterial(accent, { transparent: true, opacity: 0.55 }),
      );
      core.position.y = 0.58;
      core.raycast = () => undefined;
      this.body.add(core);

      const sheen = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 10, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 }),
      );
      sheen.position.set(-0.28, 0.95, 0.42);
      sheen.scale.set(1.2, 0.7, 0.6);
      sheen.raycast = () => undefined;
      this.body.add(sheen);

      this.tintMats.push(this.blobMaterial);
      this.tintBase.push(this.baseColor.clone());
    }

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

  // ── 模型模式輔助(useModel=false 時皆為無作用)──────────────────

  /** 推進骨骼動畫(冰凍/麻痺時不呼叫 = 定格) */
  private stepMixer(dt: number): void {
    this.mixer?.update(dt);
  }

  /**
   * 切換動畫動作。loop=true 的循環動作若已在播則略過(避免每幀重置);
   * loop=false 為一次性(攻擊/死亡),播完停在末幀。找不到對應動作則退而播 idle。
   */
  private play(name: string, loop = true, fade = 0.18): void {
    if (!this.mixer) return;
    const action = this.actions.get(name) ?? this.actions.get("idle");
    if (!action) return;
    if (loop && action === this.currentAction) return;
    action.reset();
    action.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
    action.clampWhenFinished = !loop;
    action.enabled = true;
    action.fadeIn(fade);
    action.play();
    if (this.currentAction && this.currentAction !== action) this.currentAction.fadeOut(fade);
    this.currentAction = action;
  }

  /** 對所有著色材質套色(果凍 = blob 本體;模型 = 全 toon 材質)。color 為 null 時還原本色 */
  private setTint(color: THREE.Color | null, amount = 1): void {
    for (let i = 0; i < this.tintMats.length; i++) {
      if (color) this.tintMats[i].color.lerpColors(this.tintBase[i], color, amount);
      else this.tintMats[i].color.copy(this.tintBase[i]);
    }
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
      const p = 1 - Math.max(this.stateT, 0) / this.dyingTime;
      if (this.useModel) {
        // 模型:播 Death 動畫,末段(後 25%)縮小淡出
        this.stepMixer(dt);
        if (p > 0.75) this.body.scale.setScalar(Math.max(1 - (p - 0.75) / 0.25, 0.01));
      } else {
        // 果凍:先膨脹再縮小爆裂
        const s = p < 0.4 ? 1 + p * 0.9 : Math.max(1.36 * (1 - (p - 0.4) / 0.6), 0.01);
        this.body.scale.setScalar(s);
      }
      if (this.stateT <= 0) {
        this.state = "dead";
        this.respawnT = RESPAWN_SECONDS;
        this.mesh.visible = false;
        this.body.scale.setScalar(1);
      }
      return 0;
    }

    this.attackCd = Math.max(0, this.attackCd - dt);
    this.specialCd = Math.max(0, this.specialCd - dt);
    this.flashT = Math.max(0, this.flashT - dt);

    // 冰凍:定格不動(mixer 不前進),只更新顏色
    if (this.freezeT > 0) {
      this.freezeT -= dt;
      this.setTint(new THREE.Color(0xbfeaff), 0.75);
      return 0;
    }

    // 麻痺:定身不動,泛黃白閃爍
    if (this.stunT > 0) {
      this.stunT -= dt;
      const flicker = 0.4 + 0.4 * Math.abs(Math.sin(this.stunT * 30));
      this.setTint(new THREE.Color(0xfff080), flicker);
      return 0;
    }

    // 非凍結/麻痺:推進骨骼動畫(各 state 下方再決定播哪個 clip)
    this.stepMixer(dt);

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
        if (this.useModel) {
          this.play("idle");
        } else {
          // 壓扁蓄力 + 抖動
          this.body.scale.y = 0.6 + Math.sin(this.stateT * 60) * 0.04;
          this.body.scale.x = this.body.scale.z = 1.25;
        }
        if (this.stateT <= 0) {
          this.lungeDir.subVectors(playerPos, pos).setY(0).normalize();
          this.lungeHitDone = false;
          this.state = "lunge";
          this.stateT = LUNGE_TIME;
          if (this.useModel) this.play("attack", false);
        }
        break;
      }
      case "lunge": {
        this.stateT -= dt;
        pos.addScaledVector(this.lungeDir, LUNGE_SPEED * dt);
        // 朝突進方向拉長(果凍);模型保持攻擊動畫
        if (!this.useModel) this.body.scale.set(0.8, 0.7, 1.35);
        this.mesh.rotation.y = Math.atan2(this.lungeDir.x, this.lungeDir.z);
        if (!this.lungeHitDone && !playerDead && distToPlayer < LUNGE_HIT_RANGE) {
          this.lungeHitDone = true;
          dealt = this.dmg;
        }
        if (this.stateT <= 0) {
          this.state = "recover";
          this.stateT = RECOVER_TIME;
        }
        break;
      }
      case "recover": {
        this.stateT -= dt;
        if (this.useModel) this.play("idle");
        else this.body.scale.setScalar(1);
        if (this.stateT <= 0) this.state = "chase";
        break;
      }
      case "special": {
        const sp = this.special!;
        this.stateT -= dt;
        if (this.specialPhase === "telegraph") {
          // 蓄力:鼓脹顫抖(果凍)+ 地面警示圈閃爍
          const prog = 1 - Math.max(this.stateT, 0) / sp.telegraph;
          if (!this.useModel) this.body.scale.setScalar(1 + prog * 0.25);
          this.updateRing(prog, true);
          if (this.stateT <= 0) {
            // 引爆:範圍內命中玩家,drain 效果順帶回復自身
            const hit = !playerDead && distToPlayer <= sp.radius;
            const dmg = Math.round(this.dmg * sp.dmgMul);
            let healed = 0;
            if (hit && sp.effect === "drain") {
              healed = Math.min(this.maxHp - this.hp, Math.round(dmg * DRAIN_HEAL_MUL));
              if (healed > 0) {
                this.hp += healed;
                this.drawHpBar();
              }
            }
            this.specialEvent = {
              name: sp.name,
              sfx: sp.sfx,
              color: sp.color,
              dmg,
              knock: sp.knock,
              effect: sp.effect,
              radius: sp.radius,
              hitPlayer: hit,
              healed,
            };
            this.specialPhase = "blast";
            this.specialRingT = 0;
            this.stateT = BLAST_TIME;
            if (this.useModel) this.play("attack", false);
            else this.body.scale.setScalar(1);
          }
        } else {
          // 擴散:警示圈由中心爆開、淡出
          this.specialRingT += dt;
          this.updateRing(this.specialRingT / BLAST_TIME, false);
          if (this.stateT <= 0) {
            this.hideRing();
            this.specialPhase = "";
            this.state = "recover";
            this.stateT = RECOVER_TIME;
          }
        }
        break;
      }
      default: {
        // patrol / chase 決策
        if (playerDead) {
          this.state = "patrol";
        } else if (distToHome > LEASH_RANGE) {
          this.state = "patrol";
          this.waypoint.copy(this.home);
        } else if (
          this.special &&
          this.specialCd <= 0 &&
          distToPlayer <= CHASE_RANGE &&
          distToPlayer <= this.special.radius + 2
        ) {
          // 頭目特殊技能:鎖定開始蓄力
          this.startSpecial();
          break;
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
        const moving = dir.lengthSq() > 0.01;
        if (moving) {
          dir.normalize();
          pos.addScaledVector(dir, speed * dt);
          this.mesh.rotation.y = Math.atan2(dir.x, dir.z);
        }

        if (this.useModel) {
          // 模型:走/待機切換(巡邏抵達路點時近乎靜止 → idle)
          this.play(moving ? "move" : "idle");
        } else {
          // 果凍:跳躍式移動 — 彈跳 + 擠壓伸展
          this.hopPhase += dt * (this.state === "chase" ? 9 : 5);
          const bounce = Math.abs(Math.sin(this.hopPhase));
          this.body.position.y = bounce * 0.35;
          this.body.scale.y = 0.8 + bounce * 0.3;
          this.body.scale.x = this.body.scale.z = 1.1 - bounce * 0.15;
        }
        break;
      }
    }

    // 受擊閃白 / 蓄力轉紅
    if (this.flashT > 0) {
      this.setTint(new THREE.Color(0xffffff), 1);
    } else if (this.state === "windup") {
      this.setTint(new THREE.Color(0xff5544), 0.55);
    } else {
      this.setTint(null);
    }
    // 灼燒中泛橘紅(疊在前面的基礎色上)
    if (this.burnT > 0 && this.flashT <= 0) {
      for (const m of this.tintMats) m.color.lerp(new THREE.Color(0xff6a2c), 0.5);
    }

    pos.y = groundHeight(pos.x, pos.z);
    return dealt;
  }

  /** 冰凍指定秒數(霜語晶冰箭) */
  freeze(seconds: number): void {
    if (this.isDead) return;
    // 遠端傀儡:只記下控場等 main 送房主權威套用,不在本機改狀態(階段 3b)
    if (this.remote) {
      this.pendingNetFreeze = Math.max(this.pendingNetFreeze, seconds);
      return;
    }
    this.freezeT = Math.max(this.freezeT, seconds);
  }

  /** 點燃:持續灼燒(溶岩石熔岩噴發);時間與每秒傷害取較大值疊加 */
  burn(seconds: number, dps: number): void {
    if (this.isDead) return;
    if (this.remote) {
      this.pendingNetBurnSec = Math.max(this.pendingNetBurnSec, seconds);
      this.pendingNetBurnDps = Math.max(this.pendingNetBurnDps, dps);
      return;
    }
    this.burnT = Math.max(this.burnT, seconds);
    this.burnDps = Math.max(this.burnDps, dps);
  }

  /** 麻痺指定秒數(雷光果連鎖閃電) */
  stun(seconds: number): void {
    if (this.isDead) return;
    if (this.remote) {
      this.pendingNetStun = Math.max(this.pendingNetStun, seconds);
      return;
    }
    this.stunT = Math.max(this.stunT, seconds);
  }

  /** 房主端:供 main 建構快照時讀取此敵人的狀態旗標(0 無/1 預警/2 引爆/3 冰凍/4 麻痺/5 灼燒) */
  get statusFlag(): number {
    if (this.specialPhase === "telegraph") return 1;
    if (this.specialPhase === "blast") return 2;
    if (this.freezeT > 0) return 3;
    if (this.stunT > 0) return 4;
    if (this.burnT > 0) return 5;
    return 0;
  }

  /** 本島頭目專屬特殊技能名稱(雜魚為 null) */
  get specialSkill(): string | null {
    return this.special?.name ?? null;
  }

  /** 測試掛鉤:立即施放特殊技能(忽略冷卻),供 smoke 引爆驗證 */
  forceSpecial(): void {
    if (!this.special || this.isDead) return;
    this.specialCd = 0;
    this.startSpecial();
  }

  /** 進入特殊技能蓄力階段(設定冷卻、顯示警示圈) */
  private startSpecial(): void {
    if (!this.special) return;
    this.state = "special";
    this.specialPhase = "telegraph";
    this.stateT = this.special.telegraph;
    this.specialCd = this.special.cooldown;
    this.attackCd = Math.max(this.attackCd, 1);
    this.ensureRing();
  }

  /** 懶建立地面警示圈(不參與描邊/raycast) */
  private ensureRing(): void {
    if (!this.special) return;
    if (this.specialRing && this.specialRingMat) {
      this.specialRingMat.color.setHex(this.special.color);
      this.specialRing.visible = true;
      return;
    }
    const mat = new THREE.MeshBasicMaterial({
      color: this.special.color,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 1.0, 48), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.12;
    ring.raycast = () => undefined;
    // 加在 mesh(已被 config.scale 縮放),縮放半徑時需除回 scale 才是世界半徑
    this.mesh.add(ring);
    this.specialRing = ring;
    this.specialRingMat = mat;
  }

  /** 更新警示圈:telegraph 全幅閃爍預警、blast 由中心爆開淡出 */
  private updateRing(t: number, telegraph: boolean): void {
    if (!this.special || !this.specialRing || !this.specialRingMat) return;
    const ls = this.special.radius / this.config.scale;
    if (telegraph) {
      this.specialRing.scale.set(ls, ls, ls);
      this.specialRingMat.opacity = 0.25 + 0.4 * Math.abs(Math.sin(t * Math.PI * 6));
    } else {
      const s = (0.15 + 0.95 * Math.min(t, 1)) * ls;
      this.specialRing.scale.set(s, s, s);
      this.specialRingMat.opacity = 0.7 * (1 - Math.min(t, 1));
    }
  }

  private hideRing(): void {
    if (this.specialRing) this.specialRing.visible = false;
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
    // 遠端傀儡:只記下傷害(等 main 送房主結算)+ 本機閃白回饋,絕不扣血或宣告死亡
    if (this.remote) {
      this.pendingNetDamage += amount;
      this.flashT = 0.12;
      return false;
    }
    this.hp = Math.max(0, this.hp - amount);
    this.flashT = 0.12;
    if (fromDir) this.knockback.copy(fromDir).setY(0).normalize().multiplyScalar(9);
    this.drawHpBar();
    if (this.hp <= 0) {
      this.state = "dying";
      this.stateT = this.dyingTime;
      this.hpBar.visible = false;
      this.specialPhase = "";
      this.specialEvent = null;
      this.hideRing();
      if (this.useModel) this.play("death", false);
      return true;
    }
    return false;
  }

  /** 對外重繪血條(遠端模式套用房主血量後呼叫) */
  refreshHpBar(): void {
    this.drawHpBar();
  }

  /** 測試掛鉤:遠端傀儡目前由房主同步到的狀態旗標(0 無/1 預警/2 引爆/3 冰凍/4 麻痺/5 灼燒) */
  get remoteStatusFlag(): number {
    return this.remoteFlag;
  }

  /**
   * 房主遷移:此敵人由「傀儡」轉為本機權威時的平滑接管(階段 5c)。
   * 以同步位置為新巡邏路點(免暴衝回 home)、從最後狀態旗標接手控場(時長未知給短暫延續)、
   * 接管瞬間給攻擊/特殊技短暫冷卻(避免一接手就對新房主爆發)。
   */
  becomeAuthoritative(): void {
    this.remote = false;
    if (this.isDead) return;
    switch (this.remoteFlag) {
      case 3: this.freezeT = Math.max(this.freezeT, 1.5); break;
      case 4: this.stunT = Math.max(this.stunT, 1.5); break;
      case 5: this.burnT = Math.max(this.burnT, 1.5); this.burnDps = Math.max(this.burnDps, 4); break;
    }
    this.attackCd = Math.max(this.attackCd, 0.8);
    this.specialCd = Math.max(this.specialCd, 1.5);
    this.waypoint.copy(this.mesh.position).setY(0);
    this.state = "patrol";
  }

  /**
   * 遠端傀儡每幀視覺更新:朝房主快照位置/朝向插值,輕微跳動,受擊閃白衰減。
   * 不跑 FSM、不結算戰鬥(那些都在房主端)。
   */
  updateRemote(dt: number): void {
    if (!this.mesh.visible) return;
    const t = 1 - Math.exp(-12 * dt);
    this.mesh.position.lerp(this.netTarget, t);
    let d = this.netYaw - this.mesh.rotation.y;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    this.mesh.rotation.y += d * t;
    this.flashT = Math.max(0, this.flashT - dt);
    if (this.useModel) {
      // 模型傀儡:推進動畫並播移動(冰凍/麻痺旗標下方會定格著色,但動畫仍續播以求簡單)
      this.stepMixer(dt);
      this.play("move");
    } else {
      this.hopPhase += dt * 6;
      this.body.position.y = Math.abs(Math.sin(this.hopPhase)) * 0.12;
    }
    if (this.flashT > 0) this.setTint(new THREE.Color(0xffffff), 0.7);
    else this.setTint(null);
    // 狀態旗標跨端視覺(階段 3b):頭目蓄力預警/引爆圈 + 冰凍/麻痺/灼燒著色
    this.renderRemoteStatus(dt);
  }

  /** 遠端傀儡:依房主同步的狀態旗標渲染預警圈與控場著色(僅視覺,不影響模擬) */
  private renderRemoteStatus(dt: number): void {
    const f = this.remoteFlag;
    if (f === 1) {
      this.ensureRing();
      this.remoteRingT += dt;
      this.updateRing(this.remoteRingT, true); // 蓄力:全幅閃爍預警
    } else if (f === 2) {
      this.ensureRing();
      this.remoteRingT += dt;
      this.updateRing(this.remoteRingT / BLAST_TIME, false); // 引爆:由中心爆開淡出
    } else {
      this.hideRing();
    }
    if (this.flashT > 0) return; // 受擊白閃優先(updateRemote 已套基礎色)
    if (f === 3) this.setTint(new THREE.Color(0xbfeaff), 0.75);
    else if (f === 4) {
      const flicker = 0.4 + 0.4 * Math.abs(Math.sin(this.hopPhase * 5));
      this.setTint(new THREE.Color(0xfff080), flicker);
    } else if (f === 5) for (const m of this.tintMats) m.color.lerp(new THREE.Color(0xff6a2c), 0.5);
  }

  /**
   * 套用房主送來的敵人快照(遠端模式)。
   * @returns 是否「本次剛由存活轉為死亡」(供 main 播放死亡特效/音效)
   */
  applyNetSnapshot(x: number, y: number, z: number, yaw: number, dead: boolean, hp: number, flag: number): boolean {
    const wasAlive = !this.netDead;
    this.netDead = dead;
    this.hp = hp; // 永遠以房主血量為準(含死亡=0,移交房主時 FSM 才接得到正確值)
    // 粗略對齊 state,讓 isDead 與「移交房主時 FSM 接手」運作正常
    this.state = dead ? "dead" : "patrol";
    // 狀態旗標變更時重置預警圈計時(讓蓄力→引爆的圈動畫從頭播)(階段 3b)
    if (flag !== this.remoteFlag) {
      this.remoteFlag = flag;
      this.remoteRingT = 0;
    }
    if (dead) {
      this.remoteFlag = 0;
      this.hideRing();
      if (this.mesh.visible) {
        this.mesh.visible = false;
        this.hpBar.visible = false;
      }
      return wasAlive; // 剛死亡 → 回 true 讓 main 補死亡特效
    }
    if (!this.mesh.visible) {
      this.mesh.visible = true;
      this.hpBar.visible = true;
      this.mesh.position.set(x, y, z); // 重生:直接就位不插值
    }
    this.netTarget.set(x, y, z);
    this.netYaw = yaw;
    this.drawHpBar();
    return false;
  }

  private revive(): void {
    this.hp = this.maxHp;
    this.state = "patrol";
    this.freezeT = 0;
    this.burnT = 0;
    this.burnDps = 0;
    this.burnTickAccum = 0;
    this.stunT = 0;
    this.specialPhase = "";
    this.specialEvent = null;
    this.specialCd = this.special ? this.special.cooldown * 0.6 : 0;
    this.hideRing();
    this.mesh.visible = true;
    this.hpBar.visible = true;
    this.body.scale.setScalar(1);
    this.body.position.y = 0;
    this.knockback.set(0, 0, 0);
    this.mesh.position.set(this.home.x, groundHeight(this.home.x, this.home.z), this.home.z);
    this.drawHpBar();
    // 模型:重置動畫回 idle、還原本色
    if (this.useModel) {
      this.currentAction = null;
      this.play("idle", true, 0);
    }
    this.setTint(null);
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
    ctx.fillRect(1, 1, 94 * (this.hp / this.maxHp), 16);
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(0,0,0,0.8)";
    ctx.strokeText(`${this.hp}/${this.maxHp}`, 48, 10);
    ctx.fillStyle = "#fff";
    ctx.fillText(`${this.hp}/${this.maxHp}`, 48, 10);
    this.hpTexture.needsUpdate = true;
  }
}
