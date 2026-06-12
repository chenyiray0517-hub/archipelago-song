export type QuestId = "gem" | "jelly" | "wind" | "earth" | "frost" | "tide" | "depth" | "final";
export type QuestState = "active" | "done";

/** 果凍清理任務目標數 */
export const JELLY_TARGET = 5;

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

  get(id: QuestId): QuestState | null {
    return this.states[id] ?? null;
  }

  accept(id: QuestId): void {
    if (!this.states[id]) this.states[id] = "active";
    if (id === "jelly") this.jellyBaseline = this.slimeKills;
  }

  complete(id: QuestId): void {
    this.states[id] = "done";
  }

  /** 果凍清理進度(接取後擊殺數,封頂目標值) */
  jellyProgress(): number {
    return Math.min(this.slimeKills - this.jellyBaseline, JELLY_TARGET);
  }

  /** 存檔用 */
  serialize(): { states: Partial<Record<QuestId, QuestState>>; kills: number; base: number } {
    return { states: { ...this.states }, kills: this.slimeKills, base: this.jellyBaseline };
  }

  /** 讀檔用 */
  restore(data: { states: Partial<Record<QuestId, QuestState>>; kills: number; base: number }): void {
    this.states = { ...data.states };
    this.slimeKills = data.kills;
    this.jellyBaseline = data.base;
  }
}
