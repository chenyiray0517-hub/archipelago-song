import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import { hasModels, pickModel } from "./sceneryModels";

/** 各島生態:樹種(隨機挑)、岩石種、地表裝飾種(草/花/灌木…,不擋路);未列島用 FLORA_DEFAULT */
interface Flora {
  trees: string[];
  rock: string;
  decor: string[];
}
const FLORA_DEFAULT: Flora = { trees: ["common", "birch"], rock: "rock", decor: ["grass", "flowers", "bush"] };
/** 這些「綠色島嶼」維持原本的程序化樹石(不用素材包模型,也不鋪裝飾)——Rai 指定 */
const PROCEDURAL_ISLANDS = new Set(["曙光嶼", "翠風林島", "港口鎮", "靈脈島"]);
const FLORA: Record<string, Flora> = {
  曙光嶼: { trees: ["common", "birch"], rock: "rock", decor: ["grass", "flowers", "bush"] },
  翠風林島: { trees: ["palm", "common"], rock: "rock_moss", decor: ["grass", "bush", "plant"] },
  燼岩火山島: { trees: ["dead"], rock: "rock", decor: ["stump"] },
  霜雪峰島: { trees: ["pine_snow", "common_snow"], rock: "rock_snow", decor: [] },
  虛空之心: { trees: ["dead"], rock: "rock", decor: [] },
  界海之門: { trees: ["pine_snow", "birch"], rock: "rock_snow", decor: [] },
  港口鎮: { trees: ["common", "birch"], rock: "rock", decor: ["grass", "wheat", "flowers"] },
  熔砂島: { trees: ["cactus", "palm"], rock: "rock", decor: ["grass_short"] },
  珊瑚礁島: { trees: ["palm"], rock: "rock", decor: ["grass", "bush"] },
  靈脈島: { trees: ["common", "willow"], rock: "rock_moss", decor: ["grass", "flowers", "plant", "bush"] },
  迷霧沼島: { trees: ["willow", "dead"], rock: "rock_moss", decor: ["grass", "plant"] },
  鹽晶島: { trees: ["cactus"], rock: "rock_snow", decor: [] },
  烈陽礁: { trees: ["palm", "cactus"], rock: "rock", decor: ["grass_short"] },
};

interface Hill {
  x: number;
  z: number;
  r: number;
  h: number;
}

interface IslandDef {
  name: string;
  x: number;
  z: number;
  r: number;
  hills: Hill[];
  sand: number;
  grass: number;
  dark: number;
  treeCount: number;
  treeColor: number;
  /** 火山口:山頂往下挖的碗狀凹陷(熔岩池沉在裡面) */
  crater?: { x: number; z: number; r: number; depth: number };
}

const COAST_FALLOFF = 14;
const BASE_HEIGHT = 1.2;
/** 島岸外可涉水的緩衝距離 */
const WADE_MARGIN = 5;

/** 第二海中心 x(與第一海相隔開放海域,靠海寶石傳送往返) */
const SECOND_SEA_X = 2000;
/** 第二海:港口鎮所在海域中心(海面網格與傳送目標共用) */
export const SECOND_SEA = { x: SECOND_SEA_X, z: 0 };
/** 兩海分界 x:超過即視為身處第二海 */
export const SEA_BORDER_X = 1100;

/** 判定座標屬於第一海(1)或第二海(2) */
export function seaOf(x: number): 1 | 2 {
  return x > SEA_BORDER_X ? 2 : 1;
}

