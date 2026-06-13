import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import { groundHeight } from "../world/terrain";

/** 玩家進入此距離可設置重生點 */
export const SHRINE_RANGE = 3.5;

/** 同時啟用的重生點上限(超過時替換最早設置的) */
export const MAX_ACTIVE_SHRINES = 2;

export interface ShrineDef {
  /** 存檔識別碼 */
  id: string;
  /** 所在島嶼名(顯示用) */
  island: string;
  x: number;
  z: number;
  /** 在此重生時船隻安置的近岸海點(避免被困外島) */
  boat: { x: number; z: number };
}

/** 每座島一座重生石碑(位置避開 NPC 對話圈與熔岩區) */
export const SHRINE_DEFS: ShrineDef[] = [
  // 第一海
  { id: "dawn", island: "曙光嶼", x: -9, z: -44, boat: { x: 4, z: -63 } },
  { id: "verdant", island: "翠風林島", x: 150, z: 64, boat: { x: 150, z: 48 } },
  { id: "ember", island: "燼岩火山島", x: -143, z: 74, boat: { x: -150, z: 62 } },
  { id: "frost", island: "霜雪峰島", x: 60, z: -210, boat: { x: 60, z: -230 } },
  { id: "void", island: "虛空之心", x: 0, z: 278, boat: { x: 0, z: 264 } },
  // 第二海(x > 1100;啟用上限與背包傳送皆與第一海各自獨立)
  { id: "port", island: "港口鎮", x: 1988, z: 14, boat: { x: 2006, z: -58 } },
  { id: "desert", island: "熔砂島", x: 2178, z: 130, boat: { x: 2200, z: 98 } },
  { id: "coral", island: "珊瑚礁島", x: 1812, z: -92, boat: { x: 1790, z: -54 } },
  { id: "spring", island: "靈脈島", x: 2142, z: -162, boat: { x: 2120, z: -124 } },
];

/**
 * 重生石碑:石座 + 漂浮水晶。靠近按 F 設置為重生點,
 * 啟用時水晶亮起發光脈動、底部浮現光環;死亡畫面可選擇在已啟用的石碑重生。
 */
export class Shrine {
  readonly mesh: THREE.Group;
  active = false;

  private readonly crystalGroup: THREE.Group;
  private readonly crystalMat: THREE.MeshToonMaterial;
  private readonly ring: THREE.Mesh;
  private phase = Math.random() * Math.PI * 2;

  constructor(readonly def: ShrineDef) {
    this.mesh = new THREE.Group();
    const body = new THREE.Group();

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.4, 0.5, 8),
      toonMaterial(0x7a8294),
    );
    base.position.y = 0.25;
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.5, 2.2, 8),
      toonMaterial(0x8a92a4),
    );
    pillar.position.y = 1.6;
    body.add(base, pillar);

    this.crystalMat = toonMaterial(0x6a7a8a);
    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.45), this.crystalMat);
    this.crystalGroup = new THREE.Group();
    this.crystalGroup.add(crystal);
    this.crystalGroup.position.y = 3.2;
    body.add(this.crystalGroup);

    addOutlines(body);
    body.traverse((child) => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });
    this.mesh.add(body);

    // 啟用光環:描邊之後才加,不參與卡通輪廓
    this.ring = new THREE.Mesh(
      new THREE.RingGeometry(1.5, 1.9, 28),
      new THREE.MeshBasicMaterial({
        color: 0x7fe8e8,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
      }),
    );
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.06;
    this.ring.visible = false;
    this.mesh.add(this.ring);

    this.mesh.position.set(def.x, groundHeight(def.x, def.z), def.z);
  }

  /** 切換啟用狀態(水晶亮起/熄滅 + 光環顯示) */
  setActive(on: boolean): void {
    this.active = on;
    this.ring.visible = on;
    if (on) {
      this.crystalMat.color.setHex(0x7fe8e8);
      this.crystalMat.emissive.setHex(0x4ae8e8);
      this.crystalMat.emissiveIntensity = 1.2;
    } else {
      this.crystalMat.color.setHex(0x6a7a8a);
      this.crystalMat.emissive.setHex(0x000000);
      this.crystalMat.emissiveIntensity = 1;
    }
  }

  /**
   * 每幀更新:水晶旋轉漂浮,啟用時發光脈動。
   * @returns 玩家是否在設置範圍內
   */
  update(dt: number, playerPos: THREE.Vector3): boolean {
    this.phase += dt;
    this.crystalGroup.rotation.y += dt * (this.active ? 2.2 : 0.6);
    this.crystalGroup.position.y = 3.2 + Math.sin(this.phase * 1.8) * 0.12;
    if (this.active) this.crystalMat.emissiveIntensity = 1.0 + Math.sin(this.phase * 4) * 0.4;
    const dx = playerPos.x - this.mesh.position.x;
    const dz = playerPos.z - this.mesh.position.z;
    return Math.hypot(dx, dz) < SHRINE_RANGE;
  }
}
