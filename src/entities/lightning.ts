import * as THREE from "three";

/**
 * 連鎖閃電視覺:折線連接玩家與各命中點,短暫顯示後淡出。
 * 純特效——傷害/麻痺/掉落都在 main 結算,這裡只負責畫。
 */
export class LightningBolt {
  readonly group: THREE.Group;

  private life: number;
  private readonly lifetime = 0.28;
  private readonly material: THREE.LineBasicMaterial;

  constructor(points: THREE.Vector3[]) {
    this.life = this.lifetime;
    this.group = new THREE.Group();
    this.material = new THREE.LineBasicMaterial({
      color: 0xbfe8ff,
      transparent: true,
      opacity: 0.95,
    });
    for (let i = 0; i < points.length - 1; i++) {
      const geo = new THREE.BufferGeometry().setFromPoints(jagged(points[i], points[i + 1]));
      this.group.add(new THREE.Line(geo, this.material));
    }
  }

  get expired(): boolean {
    return this.life <= 0;
  }

  update(dt: number): void {
    this.life -= dt;
    this.material.opacity = 0.95 * Math.max(this.life / this.lifetime, 0);
  }

  dispose(): void {
    this.group.traverse((o) => {
      if (o instanceof THREE.Line) o.geometry.dispose();
    });
    this.material.dispose();
  }
}

/** 兩點之間生成鋸齒折線,中段水平垂直方向隨機抖動,模擬閃電 */
function jagged(a: THREE.Vector3, b: THREE.Vector3): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const steps = 6;
  const dir = new THREE.Vector3().subVectors(b, a);
  const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
  for (let i = 0; i <= steps; i++) {
    const p = new THREE.Vector3().lerpVectors(a, b, i / steps);
    if (i > 0 && i < steps) {
      p.addScaledVector(perp, (Math.random() - 0.5) * 1.2);
      p.y += (Math.random() - 0.5) * 0.8;
    }
    pts.push(p);
  }
  return pts;
}