/** 群島配置:曙光嶼(新手村)+ 翠風林島(叢林,風語石) */
export const ISLANDS: IslandDef[] = [
  {
    name: "曙光嶼",
    x: 0,
    z: 0,
    r: 60,
    hills: [
      { x: 0, z: 12, r: 40, h: 10 },
      { x: -30, z: -22, r: 24, h: 6 },
      { x: 32, z: -14, r: 20, h: 5 },
      { x: 16, z: 34, r: 20, h: 5.5 },
    ],
    sand: 0xe8d4a0,
    grass: 0x5cab5c,
    dark: 0x3d8b3d,
    treeCount: 45,
    treeColor: 0x3d8b3d,
  },
  {
    name: "翠風林島",
    x: 150,
    z: 110,
    r: 55,
    hills: [
      { x: 0, z: 0, r: 32, h: 13 },
      { x: -22, z: 18, r: 20, h: 7 },
      { x: 20, z: -16, r: 18, h: 6 },
    ],
    sand: 0xd8c890,
    grass: 0x3a8a4a,
    dark: 0x1e5c30,
    treeCount: 70,
    treeColor: 0x256b38,
  },
  {
    name: "燼岩火山島",
    x: -150,
    z: 120,
    r: 50,
    hills: [
      { x: 0, z: 0, r: 34, h: 16 },
      { x: 18, z: -14, r: 14, h: 5 },
    ],
    sand: 0x6a5a48,
    grass: 0x7a5038,
    dark: 0x3a2820,
    treeCount: 8,
    treeColor: 0x5a4030,
    crater: { x: 0, z: 0, r: 10, depth: 6 },
  },
  {
    name: "霜雪峰島",
    x: 60,
    z: -170,
    r: 52,
    hills: [
      { x: 0, z: 0, r: 30, h: 26 },
      { x: -20, z: -15, r: 16, h: 7 },
      { x: 22, z: 12, r: 16, h: 8 },
    ],
    sand: 0xcfd8e0,
    grass: 0xe8f0f8,
    dark: 0xb8c8e0,
    treeCount: 25,
    treeColor: 0x2e6b50,
  },
  {
    name: "虛空之心",
    x: 0,
    z: 300,
    r: 28,
    hills: [{ x: 0, z: 0, r: 18, h: 8 }],
    sand: 0x4a3a5a,
    grass: 0x3a2a4a,
    dark: 0x1a1024,
    treeCount: 0,
    treeColor: 0x1a1024,
  },
  {
    name: "界海之門",
    x: 230,
    z: -60,
    r: 50,
    hills: [
      { x: 0, z: 8, r: 28, h: 9 },
      { x: -18, z: -14, r: 16, h: 4 },
      { x: 20, z: -10, r: 14, h: 4 },
    ],
    sand: 0xe8e8e0,
    grass: 0x8ab8c8,
    dark: 0x4a7a98,
    treeCount: 12,
    treeColor: 0x3a7a8a,
  },
  {
    name: "港口鎮",
    x: SECOND_SEA_X,
    z: 0,
    r: 55,
    hills: [
      { x: 0, z: 20, r: 30, h: 7 },
      { x: -24, z: -4, r: 18, h: 4 },
      { x: 26, z: 0, r: 16, h: 4.5 },
    ],
    sand: 0xe8d4a0,
    grass: 0x7ab85c,
    dark: 0x3d8b4d,
    treeCount: 28,
    treeColor: 0x3d8b4d,
  },
  {
    name: "熔砂島",
    x: 2200,
    z: 160,
    r: 56,
    hills: [
      { x: 0, z: 0, r: 36, h: 18 },
      { x: -22, z: 16, r: 18, h: 6 },
      { x: 24, z: -14, r: 16, h: 5 },
    ],
    sand: 0xe8c878,
    grass: 0xd8a850,
    dark: 0xa86838,
    treeCount: 6,
    treeColor: 0x6a8a4a,
    crater: { x: 0, z: 0, r: 11, depth: 7 },
  },
  {
    name: "珊瑚礁島",
    x: 1790,
    z: -110,
    r: 52,
    hills: [
      { x: 0, z: 0, r: 34, h: 13 },
      { x: -20, z: 16, r: 16, h: 5 },
      { x: 22, z: -12, r: 14, h: 4.5 },
    ],
    sand: 0xf0e0c0,
    grass: 0x46c8b8,
    dark: 0x2a8a9a,
    treeCount: 16,
    treeColor: 0x2a9a8a,
  },
  {
    name: "靈脈島",
    x: 2120,
    z: -180,
    r: 52,
    hills: [
      { x: 0, z: 0, r: 36, h: 15 },
      { x: -22, z: 14, r: 18, h: 6 },
      { x: 24, z: -16, r: 16, h: 5 },
    ],
    sand: 0xd8d098,
    grass: 0x6ac84a,
    dark: 0x2e8a3a,
    treeCount: 64,
    treeColor: 0x2a8a3a,
  },
  {
    name: "迷霧沼島",
    x: 1740,
    z: 160,
    r: 52,
    hills: [
      { x: 0, z: 0, r: 34, h: 13 },
      { x: -20, z: 16, r: 16, h: 5 },
      { x: 22, z: -14, r: 14, h: 4.5 },
    ],
    sand: 0x9aa878,
    grass: 0x4a7a5a,
    dark: 0x2a4a3a,
    treeCount: 44,
    treeColor: 0x3a6a4a,
  },
  {
    name: "鹽晶島",
    x: 1980,
    z: 250,
    r: 50,
    hills: [
      { x: 0, z: 0, r: 32, h: 14 },
      { x: -18, z: 14, r: 16, h: 5 },
      { x: 20, z: -12, r: 14, h: 4.5 },
    ],
    sand: 0xf0ece0,
    grass: 0xc8e0e0,
    dark: 0x9ab8c0,
    treeCount: 10,
    treeColor: 0x6a9a8a,
  },
  {
    name: "烈陽礁",
    x: 2260,
    z: -40,
    r: 50,
    hills: [
      { x: 0, z: 0, r: 32, h: 15 },
      { x: -18, z: 14, r: 16, h: 5 },
      { x: 20, z: -14, r: 14, h: 4.5 },
    ],
    sand: 0xf0c860,
    grass: 0xe09838,
    dark: 0xb06828,
    treeCount: 8,
    treeColor: 0x8a7a3a,
  },
];

