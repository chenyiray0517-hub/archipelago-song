import * as THREE from "three";
import { groundHeight } from "../world/terrain";

/**
 * 純視覺的瞬時技能特效(無傷害結算,結算在 main 走既有流程)。
 * 統一介面,主迴圈用單一陣列管理:每幀 update,expired 後 dispose+移除。
 */
export interface TransientFx {
  readonly object: THREE.Object3D;
  readonly expired: boolean;
  update(dt: number): void;
  dispose(): void;
}

/** 上拋碎屑(地震波飛石 / 碧波水珠):向外上拋、受重力下墜、旋轉、尾段淡出 */
interface Shard {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  spin: THREE.Vector3;
}

/**
 * 地面爆發:中心向外擴散的環 + 地面閃光 + 上拋碎屑。
 * earth 地震波(褐色地裂飛石)與 aqua 碧波震盪(青色水環水珠)共用,以 options 換色換質感。
 */
export class GroundBurst implements TransientFx {
  readonly object: THREE.Group;
  private life: number;
  private readonly lifetime: number;
  private readonly radius: number;
  private readonly grav: number;
  private readonly rings: THREE.Mesh[] = [];
  private readonly flash: THREE.Mesh;
  private readonly shards: Shard[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly ringMat: THREE.MeshBasicMaterial;
  private readonly flashMat: THREE.MeshBasicMaterial;
  private readonly shardMat: THREE.MeshBasicMaterial;

  constructor(
    x: number,
    z: number,
    options: {
      ringColor: number;
      shardColor: number;
      radius: number;
      shardCount?: number;
      /** 碎屑形狀:rock=四面體碎石(地震)、drop=八面體水珠(碧波) */
      shardKind?: "rock" | "drop";
      lifetime?: number;
    },
  ) {
    const groundY = groundHeight(x, z);
    this.radius = options.radius;
    this.lifetime = options.lifetime ?? 0.75;
    this.life = this.lifetime;
    this.grav = options.shardKind === "drop" ? 16 : 22;

    this.object = new THREE.Group();
    this.object.position.set(x, groundY + 0.08, z);

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

    // 兩圈擴散環:由小放大到作用半徑,錯開起跑時間做出連續推進感
    this.ringMat = addMat(options.ringColor, 0.7);
    for (let i = 0; i < 2; i++) {
      const geo = new THREE.TorusGeometry(1, 0.14, 8, 40);
      this.geometries.push(geo);
      const ring = new THREE.Mesh(geo, this.ringMat);
      ring.rotation.x = -Math.PI / 2;
      this.rings.push(ring);
      this.object.add(ring);
    }

    // 地面閃光圓盤:瞬間亮起後快速收掉
    this.flashMat = addMat(options.ringColor, 0.5);
    const flashGeo = new THREE.RingGeometry(0.2, this.radius * 0.9, 40);
    this.geometries.push(flashGeo);
    this.flash = new THREE.Mesh(flashGeo, this.flashMat);
    this.flash.rotation.x = -Math.PI / 2;
    this.object.add(this.flash);

    // 上拋碎屑
    this.shardMat = addMat(options.shardColor, 0.95);
    const count = options.shardCount ?? 14;
    const shardGeo =
      options.shardKind === "drop"
        ? new THREE.OctahedronGeometry(0.16, 0)
        : new THREE.TetrahedronGeometry(0.22, 0);
    this.geometries.push(shardGeo);
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(shardGeo, this.shardMat);
      const ang = (i / count) * Math.PI * 2 + Math.random() * 0.5;
      const out = this.radius * (0.3 + Math.random() * 0.5);
      mesh.position.set(Math.cos(ang) * 0.4, 0.2, Math.sin(ang) * 0.4);
      this.shards.push({
        mesh,
        vel: new THREE.Vector3(
          Math.cos(ang) * out,
          6 + Math.random() * 5,
          Math.sin(ang) * out,
        ),
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ),
      });
      this.object.add(mesh);
    }
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  update(dt: number): void {
    this.life -= dt;
    const t = 1 - Math.max(this.life, 0) / this.lifetime; // 0→1
    const fade = 1 - t;

    // 擴散環:第二圈延遲起跑;半徑 ease-out 推到作用半徑
    for (let i = 0; i < this.rings.length; i++) {
      const lead = i * 0.18;
      const rt = Math.min(Math.max((t - lead) / (1 - lead), 0), 1);
      const r = 0.3 + (this.radius - 0.3) * (1 - (1 - rt) * (1 - rt));
      this.rings[i].scale.set(r, r, 1);
      this.rings[i].visible = rt > 0;
    }
    this.ringMat.opacity = 0.7 * fade;

    // 地面閃光:前 30% 壽命快速收掉
    this.flashMat.opacity = 0.5 * Math.max(1 - t / 0.3, 0);

    // 碎屑:拋物線下墜 + 旋轉 + 尾段淡出
    for (const s of this.shards) {
      s.vel.y -= this.grav * dt;
      s.mesh.position.addScaledVector(s.vel, dt);
      s.mesh.rotation.x += s.spin.x * dt;
      s.mesh.rotation.y += s.spin.y * dt;
      s.mesh.rotation.z += s.spin.z * dt;
    }
    this.shardMat.opacity = 0.95 * fade;
  }

