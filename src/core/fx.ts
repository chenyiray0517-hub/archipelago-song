import * as THREE from "three";

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
}

const PARTICLE_GRAVITY = 22;
const MAX_PARTICLES = 80;

/**
 * 打擊感效果管理:hit-stop 頓幀、鏡頭震動、粒子爆裂。
 */
export class Fx {
  private hitstopT = 0;
  private shakeT = 0;
  private shakeDuration = 1;
  private shakeIntensity = 0;
  private particles: Particle[] = [];

  constructor(private scene: THREE.Scene) {}

  /** 世界是否處於頓幀中(主迴圈據此把 worldDt 歸零) */
  get frozen(): boolean {
    return this.hitstopT > 0;
  }

  /** 命中頓幀:短暫凍結世界更新,強化打擊重量感 */
  hitstop(seconds: number): void {
    this.hitstopT = Math.max(this.hitstopT, seconds);
  }

  /** 鏡頭震動 */
  shake(intensity: number, duration: number): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeT = Math.max(this.shakeT, duration);
    this.shakeDuration = Math.max(duration, 0.01);
  }

  /** 在指定位置爆出粒子(命中火花、死亡爆裂) */
  burst(position: THREE.Vector3, color: number, count = 10, speed = 7): void {
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= MAX_PARTICLES) break;
      const size = 0.07 + Math.random() * 0.1;
      const mesh = new THREE.Mesh(
        new THREE.TetrahedronGeometry(size),
        new THREE.MeshBasicMaterial({ color }),
      );
      mesh.position.copy(position);
      const dir = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() * 0.8 + 0.3,
        Math.random() - 0.5,
      ).normalize();
      const maxLife = 0.35 + Math.random() * 0.3;
      this.particles.push({
        mesh,
        velocity: dir.multiplyScalar(speed * (0.5 + Math.random() * 0.7)),
        life: maxLife,
        maxLife,
      });
      this.scene.add(mesh);
    }
  }

  /**
   * 每幀更新(用真實 dt,粒子與震動不受頓幀影響)。
   * @returns 本幀鏡頭震動偏移量
   */
  update(dt: number): THREE.Vector3 {
    this.hitstopT = Math.max(0, this.hitstopT - dt);

    this.particles = this.particles.filter((p) => {
      p.life -= dt;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        (p.mesh.material as THREE.Material).dispose();
        return false;
      }
      p.velocity.y -= PARTICLE_GRAVITY * dt;
      p.mesh.position.addScaledVector(p.velocity, dt);
      p.mesh.rotation.x += dt * 8;
      p.mesh.rotation.y += dt * 6;
      const s = p.life / p.maxLife;
      p.mesh.scale.setScalar(s);
      return true;
    });

    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const falloff = Math.max(this.shakeT / this.shakeDuration, 0);
      const amp = this.shakeIntensity * falloff;
      if (this.shakeT <= 0) this.shakeIntensity = 0;
      return new THREE.Vector3(
        (Math.random() - 0.5) * amp,
        (Math.random() - 0.5) * amp,
        (Math.random() - 0.5) * amp,
      );
    }
    return new THREE.Vector3();
  }
}
