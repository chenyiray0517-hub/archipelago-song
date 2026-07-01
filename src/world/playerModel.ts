// 群島之歌 — 玩家 VRM 模型 + Mixamo 動作載入
//
// 載入 public/models/player/player.vrm(VRoid 匯出的 VRM 0.0),
// 並把 public/anim 的 Mixamo FBX 動作(跑/攻擊/死亡)retarget 到此 VRM 的人形骨架,
// 供 player.ts 疊在程序化角色之上當視覺模型、依玩家狀態播動畫。
// 沿用專案精神:**載入失敗就回退原程序化角色,絕不擋開場**(見 main.ts / player.ts)。

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { VRMLoaderPlugin, type VRM } from "@pixiv/three-vrm";

/** 玩家動畫狀態鍵(idle 為合成的放手待機姿,其餘來自 Mixamo FBX) */
export type PlayerAnim = "idle" | "run" | "attack" | "death";

export interface PlayerModelProto {
  vrm: VRM;
  clips: Record<PlayerAnim, THREE.AnimationClip>;
}

const BASE = import.meta.env.BASE_URL;

/** 可選角色一覽(VRoid 匯出的 VRM 0.0,皆放 public/models/player/chars/) */
export interface CharacterDef {
  id: string;
  /** UI 顯示名 */
  name: string;
}
export const CHARACTERS: readonly CharacterDef[] = [
  { id: "char1", name: "一號 ♀" },
  { id: "char2", name: "二號 ♀" },
  { id: "char3", name: "三號 ♀" },
  { id: "char4", name: "四號 ♀" },
  { id: "char5", name: "五號 ♂" },
  { id: "char6", name: "六號 ♂" },
  { id: "char7", name: "七號 ♂" },
  { id: "char8", name: "八號 ♂" },
];
export const DEFAULT_CHARACTER = CHARACTERS[0].id;

/** 角色 id → VRM 路徑;未知 id 回退舊有 player.vrm(絕不擋開場) */
function charUrl(id: string): string {
  return CHARACTERS.some((c) => c.id === id)
    ? `${BASE}models/player/chars/${id}.vrm`
    : `${BASE}models/player/player.vrm`;
}

/** 依 id 取角色定義(索引/切換用);未知 id 回退第一位 */
export function characterDef(id: string): CharacterDef {
  return CHARACTERS.find((c) => c.id === id) ?? CHARACTERS[0];
}
/** 目前循環切換到「下一位/上一位」的角色 id(dir = +1 / -1) */
export function cycleCharacter(id: string, dir: number): string {
  const i = CHARACTERS.findIndex((c) => c.id === id);
  const base = i < 0 ? 0 : i;
  const n = CHARACTERS.length;
  return CHARACTERS[(((base + dir) % n) + n) % n].id;
}

const ANIM_URL: Record<"idle" | "run" | "attack" | "death", string> = {
  idle: `${BASE}anim/idle.fbx`,
  run: `${BASE}anim/run.fbx`,
  attack: `${BASE}anim/attack.fbx`,
  death: `${BASE}anim/death.fbx`,
};

/**
 * 合成待機姿(墊檔):Idle FBX 載入失敗時才用。
 * 把上臂從 T-pose 放下到身側 + 胸口輕微起伏當呼吸。
 */
function buildIdleClip(vrm: VRM): THREE.AnimationClip {
  const tracks: THREE.KeyframeTrack[] = [];
  const armDown = (bone: "leftUpperArm" | "rightUpperArm", z: number) => {
    const node = vrm.humanoid.getNormalizedBoneNode(bone);
    if (!node) return;
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, z)).toArray();
    tracks.push(
      new THREE.QuaternionKeyframeTrack(`${node.name}.quaternion`, [0, 2], [...q, ...q]),
    );
  };
  armDown("leftUpperArm", 1.2);
  armDown("rightUpperArm", -1.2);
  // 呼吸:胸口繞 X 軸極小幅度來回
  const chest = vrm.humanoid.getNormalizedBoneNode("chest") ?? vrm.humanoid.getNormalizedBoneNode("spine");
  if (chest) {
    const a = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.02, 0, 0)).toArray();
    const b = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.02, 0, 0)).toArray();
    tracks.push(new THREE.QuaternionKeyframeTrack(`${chest.name}.quaternion`, [0, 1, 2], [...a, ...b, ...a]));
  }
  return new THREE.AnimationClip("idle", 2, tracks);
}

