/**
 * 靈樹果實:寶石的姊妹系統。寶石是群島刻入的靈紋之力,果實是世界樹結出的原初之力。
 * 兩顆果實皆為「永久解鎖、地圖採集、綁技能鍵」的主動戰鬥技,與 GemBag 平行。
 */

/** 雷光果連鎖閃電靈力消耗 */
export const THUNDER_MP_COST = 16;
/** 引力果引力漩渦靈力消耗 */
export const GRAVITY_MP_COST = 18;

/** 連鎖閃電:主目標索敵範圍 */
export const THUNDER_RANGE = 16;
/** 連鎖閃電:每次跳躍的搜尋範圍 */
export const THUNDER_CHAIN_RANGE = 9;
/** 連鎖閃電:每跳傷害衰減倍率 */
export const THUNDER_CHAIN_FALLOFF = 0.7;

/** 引力漩渦:生成於玩家面前的距離 */
export const VORTEX_FORWARD = 8;
/** 引力漩渦:每次傷害結算間隔(秒) */
export const VORTEX_TICK = 0.3;

/** 可升階的果實 */
export type UpgradableFruit = "thunder" | "gravity";

/** 升階費用:1→2 與 2→3(貝拉幣;比寶石貴一階,定位後期) */
export const FRUIT_UPGRADE_COSTS = [500, 1100];
export const FRUIT_MAX_LEVEL = 3;

/** 升階傷害倍率:lv1 ×1、lv2 ×1.5、lv3 ×2 */
function levelScale(level: number): number {
  return 1 + 0.5 * (level - 1);
}

/** 連鎖閃電主目標傷害(後續每跳 ×THUNDER_CHAIN_FALLOFF 遞減) */
export function thunderDamage(spirit: number, level = 1): number {
  return Math.round((20 + spirit * 2) * levelScale(level));
}

/** 連鎖跳躍目標數(含主目標,3/4/5) */
export function thunderChainCount(level = 1): number {
  return 2 + level;
}

/** 命中麻痺秒數(0.6/0.9/1.2) */
export function thunderStunDuration(level = 1): number {
  return 0.3 + 0.3 * level;
}

/** 引力漩渦每次傷害結算的傷害值 */
export function vortexDamage(spirit: number, level = 1): number {
  return Math.round((10 + spirit) * levelScale(level));
}

/** 引力漩渦半徑(6/7/8) */
export function vortexRadius(level = 1): number {
  return 5 + level;
}

/** 引力漩渦持續秒數(1.5/2/2.5) */
export function vortexDuration(level = 1): number {
  return 1 + 0.5 * level;
}

/** 靈樹果實持有狀態(與 GemBag 平行) */
export class FruitBag {
  /** 雷光果:Z 連鎖閃電(索敵 + 跳躍 + 麻痺) */
  thunderOwned = false;
  /** 引力果:T 引力漩渦(吸引聚怪 + 持續傷害) */
  gravityOwned = false;
  /** 各果實升階等級(1–3;持有後才有意義) */
  levels: Record<UpgradableFruit, number> = { thunder: 1, gravity: 1 };
}
