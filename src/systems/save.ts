import type { Attributes, CrystalSize } from "./stats";
import type { QuestId, QuestState } from "./quests";
import type { UpgradableGem } from "./gems";
import type { EquipSlot } from "./equipment";

const SAVE_KEY = "archipelago-save-v1";

/** 存檔資料(版本欄位供未來遷移;後加欄位設為 optional 保持舊檔相容) */
export interface SaveData {
  v: 1;
  level: number;
  exp: number;
  points: number;
  attrs: Attributes;
  coins: number;
  crystals: Record<CrystalSize, number>;
  flameOwned: boolean;
  pos: [number, number];
  potions?: number;
  quests?: { states: Partial<Record<QuestId, QuestState>>; kills: number; base: number };
  windOwned?: boolean;
  boatPos?: [number, number];
  sailing?: boolean;
  earthOwned?: boolean;
  weaponLevel?: number;
  frostOwned?: boolean;
  tideOwned?: boolean;
  voidOwned?: boolean;
  voidDefeated?: boolean;
  gemLevels?: Record<UpgradableGem, number>;
  equipment?: { owned: string[]; equipped: Partial<Record<EquipSlot, string>> };
}

/** 寫入 localStorage(失敗靜默,遊戲不因存檔掛掉) */
export function saveGame(data: SaveData): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    // 私密模式等情況下寫入失敗,略過
  }
}

/** 讀取存檔,無存檔或格式不符回傳 null */
export function loadGame(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as SaveData;
    if (data.v !== 1) return null;
    return data;
  } catch {
    return null;
  }
}
