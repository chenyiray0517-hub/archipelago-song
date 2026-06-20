// 群島之歌 — 場景模型載入(低多邊形自然素材,CC0 by Quaternius)
//
// 把 public/models 的 OBJ 載入、轉成遊戲的 cel-shading(toonMaterial + 描邊)、
// 依類別正規化高度(底部對齊 y=0),做成「原型」供地形隨機 clone 散布。
// 設計原則沿用專案的「連不上就單機」精神:**載入失敗就回退程序化樹石,絕不擋住開場**。

import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { toonMaterial, addOutlines } from "../core/toon";

const PATH = `${import.meta.env.BASE_URL}models/`;

/** 類別 → 模型檔名(不含副檔名);依生態擺到不同島 */
const CATEGORIES: Record<string, string[]> = {
  common: ["CommonTree_1", "CommonTree_2", "CommonTree_3"],
  birch: ["BirchTree_1", "BirchTree_2"],
  pine: ["PineTree_1", "PineTree_2"],
  pine_snow: ["PineTree_Snow_1", "PineTree_Snow_2", "PineTree_Snow_3"],
  common_snow: ["CommonTree_Snow_1", "CommonTree_Snow_2"],
  dead: ["CommonTree_Dead_1", "CommonTree_Dead_2"],
  autumn: ["CommonTree_Autumn_1", "CommonTree_Autumn_2"],
  palm: ["PalmTree_1", "PalmTree_2", "PalmTree_3"],
  cactus: ["Cactus_1", "Cactus_2", "Cactus_3"],
  willow: ["Willow_1", "Willow_2"],
  rock: ["Rock_1", "Rock_2", "Rock_3", "Rock_4", "Rock_5"],
  rock_snow: ["Rock_Snow_1", "Rock_Snow_2", "Rock_Snow_3"],
  rock_moss: ["Rock_Moss_1", "Rock_Moss_2"],
  grass: ["Grass", "Grass_2"],
  grass_short: ["Grass_Short"],
  flowers: ["Flowers"],
  plant: ["Plant_1", "Plant_2"],
  bush: ["Bush_1", "Bush_2"],
  berries: ["BushBerries_1"],
  log: ["WoodLog"],
  stump: ["TreeStump"],
  wheat: ["Wheat"],
  lily: ["Lilypad"],
};

/** 各類別正規化的目標高度(世界單位) */
const TARGET_H: Record<string, number> = {
  common: 5.2, birch: 5.6, pine: 5.4, pine_snow: 5.4, common_snow: 5, dead: 4.8,
  autumn: 5.2, palm: 6.2, cactus: 2.6, willow: 5.6,
  rock: 1.7, rock_snow: 1.7, rock_moss: 1.7,
  grass: 0.7, grass_short: 0.5, flowers: 0.7, plant: 0.8, bush: 1.1, berries: 1.1,
  log: 0.7, stump: 1.0, wheat: 1.3, lily: 0.18,
};

/** 載好的原型(底部對齊 y=0、已轉 toon + 描邊) */
const prototypes = new Map<string, THREE.Group>();
let loaded = false;

/** 是否已成功載入場景模型(否則地形回退程序化樹石) */
export function hasModels(): boolean {
  return loaded;
}

/** 把載入的物件轉成 cel-shading:每個 mesh 取原 MTL 漫射色做 toonMaterial,加描邊與陰影 */
function toToon(root: THREE.Object3D): void {
  root.traverse((c) => {
    if (c instanceof THREE.Mesh) {
      const src = Array.isArray(c.material) ? c.material[0] : c.material;
      const col = new THREE.Color(0x88aa66);
      if (src && (src as THREE.MeshStandardMaterial).color) {
        // MTL 的 Kd 是線性色;轉 sRGB 才會呈現素材包預覽那種鮮亮低多邊形配色
        col.copy((src as THREE.MeshStandardMaterial).color).convertLinearToSRGB();
      }
      c.material = toonMaterial(col.getHex());
      c.castShadow = true;
    }
  });
}

/** 正規化:轉 toon + 描邊,縮放到目標高度,並把底部移到 y=0(方便擺在地表) */
function prepare(raw: THREE.Group, targetH: number): THREE.Group {
  toToon(raw);
  addOutlines(raw);
  const box = new THREE.Box3().setFromObject(raw);
  const h = box.max.y - box.min.y || 1;
  const s = targetH / h;
  raw.scale.setScalar(s);
  raw.position.y = -box.min.y * s;
  const wrapper = new THREE.Group();
  wrapper.add(raw);
  // 記錄正規化後的水平半徑,供地形把碰撞箱涵蓋整棵樹冠(clone 會帶上 userData)
  wrapper.updateMatrixWorld(true);
  const wbox = new THREE.Box3().setFromObject(wrapper);
  wrapper.userData.radius = Math.max(wbox.max.x - wbox.min.x, wbox.max.z - wbox.min.z) / 2;
  return wrapper;
}

async function loadOne(name: string, targetH: number): Promise<void> {
  const mtl = await new MTLLoader().setPath(PATH).loadAsync(`${name}.mtl`);
  mtl.preload();
  const obj = (await new OBJLoader().setMaterials(mtl).setPath(PATH).loadAsync(`${name}.obj`)) as THREE.Group;
  prototypes.set(name, prepare(obj, targetH));
}

/**
 * 載入所有場景模型(開場前呼叫一次)。任何單一模型失敗只略過該模型;
 * 至少載到樹才算成功(hasModels 才回 true),否則地形走程序化回退。
 */
export async function loadSceneryModels(): Promise<boolean> {
  const jobs: Promise<void>[] = [];
  for (const [cat, names] of Object.entries(CATEGORIES)) {
    const targetH = TARGET_H[cat] ?? 1;
    for (const name of names) jobs.push(loadOne(name, targetH).catch((e) => console.warn(`[scenery] 模型載入失敗 ${name}:`, e)));
  }
  await Promise.all(jobs);
  loaded = prototypes.has("CommonTree_1") || prototypes.has("PalmTree_1");
  return loaded;
}

/** 隨機取某類別的一棵模型 clone(共用幾何/材質,clone 很便宜);類別空則回 null */
export function pickModel(category: string): THREE.Group | null {
  const names = CATEGORIES[category];
  if (!names || names.length === 0) return null;
  const name = names[Math.floor(Math.random() * names.length)];
  const proto = prototypes.get(name);
  return proto ? (proto.clone() as THREE.Group) : null;
}
