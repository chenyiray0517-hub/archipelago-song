// 群島之歌 — 敵人模型載入(帶骨骼動畫的怪物,CC0 Ultimate Monsters by Quaternius)
//
// 把 public/models/monsters 的自包 glTF(幾何 + 圖集貼圖皆 base64 內嵌)載入、
// 轉成遊戲的 cel-shading(toonMaterial 掛內嵌貼圖 + 骨架描邊)、正規化高度(底部對齊 y=0),
// 做成「原型」供敵人用 SkeletonUtils.clone 複製(skinned mesh 需重綁骨架,不能用一般 clone)。
// 沿用專案精神:**載入失敗就回退程序化果凍 blob,絕不擋住開場**(見 enemy.ts)。

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { toonMaterial, addSkinnedOutlines } from "../core/toon";

const PATH = `${import.meta.env.BASE_URL}models/monsters/`;

/** 載好的怪物原型:已 cel-shading + 骨架描邊 + 正規化(底部 y=0、水平置中、目標高度) */
export interface EnemyModelProto {
  scene: THREE.Group;
  clips: THREE.AnimationClip[];
}

interface ModelSpec {
  /** 檔名(不含副檔名) */
  file: string;
  /** 正規化目標高度(世界單位,未乘敵人 config.scale) */
  targetH: number;
}

/**
 * 模型鍵 → 檔案與目標高度(targetH 是 config.scale=1 時的基準身高,實際身高再乘敵人 scale)。
 * 全 20 種敵人各一隻 Quaternius CC0 怪物(Big/Blob/Flying 三類混用);
 * enemy.ts 的 KIND_MODEL 對應到這些鍵。三類動畫命名不同,靠 ANIM_CANDIDATES 解析。
 */
const MODELS: Record<string, ModelSpec> = {
  // 曙光嶼
  GreenBlob: { file: "GreenBlob", targetH: 1.7 },
  GreenSpikyBlob: { file: "GreenSpikyBlob", targetH: 1.6 },
  // 翠風林
  Mushnub: { file: "Mushnub", targetH: 1.6 },
  Hywirl: { file: "Hywirl", targetH: 1.7 },
  // 燼岩火山
  Goleling: { file: "Goleling", targetH: 1.5 },
  Goleling_Evolved: { file: "Goleling_Evolved", targetH: 1.7 },
  // 霜雪峰
  Glub: { file: "Glub", targetH: 1.5 },
  Yeti: { file: "Yeti", targetH: 1.8 },
  // 沉沒古城 / 虛空
  Fish: { file: "Fish", targetH: 1.5 },
  Ghost: { file: "Ghost", targetH: 1.7 },
  BlueDemon: { file: "BlueDemon", targetH: 1.9 },
  // 第二海·熔砂島
  Cactoro: { file: "Cactoro", targetH: 1.6 },
  Demon: { file: "Demon", targetH: 1.9 },
  // 第二海·珊瑚礁
  Squidle: { file: "Squidle", targetH: 1.6 },
  Glub_Evolved: { file: "Glub_Evolved", targetH: 1.7 },
  // 第二海·靈脈島
  Mushnub_Evolved: { file: "Mushnub_Evolved", targetH: 1.7 },
  MushroomKing: { file: "MushroomKing", targetH: 1.9 },
  // 第二海·迷霧沼 / 鹽晶 / 烈陽礁
  Frog: { file: "Frog", targetH: 1.5 },
  PinkBlob: { file: "PinkBlob", targetH: 1.6 },
  Birb: { file: "Birb", targetH: 1.7 },
};

const prototypes = new Map<string, EnemyModelProto>();
let loaded = false;

/** 是否已成功載入至少一個怪物模型(否則敵人全走程序化果凍回退) */
export function hasEnemyModels(): boolean {
  return loaded;
}

/** 把載入的網格轉成 cel-shading:保留 glTF 內嵌圖集當 map,套色階做出貼圖 + 卡通光影 */
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

/** 正規化:轉 toon + 骨架描邊,縮放到目標高度,底部移到 y=0、水平置中 */
function prepare(scene: THREE.Group, targetH: number): THREE.Group {
  toToon(scene);
  addSkinnedOutlines(scene);
  const box = new THREE.Box3().setFromObject(scene);
  const h = box.max.y - box.min.y || 1;
  const s = targetH / h;
  scene.scale.setScalar(s);
  scene.position.y = -box.min.y * s;
  scene.position.x = -((box.min.x + box.max.x) / 2) * s;
  scene.position.z = -((box.min.z + box.max.z) / 2) * s;
  const wrapper = new THREE.Group();
  wrapper.add(scene);
  return wrapper;
}

async function loadOne(key: string, spec: ModelSpec): Promise<void> {
  const gltf = await new GLTFLoader().setPath(PATH).loadAsync(`${spec.file}.gltf`);
  const scene = gltf.scene as THREE.Group;
  prototypes.set(key, { scene: prepare(scene, spec.targetH), clips: gltf.animations });
}

/**
 * 載入所有怪物模型(開場前呼叫一次)。任何單一模型失敗只略過該模型;
 * 至少載到一個才算成功(hasEnemyModels 才回 true),否則敵人走程序化果凍回退。
 */
export async function loadEnemyModels(): Promise<boolean> {
  const jobs: Promise<void>[] = [];
  for (const [key, spec] of Object.entries(MODELS)) {
    jobs.push(loadOne(key, spec).catch((e) => console.warn(`[enemyModels] 模型載入失敗 ${key}:`, e)));
  }
  await Promise.all(jobs);
  loaded = prototypes.size > 0;
  return loaded;
}

/**
 * 取某模型鍵的一份複製(SkeletonUtils.clone 會重綁骨架,動畫各自獨立)。
 * 回傳 null 表示該模型沒載到(由 enemy.ts 回退程序化果凍)。
 * clips 為原型共用(AnimationClip 不可變,可多 mixer 共享)。
 */
export function pickEnemyModel(key: string): EnemyModelProto | null {
  const proto = prototypes.get(key);
  if (!proto) return null;
  return { scene: cloneSkinned(proto.scene) as THREE.Group, clips: proto.clips };
}