/** 隱藏海域:潮汐石漂浮處(企劃書:潮汐石取得地點「隱藏海域」) */
export const TIDE_SITE = { x: -60, z: -120 };

/** 沉沒古城:開放海域的水下遺跡區(需潮汐石潛入) */
export const SUNKEN_CITY = { x: -40, z: 230, r: 26 };

/** 雷光果:霜雪峰島山頂,只在風暴天氣雷雲落下時顯現 */
export const THUNDER_FRUIT_SITE = { x: 60, z: -170 };
/** 引力果:虛空之心,擊敗虛空魔王後從殘留的引力裂隙顯現 */
export const GRAVITY_FRUIT_SITE = { x: 0, z: 288 };

/** 熔岩區(站立會持續受到環境傷害,企劃書:火山島環境傷害機制) */
export const LAVA_ZONES = [
  { x: -150, z: 120, r: 7 },
  { x: -132, z: 128, r: 4 },
  { x: -163, z: 134, r: 4.5 },
  // 熔砂島(第二海):熱砂底下的遠古岩漿坑
  { x: 2200, z: 160, r: 8 },
  { x: 2186, z: 168, r: 4 },
  { x: 2214, z: 152, r: 4 },
];

/** 該座標是否在熔岩區內 */
export function inLava(x: number, z: number): boolean {
  return LAVA_ZONES.some((zone) => Math.hypot(x - zone.x, z - zone.z) < zone.r);
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function islandHeight(def: IslandDef, x: number, z: number): number {
  const lx = x - def.x;
  const lz = z - def.z;
  const d = Math.hypot(lx, lz);
  if (d >= def.r) return 0;
  const mask = smoothstep(Math.min((def.r - d) / COAST_FALLOFF, 1));

  let hills = 0;
  for (const hill of def.hills) {
    const hd = Math.hypot(lx - hill.x, lz - hill.z);
    if (hd < hill.r) hills += hill.h * smoothstep(1 - hd / hill.r);
  }

  const bump = Math.sin(x * 0.3) * Math.cos(z * 0.3) * 0.5;

  let crater = 0;
  if (def.crater) {
    const cd = Math.hypot(lx - def.crater.x, lz - def.crater.z);
    if (cd < def.crater.r) crater = def.crater.depth * smoothstep(1 - cd / def.crater.r);
  }

  return mask * (BASE_HEIGHT + hills + bump - crater);
}

/**
 * 地形高度函數:取所有島嶼高度的最大值,海面為 0。
 * 地形網格、角色落地與船隻吃水共用此函數,保證視覺與碰撞一致。
 */
export function groundHeight(x: number, z: number): number {
  let h = 0;
  for (const def of ISLANDS) h = Math.max(h, islandHeight(def, x, z));
  return h;
}

/** 步行可達:任一島嶼岸邊涉水範圍內(出海要靠船) */
export function isWalkable(x: number, z: number): boolean {
  return ISLANDS.some((def) => Math.hypot(x - def.x, z - def.z) < def.r + WADE_MARGIN);
}

/** 該座標是否為可行船水域(吃水深度足夠) */
export function isSailable(x: number, z: number): boolean {
  return groundHeight(x, z) < 0.25;
}

/** 場景障礙物碰撞體(以圓近似:樹幹/石頭/房子/碼頭柱/古城石柱);程序生成時填入 */
export interface Obstacle {
  x: number;
  z: number;
  r: number;
}
export const OBSTACLES: Obstacle[] = [];

/** 實體與障礙物的預設碰撞半徑(約玩家身寬) */
const ENTITY_RADIUS = 0.45;

/**
 * 把實體圓心推出所有重疊的障礙物(單次掃描;沿障礙→實體向量推開,
 * 自然產生貼牆滑行)。障礙物稀疏(全群島約數百個),直接全掃即可。
 */
export function resolveObstacles(
  x: number,
  z: number,
  radius = ENTITY_RADIUS,
): { x: number; z: number } {
  let px = x;
  let pz = z;
  for (const o of OBSTACLES) {
    const dx = px - o.x;
    const dz = pz - o.z;
    const min = o.r + radius;
    const d2 = dx * dx + dz * dz;
    if (d2 >= min * min) continue;
    const d = Math.sqrt(d2);
    if (d > 1e-4) {
      const push = (min - d) / d;
      px += dx * push;
      pz += dz * push;
    } else {
      px += min; // 圓心完全重合:沿任意軸推開
    }
  }
  return { x: px, z: pz };
}

/**
 * 建立整個群島的地形(每島獨立網格 + 主題配色 + 程序化散布樹石)。
 */
export function createWorld(): THREE.Group {
  OBSTACLES.length = 0; // 重建世界時重置障礙物表(程序生成位置隨機)
  const group = new THREE.Group();
  for (const def of ISLANDS) group.add(createIslandMesh(def));

  // 熔岩池:發光圓盤貼在地形上
  for (const zone of LAVA_ZONES) {
    const lava = new THREE.Mesh(
      new THREE.CircleGeometry(zone.r, 24),
      new THREE.MeshBasicMaterial({ color: 0xff5a1c }),
    );
    lava.rotation.x = -Math.PI / 2;
    lava.position.set(zone.x, groundHeight(zone.x, zone.z) + 0.08, zone.z);
    group.add(lava);
  }

  // 沉沒古城:露出海面的斷裂石柱群
  const pillarMaterial = toonMaterial(0x9aa4b8);
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const radius = 6 + (i % 3) * 7;
    const height = 2.5 + ((i * 7) % 5);
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.1, height, 10),
      pillarMaterial,
    );
    pillar.position.set(
      SUNKEN_CITY.x + Math.cos(angle) * radius,
      height / 2 - 1,
      SUNKEN_CITY.z + Math.sin(angle) * radius,
    );
    pillar.rotation.z = ((i % 5) - 2) * 0.08;
    pillar.castShadow = true;
    group.add(pillar);
    OBSTACLES.push({ x: pillar.position.x, z: pillar.position.z, r: 1.0 });
  }

  group.add(createPortTown());
  return group;
}

