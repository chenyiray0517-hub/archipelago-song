// 群島之歌 — NPC 角色模型載入(帶骨骼動畫的人物,CC0 Ultimate Pirate Kit by Quaternius)
//
// 與 enemyModels.ts 同套路:把 public/models/characters 的自包 glTF(幾何 + 圖集貼圖皆 base64 內嵌)
// 載入、轉 cel-shading(toonMaterial 掛內嵌貼圖 + 骨架描邊)、正規化高度(底部對齊 y=0、水平置中),
// 做成「原型」供各 NPC 用 SkeletonUtils.clone 複製(skinned mesh 需重綁骨架,不能用一般 clone)。
// 沿用專案精神:**載入失敗就回退程序化村民,絕不擋住開場**(見 npc.ts)。

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { toonMaterial, addSkinnedOutlines } from "../core/toon";

const PATH = `${import.meta.env.BASE_URL}models/characters/`;

/** 七種可套用到 NPC 的角色 */
export type NpcModelKey =
  | "henry"
  | "barbarossa"
  | "anne"
  | "skeleton"
  | "skeletonHeadless"
  | "mako"
  | "sharky";

/** 載好的角色原型:已 cel-shading + 骨架描邊 + 正規化(底部 y=0、水平置中、目標身高) */
export interface NpcModelProto {
  scene: THREE.Group;
  clips: THREE.AnimationClip[];
}

/** 模型鍵 → 檔名(全部正規化到同一身高,人物等高) */
const FILES: Record<NpcModelKey, string> = {
  henry: "Characters_Henry",
  barbarossa: "Characters_Captain_Barbarossa",
  anne: "Characters_Anne",
  skeleton: "Characters_Skeleton",
  skeletonHeadless: "Characters_Skeleton_Headless",
  mako: "Characters_Mako",
  sharky: "Characters_Sharky",
};

/** 正規化目標身高(世界單位):比敵人略高,維持村民站樁的存在感 */
const TARGET_H = 1.9;

const prototypes = new Map<NpcModelKey, NpcModelProto>();
let loaded = false;

/** 是否已成功載入至少一個角色模型(否則 NPC 全走程序化村民回退) */
export function hasNpcModels(): boolean {
  return loaded;
}

/** 把載入的網格轉成 cel-shading:保留 glTF 內嵌圖集當 map,套色階做卡通光影 */
function toToon(root: THREE.Object3D): void {
  root.traverse((c) => {
    if (c instanceof THREE.Mesh) {
      const src = Array.isArray(c.material) ? c.material[0] : c.material;
      const map = src && (src as THREE.MeshStandardMaterial).map ? (src as THREE.MeshStandardMaterial).map! : undefined;
      c.material = toonMaterial(0xffffff, { map });
      c.castShadow = true;
    }
  });
}

/** 正規化:轉 toon + 骨架描邊,縮放到目標身高,底部移到 y=0、水平置中 */
function prepare(scene: THREE.Group): THREE.Group {
  toToon(scene);
  addSkinnedOutlines(scene);
  const box = new THREE.Box3().setFromObject(scene);
  const h = box.max.y - box.min.y || 1;
  const s = TARGET_H / h;
  scene.scale.setScalar(s);
  scene.position.y = -box.min.y * s;
  scene.position.x = -((box.min.x + box.max.x) / 2) * s;
  scene.position.z = -((box.min.z + box.max.z) / 2) * s;
  const wrapper = new THREE.Group();
  wrapper.add(scene);
  return wrapper;
}

async function loadOne(key: NpcModelKey, file: string): Promise<void> {
  const gltf = await new GLTFLoader().setPath(PATH).loadAsync(`${file}.gltf`);
  prototypes.set(key, { scene: prepare(gltf.scene as THREE.Group), clips: gltf.animations });
}

/**
 * 載入全部角色模型(開場前呼叫一次)。任何單一模型失敗只略過該模型;
 * 至少載到一個才算成功(hasNpcModels 才回 true),否則 NPC 走程序化村民回退。
 */
export async function loadNpcModels(): Promise<boolean> {
  const jobs: Promise<void>[] = [];
  for (const [key, file] of Object.entries(FILES) as [NpcModelKey, string][]) {
    jobs.push(loadOne(key, file).catch((e) => console.warn(`[npcModels] 模型載入失敗 ${key}:`, e)));
  }
  await Promise.all(jobs);
  loaded = prototypes.size > 0;
  return loaded;
}

/**
 * 取某角色的一份複製(SkeletonUtils.clone 會重綁骨架,動畫各自獨立)。
 * 回傳 null 表示該模型沒載到(由 npc.ts 回退程序化村民)。
 * clips 為原型共用(AnimationClip 不可變,可多 mixer 共享)。
 */
export function pickNpcModel(key: NpcModelKey): NpcModelProto | null {
  const proto = prototypes.get(key);
  if (!proto) return null;
  return { scene: cloneSkinned(proto.scene) as THREE.Group, clips: proto.clips };
}
