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
}

/** 裝備目錄(商人圓圓販售) */
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
