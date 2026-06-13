import * as THREE from "three";
import { Input } from "./core/input";
import { AudioEngine } from "./core/audio";
import { Fx } from "./core/fx";
import { createOcean, updateOcean } from "./world/ocean";
import { Sky } from "./world/sky";
import {
  createWorld,
  groundHeight,
  inLava,
  isWalkable,
  ISLANDS,
  TIDE_SITE,
  SUNKEN_CITY,
  SECOND_SEA,
  seaOf,
  THUNDER_FRUIT_SITE,
  GRAVITY_FRUIT_SITE,
} from "./world/terrain";
import { Boat } from "./entities/boat";
import { Player, ATTACK_RANGE, ATTACK_ARC_COS, SPIN_RANGE } from "./entities/player";
import { Enemy } from "./entities/enemy";
import { Npc } from "./entities/npc";
import { Pickup } from "./entities/pickup";
import { Shockwave } from "./entities/shockwave";
import { Vortex } from "./entities/vortex";
import { LightningBolt } from "./entities/lightning";
import {
  GemBag,
  FLAME_MP_COST,
  flameDamage,
  QUAKE_MP_COST,
  quakeDamage,
  quakeRange,
  ICE_MP_COST,
  FROST_WALK_MP_DRAIN,
  iceDamage,
  freezeDuration,
  BLINK_MP_COST,
  blinkDist,
  LAVA_MP_COST,
  LAVA_BURN_DURATION,
  lavaDamage,
  lavaBurnDps,
} from "./systems/gems";
import {
  FruitBag,
  THUNDER_MP_COST,
  THUNDER_RANGE,
  THUNDER_CHAIN_RANGE,
  THUNDER_CHAIN_FALLOFF,
  thunderDamage,
  thunderChainCount,
  thunderStunDuration,
  GRAVITY_MP_COST,
  VORTEX_FORWARD,
  vortexDamage,
  vortexRadius,
  vortexDuration,
} from "./systems/fruits";
import { EquipmentState } from "./systems/equipment";
import { QuestLog, JELLY_TARGET, HUNTS, type HuntId } from "./systems/quests";
import { loadGame, saveGame, type SaveData } from "./systems/save";
import { Inventory, type CrystalSize } from "./systems/stats";
import { Hud } from "./ui/hud";
import { BagPanel } from "./ui/bag";
import { DialogBox } from "./ui/dialog";
import { ShopPanel } from "./ui/shop";
import { ForgePanel } from "./ui/forge";
import { SettingsPanel } from "./ui/settings";
import { FloatingTextManager, PickupFeed } from "./ui/floating";
import { DriftChest } from "./entities/chest";
import { Shrine, SHRINE_DEFS, MAX_ACTIVE_SHRINES } from "./entities/shrine";
import { isSailable } from "./world/terrain";

const DEATH_CRYSTAL_LOSS = 0.3;

