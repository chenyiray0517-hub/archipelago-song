import * as THREE from "three";
import type { Input } from "../core/input";
import { toonMaterial, addOutlines } from "../core/toon";
import { groundHeight, isSailable } from "../world/terrain";

const MAX_SPEED = 16;
const REVERSE_SPEED = 5;
const ACCEL = 10;
const TURN_RATE = 1.6;

/** 曙光嶼漁村南灘的泊船點 */
export const DOCK_POS: [number, number] = [4, -63];

/**
 * 小帆船:W/S 前進後退、A/D 轉向,僅能在水深足夠處行駛,
 * 隨波浪起伏。玩家上船後由 main 把角色固定在甲板上。
 */
export class Boat {
  readonly mesh: THREE.Group;
  heading = Math.PI;

  private speed = 0;
  private bobPhase = 0;

  constructor() {
    this.mesh = new THREE.Group();

    const hull = new THREE.Mesh(new THREE.CapsuleGeometry(1.1, 2.6, 4, 10), toonMaterial(0x8a5a30));
    hull.rotation.x = Math.PI / 2;
    hull.scale.set(1, 1, 0.55);
    hull.position.y = 0.3;
    const deck = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.15, 3.6), toonMaterial(0xb08050));
    deck.position.y = 0.75;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.12, 8, 20), toonMaterial(0x6a4322));
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.85;
    rim.scale.set(0.62, 1.25, 1);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 3.6), toonMaterial(0x6a4322));
    mast.position.set(0, 2.4, 0.3);
    const sail = new THREE.Mesh(
      new THREE.PlaneGeometry(1.9, 2.4),
      toonMaterial(0xf0ead8),
    );
    (sail.material as THREE.MeshToonMaterial).side = THREE.DoubleSide;
    sail.position.set(0, 2.6, 0.28);
    const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.0), toonMaterial(0x6a4322));
    boom.rotation.z = Math.PI / 2;
    boom.position.set(0, 1.4, 0.28);

    this.mesh.add(hull, deck, rim, mast, sail, boom);
    addOutlines(this.mesh);
    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });

    this.resetToDock();
  }

  /** 把船移回漁村泊船點(死亡重生時呼叫,避免玩家被困在外島) */
  resetToDock(): void {
    this.mesh.position.set(DOCK_POS[0], 0.3, DOCK_POS[1]);
    this.heading = Math.PI;
    this.speed = 0;
    this.mesh.rotation.set(0, this.heading, 0);
  }

  /** 直接放置(讀檔還原用) */
  place(x: number, z: number): void {
    this.mesh.position.set(x, 0.3, z);
  }

  /**
   * 航行更新(僅駕駛中呼叫):油門/轉向/波浪起伏,擱淺自動停船。
   * @param speedFactor 天氣影響的速度倍率(風暴減速)
   */
  sail(dt: number, input: Input, speedFactor = 1): void {
    let target = 0;
    if (input.isDown("KeyW")) target = MAX_SPEED * speedFactor;
    else if (input.isDown("KeyS")) target = -REVERSE_SPEED;
    this.speed += THREE.MathUtils.clamp(target - this.speed, -ACCEL * dt, ACCEL * dt);

    const turnScale = 0.4 + 0.6 * Math.min(Math.abs(this.speed) / MAX_SPEED, 1);
    if (input.isDown("KeyA")) this.heading += TURN_RATE * turnScale * dt;
    if (input.isDown("KeyD")) this.heading -= TURN_RATE * turnScale * dt;

    const dir = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading));
    const next = this.mesh.position.clone().addScaledVector(dir, this.speed * dt);
    if (isSailable(next.x, next.z)) {
      this.mesh.position.x = next.x;
      this.mesh.position.z = next.z;
    } else {
      this.speed = 0; // 擱淺
    }

    this.idle(dt);
  }

  /** 波浪起伏(停泊與航行都要) */
  idle(dt: number): void {
    this.bobPhase += dt * 1.6;
    this.mesh.position.y = 0.3 + Math.sin(this.bobPhase) * 0.12;
    this.mesh.rotation.set(
      Math.sin(this.bobPhase * 0.8) * 0.03,
      this.heading,
      Math.cos(this.bobPhase * 0.7) * 0.04,
    );
  }

  /**
   * 找船附近可上岸的點(8 方位 × 漸進距離取樣)。
   * @returns 可站立座標,找不到回傳 null
   */
  findLandingSpot(): THREE.Vector3 | null {
    for (let dist = 2.5; dist <= 7; dist += 1.5) {
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x = this.mesh.position.x + Math.sin(angle) * dist;
        const z = this.mesh.position.z + Math.cos(angle) * dist;
        if (groundHeight(x, z) > 0.3) return new THREE.Vector3(x, groundHeight(x, z), z);
      }
    }
    return null;
  }
}
