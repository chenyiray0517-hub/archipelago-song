import type { Player } from "../entities/player";
import type { Inventory } from "../systems/stats";

const HUD_CSS = `
#hud { position: fixed; inset: 0; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; color: #fff; }
#hud .panel { position: absolute; top: 14px; left: 14px; background: rgba(10, 26, 42, 0.72); border-radius: 10px; padding: 10px 14px; min-width: 220px; }
#hud .bar { height: 13px; border-radius: 6px; background: rgba(255,255,255,0.15); margin: 4px 0 8px; overflow: hidden; position: relative; }
#hud .bar > div { height: 100%; border-radius: 6px; transition: width 0.15s; }
#hud .bar .num { position: absolute; inset: 0; text-align: center; font-size: 10px; line-height: 13px; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.8); }
#hud .hp > div { background: #e74c3c; }
#hud .mp > div { background: #3a8fe8; }
#hud .st > div { background: #f0c040; }
#hud .xp > div { background: #8e6fe8; }
#hud .row { display: flex; justify-content: space-between; font-size: 13px; opacity: 0.95; }
#hud .hint { position: absolute; bottom: 14px; left: 14px; font-size: 12px; background: rgba(10,26,42,0.6); padding: 8px 12px; border-radius: 8px; line-height: 1.7; }
#hud .toast { position: absolute; top: 18%; left: 50%; transform: translateX(-50%); font-size: 20px; font-weight: 700; text-shadow: 0 2px 6px rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; }
#hud .toast.show { opacity: 1; }
#hud .gem-row { font-size: 13px; margin-top: 6px; display: none; color: #ffb08a; }
#hud .gem-row.show { display: block; }
#hud .fruit-row { font-size: 13px; margin-top: 4px; display: none; color: #cfa8ff; }
#hud .fruit-row.show { display: block; }
#hud .quests { position: absolute; top: 14px; right: 14px; background: rgba(10,26,42,0.72); border-radius: 10px; padding: 10px 14px; font-size: 13px; line-height: 1.8; max-width: 260px; display: none; }
#hud .quests.show { display: block; }
#hud .quests .title { font-weight: 700; font-size: 13px; opacity: 0.8; margin-bottom: 2px; }
#hud .talk { position: absolute; bottom: 110px; left: 50%; transform: translateX(-50%); font-size: 15px; background: rgba(10,26,42,0.8); padding: 6px 16px; border-radius: 8px; display: none; }
#hud .talk.show { display: block; }
#death { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; flex-direction: column; gap: 18px; background: rgba(20, 0, 0, 0.55); color: #fff; font-family: inherit; }
#death.show { display: flex; }
#death h2 { font-size: 34px; margin: 0; }
#death button { pointer-events: auto; font-size: 16px; padding: 10px 28px; border: none; border-radius: 8px; background: #e74c3c; color: #fff; cursor: pointer; }
#death button.shrine { background: #3a8fe8; }
#death .options { display: flex; flex-direction: column; gap: 10px; align-items: center; }
`;

/**
 * 平視顯示器:HP/MP/體力/EXP 條、貝拉幣與結晶數、提示訊息、死亡畫面。
 */
