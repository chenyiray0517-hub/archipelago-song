// 群島之歌 — 遠端玩家 avatar(階段 4a:動作跨端)
//
// 簡化人形(非完整骨架),但仍守慣例:toonMaterial + addOutlines + castShadow。
// 位置/朝向用插值平滑;moving 時播走路擺動。
// 階段 4a:依 NetState.act 位元旗標播揮劍/舉盾/騰空/受擊動作(加了簡易劍與盾增加辨識度)。

import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";
import type { NetState } from "./net";

/** 動作位元旗標(與 main 送出端一致):1 攻擊 / 2 舉盾 / 4 騰空 / 8 受擊 */
const ACT_ATTACK = 1;
const ACT_BLOCK = 2;
const ACT_AIR = 4;
const ACT_HURT = 8;
/** 揮劍動畫鎖定時長:即使只收到一個攻擊封包也播完整一刀 */
const SWING_DUR = 0.3;
/** 受擊閃紅鎖定時長 */
const HURT_DUR = 0.3;
/** 插值緩衝延遲(階段 5b):渲染落後最新封包約 110ms,在兩筆快照間線性插值 → 抗網路抖動/封包不均 */
const INTERP_DELAY = 0.11;
/** 緩衝保留時長(秒);超過即修剪。斷流時 sampleBuffer 以最後快照定格(不外插) */
const BUFFER_KEEP = 1.0;

/** 一筆帶時間戳的位置快照(插值緩衝用) */
interface Snap {
  t: number;
  x: number;
  y: number;
  z: number;
  facing: number;
  moving: boolean;
}

/** 單調時鐘(秒),與封包到達時間戳同一基準 */
function now(): number {
  return performance.now() / 1000;
}

/** 依 id 給每位遠端玩家一個穩定的醒目色(與本機綠袍區隔) */
const PALETTE = [0x4aa3ff, 0xff8a3c, 0xb86bff, 0xffd23c, 0x3cd0a0, 0xff6b9d];
export function colorFor(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return PALETTE[Math.abs(h) % PALETTE.length];
}

export class RemotePlayer {
  readonly mesh: THREE.Group;
  private legL: THREE.Group;
  private legR: THREE.Group;
  private armL: THREE.Group; // 持盾臂(肩為樞紐)
  private armR: THREE.Group; // 持劍臂(肩為樞紐)
  private bodyMat: THREE.MeshToonMaterial;
  private readonly baseColor: THREE.Color;

  /** 位置插值緩衝(階段 5b):帶時間戳的快照序列,渲染時取「現在 − INTERP_DELAY」插值 */
  private buffer: Snap[] = [];
  private moving = false; // 目前渲染時刻的移動旗標(驅動走路擺動)
  private walkPhase = 0;
  private renderYaw = 0;

  // 動作狀態(由 act 旗標驅動)
  private act = 0;
  private swingT = 0; // 揮劍動畫鎖定計時(>0 播揮劍)
  private hurtT = 0; // 受擊閃紅計時
  /** 是否已倒下(階段 4c;房主據此略過鎖定) */
  dead = false;
  private deathLean = 0; // 倒地姿勢插值 0(站立)→1(躺平)