  dispose(): void {
    for (const g of this.geometries) g.dispose();
    for (const m of this.materials) m.dispose();
  }
}

/**
 * 生命汲取光束:翠生石射出一條連接玩家與前方的綠色光束,
 * 由外裹輝光柱 + 銳利核心柱 + 一串沿光束「回流向玩家」的生命光點組成,短暫後淡出。
 * 傷害與回血在 main 即時結算,這裡只負責畫。
 */
export class LifeBeam implements TransientFx {
  readonly object: THREE.Group;
  private life: number;
  private readonly lifetime = 0.34;
  private readonly length: number;
  private flow = 0;
  private readonly motes: THREE.Mesh[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly glowMat: THREE.MeshBasicMaterial;
  private readonly coreMat: THREE.MeshBasicMaterial;
  private readonly moteMat: THREE.MeshBasicMaterial;

  constructor(from: THREE.Vector3, to: THREE.Vector3) {
    this.life = this.lifetime;
    this.object = new THREE.Group();
    this.object.position.copy(from);
    const dir = new THREE.Vector3().subVectors(to, from);
    this.length = dir.length();
    // 子物件沿本地 +Z(由 from 指向 to),group 旋轉對齊世界方向
    this.object.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      dir.clone().normalize(),
    );

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

    // 外輝光柱 + 核心柱(CylinderGeometry 預設沿 Y → 轉成沿 Z,中心移到光束中點)
    const mkBeam = (radius: number, mat: THREE.MeshBasicMaterial): void => {
      const geo = new THREE.CylinderGeometry(radius, radius, this.length, 10, 1, true);
      this.geometries.push(geo);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.z = this.length / 2;
      this.object.add(mesh);
    };
    this.glowMat = addMat(0x4ae86a, 0.4);
    this.coreMat = addMat(0xc8ffd0, 0.95);
    mkBeam(0.34, this.glowMat);
    mkBeam(0.12, this.coreMat);

    // 生命光點:沿光束「回流」向玩家(from),強化吸取手感
    this.moteMat = addMat(0xa8ffb8, 0.95);
    const moteGeo = new THREE.OctahedronGeometry(0.16, 0);
    this.geometries.push(moteGeo);
    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(moteGeo, this.moteMat);
      this.motes.push(mesh);
      this.object.add(mesh);
    }
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  update(dt: number): void {
    this.life -= dt;
    this.flow += dt;
    const fade = Math.max(this.life, 0) / this.lifetime;
    this.glowMat.opacity = 0.4 * fade;
    this.coreMat.opacity = 0.95 * fade;
    this.moteMat.opacity = 0.95 * fade;
    // 光點沿 +Z(to)往 from(0)回流:frac 隨時間遞減並循環
    for (let i = 0; i < this.motes.length; i++) {
      const frac = (1 - ((this.flow * 2.2 + i / this.motes.length) % 1));
      this.motes[i].position.z = frac * this.length;
      this.motes[i].rotation.x += dt * 8;
      this.motes[i].rotation.y += dt * 6;
    }
  }

