export type QuestId =
  | "gem"
  | "jelly"
  | "wind"
  | "earth"
  | "frost"
  | "tide"
  | "depth"
  | "final"
  | "vineHunt"
  | "emberHunt"
  | "frostHunt"
  | "deepHunt"
  | "sandHunt"
  | "reefHunt"
  | "sporeHunt"
  | "marshHunt"
  | "brineHunt"
  | "solarHunt"
  | "sea2"
  | "lava"
  | "aqua"
  | "life";
export type QuestState = "active" | "done";

/** 果凍清理任務目標數 */
export const JELLY_TARGET = 5;

/** 各島清剿任務 id */
export type HuntId =
  | "vineHunt"
  | "emberHunt"
  | "frostHunt"
  | "deepHunt"
  | "sandHunt"
  | "reefHunt"
  | "sporeHunt"
  | "marshHunt"
  | "brineHunt"
  | "solarHunt";

/** 清剿任務配置:目標敵人種類與數量(敵人重新整理頁面後會重生,不會卡關) */
export const HUNTS: Record<HuntId, { kind: string; target: number }> = {
  vineHunt: { kind: "vine", target: 4 },
  emberHunt: { kind: "ember", target: 4 },
  frostHunt: { kind: "frost", target: 4 },
  deepHunt: { kind: "deep", target: 3 },
  // 第二海三島(守護者島)
  sandHunt: { kind: "sand", target: 4 },
  reefHunt: { kind: "reef", target: 4 },
  sporeHunt: { kind: "spore", target: 4 },
  // 第二海三島(委託島)
  marshHunt: { kind: "marsh", target: 4 },
  brineHunt: { kind: "brine", target: 4 },
  solarHunt: { kind: "solar", target: 4 },
};

/** 任務存檔格式(huntKills/huntBases 後加,optional 保持舊檔相容) */
export interface QuestSave {
  states: Partial<Record<QuestId, QuestState>>;
  kills: number;
  base: number;
  huntKills?: Record<string, number>;
  huntBases?: Partial<Record<HuntId, number>>;
}

/**
 * 任務紀錄:狀態 + 擊殺計數。
 * 任務的給予/回報對話與獎勵發放在 main 的 NPC 對話邏輯中處理。
 */
export class QuestLog {
  private states: Partial<Record<QuestId, QuestState>> = {};
  /** 累計史萊姆擊殺數(全程計數,任務以接取時的基準差計算) */
  slimeKills = 0;
  /** 接取果凍清理任務時的擊殺基準 */
  jellyBaseline = 0;
  /** 各種類敵人累計擊殺數(清剿任務用,計法同史萊姆) */
  private huntKills: Record<string, number> = {};
  /** 各清剿任務接取時的擊殺基準 */
  private huntBaselines: Partial<Record<HuntId, number>> = {};

  get(id: QuestId): QuestState | null {
    return this.states[id] ?? null;
  }

  accept(id: QuestId): void {
    if (!this.states[id]) this.states[id] = "active";
    if (id === "jelly") this.jellyBaseline = this.slimeKills;
    if (id in HUNTS) {
      const hunt = id as HuntId;
      this.huntBaselines[hunt] = this.huntKills[HUNTS[hunt].kind] ?? 0;
    }
  }

  complete(id: QuestId): void {
    this.states[id] = "done";
  }

  /** 記錄一次敵人擊殺(所有種類都計,供清剿任務查進度) */
  addKill(kind: string): void {
    this.huntKills[kind] = (this.huntKills[kind] ?? 0) + 1;
  }

  /** 該種類敵人的累計擊殺數(第二海解鎖的「敵人圖鑑」條件用) */
  killsOf(kind: string): number {
    return this.huntKills[kind] ?? 0;
  }

  /** 果凍清理進度(接取後擊殺數,封頂目標值) */
  jellyProgress(): number {
    return Math.min(this.slimeKills - this.jellyBaseline, JELLY_TARGET);
  }

  /** 清剿任務進度(接取後擊殺數,封頂目標值) */
  huntProgress(id: HuntId): number {
    const killed = (this.huntKills[HUNTS[id].kind] ?? 0) - (this.huntBaselines[id] ?? 0);
    return Math.min(killed, HUNTS[id].target);
  }

  /** 存檔用 */
  serialize(): QuestSave {
    return {
      states: { ...this.states },
      kills: this.slimeKills,
      base: this.jellyBaseline,
      huntKills: { ...this.huntKills },
      huntBases: { ...this.huntBaselines },
    };
  }

  /** 讀檔用 */
  restore(data: QuestSave): void {
    this.states = { ...data.states };
    this.slimeKills = data.kills;
    this.jellyBaseline = data.base;
    this.huntKills = { ...(data.huntKills ?? {}) };
    this.huntBaselines = { ...(data.huntBases ?? {}) };
  }
}
