import * as THREE from "three";
import { toonMaterial } from "../core/toon";

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
];

/** 隱藏海域:潮汐石漂浮處(企劃書:潮汐石取得地點「隱藏海域」) */
export const TIDE_SITE = { x: -60, z: -120 };

/** 沉沒古城:開放海域的水下遺跡區(需潮汐石潛入) */
export const SUNKEN_CITY = { x: -40, z: 230, r: 26 };

/** 熔岩區(站立會持續受到環境傷害,企劃書:火山島環境傷害機制) */
export const LAVA_ZONES = [
  { x: -150, z: 120, r: 7 },
  { x: -132, z: 128, r: 4 },
  { x: -163, z: 134, r: 4.5 },
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

/**
 * 建立整個群島的地形(每島獨立網格 + 主題配色 + 程序化散布樹石)。
 */
export function createWorld(): THREE.Group {
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
  }
  return group;
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

  // 程序化散布:草地高度帶種樹,其餘隨機放岩石
  let planted = 0;
  for (let i = 0; i < 300 && planted < def.treeCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * (def.r - 6);
    const x = def.x + Math.cos(angle) * radius;
    const z = def.z + Math.sin(angle) * radius;
    const h = groundHeight(x, z);
    if (h > 1.8 && h < 11) {
      group.add(createTree(x, h, z, def.treeColor));
      planted++;
    }
  }
  for (let i = 0; i < 14; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * (def.r - 4);
    const x = def.x + Math.cos(angle) * radius;
    const z = def.z + Math.sin(angle) * radius;
    const rock = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.7 + Math.random() * 0.9),
      toonMaterial(0x8a8a8a),
    );
    rock.position.set(x, groundHeight(x, z) + 0.3, z);
    rock.rotation.set(Math.random(), Math.random(), Math.random());
    rock.castShadow = true;
    group.add(rock);
  }

  return group;
}

function createTree(x: number, groundY: number, z: number, leafColor: number): THREE.Group {
  const tree = new THREE.Group();
  const scale = 0.8 + Math.random() * 0.6;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 3), toonMaterial(0x7a5230));
  trunk.position.y = 1.5;
  const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, 1), toonMaterial(leafColor));
  leaves.position.y = 3.9;
  leaves.scale.y = 1.15;
  trunk.castShadow = true;
  leaves.castShadow = true;
  tree.add(trunk, leaves);
  tree.scale.setScalar(scale);
  tree.position.set(x, groundY - 0.1, z);
  return tree;
}