/** 港口鎮造景:南灘小鎮(房屋群)+ 伸入海中的木棧碼頭 */
function createPortTown(): THREE.Group {
  const town = new THREE.Group();
  const cx = SECOND_SEA.x;

  const houseSpots: Array<{ x: number; z: number; body: number; roof: number }> = [
    { x: cx - 12, z: -26, body: 0xe8dcc0, roof: 0xc05a3a },
    { x: cx + 12, z: -28, body: 0xd8c8a8, roof: 0x3a6a9a },
    { x: cx - 20, z: -12, body: 0xe0d0b0, roof: 0x9a6a3a },
    { x: cx + 22, z: -14, body: 0xe8dcc0, roof: 0x4a8a5a },
    { x: cx, z: -18, body: 0xf0e4c8, roof: 0xb04848 },
  ];
  for (const spot of houseSpots) {
    const house = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(4.2, 3, 3.6), toonMaterial(spot.body));
    body.position.y = 1.5;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(3.4, 2, 4), toonMaterial(spot.roof));
    roof.position.y = 3.9;
    roof.rotation.y = Math.PI / 4;
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.5, 0.15), toonMaterial(0x6a4322));
    door.position.set(0, 0.75, 1.85);
    house.add(body, roof, door);
    addOutlines(house);
    house.traverse((child) => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });
    house.rotation.y = ((spot.x + spot.z) % 5) * 0.18;
    house.position.set(spot.x, groundHeight(spot.x, spot.z), spot.z);
    town.add(house);
    // 房子 4.2×3.6:以圓近似包住屋身(旋轉不影響圓)
    OBSTACLES.push({ x: spot.x, z: spot.z, r: 2.3 });
  }

  // 木棧碼頭:從南灘伸向海面(船停在碼頭旁)
  const dockX = cx + 6;
  const plankMaterial = toonMaterial(0xa07848);
  const postMaterial = toonMaterial(0x6a4322);
  for (let i = 0; i < 8; i++) {
    const z = -48 - i * 2.2;
    const plank = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 2), plankMaterial);
    plank.position.set(dockX, 0.85, z);
    plank.castShadow = true;
    town.add(plank);
    if (i % 2 === 0) {
      for (const side of [-1.4, 1.4]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 1.8, 8), postMaterial);
        post.position.set(dockX + side, 0, z);
        post.castShadow = true;
        town.add(post);
        OBSTACLES.push({ x: dockX + side, z, r: 0.35 });
      }
    }
  }
  return town;
}

