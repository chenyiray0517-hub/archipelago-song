import * as THREE from "three";
import { groundHeight } from "../world/terrain";
import type { Enemy } from "./enemy";

const HIT_RADIUS = 1.8;

/**
 * 衝擊波斬:平躺新月形劍氣,沿面向直線飛行,
 * 路徑上每隻敵人只命中一次,飛行中逐漸放大與淡出。
 * 預設為滿氣衝擊波(藍);焰心石火焰斬以 options 換色/縮短射程。
 */
export class Shockwave {
  readonly mesh: THREE.Mesh;
  readonly damage: number;
  /** 命中時是否冰凍敵人(霜語晶冰箭) */
  readonly freezes: boolean;
  /** 命中時是否點燃敵人(溶岩石熔岩噴發) */
  readonly burns: boolean;

  private life: number;
  private readonly lifetime: number;
  private readonly speed: number;
  private readonly direction: THREE.Vector3;
  private readonly material: THREE.MeshBasicMaterial;
  private readonly hitEnemies = new Set<Enemy>();

  constructor(
    origin: THREE.Vector3,
    facing: number,
    damage: number,
    options: {
      color?: number;
      lifetime?: number;
      speed?: number;
      freezes?: boolean;
      burns?: boolean;
    } = {},
  ) {
    this.damage = damage;
    this.freezes = options.freezes ?? false;
    this.burns = options.burns ?? false;
    this.lifetime = options.lifetime ?? 0.9;
    this.speed = options.speed ?? 22;
    this.life = this.lifetime;
    this.direction = new THREE.Vector3(Math.sin(facing), 0, Math.cos(facing));

    this.material = new THREE.MeshBasicMaterial({
      color: options.color ?? 0x7fe8ff,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    // 新月形:平躺的圓環弧段,弧頂朝飛行方向、開口朝後,貼地橫掃
    const arc = Math.PI * 0.95;
    this.mesh = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.16, 8, 20, arc), this.material);
    this.mesh.position.copy(origin);
    this.mesh.position.y = groundHeight(origin.x, origin.z) + 0.6;
    // YXZ:先在弧面內把弧頂轉正(z),再放平(x),最後對齊面向(y)
    this.mesh.rotation.order = "YXZ";
    this.mesh.rotation.set(-Math.PI / 2, facing, -Math.PI / 2 - arc / 2);
  }

  /** 波是否已結束(超出壽命) */
  get expired(): boolean {
    return this.life <= 0;
  }

  /**
   * 每幀更新:前進、貼地高度、放大淡出。
   * @returns 本幀新命中的敵人(供結算傷害)
   */
  update(dt: number, enemies: Enemy[]): Enemy[] {
    this.life -= dt;
    if (this.expired) return [];

    this.mesh.position.addScaledVector(this.direction, this.speed * dt);
    this.mesh.position.y =
      groundHeight(this.mesh.position.x, this.mesh.position.z) + 0.6;

    const progress = 1 - this.life / this.lifetime;
    this.mesh.scale.setScalar(1 + progress * 0.9);
    this.material.opacity = 0.85 * (1 - progress * 0.7);

    const hits: Enemy[] = [];
    for (const enemy of enemies) {
      if (enemy.isDead || this.hitEnemies.has(enemy)) continue;
      const dx = enemy.mesh.position.x - this.mesh.position.x;
      const dz = enemy.mesh.position.z - this.mesh.position.z;
      if (Math.hypot(dx, dz) < HIT_RADIUS * this.mesh.scale.x) {
        this.hitEnemies.add(enemy);
        hits.push(enemy);
      }
    }
    return hits;
  }

  /** 釋放幾何與材質資源 */
  dispose(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
