import * as THREE from "three";
import { Input } from "./core/input";
import { AudioEngine } from "./core/audio";
import { Fx } from "./core/fx";
import { createOcean, updateOcean } from "./world/ocean";
import { Sky } from "./world/sky";
import { loadSceneryModels } from "./world/sceneryModels";
import { loadEnemyModels } from "./world/enemyModels";
import { loadNpcModels, type NpcModelKey } from "./world/npcModels";
import {
  loadPlayerModel,
  getPlayerModel,
  currentCharacterId,
  cycleCharacter,
  characterDef,
  CHARACTERS,
} from "./world/playerModel";
import {
  createWorld,
  groundHeight,
  inLava,
  isWalkable,
  ISLANDS,
  TIDE_SITE,
  SUNKEN_CITY,
  SECOND_SEA,
  THIRD_SEA,
  seaOf,
  islandAt,
  THUNDER_FRUIT_SITE,
  GRAVITY_FRUIT_SITE,
  ALTAR_SITE,
  DUNGEON_SEA,
  inDungeonSea,
  OBSTACLES,
  resolveObstacles,
} from "./world/terrain";
import { Boat } from "./entities/boat";
import { Player, ATTACK_RANGE, ATTACK_ARC_COS, SPIN_RANGE } from "./entities/player";
import { Enemy } from "./entities/enemy";
import { Npc } from "./entities/npc";
import { Pickup } from "./entities/pickup";
import { Shockwave } from "./entities/shockwave";
import { Vortex } from "./entities/vortex";
import { LightningBolt } from "./entities/lightning";
import { IceArrow } from "./entities/iceArrow";
import { GroundBurst, VoidRift, LifeBeam, type TransientFx } from "./entities/gemFx";
import { NetClient, type NetState } from "./net/net";
import { RemotePlayer, colorFor } from "./net/remotePlayer";
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
  AQUA_MP_COST,
  aquaDamage,
  aquaFreeze,
  aquaRange,
  LIFE_MP_COST,
  lifeDamage,
  lifeLeech,
  ASTRAL_MP_COST,
  ASTRAL_SPREAD,
  astralDamage,
  MAPLE_MP_COST,
  MAPLE_WAVES,
  mapleDamage,
  mapleBurnDps,
  SHADOW_MP_COST,
  SHADOW_LEECH,
  shadowDamage,
  shadowRange,
  MAX_EQUIPPED_GEMS,
  GEM_ORDER,
  GEM_SLOT_COUNT,
  isActiveGem,
  type GemKey,
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
  STARFALL_MP_COST,
  STARFALL_RANGE,
  starfallDamage,
  starfallCount,
  MAX_EQUIPPED_FRUITS,
  FRUIT_ORDER,
  type FruitKey,
} from "./systems/fruits";
import { EquipmentState } from "./systems/equipment";
import { QuestLog, JELLY_TARGET, HUNTS, type HuntId } from "./systems/quests";
import { loadGame, saveGame, peekCharacterId, type SaveData } from "./systems/save";
import { Inventory, type CrystalSize } from "./systems/stats";
import { Hud } from "./ui/hud";
import { MapOverlay } from "./ui/map";
import { IslandView } from "./core/islandView";
import { BagPanel } from "./ui/bag";
import { DialogBox } from "./ui/dialog";
import { ShopPanel, type ShopMerchant } from "./ui/shop";
import { ForgePanel } from "./ui/forge";
import { SettingsPanel } from "./ui/settings";
import { FloatingTextManager, PickupFeed } from "./ui/floating";
import { Chat } from "./ui/chat";
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
  const playerModel = getPlayerModel();
  if (playerModel) player.useModel(playerModel);
  scene.add(player.mesh);

  // ── 多人連線(第 1 階段:看得到彼此)──────────────────────────
  // 連得上就多人、連不上就單機;以下任何網路狀況都不影響單機遊玩。
  const remotePlayers = new Map<string, RemotePlayer>();
  let wasHost = false; // 階段 5c:偵測「客戶端→房主」遷移以平滑接管敵人
  const net = new NetClient({
    onState(id, state) {
      let rp = remotePlayers.get(id);
      if (!rp) {
        rp = new RemotePlayer(id, state);
        remotePlayers.set(id, rp);
        scene.add(rp.mesh);
        hud.setOnline(net.connected, remotePlayers.size, net.room);
      } else {
        rp.setState(state);
      }
    },
    onLeave(id) {
      const rp = remotePlayers.get(id);
      if (rp) {
        rp.dispose();
        remotePlayers.delete(id);
        hud.setOnline(net.connected, remotePlayers.size, net.room);
      }
    },
    onStatus(connected) {
      // 斷線時清掉遠端 avatar(重連後由 welcome 的 others 重建,避免殘留/重複)
      if (!connected) {
        for (const rp of remotePlayers.values()) rp.dispose();
        remotePlayers.clear();
      }
      hud.setOnline(connected, remotePlayers.size, net.room);
    },
    // 階段 5a:斷線重連中,HUD 顯示「重新連線中…」(重連成功由 onStatus 覆寫)
    onReconnecting(active) {
      hud.setReconnecting(active, net.room);
    },
    // 階段 5c:接任房主時(客戶端→房主),敵人由傀儡平滑轉為本機權威
    onHostChange(isHost) {
      if (isHost && !wasHost) {
        for (const e of enemies) e.becomeAuthoritative();
      }
      wasHost = isHost;
    },
    // 階段 3a:客戶端套用房主的敵人快照;房主結算客戶端送來的傷害
    onEnemies(e) {
      applyEnemySnapshot(e);
    },
    onHit(i, dmg, by) {
      hostApplyHit(i, dmg, by);
    },
    // 階段 3b:房主宣告擊殺歸屬;補刀者為本機時,於自己世界結算掉落/任務
    onKill(i, by) {
      const enemy = enemies[i];
      if (by === net.localId && enemy) spawnDrops(enemy);
    },
    // 階段 3b:敵人對本機(客戶端)玩家造成傷害,房主結算後送來,於本機套用
    onPlayerDamage(dmg, sx, sy, sz, knock, eff) {
      applyRemoteDamage(dmg, sx, sy, sz, knock, eff);
    },
    // 階段 3b:客戶端對共享敵人施加的控場,房主權威套用(再經快照同步回所有人)
    onCc(i, kind, sec, dps) {
      hostApplyCc(i, kind, sec, dps);
    },
    // 階段 4b:收到同房間聊天訊息,以發話者顏色顯示
    onChat(id, text) {
      chat.push(nameFor(id), text, colorFor(id));
    },
  });
  // 階段 4b:房間聊天(Enter 開/送、Esc 取消);發話者名以 id 末兩碼簡示
  const nameFor = (id: string): string => `玩家·${id.slice(-2)}`;
  const chat = new Chat((text) => {
    net.sendChat(text);
    chat.push("你", text, 0x9be36a); // 伺服器不回送自己,故本機自行回顯(綠 = 本機色)
  });
  // 多人房間(opt-in,避免單人玩家無謂連線、連不上時的 console 紅字):
  //   ?room=xxx → 加入房間 xxx(分享連結用,不同房間互不可見)
  //   ?mp       → 向後相容,等同預設房間 lobby
  //   無參數    → 純單機,不連線
  const mpParams = new URLSearchParams(location.search);
  const roomParam = mpParams.get("room")?.trim();
  const mpRoom = roomParam ? roomParam : mpParams.has("mp") ? "lobby" : null;
  if (mpRoom) net.connect(mpRoom);
  // 狀態送出節流:約 20Hz 即足夠,遠端以插值補平
  let netSendT = 0;
  const prevPos = player.mesh.position.clone();
  // 敵人快照送出節流(房主端,約 12Hz);r2 = 縮短封包數字到小數兩位
  let netEnemyT = 0;
  const r2 = (n: number): number => Math.round(n * 100) / 100;
  // 每隻敵人在快照中佔的數字數量:x,y,z,yaw,dead,hp,statusFlag(階段 3b 由 6 增為 7)
  const SNAP_STRIDE = 7;

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
    // 第二海・珊瑚礁島(中心 1790,-110):礁石果凍 + 珊瑚守護者(掉碧波石)
    new Enemy("reef", 1770, -138),
    new Enemy("reef", 1812, -134),
    new Enemy("reef", 1756, -110),
    new Enemy("reef", 1824, -102),
    new Enemy("reef", 1786, -82),
    new Enemy("coralGuardian", 1790, -124),
    // 第二海・靈脈島(中心 2120,-180):孢子果凍 + 靈脈守護者(掉翠生石)
    new Enemy("spore", 2100, -208),
    new Enemy("spore", 2142, -204),
    new Enemy("spore", 2086, -180),
    new Enemy("spore", 2154, -172),
    new Enemy("spore", 2116, -152),
    new Enemy("lifeGuardian", 2120, -194),
    // 第二海・迷霧沼島(中心 1740,160):沼氣果凍(委託清剿,無守護者)
    new Enemy("marsh", 1722, 135),
    new Enemy("marsh", 1758, 138),
    new Enemy("marsh", 1712, 160),
    new Enemy("marsh", 1768, 162),
    new Enemy("marsh", 1740, 188),
    // 第二海・鹽晶島(中心 1980,250):鹽晶果凍
    new Enemy("brine", 1962, 228),
    new Enemy("brine", 1998, 230),
    new Enemy("brine", 1952, 252),
    new Enemy("brine", 2008, 252),
    new Enemy("brine", 1980, 278),
    // 第二海・烈陽礁(中心 2260,-40):熾光果凍
    new Enemy("solar", 2242, -62),
    new Enemy("solar", 2278, -60),
    new Enemy("solar", 2232, -38),
    new Enemy("solar", 2288, -38),
    new Enemy("solar", 2260, -14),
    // 第三海・楓紅島(中心 4200,150):楓靈果凍(委託清剿)+ 楓魂守護者
    new Enemy("maple", 4180, 130),
    new Enemy("maple", 4222, 134),
    new Enemy("maple", 4166, 158),
    new Enemy("maple", 4234, 166),
    new Enemy("maple", 4196, 190),
    new Enemy("mapleGuardian", 4200, 152),
    // 第三海・幽影灣(中心 3780,-130):幽影果凍(委託清剿)+ 幽影守護者
    new Enemy("shade", 3760, -158),
    new Enemy("shade", 3814, -152),
    new Enemy("shade", 3746, -128),
    new Enemy("shade", 3812, -108),
    new Enemy("shade", 3776, -100),
    new Enemy("shadeGuardian", 3780, -130),
    // 第三海・星砂洲(中心 4230,-170):星砂果凍(委託清剿)+ 星砂守護者
    new Enemy("star", 4212, -192),
    new Enemy("star", 4248, -190),
    new Enemy("star", 4202, -170),
    new Enemy("star", 4258, -168),
    new Enemy("star", 4230, -140),
    new Enemy("starGuardian", 4230, -170),
    // 第三海・星穹島(中心 3960,210):星砂果凍 + 星穹守護者(掉星芒石)
    new Enemy("star", 3940, 190),
    new Enemy("star", 3982, 192),
    new Enemy("star", 3936, 228),
    new Enemy("star", 3984, 230),
    new Enemy("astralGuardian", 3960, 204),
  ];

  // ── 靈脈試煉副本:三環各 15 隻孢子果凍 + 1 隻靈脈守護者(共 48 隻)──
  // 開場即建好並沉眠(多人 netIndex 依陣列順序,不能動態插入),奉獻開副本時整批復活。
  // 難度:壹 = 第二海靈脈島(hp×2.5/dmg×2),貳/參在此基礎 +15%/+25%(覆寫,不吃海域自動倍率)。
  const DUNGEON_RINGS = [
    { cx: 3820, cz: -3060, hpMul: 2.5, dmgMul: 2 },
    { cx: 4020, cz: -2960, hpMul: 2.5 * 1.15, dmgMul: 2 * 1.15 },
    { cx: 4220, cz: -3060, hpMul: 2.5 * 1.25, dmgMul: 2 * 1.25 },
  ];
  const DUNGEON_MOBS = 15;
  /** 每環敵人數(15 小怪 + 1 守護者);全清才開下一環傳送門 */
  const RING_SIZE = DUNGEON_MOBS + 1;
  const dungeonStart = enemies.length;
  for (const ring of DUNGEON_RINGS) {
    // 全島仇恨:同環敵人不論多遠都撲向玩家(島半徑 52+佈點 31 → 95 蓋滿全島);
    // 環心相距 ~224,跨環最近也有 ~139,不會追到別的環
    const opts = { hpMul: ring.hpMul, dmgMul: ring.dmgMul, noRespawn: true, chaseRange: 95, leashRange: 110 };
    for (let i = 0; i < DUNGEON_MOBS; i++) {
      // 固定環狀佈點(三圈半徑交錯),各端順序與座標一致
      const angle = (i / DUNGEON_MOBS) * Math.PI * 2;
      const radius = 13 + (i % 3) * 9;
      enemies.push(
        new Enemy("spore", ring.cx + Math.cos(angle) * radius, ring.cz + Math.sin(angle) * radius, opts),
      );
    }
    enemies.push(new Enemy("lifeGuardian", ring.cx, ring.cz, opts));
  }

  for (const enemy of enemies) scene.add(enemy.mesh);
  // 多人:陣列索引作為跨端同步的穩定 id(各端以相同順序建立同一批敵人)
  enemies.forEach((enemy, i) => (enemy.netIndex = i));
  // 副本敵人平時沉眠(死亡隱形);奉獻開副本時 reviveNow 整批喚醒
  for (let i = dungeonStart; i < enemies.length; i++) enemies[i].lieDormant();

  // ── 靈脈試煉副本:進度狀態 + 傳送門 + 奉獻/傳送 ──────────────────
  const ALTAR_CRYSTAL_COST = 3;
  const ALTAR_COIN_COST = 100;
  /** 是否有進行中(或已通關待重開)的試煉;奉獻時重置 */
  let dungeonRun = false;
  /** 各環傳送門是否開通(該環 16 隻全清) */
  const ringPortalOpen = [false, false, false];
  /** 各環出口傳送門(常駐建好,開通才顯示):壹/貳 → 下一環,參 → 返回祭壇島 */
  const ringPortals: THREE.Group[] = DUNGEON_RINGS.map((ring, k) => {
    const color = [0x5ae07a, 0xd8c84a, 0xff7a5a][k];
    const portal = new THREE.Group();
    const frame = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.26, 10, 36),
      new THREE.MeshBasicMaterial({ color }),
    );
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(1.9, 32),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
    );
    portal.add(frame, disc);
    const pz = ring.cz + 22; // 立在環心南側,避開守護者
    portal.position.set(ring.cx, groundHeight(ring.cx, pz) + 2.4, pz);
    portal.visible = false;
    scene.add(portal);
    return portal;
  });

  /** 祭壇中央的懸浮供石(createWorld 建立;主迴圈做旋轉/浮動動畫) */
  const altarOrb = scene.getObjectByName("altar-orb");
  const altarOrbBaseY = altarOrb?.position.y ?? 0;

  const crystalTotal = (): number =>
    inventory.crystals.small + inventory.crystals.medium + inventory.crystals.large;

  /** 傳送至第 k 環的南岸(進場點在小怪環外緣,留反應距離) */
  function enterRing(k: number): void {
    const ring = DUNGEON_RINGS[k];
    const z = ring.cz + 38;
    player.mesh.position.set(ring.cx, groundHeight(ring.cx, z), z);
    audio.sfx("shrineTravel");
    fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), 0x5ae07a, 16, 6);
  }

  /** 從第三環的傳送門返回祭壇島(祭壇正前方) */
  function returnToAltar(): void {
    const z = ALTAR_SITE.z - 8;
    player.mesh.position.set(ALTAR_SITE.x, groundHeight(ALTAR_SITE.x, z), z);
    audio.sfx("shrineTravel");
    fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), 0x7fe8e8, 16, 6);
    hud.showToast("踏出試煉之門,回到祭壇島");
  }

  /**
   * 祭壇奉獻:任意尺寸經驗結晶共 3 顆(自動先扣小的)+ 100 貝拉幣。
   * 成功則(重)開試煉:整批復活副本敵人、關閉全部傳送門、傳送至第一環;可重複刷。
   */
  function offerAtAltar(): void {
    if (player.isDead) return;
    if (net.connected) {
      hud.showToast("靈脈試煉為單人挑戰,多人連線時無法開啟");
      return;
    }
    if (crystalTotal() < ALTAR_CRYSTAL_COST || inventory.coins < ALTAR_COIN_COST) {
      audio.sfx("ui");
      hud.showToast(`奉獻不足:需經驗結晶×${ALTAR_CRYSTAL_COST}(任意尺寸)+ ${ALTAR_COIN_COST} 貝拉幣`);
      return;
    }
    let need = ALTAR_CRYSTAL_COST;
    for (const size of ["small", "medium", "large"] as const) {
      const used = Math.min(need, inventory.crystals[size]);
      inventory.crystals[size] -= used;
      need -= used;
    }
    inventory.coins -= ALTAR_COIN_COST;
    dungeonRun = true;
    ringPortalOpen.fill(false);
    for (const portal of ringPortals) portal.visible = false;
    for (let i = dungeonStart; i < enemies.length; i++) enemies[i].reviveNow();
    if (bag.isOpen) bag.toggle();
    map.close();
    sailing = false;
    if (diving) setDiving(false);
    enterRing(0);
    audio.sfx("gem");
    feed.push("⚔️ 靈脈試煉開啟!");
    hud.showToast("祭壇接受了奉獻……全清一環的 16 隻眷屬,傳送門便會開啟!");
    doSave();
  }
  // 各島頭目首殺掉落對應靈紋寶石
  const gemGuardian = enemies[12];
  const windGuardian = enemies.find((e) => e.kind === "windGuardian") as Enemy;
  const earthGuardian = enemies.find((e) => e.kind === "earthGuardian") as Enemy;
  const frostGuardian = enemies.find((e) => e.kind === "frostGuardian") as Enemy;
  const voidGuardian = enemies.find((e) => e.kind === "voidGuardian") as Enemy;
  const voidLord = enemies.find((e) => e.kind === "voidLord") as Enemy;
  const magmaGuardian = enemies.find((e) => e.kind === "magmaGuardian") as Enemy;
  const coralGuardian = enemies.find((e) => e.kind === "coralGuardian") as Enemy;
  const lifeGuardian = enemies.find((e) => e.kind === "lifeGuardian") as Enemy;
  const astralGuardian = enemies.find((e) => e.kind === "astralGuardian") as Enemy;
  const mapleGuardian = enemies.find((e) => e.kind === "mapleGuardian") as Enemy;
  const shadeGuardian = enemies.find((e) => e.kind === "shadeGuardian") as Enemy;
  const starGuardian = enemies.find((e) => e.kind === "starGuardian") as Enemy;

  let pickups: Pickup[] = [];
  let shockwaves: Shockwave[] = [];
  let iceArrows: IceArrow[] = [];
  let vortexes: Vortex[] = [];
  let bolts: LightningBolt[] = [];
  /** 純視覺技能特效(地震波/碧波擴散爆發、瞬移虛空裂隙、生命汲取光束):每幀更新、淡出移除 */
  let gemFx: TransientFx[] = [];
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
  let aquaGemDropSpawned = false;
  let lifeGemDropSpawned = false;
  let astralGemDropSpawned = false;
  let mapleGemDropSpawned = false;
  let shadowGemDropSpawned = false;
  let starfallFruitDropSpawned = false;
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

  // ---- 第三海解鎖條件(遠航者檢查 + HUD 追蹤列共用):Lv.35 + 擊敗第二海全部頭目 ----
  const SEA3_LEVEL = 35;
  /** 第二海全部頭目;擊敗紀錄走 quests.killsOf(隨存檔保留,重整重生不失紀錄) */
  const SEA2_BOSSES: { kind: string; name: string }[] = [
    { kind: "magmaGuardian", name: "熔岩守護者" },
    { kind: "coralGuardian", name: "珊瑚守護者" },
    { kind: "lifeGuardian", name: "靈脈守護者" },
  ];
  const defeatedSea2BossCount = (): number =>
    SEA2_BOSSES.filter((b) => quests.killsOf(b.kind) > 0).length;
  const sea3Ready = (): boolean =>
    player.stats.level >= SEA3_LEVEL && defeatedSea2BossCount() === SEA2_BOSSES.length;

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
    model?: NpcModelKey;
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
    }, "talk", config.model);

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
          "用技能鍵(數字 1–6)就能短距離瞬移,連虛空的力量都為你所用了。",
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
          "用技能鍵(數字 1–6)射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!",
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
          "用技能鍵(數字 1–6)放出地震波,震飛身邊所有敵人!",
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
          "裝備焰心石後,用技能列的數字鍵(1–6)就能施放火焰斬,去試試吧!",
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
    }, "talk", "barbarossa"),
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
    }, "talk", "henry"),
    new Npc("商人圓圓", 7, -46, 0xc8884a, () => [], "shop", "anne"),
    new Npc("鍛造大師爐婆", -150, 78, 0x8a4a2a, () => [], "forge", "sharky"),
    // 各島清剿任務 NPC(位置避開重生石碑與敵人仇恨範圍 12)
    makeHuntNpc({
      name: "獵人小藤",
      model: "henry",
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
      model: "skeleton",
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
      model: "barbarossa",
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
      model: "anne",
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
    }, "talk", "mako"),
    // 第二海・港口鎮:給予「熔砂的試煉」,熔岩守護者掉落第七顆寶石溶岩石
    new Npc("鎮長波叔", SECOND_SEA.x, SECOND_SEA.z - 36, 0xc8a04a, () => {
      const ql = quests.get("lava");
      if (ql === "done") {
        if (inventory.thirdSeaGem)
          return [
            "熔砂島的熱浪,連海風都燙得發顫……",
            "聽說你已經遠渡第三海了——真有你的!",
          ];
        return [
          "熔砂島的熱浪,連海風都燙得發顫……",
          "有了溶岩石,你連腳下的岩漿都能驅使了。",
          "對了,東南外海浮現了一座「遠海之門」。",
          "島上的遠航者,能為通過試煉的人開啟第三海之路。",
        ];
      }
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
        "南灘的商人珍珠賣的裝備,比第一海的貨色硬朗得多,先去補一身吧。",
        "想回第一海?在背包使用【第一海寶石】就行。",
      ];
    }, "talk", "barbarossa"),
    // 第二海・港口鎮:商人珍珠(販售 tier 2 裝備;位置同圓圓的南灘攤位)
    new Npc("商人珍珠", SECOND_SEA.x + 7, -46, 0xd88aa0, () => [], "shop", "mako"),
    // 第二海・珊瑚礁島:給予「礁海的低語」,珊瑚守護者掉落碧波石
    new Npc("珊瑚祭司娜瑪", 1768, -92, 0x3aa6c0, () => {
      const qa = quests.get("aqua");
      if (qa === "done")
        return [
          "礁海重歸寧靜,潮聲又能入眠了……",
          "碧波石在你手中,連海浪都聽你號令。",
        ];
      if (qa === "active" && gems.aquaOwned) {
        quests.complete("aqua");
        inventory.coins += 700;
        inventory.crystals.large += 2;
        audio.sfx("gem");
        hud.showToast("任務完成:礁海的低語!獲得 700 貝拉幣 + 大型結晶×2");
        doSave();
        return [
          "碧波石!你真的制伏了珊瑚守護者……",
          "謝禮:700 貝拉幣和兩顆大型經驗結晶。",
          "用技能鍵(數字 1–6)震盪出碧波,凍結周身所有敵人——危急時的救命符。",
        ];
      }
      if (qa === "active")
        return [
          "珊瑚守護者就盤踞在礁島中心的礁石之上。",
          "牠身上嵌著傳說中的『碧波石』,小心牠的衝撞。",
        ];
      quests.accept("aqua");
      hud.showToast("接受任務:礁海的低語");
      return [
        "歡迎來到珊瑚礁島,旅人。我是祭司娜瑪。",
        "這片礁海被『珊瑚守護者』攪得不得安寧……",
        "牠守著一顆『碧波石』——能凝聚潮汐凍結萬物的靈紋寶石。",
        "【任務】擊敗島心的珊瑚守護者,取得碧波石!",
      ];
    }, "talk", "mako"),
    // 第二海・靈脈島:給予「靈脈的搏動」,靈脈守護者掉落翠生石
    new Npc("靈脈守林人葉羅", 2098, -162, 0x3ab060, () => {
      const ql = quests.get("life");
      if (ql === "done")
        return [
          "靈脈的搏動恢復了,林木又開始低聲歌唱。",
          "翠生石與你同在,傷痕都能化作前行的力量。",
        ];
      if (ql === "active" && gems.lifeOwned) {
        quests.complete("life");
        inventory.coins += 700;
        inventory.crystals.large += 2;
        audio.sfx("gem");
        hud.showToast("任務完成:靈脈的搏動!獲得 700 貝拉幣 + 大型結晶×2");
        doSave();
        return [
          "翠生石!靈脈守護者終於肯把它交還大地了……",
          "謝禮:700 貝拉幣和兩顆大型經驗結晶。",
          "按 H 向前汲取生命,傷害敵人的同時還能回復自身——攻守兼備。",
        ];
      }
      if (ql === "active")
        return [
          "靈脈守護者在島心的生命之樹下扎了根。",
          "牠體內的『翠生石』,是這座島搏動的源頭。",
        ];
      quests.accept("life");
      hud.showToast("接受任務:靈脈的搏動");
      return [
        "你也感覺到了嗎?這座島像有心跳一樣搏動著。",
        "我是守林人葉羅。靈脈的力量被『靈脈守護者』奪走了……",
        "牠藏著一顆『翠生石』——能將傷害化為生命的靈紋寶石。",
        "【任務】擊敗島心的靈脈守護者,取得翠生石!",
      ];
    }, "talk", "anne"),
    // 第二海・熔砂島:打怪委託(熔砂果凍)
    makeHuntNpc({
      name: "拓荒者沙吉",
      model: "mako",
      x: 2168,
      z: 178,
      color: 0xc89850,
      quest: "sandHunt",
      title: "熱砂清剿",
      enemyLabel: "熔砂果凍",
      intro: [
        "這片熱砂地我想開墾,可熔砂果凍多到沒法下鏟。",
        "【任務】幫我清掉 4 隻熔砂果凍!",
        "牠們耐熱又兇,小心腳下的岩漿坑。",
      ],
      coins: 500,
      crystalSize: "large",
      crystalCount: 2,
      doneLines: ["熱砂地總算能開墾了,謝謝你!", "島心的熔岩守護者就交給你了。"],
    }),
    // 第二海・珊瑚礁島:打怪委託(礁石果凍)
    makeHuntNpc({
      name: "潛水夫阿蚌",
      model: "sharky",
      x: 1812,
      z: -130,
      color: 0x3a9ab8,
      quest: "reefHunt",
      title: "礁石清剿",
      enemyLabel: "礁石果凍",
      intro: [
        "我靠採珍珠過活,礁石果凍卻把礁區霸佔了。",
        "【任務】幫我清掉 4 隻礁石果凍!",
        "牠們會用水流衝撞,記得適時舉盾。",
      ],
      coins: 500,
      crystalSize: "large",
      crystalCount: 2,
      doneLines: ["礁區安全了,珍珠又能採了!", "祭司娜瑪說的碧波石,值得一試。"],
    }),
    // 第二海・靈脈島:打怪委託(孢子果凍)
    makeHuntNpc({
      name: "採集者藤吉",
      model: "skeletonHeadless",
      x: 2142,
      z: -200,
      color: 0x6aa83a,
      quest: "sporeHunt",
      title: "孢子清剿",
      enemyLabel: "孢子果凍",
      intro: [
        "靈脈的草藥很珍貴,但孢子果凍把它們啃光了。",
        "【任務】幫我清掉 4 隻孢子果凍!",
        "牠們行動敏捷,別讓牠們圍住你。",
      ],
      coins: 500,
      crystalSize: "large",
      crystalCount: 2,
      doneLines: ["草藥園恢復生機了,謝謝你!", "島心的靈脈守護者,就拜託你了。"],
    }),
    // 第二海・迷霧沼島:打怪委託(沼氣果凍)
    makeHuntNpc({
      name: "沼澤嚮導苔翁",
      model: "henry",
      x: 1740,
      z: 142,
      color: 0x4a7a5a,
      quest: "marshHunt",
      title: "沼氣清剿",
      enemyLabel: "沼氣果凍",
      intro: [
        "霧裡那些沼氣果凍,吐的毒霧連我都迷了路。",
        "【任務】幫我清掉 4 隻沼氣果凍!",
        "牠們藏在霧裡,靠近了再出手。",
      ],
      coins: 500,
      crystalSize: "large",
      crystalCount: 2,
      doneLines: ["霧散了些,我又能帶路了,謝謝!", "這片沼地總算安寧了。"],
    }),
    // 第二海・鹽晶島:打怪委託(鹽晶果凍)
    makeHuntNpc({
      name: "鹽工鹵伯",
      model: "skeleton",
      x: 1980,
      z: 232,
      color: 0x9ab8c0,
      quest: "brineHunt",
      title: "鹽晶清剿",
      enemyLabel: "鹽晶果凍",
      intro: [
        "鹽田被鹽晶果凍佔了,結的鹽都帶著怪味。",
        "【任務】幫我清掉 4 隻鹽晶果凍!",
        "牠們殼硬,多砍幾刀準沒錯。",
      ],
      coins: 500,
      crystalSize: "large",
      crystalCount: 2,
      doneLines: ["鹽田能開工了,這下有好鹽了!", "改天送你一袋雪鹽。"],
    }),
    // 第二海・烈陽礁:打怪委託(熾光果凍)
    makeHuntNpc({
      name: "拾光人焰娃",
      model: "barbarossa",
      x: 2260,
      z: -22,
      color: 0xe09838,
      quest: "solarHunt",
      title: "熾光清剿",
      enemyLabel: "熾光果凍",
      intro: [
        "礁上的熾光果凍燙得發亮,曬鹽曬果都得繞著走。",
        "【任務】幫我清掉 4 隻熾光果凍!",
        "牠們動作快,小心被撲到。",
      ],
      coins: 500,
      crystalSize: "large",
      crystalCount: 2,
      doneLines: ["礁石涼下來了,可以好好拾光啦!", "謝謝你,旅人。"],
    }),
    // 遠海之門:第三海解鎖試煉(Lv.35 + 擊敗第二海全部守護者),通過發第三海寶石
    new Npc("遠航者滄瀾", 2320, -195, 0x5a7ac8, () => {
      if (inventory.thirdSeaGem)
        return [
          "第三海寶石與你同行,滄海再遠也有歸途。",
          "在背包(Tab)使用海寶石,即可往返三片海域。",
          "願望潮鎮的燈火,為你指路。",
        ];
      if (sea3Ready()) {
        if (quests.get("sea3") === null) quests.accept("sea3");
        quests.complete("sea3");
        inventory.thirdSeaGem = true;
        audio.sfx("gem");
        feed.push("🌊 獲得重要道具【第三海寶石】");
        hud.showToast("獲得第三海寶石!在背包(Tab)使用即可前往第三海");
        doSave();
        return [
          "三位守護者的記憶、足以遠渡滄海的修為……",
          "你通過了試煉。收下吧——【第三海寶石】。",
          "在背包中使用它,海流就會帶你前往第三海的門戶「望潮鎮」。",
        ];
      }
      if (quests.get("sea3") === null) {
        quests.accept("sea3");
        hud.showToast("接受任務:遠渡滄海");
      }
      return [
        "我是遠航者滄瀾,滄海的引路人。",
        "第二海之外是更遼闊的第三海——想遠渡,須有斬破巨浪的實力:",
        `・擊敗第二海全部守護者(${defeatedSea2BossCount()}/${SEA2_BOSSES.length})`,
        `・修煉至 Lv.${SEA3_LEVEL}(目前 Lv.${player.stats.level})`,
        "達成之後,再回來找我。",
      ];
    }, "talk", "sharky"),
    // 第三海・望潮鎮:迎賓指路三委託島;三委託辦妥後給予「星穹的呼喚」,星穹守護者掉落星芒石
    new Npc("鎮長汐婆", THIRD_SEA.x, THIRD_SEA.z - 36, 0x6ab8a0, () => {
      const qa = quests.get("astral");
      const allDone =
        quests.get("mapleHunt") === "done" &&
        quests.get("shadeHunt") === "done" &&
        quests.get("starHunt") === "done";
      if (qa === "done")
        return [
          "星穹島的星光又靜靜灑在海上了……",
          "星芒石在你手中,連天上的星辰都會為你揮劍。",
          "潮聲說,更遠的海之後還會再召喚你……",
        ];
      if (qa === "active" && gems.astralOwned) {
        quests.complete("astral");
        inventory.coins += 800;
        inventory.crystals.large += 3;
        audio.sfx("gem");
        hud.showToast("任務完成:星穹的呼喚!獲得 800 貝拉幣 + 大型結晶×3");
        doSave();
        return [
          "星芒石!你真的接下了星穹的呼喚……",
          "謝禮:800 貝拉幣和三顆大型經驗結晶。",
          "用技能鍵(數字 1–6)揮出星芒斬——三道星光劍氣,近身全中最是兇猛。",
        ];
      }
      if (qa === "active")
        return [
          "星穹島在望潮鎮北方的外海,島頂有座隕石坑。",
          "坑心盤踞著『星穹守護者』,星芒石就嵌在牠身上。",
          "牠的星隕震爆又重又遠,看到蓄力就快躲開!",
        ];
      if (allDone) {
        quests.accept("astral");
        hud.showToast("接受任務:星穹的呼喚");
        return [
          "三座島的委託都辦妥了?你可是望潮鎮的大恩人!",
          "……聽,潮聲變了。北方外海的『星穹島』醒了。",
          "墜星鑿出的隕石坑裡,『星穹守護者』守著第十顆靈紋寶石——『星芒石』。",
          "【任務】登上星穹島,擊敗星穹守護者,取得星芒石!",
        ];
      }
      return [
        "歡迎來到第三海的門戶——望潮鎮!",
        "能遠渡滄海的,都是傳說級的冒險者。",
        "東北的『楓紅島』、西南的『幽影灣』、東南的『星砂洲』,",
        "各有居民貼出了清剿委託,去幫幫他們吧!",
        "對了,西邊的『祭壇島』沉睡著古老的海祭壇——",
        "聽說向它奉獻經驗結晶,能開啟兇險的『靈脈試煉』,勇者可以去試試。",
        "南灘的商人星塵藏著全群島最好的裝備,價錢也最傳說——值得。",
        "想回第一、二海?在背包使用對應的海寶石就行。",
      ];
    }, "talk", "anne"),
    // 第三海・望潮鎮:商人星塵(販售 tier 3 裝備;位置同圓圓的南灘攤位)
    new Npc("商人星塵", THIRD_SEA.x + 7, -46, 0x8a7ae0, () => [], "shop", "henry"),
    // 第三海・祭壇島:司祭(解說靈脈試煉的奉獻與規則)
    new Npc("司祭潮音", ALTAR_SITE.x + 7, ALTAR_SITE.z - 5, 0x5ae07a, () => {
      if (dungeonRun && ringPortalOpen[2])
        return [
          "你走完了三環試煉……靈脈的湧動都為你歡呼!",
          "祭壇隨時歡迎再次奉獻——每一次試煉,眷屬都會重新湧現。",
        ];
      return [
        "旅人,這座石壇是沉睡的海祭壇——『靈脈試煉』的入口。",
        `向祭壇奉獻任意尺寸的經驗結晶 ${ALTAR_CRYSTAL_COST} 顆(會先取小的)與 ${ALTAR_COIN_COST} 貝拉幣,試煉之門便會開啟。`,
        "試煉共三環,一環比一環兇猛;把一環的 16 隻靈脈眷屬全數擊倒,傳送門才會開啟。",
        "走完三環,祭壇會賜下 1000 貝拉幣與五顆大型經驗結晶——想再挑戰,隨時再來奉獻。",
      ];
    }),
    // 第三海・楓紅島:打怪委託(楓靈果凍)
    makeHuntNpc({
      name: "楓園主楓伯",
      model: "henry",
      x: 4170,
      z: 176,
      color: 0xd06838,
      quest: "mapleHunt",
      title: "楓靈清剿",
      enemyLabel: "楓靈果凍",
      intro: [
        "滿島的楓糖正要開採,楓靈果凍卻把楓林霸佔了。",
        "【任務】幫我清掉 4 隻楓靈果凍!",
        "牠們皮糙肉厚,別跟牠們硬拚。",
      ],
      coins: 600,
      crystalSize: "large",
      crystalCount: 3,
      doneLines: ["楓林安靜下來了,今年的楓糖有著落啦!", "這片楓紅,現在看著才叫美。"],
    }),
    // 第三海・幽影灣:打怪委託(幽影果凍)
    makeHuntNpc({
      name: "提燈人幽伯",
      model: "skeleton",
      x: 3748,
      z: -104,
      color: 0x8a6ad8,
      quest: "shadeHunt",
      title: "幽影清剿",
      enemyLabel: "幽影果凍",
      intro: [
        "灣裡的霧越來越沉,幽影果凍在暗處出沒。",
        "【任務】幫我清掉 4 隻幽影果凍!",
        "提燈照不到的地方,更要小心。",
      ],
      coins: 600,
      crystalSize: "large",
      crystalCount: 3,
      doneLines: ["燈火又能照亮整個灣了,謝謝你!", "夜路,總算敢走了。"],
    }),
    // 第三海・星砂洲:打怪委託(星砂果凍)
    makeHuntNpc({
      name: "拾砂人星珂",
      model: "mako",
      x: 4206,
      z: -144,
      color: 0x6ac8e0,
      quest: "starHunt",
      title: "星砂清剿",
      enemyLabel: "星砂果凍",
      intro: [
        "夜裡會發光的星砂是這座洲的寶貝,卻被星砂果凍吞了個精光。",
        "【任務】幫我清掉 4 隻星砂果凍!",
        "牠們動作飛快,抓準時機再出手。",
      ],
      coins: 600,
      crystalSize: "large",
      crystalCount: 3,
      doneLines: ["星砂又開始發光了,像把星空撒在沙上!", "捧一把回去吧,算我謝你。"],
    }),
  ];
  for (const npc of npcs) scene.add(npc.mesh);

  // 重生石碑:每島一座,F 設置為重生點。第一海、第二海各自獨立,每海最多 MAX_ACTIVE_SHRINES 個
  const shrines: Shrine[] = SHRINE_DEFS.map((def) => new Shrine(def));
  for (const shrine of shrines) scene.add(shrine.mesh);
  const shrineActiveIds: string[] = [];

  /** 某重生點 id 屬於哪片海域(依石碑座標) */
  const seaOfShrine = (id: string): 1 | 2 | 3 => {
    const s = shrines.find((sh) => sh.def.id === id);
    return s ? seaOf(s.def.x) : 1;
  };

  const activateShrine = (shrine: Shrine): void => {
    const sea = seaOf(shrine.def.x);
    // 同海域超過上限則替換該海最早設置的(跨海不互相影響)
    const sameSeaIds = shrineActiveIds.filter((id) => seaOfShrine(id) === sea);
    let note = `(本海 ${Math.min(sameSeaIds.length + 1, MAX_ACTIVE_SHRINES)}/${MAX_ACTIVE_SHRINES})`;
    if (sameSeaIds.length >= MAX_ACTIVE_SHRINES) {
      const oldestId = sameSeaIds[0];
      shrineActiveIds.splice(shrineActiveIds.indexOf(oldestId), 1);
      const oldest = shrines.find((s) => s.def.id === oldestId);
      if (oldest) {
        oldest.setActive(false);
        note = `(已替換本海【${oldest.def.island}】)`;
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

  // 群島地圖(按 M 開關)+ 進入島嶼時顯示島名所需的「目前所在島」追蹤
  const map = new MapOverlay();
  let shownIslandName: string | null = null;

  // 島嶼上帝視角:點地圖島嶼進入;單機全世界暫停、多人只凍結本機玩家
  const islandView = new IslandView();
  map.onInspect = (isl) => {
    map.close();
    islandView.enter(isl);
    audio.sfx("ui");
    hud.showToast(`上帝視角觀看「${isl.name}」:拖曳環繞・滾輪縮放・WASD 平移・M 回地圖・ESC 返回`);
  };

  /** 顯示死亡畫面(海灘 + 當前海域已啟用的重生點供選擇) */
  const showDeathScreen = (): void => {
    const options: { id: string; label: string }[] = [];
    const sea = seaOf(player.mesh.position.x);
    for (const id of shrineActiveIds) {
      if (seaOfShrine(id) !== sea) continue; // 只列當前海域的重生點
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

  /** 依出戰中的寶石同步角色被動(風語/霜語):未出戰即失效 */
  const syncGemPassives = (): void => {
    player.hasWindGem = gems.isEquipped("wind");
    player.hasFrostGem = gems.isEquipped("frost");
    player.windLevel = gems.levels.wind;
  };

  /** 取得寶石:有空位則自動出戰,滿格則留待玩家手動更換;並同步被動 */
  const acquireGem = (key: GemKey): void => {
    if (gems.hasFreeSlot()) gems.equip(key);
    syncGemPassives();
  };

  /** 取得果實:有空位則自動出戰,滿格則留待玩家手動更換 */
  const acquireFruit = (key: FruitKey): void => {
    if (fruits.hasFreeSlot()) fruits.equip(key);
  };

  /** 背包更換出戰寶石/果實後:重算被動、刷新 HUD 技能列、存檔 */
  const onLoadoutChange = (): void => {
    syncGemPassives();
    hud.setGems(gems);
    hud.setFruits(fruits);
    audio.sfx("ui");
    doSave();
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
      // 背包傳送清單只列出「當前所在海域」的重生點(跨海要用海寶石;副本內可傳回第三海撤離)
      shrineActiveIds
        .filter((id) => seaOfShrine(id) === seaOf(player.mesh.position.x))
        .map((id) => ({
          id,
          island: shrines.find((s) => s.def.id === id)?.def.island ?? id,
        })),
    (id) => teleportToShrine(id),
    onLoadoutChange,
    (dir) => switchCharacter(dir),
    () => characterDef(currentCharacterId()).name,
  );

  /**
   * 切換玩家角色外觀:載入下一/上一個 VRM,套用到場景玩家,並更新展示台+存檔。
   * 載入中防重入;載入失敗保留現有外觀(不擋遊玩)。
   */
  let switchingCharacter = false;
  async function switchCharacter(dir: number): Promise<void> {
    if (switchingCharacter) return;
    switchingCharacter = true;
    const nextId = cycleCharacter(currentCharacterId(), dir);
    try {
      const ok = await loadPlayerModel(nextId);
      const proto = getPlayerModel();
      if (ok && proto) {
        player.useModel(proto);
        audio.sfx("ui");
        hud.showToast(`角色外觀:${characterDef(nextId).name}`);
        doSave();
      }
      bag.refreshCharacter(currentCharacterId());
    } finally {
      switchingCharacter = false;
    }
  }

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
  function travelTo(sea: 1 | 2 | 3): void {
    if (player.isDead) return;
    if (diving) setDiving(false);
    sailing = false;
    if (sea === 3) {
      const x = THIRD_SEA.x;
      const z = THIRD_SEA.z - 44;
      player.mesh.position.set(x, groundHeight(x, z), z);
      boat.place(THIRD_SEA.x + 2, THIRD_SEA.z - 58); // 停在望潮鎮碼頭旁
      hud.showToast("海流湧動……抵達第三海【望潮鎮】");
    } else if (sea === 2) {
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

  // 三位商人共用同一面板:依 NPC 名稱切換招牌與裝備貨架(未列名者回退圓圓)
  const SHOP_MERCHANTS: Record<string, ShopMerchant> = {
    商人圓圓: { title: "商人圓圓的雜貨攤", tier: 1 },
    商人珍珠: { title: "商人珍珠的裝備舖", tier: 2 },
    商人星塵: { title: "商人星塵的星輝寶匣", tier: 3 },
  };
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
    seaGems: {
      first: inventory.firstSeaGem,
      second: inventory.secondSeaGem,
      third: inventory.thirdSeaGem,
    },
    lavaOwned: gems.lavaOwned,
    aquaOwned: gems.aquaOwned,
    lifeOwned: gems.lifeOwned,
    astralOwned: gems.astralOwned,
    mapleOwned: gems.mapleOwned,
    shadowOwned: gems.shadowOwned,
    fruits: {
      thunderOwned: fruits.thunderOwned,
      gravityOwned: fruits.gravityOwned,
      starfallOwned: fruits.starfallOwned,
      levels: { ...fruits.levels },
    },
    gemsEquipped: [...gems.equipped],
    gemSlots: [...gems.slots],
    fruitsEquipped: [...fruits.equipped],
    characterId: currentCharacterId(),
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
    gems.aquaOwned = saved.aquaOwned ?? false;
    gems.lifeOwned = saved.lifeOwned ?? false;
    gems.astralOwned = saved.astralOwned ?? false;
    gems.mapleOwned = saved.mapleOwned ?? false;
    gems.shadowOwned = saved.shadowOwned ?? false;
    if (saved.fruits) {
      fruits.thunderOwned = saved.fruits.thunderOwned;
      fruits.gravityOwned = saved.fruits.gravityOwned;
      fruits.starfallOwned = saved.fruits.starfallOwned ?? false;
      Object.assign(fruits.levels, saved.fruits.levels);
    }
    // 出戰配置:有存檔則沿用(過濾掉未持有的);舊檔無此欄位 → 依標準序自動裝備前 N 顆持有的
    gems.equipped = (saved.gemsEquipped ?? GEM_ORDER)
      .filter((k) => gems.ownedOf(k))
      .slice(0, MAX_EQUIPPED_GEMS);
    // 鍵位綁定:沿用存檔(只留仍出戰的主動寶石),空缺由 ensureSlots 依出戰順序自動補(舊檔亦然)
    gems.slots = Array.from({ length: GEM_SLOT_COUNT }, (_, i) => {
      const k = saved.gemSlots?.[i] ?? null;
      return k && gems.isEquipped(k) && isActiveGem(k) ? k : null;
    });
    gems.ensureSlots();
    fruits.equipped = (saved.fruitsEquipped ?? FRUIT_ORDER)
      .filter((k) => fruits.ownedOf(k))
      .slice(0, MAX_EQUIPPED_FRUITS);
    voidDefeated = saved.voidDefeated ?? false;
    inventory.firstSeaGem = saved.seaGems?.first ?? false;
    inventory.secondSeaGem = saved.seaGems?.second ?? false;
    inventory.thirdSeaGem = saved.seaGems?.third ?? false;
    player.stats.weaponLevel = saved.weaponLevel ?? 0;
    if (saved.gemLevels) Object.assign(gems.levels, saved.gemLevels);
    if (saved.equipment) equipment.restore(saved.equipment);
    for (const id of saved.shrines ?? []) {
      const shrine = shrines.find((s) => s.def.id === id);
      if (!shrine || shrine.active) continue;
      // 每海各自上限:該海已達上限則略過(舊檔仍相容)
      const sea = seaOf(shrine.def.x);
      const sameSeaActive = shrineActiveIds.filter((aid) => seaOfShrine(aid) === sea).length;
      if (sameSeaActive < MAX_ACTIVE_SHRINES) {
        shrine.setActive(true);
        shrineActiveIds.push(id);
      }
    }
    applyEquip();
    syncGemPassives();
    hud.setGems(gems);
    hud.setFruits(fruits);
    player.hp = player.stats.maxHP;
    player.mp = player.stats.maxMP;
    player.mesh.position.set(saved.pos[0], groundHeight(saved.pos[0], saved.pos[1]), saved.pos[1]);
    // 試煉副本進度不隨存檔保留:上次存檔停在副本裡就送回祭壇島(避免困在沉眠的空島)
    if (inDungeonSea(saved.pos[1])) {
      const az = ALTAR_SITE.z - 8;
      player.mesh.position.set(ALTAR_SITE.x, groundHeight(ALTAR_SITE.x, az), az);
    }
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
    if (enemy === coralGuardian && !gems.aquaOwned && !aquaGemDropSpawned) {
      aquaGemDropSpawned = true;
      drops.push(new Pickup("gem-aqua", x, z));
    }
    if (enemy === lifeGuardian && !gems.lifeOwned && !lifeGemDropSpawned) {
      lifeGemDropSpawned = true;
      drops.push(new Pickup("gem-life", x, z));
    }
    if (enemy === astralGuardian && !gems.astralOwned && !astralGemDropSpawned) {
      astralGemDropSpawned = true;
      drops.push(new Pickup("gem-astral", x, z));
    }
    if (enemy === mapleGuardian && !gems.mapleOwned && !mapleGemDropSpawned) {
      mapleGemDropSpawned = true;
      drops.push(new Pickup("gem-maple", x, z));
    }
    if (enemy === shadeGuardian && !gems.shadowOwned && !shadowGemDropSpawned) {
      shadowGemDropSpawned = true;
      drops.push(new Pickup("gem-shadow", x, z));
    }
    if (enemy === starGuardian && !fruits.starfallOwned && !starfallFruitDropSpawned) {
      starfallFruitDropSpawned = true;
      drops.push(new Pickup("fruit-starfall", x, z));
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
    } else if (enemy.kind === "coralGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "lifeGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "astralGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "mapleGuardian" || enemy.kind === "shadeGuardian" || enemy.kind === "starGuardian") {
      drops.push(new Pickup("large", x, z), new Pickup("large", x, z), new Pickup("coin", x, z), new Pickup("coin", x, z));
    } else if (enemy.kind === "reef" || enemy.kind === "spore") {
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

  // ── 多人階段 3a:房主權威敵人的同步處理 ──────────────────────
  /** 客戶端套用房主送來的敵人快照(扁平 [x,y,z,yaw,dead,hp]×敵人數);剛死亡者補放死亡特效 */
  function applyEnemySnapshot(e: number[]): void {
    if (net.isHost) return; // 房主以本機模擬為準,不套用(理論上也收不到自己的廣播)
    for (let k = 0; k < enemies.length; k++) {
      const o = k * SNAP_STRIDE;
      if (o + SNAP_STRIDE - 1 >= e.length) break;
      const enemy = enemies[k];
      const justDied = enemy.applyNetSnapshot(e[o], e[o + 1], e[o + 2], e[o + 3], e[o + 4] === 1, e[o + 5], e[o + 6]);
      if (justDied) {
        const ep = enemy.mesh.position;
        audio.sfx("enemyDie");
        fx.burst(ep.clone().setY(ep.y + 1), 0x9be89b, 16);
      }
    }
  }

  /**
   * 房主結算客戶端送來的傷害:權威扣血;死亡時的掉落歸屬由補刀者自己結算(階段 3b)。
   * by = 送出傷害的客戶端 id;擊殺成立則廣播 kill 給該客戶端(房主端只放死亡特效、不產掉落)。
   */
  function hostApplyHit(i: number, dmg: number, by: string): void {
    if (!net.isHost) return;
    const enemy = enemies[i];
    if (!enemy || enemy.isDead) return;
    const died = enemy.takeDamage(dmg); // 房主端 remote=false → 權威扣血
    const top = enemy.mesh.position.clone().setY(enemy.mesh.position.y + 2.4);
    floats.spawn(top, `-${Math.round(dmg)}`, "#ffd27a"); // 金色 = 同伴造成的傷害
    if (died) {
      // 死亡視覺由房主播放並透過快照同步;掉落/任務歸屬補刀的客戶端,不在房主世界產出
      audio.sfx("enemyDie");
      fx.burst(enemy.mesh.position.clone().setY(enemy.mesh.position.y + 1), 0x9be89b, 16);
      net.sendKill(i, by);
    }
  }

  /** 房主權威套用客戶端送來的控場(冰凍/灼燒/麻痺);效果經敵人快照旗標同步回所有人(階段 3b) */
  function hostApplyCc(i: number, kind: "freeze" | "burn" | "stun", sec: number, dps: number): void {
    if (!net.isHost) return;
    const enemy = enemies[i];
    if (!enemy || enemy.isDead) return;
    if (kind === "freeze") enemy.freeze(sec);
    else if (kind === "burn") enemy.burn(sec, dps);
    else enemy.stun(sec);
  }

  /**
   * 房主端:在某敵人附近找最近的「可鎖定玩家」(本機 + 在場遠端);供敵人鎖定最近者(階段 3b)。
   * @returns remoteId=null 代表最近者是房主本機;否則為該遠端玩家 id。
   * (遠端玩家死亡狀態房主無從得知,一律視為存活;客戶端死亡同步留待後續。)
   */
  function nearestPlayer(epos: THREE.Vector3): { pos: THREE.Vector3; remoteId: string | null } {
    let bestPos = player.mesh.position;
    let bestId: string | null = null;
    let bestD = player.isDead ? Infinity : epos.distanceToSquared(player.mesh.position);
    for (const [id, rp] of remotePlayers) {
      if (rp.dead) continue; // 階段 4c:已倒下的玩家不被鎖定
      const d = epos.distanceToSquared(rp.mesh.position);
      if (d < bestD) {
        bestD = d;
        bestPos = rp.mesh.position;
        bestId = id;
      }
    }
    return { pos: bestPos, remoteId: bestId };
  }

  /**
   * 客戶端:套用房主送來的「敵人對我的傷害」(突進普攻或頭目技);與單機受擊回饋一致(階段 3b)。
   * knock>0 追加擊退;eff=chill/burn 追加狀態(與房主端頭目技效果對齊)。
   */
  function applyRemoteDamage(dmg: number, sx: number, sy: number, sz: number, knock: number, eff: string): void {
    if (player.isDead) return;
    const src = new THREE.Vector3(sx, sy, sz);
    const hit = player.takeDamage(dmg, src);
    const head = player.mesh.position.clone().setY(player.mesh.position.y + 2.6);
    if (hit.blocked) {
      floats.spawn(head, `格擋 -${hit.taken}`, "#cfd8e8");
      audio.sfx("block");
      fx.shake(0.12, 0.12);
      fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.3), 0xcfd8e8, 6, 5);
    } else if (hit.taken > 0) {
      floats.spawn(head, `-${hit.taken}`, "#ff5544");
      audio.sfx("hurt");
      fx.shake(0.4, 0.3);
      fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), 0xff6655, 10);
      if (knock > 0) player.shove(src, knock);
      if (eff === "chill") player.chill(3);
      else if (eff === "burn") player.applyBurn(4, Math.max(2, Math.round(dmg * 0.15)));
    }
    if (player.isDead) showDeathScreen();
  }

  if (import.meta.env.DEV) {
    // 煙霧測試掛鉤(僅 dev build),供自動化驗證讀取遊戲狀態
    Object.assign(window, {
      __game: {
        player,
        inventory,
        enemies,
        bag,
        // 角色外觀切換(煙霧測試用):讀目前 id / 名單 / 觸發切換
        get characterId() {
          return currentCharacterId();
        },
        characters: CHARACTERS,
        switchCharacter: (dir: number) => switchCharacter(dir),
        // 玩家 VRM 原型(煙霧測試:驗證劍盾掛載與攻擊動作加速)
        get playerModel() {
          return getPlayerModel();
        },
        get pickups() {
          return pickups;
        },
        get shockwaves() {
          return shockwaves;
        },
        get iceArrows() {
          return iceArrows;
        },
        get vortexes() {
          return vortexes;
        },
        get bolts() {
          return bolts;
        },
        get gemFx() {
          return gemFx;
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
        obstacles: OBSTACLES,
        resolveObstacles,
        net,
        chat,
        map,
        islandView,
        camera,
        // 靈脈試煉副本(祭壇奉獻/逐環進度;smoke 測試據此驗證)
        dungeon: {
          get run() {
            return dungeonRun;
          },
          get portals() {
            return [...ringPortalOpen];
          },
          start: dungeonStart,
          ringSize: RING_SIZE,
          rings: DUNGEON_RINGS,
          altar: ALTAR_SITE,
          offer: offerAtAltar,
          enterRing,
          crystalCost: ALTAR_CRYSTAL_COST,
          coinCost: ALTAR_COIN_COST,
        },
        get remotePlayers() {
          return remotePlayers;
        },
      },
    });
  }

  const clock = new THREE.Clock();
  let oceanTime = 0; // 海浪相位(上帝視角暫停時凍結,故不用 clock 絕對時間)
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    // hit-stop 頓幀中世界凍結,鏡頭與粒子照常更新。
    // 上帝視角檢視中:單機全世界暫停(含日夜/海浪/NPC);多人共享世界照跑,只凍結本機玩家。
    const viewPaused = islandView.active && !net.connected;
    const worldDt = fx.frozen || viewPaused ? 0 : dt;
    const ambientDt = viewPaused ? 0 : dt;

    // 多人階段 3a:連線且非房主時,敵人切成「房主權威傀儡」——本機不跑 FSM,
    // 受擊只記帳(pendingNetDamage)等下方送房主結算。單機/房主則照常權威模擬。
    // 在任何戰鬥判定前先設定,確保本幀玩家攻擊走到正確分支。
    const clientRemote = net.connected && !net.isHost;
    for (const enemy of enemies) enemy.remote = clientRemote;

    // 日夜與天氣(影響光照/天色/海況/航速/配樂)
    const env = sky.update(ambientDt, player.mesh.position, diving);
    // 海面網格跟著玩家所在海域走(三海與試煉副本海域相距甚遠,共用同一張海面)
    const playerSea = seaOf(player.mesh.position.x);
    if (inDungeonSea(player.mesh.position.z)) ocean.position.set(DUNGEON_SEA.x, 0, DUNGEON_SEA.z);
    else if (playerSea === 3) ocean.position.set(THIRD_SEA.x, 0, THIRD_SEA.z);
    else if (playerSea === 2) ocean.position.set(SECOND_SEA.x, 0, SECOND_SEA.z);
    else ocean.position.set(75, 0, 55);
    oceanTime += ambientDt;
    updateOcean(ocean, oceanTime, env.waveScale);
    audio.setRain(env.raining && !diving);
    if (env.thunder) {
      audio.sfx("thunder");
      fx.shake(0.15, 0.3);
    }
    audio.setMusicMode(diving ? "night" : sailing ? "sail" : env.isNight ? "night" : "day");
    hud.setEnv(
      `${env.isNight ? "🌙" : "☀️"}${env.weather === "clear" ? "" : env.weather === "rain" ? " 🌧️" : " ⛈️"}`,
    );

    // 階段 4b:聊天開關。Enter 開啟輸入(單機也可開,連線時廣播、單機僅本機回顯);
    // 打字中暫停遊戲鍵盤,避免移動/攻擊。
    if (!chat.isTyping && input.wasPressed("Enter")) chat.startTyping();
    input.suspended = chat.isTyping;
    if (chat.isTyping) input.clearKeys();

    if (islandView.active) {
      // 上帝視角中:M 回地圖繼續選島、ESC 直接返回遊戲;其餘介面鍵不作用
      if (player.isDead) islandView.exit(); // 多人時可能被打死,退出以顯示死亡畫面
      else if (input.wasPressed("KeyM")) {
        audio.sfx("ui");
        islandView.exit();
        map.toggle();
      } else if (input.wasPressed("Escape")) {
        audio.sfx("ui");
        islandView.exit();
      }
    } else {
      if (input.wasPressed("Tab")) {
        audio.sfx("ui");
        bag.toggle();
      }
      if (input.wasPressed("Escape")) {
        audio.sfx("ui");
        settings.toggle();
      }
      if (input.wasPressed("KeyM")) {
        audio.sfx("ui");
        // 試煉副本中不開地圖(副本島不在群島地圖上,玩家標記會飄出畫面)
        if (inDungeonSea(player.mesh.position.z)) hud.showToast("試煉之地看不見群島的星圖……");
        else map.toggle();
      }
    }

    // 進入新島嶼時顯示島名大字(離島回外海後再進同島會再次顯示);地圖開啟時即時重繪
    {
      const isl = islandAt(player.mesh.position.x, player.mesh.position.z);
      const islName = isl?.name ?? null;
      if (islName !== shownIslandName) {
        shownIslandName = islName;
        if (islName) {
          const sea = seaOf(player.mesh.position.x);
          hud.showIslandTitle(
            islName,
            isl?.dungeon ? "靈脈試煉" : sea === 3 ? "第三海" : sea === 2 ? "第二海" : "第一海",
          );
        }
      }
      map.render(player.mesh.position.x, player.mesh.position.z);
    }

    // NPC:待機動畫 + 對話範圍偵測;F 開啟/推進對話
    let nearbyNpc: Npc | null = null;
    for (const npc of npcs) {
      if (npc.update(ambientDt, player.mesh.position)) nearbyNpc = npc;
    }
    // 重生石碑:水晶動畫 + 設置範圍偵測
    let nearbyShrine: Shrine | null = null;
    for (const shrine of shrines) {
      if (shrine.update(ambientDt, player.mesh.position)) nearbyShrine = shrine;
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
      gems.isEquipped("tide") &&
      Math.hypot(boat.mesh.position.x - SUNKEN_CITY.x, boat.mesh.position.z - SUNKEN_CITY.z) <
        SUNKEN_CITY.r;
    // 靈脈試煉:祭壇奉獻範圍 / 已開通傳送門範圍
    const nearAltar =
      !sailing &&
      !diving &&
      !player.isDead &&
      Math.hypot(player.mesh.position.x - ALTAR_SITE.x, player.mesh.position.z - ALTAR_SITE.z) < 5;
    let nearPortal = -1;
    if (!sailing && !player.isDead) {
      for (let k = 0; k < ringPortals.length; k++) {
        if (!ringPortalOpen[k]) continue;
        const pp = ringPortals[k].position;
        if (Math.hypot(player.mesh.position.x - pp.x, player.mesh.position.z - pp.z) < 4) {
          nearPortal = k;
          break;
        }
      }
    }

    if (islandView.active)
      hud.setTalkPrompt(true, "上帝視角:拖曳環繞・滾輪縮放・WASD 平移・M 回地圖・ESC 返回");
    else if (diving) hud.setTalkPrompt(true, "按 F 浮上水面");
    else if (nearCity) hud.setTalkPrompt(true, "按 F 潛入沉沒古城");
    else if (sailing && landingSpot) hud.setTalkPrompt(true, "按 F 上岸");
    else if (nearBoat) hud.setTalkPrompt(true, "按 F 出海");
    else if (nearPortal >= 0)
      hud.setTalkPrompt(true, nearPortal === 2 ? "按 F 返回祭壇島" : "按 F 前往下一環");
    else if (nearAltar && !dialog.isOpen)
      hud.setTalkPrompt(
        true,
        `按 F 奉獻開啟靈脈試煉(經驗結晶×${ALTAR_CRYSTAL_COST} + ${ALTAR_COIN_COST} 貝拉幣)`,
      );
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

    if (input.wasPressed("KeyF") && !islandView.active) {
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
      } else if (nearPortal >= 0) {
        if (nearPortal === 2) returnToAltar();
        else {
          enterRing(nearPortal + 1);
          hud.showToast(`踏入試煉之環・${nearPortal === 0 ? "貳" : "參"}——眷屬更加兇猛,小心!`);
        }
      } else if (nearAltar && !player.isDead) {
        offerAtAltar();
      } else if (nearbyShrine && !nearbyShrine.active && !player.isDead) {
        activateShrine(nearbyShrine);
      } else if (nearbyNpc && !player.isDead) {
        audio.sfx("ui");
        if (nearbyNpc.role === "shop") shop.open(SHOP_MERCHANTS[nearbyNpc.name]);
        else if (nearbyNpc.role === "forge") forge.open();
        else dialog.open(nearbyNpc.name, nearbyNpc.getLines());
      }
    }

    // 靈力緩慢回復
    player.mp = Math.min(player.stats.maxMP, player.mp + 2 * worldDt);

    // 航行模式:船開、人站甲板;否則船停泊隨浪起伏
    if (sailing) {
      // 上帝視角中 WASD 是平移鏡頭,不能開船(多人時世界照跑,故傳 0 而非 worldDt)
      boat.sail(islandView.active ? 0 : worldDt, input, env.boatFactor);
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
      !settings.isOpen &&
      !islandView.active
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

      // 寶石技能改用數字鍵 1–6:每顆出戰主動寶石綁一個鍵位(背包可調),這裡每幀補齊綁定,
      // 再用 gemCast 判定「該寶石所綁鍵位本幀是否按下」。被動寶石(風語石/潮汐石)不在此列。
      gems.ensureSlots();
      const gemCast = (key: GemKey): boolean => {
        const i = gems.slotOf(key);
        return i >= 0 && input.wasPressed(`Digit${i + 1}`);
      };

      // 焰心石:火焰斬(消耗靈力的火焰劍氣,射程較短)
      if (
        gemCast("flame") &&
        gems.isEquipped("flame") &&
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

      // 地殼石:地震波(360° 範圍重擊 + 大擊退)
      if (
        gemCast("earth") &&
        gems.isEquipped("earth") &&
        !player.blocking &&
        player.mp >= QUAKE_MP_COST
      ) {
        player.mp -= QUAKE_MP_COST;
        audio.sfx("quake");
        fx.shake(0.55, 0.4);
        fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 0.5), 0xc88a3c, 22, 9);
        const dmg = quakeDamage(player.stats.attrs.spirit, gems.levels.earth);
        const range = quakeRange(gems.levels.earth);
        const quakeBurst = new GroundBurst(player.mesh.position.x, player.mesh.position.z, {
          ringColor: 0xd8973c,
          shardColor: 0xc8803c,
          radius: range,
          shardKind: "rock",
        });
        scene.add(quakeBurst.object);
        gemFx.push(quakeBurst);
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
          toEnemy.y = 0;
          if (toEnemy.length() > range) continue;
          hitEnemy(enemy, dmg, toEnemy);
        }
      }

      // 霜語晶:射出冰箭(凍結敵人)
      if (
        gemCast("frost") &&
        gems.isEquipped("frost") &&
        !player.blocking &&
        player.mp >= ICE_MP_COST
      ) {
        player.mp -= ICE_MP_COST;
        audio.sfx("ice");
        const arrow = new IceArrow(
          player.mesh.position,
          player.facing,
          iceDamage(player.stats.attrs.spirit, gems.levels.frost),
          freezeDuration(gems.levels.frost),
        );
        scene.add(arrow.mesh);
        iceArrows.push(arrow);
      }

      // 虛空石:短距離瞬移(朝面向位移,失敗時逐步縮短距離)
      if (gemCast("void") && gems.isEquipped("void") && player.mp >= BLINK_MP_COST) {
        const dirX = Math.sin(player.facing);
        const dirZ = Math.cos(player.facing);
        const origin = player.mesh.position.clone();
        for (let dist = blinkDist(gems.levels.void); dist >= 2; dist -= 2) {
          const tx = origin.x + dirX * dist;
          const tz = origin.z + dirZ * dist;
          const ok =
            isWalkable(tx, tz) ||
            (gems.isEquipped("frost") && player.mp > BLINK_MP_COST) ||
            (diving && Math.hypot(tx - SUNKEN_CITY.x, tz - SUNKEN_CITY.z) < SUNKEN_CITY.r);
          if (ok) {
            player.mp -= BLINK_MP_COST;
            audio.sfx("blink");
            fx.burst(origin.clone().setY(origin.y + 1), 0x8a4ae8, 10, 5);
            const riftIn = new VoidRift(origin.x, origin.y + 1.2, origin.z, player.facing, "implode");
            scene.add(riftIn.object);
            gemFx.push(riftIn);
            player.blinkTo(tx, tz);
            const dest = player.mesh.position;
            fx.burst(dest.clone().setY(dest.y + 1), 0x8a4ae8, 10, 5);
            const riftOut = new VoidRift(dest.x, dest.y + 1.2, dest.z, player.facing, "explode");
            scene.add(riftOut.object);
            gemFx.push(riftOut);
            break;
          }
        }
      }

      // 溶岩石:熔岩噴發(向前噴出岩漿衝擊波,命中附加灼燒 DoT)
      if (
        gemCast("lava") &&
        gems.isEquipped("lava") &&
        !player.blocking &&
        player.mp >= LAVA_MP_COST
      ) {
        player.mp -= LAVA_MP_COST;
        audio.sfx("lava");
        const lavaWave = new Shockwave(
          player.mesh.position,
          player.facing,
          lavaDamage(player.stats.attrs.spirit, gems.levels.lava),
          { color: 0xff4a1c, lifetime: 0.5, speed: 17, burns: true, burnDps: lavaBurnDps(gems.levels.lava) },
        );
        scene.add(lavaWave.mesh);
        shockwaves.push(lavaWave);
        const front = player.mesh.position
          .clone()
          .add(new THREE.Vector3(Math.sin(player.facing), 1, Math.cos(player.facing)));
        fx.burst(front, 0xff4a1c, 16, 7);
      }

      // 碧波石:碧波震盪(自身周圍範圍傷害 + 凍結所有命中的敵人)
      if (
        gemCast("aqua") &&
        gems.isEquipped("aqua") &&
        !player.blocking &&
        player.mp >= AQUA_MP_COST
      ) {
        player.mp -= AQUA_MP_COST;
        audio.sfx("aqua");
        fx.shake(0.3, 0.3);
        fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 0.6), 0x3ad8d8, 24, 8);
        const dmg = aquaDamage(player.stats.attrs.spirit, gems.levels.aqua);
        const range = aquaRange(gems.levels.aqua);
        const aquaBurst = new GroundBurst(player.mesh.position.x, player.mesh.position.z, {
          ringColor: 0x4ad8e8,
          shardColor: 0x9af0ff,
          radius: range,
          shardKind: "drop",
          shardCount: 18,
        });
        scene.add(aquaBurst.object);
        gemFx.push(aquaBurst);
        const freezeSec = aquaFreeze(gems.levels.aqua);
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
          toEnemy.y = 0;
          if (toEnemy.length() > range) continue;
          hitEnemy(enemy, dmg, toEnemy);
          if (!enemy.isDead) enemy.freeze(freezeSec);
        }
      }

      // 翠生石:生命汲取(向前噴出衝擊波,命中回復自身生命)
      if (
        gemCast("life") &&
        gems.isEquipped("life") &&
        !player.blocking &&
        player.mp >= LIFE_MP_COST
      ) {
        player.mp -= LIFE_MP_COST;
        audio.sfx("life");
        // 即時吸血光束:沿面向一條線,範圍內敵人立即結算傷害並回血(吸取)
        const lifeDmg = lifeDamage(player.stats.attrs.spirit, gems.levels.life);
        const leech = lifeLeech(gems.levels.life);
        const beamRange = 15;
        const beamWidth = 2.2;
        const beamDir = new THREE.Vector3(Math.sin(player.facing), 0, Math.cos(player.facing));
        const beamOrigin = player.mesh.position.clone();
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const to = new THREE.Vector3().subVectors(enemy.mesh.position, beamOrigin);
          to.y = 0;
          const along = to.dot(beamDir);
          if (along < 0 || along > beamRange) continue;
          const lateral = to.clone().addScaledVector(beamDir, -along).length();
          if (lateral > beamWidth) continue;
          hitEnemy(enemy, lifeDmg, to);
          if (player.hp < player.stats.maxHP) {
            const heal = Math.max(1, Math.round(lifeDmg * leech));
            player.hp = Math.min(player.stats.maxHP, player.hp + heal);
            floats.spawn(
              player.mesh.position.clone().setY(player.mesh.position.y + 2.6),
              `+${heal}`,
              "#7be87b",
            );
          }
        }
        const beamFrom = beamOrigin.clone().setY(beamOrigin.y + 1.4).addScaledVector(beamDir, 0.4);
        const beamTo = beamOrigin.clone().setY(beamOrigin.y + 1.4).addScaledVector(beamDir, beamRange);
        const lifeBeam = new LifeBeam(beamFrom, beamTo);
        scene.add(lifeBeam.object);
        gemFx.push(lifeBeam);
      }

      // 星芒石:星芒斬(扇形射出三道星光劍氣,近距可全中、遠距單發)
      if (
        gemCast("astral") &&
        gems.isEquipped("astral") &&
        !player.blocking &&
        player.mp >= ASTRAL_MP_COST
      ) {
        player.mp -= ASTRAL_MP_COST;
        audio.sfx("astral");
        const dmg = astralDamage(player.stats.attrs.spirit, gems.levels.astral);
        for (const off of [-ASTRAL_SPREAD, 0, ASTRAL_SPREAD]) {
          const starWave = new Shockwave(player.mesh.position, player.facing + off, dmg, {
            color: 0x9ab8ff,
            lifetime: 0.55,
            speed: 20,
          });
          scene.add(starWave.mesh);
          shockwaves.push(starWave);
        }
        const front = player.mesh.position
          .clone()
          .add(new THREE.Vector3(Math.sin(player.facing), 1, Math.cos(player.facing)));
        fx.burst(front, 0x9ab8ff, 14, 6);
      }

      // 楓燃石:楓刃旋舞(以自身為中心全方位射出六道楓紅劍氣,命中附加灼燒)
      if (
        gemCast("maple") &&
        gems.isEquipped("maple") &&
        !player.blocking &&
        player.mp >= MAPLE_MP_COST
      ) {
        player.mp -= MAPLE_MP_COST;
        audio.sfx("maple");
        fx.shake(0.25, 0.2);
        const dmg = mapleDamage(player.stats.attrs.spirit, gems.levels.maple);
        const burnDps = mapleBurnDps(gems.levels.maple);
        for (let i = 0; i < MAPLE_WAVES; i++) {
          const dir = player.facing + (i / MAPLE_WAVES) * Math.PI * 2;
          const bladeWave = new Shockwave(player.mesh.position, dir, dmg, {
            color: 0xe8622c,
            lifetime: 0.5,
            speed: 18,
            burns: true,
            burnDps,
          });
          scene.add(bladeWave.mesh);
          shockwaves.push(bladeWave);
        }
        fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1), 0xe8622c, 18, 6);
      }

      // 幽影石:幽影迴環(自身周圍暗影領域 AoE,每命中一敵吸血回復自身)
      if (
        gemCast("shadow") &&
        gems.isEquipped("shadow") &&
        !player.blocking &&
        player.mp >= SHADOW_MP_COST
      ) {
        player.mp -= SHADOW_MP_COST;
        audio.sfx("shadow");
        fx.shake(0.25, 0.2);
        const dmg = shadowDamage(player.stats.attrs.spirit, gems.levels.shadow);
        const range = shadowRange(gems.levels.shadow);
        const shadowBurst = new GroundBurst(player.mesh.position.x, player.mesh.position.z, {
          ringColor: 0x5a2aa0,
          shardColor: 0x9a6ae8,
          radius: range,
          shardKind: "drop",
          shardCount: 16,
        });
        scene.add(shadowBurst.object);
        gemFx.push(shadowBurst);
        for (const enemy of enemies) {
          if (enemy.isDead) continue;
          const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
          toEnemy.y = 0;
          if (toEnemy.length() > range) continue;
          hitEnemy(enemy, dmg, toEnemy);
          if (player.hp < player.stats.maxHP) {
            const heal = Math.max(1, Math.round(dmg * SHADOW_LEECH));
            player.hp = Math.min(player.stats.maxHP, player.hp + heal);
            floats.spawn(
              player.mesh.position.clone().setY(player.mesh.position.y + 2.6),
              `+${heal}`,
              "#b48ae8",
            );
          }
        }
      }

      // 雷光果:Z 連鎖閃電(索敵最近敵人,向鄰近敵人跳躍,傷害遞減 + 麻痺)
      if (
        input.wasPressed("KeyZ") &&
        fruits.isEquipped("thunder") &&
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
        fruits.isEquipped("gravity") &&
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

      // 星辰果:G 星隕雨(索敵範圍內由近到遠最多 N 個敵人,各落一道星隕;無目標不施放)
      if (
        input.wasPressed("KeyG") &&
        fruits.isEquipped("starfall") &&
        !player.blocking &&
        player.mp >= STARFALL_MP_COST
      ) {
        const inRange = enemies.filter(
          (e) => !e.isDead && e.mesh.position.distanceTo(player.mesh.position) <= STARFALL_RANGE,
        );
        inRange.sort(
          (a, b) =>
            a.mesh.position.distanceTo(player.mesh.position) -
            b.mesh.position.distanceTo(player.mesh.position),
        );
        const targets = inRange.slice(0, starfallCount(fruits.levels.starfall));
        if (targets.length > 0) {
          player.mp -= STARFALL_MP_COST;
          audio.sfx("starfall");
          fx.shake(0.3, 0.24);
          const dmg = starfallDamage(player.stats.attrs.spirit, fruits.levels.starfall);
          for (const target of targets) {
            const tp = target.mesh.position.clone();
            const impact = new GroundBurst(tp.x, tp.z, {
              ringColor: 0xffe08a,
              shardColor: 0xfff4c8,
              radius: 3,
              shardKind: "drop",
              shardCount: 10,
            });
            scene.add(impact.object);
            gemFx.push(impact);
            fx.burst(tp.clone().setY(tp.y + 2.5), 0xffe08a, 14, 6);
            hitEnemy(target, dmg, new THREE.Vector3().subVectors(tp, player.mesh.position));
          }
        }
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
      gems.isEquipped("frost") &&
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
      // 客戶端:敵人由房主快照驅動,本機只做視覺插值,不跑 FSM/戰鬥/特殊技能/灼燒
      if (clientRemote) {
        enemy.updateRemote(worldDt);
        continue;
      }
      // 水下敵人在玩家未潛水時休眠(不會攻擊海面上的船)
      const dormant =
        (enemy.kind === "deep" || enemy.kind === "voidGuardian") && !diving;
      // 多人:房主端敵人鎖定「最近的可鎖定玩家」(本機或在場遠端);單機/無同伴沿用本機玩家。
      // targetRemote=null → 鎖定房主本機(走既有本機受擊);否則鎖定該客戶端(傷害送 pdmg)。
      const tgt = net.isHost && remotePlayers.size > 0 ? nearestPlayer(enemy.mesh.position) : null;
      const targetPos = tgt ? tgt.pos : player.mesh.position;
      const targetRemote = tgt ? tgt.remoteId : null;
      const targetDead = dormant || (targetRemote === null ? player.isDead : false);
      const dmg = enemy.update(worldDt, targetPos, targetDead);
      const ep = enemy.mesh.position;
      if (dmg > 0 && !targetDead) {
        if (targetRemote !== null) {
          // 命中遠端玩家:送該客戶端自行套用(普攻突進:無擊退、無附加狀態)
          net.sendPlayerDamage(targetRemote, dmg, ep.x, ep.y, ep.z, 0, "");
        } else {
          const hit = player.takeDamage(dmg, ep);
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
      }
      // 頭目特殊技能引爆:警示特效 + 範圍命中玩家 + 附加狀態(視覺一律在房主端播放)
      const ev = enemy.specialEvent;
      if (ev) {
        enemy.specialEvent = null;
        const bossTop = enemy.mesh.position.clone().setY(enemy.mesh.position.y + 3.2);
        floats.spawn(bossTop, `⚡${ev.name}`, "#ffd23c");
        audio.sfx(ev.sfx);
        fx.shake(0.3, 0.25);
        fx.burst(enemy.mesh.position.clone().setY(enemy.mesh.position.y + 0.6), ev.color, 24, 9);
        if (ev.healed > 0) {
          floats.spawn(
            enemy.mesh.position.clone().setY(enemy.mesh.position.y + 2.4),
            `+${ev.healed}`,
            "#7be87b",
          );
        }
        // 階段 4d:AoE 對範圍內「每位存活玩家」分別判定(本機 + 在場遠端),而非只打最近那位
        const rSq = ev.radius * ev.radius;
        // 本機(單機/房主):落在範圍內就受擊
        if (!player.isDead) {
          const dx = player.mesh.position.x - ep.x;
          const dz = player.mesh.position.z - ep.z;
          if (dx * dx + dz * dz <= rSq) {
            const hit = player.takeDamage(ev.dmg, enemy.mesh.position);
            const head = player.mesh.position.clone().setY(player.mesh.position.y + 2.6);
            if (hit.blocked) {
              floats.spawn(head, `格擋 -${hit.taken}`, "#cfd8e8");
              audio.sfx("block");
            } else if (hit.taken > 0) {
              floats.spawn(head, `-${hit.taken}`, "#ff5544");
              audio.sfx("hurt");
              fx.shake(0.5, 0.35);
              fx.burst(player.mesh.position.clone().setY(player.mesh.position.y + 1.2), ev.color, 12);
              player.shove(enemy.mesh.position, ev.knock);
              if (ev.effect === "chill") player.chill(3);
              else if (ev.effect === "burn")
                player.applyBurn(4, Math.max(2, Math.round(ev.dmg * 0.15)));
            }
            if (player.isDead) showDeathScreen();
          }
        }
        // 在場遠端(多人):房主對每位存活且落在範圍內的客戶端各送一次 pdmg
        if (net.isHost) {
          const eff = ev.effect === "chill" ? "chill" : ev.effect === "burn" ? "burn" : "";
          for (const [id, rp] of remotePlayers) {
            if (rp.dead) continue;
            const dx = rp.mesh.position.x - ep.x;
            const dz = rp.mesh.position.z - ep.z;
            if (dx * dx + dz * dz <= rSq) net.sendPlayerDamage(id, ev.dmg, ep.x, ep.y, ep.z, ev.knock, eff);
          }
        }
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

    // ── 靈脈試煉:逐環全清偵測(16 隻全倒才開傳送門;第三環全清發通關獎勵)──
    if (dungeonRun && !net.connected) {
      for (let k = 0; k < DUNGEON_RINGS.length; k++) {
        if (ringPortalOpen[k]) continue;
        let allDead = true;
        for (let i = dungeonStart + k * RING_SIZE; i < dungeonStart + (k + 1) * RING_SIZE; i++) {
          if (!enemies[i].isDead) {
            allDead = false;
            break;
          }
        }
        if (!allDead) continue;
        ringPortalOpen[k] = true;
        ringPortals[k].visible = true;
        audio.sfx("victory");
        const pp = ringPortals[k].position;
        fx.burst(pp.clone(), 0x5ae07a, 20, 8);
        if (k < 2) {
          hud.showToast(`試煉之環・${k === 0 ? "壹" : "貳"} 全清!通往下一環的傳送門開啟`);
        } else {
          inventory.coins += 1000;
          inventory.crystals.large += 5;
          feed.push("🏆 靈脈試煉通關!獲得 1000 貝拉幣");
          feed.push("💎 獲得大型經驗結晶 ×5");
          hud.showToast("靈脈試煉通關!獲得 1000 貝拉幣 + 大型結晶×5,返回的傳送門已開啟");
          doSave();
        }
      }
    }
    // 傳送門緩慢自旋(開通時才顯示);祭壇供石懸浮旋轉
    for (const portal of ringPortals) {
      if (portal.visible) portal.rotation.y += ambientDt * 0.9;
    }
    if (altarOrb) {
      altarOrb.rotation.y += ambientDt * 1.2;
      altarOrb.position.y = altarOrbBaseY + Math.sin(oceanTime * 2) * 0.15;
    }

    // 玩家灼燒 DoT 結算(頭目熔核震爆點燃;每 0.5 秒跳一次)
    const playerBurn = player.tickBurn(worldDt);
    if (playerBurn > 0 && !player.isDead) {
      player.applyEnvironmentDamage(playerBurn);
      floats.spawn(
        player.mesh.position.clone().setY(player.mesh.position.y + 2.6),
        `-${playerBurn}`,
        "#ff7a3c",
      );
      if (player.isDead) showDeathScreen();
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
        if (wave.burns && !died) enemy.burn(LAVA_BURN_DURATION, wave.burnDps);
        if (wave.leech > 0 && player.hp < player.stats.maxHP) {
          const heal = Math.max(1, Math.round(wave.damage * wave.leech));
          player.hp = Math.min(player.stats.maxHP, player.hp + heal);
          floats.spawn(
            player.mesh.position.clone().setY(player.mesh.position.y + 2.6),
            `+${heal}`,
            "#7be87b",
          );
        }
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

    // 寒冰箭矢:飛行 + 路徑命中結算(命中傷害 + 凍結)
    iceArrows = iceArrows.filter((arrow) => {
      const hits = arrow.update(worldDt, enemies);
      for (const enemy of hits) {
        const toEnemy = new THREE.Vector3().subVectors(enemy.mesh.position, player.mesh.position);
        toEnemy.y = 0;
        const died = enemy.takeDamage(arrow.damage, toEnemy);
        if (!died) enemy.freeze(arrow.freezeSec);
        const hitPos = enemy.mesh.position.clone().setY(enemy.mesh.position.y + 1);
        floats.spawn(hitPos.clone().setY(hitPos.y + 1.2), String(arrow.damage), "#9adcff");
        fx.burst(hitPos, died ? 0x9be89b : 0x9adcff, died ? 16 : 8);
        audio.sfx(died ? "enemyDie" : "hit");
        if (died) spawnDrops(enemy);
      }
      if (arrow.expired) {
        scene.remove(arrow.mesh);
        arrow.dispose();
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

    // 寶石技能視覺特效(地震波/碧波爆發、瞬移裂隙):純視覺,淡出後移除
    gemFx = gemFx.filter((fxx) => {
      fxx.update(worldDt);
      if (fxx.expired) {
        scene.remove(fxx.object);
        fxx.dispose();
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
          acquireGem("flame");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬");
          doSave();
        } else if (pickup.kind === "gem-wind") {
          feed.push("🌪️ 獲得靈紋寶石【風語石】");
          gems.windOwned = true;
          acquireGem("wind");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔");
          doSave();
        } else if (pickup.kind === "gem-earth") {
          feed.push("🪨 獲得靈紋寶石【地殼石】");
          gems.earthOwned = true;
          acquireGem("earth");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波");
          doSave();
        } else if (pickup.kind === "gem-frost") {
          feed.push("❄️ 獲得靈紋寶石【霜語晶】");
          gems.frostOwned = true;
          acquireGem("frost");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上");
          doSave();
        } else if (pickup.kind === "gem-tide") {
          feed.push("🌊 獲得靈紋寶石【潮汐石】");
          gems.tideOwned = true;
          acquireGem("tide");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了");
          doSave();
        } else if (pickup.kind === "gem-void") {
          feed.push("🌀 獲得靈紋寶石【虛空石】");
          gems.voidOwned = true;
          acquireGem("void");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移");
          doSave();
        } else if (pickup.kind === "gem-lava") {
          feed.push("🌋 獲得靈紋寶石【溶岩石】");
          gems.lavaOwned = true;
          acquireGem("lava");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人");
          doSave();
        } else if (pickup.kind === "gem-aqua") {
          feed.push("💧 獲得靈紋寶石【碧波石】");
          gems.aquaOwned = true;
          acquireGem("aqua");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【碧波石】!按 B 震盪碧波凍結周身敵人");
          doSave();
        } else if (pickup.kind === "gem-life") {
          feed.push("🌿 獲得靈紋寶石【翠生石】");
          gems.lifeOwned = true;
          acquireGem("life");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【翠生石】!按 H 生命汲取,傷敵回血");
          doSave();
        } else if (pickup.kind === "gem-astral") {
          feed.push("✨ 獲得靈紋寶石【星芒石】");
          gems.astralOwned = true;
          acquireGem("astral");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【星芒石】!用技能鍵(數字 1–6)扇形射出三道星光劍氣");
          doSave();
        } else if (pickup.kind === "gem-maple") {
          feed.push("🍁 獲得靈紋寶石【楓燃石】");
          gems.mapleOwned = true;
          acquireGem("maple");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【楓燃石】!用技能鍵(數字 1–6)全方位射出六道楓刃(灼燒)");
          doSave();
        } else if (pickup.kind === "gem-shadow") {
          feed.push("🌑 獲得靈紋寶石【幽影石】");
          gems.shadowOwned = true;
          acquireGem("shadow");
          hud.setGems(gems);
          audio.sfx("gem");
          hud.showToast("獲得靈紋寶石【幽影石】!用技能鍵(數字 1–6)展開幽影迴環,傷敵吸血");
          doSave();
        } else if (pickup.kind === "fruit-starfall") {
          feed.push("🌠 獲得靈樹果實【星辰果】");
          fruits.starfallOwned = true;
          acquireFruit("starfall");
          hud.setFruits(fruits);
          audio.sfx("gem");
          hud.showToast("獲得靈樹果實【星辰果】!按 G 召落星隕雨轟擊周圍敵人");
          doSave();
        } else if (pickup.kind === "fruit-thunder") {
          feed.push("⚡ 獲得靈樹果實【雷光果】");
          fruits.thunderOwned = true;
          acquireFruit("thunder");
          thunderFruit = null;
          hud.setFruits(fruits);
          audio.sfx("gem");
          hud.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)");
          doSave();
        } else if (pickup.kind === "fruit-gravity") {
          feed.push("🌀 獲得靈樹果實【引力果】");
          fruits.gravityOwned = true;
          acquireFruit("gravity");
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

    if (islandView.active) {
      // 上帝視角:環繞選定島嶼(拖曳/滾輪/WASD 由 islandView 處理),平滑飛向目標視角。
      // fx.update 仍要呼叫(推進 hit-stop 計時,多人時世界照跑),只是不套震動位移。
      fx.update(dt);
      const v = islandView.update(dt, input);
      camera.position.lerp(v.pos, 1 - Math.exp(-6 * dt));
      camera.lookAt(v.target);
    } else {
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
    }

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
    if (quests.get("sea3") === "active") {
      questLines.push(
        sea3Ready()
          ? "遠渡滄海:回遠海之門找遠航者滄瀾"
          : `遠渡滄海:守護者${defeatedSea2BossCount()}/${SEA2_BOSSES.length}・Lv.${player.stats.level}/${SEA3_LEVEL}`,
      );
    }
    if (quests.get("lava") === "active") {
      questLines.push(
        gems.lavaOwned
          ? "熔砂的試煉:回港口鎮找鎮長波叔回報"
          : "熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者",
      );
    }
    if (quests.get("aqua") === "active") {
      questLines.push(
        gems.aquaOwned
          ? "礁海的低語:回珊瑚礁島找祭司娜瑪回報"
          : "礁海的低語:登上珊瑚礁島,擊敗島心的珊瑚守護者",
      );
    }
    if (quests.get("life") === "active") {
      questLines.push(
        gems.lifeOwned
          ? "靈脈的搏動:回靈脈島找守林人葉羅回報"
          : "靈脈的搏動:登上靈脈島,擊敗島心的靈脈守護者",
      );
    }
    if (quests.get("astral") === "active") {
      questLines.push(
        gems.astralOwned
          ? "星穹的呼喚:回望潮鎮找鎮長汐婆回報"
          : "星穹的呼喚:望潮鎮北方的星穹島,擊敗隕石坑的星穹守護者",
      );
    }
    const huntTracks: { id: HuntId; title: string; npc: string }[] = [
      { id: "vineHunt", title: "藤蔓清剿", npc: "獵人小藤" },
      { id: "emberHunt", title: "餘燼清剿", npc: "礦工岩叔" },
      { id: "frostHunt", title: "霜寒清剿", npc: "嚮導阿凜" },
      { id: "deepHunt", title: "深海清剿", npc: "觀星者星嵐" },
      { id: "sandHunt", title: "熱砂清剿", npc: "拓荒者沙吉" },
      { id: "reefHunt", title: "礁石清剿", npc: "潛水夫阿蚌" },
      { id: "sporeHunt", title: "孢子清剿", npc: "採集者藤吉" },
      { id: "marshHunt", title: "沼氣清剿", npc: "沼澤嚮導苔翁" },
      { id: "brineHunt", title: "鹽晶清剿", npc: "鹽工鹵伯" },
      { id: "solarHunt", title: "熾光清剿", npc: "拾光人焰娃" },
      { id: "mapleHunt", title: "楓靈清剿", npc: "楓園主楓伯" },
      { id: "shadeHunt", title: "幽影清剿", npc: "提燈人幽伯" },
      { id: "starHunt", title: "星砂清剿", npc: "拾砂人星珂" },
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
    // 靈脈試煉:身在副本時顯示當前環的清剿進度
    if (dungeonRun && inDungeonSea(player.mesh.position.z)) {
      let ringIdx = 0;
      let bestDist = Infinity;
      DUNGEON_RINGS.forEach((ring, k) => {
        const d = Math.hypot(player.mesh.position.x - ring.cx, player.mesh.position.z - ring.cz);
        if (d < bestDist) {
          bestDist = d;
          ringIdx = k;
        }
      });
      let deadCount = 0;
      for (let i = dungeonStart + ringIdx * RING_SIZE; i < dungeonStart + (ringIdx + 1) * RING_SIZE; i++) {
        if (enemies[i].isDead) deadCount++;
      }
      const ringName = ["壹", "貳", "參"][ringIdx];
      questLines.push(
        deadCount >= RING_SIZE
          ? ringIdx === 2
            ? "靈脈試煉:通關!返回傳送門已開啟"
            : `靈脈試煉・${ringName}:全清!前往下一環`
          : `靈脈試煉・${ringName}:${deadCount}/${RING_SIZE}`,
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

    // ── 多人:遠端玩家插值 + 節流送出本機狀態(約 20Hz)──
    for (const rp of remotePlayers.values()) rp.update(dt);
    netSendT += dt;
    if (netSendT >= 0.05) {
      netSendT = 0;
      const p = player.mesh.position;
      const movedSq = (p.x - prevPos.x) ** 2 + (p.z - prevPos.z) ** 2;
      prevPos.copy(p);
      // 動作位元旗標(階段 4a):讓遠端 avatar 播揮劍/舉盾/騰空/受擊
      const act =
        (player.attacking ? 1 : 0) |
        (player.blocking ? 2 : 0) |
        (player.airborne ? 4 : 0) |
        (player.hurtT > 0 ? 8 : 0);
      const state: NetState = {
        x: p.x,
        y: p.y,
        z: p.z,
        facing: player.facing,
        moving: movedSq > 1e-5,
        act,
        dead: player.isDead,
        char: currentCharacterId(), // 角色外觀:遠端據此顯示同款 VRM(含中途切換)
      };
      net.sendState(state);
    }

    // ── 多人階段 3a/3b:房主廣播敵人快照(約 12Hz);客戶端排空待送傷害/控場給房主 ──
    if (clientRemote) {
      for (const enemy of enemies) {
        const i = enemy.netIndex;
        if (enemy.pendingNetDamage > 0) {
          net.sendHit(i, Math.round(enemy.pendingNetDamage));
          enemy.pendingNetDamage = 0;
        }
        // 控場(冰凍/灼燒/麻痺)送房主權威套用(階段 3b)
        if (enemy.pendingNetFreeze > 0) {
          net.sendCc(i, "freeze", enemy.pendingNetFreeze, 0);
          enemy.pendingNetFreeze = 0;
        }
        if (enemy.pendingNetStun > 0) {
          net.sendCc(i, "stun", enemy.pendingNetStun, 0);
          enemy.pendingNetStun = 0;
        }
        if (enemy.pendingNetBurnSec > 0) {
          net.sendCc(i, "burn", enemy.pendingNetBurnSec, enemy.pendingNetBurnDps);
          enemy.pendingNetBurnSec = 0;
          enemy.pendingNetBurnDps = 0;
        }
      }
    } else if (net.isHost && remotePlayers.size > 0) {
      netEnemyT += dt;
      if (netEnemyT >= 0.08) {
        netEnemyT = 0;
        const snap: number[] = [];
        for (const enemy of enemies) {
          const ep = enemy.mesh.position;
          // 每敵 SNAP_STRIDE 個數字:x,y,z,yaw,dead,hp,statusFlag(階段 3b 加入狀態旗標)
          snap.push(r2(ep.x), r2(ep.y), r2(ep.z), r2(enemy.mesh.rotation.y), enemy.isDead ? 1 : 0, enemy.hp, enemy.statusFlag);
        }
        net.sendEnemies(snap);
      }
    }

    floats.update(dt, camera);
    hud.update(player, inventory);
    input.endFrame();
    renderer.render(scene, camera);
  });
}

// 先載入自然素材 + 怪物模型 + NPC 角色模型(任一失敗都各自回退程序化樹石/果凍/村民),
// 載完才建世界開場;絕不因模型卡住開場
Promise.all([
  loadSceneryModels().catch(() => false),
  loadEnemyModels().catch(() => false),
  loadNpcModels().catch(() => false),
  loadPlayerModel(peekCharacterId() ?? undefined).catch(() => false),
])
  .catch(() => {})
  .finally(() => main());