  dispose(): void {
    for (const g of this.geometries) g.dispose();
    for (const m of this.materials) m.dispose();
  }
}

/**
 * 虛空裂隙:瞬移起點(implode 塌縮)與終點(explode 爆開)各開一道紫色傳送門,
 * 由直立光環 + 內核 + 向心/離心碎片組成,短暫高光後消失。
 */
export class VoidRift implements TransientFx {
  readonly object: THREE.Group;
  private life: number;
  private readonly lifetime = 0.42;
  private readonly mode: "implode" | "explode";
  private readonly ring: THREE.Mesh;
  private readonly coreMesh: THREE.Mesh;
  private readonly motes: THREE.Mesh[] = [];
  private readonly moteAng: number[] = [];
  private spin = 0;
  private readonly materials: THREE.Material[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly ringMat: THREE.MeshBasicMaterial;
  private readonly coreMat: THREE.MeshBasicMaterial;
  private readonly moteMat: THREE.MeshBasicMaterial;

  constructor(x: number, y: number, z: number, facing: number, mode: "implode" | "explode") {
    this.mode = mode;
    this.life = this.lifetime;
    this.object = new THREE.Group();
    this.object.position.set(x, y, z);
    this.object.rotation.y = facing; // 門面朝玩家行進方向

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

    // 直立光環門框
    this.ringMat = addMat(0xb070ff, 0.85);
    const ringGeo = new THREE.TorusGeometry(1.1, 0.16, 8, 32);
    this.geometries.push(ringGeo);
    this.ring = new THREE.Mesh(ringGeo, this.ringMat);
    this.object.add(this.ring);

    // 門內虛空核(暗紫圓盤)
    this.coreMat = addMat(0x6a30c0, 0.5);
    const coreGeo = new THREE.CircleGeometry(1.05, 32);
    this.geometries.push(coreGeo);
    this.coreMesh = new THREE.Mesh(coreGeo, this.coreMat);
    this.object.add(this.coreMesh);

    // 環繞碎片
    this.moteMat = addMat(0xe0c0ff, 0.95);
    const moteGeo = new THREE.OctahedronGeometry(0.16, 0);
    this.geometries.push(moteGeo);
    for (let i = 0; i < 10; i++) {
      const mesh = new THREE.Mesh(moteGeo, this.moteMat);
      this.motes.push(mesh);
      this.moteAng.push((i / 10) * Math.PI * 2);
      this.object.add(mesh);
    }

    this.object.scale.setScalar(mode === "explode" ? 0.01 : 1);
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  update(dt: number): void {
    this.life -= dt;
    this.spin += dt * 10;
    const k = Math.max(this.life, 0) / this.lifetime; // 1→0
    const t = 1 - k;

    // 塌縮:由大縮到 0;爆開:由 0 彈到滿再收
    const scale =
      this.mode === "implode" ? k : Math.min(t / 0.3, 1) * (0.6 + 0.4 * k);
    this.object.scale.setScalar(Math.max(scale, 0.01));
    this.ring.rotation.z = this.spin;

    const fade = k;
    this.ringMat.opacity = 0.85 * fade;
    this.coreMat.opacity = 0.5 * fade;
    this.moteMat.opacity = 0.95 * fade;

    // 碎片繞門盤旋,半徑隨模式向心(implode)或離心(explode)
    const radius = this.mode === "implode" ? 1.1 * k : 1.1 * (0.4 + 0.6 * t);
    for (let i = 0; i < this.motes.length; i++) {
      const a = this.moteAng[i] + this.spin * (this.mode === "implode" ? -1 : 1);
      this.motes[i].position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0);
      this.motes[i].rotation.x += dt * 8;
      this.motes[i].rotation.y += dt * 6;
    }
  }

  dispose(): void {
    for (const g of this.geometries) g.dispose();
    for (const m of this.materials) m.dispose();
  }
}
