import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import { groundHeight } from "../world/terrain";

/** 玩家進入此距離顯示對話提示 */
export const TALK_RANGE = 3.5;

/**
 * 村民 NPC:站樁待機(呼吸起伏),玩家靠近時轉身面向。
 * 對話內容由 linesProvider 提供,可依遊戲狀態變化(例如取得寶石前後)。
 */
export class Npc {
  readonly mesh: THREE.Group;

  private idlePhase = Math.random() * Math.PI * 2;
  private readonly body: THREE.Group;

  constructor(
    readonly name: string,
    x: number,
    z: number,
    robeColor: number,
    private linesProvider: () => string[],
    /** talk = 對話;shop = 開商店;forge = 開鍛造坊 */
    readonly role: "talk" | "shop" | "forge" = "talk",
  ) {
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    const robe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.52, 1.5, 12),
      toonMaterial(robeColor),
    );
    robe.position.y = 0.78;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 14, 12), toonMaterial(0xf2c9a0));
    head.position.y = 1.85;
    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.62, 0.3, 14), toonMaterial(0xd8b860));
    hat.position.y = 2.12;
    this.body.add(robe, head, hat);

    addOutlines(this.body);
    this.body.traverse((child) => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });

    this.mesh.position.set(x, groundHeight(x, z), z);
  }

  /** 取得當前狀態的對話內容 */
  getLines(): string[] {
    return this.linesProvider();
  }

  /**
   * 每幀更新:待機呼吸 + 靠近時面向玩家。
   * @returns 玩家是否在對話範圍內
   */
  update(dt: number, playerPos: THREE.Vector3): boolean {
    this.idlePhase += dt * 2;
    this.body.position.y = Math.sin(this.idlePhase) * 0.025;

    const dx = playerPos.x - this.mesh.position.x;
    const dz = playerPos.z - this.mesh.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 6) this.mesh.rotation.y = Math.atan2(dx, dz);
    return dist < TALK_RANGE;
  }
}
