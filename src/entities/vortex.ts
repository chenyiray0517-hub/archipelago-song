import * as THREE from "three";
import { groundHeight } from "../world/terrain";
import { VORTEX_TICK } from "../systems/fruits";
import type { Enemy } from "./enemy";

const PULL_SPEED = 6;
const MOTE_COUNT = 18;
const SPAWN_TIME = 0.22;

/** 被吸入的塵埃光點:繞著漩渦螺旋向心、向下沉,抵達核心後重置回外圈 */
interface Mote {
  mesh: THREE.Mesh;
  angle: number;
  radius: number;
  height: number;
  angSpeed: number;
}

/**
 * 引力漩渦:在定點生成漏斗狀渦流,持續時間內把半徑內敵人吸向中心(聚怪),
 * 並每 VORTEX_TICK 秒對範圍內敵人結算一次傷害(傷害/掉落在 main 走既有流程)。
 *
 * 視覺由地面光環(範圍預兆)+ 漏斗錐 + 三組螺旋臂 + 分層渦環 +
 * 向心塵埃光點 + 脈動核心與輝光組成;生成時彈出、結束時塌縮。
 */
export class Vortex {
  readonly mesh: THREE.Group;
  readonly damage: number;

  private readonly center: THREE.Vector3;
  private readonly radius: number;
  private life: number;
  private tickT = 0;
  private spin = 0;
  private age = 0;