function createIslandMesh(def: IslandDef): THREE.Group {
  const group = new THREE.Group();

  const size = def.r * 2 + 14;
  const segments = 150;
  const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
  geometry.rotateX(-Math.PI / 2);

  const position = geometry.getAttribute("position");
  const colors = new Float32Array(position.count * 3);
  const sand = new THREE.Color(def.sand);
  const grass = new THREE.Color(def.grass);
  const dark = new THREE.Color(def.dark);
  const c = new THREE.Color();

  for (let i = 0; i < position.count; i++) {
    const wx = position.getX(i) + def.x;
    const wz = position.getZ(i) + def.z;
    const y = groundHeight(wx, wz);
    position.setY(i, y);
    if (y < 0.8) c.copy(sand);
    else if (y < 1.8) c.lerpColors(sand, grass, (y - 0.8) / 1.0);
    else c.lerpColors(grass, dark, Math.min((y - 1.8) / 9, 1));
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  const terrain = new THREE.Mesh(geometry, toonMaterial(0xffffff, { vertexColors: true }));
  terrain.receiveShadow = true;
  terrain.position.set(def.x, 0, def.z);
  group.add(terrain);

  // 散布:草地高度帶種樹、放岩石,並鋪地表裝飾(草/花/灌木)。
  // 有載到自然素材模型就用模型依生態擺;載入失敗則回退原本的程序化樹石。
  const flora = FLORA[def.name] ?? FLORA_DEFAULT;
  // 綠色島嶼維持原本程序化樹石;其餘島用素材包模型(載入成功時)
  const useModels = hasModels() && !PROCEDURAL_ISLANDS.has(def.name);

  let planted = 0;
  for (let i = 0; i < 300 && planted < def.treeCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * (def.r - 6);
    const x = def.x + Math.cos(angle) * radius;
    const z = def.z + Math.sin(angle) * radius;
    const h = groundHeight(x, z);
    if (h <= 1.8 || h >= 11) continue;
    const m = useModels && flora.trees.length ? pickModel(flora.trees[(Math.random() * flora.trees.length) | 0]) : null;
    if (m) {
      const vs = 0.85 + Math.random() * 0.35;
      m.scale.setScalar(vs);
      m.rotation.y = Math.random() * Math.PI * 2;
      m.position.set(x, h - 0.1, z);
      group.add(m);
      // 碰撞涵蓋整棵樹的水平範圍(只要是樹的一部分都擋)
      OBSTACLES.push({ x, z, r: ((m.userData.radius as number) || 1) * vs });
    } else {
      group.add(createTree(x, h, z, def.treeColor));
    }
    planted++;
  }

  for (let i = 0; i < 14; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * (def.r - 4);
    const x = def.x + Math.cos(angle) * radius;
    const z = def.z + Math.sin(angle) * radius;
    const gy = groundHeight(x, z);
    const rm = useModels ? pickModel(flora.rock) : null;
    if (rm) {
      const vs = 0.8 + Math.random() * 0.7;
      rm.scale.setScalar(vs);
      rm.rotation.y = Math.random() * Math.PI * 2;
      rm.position.set(x, gy, z);
      group.add(rm);
      OBSTACLES.push({ x, z, r: 0.7 * vs });
    } else {
      const rockR = 0.7 + Math.random() * 0.9;
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(rockR), toonMaterial(0x8a8a8a));
      rock.position.set(x, gy + 0.3, z);
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.castShadow = true;
      group.add(rock);
      OBSTACLES.push({ x, z, r: rockR * 0.75 });
    }
  }

  // 地表裝飾(草/花/灌木…):不擋路,只在草地帶鋪;密度依島大小
  if (useModels && flora.decor.length) {
    const decorCount = Math.round(def.r * 1.4);
    for (let i = 0; i < decorCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(Math.random()) * (def.r - 3);
      const x = def.x + Math.cos(angle) * radius;
      const z = def.z + Math.sin(angle) * radius;
      const h = groundHeight(x, z);
      if (h <= 1.5 || h >= 9) continue;
      const d = pickModel(flora.decor[(Math.random() * flora.decor.length) | 0]);
      if (d) {
        d.scale.setScalar(0.8 + Math.random() * 0.6);
        d.rotation.y = Math.random() * Math.PI * 2;
        d.position.set(x, h - 0.05, z);
        group.add(d);
      }
    }
  }

  return group;
}

