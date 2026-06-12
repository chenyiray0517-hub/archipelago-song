import {
  CRYSTAL_EXP,
  type AttributeKey,
  type CrystalSize,
  type Inventory,
  type PlayerStats,
} from "../systems/stats";
import type { GemBag } from "../systems/gems";
import { equipDefOf, type EquipmentState, type EquipSlot } from "../systems/equipment";

const BAG_CSS = `
#bag { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#bag.show { display: block; }
#bag h3 { margin: 0 0 12px; font-size: 18px; }
#bag .section { margin-bottom: 14px; }
#bag .item { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; font-size: 14px; }
#bag button { border: none; border-radius: 6px; padding: 4px 12px; margin-left: 6px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#bag button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#bag .alloc button { background: #8e6fe8; }
#bag .muted { opacity: 0.7; font-size: 12px; }
#bag .gems { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
#bag .gem-slot { border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 6px 4px; text-align: center; font-size: 12px; line-height: 1.5; }
#bag .gem-slot.off { opacity: 0.35; filter: grayscale(1); }
`;

const CRYSTAL_LABEL: Record<CrystalSize, string> = {
  small: "小型經驗結晶",
  medium: "中型經驗結晶",
  large: "大型經驗結晶",
};

const ATTR_LABEL: Record<AttributeKey, string> = {
  hp: "生命(最大生命 +10)",
  str: "力量(攻擊 +2)",
  spirit: "靈能(靈力上限 +5)",
  agi: "敏捷(速度 +1%)",
  vit: "體魄(防禦 +2)",
};

/**
 * 背包面板:使用經驗結晶注入 EXP、升級後分配能力點數。
 */
export class BagPanel {
  private root: HTMLElement;
  private visible = false;

  constructor(
    private inventory: Inventory,
    private stats: PlayerStats,
    private gems: GemBag,
    private equipment: EquipmentState,
    private onUseCrystal: (size: CrystalSize, count: number) => void,
    private onAllocate: (key: AttributeKey) => void,
    private onEquipChange: () => void,
  ) {
    const style = document.createElement("style");
    style.textContent = BAG_CSS;
    document.head.appendChild(style);

    this.root = document.createElement("div");
    this.root.id = "bag";
    document.body.appendChild(this.root);
  }

  get isOpen(): boolean {
    return this.visible;
  }

  /** 開關背包(Tab 鍵) */
  toggle(): void {
    this.visible = !this.visible;
    this.root.classList.toggle("show", this.visible);
    if (this.visible) this.render();
  }

  /** 背包開啟時重繪內容(數值變動後呼叫) */
  render(): void {
    if (!this.visible) return;
    const s = this.stats;
    const crystalRows = (Object.keys(CRYSTAL_LABEL) as CrystalSize[])
      .map((size) => {
        const count = this.inventory.crystals[size];
        return `<div class="item">
          <span>${CRYSTAL_LABEL[size]} ×${count} <span class="muted">(${CRYSTAL_EXP[size]} EXP)</span></span>
          <span>
            <button data-use="${size}" data-count="1" ${count === 0 ? "disabled" : ""}>使用</button>
            <button data-use="${size}" data-count="999" ${count === 0 ? "disabled" : ""}>全部</button>
          </span>
        </div>`;
      })
      .join("");

    const allocRows =
      s.points > 0
        ? (Object.keys(ATTR_LABEL) as AttributeKey[])
            .map(
              (key) => `<div class="item">
                <span>${ATTR_LABEL[key]} <span class="muted">目前 ${s.attrs[key]}</span></span>
                <button data-alloc="${key}">+1</button>
              </div>`,
            )
            .join("")
        : `<div class="muted">升級後可在此分配能力點數</div>`;

    const gemSlots: Array<[string, string, boolean]> = [
      ["🔥", "焰心石", this.gems.flameOwned],
      ["🌪️", "風語石", this.gems.windOwned],
      ["🪨", "地殼石", this.gems.earthOwned],
      ["❄️", "霜語晶", this.gems.frostOwned],
      ["🌊", "潮汐石", this.gems.tideOwned],
      ["🌀", "虛空石", this.gems.voidOwned],
    ];
    const gemGrid = gemSlots
      .map(
        ([icon, name, owned]) =>
          `<div class="gem-slot ${owned ? "" : "off"}">${icon}<br/>${name}${owned ? "" : "<br/><span class='muted'>未取得</span>"}</div>`,
      )
      .join("");

    const equipRows = this.equipment.owned
      .map((id) => {
        const def = equipDefOf(id);
        if (!def) return "";
        const slot = this.equipment.slotOf(id);
        return `<div class="item">
          <span>${slot ? "✅ " : ""}${def.name} <span class="muted">(${def.desc})</span></span>
          ${
            slot
              ? `<button data-unequip="${slot}">卸下</button>`
              : `<button data-equip="${id}">裝備</button>`
          }
        </div>`;
      })
      .join("");

    this.root.innerHTML = `
      <h3>背包</h3>
      <div class="section">
        <div class="muted">Lv.${s.level}｜EXP ${s.exp} / ${s.expToNext()}｜可分配點數 ${s.points}<br/>
        攻擊 ${s.atk}｜防禦 ${s.def}｜生命上限 ${s.maxHP}｜靈力上限 ${s.maxMP}</div>
      </div>
      <div class="section">${crystalRows}</div>
      <div class="section"><h3>裝備</h3>${equipRows || '<div class="muted">尚無裝備,去商人圓圓那裡看看吧</div>'}</div>
      <div class="section"><h3>靈紋寶石盤</h3><div class="gems">${gemGrid}</div></div>
      <div class="section alloc"><h3>能力點分配</h3>${allocRows}</div>
      <div class="muted">按 Tab 關閉</div>
    `;

    this.root.querySelectorAll<HTMLButtonElement>("button[data-use]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const size = btn.dataset.use as CrystalSize;
        this.onUseCrystal(size, Number(btn.dataset.count));
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-alloc]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.onAllocate(btn.dataset.alloc as AttributeKey);
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-equip]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.equipment.equip(btn.dataset.equip as string);
        this.onEquipChange();
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-unequip]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.equipment.unequip(btn.dataset.unequip as EquipSlot);
        this.onEquipChange();
        this.render();
      });
    });
  }
}