function main(): void {
  const container = document.getElementById("app");
  if (!container) throw new Error("找不到 #app 容器");

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb);
  scene.fog = new THREE.Fog(0x87ceeb, 150, 650);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const audio = new AudioEngine();
  const unlockAudio = (): void => audio.unlock();
  window.addEventListener("pointerdown", unlockAudio, { once: true });
  window.addEventListener("keydown", unlockAudio, { once: true });
  const settings = new SettingsPanel(audio);

  const sun = new THREE.DirectionalLight(0xfff4e0, 2.6);
  sun.position.set(60, 100, 40);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -80;
  sun.shadow.camera.right = 80;
  sun.shadow.camera.top = 80;
  sun.shadow.camera.bottom = -80;
  sun.shadow.camera.far = 250;
  sun.shadow.bias = -0.0008;
  const hemi = new THREE.HemisphereLight(0xbfdfff, 0xe8d4a0, 0.7);
  const ambient = new THREE.AmbientLight(0xffffff, 0.35);
  scene.add(sun, sun.target, hemi, ambient);
  const sky = new Sky(scene, sun, hemi, ambient);

  const fx = new Fx(scene);
  const floats = new FloatingTextManager();
  const feed = new PickupFeed();
  let sparkleT = 0;
  const ocean = createOcean();
  ocean.position.set(75, 0, 55); // 覆蓋兩島之間的海域
  scene.add(ocean, createWorld());

  const boat = new Boat();
  scene.add(boat.mesh);
  let sailing = false;

  // 冰面渡水時跟著玩家腳下的冰盤
  const iceDisc = new THREE.Mesh(
    new THREE.CircleGeometry(1.5, 20),
    new THREE.MeshBasicMaterial({ color: 0xcfeaff, transparent: true, opacity: 0.75 }),
  );
  iceDisc.rotation.x = -Math.PI / 2;
  iceDisc.visible = false;
  scene.add(iceDisc);

  /** 隨機抓一個遠離島嶼與遺跡的開放海點(漂流寶箱用) */
  function randomSeaSpot(): { x: number; z: number } {
    for (let i = 0; i < 100; i++) {
      const x = -210 + Math.random() * 440;
      const z = -240 + Math.random() * 580;
      if (!isSailable(x, z)) continue;
      if (ISLANDS.some((d) => Math.hypot(x - d.x, z - d.z) < d.r + 12)) continue;
      if (Math.hypot(x - SUNKEN_CITY.x, z - SUNKEN_CITY.z) < SUNKEN_CITY.r + 8) continue;
      return { x, z };
    }
    return { x: -100, z: -40 };
  }

  const chests: DriftChest[] = [];
  for (let i = 0; i < 6; i++) {
    const spot = randomSeaSpot();
    const chest = new DriftChest(spot.x, spot.z);
    chests.push(chest);
    scene.add(chest.mesh);
  }

  /** 找離 (x,z) 最近島嶼的岸邊安全點 */
  function nearestShore(x: number, z: number): { x: number; z: number } {
    let best = ISLANDS[0];
    let bestDist = Infinity;
    for (const def of ISLANDS) {
      const d = Math.hypot(x - def.x, z - def.z);
      if (d < bestDist) {
        bestDist = d;
        best = def;
      }
    }
    const len = Math.max(Math.hypot(x - best.x, z - best.z), 0.001);
    const k = (best.r - 8) / len;
    return { x: best.x + (x - best.x) * k, z: best.z + (z - best.z) * k };
  }

  const input = new Input(renderer.domElement);
  const player = new Player();
  scene.add(player.mesh);

  const inventory = new Inventory();

  // 出生地南灘附近放新手怪(離漁村遠一點,避免對話中被仇恨),往內陸漸強;菁英鎮守主峰與西南丘
  const enemies: Enemy[] = [
    new Enemy("slime", 14, -39),
    new Enemy("slime", -14, -40),
    new Enemy("slime", 6, -32),
    new Enemy("slime", 22, -18),
    new Enemy("slime", -24, -12),
    new Enemy("slime", 16, 6),
    new Enemy("slime", -14, 20),
    new Enemy("slime", 36, 4),
    new Enemy("slime", -32, 16),
    new Enemy("slime", 4, 40),
    new Enemy("slime", 26, 30),
    new Enemy("slime", -18, -30),
    new Enemy("elite", 0, 14),
    new Enemy("elite", -30, -22),
    // 翠風林島(中心 150,110):藤蔓果凍 + 風之守護者
    new Enemy("vine", 148, 75),
    new Enemy("vine", 162, 88),
    new Enemy("vine", 133, 96),
    new Enemy("vine", 167, 116),
    new Enemy("vine", 140, 127),
    new Enemy("vine", 155, 142),
    new Enemy("windGuardian", 150, 110),
    // 燼岩火山島(中心 -150,120):餘燼果凍 + 大地守護者
    new Enemy("ember", -148, 88),
    new Enemy("ember", -135, 100),
    new Enemy("ember", -165, 105),
    new Enemy("ember", -138, 132),
    new Enemy("ember", -162, 138),
    new Enemy("earthGuardian", -150, 112),
    // 霜雪峰島(中心 60,-170):霜寒果凍 + 雪怪頭目鎮守山頂
    new Enemy("frost", 78, -162),
    new Enemy("frost", 42, -155),
    new Enemy("frost", 60, -198),
    new Enemy("frost", 85, -180),
    new Enemy("frost", 38, -185),
    new Enemy("frostGuardian", 60, -170),
    // 沉沒古城(海面下,潛水後才會主動攻擊):深海果凍 + 虛空守護者
    new Enemy("deep", -48, 222),
    new Enemy("deep", -30, 238),
    new Enemy("deep", -44, 242),
    new Enemy("voidGuardian", -40, 230),
    // 虛空之心:最終頭目
    new Enemy("voidLord", 0, 300),
    // 第二海・熔砂島(中心 2200,160):熔砂果凍 + 熔岩守護者(掉溶岩石)
    new Enemy("sand", 2180, 130),
    new Enemy("sand", 2222, 134),
    new Enemy("sand", 2166, 158),
    new Enemy("sand", 2234, 166),
    new Enemy("sand", 2196, 190),
    new Enemy("magmaGuardian", 2200, 144),
  ];
  for (const enemy of enemies) scene.add(enemy.mesh);
  // 各島頭目首殺掉落對應靈紋寶石
  const gemGuardian = enemies[12];
  const windGuardian = enemies.find((e) => e.kind === "windGuardian") as Enemy;
  const earthGuardian = enemies.find((e) => e.kind === "earthGuardian") as Enemy;
  const frostGuardian = enemies.find((e) => e.kind === "frostGuardian") as Enemy;
  const voidGuardian = enemies.find((e) => e.kind === "voidGuardian") as Enemy;
  const voidLord = enemies.find((e) => e.kind === "voidLord") as Enemy;
  const magmaGuardian = enemies.find((e) => e.kind === "magmaGuardian") as Enemy;

  let pickups: Pickup[] = [];
  let shockwaves: Shockwave[] = [];
  let vortexes: Vortex[] = [];
  let bolts: LightningBolt[] = [];
  /** 雷光果只在風暴天氣顯現:存著當前場上的果實引用,風暴離去未撿則收回 */
  let thunderFruit: Pickup | null = null;
  /** 引力果在擊敗虛空魔王後生成一次(避免重複) */
  let gravityFruitSpawned = false;
  let gemDropSpawned = false;
  let windGemDropSpawned = false;
  let earthGemDropSpawned = false;
  let frostGemDropSpawned = false;
  let voidGemDropSpawned = false;
  let lavaGemDropSpawned = false;
  let lavaTickT = 0;
  let diving = false;
  let voidDefeated = false;
  let endingShown = false;

  const gems = new GemBag();
  const fruits = new FruitBag();
  const equipment = new EquipmentState();
  const dialog = new DialogBox();
  const quests = new QuestLog();

  // ---- 第二海解鎖條件(領航者檢查 + HUD 追蹤列共用) ----
  /** 全部敵人種類(「敵人圖鑑」條件:每種至少擊敗一次;敵人重整後重生,不會卡關) */
  const ENEMY_KINDS = [
    "slime",
    "elite",
    "vine",
    "windGuardian",
    "ember",
    "earthGuardian",
    "frost",
    "frostGuardian",
    "deep",
    "voidGuardian",
    "voidLord",
  ];
  const SEA2_LEVEL = 25;
  const ownedGemCount = (): number =>
    [
      gems.flameOwned,
      gems.windOwned,
      gems.earthOwned,
      gems.frostOwned,
      gems.tideOwned,
      gems.voidOwned,
    ].filter(Boolean).length;
  const killedKindCount = (): number => ENEMY_KINDS.filter((k) => quests.killsOf(k) > 0).length;
  const sea2Ready = (): boolean =>
    ownedGemCount() === 6 &&
    killedKindCount() === ENEMY_KINDS.length &&
    player.stats.level >= SEA2_LEVEL;

  /** 結晶尺寸顯示名 */
  const crystalName = (size: CrystalSize): string =>
    size === "small" ? "小型" : size === "medium" ? "中型" : "大型";

  /**
   * 建立島嶼清剿任務 NPC:接取 → 顯示進度 → 達標回報發獎勵(貝拉幣 + 經驗結晶)。
   * 對話流程仿漁夫小蝦;進度計數走 QuestLog.huntProgress。
   */
  const makeHuntNpc = (config: {
    name: string;
    x: number;
    z: number;
    color: number;
    quest: HuntId;
    title: string;
    enemyLabel: string;
    intro: string[];
    coins: number;
    crystalSize: CrystalSize;
    crystalCount: number;
    doneLines: string[];
  }): Npc =>
    new Npc(config.name, config.x, config.z, config.color, () => {
      const q = quests.get(config.quest);
      const target = HUNTS[config.quest].target;
      if (q === "done") return config.doneLines;
      if (q === "active" && quests.huntProgress(config.quest) >= target) {
        quests.complete(config.quest);
        inventory.coins += config.coins;
        inventory.crystals[config.crystalSize] += config.crystalCount;
        audio.sfx("gem");
        hud.showToast(
          `任務完成:${config.title}!獲得 ${config.coins} 貝拉幣 + ${crystalName(config.crystalSize)}結晶×${config.crystalCount}`,
        );
        doSave();
        return [
          `你把${config.enemyLabel}都清掉了,太厲害了!`,
          `這是謝禮:${config.coins} 貝拉幣和${crystalName(config.crystalSize)}經驗結晶 ×${config.crystalCount}。`,
        ];
      }
      if (q === null) {
        quests.accept(config.quest);
        hud.showToast(`接受任務:${config.title}(0/${target})`);
        return config.intro;
      }
      return [
        `還剩 ${target - quests.huntProgress(config.quest)} 隻${config.enemyLabel},加油!`,
        "打完回來找我領賞!",
      ];
    });

  // 任務的接取/回報在對話開啟時結算(getLines 依任務狀態給詞並發獎勵)
  const npcs: Npc[] = [
    new Npc("村長阿海", 2.5, -49.5, 0x8a5a8a, () => {
      const q = quests.get("gem");
      const qw = quests.get("wind");
      const qe = quests.get("earth");
      const qf = quests.get("frost");
      const qt = quests.get("tide");
      const qd = quests.get("depth");
      const qfin = quests.get("final");
      if (qfin === "done") {
        if (inventory.secondSeaGem)
          return [
            "碎界之夜的陰影散去了……群島又能安心唱歌了。",
            "聽說你已經能往返第二海了——真不愧是引路人!",
          ];
        return [
          "碎界之夜的陰影散去了……群島又能安心唱歌了。",
          "對了,東南外海浮現了一座「界海之門」。",
          "島上的領航者,能為通過試煉的人開啟第二海之路。去見見她吧!",
        ];
      }
      if (qfin === "active" && voidDefeated) {
        quests.complete("final");
        inventory.coins += 1000;
        audio.sfx("victory");
        hud.showToast("任務完成:終焉之戰!獲得 1000 貝拉幣");
        doSave();
        return [
          "你……你打敗虛空魔王了!",
          "碎界之夜再也不會降臨,群島自由了!",
          "這 1000 貝拉幣是全村的心意。謝謝你,英雄!",
        ];
      }
      if (qfin === "active")
        return [
          "虛空之心在最北端的暗紫色孤島。",
          "那是碎界之夜的源頭……集齊寶石的你一定辦得到。",
          "去吧,終結這一切!",
        ];
      if (qd === "done") {
        quests.accept("final");
        hud.showToast("接受任務:終焉之戰");
        return [
          "虛空石到手,六顆寶石只差最後的審判。",
          "最北端海上的「虛空之心」——碎界之夜的源頭。",
          "【最終任務】擊敗虛空魔王,拯救群島!",
        ];
      }
      if (qd === "active" && gems.voidOwned) {
        quests.complete("depth");
        inventory.coins += 500;
        inventory.crystals.large += 3;
        audio.sfx("gem");
        hud.showToast("任務完成:深淵遺跡!獲得 500 貝拉幣 + 大型結晶×3");
        doSave();
        return [
          "虛空石!古城的守護者也被你制伏了……",
          "謝禮:500 貝拉幣和三顆大型經驗結晶。",
          "按 X 可以短距離瞬移,連虛空的力量都為你所用了。",
        ];
      }
      if (qd === "active")
        return [
          "沉沒古城在北方海上,露出水面的斷柱就是入口。",
          "把船開到遺跡中央按 F 潛入——有潮汐石就能在水下呼吸。",
        ];
      if (qt === "done") {
        quests.accept("depth");
        hud.showToast("接受任務:深淵遺跡");
        return [
          "潮汐石會保護你在水下呼吸。",
          "北方海上的沉沒古城——斷裂的石柱群就是標記。",
          "【任務】潛入古城,擊敗虛空守護者,取回「虛空石」!",
        ];
      }
      if (qt === "active" && gems.tideOwned) {
        quests.complete("tide");
        inventory.coins += 300;
        audio.sfx("gem");
        hud.showToast("任務完成:隱藏海域!獲得 300 貝拉幣");
        doSave();
        return [
          "潮汐石!傳說是真的……",
          "謝禮:300 貝拉幣。",
          "有了它就能潛入北方的沉沒古城了。",
        ];
      }
      if (qt === "active")
        return [
          "西南方的外海,夜裡會有發光的浪。",
          "開船過去靠近,潮汐石就漂在那裡。",
        ];
      if (qf === "done") {
        quests.accept("tide");
        hud.showToast("接受任務:隱藏海域");
        return [
          "四顆靈紋寶石……碎界之夜的真相越來越近了。",
          "傳說西南方的隱藏海域漂著第五顆寶石「潮汐石」。",
          "【任務】出海尋找發光的海域,取得潮汐石!",
        ];
      }
      if (qf === "active" && gems.frostOwned) {
        quests.complete("frost");
        inventory.coins += 400;
        inventory.crystals.large += 2;
        audio.sfx("gem");
        hud.showToast("任務完成:霜語之晶!獲得 400 貝拉幣 + 大型結晶×2");
        doSave();
        return [
          "霜語晶!雪怪也敗在你劍下了!",
          "謝禮:400 貝拉幣和兩顆大型經驗結晶。",
          "按 V 射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!",
        ];
      }
      if (qf === "active")
        return [
          "霜雪峰島在南方海上,全群島最高的山。",
          "山坡又陡又滑,站著不動會往下滑——朝上坡硬走或用翻滾衝刺!",
          "雪怪就在山頂等著你。",
        ];
      if (qe === "done") {
        quests.accept("frost");
        hud.showToast("接受任務:霜語之晶");
        return [
          "三顆靈紋寶石……你就是傳說中的引路人!",
          "南方的霜雪峰島藏著第四顆寶石「霜語晶」。",
          "【任務】登上全群島最高的雪峰,擊敗雪怪!",
          "山坡很滑,小心滑落;多帶些藥水禦寒。",
        ];
      }
      if (qe === "active" && gems.earthOwned) {
        quests.complete("earth");
        inventory.coins += 300;
        inventory.crystals.large += 2;
        audio.sfx("gem");
        hud.showToast("任務完成:地殼之石!獲得 300 貝拉幣 + 大型結晶×2");
        doSave();
        return [
          "地殼石!連大地守護者都不是你的對手!",
          "謝禮:300 貝拉幣和兩顆大型經驗結晶。",
          "按 C 可以放出地震波,震飛身邊所有敵人!",
        ];
      }
      if (qe === "active")
        return [
          "燼岩火山島在西北方的海上,小心熔岩!",
          "站在橘紅色的熔岩上會持續受傷,別逗留。",
          "聽說島上有位鍛造大師,可以幫你強化武器。",
        ];
      if (qw === "done") {
        quests.accept("earth");
        hud.showToast("接受任務:地殼之石");
        return [
          "兩顆靈紋寶石……傳說正在你身上應驗。",
          "西北方的燼岩火山島藏著第三顆寶石「地殼石」。",
          "【任務】擊敗火山頂的大地守護者!",
          "提醒:熔岩會持續灼傷,記得多帶藥水;島上的鍛造大師能強化武器。",
        ];
      }
      if (qw === "active" && gems.windOwned) {
        quests.complete("wind");
        inventory.coins += 200;
        inventory.crystals.large += 1;
        audio.sfx("gem");
        hud.showToast("任務完成:翠風之石!獲得 200 貝拉幣 + 大型結晶");
        doSave();
        return [
          "風語石!你連叢林守護者都打贏了!",
          "謝禮:200 貝拉幣和一顆大型經驗結晶。",
          "有了風語石,空中再按一次空白鍵能二段跳,按住可以滑翔!",
        ];
      }
      if (qw === "active")
        return [
          "翠風林島在東北方的海上。",
          "靠近南灘的小船按 F 出海;W 前進、A/D 轉向、F 靠岸。",
        ];
      if (q === "done") {
        quests.accept("wind");
        hud.showToast("接受任務:翠風之石");
        return [
          "看你身手不錯,有件事想拜託你。",
          "東北方的翠風林島,藏著第二顆靈紋寶石「風語石」。",
          "【任務】搭南灘的小船出海,擊敗叢林深處的守護者!",
          "操作:靠近小船按 F 上船;W 前進、A/D 轉向、F 靠岸。",
        ];
      }
      if (q === "active" && gems.flameOwned) {
        quests.complete("gem");
        inventory.coins += 100;
        inventory.crystals.medium += 1;
        audio.sfx("gem");
        hud.showToast("任務完成:取回焰心石!獲得 100 貝拉幣 + 中型結晶");
        doSave();
        return [
          "這、這就是焰心石!你辦到了!",
          "說好的謝禮:100 貝拉幣和一顆中型經驗結晶。",
          "按 E 就能施放火焰斬,去試試吧!",
        ];
      }
      if (q === null) {
        quests.accept("gem");
        hud.showToast("接受任務:取回焰心石");
        return [
          "年輕人,你醒啦!這裡是曙光嶼的漁村。",
          "主峰上的大橘果凍吞了一顆會發光的石頭……",
          "【任務】打敗牠,把「靈紋寶石」帶回來!",
          "提示:按住左鍵集氣,滿氣放開有衝擊波。",
        ];
      }
      return ["大果凍還在主峰上等著你……", "記得打怪撿結晶,Tab 背包裡「使用」變強!"];
    }),
    new Npc("漁夫小蝦", -4, -48, 0x4a7a9a, () => {
      const q = quests.get("jelly");
      if (q === "done") return ["村子安全多了,謝謝你!", "聽說商人圓圓進了新貨,去看看吧。"];
      if (q === "active" && quests.jellyProgress() >= JELLY_TARGET) {
        quests.complete("jelly");
        inventory.coins += 50;
        inventory.crystals.small += 2;
        audio.sfx("gem");
        hud.showToast("任務完成:果凍清理!獲得 50 貝拉幣 + 小型結晶×2");
        doSave();
        return ["哇,你把牠們都清掉了!", "這是謝禮:50 貝拉幣和兩顆小型結晶。"];
      }
      if (q === null) {
        quests.accept("jelly");
        hud.showToast(`接受任務:果凍清理(0/${JELLY_TARGET})`);
        return [
          "最近果凍怪變多了,漁網都被啃壞……",
          `【任務】幫我清掉 ${JELLY_TARGET} 隻果凍怪!`,
          "提示:被圍住時按 Q 舉盾擋正面攻擊。",
        ];
      }
      return [
        `還剩 ${JELLY_TARGET - quests.jellyProgress()} 隻果凍怪,加油!`,
        "結晶要在背包(Tab)裡「使用」才會變強喔!",
      ];
    }),
    new Npc("商人圓圓", 7, -46, 0xc8884a, () => [], "shop"),
    new Npc("鍛造大師爐婆", -150, 78, 0x8a4a2a, () => [], "forge"),
    // 各島清剿任務 NPC(位置避開重生石碑與敵人仇恨範圍 12)
    makeHuntNpc({
      name: "獵人小藤",
      x: 160,
      z: 66,
      color: 0x4a8a3a,
      quest: "vineHunt",
      title: "藤蔓清剿",
      enemyLabel: "藤蔓果凍",
      intro: [
        "這片叢林是我的獵場,但藤蔓果凍越來越多……",
        "【任務】幫我清掉 4 隻藤蔓果凍!",
        "牠們散布在島上各處,小心別被圍住。",
      ],
      coins: 150,
      crystalSize: "medium",
      crystalCount: 2,
      doneLines: ["獵徑暢通了,謝謝你!", "叢林深處的守護者就拜託你了。"],
    }),
    makeHuntNpc({
      name: "礦工岩叔",
      x: -160,
      z: 76,
      color: 0x9a6a3a,
      quest: "emberHunt",
      title: "餘燼清剿",
      enemyLabel: "餘燼果凍",
      intro: [
        "我在挖火山的礦脈,餘燼果凍老是燙壞我的鎬子!",
        "【任務】幫我清掉 4 隻餘燼果凍!",
        "報酬豐厚,但小心別踩進熔岩。",
      ],
      coins: 250,
      crystalSize: "medium",
      crystalCount: 3,
      doneLines: ["礦脈安全了,挖礦效率翻倍!", "有空再來火山島坐坐。"],
    }),
    makeHuntNpc({
      name: "嚮導阿凜",
      x: 74,
      z: -212,
      color: 0x6a9ac8,
      quest: "frostHunt",
      title: "霜寒清剿",
      enemyLabel: "霜寒果凍",
      intro: [
        "山上的霜寒果凍會凍住登山客,太危險了。",
        "【任務】幫我清掉 4 隻霜寒果凍!",
        "牠們會放冰凍攻擊,記得多帶藥水。",
      ],
      coins: 350,
      crystalSize: "large",
      crystalCount: 1,
      doneLines: ["登山客們安全多了,謝謝你!", "山頂的風景值得一看。"],
    }),
    makeHuntNpc({
      name: "觀星者星嵐",
      x: -6,
      z: 282,
      color: 0x7a5aa8,
      quest: "deepHunt",
      title: "深海清剿",
      enemyLabel: "深海果凍",
      intro: [
        "我在這裡觀測碎界之夜的星象……",
        "北方沉沒古城的深海果凍讓潮流變得混亂。",
        "【任務】潛入古城,清掉 3 隻深海果凍!",
        "需要潮汐石才能下潛,小心虛空守護者。",
      ],
      coins: 500,
      crystalSize: "large",
      crystalCount: 2,
      doneLines: ["潮流恢復平靜,星象也清晰了……", "碎界之夜的終結,就靠你了。"],
    }),
    // 界海之門:第二海解鎖試煉(六寶石 + 敵人圖鑑 + Lv.35),通過發兩顆海寶石
    new Npc("領航者汐音", 230, -95, 0x4a9ab8, () => {
      if (inventory.secondSeaGem)
        return [
          "海寶石與你同行,界海不再是阻隔。",
          "在背包(Tab)使用海寶石,即可往返兩片海域。",
          "第二海的故事,才正要開始……",
        ];
      if (sea2Ready()) {
        if (quests.get("sea2") === null) quests.accept("sea2");
        quests.complete("sea2");
        inventory.firstSeaGem = true;
        inventory.secondSeaGem = true;
        audio.sfx("gem");
        feed.push("🔱 獲得重要道具【第一海寶石】");
        feed.push("🌐 獲得重要道具【第二海寶石】");
        hud.showToast("獲得海寶石!在背包(Tab)使用即可往返第一、二海");
        doSave();
        return [
          "六顆靈紋寶石、群島眾魔的記憶、足以橫渡界海的修為……",
          "你通過了全部的試煉。收下吧——【第一海寶石】與【第二海寶石】。",
          "在背包中使用它們,海流就會帶你往返兩片海域。",
          "第二海的門戶「港口鎮」,正等著你。",
        ];
      }
      if (quests.get("sea2") === null) {
        quests.accept("sea2");
        hud.showToast("接受任務:跨越界海");
      }
      return [
        "我是領航者汐音,界海的看守者。",
        "界海之外是第二海——想跨越,須得群島的全部認可:",
        `・集齊靈紋寶石(${ownedGemCount()}/6)`,
        `・擊敗所有種類的敵人(${killedKindCount()}/${ENEMY_KINDS.length} 種)`,
        `・修煉至 Lv.${SEA2_LEVEL}(目前 Lv.${player.stats.level})`,
        "達成之後,再回來找我。",
      ];
    }),
    // 第二海・港口鎮:給予「熔砂的試煉」,熔岩守護者掉落第七顆寶石溶岩石
    new Npc("鎮長波叔", SECOND_SEA.x, SECOND_SEA.z - 36, 0xc8a04a, () => {
      const ql = quests.get("lava");
      if (ql === "done")
        return [
          "熔砂島的熱浪,連海風都燙得發顫……",
          "有了溶岩石,你連腳下的岩漿都能驅使了。",
          "想回第一海?在背包使用【第一海寶石】就行。",
        ];
      if (ql === "active" && gems.lavaOwned) {
        quests.complete("lava");
        inventory.coins += 600;
        inventory.crystals.large += 2;
        audio.sfx("gem");
        hud.showToast("任務完成:熔砂的試煉!獲得 600 貝拉幣 + 大型結晶×2");
        doSave();
        return [
          "溶岩石!你真的從熔岩守護者手裡奪回來了……",
          "謝禮:600 貝拉幣和兩顆大型經驗結晶。",
          "按 G 就能向前噴出岩漿,還會點燃敵人持續灼燒——小心別自己踩進岩漿。",
        ];
      }
      if (ql === "active")
        return [
          "熔砂島在港口鎮東方的外海,整座島覆著滾燙的熱砂。",
          "島心的熔岩坑盤踞著『熔岩守護者』,溶岩石就在牠身上。",
          "踩到岩漿會被燙傷,留意腳下!",
        ];
      quests.accept("lava");
      hud.showToast("接受任務:熔砂的試煉");
      return [
        "歡迎來到第二海的門戶——港口鎮!",
        "能跨越界海的,都是了不起的冒險者。",
        "東方外海有座『熔砂島』,熱砂底下埋著遠古的岩漿。",
        "島心的『熔岩守護者』守著第七顆靈紋寶石——『溶岩石』。",
        "【任務】登上熔砂島,擊敗熔岩守護者,取得溶岩石!",
        "想回第一海?在背包使用【第一海寶石】就行。",
      ];
    }),
  ];
  for (const npc of npcs) scene.add(npc.mesh);

  // 重生石碑:每島一座,F 設置為重生點(上限 MAX_ACTIVE_SHRINES,超過替換最早設置的)
  const shrines: Shrine[] = SHRINE_DEFS.map((def) => new Shrine(def));
  for (const shrine of shrines) scene.add(shrine.mesh);
  const shrineActiveIds: string[] = [];

  const activateShrine = (shrine: Shrine): void => {
    let note = `(${shrineActiveIds.length + 1}/${MAX_ACTIVE_SHRINES})`;
    if (shrineActiveIds.length >= MAX_ACTIVE_SHRINES) {
      const oldestId = shrineActiveIds.shift();
      const oldest = shrines.find((s) => s.def.id === oldestId);
      if (oldest) {
        oldest.setActive(false);
        note = `(已替換【${oldest.def.island}】)`;
      }
    }
    shrineActiveIds.push(shrine.def.id);
    shrine.setActive(true);
    audio.sfx("shrine");
    fx.burst(shrine.mesh.position.clone().setY(shrine.mesh.position.y + 3), 0x7fe8e8, 14, 6);
    hud.showToast(`重生點已設置:【${shrine.def.island}】${note}`);
    doSave();
  };

  const hud = new Hud((choice) => {
    const shrine = shrines.find((s) => s.active && s.def.id === choice);
    const wakePlace = shrine ? `【${shrine.def.island}】重生點` : "海灘";
    // 死亡掉落結晶可於設定中關閉(企劃書 3.3)
    if (settings.settings.deathDrop) {
      for (const size of Object.keys(inventory.crystals) as CrystalSize[]) {
        inventory.crystals[size] -= Math.floor(inventory.crystals[size] * DEATH_CRYSTAL_LOSS);
      }
      hud.showToast(`你在${wakePlace}醒來,遺失了部分未使用的結晶……`);
    } else {
      hud.showToast(`你在${wakePlace}醒來……(死亡掉落已關閉)`);
    }
    player.respawn();
    if (shrine) {
      const { x, z } = shrine.def;
      player.mesh.position.set(x, groundHeight(x, z + 2), z + 2); // 站在石碑前方一步
      boat.place(shrine.def.boat.x, shrine.def.boat.z); // 船移到該島近岸,避免被困
    } else {
      boat.resetToDock(); // 船一起回村,避免被困外島
    }
    sailing = false;
    if (diving) setDiving(false);
    hud.setDead(false);
  });

  /** 顯示死亡畫面(海灘 + 已啟用重生點供選擇) */
  const showDeathScreen = (): void => {
    const options: { id: string; label: string }[] = [];
    for (const id of shrineActiveIds) {
      const shrine = shrines.find((s) => s.def.id === id);
      if (shrine) options.push({ id, label: `在【${shrine.def.island}】重生點重生` });
    }
    hud.setDead(true, options);
  };

  /** 重算裝備加成並寫進角色數值(血魔不超過新上限) */
  const applyEquip = (): void => {
    player.stats.equip = equipment.totalBonus();
    player.hp = Math.min(player.hp, player.stats.maxHP);
    player.mp = Math.min(player.mp, player.stats.maxMP);
  };

  const bag = new BagPanel(
    inventory,
    player.stats,
    gems,
    fruits,
    equipment,
    (size, count) => {
      const exp = inventory.useCrystals(size, count);
      if (exp <= 0) return;
      const levels = player.stats.addExp(exp);
      if (levels > 0) {
        player.hp = player.stats.maxHP;
        player.mp = player.stats.maxMP;
        audio.sfx("levelup");
        hud.showToast(`升級!Lv.${player.stats.level},獲得 ${levels * 3} 點能力點數`);
        doSave();
      } else {
        audio.sfx("crystal");
        hud.showToast(`注入 ${exp} EXP`);
      }
    },
    (key) => {
      player.stats.allocate(key);
      doSave();
    },
    () => {
      applyEquip();
      audio.sfx("ui");
      doSave();
    },
    (sea) => travelTo(sea),
    () =>
      shrineActiveIds.map((id) => ({
        id,
        island: shrines.find((s) => s.def.id === id)?.def.island ?? id,
      })),
    (id) => teleportToShrine(id),
  );

  /** 重生點傳送:背包傳送區選擇已啟用的石碑,人到碑前、船到該島近岸 */
  function teleportToShrine(id: string): void {
    const shrine = shrines.find((s) => s.active && s.def.id === id);
    if (!shrine || player.isDead) return;
    if (diving) setDiving(false);
    sailing = false;
    const { x, z } = shrine.def;
    player.mesh.position.set(x, groundHeight(x, z + 2), z + 2); // 站在石碑前方一步
    boat.place(shrine.def.boat.x, shrine.def.boat.z);
    audio.sfx("shrineTravel");
    fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), 0x7fe8e8, 16, 6);
    hud.showToast(`傳送至【${shrine.def.island}】重生點`);
    if (bag.isOpen) bag.toggle();
    doSave();
  }

  /** 海寶石傳送:人與船一起移動到目標海域的港邊(航行/潛水中也可用) */
  function travelTo(sea: 1 | 2): void {
    if (player.isDead) return;
    if (diving) setDiving(false);
    sailing = false;
    if (sea === 2) {
      const x = SECOND_SEA.x;
      const z = SECOND_SEA.z - 44;
      player.mesh.position.set(x, groundHeight(x, z), z);
      boat.place(SECOND_SEA.x + 2, SECOND_SEA.z - 58); // 停在港口鎮碼頭旁
      hud.showToast("海流湧動……抵達第二海【港口鎮】");
    } else {
      player.mesh.position.set(2.5, groundHeight(2.5, -52), -52);
      boat.resetToDock();
      hud.showToast("海流湧動……回到第一海【曙光嶼】");
    }
    audio.sfx("seaTravel");
    fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), 0x7fd8ff, 18, 7);
    if (bag.isOpen) bag.toggle();
    doSave();
  }

  const shop = new ShopPanel(inventory, equipment, () => {
    audio.sfx("coin");
    doSave();
  });

  const forge = new ForgePanel(
    inventory,
    player.stats,
    gems,
    fruits,
    () => {
      audio.sfx("anvil");
      hud.showToast(`武器強化成功!攻擊力 ${player.stats.atk}`);
      doSave();
    },
    (gem) => {
      audio.sfx("anvil");
      if (gem === "wind") player.windLevel = gems.levels.wind;
      hud.showToast(`寶石升階成功!(Lv.${gems.levels[gem]})`);
      doSave();
    },
    (fruit) => {
      audio.sfx("anvil");
      hud.showToast(`果實升階成功!(Lv.${fruits.levels[fruit]})`);
      doSave();
    },
  );

  // ---- 存檔系統:讀檔還原 + 事件觸發與定時自動存檔 ----
  const collectSave = (): SaveData => ({
    v: 1,
    level: player.stats.level,
    exp: player.stats.exp,
    points: player.stats.points,
    attrs: { ...player.stats.attrs },
    coins: inventory.coins,
    crystals: { ...inventory.crystals },
    flameOwned: gems.flameOwned,
    pos: [player.mesh.position.x, player.mesh.position.z],
    potions: inventory.potions,
    quests: quests.serialize(),
    windOwned: gems.windOwned,
    boatPos: [boat.mesh.position.x, boat.mesh.position.z],
    sailing,
    earthOwned: gems.earthOwned,
    weaponLevel: player.stats.weaponLevel,
    frostOwned: gems.frostOwned,
    tideOwned: gems.tideOwned,
    voidOwned: gems.voidOwned,
    voidDefeated,
    gemLevels: { ...gems.levels },
    equipment: equipment.serialize(),
    shrines: [...shrineActiveIds],
    seaGems: { first: inventory.firstSeaGem, second: inventory.secondSeaGem },
    lavaOwned: gems.lavaOwned,
    fruits: {
      thunderOwned: fruits.thunderOwned,
      gravityOwned: fruits.gravityOwned,
      levels: { ...fruits.levels },
    },
  });
  const doSave = (): void => saveGame(collectSave());
  setInterval(doSave, 12000);

  const saved = loadGame();
  if (saved) {
    player.stats.level = saved.level;
    player.stats.exp = saved.exp;
    player.stats.points = saved.points;
    Object.assign(player.stats.attrs, saved.attrs);
    inventory.coins = saved.coins;
    Object.assign(inventory.crystals, saved.crystals);
    inventory.potions = saved.potions ?? 0;
    if (saved.quests) quests.restore(saved.quests);
    gems.flameOwned = saved.flameOwned;
    gems.windOwned = saved.windOwned ?? false;
    gems.earthOwned = saved.earthOwned ?? false;
    gems.frostOwned = saved.frostOwned ?? false;
    gems.tideOwned = saved.tideOwned ?? false;
    gems.voidOwned = saved.voidOwned ?? false;
    gems.lavaOwned = saved.lavaOwned ?? false;
    if (saved.fruits) {
      fruits.thunderOwned = saved.fruits.thunderOwned;
      fruits.gravityOwned = saved.fruits.gravityOwned;
      Object.assign(fruits.levels, saved.fruits.levels);
    }
    voidDefeated = saved.voidDefeated ?? false;
    inventory.firstSeaGem = saved.seaGems?.first ?? false;
    inventory.secondSeaGem = saved.seaGems?.second ?? false;
    player.stats.weaponLevel = saved.weaponLevel ?? 0;
    if (saved.gemLevels) Object.assign(gems.levels, saved.gemLevels);
    if (saved.equipment) equipment.restore(saved.equipment);
    for (const id of saved.shrines ?? []) {
      const shrine = shrines.find((s) => s.def.id === id);
      if (shrine && !shrine.active && shrineActiveIds.length < MAX_ACTIVE_SHRINES) {
        shrine.setActive(true);
        shrineActiveIds.push(id);
      }
    }
    applyEquip();
    player.hasWindGem = gems.windOwned;
    player.hasFrostGem = gems.frostOwned;
    player.windLevel = gems.levels.wind;
    hud.setGems(gems);
    hud.setFruits(fruits);
    player.hp = player.stats.maxHP;
    player.mp = player.stats.maxMP;
    player.mesh.position.set(saved.pos[0], groundHeight(saved.pos[0], saved.pos[1]), saved.pos[1]);
    if (saved.boatPos) boat.place(saved.boatPos[0], saved.boatPos[1]);
    if (saved.sailing) sailing = true;
    hud.showToast("讀取存檔完成");
  }

  // 潮汐石漂在隱藏海域(企劃書:取得地點「隱藏海域」),開船靠近即可拾取
  if (!gems.tideOwned) {
    const tideGem = new Pickup("gem-tide", TIDE_SITE.x, TIDE_SITE.z);
    scene.add(tideGem.mesh);
    pickups.push(tideGem);
  }

  /** 引力果:擊敗虛空魔王後,從虛空之心殘留的引力裂隙顯現一次 */
  const spawnGravityFruit = (): void => {
    if (gravityFruitSpawned || fruits.gravityOwned) return;
    gravityFruitSpawned = true;
    const fruit = new Pickup("fruit-gravity", GRAVITY_FRUIT_SITE.x, GRAVITY_FRUIT_SITE.z);
    scene.add(fruit.mesh);
    pickups.push(fruit);
  };
  // 讀檔時若已通關但尚未取得引力果,補放到虛空之心
  if (voidDefeated && !fruits.gravityOwned) spawnGravityFruit();

  // 潛水濾鏡與結局畫面
  const diveOverlay = document.createElement("div");
  diveOverlay.style.cssText =
    "position:fixed;inset:0;pointer-events:none;display:none;background:radial-gradient(ellipse at center, rgba(20,80,140,0.25) 0%, rgba(8,40,90,0.55) 100%);z-index:5;";
  document.body.appendChild(diveOverlay);

  const endingOverlay = document.createElement("div");
  endingOverlay.id = "ending";
  endingOverlay.style.cssText =
    "position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:rgba(8,4,18,0.92);color:#fff;z-index:30;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;text-align:center;";
  endingOverlay.innerHTML = `
    <div style="font-size:42px;font-weight:700;letter-spacing:8px;">群島之歌</div>
    <div style="font-size:18px;line-height:2;opacity:0.9;">
      虛空魔王倒下,碎界之夜的陰影徹底散去。<br/>
      散落的大陸不再哭泣——六顆靈紋寶石在你手中合鳴,<br/>
      群島的歌聲,將永遠傳唱你的名字。
    </div>
    <div style="font-size:14px;opacity:0.6;">—— 主線完結,感謝遊玩 ——</div>
  `;
  const endingBtn = document.createElement("button");
  endingBtn.textContent = "回去找村長阿海領賞";
  endingBtn.style.cssText =
    "font-size:16px;padding:10px 28px;border:none;border-radius:8px;background:#8a4ae8;color:#fff;cursor:pointer;";
  endingBtn.addEventListener("click", () => {
    endingOverlay.style.display = "none";
  });
  endingOverlay.appendChild(endingBtn);
  document.body.appendChild(endingOverlay);

  const setDiving = (on: boolean): void => {
    diving = on;
    player.divingZone = on ? SUNKEN_CITY : null;
    diveOverlay.style.display = on ? "block" : "none";
    const fog = scene.fog as THREE.Fog;
    if (on) {
      fog.color.setHex(0x1a4a7a);
      fog.near = 20;
      fog.far = 110;
      scene.background = new THREE.Color(0x1a4a7a);
    } else {
      fog.color.setHex(0x87ceeb);
      fog.near = 150;
      fog.far = 650;
      scene.background = new THREE.Color(0x87ceeb);
    }
  };

  // 鏡頭環繞狀態
  let camYaw = Math.PI;
  let camPitch = 0.35;
  let camDist = 11;

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function spawnDrops(enemy: Enemy): void {
    const { x, z } = enemy.mesh.position;
    const drops: Pickup[] = [];
    if (enemy === gemGuardian && !gems.flameOwned && !gemDropSpawned) {
      gemDropSpawned = true;
      drops.push(new Pickup("gem-flame", x, z));
    }
    if (enemy === windGuardian && !gems.windOwned && !windGemDropSpawned) {
      windGemDropSpawned = true;
      drops.push(new Pickup("gem-wind", x, z));
    }
    if (enemy === earthGuardian && !gems.earthOwned && !earthGemDropSpawned) {
      earthGemDropSpawned = true;
      drops.push(new Pickup("gem-earth", x, z));
    }
    if (enemy === frostGuardian && !gems.frostOwned && !frostGemDropSpawned) {
      frostGemDropSpawned = true;
      drops.push(new Pickup("gem-frost", x, z));
    }
    if (enemy === voidGuardian && !gems.voidOwned && !voidGemDropSpawned) {
      voidGemDropSpawned = true;
      drops.push(new Pickup("gem-void", x, z));
    }
    if (enemy === magmaGuardian && !gems.lavaOwned && !lavaGemDropSpawned) {
      lavaGemDropSpawned = true;
      drops.push(new Pickup("gem-lava", x, z));
    }
    if (enemy.kind === "slime") quests.slimeKills++;
    quests.addKill(enemy.kind);
    if (enemy.kind === "voidLord" || enemy.kind === "voidGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "deep") {
      drops.push(new Pickup("medium", x, z), new Pickup("medium", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "frostGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "frost") {
      drops.push(new Pickup("medium", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "earthGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("medium", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "ember") {
      drops.push(new Pickup("medium", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "magmaGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "sand") {
      drops.push(new Pickup("medium", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "windGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "elite") {
      drops.push(new Pickup("medium", x, z), new Pickup("small", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "vine") {
      drops.push(new Pickup("small", x, z), new Pickup("small", x, z), new Pickup("coin", x, z));
    } else {
      drops.push(new Pickup("small", x, z), new Pickup("coin", x, z));
      if (Math.random() < 0.35) drops.push(new Pickup("small", x, z));
    }
    for (const drop of drops) {
      scene.add(drop.mesh);
      pickups.push(drop);
    }
  }

  if (import.meta.env.DEV) {
    // 煙霧測試掛鉤(僅 dev build),供自動化驗證讀取遊戲狀態
    Object.assign(window, {
      __game: {
        player,
        inventory,
        enemies,
        bag,
        get pickups() {
          return pickups;
        },
        get shockwaves() {
          return shockwaves;
        },
        get vortexes() {
          return vortexes;
        },
        get bolts() {
          return bolts;
        },
        gems,
        fruits,
        npcs,
        dialog,
        doSave,
        quests,
        shop,
        forge,
        boat,
        get sailing() {
          return sailing;
        },
        get diving() {
          return diving;
        },
        settings,
        chests,
        equipment,
        sky,
        audio,
        floats,
        feed,
        shrines,
        get shrineIds() {
          return [...shrineActiveIds];
        },
      },
    });
  }

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.getElapsedTime();
    // hit-stop 頓幀中世界凍結,鏡頭與粒子照常更新
    const worldDt = fx.frozen ? 0 : dt;

    // 日夜與天氣(影響光照/天色/海況/航速/配樂)
    const env = sky.update(dt, player.mesh.position, diving);
    // 海面網格跟著玩家所在海域走(兩海相距甚遠,共用同一張海面)
    if (seaOf(player.mesh.position.x) === 2) ocean.position.set(SECOND_SEA.x, 0, SECOND_SEA.z);
    else ocean.position.set(75, 0, 55);
    updateOcean(ocean, elapsed, env.waveScale);
    audio.setRain(env.raining && !diving);
    if (env.thunder) {
      audio.sfx("thunder");
      fx.shake(0.15, 0.3);
    }
    audio.setMusicMode(diving ? "night" : sailing ? "sail" : env.isNight ? "night" : "day");
    hud.setEnv(
      `${env.isNight ? "🌙" : "☀️"}${env.weather === "clear" ? "" : env.weather === "rain" ? " 🌧️" : " ⛈️"}`,
    );

    if (input.wasPressed("Tab")) {
      audio.sfx("ui");
      bag.toggle();
    }
    if (input.wasPressed("Escape")) {
      audio.sfx("ui");
      settings.toggle();
    }

    // NPC:待機動畫 + 對話範圍偵測;F 開啟/推進對話
    let nearbyNpc: Npc | null = null;
    for (const npc of npcs) {
      if (npc.update(dt, player.mesh.position)) nearbyNpc = npc;
    }
    // 重生石碑:水晶動畫 + 設置範圍偵測
    let nearbyShrine: Shrine | null = null;
    for (const shrine of shrines) {
      if (shrine.update(dt, player.mesh.position)) nearbyShrine = shrine;
    }
    // 船隻互動:岸上靠近小船 F 出海;航行中近岸 F 上岸;遺跡上方 F 潛入
    const nearBoat =
      !sailing &&
      !diving &&
      !player.isDead &&
      player.mesh.position.distanceTo(boat.mesh.position) < 5;
    const landingSpot = sailing ? boat.findLandingSpot() : null;
    const nearCity =
      sailing &&
      gems.tideOwned &&
      Math.hypot(boat.mesh.position.x - SUNKEN_CITY.x, boat.mesh.position.z - SUNKEN_CITY.z) <
        SUNKEN_CITY.r;

    if (diving) hud.setTalkPrompt(true, "按 F 浮上水面");
    else if (nearCity) hud.setTalkPrompt(true, "按 F 潛入沉沒古城");
    else if (sailing && landingSpot) hud.setTalkPrompt(true, "按 F 上岸");
    else if (nearBoat) hud.setTalkPrompt(true, "按 F 出海");
    else if (nearbyShrine && !nearbyShrine.active && !sailing && !player.isDead && !dialog.isOpen)
      hud.setTalkPrompt(true, "按 F 設置重生點");
    else
      hud.setTalkPrompt(
        nearbyNpc !== null &&
          !dialog.isOpen &&
          !shop.isOpen &&
          !forge.isOpen &&
          !player.isDead &&
          !sailing,
        nearbyNpc?.role === "shop"
          ? "按 F 交易"
          : nearbyNpc?.role === "forge"
            ? "按 F 鍛造"
            : "按 F 對話",
      );

    if (input.wasPressed("KeyF")) {
      if (shop.isOpen) {
        shop.close();
      } else if (forge.isOpen) {
        forge.close();
      } else if (dialog.isOpen) {
        dialog.advance();
      } else if (diving) {
        // 浮上水面,回到船上
        setDiving(false);
        sailing = true;
        audio.sfx("dive");
        doSave();
      } else if (sailing) {
        if (nearCity) {
          sailing = false;
          setDiving(true);
          player.mesh.position.set(boat.mesh.position.x, 0, boat.mesh.position.z);
          audio.sfx("dive");
          hud.showToast("潛入沉沒古城……潮汐石守護著你的呼吸");
        } else if (landingSpot) {
          sailing = false;
          player.mesh.position.copy(landingSpot);
          audio.sfx("ui");
          doSave();
        }
      } else if (nearBoat) {
        sailing = true;
        player.blocking = false;
        audio.sfx("ui");
        hud.showToast("出海!W 前進、A/D 轉向,近岸按 F 上岸");
      } else if (nearbyShrine && !nearbyShrine.active && !player.isDead) {
        activateShrine(nearbyShrine);
      } else if (nearbyNpc && !player.isDead) {
        audio.sfx("ui");
        if (nearbyNpc.role === "shop") shop.open();
        else if (nearbyNpc.role === "forge") forge.open();
        else dialog.open(nearbyNpc.name, nearbyNpc.getLines());
      }
    }

    // 靈力緩慢回復
    player.mp = Math.min(player.stats.maxMP, player.mp + 2 * worldDt);

    // 航行模式:船開、人站甲板;否則船停泊隨浪起伏
    if (sailing) {
      boat.sail(worldDt, input, env.boatFactor);
      player.mesh.position.copy(boat.mesh.position);
      player.mesh.position.y += 0.85;
      player.facing = boat.heading;
      player.mesh.rotation.y = boat.heading;
    } else {
      boat.idle(worldDt);
    }

    if (
      !sailing &&
      !player.isDead &&
      !bag.isOpen &&
      !dialog.isOpen &&
      !shop.isOpen &&
      !forge.isOpen &&
      !settings.isOpen
    ) {
      const { attacked, spin, chargeReady, jumped, dodged } = player.update(worldDt, input, camYaw);
      if (jumped) audio.sfx("jump");
      if (dodged) audio.sfx("dodge");
      if (chargeReady) audio.sfx("chargeReady");

      const hitEnemy = (enemy: Enemy, dmg: number, toEnemy: THREE.Vector3): void => {
        const died = enemy.takeDamage(dmg, toEnemy);
        const hitPos = enemy.mesh.position.clone().setY(enemy.mesh.position.y + 1);
        floats.spawn(hitPos.clone().setY(hitPos.y + 1.2), String(dmg), "#ffd23c");
        fx.burst(hitPos, died ? 0x9be89b : 0xffe08a, died ? 16 : 8);
        fx.hitstop(died ? 0.1 : 0.05);
        fx.shake(died ? 0.28 : 0.12, 0.18);
        audio.sfx(died ? "enemyDie" : "hit");
        if (died) spawnDrops(enemy);
      };

      if (attacked) {
        audio.sfx("swing");
        const facingDir = new THREE.Vector3(Math.sin(player.facing), 0, Math.cos(player.facing));
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
          toEnemy.y = 0;
          const dist = toEnemy.length();
          if (dist > ATTACK_RANGE) continue;
          if (dist > 0.5 && toEnemy.clone().normalize().dot(facingDir) < ATTACK_ARC_COS) continue;
          hitEnemy(enemy, player.stats.atk, toEnemy);
        }
      }

      // 迴旋斬:360° 範圍攻擊,傷害隨集氣比率 1x → 2.5x;滿氣再放出前方衝擊波斬
      if (spin !== null) {
        audio.sfx("spin");
        fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1), 0x9be8ff, 18, 9);
        const dmg = Math.round(player.stats.atk * (1 + 1.5 * spin));
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
          toEnemy.y = 0;
          if (toEnemy.length() > SPIN_RANGE) continue;
          hitEnemy(enemy, dmg, toEnemy);
        }
        if (spin >= 1) {
          audio.sfx("wave");
          const wave = new Shockwave(player.mesh.position, player.facing, dmg);
          scene.add(wave.mesh);
          shockwaves.push(wave);
        }
      }

      // 焰心石:E 施放火焰斬(消耗靈力的火焰劍氣,射程較短)
      if (
        input.wasPressed("KeyE") &&
        gems.flameOwned &&
        !player.blocking &&
        player.mp >= FLAME_MP_COST
      ) {
        player.mp -= FLAME_MP_COST;
        audio.sfx("fire");
        const fireWave = new Shockwave(
          player.mesh.position,
          player.facing,
          flameDamage(player.stats.attrs.spirit, gems.levels.flame),
          { color: 0xff7a3c, lifetime: 0.45, speed: 18 },
        );
        scene.add(fireWave.mesh);
        shockwaves.push(fireWave);
        const front = player.mesh.position
          .clone()
          .add(new THREE.Vector3(Math.sin(player.facing), 1, Math.cos(player.facing)));
        fx.burst(front, 0xff7a3c, 12, 6);
      }

      // R 喝回復藥水
      if (input.wasPressed("KeyR") && inventory.potions > 0 && player.hp < player.stats.maxHP) {
        inventory.potions--;
        player.hp = Math.min(player.stats.maxHP, player.hp + 50);
        floats.spawn(player.mesh.position.clone().setY(player.mesh.position.y + 2.6), "+50", "#7be87b");
        audio.sfx("potion");
        fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), 0x7be87b, 8, 4);
      }

      // 地殼石:C 施放地震波(360° 範圍重擊 + 大擊退)
      if (
        input.wasPressed("KeyC") &&
        gems.earthOwned &&
        !player.blocking &&
        player.mp >= QUAKE_MP_COST
      ) {
        player.mp -= QUAKE_MP_COST;
        audio.sfx("quake");
        fx.shake(0.55, 0.4);
        fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 0.5), 0xc88a3c, 22, 9);
        const dmg = quakeDamage(player.stats.attrs.spirit, gems.levels.earth);
        const range = quakeRange(gems.levels.earth);
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
          toEnemy.y = 0;
          if (toEnemy.length() > range) continue;
          hitEnemy(enemy, dmg, toEnemy);
        }
      }

      // 霜語晶:V 射出冰箭(凍結敵人)
      if (
        input.wasPressed("KeyV") &&
        gems.frostOwned &&
        !player.blocking &&
        player.mp >= ICE_MP_COST
      ) {
        player.mp -= ICE_MP_COST;
        audio.sfx("ice");
        const iceBolt = new Shockwave(
          player.mesh.position,
          player.facing,
          iceDamage(player.stats.attrs.spirit, gems.levels.frost),
          { color: 0x9adcff, lifetime: 0.7, speed: 26, freezes: true },
        );
        scene.add(iceBolt.mesh);
        shockwaves.push(iceBolt);
      }

      // 虛空石:X 短距離瞬移(朝面向位移,失敗時逐步縮短距離)
      if (input.wasPressed("KeyX") && gems.voidOwned && player.mp >= BLINK_MP_COST) {
        const dirX = Math.sin(player.facing);
        const dirZ = Math.cos(player.facing);
        const origin = player.mesh.position.clone();
        for (let dist = blinkDist(gems.levels.void); dist >= 2; dist -= 2) {
          const tx = origin.x + dirX * dist;
          const tz = origin.z + dirZ * dist;
          const ok =
            isWalkable(tx, tz) ||
            (gems.frostOwned && player.mp > BLINK_MP_COST) ||
            (diving && Math.hypot(tx - SUNKEN_CITY.x, tz - SUNKEN_CITY.z) < SUNKEN_CITY.r);
          if (ok) {
            player.mp -= BLINK_MP_COST;
            audio.sfx("blink");
            fx.burst(origin.clone().setY(origin.y + 1), 0x8a4ae8, 10, 5);
            player.blinkTo(tx, tz);
            fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1), 0x8a4ae8, 10, 5);
            break;
          }
        }
      }

      // 溶岩石:G 熔岩噴發(向前噴出岩漿衝擊波,命中附加灼燒 DoT)
      if (
        input.wasPressed("KeyG") &&
        gems.lavaOwned &&
        !player.blocking &&
        player.mp >= LAVA_MP_COST
      ) {
        player.mp -= LAVA_MP_COST;
        audio.sfx("lava");
        const lavaWave = new Shockwave(
          player.mesh.position,
          player.facing,
          lavaDamage(player.stats.attrs.spirit, gems.levels.lava),
          { color: 0xff4a1c, lifetime: 0.5, speed: 17, burns: true },
        );
        scene.add(lavaWave.mesh);
        shockwaves.push(lavaWave);
        const front = player.mesh.position
          .clone()
          .add(new THREE.Vector3(Math.sin(player.facing), 1, Math.cos(player.facing)));
        fx.burst(front, 0xff4a1c, 16, 7);
      }

      // 雷光果:Z 連鎖閃電(索敵最近敵人,向鄰近敵人跳躍,傷害遞減 + 麻痺)
      if (
        input.wasPressed("KeyZ") &&
        fruits.thunderOwned &&
        !player.blocking &&
        player.mp >= THUNDER_MP_COST
      ) {
        // 先找射程內最近的活敵作為起點
        let nearest: Enemy | null = null;
        let nearestD = THUNDER_RANGE;
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const d = enemy.mesh.position.distanceTo(player.mesh.position);
          if (d < nearestD) {
            nearestD = d;
            nearest = enemy;
          }
        }
        if (nearest) {
          player.mp -= THUNDER_MP_COST;
          audio.sfx("thunder");
          const maxChain = thunderChainCount(fruits.levels.thunder);
          const stunSec = thunderStunDuration(fruits.levels.thunder);
          const baseDmg = thunderDamage(player.stats.attrs.spirit, fruits.levels.thunder);
          const chainHit = new Set<Enemy>();
          // 折線起點為玩家上半身,逐跳連到各目標胸口
          const boltPoints: THREE.Vector3[] = [
            player.mesh.position.clone().setY(player.mesh.position.y + 1.4),
          ];
          let current: Enemy | null = nearest;
          let hopDmg = baseDmg;
          while (current && chainHit.size < maxChain) {
            const target: Enemy = current;
            chainHit.add(target);
            const dmg = Math.round(hopDmg);
            const toEnemy = new THREE.Vector3().subVectors(
              target.mesh.position,
              player.mesh.position,
            );
            const died = target.takeDamage(dmg, toEnemy);
            if (!died) target.stun(stunSec);
            const hitPos = target.mesh.position.clone().setY(target.mesh.position.y + 1);
            boltPoints.push(hitPos.clone());
            floats.spawn(hitPos.clone().setY(hitPos.y + 1.4), String(dmg), "#bfe8ff");
            fx.burst(hitPos, died ? 0x9be89b : 0xbfe8ff, died ? 16 : 8);
            audio.sfx(died ? "enemyDie" : "hit");
            if (died) spawnDrops(target);
            // 找下一個未命中、在跳躍範圍內、最近的活敵
            let next: Enemy | null = null;
            let nextD = THUNDER_CHAIN_RANGE;
            for (const enemy of enemies) {
              if (enemy.isDead || chainHit.has(enemy)) continue;
              const d = enemy.mesh.position.distanceTo(target.mesh.position);
              if (d < nextD) {
                nextD = d;
                next = enemy;
              }
            }
            current = next;
            hopDmg *= THUNDER_CHAIN_FALLOFF;
          }
          const bolt = new LightningBolt(boltPoints);
          scene.add(bolt.group);
          bolts.push(bolt);
          fx.shake(0.2, 0.16);
        }
      }

      // 引力果:T 引力漩渦(在面前生成漩渦,吸引聚怪 + 持續傷害)
      if (
        input.wasPressed("KeyT") &&
        fruits.gravityOwned &&
        !player.blocking &&
        player.mp >= GRAVITY_MP_COST
      ) {
        player.mp -= GRAVITY_MP_COST;
        audio.sfx("vortex");
        const vx = player.mesh.position.x + Math.sin(player.facing) * VORTEX_FORWARD;
        const vz = player.mesh.position.z + Math.cos(player.facing) * VORTEX_FORWARD;
        const vortex = new Vortex(
          vx,
          vz,
          vortexRadius(fruits.levels.gravity),
          vortexDuration(fruits.levels.gravity),
          vortexDamage(player.stats.attrs.spirit, fruits.levels.gravity),
        );
        scene.add(vortex.mesh);
        vortexes.push(vortex);
        fx.burst(new THREE.Vector3(vx, groundHeight(vx, vz) + 1, vz), 0xb060ff, 14, 6);
      }
    }

    // 熔岩環境傷害:每 0.8 秒灼傷一次(企劃書:火山島環境傷害機制)
    if (
      !sailing &&
      !player.isDead &&
      inLava(player.mesh.position.x, player.mesh.position.z) &&
      player.mesh.position.y - groundHeight(player.mesh.position.x, player.mesh.position.z) < 0.5
    ) {
      lavaTickT += worldDt;
      if (lavaTickT >= 0.8) {
        lavaTickT = 0;
        player.applyEnvironmentDamage(6);
        floats.spawn(player.mesh.position.clone().setY(player.mesh.position.y + 2.6), "-6", "#ff7a3c");
        audio.sfx("lava");
        fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 0.6), 0xff5a1c, 6, 4);
        if (player.isDead) showDeathScreen();
      }
    } else {
      lavaTickT = 0;
    }

    // 霜語晶冰面渡水:腳下生成冰盤,持續消耗靈力;耗盡則碎裂沖回最近岸邊
    const onIce =
      !sailing &&
      !diving &&
      !player.isDead &&
      gems.frostOwned &&
      !isWalkable(player.mesh.position.x, player.mesh.position.z);
    iceDisc.visible = onIce;
    if (onIce) {
      iceDisc.position.set(player.mesh.position.x, 0.06, player.mesh.position.z);
      player.mp -= FROST_WALK_MP_DRAIN * worldDt;
      if (player.mp <= 0) {
        player.mp = 0;
        audio.sfx("shatter");
        hud.showToast("冰面碎裂!被海浪沖回岸邊");
        player.applyEnvironmentDamage(10);
        const shore = nearestShore(player.mesh.position.x, player.mesh.position.z);
        player.mesh.position.set(shore.x, groundHeight(shore.x, shore.z), shore.z);
        if (player.isDead) showDeathScreen();
      }
    }

    for (const enemy of enemies) {
      // 水下敵人在玩家未潛水時休眠(不會攻擊海面上的船)
      const dormant =
        (enemy.kind === "deep" || enemy.kind === "voidGuardian") && !diving;
      const dmg = enemy.update(worldDt, player.mesh.position, player.isDead || dormant);
      if (dmg > 0 && !player.isDead) {
        const hit = player.takeDamage(dmg, enemy.mesh.position);
        const playerHead = player.mesh.position.clone().setY(player.mesh.position.y + 2.6);
        if (hit.blocked) {
          floats.spawn(playerHead, `格擋 -${hit.taken}`, "#cfd8e8");
          audio.sfx("block");
          fx.shake(0.12, 0.12);
          fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.3), 0xcfd8e8, 6, 5);
        } else if (hit.taken > 0) {
          floats.spawn(playerHead, `-${hit.taken}`, "#ff5544");
          audio.sfx("hurt");
          fx.shake(0.4, 0.3);
          fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), 0xff6655, 10);
        }
        if (player.isDead) showDeathScreen();
      }
      // 灼燒 DoT 結算(溶岩石熔岩噴發點燃;每 0.5 秒跳一次)
      const burnDmg = enemy.tickBurn(worldDt);
      if (burnDmg > 0 && !enemy.isDead) {
        const burnDied = enemy.takeDamage(burnDmg);
        floats.spawn(
          enemy.mesh.position.clone().setY(enemy.mesh.position.y + 2.4),
          String(burnDmg),
          "#ff7a3c",
        );
        if (burnDied) {
          audio.sfx("enemyDie");
          fx.burst(enemy.mesh.position.clone().setY(enemy.mesh.position.y + 1), 0x9be89b, 16);
          spawnDrops(enemy);
        }
      }
    }

    // 漂流寶箱:漂浮 + 開船靠近開啟,隨機獎勵,計時重生到新海點
    for (const chest of chests) {
      if (!chest.active) {
        chest.respawnT -= worldDt;
        if (chest.respawnT <= 0) {
          const spot = randomSeaSpot();
          chest.place(spot.x, spot.z);
        }
        continue;
      }
      if (chest.update(worldDt, boat.mesh.position, sailing)) {
        chest.collect();
        audio.sfx("gem");
        const roll = Math.random();
        if (roll < 0.5) {
          const coins = 20 + Math.floor(Math.random() * 41);
          inventory.coins += coins;
          hud.showToast(`漂流寶箱:獲得 ${coins} 貝拉幣!`);
        } else if (roll < 0.75) {
          const count = 2 + Math.floor(Math.random() * 2);
          inventory.crystals.small += count;
          hud.showToast(`漂流寶箱:獲得小型經驗結晶 ×${count}!`);
        } else if (roll < 0.9) {
          inventory.crystals.medium += 1;
          hud.showToast("漂流寶箱:獲得中型經驗結晶!");
        } else {
          inventory.potions += 1;
          hud.showToast("漂流寶箱:獲得回復藥水!");
        }
        fx.burst(chest.mesh.position.clone().setY(1.2), 0xffe080, 14, 6);
        bag.render();
      }
    }

    // 衝擊波:飛行 + 路徑命中結算
    shockwaves = shockwaves.filter((wave) => {
      const hits = wave.update(worldDt, enemies);
      for (const enemy of hits) {
        const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
        toEnemy.y = 0;
        const died = enemy.takeDamage(wave.damage, toEnemy);
        if (wave.freezes && !died) enemy.freeze(freezeDuration(gems.levels.frost));
        if (wave.burns && !died) enemy.burn(LAVA_BURN_DURATION, lavaBurnDps(gems.levels.lava));
        const hitPos = enemy.mesh.position.clone().setY(enemy.mesh.position.y + 1);
        floats.spawn(hitPos.clone().setY(hitPos.y + 1.2), String(wave.damage), "#7fe8ff");
        fx.burst(hitPos, died ? 0x9be89b : 0x7fe8ff, died ? 16 : 8);
        audio.sfx(died ? "enemyDie" : "hit");
        if (died) spawnDrops(enemy);
      }
      if (wave.expired) {
        scene.remove(wave.mesh);
        wave.dispose();
        return false;
      }
      return true;
    });

    // 引力漩渦:旋轉 + 吸引聚怪 + 每 tick 範圍傷害結算
    vortexes = vortexes.filter((vortex) => {
      const hits = vortex.update(worldDt, enemies);
      for (const enemy of hits) {
        const died = enemy.takeDamage(vortex.damage);
        const hitPos = enemy.mesh.position.clone().setY(enemy.mesh.position.y + 1);
        floats.spawn(hitPos.clone().setY(hitPos.y + 1.2), String(vortex.damage), "#d8b0ff");
        fx.burst(hitPos, died ? 0x9be89b : 0xb060ff, died ? 16 : 6);
        if (died) {
          audio.sfx("enemyDie");
          spawnDrops(enemy);
        }
      }
      if (vortex.expired) {
        scene.remove(vortex.mesh);
        vortex.dispose();
        return false;
      }
      return true;
    });

    // 連鎖閃電折線:淡出後移除(純特效)
    bolts = bolts.filter((bolt) => {
      bolt.update(worldDt);
      if (bolt.expired) {
        scene.remove(bolt.group);
        bolt.dispose();
        return false;
      }
      return true;
    });

    // 雷光果只在風暴天氣顯現:風暴起則落於霜雪峰山頂,風暴歇而未撿走則收回
    if (!fruits.thunderOwned) {
      const storming = sky.weather === "storm";
      if (storming && !thunderFruit) {
        thunderFruit = new Pickup("fruit-thunder", THUNDER_FRUIT_SITE.x, THUNDER_FRUIT_SITE.z);
        scene.add(thunderFruit.mesh);
        pickups.push(thunderFruit);
      } else if (!storming && thunderFruit) {
        scene.remove(thunderFruit.mesh);
        pickups = pickups.filter((p) => p !== thunderFruit);
        thunderFruit = null;
      }
    }

    pickups = pickups.filter((pickup) => {
      if (player.isDead) return true;
      const collected = pickup.update(worldDt, player.mesh.position);
      if (collected) {
        if (pickup.kind === "coin") {
          inventory.coins += 8; // 每枚貝拉幣 5 → 8(掉落量 +50%,7.5 取整)
          feed.push("🪙 獲得 8 貝拉幣");
          audio.sfx("coin");
        } else if (pickup.kind === "gem-flame") {
          feed.push("🔥 獲得靈紋寶石【焰心石】");
          gems.flameOwned = true;
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬");
          doSave();
        } else if (pickup.kind === "gem-wind") {
          feed.push("🌪️ 獲得靈紋寶石【風語石】");
          gems.windOwned = true;
          player.hasWindGem = true;
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔");
          doSave();
        } else if (pickup.kind === "gem-earth") {
          feed.push("🪨 獲得靈紋寶石【地殼石】");
          gems.earthOwned = true;
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波");
          doSave();
        } else if (pickup.kind === "gem-frost") {
          feed.push("❄️ 獲得靈紋寶石【霜語晶】");
          gems.frostOwned = true;
          player.hasFrostGem = true;
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上");
          doSave();
        } else if (pickup.kind === "gem-tide") {
          feed.push("🌊 獲得靈紋寶石【潮汐石】");
          gems.tideOwned = true;
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了");
          doSave();
        } else if (pickup.kind === "gem-void") {
          feed.push("🌀 獲得靈紋寶石【虛空石】");
          gems.voidOwned = true;
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移");
          doSave();
        } else if (pickup.kind === "gem-lava") {
          feed.push("🌋 獲得靈紋寶石【溶岩石】");
          gems.lavaOwned = true;
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人");
          doSave();
        } else if (pickup.kind === "fruit-thunder") {
          feed.push("⚡ 獲得靈樹果實【雷光果】");
          fruits.thunderOwned = true;
          thunderFruit = null;
          hud.setFruits(fruits);
          audio.sfx("gem");
          hud.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)");
          doSave();
        } else if (pickup.kind === "fruit-gravity") {
          feed.push("🌀 獲得靈樹果實【引力果】");
          fruits.gravityOwned = true;
          hud.setFruits(fruits);
          audio.sfx("gem");
          hud.showToast("獲得靈樹果實【引力果】!按 T 生成引力漩渦聚怪");
          doSave();
        } else {
          inventory.crystals[pickup.kind]++;
          const sizeName =
            pickup.kind === "small" ? "小型" : pickup.kind === "medium" ? "中型" : "大型";
          feed.push(`💎 獲得${sizeName}經驗結晶`);
          audio.sfx("crystal");
        }
        scene.remove(pickup.mesh);
        bag.render();
      }
      return !collected;
    });

    // 鏡頭:右鍵拖曳環繞 + 滾輪縮放,平滑跟隨 + 受擊震動
    if (input.rightDown) {
      camYaw -= input.dx * 0.005;
      camPitch = THREE.MathUtils.clamp(camPitch + input.dy * 0.004, 0.05, 1.2);
    }
    camDist = THREE.MathUtils.clamp(camDist + input.wheel * 0.01, 6, 18);

    const target = player.mesh.position.clone().add(new THREE.Vector3(0, 2, 0));
    const desired = new THREE.Vector3(
      target.x + Math.sin(camYaw) * Math.cos(camPitch) * camDist,
      target.y + Math.sin(camPitch) * camDist,
      target.z + Math.cos(camYaw) * Math.cos(camPitch) * camDist,
    );
    desired.y = Math.max(desired.y, groundHeight(desired.x, desired.z) + 0.6);
    const followLerp = 1 - Math.exp(-12 * dt);
    camera.position.lerp(desired, followLerp);
    camera.position.add(fx.update(dt));
    camera.lookAt(target);

    // 任務追蹤列
    const questLines: string[] = [];
    if (quests.get("gem") === "active") {
      questLines.push(gems.flameOwned ? "取回焰心石:回去找村長阿海" : "取回焰心石:擊敗主峰的大果凍");
    }
    if (quests.get("jelly") === "active") {
      const progress = quests.jellyProgress();
      questLines.push(
        progress >= JELLY_TARGET ? "果凍清理:回報漁夫小蝦" : `果凍清理:${progress}/${JELLY_TARGET}`,
      );
    }
    if (quests.get("wind") === "active") {
      questLines.push(
        gems.windOwned ? "翠風之石:回報村長阿海" : "翠風之石:搭船前往東北方的翠風林島",
      );
    }
    if (quests.get("earth") === "active") {
      questLines.push(
        gems.earthOwned ? "地殼之石:回報村長阿海" : "地殼之石:搭船前往西北方的燼岩火山島",
      );
    }
    if (quests.get("frost") === "active") {
      questLines.push(
        gems.frostOwned ? "霜語之晶:回報村長阿海" : "霜語之晶:搭船前往南方的霜雪峰島",
      );
    }
    if (quests.get("tide") === "active") {
      questLines.push(gems.tideOwned ? "隱藏海域:回報村長阿海" : "隱藏海域:西南外海尋找發光的浪");
    }
    if (quests.get("depth") === "active") {
      questLines.push(gems.voidOwned ? "深淵遺跡:回報村長阿海" : "深淵遺跡:潛入北方沉沒古城擊敗守護者");
    }
    if (quests.get("final") === "active") {
      questLines.push(voidDefeated ? "終焉之戰:回報村長阿海" : "終焉之戰:前往最北端的虛空之心");
    }
    if (quests.get("sea2") === "active") {
      questLines.push(
        sea2Ready()
          ? "跨越界海:回界海之門找領航者汐音"
          : `跨越界海:寶石${ownedGemCount()}/6・圖鑑${killedKindCount()}/${ENEMY_KINDS.length}・Lv.${player.stats.level}/${SEA2_LEVEL}`,
      );
    }
    if (quests.get("lava") === "active") {
      questLines.push(
        gems.lavaOwned
          ? "熔砂的試煉:回港口鎮找鎮長波叔回報"
          : "熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者",
      );
    }
    const huntTracks: { id: HuntId; title: string; npc: string }[] = [
      { id: "vineHunt", title: "藤蔓清剿", npc: "獵人小藤" },
      { id: "emberHunt", title: "餘燼清剿", npc: "礦工岩叔" },
      { id: "frostHunt", title: "霜寒清剿", npc: "嚮導阿凜" },
      { id: "deepHunt", title: "深海清剿", npc: "觀星者星嵐" },
    ];
    for (const track of huntTracks) {
      if (quests.get(track.id) !== "active") continue;
      const progress = quests.huntProgress(track.id);
      questLines.push(
        progress >= HUNTS[track.id].target
          ? `${track.title}:回報${track.npc}`
          : `${track.title}:${progress}/${HUNTS[track.id].target}`,
      );
    }
    hud.setQuests(questLines);

    // 最終頭目倒下 → 結局畫面(每次存檔週期只演出一次)
    if (!endingShown && voidLord.isDead) {
      endingShown = true;
      voidDefeated = true;
      spawnGravityFruit(); // 通關後引力果於虛空之心顯現
      audio.sfx("victory");
      endingOverlay.style.display = "flex";
      doSave();
    }

    // 太陽光跟著玩家走,讓兩座島都有陰影
    sun.position.set(player.mesh.position.x + 60, 100, player.mesh.position.z + 40);
    sun.target.position.set(player.mesh.position.x, 0, player.mesh.position.z);

    // 滿氣時劍身周圍冒出火花
    if (!sailing && !player.isDead && player.chargeRatio >= 1) {
      sparkleT += dt;
      if (sparkleT >= 0.16) {
        sparkleT = 0;
        const swordPos = player.mesh.position
          .clone()
          .add(new THREE.Vector3(Math.sin(player.facing) * 0.5, 1.7, Math.cos(player.facing) * 0.5));
        fx.burst(swordPos, 0xcfe8ff, 3, 2.5);
      }
    } else {
      sparkleT = 0;
    }

    floats.update(dt, camera);
    hud.update(player, inventory);
    input.endFrame();
    renderer.render(scene, camera);
  });
}

main();
