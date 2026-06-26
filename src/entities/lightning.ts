import * as THREE from "three";

/**
 * 連鎖閃電視覺:多層輝光折線連接玩家與各命中點,沿途隨機分叉電弧,
 * 命中節點長出輝光球,整體以隨機明滅(crackle)後淡出。
 * 純特效——傷害/麻痺/掉落都在 main 結算,這裡只負責畫。
 */
export class LightningBolt {
  readonly group: THREE.Group;

  private life: number;
  private readonly lifetime = 0.34;
  private readonly coreMat: THREE.LineBasicMaterial;
  private readonly glowMat: THREE.LineBasicMaterial;
  private readonly branchMat: THREE.LineBasicMaterial;
  private readonly nodeMat: THREE.MeshBasicMaterial;
  private readonly nodes: THREE.Mesh[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];

  constructor(points: THREE.Vector3[]) {
    this.life = this.lifetime;
    this.group = new THREE.Group();

    // 三層材質疊出有體積的電弧:外圈藍輝光 + 銳利白芯 + 分叉電弧
    this.glowMat = new THREE.LineBasicMaterial({
      color: 0x4aa8ff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.coreMat = new THREE.LineBasicMaterial({
      color: 0xeaf6ff,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.branchMat = new THREE.LineBasicMaterial({
      color: 0x86ccff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.nodeMat = new THREE.MeshBasicMaterial({
      color: 0xcdeaff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      // 輝光層(大抖動、疊兩道加亮)+ 核心層(小抖動、銳利白芯)
      const glowPath = jagged(a, b, 1.6);
      const corePath = jagged(a, b, 0.9);
      this.addLine(glowPath, this.glowMat);
      this.addLine(glowPath, this.glowMat);
      this.addLine(corePath, this.coreMat);
      // 隨機分叉:從核心折線中段岔出短電弧(死路,模擬電弧樹枝)
      for (const branch of forks(corePath)) {
        this.addLine(branch, this.branchMat);
      }
    }

    // 命中節點輝光球(起點 = 玩家,較大)
    for (let i = 0; i < points.length; i++) {
      const size = i === 0 ? 0.45 : 0.32;
      const geo = new THREE.IcosahedronGeometry(size, 0);
      const node = new THREE.Mesh(geo, this.nodeMat);
      node.position.copy(points[i]);
      this.geometries.push(geo);
      this.nodes.push(node);
      this.group.add(node);
    }
  }

  private addLine(pts: THREE.Vector3[], mat: THREE.LineBasicMaterial): void {
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    this.geometries.push(geo);
    this.group.add(new THREE.Line(geo, mat));
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  update(dt: number): void {
    this.life -= dt;
    const k = Math.max(this.life / this.lifetime, 0);
    // crackle:前段隨機明滅電閃,尾段線性淡出
    const flick = k > 0.32 ? 0.5 + Math.random() * 0.5 : k / 0.32;
    this.coreMat.opacity = flick;
    this.glowMat.opacity = 0.45 * flick;
    this.branchMat.opacity = 0.6 * flick * (0.4 + Math.random() * 0.6);
    this.nodeMat.opacity = 0.9 * flick;
    const nodeScale = 0.6 + 0.4 * flick;
    for (const node of this.nodes) node.scale.setScalar(nodeScale);
  }

  dispose(): void {
    for (const g of this.geometries) g.dispose();
    this.coreMat.dispose();
    this.glowMat.dispose();
    this.branchMat.dispose();
    this.nodeMat.dispose();
  }
}

/** 兩點之間生成鋸齒折線,中段沿水平垂直方向隨機抖動(振幅 amp),模擬閃電 */
function jagged(a: THREE.Vector3, b: THREE.Vector3, amp: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const steps = Math.max(5, Math.min(14, Math.round(len * 1.6)));
  const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
  for (let i = 0; i <= steps; i++) {
    const p = new THREE.Vector3().lerpVectors(a, b, i / steps);
    if (i > 0 && i < steps) {
      p.addScaledVector(perp, (Math.random() - 0.5) * amp);
      p.y += (Math.random() - 0.5) * amp * 0.7;
    }
    pts.push(p);
  }
  return pts;
}

/** 從核心折線中段機率性岔出短電弧(末端逐漸消散的死路),回傳各分叉折線 */
function forks(path: THREE.Vector3[]): THREE.Vector3[][] {
  const branches: THREE.Vector3[][] = [];
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 2; i < path.length - 1; i++) {
    if (Math.random() > 0.35) continue;
    const origin = path[i];
    const dir = new THREE.Vector3().subVectors(origin, path[i - 1]).normalize();
    dir.applyAxisAngle(up, (Math.random() - 0.5) * 1.8);
    dir.y += (Math.random() - 0.5) * 0.8;
    const reach = 0.8 + Math.random() * 1.4;
    const end = origin.clone().addScaledVector(dir.normalize(), reach);
    branches.push(jagged(origin, end, 0.5));
  }
  return branches;
}
