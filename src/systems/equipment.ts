/** 裝備欄位:防具三件套 + 飾品兩格(企劃書 5) */
export type EquipSlot = "head" | "chest" | "boots" | "trinket1" | "trinket2";

export interface EquipBonus {
  atk: number;
  def: number;
  hp: number;
  mp: number;
  agi: number;
}

export interface EquipDef {
  id: string;
  name: string;
  slot: "head" | "chest" | "boots" | "trinket";
  desc: string;
  price: number;
  bonus: Partial<EquipBonus>;
  /** 販售階級:省略 = 1(商人圓圓);2 = 第二海商人珍珠;3 = 第三海商人星塵 */
  tier?: 2 | 3;
}

/** 裝備目錄(依 tier 分屬三位商人販售) */
export const EQUIPMENT: EquipDef[] = [
  { id: "cap", name: "皮帽", slot: "head", desc: "防禦 +2", price: 80, bonus: { def: 2 } },
  { id: "helm", name: "鐵盔", slot: "head", desc: "防禦 +5", price: 300, bonus: { def: 5 } },
  { id: "vest", name: "皮甲", slot: "chest", desc: "防禦 +3、生命 +20", price: 120, bonus: { def: 3, hp: 20 } },
  { id: "plate", name: "鐵甲", slot: "chest", desc: "防禦 +7、生命 +40", price: 450, bonus: { def: 7, hp: 40 } },
  { id: "sandals", name: "草鞋", slot: "boots", desc: "敏捷 +2", price: 80, bonus: { agi: 2 } },
  { id: "greaves", name: "鐵靴", slot: "boots", desc: "防禦 +3、敏捷 +3", price: 300, bonus: { def: 3, agi: 3 } },
  { id: "badge", name: "勇者徽章", slot: "trinket", desc: "攻擊 +5", price: 600, bonus: { atk: 5 } },
  { id: "locket", name: "生命墜飾", slot: "trinket", desc: "生命 +50", price: 500, bonus: { hp: 50 } },
  { id: "ring", name: "靈能戒指", slot: "trinket", desc: "靈力 +20", price: 500, bonus: { mp: 20 } },
  // ── 頂階防具(六島通關後的終局成長)──
  { id: "crown", name: "晶紋頭冠", slot: "head", desc: "防禦 +9、靈力 +15", price: 900, bonus: { def: 9, mp: 15 } },
  { id: "scalemail", name: "龍鱗重甲", slot: "chest", desc: "防禦 +12、生命 +80", price: 1400, bonus: { def: 12, hp: 80 } },
  { id: "windboots", name: "疾風長靴", slot: "boots", desc: "敏捷 +8、防禦 +4", price: 900, bonus: { agi: 8, def: 4 } },
  // ── 複合飾品 ──
  { id: "gauntlet", name: "猛擊護手", slot: "trinket", desc: "攻擊 +9、敏捷 +3", price: 1100, bonus: { atk: 9, agi: 3 } },
  { id: "amulet", name: "潮汐護符", slot: "trinket", desc: "生命 +40、靈力 +30", price: 900, bonus: { hp: 40, mp: 30 } },
  { id: "treepend", name: "世界樹墜飾", slot: "trinket", desc: "全能力 +3、生命 +30", price: 1600, bonus: { atk: 3, def: 3, hp: 30, mp: 15, agi: 3 } },
  // ── 第二海裝備(港口鎮・商人珍珠;敵人 hp×2.5/dmg×2 帶)──
  { id: "corahelm", name: "熔鱗盔", slot: "head", desc: "防禦 +14、靈力 +20", price: 2200, bonus: { def: 14, mp: 20 }, tier: 2 },
  { id: "lavaplate", name: "熔岩重鎧", slot: "chest", desc: "防禦 +18、生命 +120", price: 3200, bonus: { def: 18, hp: 120 }, tier: 2 },
  { id: "tideboots", name: "潮行靴", slot: "boots", desc: "敏捷 +12、防禦 +7", price: 2200, bonus: { agi: 12, def: 7 }, tier: 2 },
  { id: "seaheart", name: "深海之心", slot: "trinket", desc: "生命 +90、靈力 +50", price: 2600, bonus: { hp: 90, mp: 50 }, tier: 2 },
  { id: "corefist", name: "熔核護手", slot: "trinket", desc: "攻擊 +14、敏捷 +5", price: 2800, bonus: { atk: 14, agi: 5 }, tier: 2 },
  // ── 第三海裝備(望潮鎮・商人星塵;敵人 hp×3.2/dmg×2.4 帶)──
  { id: "starcrown", name: "星輝冠冕", slot: "head", desc: "防禦 +20、靈力 +40", price: 5000, bonus: { def: 20, mp: 40 }, tier: 3 },
  { id: "astralmail", name: "星穹聖鎧", slot: "chest", desc: "防禦 +26、生命 +200", price: 7500, bonus: { def: 26, hp: 200 }, tier: 3 },
  { id: "meteorboots", name: "流星之靴", slot: "boots", desc: "敏捷 +18、防禦 +10", price: 5000, bonus: { agi: 18, def: 10 }, tier: 3 },
  { id: "starcore", name: "星核墜飾", slot: "trinket", desc: "攻擊 +20、敏捷 +8", price: 6500, bonus: { atk: 20, agi: 8 }, tier: 3 },
  { id: "tidecharm", name: "望潮護符", slot: "trinket", desc: "全能力 +8、生命 +60", price: 8800, bonus: { atk: 8, def: 8, hp: 60, mp: 40, agi: 8 }, tier: 3 },
];