  constructor(id: string, initial: NetState) {
    const color = colorFor(id);
    this.baseColor = new THREE.Color(color);
    this.mesh = new THREE.Group();

    const bodyMat = toonMaterial(color);
    this.bodyMat = bodyMat;
    const skinMat = toonMaterial(0xf2c79a);
    const steelMat = toonMaterial(0xc9d2dc);

    // 軀幹
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.8, 12), bodyMat);
    torso.position.y = 1.35;
    // 頭
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 14, 12), skinMat);
    head.position.y = 1.95;

    // 雙臂(肩為樞紐的 group,手臂網格往下偏移,方便擺動/揮劍)
    this.armL = new THREE.Group();
    this.armL.position.set(0.42, 1.62, 0);
    const armLMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.5, 4, 8), bodyMat);
    armLMesh.position.y = -0.28;
    // 盾牌(掛在左臂前方)
    const shield = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.08), steelMat);
    shield.position.set(0.04, -0.4, 0.18);
    this.armL.add(armLMesh, shield);

    this.armR = new THREE.Group();
    this.armR.position.set(-0.42, 1.62, 0);
    const armRMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.5, 4, 8), bodyMat);
    armRMesh.position.y = -0.28;
    // 劍(掛在右手,刀身往下延伸)
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.7, 0.07), steelMat);
    blade.position.y = -0.85;
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.07, 0.1), toonMaterial(0x8a6a3a));
    guard.position.y = -0.5;
    this.armR.add(armRMesh, blade, guard);

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

    this.mesh.add(torso, head, this.armL, this.armR, this.legL, this.legR);

    this.mesh.traverse((c) => {
      if (c instanceof THREE.Mesh) c.castShadow = true;
    });
    addOutlines(this.mesh);

    this.renderYaw = initial.facing;
    this.moving = initial.moving;
    this.act = initial.act ?? 0;
    this.buffer.push({ t: now(), x: initial.x, y: initial.y, z: initial.z, facing: initial.facing, moving: initial.moving });
    this.mesh.position.set(initial.x, initial.y, initial.z);
    this.mesh.rotation.y = this.renderYaw;
  }

  /**
   * 從緩衝取 renderT 時刻的內插位置/朝向/移動旗標。
   * renderT 落在兩筆快照之間 → 線性插值;比最舊還舊 → 取最舊;比最新還新(斷流)→ 定格最新(不外插)。
   */
  private sampleBuffer(renderT: number): { x: number; y: number; z: number; facing: number; moving: boolean } {
    const buf = this.buffer;
    const last = buf[buf.length - 1];
    if (buf.length === 1 || renderT >= last.t) return last;
    if (renderT <= buf[0].t) return buf[0];
    for (let i = buf.length - 2; i >= 0; i--) {
      const a = buf[i];
      if (a.t <= renderT) {
        const b = buf[i + 1];
        const span = b.t - a.t;
        const f = span > 1e-6 ? (renderT - a.t) / span : 0;
        return {
          x: a.x + (b.x - a.x) * f,
          y: a.y + (b.y - a.y) * f,
          z: a.z + (b.z - a.z) * f,
          facing: b.facing,
          moving: b.moving,
        };
      }
    }
    return buf[0];
  }

  /** 收到新狀態:推進插值緩衝 + 更新動作旗標(攻擊用上升沿鎖定一段揮劍動畫) */
  setState(s: NetState): void {
    const tnow = now();
    this.buffer.push({ t: tnow, x: s.x, y: s.y, z: s.z, facing: s.facing, moving: s.moving });
    // 修剪過舊的快照(至少保留 2 筆供插值)
    const cutoff = tnow - BUFFER_KEEP;
    while (this.buffer.length > 2 && this.buffer[0].t < cutoff) this.buffer.shift();
    const next = s.act ?? 0;
    // 攻擊/受擊:封包稀疏,收到位元就鎖定一段動畫(避免只閃一格);動作旗標即時不緩衝
    if (next & ACT_ATTACK) this.swingT = SWING_DUR;
    if (next & ACT_HURT) this.hurtT = HURT_DUR;
    this.act = next;
    this.dead = s.dead ?? false;
  }

  /** 每幀:從插值緩衝取「現在 − INTERP_DELAY」的位置/朝向,依動作播對應姿勢 */
  update(dt: number): void {
    const t = 1 - Math.exp(-12 * dt);
    // ── 插值緩衝(階段 5b):渲染落後最新封包 INTERP_DELAY,在前後兩筆快照間線性插值 ──
    const sample = this.sampleBuffer(now() - INTERP_DELAY);
    this.mesh.position.set(sample.x, sample.y, sample.z);
    this.moving = sample.moving;

    // 朝向插值(處理 ±π 環繞;朝向變化較慢,仍用平滑逼近樣本朝向)
    let delta = sample.facing - this.renderYaw;
    delta = Math.atan2(Math.sin(delta), Math.cos(delta));
    this.renderYaw += delta * t;
    this.mesh.rotation.y = this.renderYaw;

    // 倒地/站起(階段 4c):死亡躺平轉灰、不播動作;復活平滑站起
    this.deathLean += ((this.dead ? 1 : 0) - this.deathLean) * Math.min(1, t * 1.2);
    this.mesh.rotation.x = this.deathLean * 1.45;
    if (this.dead) {
      this.legL.rotation.x += (0 - this.legL.rotation.x) * t;
      this.legR.rotation.x += (0 - this.legR.rotation.x) * t;
      this.armL.rotation.x += (0 - this.armL.rotation.x) * t;
      this.armR.rotation.x += (0 - this.armR.rotation.x) * t;
      this.bodyMat.color.lerpColors(this.baseColor, new THREE.Color(0x555a60), 0.6);
      return;
    }

    this.swingT = Math.max(0, this.swingT - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    const airborne = (this.act & ACT_AIR) !== 0;
    const blocking = (this.act & ACT_BLOCK) !== 0;

    // 腿:騰空收腿,否則走路擺腿/站立收回
    if (airborne) {
      this.legL.rotation.x += (0.7 - this.legL.rotation.x) * t;
      this.legR.rotation.x += (0.5 - this.legR.rotation.x) * t;
    } else if (this.moving) {
      this.walkPhase += dt * 9;
      const swing = Math.sin(this.walkPhase) * 0.5;
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
    } else {
      this.legL.rotation.x *= 1 - t;
      this.legR.rotation.x *= 1 - t;
    }

    // 右臂(劍):攻擊 > 騰空 > 走路擺動
    let armRTarget: number;
    if (this.swingT > 0) {
      // 由舉高(-2.4)揮到斜前(0.5)
      const p = 1 - this.swingT / SWING_DUR;
      armRTarget = -2.4 + p * 2.9;
    } else if (airborne) {
      armRTarget = -0.5;
    } else if (this.moving) {
      armRTarget = Math.sin(this.walkPhase) * 0.35;
    } else {
      armRTarget = 0;
    }
    this.armR.rotation.x += (armRTarget - this.armR.rotation.x) * Math.min(1, t * 2.5);

    // 左臂(盾):舉盾抬到胸前,否則隨步擺動
    const armLTarget = blocking ? -1.4 : this.moving && !airborne ? -Math.sin(this.walkPhase) * 0.35 : airborne ? -0.4 : 0;
    this.armL.rotation.x += (armLTarget - this.armL.rotation.x) * Math.min(1, t * 2.5);

    // 受擊:軀幹/四肢閃紅
    if (this.hurtT > 0) this.bodyMat.color.lerpColors(this.baseColor, new THREE.Color(0xff4d4d), 0.6);
    else this.bodyMat.color.copy(this.baseColor);
  }

  /** 測試掛鉤:目前收到的動作位元旗標(1 攻擊/2 舉盾/4 騰空/8 受擊) */
  get actBits(): number {
    return this.act;
  }

  /** 測試掛鉤:是否正在播揮劍動畫 */
  get swinging(): boolean {
    return this.swingT > 0;
  }

  /** 從場景移除並釋放幾何體 */
  dispose(): void {
    this.mesh.parent?.remove(this.mesh);
    this.mesh.traverse((c) => {
      if (c instanceof THREE.Mesh) c.geometry.dispose();
    });
  }
}
