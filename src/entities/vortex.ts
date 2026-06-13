import * as THREE from "three";
import { groundHeight } from "../world/terrain";
import { VORTEX_TICK } from "../systems/fruits";
import type { Enemy } from "./enemy";

const PULL_SPEED = 6;

/**
 * 引力漩渦:在定點生成,持續時間內把半徑內敵人吸向中心(聚怪),
 * 並每 VORTEX_TICK 秒對範圍內敵人結算一次傷害(傷害/掉落在 main 走既有流程)。
 */
export class Vortex {
  readonly mesh: THREE.Group;
  readonly damage: number;

  private readonly center: THREE.Vector3;
  private readonly radius: number;
  private life: number;
  private tickT = 0;
  private spin = 0;
  private readonly ring: THREE.Mesh;
  private readonly core: THREE.Mesh;
  private readonly ringMaterial: THREE.MeshBasicMaterial;
  private readonly coreMaterial: THREE.MeshBasicMaterial;

  constructor(x: number, z: number, radius: number, duration: number, damage: number) {
    this.center = new THREE.Vector3(x, groundHeight(x, z) + 0.4, z);
    this.radius = radius;
    this.life = duration;
    this.damage = damage;

    this.mesh = new THREE.Group();
    this.ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x9a6ae8,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    this.ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.4, 8, 32), this.ringMaterial);
    this.ring.rotation.x = -Math.PI / 2;
    this.coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xd8b0ff,
      transparent: true,
      opacity: 0.8,
    });
    this.core = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 10), this.coreMaterial);
    this.mesh.add(this.ring, this.core);
    this.mesh.position.copy(this.center);
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  /**
   * 每幀更新:旋轉視覺、把敵人吸向中心、每 tick 回傳要結算傷害的敵人。
   * @returns 本 tick 在範圍內的敵人(供 main 結算傷害);非 tick 幀回空陣列
   */
  update(dt: number, enemies: Enemy[]): Enemy[] {
    this.life -= dt;
    this.spin += dt * 6;
    this.mesh.rotation.y = this.spin;
    const pulse = 0.85 + 0.15 * Math.sin(this.spin * 2);
    this.core.scale.setScalar(pulse);
    const fade = Math.min(this.life, 1);
    this.ringMaterial.opacity = 0.5 * fade;
    this.coreMaterial.opacity = 0.8 * fade;

    // 吸引:範圍內敵人朝中心水平位移(不覆蓋到中心,避免疊在一起卡住)
    for (const enemy of enemies) {
      if (enemy.isDead) continue;
      const dx = this.center.x - enemy.mesh.position.x;
      const dz = this.center.z - enemy.mesh.position.z;
      const d = Math.hypot(dx, dz);
      if (d > this.radius || d < 0.6) continue;
      const pull = Math.min(PULL_SPEED * dt, d - 0.5);
      enemy.mesh.position.x += (dx / d) * pull;
      enemy.mesh.position.z += (dz / d) * pull;
    }

    this.tickT += dt;
    if (this.tickT >= VORTEX_TICK) {
      this.tickT -= VORTEX_TICK;
      const hits: Enemy[] = [];
      for (const enemy of enemies) {
        if (enemy.isDead) continue;
        const d = Math.hypot(
          this.center.x - enemy.mesh.position.x,
          this.center.z - enemy.mesh.position.z,
        );
        if (d <= this.radius) hits.push(enemy);
      }
      return hits;
    }
    return [];
  }

  dispose(): void {
    this.ring.geometry.dispose();
    this.core.geometry.dispose();
    this.ringMaterial.dispose();
    this.coreMaterial.dispose();
  }
}