  private readonly swirl: THREE.Group;
  private readonly groundRing: THREE.Mesh;
  private readonly core: THREE.Mesh;
  private readonly innerRings: THREE.Mesh[] = [];
  private readonly motes: Mote[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly groundMat: THREE.MeshBasicMaterial;
  private readonly funnelMat: THREE.MeshBasicMaterial;
  private readonly armMat: THREE.LineBasicMaterial;
  private readonly ringMat: THREE.MeshBasicMaterial;
  private readonly coreMat: THREE.MeshBasicMaterial;
  private readonly haloMat: THREE.MeshBasicMaterial;
  private readonly moteMat: THREE.MeshBasicMaterial;

  constructor(x: number, z: number, radius: number, duration: number, damage: number) {
    this.center = new THREE.Vector3(x, groundHeight(x, z) + 0.4, z);
    this.radius = radius;
    this.life = duration;
    this.damage = damage;

    const FUNNEL_H = radius * 0.9 + 1.6; // 漏斗高度隨範圍放大

    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.center);
    this.swirl = new THREE.Group();
    this.mesh.add(this.swirl);

    // 共用材質(additive 輝光,depthWrite=false 避免排序穿插)
    const addMat = (color: number, opacity: number): THREE.MeshBasicMaterial => {
      const m = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      this.materials.push(m);
      return m;
    };

    // 地面光環:標示作用範圍(預兆),貼地略浮
    this.groundMat = addMat(0x9a6ae8, 0.45);
    const groundGeo = new THREE.TorusGeometry(radius, 0.22, 8, 48);
    this.geometries.push(groundGeo);
    this.groundRing = new THREE.Mesh(groundGeo, this.groundMat);
    this.groundRing.rotation.x = -Math.PI / 2;
    this.groundRing.position.y = -0.3;
    this.mesh.add(this.groundRing);

    // 漏斗錐:上寬下窄的開口錐,半透明渦體
    this.funnelMat = addMat(0x7a4ad0, 0.14);
    const funnelGeo = new THREE.ConeGeometry(radius * 0.85, FUNNEL_H, 32, 1, true);
    this.geometries.push(funnelGeo);
    const funnel = new THREE.Mesh(funnelGeo, this.funnelMat);
    funnel.rotation.x = Math.PI; // 翻轉成開口朝上
    funnel.position.y = FUNNEL_H / 2 - 0.2;
    this.swirl.add(funnel);

    // 三組對數螺旋臂:由外上盤旋而下匯入核心,提供強烈渦流讀感
    this.armMat = new THREE.LineBasicMaterial({
      color: 0xe0c0ff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.materials.push(this.armMat);
    for (let a = 0; a < 3; a++) {
      const pts: THREE.Vector3[] = [];
      const base = (a / 3) * Math.PI * 2;
      const turns = 2.4;
      for (let i = 0; i <= 48; i++) {
        const t = i / 48;
        const ang = base + t * turns * Math.PI * 2;
        const r = radius * 0.85 * (1 - t) + 0.2;
        const y = (1 - t) * (FUNNEL_H - 0.4);
        pts.push(new THREE.Vector3(Math.cos(ang) * r, y, Math.sin(ang) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      this.geometries.push(geo);
      this.swirl.add(new THREE.Line(geo, this.armMat));
    }

    // 分層渦環:三圈水平環,各自獨立轉動(交錯方向)疊出層次
    this.ringMat = addMat(0xb886ff, 0.5);
    const ringDefs = [
      { r: radius * 0.85, y: 0.2 },
      { r: radius * 0.55, y: FUNNEL_H * 0.45 },
      { r: radius * 0.32, y: FUNNEL_H * 0.8 },
    ];
    for (const def of ringDefs) {
      const geo = new THREE.TorusGeometry(def.r, 0.16, 8, 32);
      this.geometries.push(geo);
      const ring = new THREE.Mesh(geo, this.ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = def.y;
      this.innerRings.push(ring);
      this.mesh.add(ring);
    }

    // 向心塵埃光點:螺旋吸入動畫,強化「拉扯」手感
    this.moteMat = addMat(0xf0d8ff, 0.9);
    const moteGeo = new THREE.OctahedronGeometry(0.13, 0);
    this.geometries.push(moteGeo);
    for (let i = 0; i < MOTE_COUNT; i++) {
      const mesh = new THREE.Mesh(moteGeo, this.moteMat);
      this.motes.push({
        mesh,
        angle: Math.random() * Math.PI * 2,
        radius: 0.6 + Math.random() * (radius - 0.6),
        height: Math.random() * FUNNEL_H,
        angSpeed: 3 + Math.random() * 2.5,
      });
      this.mesh.add(mesh);
    }

    // 脈動核心 + 外圈輝光暈
    this.coreMat = addMat(0xe8c8ff, 0.85);
    const coreGeo = new THREE.SphereGeometry(0.7, 16, 12);
    this.geometries.push(coreGeo);
    this.core = new THREE.Mesh(coreGeo, this.coreMat);
    this.core.position.y = 0.3;
    this.mesh.add(this.core);

    this.haloMat = addMat(0xb878ff, 0.28);
    const haloGeo = new THREE.SphereGeometry(1.4, 16, 12);
    this.geometries.push(haloGeo);
    const halo = new THREE.Mesh(haloGeo, this.haloMat);
    halo.position.y = 0.3;
    this.mesh.add(halo);

    this.mesh.scale.setScalar(0.01); // 由生成動畫彈出
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  /**
   * 每幀更新:渦流視覺動畫、把敵人吸向中心、每 tick 回傳要結算傷害的敵人。
   * @returns 本 tick 在範圍內的敵人(供 main 結算傷害);非 tick 幀回空陣列
   */
  update(dt: number, enemies: Enemy[]): Enemy[] {
    this.life -= dt;
    this.age += dt;
    this.spin += dt * 6;

    // 生成彈出 + 結束塌縮,取兩者最小值
    const popIn = Math.min(this.age / SPAWN_TIME, 1);
    const collapse = Math.min(this.life / 0.3, 1);
    const grow = Math.min(popIn, Math.max(collapse, 0));
    this.mesh.scale.setScalar(grow);

    // 螺旋臂與漏斗整體旋轉;渦環各自交錯轉動
    this.swirl.rotation.y = this.spin;
    for (let i = 0; i < this.innerRings.length; i++) {
      const dir = i % 2 === 0 ? 1 : -1.4;
      this.innerRings[i].rotation.z = this.spin * dir * (1 + i * 0.3);
    }

    // 核心脈動
    const pulse = 0.85 + 0.15 * Math.sin(this.spin * 2);
    this.core.scale.setScalar(pulse);

    // 塵埃光點:持續向心(縮半徑)、下沉,抵達核心後重置回外圈
    const FUNNEL_H = this.radius * 0.9 + 1.6;
    for (const m of this.motes) {
      m.angle += m.angSpeed * dt;
      m.radius -= dt * 2.4;
      m.height -= dt * (FUNNEL_H / 1.6);
      if (m.radius < 0.4 || m.height < 0) {
        m.radius = 0.8 + Math.random() * (this.radius - 0.8);
        m.height = FUNNEL_H * (0.6 + Math.random() * 0.4);
      }
      m.mesh.position.set(
        Math.cos(m.angle) * m.radius,
        m.height,
        Math.sin(m.angle) * m.radius,
      );
      m.mesh.rotation.x += dt * 6;
      m.mesh.rotation.y += dt * 5;
    }

    // 整體淡入淡出(尾段隨壽命收掉)
    const fade = Math.min(this.life, 1);
    this.groundMat.opacity = 0.45 * fade;
    this.funnelMat.opacity = 0.14 * fade;
    this.armMat.opacity = 0.7 * fade;
    this.ringMat.opacity = 0.5 * fade;
    this.coreMat.opacity = 0.85 * fade;
    this.haloMat.opacity = 0.28 * fade * pulse;
    this.moteMat.opacity = 0.9 * fade;

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
    for (const g of this.geometries) g.dispose();
    for (const m of this.materials) m.dispose();
  }
}
