/** 焰心石技能靈力消耗 */
export const FLAME_MP_COST = 10;
/** 地殼石地震波靈力消耗 */
export const QUAKE_MP_COST = 15;
/** 地震波作用半徑 */
export const QUAKE_RANGE = 6;
/** 霜語晶冰箭靈力消耗 */
export const ICE_MP_COST = 12;
/** 冰面渡水每秒靈力消耗 */
export const FROST_WALK_MP_DRAIN = 4;
/** 虛空石瞬移靈力消耗 */
export const BLINK_MP_COST = 8;
/** 瞬移距離 */
export const BLINK_DIST = 8;
/** 溶岩石熔岩噴發靈力消耗 */
export const LAVA_MP_COST = 14;
/** 熔岩噴發命中後的灼燒持續秒數 */
export const LAVA_BURN_DURATION = 3;
/** 碧波石碧波震盪靈力消耗(第二海・珊瑚礁島) */
export const AQUA_MP_COST = 16;
/** 碧波震盪基礎作用半徑(自身周圍 AoE;升階 +1/級) */
export const AQUA_RANGE = 7;
/** 翠生石生命汲取靈力消耗(第二海・靈脈島) */
export const LIFE_MP_COST = 14;

/** 可升階的寶石(潮汐石為被動解鎖,不升階) */
export type UpgradableGem = "flame" | "wind" | "earth" | "frost" | "void" | "lava" | "aqua" | "life";

/** 升階費用:1→2 與 2→3(貝拉幣) */
export const GEM_UPGRADE_COSTS = [400, 900];
export const GEM_MAX_LEVEL = 3;

/** 升階傷害倍率:lv1 ×1、lv2 ×1.5、lv3 ×2 */
function levelScale(level: number): number {
  return 1 + 0.5 * (level - 1);
}

/**
 * 火焰斬傷害(企劃書 3.3:靈能每點 +2 寶石技能威力;升階強化)。
 */
export function flameDamage(spirit: number, level = 1): number {
  return Math.round((18 + spirit * 2) * levelScale(level));
}

/** 地震波傷害 */
export function quakeDamage(spirit: number, level = 1): number {
  return Math.round((25 + spirit * 2) * levelScale(level));
}

/** 地震波半徑(升階 +1/級) */
export function quakeRange(level = 1): number {
  return QUAKE_RANGE + (level - 1);
}

/** 冰箭傷害 */
export function iceDamage(spirit: number, level = 1): number {
  return Math.round((20 + spirit * 2) * levelScale(level));
}

/** 冰凍秒數(2.5/3.5/4.5) */
export function freezeDuration(level = 1): number {
  return 1.5 + level;
}

/** 瞬移距離(8/11/14) */
export function blinkDist(level = 1): number {
  return BLINK_DIST + 3 * (level - 1);
}

/** 熔岩噴發命中傷害(岩漿衝擊波本體) */
export function lavaDamage(spirit: number, level = 1): number {
  return Math.round((22 + spirit * 2) * levelScale(level));
}

/** 灼燒每秒傷害(命中後持續 LAVA_BURN_DURATION 秒;8/12/16) */
export function lavaBurnDps(level = 1): number {
  return 8 + 4 * (level - 1);
}

/** 碧波震盪傷害(自身周圍 AoE) */
export function aquaDamage(spirit: number, level = 1): number {
  return Math.round((20 + spirit * 2) * levelScale(level));
}

/** 碧波震盪凍結秒數(2/2.7/3.4) */
export function aquaFreeze(level = 1): number {
  return 2 + 0.7 * (level - 1);
}

/** 碧波震盪半徑(升階 +1/級) */
export function aquaRange(level = 1): number {
  return AQUA_RANGE + (level - 1);
}

/** 生命汲取傷害(前方衝擊波) */
export function lifeDamage(spirit: number, level = 1): number {
  return Math.round((18 + spirit * 2) * levelScale(level));
}

/** 生命汲取吸血比率(回復造成傷害的比例;0.4/0.5/0.6) */
export function lifeLeech(level = 1): number {
  return 0.4 + 0.1 * (level - 1);
}

/**
 * 靈紋寶石持有狀態。
 * 之後擴充為寶石盤(2 格起,可擴 4 格)時再泛化。
 */
export class GemBag {
  /** 焰心石:E 火焰斬 */
  flameOwned = false;
  /** 風語石:二段跳、滑翔 */
  windOwned = false;
  /** 地殼石:C 地震波 */
  earthOwned = false;
  /** 霜語晶:V 冰箭、冰面渡水 */
  frostOwned = false;
  /** 潮汐石:水中呼吸(潛入沉沒古城) */
  tideOwned = false;
  /** 虛空石:X 短距離瞬移 */
  voidOwned = false;
  /** 溶岩石:G 熔岩噴發(向前噴岩漿 + 灼燒 DoT) */
  lavaOwned = false;
  /** 碧波石:B 碧波震盪(自身周圍 AoE 傷害 + 凍結) */
  aquaOwned = false;
  /** 翠生石:H 生命汲取(前方衝擊波傷害 + 吸血回血) */
  lifeOwned = false;
  /** 各寶石升階等級(1–3;持有後才有意義) */
  levels: Record<UpgradableGem, number> = { flame: 1, wind: 1, earth: 1, frost: 1, void: 1, lava: 1, aqua: 1, life: 1 };
}