/** Mixamo 骨名(FBXLoader 去掉冒號後)→ VRM 人形骨名 */
const MIXAMO_VRM_RIG: Record<string, string> = {
  mixamorigHips: "hips",
  mixamorigSpine: "spine",
  mixamorigSpine1: "chest",
  mixamorigSpine2: "upperChest",
  mixamorigNeck: "neck",
  mixamorigHead: "head",
  mixamorigLeftShoulder: "leftShoulder",
  mixamorigLeftArm: "leftUpperArm",
  mixamorigLeftForeArm: "leftLowerArm",
  mixamorigLeftHand: "leftHand",
  mixamorigLeftHandThumb1: "leftThumbMetacarpal",
  mixamorigLeftHandThumb2: "leftThumbProximal",
  mixamorigLeftHandThumb3: "leftThumbDistal",
  mixamorigLeftHandIndex1: "leftIndexProximal",
  mixamorigLeftHandIndex2: "leftIndexIntermediate",
  mixamorigLeftHandIndex3: "leftIndexDistal",
  mixamorigLeftHandMiddle1: "leftMiddleProximal",
  mixamorigLeftHandMiddle2: "leftMiddleIntermediate",
  mixamorigLeftHandMiddle3: "leftMiddleDistal",
  mixamorigLeftHandRing1: "leftRingProximal",
  mixamorigLeftHandRing2: "leftRingIntermediate",
  mixamorigLeftHandRing3: "leftRingDistal",
  mixamorigLeftHandPinky1: "leftLittleProximal",
  mixamorigLeftHandPinky2: "leftLittleIntermediate",
  mixamorigLeftHandPinky3: "leftLittleDistal",
  mixamorigRightShoulder: "rightShoulder",
  mixamorigRightArm: "rightUpperArm",
  mixamorigRightForeArm: "rightLowerArm",
  mixamorigRightHand: "rightHand",
  mixamorigRightHandThumb1: "rightThumbMetacarpal",
  mixamorigRightHandThumb2: "rightThumbProximal",
  mixamorigRightHandThumb3: "rightThumbDistal",
  mixamorigRightHandIndex1: "rightIndexProximal",
  mixamorigRightHandIndex2: "rightIndexIntermediate",
  mixamorigRightHandIndex3: "rightIndexDistal",
  mixamorigRightHandMiddle1: "rightMiddleProximal",
  mixamorigRightHandMiddle2: "rightMiddleIntermediate",
  mixamorigRightHandMiddle3: "rightMiddleDistal",
  mixamorigRightHandRing1: "rightRingProximal",
  mixamorigRightHandRing2: "rightRingIntermediate",
  mixamorigRightHandRing3: "rightRingDistal",
  mixamorigRightHandPinky1: "rightLittleProximal",
  mixamorigRightHandPinky2: "rightLittleIntermediate",
  mixamorigRightHandPinky3: "rightLittleDistal",
  mixamorigLeftUpLeg: "leftUpperLeg",
  mixamorigLeftLeg: "leftLowerLeg",
  mixamorigLeftFoot: "leftFoot",
  mixamorigLeftToeBase: "leftToes",
  mixamorigRightUpLeg: "rightUpperLeg",
  mixamorigRightLeg: "rightLowerLeg",
  mixamorigRightFoot: "rightFoot",
  mixamorigRightToeBase: "rightToes",
};

/**
 * 把一個 Mixamo FBX 動作 retarget 成跑在此 VRM 上的 AnimationClip。
 * 改寫自 @pixiv/three-vrm 官方 Mixamo 範例(MIT):
 * 把每根骨的世界旋轉換算到 VRM 正規化骨架,VRM 0.0 需鏡射 x/z。
 */
