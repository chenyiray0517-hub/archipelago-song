import * as THREE from "three";
import { groundHeight, type IslandDef } from "../world/terrain";
import type { Input } from "./input";

/**
 * 島嶼上帝視角:從地圖點選島嶼後啟用,鏡頭飛到該島上空自由觀察。
 * 只負責計算「想要的鏡頭位置與注視點」,實際鏡頭平滑移動由 main 的鏡頭段處理。
 * 啟用期間單機全世界暫停;多人世界照跑(共享世界),只凍結本機玩家。
 */
export class IslandView {
  active = false;
  island: IslandDef | null = null;
  private yaw = Math.PI;
  private pitch = 0.85;
  private dist = 100;
  private center = new THREE.Vector3();

  /** 注視點(供測試驗證 WASD 平移) */
  get target(): THREE.Vector3 {
    return this.center;
  }

  enter(isl: IslandDef): void {
    this.active = true;
    this.island = isl;
    this.yaw = Math.PI; // 與跟隨鏡頭預設同向(從南方俯瞰)
    this.pitch = 0.85;
    this.dist = isl.r * 2.4;
    this.center.set(isl.x, 4, isl.z);
  }

  exit(): void {
    this.active = false;
    this.island = null;
  }

  /** 每幀:滑鼠拖曳環繞、滾輪縮放、WASD 平移注視點(限制在島嶼外圍一圈內) */
  update(dt: number, input: Input): { pos: THREE.Vector3; target: THREE.Vector3 } {
    const isl = this.island!;
    if (input.rightDown || input.leftDown) {
      this.yaw -= input.dx * 0.005;
      this.pitch = THREE.MathUtils.clamp(this.pitch + input.dy * 0.004, 0.15, 1.45);
    }
    this.dist = THREE.MathUtils.clamp(this.dist + input.wheel * 0.05, isl.r * 0.6, isl.r * 4);

    const panSpeed = isl.r * 0.6 * dt;
    const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
    if (input.isDown("KeyW")) this.center.addScaledVector(fwd, panSpeed);
    if (input.isDown("KeyS")) this.center.addScaledVector(fwd, -panSpeed);
    if (input.isDown("KeyA")) this.center.addScaledVector(right, -panSpeed);
    if (input.isDown("KeyD")) this.center.addScaledVector(right, panSpeed);
    const offX = this.center.x - isl.x;
    const offZ = this.center.z - isl.z;
    const off = Math.hypot(offX, offZ);
    const maxOff = isl.r * 1.3;
    if (off > maxOff) {
      this.center.x = isl.x + (offX / off) * maxOff;
      this.center.z = isl.z + (offZ / off) * maxOff;
    }

    const pos = new THREE.Vector3(
      this.center.x + Math.sin(this.yaw) * Math.cos(this.pitch) * this.dist,
      this.center.y + Math.sin(this.pitch) * this.dist,
      this.center.z + Math.cos(this.yaw) * Math.cos(this.pitch) * this.dist,
    );
    pos.y = Math.max(pos.y, groundHeight(pos.x, pos.z) + 2);
    return { pos, target: this.center };
  }
}
