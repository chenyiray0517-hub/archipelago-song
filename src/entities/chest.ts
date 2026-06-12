import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";

const COLLECT_RANGE = 4;

/**
 * 漂流寶箱(企劃書:漂流寶箱填充航海過程):
 * 隨波漂浮在開放海域,開船靠近自動開啟;被撿後由 main 計時重生到新海點。
 */
export class DriftChest {
  readonly mesh: THREE.Group;
  /** 重生倒數(被撿走後由 main 遞減) */
  respawnT = 0;

  private bobPhase = Math.random() * Math.PI * 2;

  constructor(x: number, z: number) {
    this.mesh = new THREE.Group();

    const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 0.85), toonMaterial(0x8a5a30));
    body.position.y = 0.35;
    const lid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.45, 1.2, 10, 1, false, 0, Math.PI),
      toonMaterial(0x9a6a3a),
    );
    lid.rotation.z = Math.PI / 2;
    lid.position.y = 0.72;
    const band = new THREE.Mesh(new THREE.BoxGeometry(1.26, 0.16, 0.9), toonMaterial(0xf0c040));
    band.position.y = 0.45;
    const glow = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18),
      new THREE.MeshBasicMaterial({ color: 0xffe080 }),
    );
    glow.position.y = 1.25;
    this.mesh.add(body, lid, band, glow);
    addOutlines(this.mesh);

    this.place(x, z);
  }

  get active(): boolean {
    return this.mesh.visible;
  }

  /** 放置到新海點並顯示 */
  place(x: number, z: number): void {
    this.mesh.position.set(x, 0, z);
    this.mesh.visible = true;
    this.respawnT = 0;
  }

  /** 被撿走:隱藏並開始重生倒數 */
  collect(): void {
    this.mesh.visible = false;
    this.respawnT = 60;
  }

  /**
   * 每幀更新:漂浮搖晃;回傳船是否靠近到可開啟。
   */
  update(dt: number, boatPos: THREE.Vector3, sailing: boolean): boolean {
    if (!this.active) return false;
    this.bobPhase += dt * 1.4;
    this.mesh.position.y = Math.sin(this.bobPhase) * 0.15;
    this.mesh.rotation.z = Math.sin(this.bobPhase * 0.8) * 0.08;
    this.mesh.rotation.y += dt * 0.2;
    if (!sailing) return false;
    const dx = boatPos.x - this.mesh.position.x;
    const dz = boatPos.z - this.mesh.position.z;
    return Math.hypot(dx, dz) < COLLECT_RANGE;
  }
}
