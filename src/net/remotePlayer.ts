// 群島之歌 — 遠端玩家 avatar(第 1 階段:看得到彼此)
//
// 簡化人形(非完整骨架),但仍守慣例:toonMaterial + addOutlines + castShadow。
// 位置/朝向用插值平滑,避免網路封包間隔造成跳動;moving 時播簡單走路擺動。
// 之後階段再對齊 player.ts 的完整動作(攻擊/跳/格擋)。

import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import type { NetState } from "./net";

/** 依 id 給每位遠端玩家一個穩定的醒目色(與本機綠袍區隔) */
const PALETTE = [0x4aa3ff, 0xff8a3c, 0xb86bff, 0xffd23c, 0x3cd0a0, 0xff6b9d];
function colorFor(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return PALETTE[Math.abs(h) % PALETTE.length];
}

export class RemotePlayer {
  readonly mesh: THREE.Group;
  private legL: THREE.Group;
  private legR: THREE.Group;

  /** 插值目標(收到封包時更新,每幀往目標逼近) */
  private targetPos = new THREE.Vector3();
  private targetFacing = 0;
  private moving = false;
  private walkPhase = 0;
  private renderYaw = 0;

  constructor(id: string, initial: NetState) {
    const color = colorFor(id);
    this.mesh = new THREE.Group();

    const bodyMat = toonMaterial(color);
    const skinMat = toonMaterial(0xf2c79a);

    // 軀幹
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.8, 12), bodyMat);
    torso.position.y = 1.35;
    // 頭
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 14, 12), skinMat);
    head.position.y = 1.95;
    // 雙臂
    const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.5, 4, 8), bodyMat);
    armL.position.set(0.42, 1.4, 0);
    const armR = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.5, 4, 8), bodyMat);
    armR.position.set(-0.42, 1.4, 0);
    // 雙腿(放進可旋轉 group 做走路擺動)
    this.legL = new THREE.Group();
    this.legL.position.set(0.16, 0.9, 0);
    const legLMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.7, 4, 8), bodyMat);
    legLMesh.position.y = -0.4;
    this.legL.add(legLMesh);
    this.legR = new THREE.Group();
    this.legR.position.set(-0.16, 0.9, 0);
    const legRMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.7, 4, 8), bodyMat);
    legRMesh.position.y = -0.4;
    this.legR.add(legRMesh);

    this.mesh.add(torso, head, armL, armR, this.legL, this.legR);

    this.mesh.traverse((c) => {
      if (c instanceof THREE.Mesh) c.castShadow = true;
    });
    addOutlines(this.mesh);

    this.targetPos.set(initial.x, initial.y, initial.z);
    this.targetFacing = initial.facing;
    this.renderYaw = initial.facing;
    this.moving = initial.moving;
    this.mesh.position.copy(this.targetPos);
    this.mesh.rotation.y = this.renderYaw;
  }

  /** 收到新狀態:更新插值目標 */
  setState(s: NetState): void {
    this.targetPos.set(s.x, s.y, s.z);
    this.targetFacing = s.facing;
    this.moving = s.moving;
  }

  /** 每幀:位置/朝向逼近目標,走路擺腿 */
  update(dt: number): void {
    // 位置插值(指數逼近,與幀率無關)
    const t = 1 - Math.exp(-12 * dt);
    this.mesh.position.lerp(this.targetPos, t);

    // 朝向插值(處理 ±π 環繞)
    let delta = this.targetFacing - this.renderYaw;
    delta = Math.atan2(Math.sin(delta), Math.cos(delta));
    this.renderYaw += delta * t;
    this.mesh.rotation.y = this.renderYaw;

    // 走路擺腿
    if (this.moving) {
      this.walkPhase += dt * 9;
      const swing = Math.sin(this.walkPhase) * 0.5;
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
    } else {
      this.legL.rotation.x *= 1 - t;
      this.legR.rotation.x *= 1 - t;
    }
  }

  /** 從場景移除並釋放幾何體 */
  dispose(): void {
    this.mesh.parent?.remove(this.mesh);
    this.mesh.traverse((c) => {
      if (c instanceof THREE.Mesh) c.geometry.dispose();
    });
  }
}
