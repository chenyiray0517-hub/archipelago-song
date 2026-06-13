/** 五種可分配能力值(對應企劃書 3.3) */
export interface Attributes {
  /** 生命:最大生命值 +10/點 */
  hp: number;
  /** 力量:物理攻擊力 +2/點 */
  str: number;
  /** 靈能:寶石技能威力 +2、靈力上限 +5/點 */
  spirit: number;
  /** 敏捷:移動與攻擊速度 +1%/點 */
  agi: number;
  /** 體魄:防禦力 +2/點 */
  vit: number;
}

export type AttributeKey = keyof Attributes;

const BASE_HP = 100;
const BASE_MP = 30;
const BASE_ATK = 10;
const POINTS_PER_LEVEL = 3;

/**
 * 玩家等級與能力值。EXP 只透過「使用經驗結晶」注入(企劃書核心特色)。
 */
export class PlayerStats {
  level = 1;
  exp = 0;
  points = 0;
  /** 武器強化等級(鍛造大師升級,每級攻擊 +3) */
  weaponLevel = 0;
  /** 裝備加成總和(由 main 在裝備變動時重算) */
  equip = { atk: 0, def: 0, hp: 0, mp: 0, agi: 0 };
  attrs: Attributes = { hp: 0, str: 0, spirit: 0, agi: 0, vit: 0 };

  get maxHP(): number {
    return BASE_HP + this.attrs.hp * 10 + this.equip.hp;
  }

  get maxMP(): number {
    return BASE_MP + this.attrs.spirit * 5 + this.equip.mp;
  }

  get atk(): number {
    return BASE_ATK + this.attrs.str * 2 + this.weaponLevel * 3 + this.equip.atk;
  }

  get def(): number {
    return this.attrs.vit * 2 + this.equip.def;
  }

  /** 敏捷加成倍率(1.0 = 無加成) */
  get speedMultiplier(): number {
    return 1 + (this.attrs.agi + this.equip.agi) * 0.01;
  }

  /** 升到下一級所需 EXP */
  expToNext(): number {
    return Math.round(65 * Math.pow(this.level, 1.35));
  }

  /**
   * 注入 EXP(由經驗結晶使用觸發),自動處理連續升級。
   * @returns 本次升了幾級
   */
  addExp(amount: number): number {
    this.exp += amount;
    let levelsGained = 0;
    while (this.exp >= this.expToNext()) {
      this.exp -= this.expToNext();
      this.level++;
      this.points += POINTS_PER_LEVEL;
      levelsGained++;
    }
    return levelsGained;
  }

  /**
   * 分配 1 點能力點數。
   * @returns 是否成功(點數不足回傳 false)
   */
  allocate(key: AttributeKey): boolean {
    if (this.points <= 0) return false;
    this.points--;
    this.attrs[key]++;
    return true;
  }
}

/** 經驗結晶種類與其 EXP 值(企劃書 3.3:小/中/大 = 10/50/200) */
export const CRYSTAL_EXP = { small: 10, medium: 50, large: 200 } as const;

export type CrystalSize = keyof typeof CRYSTAL_EXP;

/** 玩家背包:經驗結晶、貝拉幣與藥水 */
export class Inventory {
  coins = 0;
  potions = 0;
  crystals: Record<CrystalSize, number> = { small: 0, medium: 0, large: 0 };
  /** 第一海寶石(重要道具,使用後傳送回第一海・曙光嶼) */
  firstSeaGem = false;
  /** 第二海寶石(重要道具,使用後傳送至第二海・港口鎮) */
  secondSeaGem = false;

  /**
   * 使用指定數量的經驗結晶,回傳注入的 EXP 總量。
   */
  useCrystals(size: CrystalSize, count: number): number {
    const used = Math.min(count, this.crystals[size]);
    this.crystals[size] -= used;
    return used * CRYSTAL_EXP[size];
  }
}