/** 樹冠團塊配置(相對樹幹頂端):做出飽滿有機輪廓而非單顆球 */
const TREE_BLOBS = [
  { r: 1.75, y: 3.95, dx: 0, dz: 0, sy: 1.2 },
  { r: 1.2, y: 4.7, dx: 0.72, dz: -0.42, sy: 1 },
  { r: 1.15, y: 3.65, dx: -0.78, dz: 0.55, sy: 1 },
  { r: 1.05, y: 4.35, dx: -0.18, dz: -0.82, sy: 1 },
];
/** 樹冠最寬處的水平半徑(供碰撞箱涵蓋整棵樹) */
const TREE_CANOPY_R = 1.85;

function createTree(x: number, groundY: number, z: number, leafColor: number): THREE.Group {
  const tree = new THREE.Group();
  const scale = 0.8 + Math.random() * 0.6;
  // 樹幹:微錐狀,低多邊形(7 段)
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.42, 3.3, 7), toonMaterial(0x6f4a28));
  trunk.position.y = 1.6;
  trunk.castShadow = true;
  tree.add(trunk);
  // 樹冠:多顆低多邊形團塊錯落 + 每顆微調明度,更有層次
  const base = new THREE.Color(leafColor);
  for (const b of TREE_BLOBS) {
    const col = base.clone().offsetHSL(0, (Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.1);
    const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(b.r, 0), toonMaterial(col.getHex()));
    leaf.position.set(b.dx, b.y, b.dz);
    leaf.scale.set(1, b.sy, 1);
    leaf.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);
    leaf.castShadow = true;
    tree.add(leaf);
  }
  addOutlines(tree); // 卡通描邊,與角色/敵人一致
  tree.scale.setScalar(scale);
  tree.rotation.y = Math.random() * Math.PI * 2;
  tree.position.set(x, groundY - 0.1, z);
  // 碰撞涵蓋整棵樹冠的水平範圍(不再只取樹幹;只要是樹的一部分都擋)
  OBSTACLES.push({ x, z, r: TREE_CANOPY_R * scale });
  return tree;
}
