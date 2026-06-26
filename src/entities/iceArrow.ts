import * as THREE from "three";
import { groundHeight } from "../world/terrain";
import type { Enemy } from "./enemy";

const HIT_RADIUS = 1.3;

/**
 * 寒冰箭矢:霜語晶射出的冰晶箭,沿面向直線飛行(胸高),
 * 路徑上每隻敵人只命中一次,命中造成傷害並冰凍。
 *
 * 視覺由箭桿 + 箭頭 + 尾羽組成,外裹冰藍 additive 輝光殼,尾端拖一道明滅寒氣。
 */
export class IceArrow {
  readonly mesh: THREE.Group;
  readonly damage: number;
  readonly freezeSec: number;

  private life: number;
  private readonly lifetime = 0.7;
  private readonly speed = 32;
  private readonly direction: THREE.Vector3;
  private readonly glowMat: THREE.MeshBasicMaterial;
  private readonly trailMat: THREE.MeshBasicMaterial;
  private readonly trail: THREE.Mesh;
  private readonly materials: THREE.Material[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly hitEnemies = new Set<Enemy>();

  constructor(origin: THREE.Vector3, facing: number, damage: number, freezeSec: number) {
    this.damage = damage;
    this.freezeSec = freezeSec;
    this.life = this.lifetime;
    this.direction = new THREE.Vector3(Math.sin(facing), 0, Math.cos(facing));

    this.mesh = new THREE.Group();
    this.mesh.position.copy(origin);
    this.mesh.position.y = groundHeight(origin.x, origin.z) + 1.0;
    this.mesh.rotation.y = facing; // 本地 +Z 對齊飛行方向

    const addMat = (
      color: THREE.ColorRepresentation,
      opacity: number,
      additive = true,
    ): THREE.MeshBasicMaterial => {
      const m = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      this.materials.push(m);
      return m;
    };
    const addPart = (geo: THREE.BufferGeometry, mat: THREE.Material, rotX = 0, z = 0): void => {
      this.geometries.push(geo);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = rotX;
      mesh.position.z = z;
      this.mesh.add(mesh);
    };

    const coreMat = addMat(0xeafaff, 0.95); // 冰白核
    const iceMat = addMat(0x8ad6ff, 0.9, false); // 冰藍實體
    this.glowMat = addMat(0x5ab8ff, 0.4); // 外裹輝光殼

    // 箭桿(沿 +Z)、箭頭(尖朝 +Z)、尾羽、輝光殼
    addPart(new THREE.CylinderGeometry(0.05, 0.05, 1.3, 6), iceMat, Math.PI / 2, 0);
    addPart(new THREE.ConeGeometry(0.2, 0.5, 7), coreMat, Math.PI / 2, 0.85);
    // 兩片尾羽(交叉薄片)
    addPart(new THREE.PlaneGeometry(0.5, 0.34), iceMat, 0, -0.55);
    addPart(new THREE.PlaneGeometry(0.34, 0.5), iceMat, Math.PI / 2, -0.55);
    // 輝光殼:略大的冰晶包覆,additive 發光
    addPart(new THREE.ConeGeometry(0.34, 1.9, 7), this.glowMat, Math.PI / 2, 0.2);

    // 尾端拖尾寒氣(明滅縮放)
    this.trailMat = addMat(0xbfeaff, 0.55);
    const trailGeo = new THREE.ConeGeometry(0.3, 1.2, 7, 1, true);
    this.geometries.push(trailGeo);
    this.trail = new THREE.Mesh(trailGeo, this.trailMat);
    this.trail.rotation.x = -Math.PI / 2; // 開口朝後(-Z)
    this.trail.position.z = -1.1;
    this.mesh.add(this.trail);
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  /**
   * 每幀更新:前進、貼胸高、拖尾明滅。
   * @returns 本幀新命中的敵人(供 main 結算傷害 + 凍結)
   */
  update(dt: number, enemies: Enemy[]): Enemy[] {
    this.life -= dt;
    if (this.expired) return [];

    this.mesh.position.addScaledVector(this.direction, this.speed * dt);
    this.mesh.position.y = groundHeight(this.mesh.position.x, this.mesh.position.z) + 1.0;

    const k = this.life / this.lifetime;
    const flick = 0.5 + Math.random() * 0.5;
    this.trailMat.opacity = 0.55 * k * flick;
    this.trail.scale.set(flick, 1, flick);
    this.glowMat.opacity = 0.4 * (0.6 + 0.4 * flick);

    const hits: Enemy[] = [];
    for (const enemy of enemies) {
      if (enemy.isDead || this.hitEnemies.has(enemy)) continue;
      const dx = enemy.mesh.position.x - this.mesh.position.x;
      const dz = enemy.mesh.position.z - this.mesh.position.z;
      if (Math.hypot(dx, dz) < HIT_RADIUS) {
        this.hitEnemies.add(enemy);
        hits.push(enemy);
      }
    }
    return hits;
  }

  dispose(): void {
    for (const g of this.geometries) g.dispose();
    for (const m of this.materials) m.dispose();
  }
}
