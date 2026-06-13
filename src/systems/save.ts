import type { Attributes, CrystalSize } from "./stats";
import type { QuestSave } from "./quests";
import type { UpgradableGem } from "./gems";
import type { UpgradableFruit } from "./fruits";
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
  quests?: QuestSave;
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
  /** 已啟用的重生石碑 id(依設置順序) */
  shrines?: string[];
  /** 海寶石持有狀態(往返第一/第二海的重要道具) */
  seaGems?: { first: boolean; second: boolean };
  /** 溶岩石持有狀態(第七顆靈紋寶石,熔砂島取得) */
  lavaOwned?: boolean;
  /** 碧波石持有狀態(第二海・珊瑚礁島取得) */
  aquaOwned?: boolean;
  /** 翠生石持有狀態(第二海・靈脈島取得) */
  lifeOwned?: boolean;
  /** 靈樹果實持有狀態與升階(雷光果/引力果) */
  fruits?: {
    thunderOwned: boolean;
    gravityOwned: boolean;
    levels: Record<UpgradableFruit, number>;
  };
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