/** Mixamo FBX 原始資產快取:動作各角色共用,只需抓一次,之後對每個 VRM 各自 retarget */
const fbxCache = new Map<string, Promise<THREE.Group>>();
function loadFbxAsset(url: string): Promise<THREE.Group> {
  let p = fbxCache.get(url);
  if (!p) {
    p = new FBXLoader().loadAsync(url);
    fbxCache.set(url, p);
  }
  return p;
}

async function loadMixamoClip(
  url: string,
  vrm: VRM,
  /** 鎖住 Hips 水平根位移(原地跑/原地動,位置交給遊戲邏輯,避免動畫自走+迴圈彈回) */
  lockRootXZ = false,
): Promise<THREE.AnimationClip> {
  const asset = await loadFbxAsset(url);
  const clip = THREE.AnimationClip.findByName(asset.animations, "mixamo.com") ?? asset.animations[0];

  const tracks: THREE.KeyframeTrack[] = [];
  const restRotationInverse = new THREE.Quaternion();
  const parentRestWorldRotation = new THREE.Quaternion();
  const _quatA = new THREE.Quaternion();
  const _vec3 = new THREE.Vector3();

  const motionHips = asset.getObjectByName("mixamorigHips");
  const hipsBone = vrm.humanoid.getNormalizedBoneNode("hips");
  if (!motionHips || !hipsBone) return new THREE.AnimationClip(url, clip.duration, []);
  const hipsNodeName = hipsBone.name;
  const motionHipsHeight = motionHips.position.y;
  const vrmHipsY = hipsBone.getWorldPosition(_vec3).y;
  const vrmRootY = vrm.scene.getWorldPosition(_vec3).y;
  const hipsPositionScale = Math.abs(vrmHipsY - vrmRootY) / motionHipsHeight;
  const isVrm0 = vrm.meta?.metaVersion === "0";

  for (const track of clip.tracks) {
    const [mixamoRigName, propertyName] = track.name.split(".");
    const vrmBoneName = MIXAMO_VRM_RIG[mixamoRigName];
    const vrmNode = vrmBoneName ? vrm.humanoid.getNormalizedBoneNode(vrmBoneName as never) : null;
    const mixamoRigNode = asset.getObjectByName(mixamoRigName);
    if (!vrmNode || !mixamoRigNode) continue;
    const vrmNodeName = vrmNode.name;

    mixamoRigNode.getWorldQuaternion(restRotationInverse).invert();
    mixamoRigNode.parent?.getWorldQuaternion(parentRestWorldRotation);

    if (track instanceof THREE.QuaternionKeyframeTrack) {
      const values = Array.from(track.values);
      for (let i = 0; i < values.length; i += 4) {
        _quatA.fromArray(values, i);
        _quatA.premultiply(parentRestWorldRotation).multiply(restRotationInverse);
        _quatA.toArray(values, i);
        if (isVrm0) {
          values[i] = -values[i]; // x
          values[i + 2] = -values[i + 2]; // z
        }
      }
      tracks.push(new THREE.QuaternionKeyframeTrack(`${vrmNodeName}.${propertyName}`, Array.from(track.times), values));
    } else if (track instanceof THREE.VectorKeyframeTrack) {
      const values = Array.from(track.values).map((v, i) =>
        (isVrm0 && i % 3 !== 1 ? -v : v) * hipsPositionScale,
      );
      // 原地跑:把 Hips 位移軌的 X/Z 鎖在首幀值(只保留 Y 上下彈跳),根位移交給遊戲邏輯
      if (lockRootXZ && propertyName === "position" && vrmNodeName === hipsNodeName) {
        for (let i = 0; i < values.length; i += 3) {
          values[i] = values[0]; // X
          values[i + 2] = values[2]; // Z
        }
      }
      tracks.push(new THREE.VectorKeyframeTrack(`${vrmNodeName}.${propertyName}`, Array.from(track.times), values));
    }
  }
  return new THREE.AnimationClip(url, clip.duration, tracks);
}

let proto: PlayerModelProto | null = null;
/** 目前遊戲場景中套用的角色 id(切換角色時更新) */
let currentId: string = DEFAULT_CHARACTER;

export function getPlayerModel(): PlayerModelProto | null {
  return proto;
}

/** 目前套用的角色 id */
export function currentCharacterId(): string {
  return currentId;
}

