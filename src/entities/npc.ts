import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import { groundHeight } from "../world/terrain";
import { pickNpcModel, type NpcModelKey } from "../world/npcModels";

/** 玩家進入此距離顯示對話提示 */
export const TALK_RANGE = 3.5;

/**
 * 村民 NPC:站樁待機,玩家靠近時轉身面向。
 * 有指定 model 且模型載入成功 → 用 Quaternius 角色 glTF(骨骼 Idle 動畫 + 靠近揮手);
 * 否則回退程序化村民(圓柱袍+球頭+帽,呼吸起伏)。
 * 對話內容由 linesProvider 提供,可依遊戲狀態變化(例如取得寶石前後)。
 */
export class Npc {
  readonly mesh: THREE.Group;

  private idlePhase = Math.random() * Math.PI * 2;
  private readonly body: THREE.Group;

  // ── glTF 模型分支狀態(回退程序化時皆為 null/0)──
  private mixer: THREE.AnimationMixer | null = null;
  private idleAction: THREE.AnimationAction | null = null;
  private waveAction: THREE.AnimationAction | null = null;
  private waveTimer = 0;
  private wasInRange = false;

  constructor(
    readonly name: string,
    x: number,
    z: number,
    robeColor: number,
    private linesProvider: () => string[],
    /** talk = 對話;shop = 開商店;forge = 開鍛造坊 */
    readonly role: "talk" | "shop" | "forge" = "talk",
    /** 套用的角色模型;省略或載入失敗則回退程序化村民 */
    model?: NpcModelKey,
  ) {
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    const proto = model ? pickNpcModel(model) : null;
    if (proto) {
      // ── 模型分支:加入場景、建 mixer、播待機(揮手留待對話時觸發)──
      this.body.add(proto.scene);
      this.mixer = new THREE.AnimationMixer(proto.scene);
      const idle = proto.clips.find((c) => c.name === "Idle");
      const wave = proto.clips.find((c) => c.name === "Wave");
      if (idle) {
        this.idleAction = this.mixer.clipAction(idle);
        this.idleAction.play();
      }
      if (wave) {
        this.waveAction = this.mixer.clipAction(wave);
        this.waveAction.setLoop(THREE.LoopOnce, 1);
        this.waveAction.clampWhenFinished = true;
      }
    } else {
      // ── 程序化村民(原始外觀)──
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
    }

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
   * 每幀更新:推進動畫/呼吸 + 靠近時面向玩家;進入對話範圍時揮手一次。
   * @returns 玩家是否在對話範圍內
   */
  update(dt: number, playerPos: THREE.Vector3): boolean {
    const dx = playerPos.x - this.mesh.position.x;
    const dz = playerPos.z - this.mesh.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 6) this.mesh.rotation.y = Math.atan2(dx, dz);
    const inRange = dist < TALK_RANGE;

    if (this.mixer) {
      this.mixer.update(dt);
      // 剛進入對話範圍 → 揮手一次,結束後淡回待機
      if (inRange && !this.wasInRange && this.waveAction && this.idleAction) {
        this.waveAction.reset().play();
        this.waveAction.crossFadeFrom(this.idleAction, 0.2, false);
        this.waveTimer = this.waveAction.getClip().duration;
      }
      if (this.waveTimer > 0) {
        this.waveTimer -= dt;
        if (this.waveTimer <= 0 && this.idleAction && this.waveAction) {
          this.idleAction.reset().play();
          this.idleAction.crossFadeFrom(this.waveAction, 0.3, false);
        }
      }
    } else {
      // 程序化村民:呼吸起伏
      this.idlePhase += dt * 2;
      this.body.position.y = Math.sin(this.idlePhase) * 0.025;
    }

    this.wasInRange = inRange;
    return inRange;
  }
}
