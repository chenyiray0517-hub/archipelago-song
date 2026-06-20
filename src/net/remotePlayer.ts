// 群島之歌 — 遠端玩家 avatar(階段 4a 動作跨端 / 4c 死亡 / 5b 插值緩衝)
//
// 與本機玩家共用同一套劍盾勇者模型(heroModel.buildHero),只把長袍換成各自的醒目色 →
// 大家長一樣、只有袍色不同好區分。動畫(走路/揮劍/舉盾/騰空/受擊/倒地)由網路狀態驅動。

import * as THREE from "three";
import type { NetState } from "./net";
import { buildHero, SHIELD_HOME, SHIELD_BLOCK, type HeroRig } from "../entities/heroModel";

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

/** 依 id 給每位遠端玩家一個穩定的醒目色(當長袍色;與本機綠袍區隔) */
const PALETTE = [0x4aa3ff, 0xff8a3c, 0xb86bff, 0xffd23c, 0x3cd0a0, 0xff6b9d];
export function colorFor(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return PALETTE[Math.abs(h) % PALETTE.length];
}

export class RemotePlayer {
  readonly mesh: THREE.Group;
  private rig: HeroRig;
  private readonly tunicColor: THREE.Color;

  /** 位置插值緩衝(階段 5b):帶時間戳的快照序列,渲染時取「現在 − INTERP_DELAY」插值 */
  private buffer: Snap[] = [];
  private moving = false;
  private walkPhase = 0;
  private renderYaw = 0;

  // 動作狀態(由 act 旗標驅動)
  private act = 0;
  private swingT = 0;
  private hurtT = 0;
  /** 是否已倒下(階段 4c;房主據此略過鎖定) */
  dead = false;
  private deathLean = 0;

  constructor(id: string, initial: NetState) {
    const color = colorFor(id);
    this.tunicColor = new THREE.Color(color);
    this.rig = buildHero(color); // 與本機同模型,長袍換成此玩家的醒目色
    this.mesh = this.rig.group;

    this.renderYaw = initial.facing;
    this.moving = initial.moving;
    this.act = initial.act ?? 0;
    this.buffer.push({ t: now(), x: initial.x, y: initial.y, z: initial.z, facing: initial.facing, moving: initial.moving });
    this.mesh.position.set(initial.x, initial.y, initial.z);
    this.mesh.rotation.y = this.renderYaw;
  }

  /** 從緩衝取 renderT 時刻的內插位置/朝向/移動旗標 */
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
        return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f, z: a.z + (b.z - a.z) * f, facing: b.facing, moving: b.moving };
      }
    }
    return buf[0];
  }

  /** 收到新狀態:推進插值緩衝 + 更新動作旗標(攻擊用上升沿鎖定一段揮劍動畫) */
  setState(s: NetState): void {
    const tnow = now();
    this.buffer.push({ t: tnow, x: s.x, y: s.y, z: s.z, facing: s.facing, moving: s.moving });
    const cutoff = tnow - BUFFER_KEEP;
    while (this.buffer.length > 2 && this.buffer[0].t < cutoff) this.buffer.shift();
    const next = s.act ?? 0;
    if (next & ACT_ATTACK) this.swingT = SWING_DUR;
    if (next & ACT_HURT) this.hurtT = HURT_DUR;
    this.act = next;
    this.dead = s.dead ?? false;
  }

  /** 每幀:從插值緩衝取位置/朝向,依動作驅動勇者骨架動畫 */
  update(dt: number): void {
    const t = 1 - Math.exp(-12 * dt);
    const sample = this.sampleBuffer(now() - INTERP_DELAY);
    this.mesh.position.set(sample.x, sample.y, sample.z);
    this.moving = sample.moving;

    let delta = sample.facing - this.renderYaw;
    delta = Math.atan2(Math.sin(delta), Math.cos(delta));
    this.renderYaw += delta * t;
    this.mesh.rotation.y = this.renderYaw;

    const { legL, legR, armL, armR, shield, tunicMat } = this.rig;

    // 倒地/站起(階段 4c):死亡躺平轉灰、四肢放鬆;復活平滑站起
    this.deathLean += ((this.dead ? 1 : 0) - this.deathLean) * Math.min(1, t * 1.2);
    this.mesh.rotation.x = this.deathLean * 1.45;
    if (this.dead) {
      legL.rotation.x += (0 - legL.rotation.x) * t;
      legR.rotation.x += (0 - legR.rotation.x) * t;
      armR.rotation.x += (0 - armR.rotation.x) * t;
      shield.position.lerp(SHIELD_HOME, t);
      tunicMat.color.lerpColors(this.tunicColor, new THREE.Color(0x555a60), 0.6);
      return;
    }

    this.swingT = Math.max(0, this.swingT - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    const airborne = (this.act & ACT_AIR) !== 0;
    const blocking = (this.act & ACT_BLOCK) !== 0;

    // 腿:騰空收腿,否則走路擺腿/站立收回
    if (airborne) {
      legL.rotation.x += (0.7 - legL.rotation.x) * t;
      legR.rotation.x += (0.5 - legR.rotation.x) * t;
    } else if (this.moving) {
      this.walkPhase += dt * 9;
      const swing = Math.sin(this.walkPhase) * 0.5;
      legL.rotation.x = swing;
      legR.rotation.x = -swing;
    } else {
      legL.rotation.x *= 1 - t;
      legR.rotation.x *= 1 - t;
    }

    // 右臂(持劍):揮劍 > 騰空 > 走路擺動 > 垂放
    let armRTarget: number;
    if (this.swingT > 0) {
      const p = 1 - this.swingT / SWING_DUR; // 由舉高揮到斜前
      armRTarget = -2.4 + p * 2.9;
    } else if (airborne) {
      armRTarget = -0.5;
    } else if (this.moving) {
      armRTarget = Math.sin(this.walkPhase) * 0.3;
    } else {
      armRTarget = 0;
    }
    armR.rotation.x += (armRTarget - armR.rotation.x) * Math.min(1, t * 2.5);
    // 左臂隨步輕擺(舉盾時略收)
    const armLTarget = blocking ? -0.5 : this.moving && !airborne ? -Math.sin(this.walkPhase) * 0.3 : 0;
    armL.rotation.x += (armLTarget - armL.rotation.x) * Math.min(1, t * 2.5);

    // 盾:舉盾舉到身前,否則揹回背後(與本機玩家一致)
    shield.position.lerp(blocking ? SHIELD_BLOCK : SHIELD_HOME, Math.min(dt * 14, 1));

    // 受擊:長袍閃紅
    if (this.hurtT > 0) tunicMat.color.lerpColors(this.tunicColor, new THREE.Color(0xff4d4d), 0.6);
    else tunicMat.color.copy(this.tunicColor);
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