/** 背包展示台用的獨立 VRM(只含待機動作) */
export interface PortraitModelProto {
  vrm: VRM;
  idle: THREE.AnimationClip;
}

/** 載入一份指定角色的 VRM(GLTF + VRM plugin),失敗回 null */
async function loadVrm(id: string): Promise<VRM | null> {
  try {
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    const gltf = await loader.loadAsync(charUrl(id));
    const vrm = gltf.userData.vrm as VRM | undefined;
    return vrm ?? null;
  } catch {
    return null;
  }
}

/** 展示台目前這份的角色 id(切換時重載) */
let portraitId: string | null = null;
let portraitProto: PortraitModelProto | null = null;
let portraitPending: Promise<PortraitModelProto | null> | null = null;

/**
 * 載入背包展示台專用的「第二份」指定角色 VRM(只需待機動作)。
 * 遊戲場景的 VRM 單例(getPlayerModel)在背景仍被佔用、且 VRM 動畫需各自的
 * vrm.update 同步骨架,故展示台另載一份。失敗回傳 null,展示台退回 emoji。
 * 傳入的 id 與快取不同就重載(切換角色);同 id 反覆開關只載一次。
 * @param id 省略則用目前遊戲角色
 */
export function loadPortraitModel(id: string = currentId): Promise<PortraitModelProto | null> {
  if (portraitProto && portraitId === id) return Promise.resolve(portraitProto);
  if (portraitPending && portraitId === id) return portraitPending;
  portraitId = id;
  portraitPending = (async () => {
    const vrm = await loadVrm(id);
    if (!vrm) return null;
    vrm.scene.traverse((o) => {
      o.frustumCulled = false;
    });
    const idle = await loadMixamoClip(ANIM_URL.idle, vrm, true).catch(() => buildIdleClip(vrm));
    // 切換途中若又被要求換別的角色,放棄這份(避免競態覆蓋)
    if (portraitId !== id) {
      disposeVrm(vrm);
      return portraitProto;
    }
    portraitProto = { vrm, idle: idle.tracks.length > 0 ? idle : buildIdleClip(vrm) };
    return portraitProto;
  })();
  return portraitPending;
}

/**
 * 載入指定角色 VRM + 四個 Mixamo 動作。
 * 開場呼叫一次(id 省略 = 存檔角色或預設),之後切換角色時再帶新 id 呼叫。
 * 任一步失敗回傳 false 並保留原有 proto,player.ts 維持現狀(程序化或前一個模型)。
 */
export async function loadPlayerModel(id: string = DEFAULT_CHARACTER): Promise<boolean> {
  const vrm = await loadVrm(id);
  if (!vrm) return false;

  // skinned mesh 視錐裁切容易整隻消失;關閉
  vrm.scene.traverse((o) => {
    o.frustumCulled = false;
    if (o instanceof THREE.Mesh) o.castShadow = true;
  });

  const [idle, run, attack, death] = await Promise.all([
    loadMixamoClip(ANIM_URL.idle, vrm, true).catch(() => buildIdleClip(vrm)), // 載失敗回退合成待機
    loadMixamoClip(ANIM_URL.run, vrm, true), // 跑步鎖根位移→原地跑,與遊戲移動同步
    loadMixamoClip(ANIM_URL.attack, vrm),
    loadMixamoClip(ANIM_URL.death, vrm),
  ]);
  // Idle 軌全空(retarget 失敗)也回退合成待機,避免站定變 T-pose
  const idleClip = idle.tracks.length > 0 ? idle : buildIdleClip(vrm);

  proto = { vrm, clips: { idle: idleClip, run, attack, death } };
  currentId = id;
  return true;
}

/** 釋放一份 VRM 佔用的 GPU 資源(切換角色時對舊模型呼叫,避免記憶體累積) */
export function disposeVrm(vrm: VRM): void {
  vrm.scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const mat = (mesh as THREE.Mesh).material;
    const mats = Array.isArray(mat) ? mat : mat ? [mat] : [];
    for (const m of mats) {
      for (const k in m) {
        const v = (m as unknown as Record<string, unknown>)[k];
        if (v instanceof THREE.Texture) v.dispose();
      }
      m.dispose();
    }
  });
}
