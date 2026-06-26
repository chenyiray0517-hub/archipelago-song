import * as THREE from "three";
import { groundHeight } from "../world/terrain";
import type { Enemy } from "./enemy";

const HIT_RADIUS = 1.8;

/**
 * 衝擊波斬:平躺新月形劍氣,沿面向直線飛行,
 * 路徑上每隻敵人只命中一次,飛行中逐漸放大與淡出。
 *
 * 視覺由多層 additive 新月疊成:外圈元素色輝光暈 + 銳利白芯 + 元素色本體弧,
 * 加上兩尖端的閃花光點,整體有體積與發光感。
 * 預設為滿氣衝擊波(藍);各寶石技能以 options 換色/縮短射程/換命中效果。
 */
export class Shockwave {
  readonly mesh: THREE.Group;
  readonly damage: number;
  /** 命中時是否冰凍敵人(霜語晶冰箭) */
  readonly freezes: boolean;
  /** 命中時是否點燃敵人(溶岩石熔岩噴發) */
  readonly burns: boolean;
  /** 命中時回復玩家的吸血比率(0 = 無;翠生石生命汲取) */
  readonly leech: number;

  private life: number;
  private readonly lifetime: number;
  private readonly speed: number;
  private readonly direction: THREE.Vector3;
  private readonly glowMat: THREE.MeshBasicMaterial;
  private readonly coreMat: THREE.MeshBasicMaterial;
  private readonly bodyMat: THREE.MeshBasicMaterial;
  private readonly sparkMat: THREE.MeshBasicMaterial;
  private readonly sparks: THREE.Mesh[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];
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
      leech?: number;
    } = {},
  ) {
    this.damage = damage;
    this.freezes = options.freezes ?? false;
    this.burns = options.burns ?? false;
    this.leech = options.leech ?? 0;
    this.lifetime = options.lifetime ?? 0.9;
    this.speed = options.speed ?? 22;
    this.life = this.lifetime;
    this.direction = new THREE.Vector3(Math.sin(facing), 0, Math.cos(facing));

    const color = options.color ?? 0x7fe8ff;
    // 白芯 = 元素色往白色提亮,做出灼熱核心感
    const core = new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.65);

    const mkMat = (c: THREE.ColorRepresentation, opacity: number): THREE.MeshBasicMaterial =>
      new THREE.MeshBasicMaterial({
        color: c,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
    this.glowMat = mkMat(color, 0.32);
    this.coreMat = mkMat(core, 0.95);
    this.bodyMat = mkMat(color, 0.7);
    this.sparkMat = mkMat(core, 0.9);

    // 新月形:平躺的圓環弧段,弧頂朝飛行方向、開口朝後,貼地橫掃。
    // group 承載世界座標與朝向,子弧只在本地座標(預設朝向)疊層,scale 同步驅動視覺與命中半徑。
    const arc = Math.PI * 0.95;
    this.mesh = new THREE.Group();
    const addArc = (tube: number, mat: THREE.MeshBasicMaterial): void => {
      const geo = new THREE.TorusGeometry(1.2, tube, 8, 24, arc);
      this.geometries.push(geo);
      this.mesh.add(new THREE.Mesh(geo, mat));
    };
    addArc(0.4, this.glowMat); // 外圈輝光暈(粗)
    addArc(0.2, this.bodyMat); // 元素色本體
    addArc(0.09, this.coreMat); // 銳利白芯(細)

    // 兩尖端閃花光點
    const sparkGeo = new THREE.IcosahedronGeometry(0.26, 0);
    this.geometries.push(sparkGeo);
    for (const a of [0, arc]) {
      const spark = new THREE.Mesh(sparkGeo, this.sparkMat);
      spark.position.set(Math.cos(a) * 1.2, Math.sin(a) * 1.2, 0);
      this.sparks.push(spark);
      this.mesh.add(spark);
    }

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
    const fade = 1 - progress * 0.7;
    this.glowMat.opacity = 0.32 * fade;
    this.bodyMat.opacity = 0.7 * fade;
    this.coreMat.opacity = 0.95 * fade;
    // 尖端閃花:隨機明滅 + 縮放,強化發光躍動感
    const flick = 0.55 + Math.random() * 0.45;
    this.sparkMat.opacity = 0.9 * fade * flick;
    for (const s of this.sparks) s.scale.setScalar(0.7 + 0.5 * flick);

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
    for (const g of this.geometries) g.dispose();
    this.glowMat.dispose();
    this.coreMat.dispose();
    this.bodyMat.dispose();
    this.sparkMat.dispose();
  }
}
