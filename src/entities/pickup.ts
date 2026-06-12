import * as THREE from "three";
import { toonMaterial } from "../core/toon";
import { groundHeight } from "../world/terrain";
import type { CrystalSize } from "../systems/stats";

export type PickupKind =
  | CrystalSize
  | "coin"
  | "gem-flame"
  | "gem-wind"
  | "gem-earth"
  | "gem-frost"
  | "gem-tide"
  | "gem-void";

const MAGNET_RANGE = 6;
const COLLECT_RANGE = 0.9;
const MAGNET_SPEED = 9;

const CRYSTAL_STYLE: Record<CrystalSize, { color: number; size: number }> = {
  small: { color: 0x6fd8e8, size: 0.28 },
  medium: { color: 0x4a7fe8, size: 0.4 },
  large: { color: 0xa05ce8, size: 0.55 },
};

/**
 * 掉落物(經驗結晶/貝拉幣):漂浮旋轉,玩家靠近時磁吸收取。
 */
export class Pickup {
  readonly mesh: THREE.Mesh;
  readonly kind: PickupKind;

  private bobPhase = Math.random() * Math.PI * 2;
  private readonly baseY: number;

  constructor(kind: PickupKind, x: number, z: number) {
    this.kind = kind;
    if (kind === "coin") {
      this.mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.22, 0.06, 12),
        toonMaterial(0xf0c040, { emissive: 0xf0c040, emissiveIntensity: 0.25 }),
      );
      this.mesh.rotation.x = Math.PI / 2;
    } else if (
      kind === "gem-flame" ||
      kind === "gem-wind" ||
      kind === "gem-earth" ||
      kind === "gem-frost" ||
      kind === "gem-tide" ||
      kind === "gem-void"
    ) {
      // 靈紋寶石:大顆八面體,強烈發光
      const GEM_COLORS = {
        "gem-flame": 0xff5a2c,
        "gem-wind": 0x4ae8d8,
        "gem-earth": 0xc88a3c,
        "gem-frost": 0x9adcff,
        "gem-tide": 0x2a6fe8,
        "gem-void": 0x8a4ae8,
      } as const;
      const gemColor = GEM_COLORS[kind];
      this.mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.75),
        toonMaterial(gemColor, { emissive: gemColor, emissiveIntensity: 0.9 }),
      );
    } else {
      const style = CRYSTAL_STYLE[kind];
      this.mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(style.size),
        toonMaterial(style.color, { emissive: style.color, emissiveIntensity: 0.5 }),
      );
    }
    const scatterX = x + (Math.random() - 0.5) * 1.6;
    const scatterZ = z + (Math.random() - 0.5) * 1.6;
    this.baseY = groundHeight(scatterX, scatterZ) + 0.7;
    this.mesh.position.set(scatterX, this.baseY, scatterZ);
  }

  /**
   * 每幀更新:漂浮動畫 + 磁吸。
   * 距離判定只看水平面(結晶漂浮高度與地形坡差不影響撿取)。
   * @returns 玩家已收取則回傳 true
   */
  update(dt: number, playerPos: THREE.Vector3): boolean {
    this.bobPhase += dt * 3;
    this.mesh.rotation.y += dt * 2;
    this.mesh.position.y = this.baseY + Math.sin(this.bobPhase) * 0.12;

    const dx = playerPos.x - this.mesh.position.x;
    const dz = playerPos.z - this.mesh.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist < MAGNET_RANGE && dist > 0.01) {
      const step = Math.min((MAGNET_SPEED * dt) / dist, 1);
      this.mesh.position.x += dx * step;
      this.mesh.position.z += dz * step;
    }
    return dist < COLLECT_RANGE;
  }
}