export function equipDefOf(id: string): EquipDef | undefined {
  return EQUIPMENT.find((def) => def.id === id);
}

/**
 * 玩家裝備狀態:持有清單 + 各欄位穿戴;加總後的數值由 PlayerStats.equip 吃進去。
 */
export class EquipmentState {
  owned: string[] = [];
  equipped: Partial<Record<EquipSlot, string>> = {};

  /** 是否已持有 */
  has(id: string): boolean {
    return this.owned.includes(id);
  }

  /** 穿上裝備:飾品填第一個空格,已滿則換掉飾品一;其餘槽位直接替換 */
  equip(id: string): void {
    const def = equipDefOf(id);
    if (!def || !this.has(id)) return;
    if (def.slot === "trinket") {
      const slot: EquipSlot = !this.equipped.trinket1
        ? "trinket1"
        : !this.equipped.trinket2
          ? "trinket2"
          : "trinket1";
      this.equipped[slot] = id;
    } else {
      this.equipped[def.slot] = id;
    }
  }

  unequip(slot: EquipSlot): void {
    delete this.equipped[slot];
  }

  /** 找出某裝備目前穿在哪一格 */
  slotOf(id: string): EquipSlot | null {
    for (const [slot, equippedId] of Object.entries(this.equipped)) {
      if (equippedId === id) return slot as EquipSlot;
    }
    return null;
  }

  /** 加總所有已穿戴裝備的加成 */
  totalBonus(): EquipBonus {
    const total: EquipBonus = { atk: 0, def: 0, hp: 0, mp: 0, agi: 0 };
    for (const id of Object.values(this.equipped)) {
      const def = equipDefOf(id);
      if (!def) continue;
      total.atk += def.bonus.atk ?? 0;
      total.def += def.bonus.def ?? 0;
      total.hp += def.bonus.hp ?? 0;
      total.mp += def.bonus.mp ?? 0;
      total.agi += def.bonus.agi ?? 0;
    }
    return total;
  }

  serialize(): { owned: string[]; equipped: Partial<Record<EquipSlot, string>> } {
    return { owned: [...this.owned], equipped: { ...this.equipped } };
  }

  restore(data: { owned: string[]; equipped: Partial<Record<EquipSlot, string>> }): void {
    this.owned = [...data.owned];
    this.equipped = { ...data.equipped };
  }
}