export class Hud {
  private hpFill: HTMLElement;
  private mpFill: HTMLElement;
  private stFill: HTMLElement;
  private xpFill: HTMLElement;
  private levelText: HTMLElement;
  private coinText: HTMLElement;
  private crystalText: HTMLElement;
  private toast: HTMLElement;
  private deathOverlay: HTMLElement;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private onRespawn: (choice: string) => void) {
    const style = document.createElement("style");
    style.textContent = HUD_CSS;
    document.head.appendChild(style);

    const hud = document.createElement("div");
    hud.id = "hud";
    hud.innerHTML = `
      <div class="panel">
        <div class="row"><span id="hud-level">Lv.1</span><span id="hud-coin">🪙 0</span></div>
        <div class="bar hp"><div id="hud-hp"></div><span class="num" id="hud-hp-num"></span></div>
        <div class="bar mp"><div id="hud-mp"></div><span class="num" id="hud-mp-num"></span></div>
        <div class="bar st"><div id="hud-st"></div></div>
        <div class="row"><span>EXP</span><span id="hud-crystal">💎 0</span></div>
        <div class="bar xp"><div id="hud-xp"></div></div>
        <div class="row"><span>🧪 <span id="hud-potion">0</span>(R 使用)</span><span id="hud-env">☀️</span></div>
        <div class="gem-row" id="hud-gem">🔥 焰心石｜E 火焰斬(10 靈力)</div>
        <div class="fruit-row" id="hud-fruit"></div>
      </div>
      <div class="quests" id="hud-quests"><div class="title">任務</div><div id="hud-quest-list"></div></div>
      <div class="talk" id="hud-talk">按 F 對話</div>
      <div class="hint">WASD 移動｜空白鍵 跳躍｜Shift 閃避｜左鍵 攻擊(按住集氣)｜Q 舉盾｜E 火焰斬｜R 藥水<br/>右鍵拖曳 轉視角｜滾輪 縮放｜Tab 背包｜F 對話/上下船｜小船在南灘,可出海前往其他島</div>
      <div class="toast" id="hud-toast"></div>
    `;
    document.body.appendChild(hud);

    this.deathOverlay = document.createElement("div");
    this.deathOverlay.id = "death";
    this.deathOverlay.innerHTML = `<h2>你倒下了……</h2><div class="options" id="death-options"></div>`;
    document.body.appendChild(this.deathOverlay);

    this.hpFill = this.byId("hud-hp");
    this.mpFill = this.byId("hud-mp");
    this.stFill = this.byId("hud-st");
    this.xpFill = this.byId("hud-xp");
    this.levelText = this.byId("hud-level");
    this.coinText = this.byId("hud-coin");
    this.crystalText = this.byId("hud-crystal");
    this.toast = this.byId("hud-toast");
  }

  /** 每幀同步顯示數值 */
  update(player: Player, inventory: Inventory): void {
    const s = player.stats;
    this.hpFill.style.width = `${(player.hp / s.maxHP) * 100}%`;
    this.mpFill.style.width = `${(player.mp / s.maxMP) * 100}%`;
    this.byId("hud-hp-num").textContent = `${Math.ceil(player.hp)} / ${s.maxHP}`;
    this.byId("hud-mp-num").textContent = `${Math.floor(player.mp)} / ${s.maxMP}`;
    this.stFill.style.width = `${player.stamina}%`;
    this.xpFill.style.width = `${(s.exp / s.expToNext()) * 100}%`;
    this.levelText.textContent = s.points > 0 ? `Lv.${s.level}(${s.points} 點可分配)` : `Lv.${s.level}`;
    this.coinText.textContent = `🪙 ${inventory.coins}`;
    const total = inventory.crystals.small + inventory.crystals.medium + inventory.crystals.large;
    this.crystalText.textContent = `💎 ${total}`;
    this.byId("hud-potion").textContent = String(inventory.potions);
  }

  /** 更新寶石指示列(任一持有才顯示) */
  setGems(gems: {
    flameOwned: boolean;
    windOwned: boolean;
    earthOwned: boolean;
    frostOwned: boolean;
    tideOwned: boolean;
    voidOwned: boolean;
    lavaOwned: boolean;
  }): void {
    const parts: string[] = [];
    if (gems.flameOwned) parts.push("🔥 焰心石｜E 火焰斬(10 靈力)");
    if (gems.windOwned) parts.push("🌪️ 風語石｜二段跳/按住空白鍵滑翔");
    if (gems.earthOwned) parts.push("🪨 地殼石｜C 地震波(15 靈力)");
    if (gems.frostOwned) parts.push("❄️ 霜語晶｜V 冰箭(12 靈力)/海上行走耗靈力");
    if (gems.tideOwned) parts.push("🌊 潮汐石｜可潛入沉沒古城(船開到遺跡按 F)");
    if (gems.voidOwned) parts.push("🌀 虛空石｜X 瞬移(8 靈力)");
    if (gems.lavaOwned) parts.push("🌋 溶岩石｜G 熔岩噴發(14 靈力,灼燒)");
    const el = this.byId("hud-gem");
    el.classList.toggle("show", parts.length > 0);
    el.innerHTML = parts.join("<br/>");
  }

  /** 更新靈樹果實技能提示列(雷光果/引力果) */
  setFruits(fruits: { thunderOwned: boolean; gravityOwned: boolean }): void {
    const parts: string[] = [];
    if (fruits.thunderOwned) parts.push("⚡ 雷光果｜Z 連鎖閃電(16 靈力,麻痺)");
    if (fruits.gravityOwned) parts.push("🌀 引力果｜T 引力漩渦(18 靈力,聚怪)");
    const el = this.byId("hud-fruit");
    el.classList.toggle("show", parts.length > 0);
    el.innerHTML = parts.join("<br/>");
  }

  /** 顯示/隱藏互動提示,label 例如「按 F 對話」「按 F 交易」 */
  setTalkPrompt(visible: boolean, label = "按 F 對話"): void {
    const el = this.byId("hud-talk");
    el.classList.toggle("show", visible);
    if (visible) el.textContent = label;
  }

  /** 更新時間/天氣指示(例:🌙 ⛈️) */
  setEnv(text: string): void {
    const el = this.byId("hud-env");
    if (el.textContent !== text) el.textContent = text;
  }

  /** 更新右上角任務追蹤列(空陣列隱藏) */
  setQuests(lines: string[]): void {
    this.byId("hud-quests").classList.toggle("show", lines.length > 0);
    this.byId("hud-quest-list").innerHTML = lines
      .map((line) => `<div>${line}</div>`)
      .join("");
  }

  /** 顯示短暫提示訊息 */
  showToast(message: string): void {
    this.toast.textContent = message;
    this.toast.classList.add("show");
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.classList.remove("show"), 2200);
  }

  /** 切換死亡畫面;顯示時依已啟用的重生點重建選項按鈕(海灘為預設選項) */
  setDead(dead: boolean, options: { id: string; label: string }[] = []): void {
    if (dead) {
      const list = this.byId("death-options");
      list.innerHTML = "";
      const all = [{ id: "beach", label: "在曙光嶼海灘重生" }, ...options];
      for (const option of all) {
        const btn = document.createElement("button");
        btn.textContent = option.label;
        btn.dataset.respawn = option.id;
        if (option.id !== "beach") btn.classList.add("shrine");
        btn.addEventListener("click", () => this.onRespawn(option.id));
        list.appendChild(btn);
      }
    }
    this.deathOverlay.classList.toggle("show", dead);
  }

  private byId(id: string): HTMLElement {
    const el = document.getElementById(id);
    if (!el) throw new Error(`HUD 元素遺失: ${id}`);
    return el;
  }
}
