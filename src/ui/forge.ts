import type { Inventory, PlayerStats } from "../systems/stats";
import {
  GEM_UPGRADE_COSTS,
  GEM_MAX_LEVEL,
  type GemBag,
  type UpgradableGem,
} from "../systems/gems";
import {
  FRUIT_UPGRADE_COSTS,
  FRUIT_MAX_LEVEL,
  type FruitBag,
  type UpgradableFruit,
} from "../systems/fruits";

const FORGE_CSS = `
#forge { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(26, 16, 10, 0.95); border: 1px solid rgba(255,170,80,0.3); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#forge.show { display: block; }
#forge h3 { margin: 0 0 4px; font-size: 18px; color: #ffb060; }
#forge .info { font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
#forge button { border: none; border-radius: 6px; padding: 8px 20px; cursor: pointer; background: #c8642c; color: #fff; font-size: 14px; }
#forge button:disabled { background: #5a4438; cursor: default; opacity: 0.6; }
#forge .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`;

/** 各強化等級費用(貝拉幣);超過上限即滿級 */
const UPGRADE_COSTS = [100, 250, 500, 800, 1200];

/**
 * 鍛造面板:用貝拉幣強化武器,每級攻擊 +3(企劃書 4:鍛造師升級武器)。
 */
export class ForgePanel {
  private root: HTMLElement;
  private visible = false;

  constructor(
    private inventory: Inventory,
    private stats: PlayerStats,
    private gems: GemBag,
    private fruits: FruitBag,
    private onUpgrade: () => void,
    private onGemUpgrade: (gem: UpgradableGem) => void,
    private onFruitUpgrade: (fruit: UpgradableFruit) => void,
  ) {
    const style = document.createElement("style");
    style.textContent = FORGE_CSS;
    document.head.appendChild(style);
    this.root = document.createElement("div");
    this.root.id = "forge";
    document.body.appendChild(this.root);
  }

  get isOpen(): boolean {
    return this.visible;
  }

  open(): void {
    this.visible = true;
    this.root.classList.add("show");
    this.render();
  }

  close(): void {
    this.visible = false;
    this.root.classList.remove("show");
  }

  private render(): void {
    const level = this.stats.weaponLevel;
    const maxed = level >= UPGRADE_COSTS.length;
    const cost = maxed ? 0 : UPGRADE_COSTS[level];

    const GEM_INFO: Array<[UpgradableGem, string, boolean]> = [
      ["flame", "🔥 焰心石(火焰斬威力)", this.gems.flameOwned],
      ["wind", "🌪️ 風語石(滑翔/三段跳)", this.gems.windOwned],
      ["earth", "🪨 地殼石(地震波威力與範圍)", this.gems.earthOwned],
      ["frost", "❄️ 霜語晶(冰箭威力與凍結時間)", this.gems.frostOwned],
      ["void", "🌀 虛空石(瞬移距離)", this.gems.voidOwned],
      ["lava", "🌋 溶岩石(熔岩噴發威力與灼燒)", this.gems.lavaOwned],
    ];
    const gemRows = GEM_INFO.filter(([, , owned]) => owned)
      .map(([gem, label]) => {
        const lv = this.gems.levels[gem];
        const gemMaxed = lv >= GEM_MAX_LEVEL;
        const gemCost = gemMaxed ? 0 : GEM_UPGRADE_COSTS[lv - 1];
        return `<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${label} Lv.${lv}</span>
          <button data-gemup="${gem}" ${gemMaxed || this.inventory.coins < gemCost ? "disabled" : ""}>
            ${gemMaxed ? "已滿階" : `升階(🪙 ${gemCost})`}
          </button>
        </div>`;
      })
      .join("");

    const FRUIT_INFO: Array<[UpgradableFruit, string, boolean]> = [
      ["thunder", "⚡ 雷光果(連鎖閃電威力與跳數)", this.fruits.thunderOwned],
      ["gravity", "🌀 引力果(漩渦威力與範圍)", this.fruits.gravityOwned],
    ];
    const fruitRows = FRUIT_INFO.filter(([, , owned]) => owned)
      .map(([fruit, label]) => {
        const lv = this.fruits.levels[fruit];
        const fruitMaxed = lv >= FRUIT_MAX_LEVEL;
        const fruitCost = fruitMaxed ? 0 : FRUIT_UPGRADE_COSTS[lv - 1];
        return `<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${label} Lv.${lv}</span>
          <button data-fruitup="${fruit}" ${fruitMaxed || this.inventory.coins < fruitCost ? "disabled" : ""}>
            ${fruitMaxed ? "已滿階" : `升階(🪙 ${fruitCost})`}
          </button>
        </div>`;
      })
      .join("");

    this.root.innerHTML = `
      <h3>爐婆的鍛造坊</h3>
      <div class="info">
        武器:勇者之劍 +${level}${maxed ? "(已達最高強化)" : ""}<br/>
        目前攻擊力:${this.stats.atk}${maxed ? "" : ` → 強化後 ${this.stats.atk + 3}`}<br/>
        持有 🪙 ${this.inventory.coins}
      </div>
      <button id="forge-btn" ${maxed || this.inventory.coins < cost ? "disabled" : ""}>
        ${maxed ? "已滿級" : `強化(🪙 ${cost})`}
      </button>
      <h3 style="margin-top:16px;">寶石升階</h3>
      ${gemRows || '<div class="info" style="opacity:0.6;">取得靈紋寶石後可在此升階</div>'}
      ${fruitRows ? `<h3 style="margin-top:16px;">果實升階</h3>${fruitRows}` : ""}
      <div class="muted">按 F 關閉</div>
    `;
    const btn = this.root.querySelector<HTMLButtonElement>("#forge-btn");
    btn?.addEventListener("click", () => {
      if (maxed || this.inventory.coins < cost) return;
      this.inventory.coins -= cost;
      this.stats.weaponLevel++;
      this.onUpgrade();
      this.render();
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-gemup]").forEach((gemBtn) => {
      gemBtn.addEventListener("click", () => {
        const gem = gemBtn.dataset.gemup as UpgradableGem;
        const lv = this.gems.levels[gem];
        if (lv >= GEM_MAX_LEVEL) return;
        const gemCost = GEM_UPGRADE_COSTS[lv - 1];
        if (this.inventory.coins < gemCost) return;
        this.inventory.coins -= gemCost;
        this.gems.levels[gem]++;
        this.onGemUpgrade(gem);
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-fruitup]").forEach((fruitBtn) => {
      fruitBtn.addEventListener("click", () => {
        const fruit = fruitBtn.dataset.fruitup as UpgradableFruit;
        const lv = this.fruits.levels[fruit];
        if (lv >= FRUIT_MAX_LEVEL) return;
        const fruitCost = FRUIT_UPGRADE_COSTS[lv - 1];
        if (this.inventory.coins < fruitCost) return;
        this.inventory.coins -= fruitCost;
        this.fruits.levels[fruit]++;
        this.onFruitUpgrade(fruit);
        this.render();
      });
    });
  }
}
