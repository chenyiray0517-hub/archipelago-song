import type { Inventory } from "../systems/stats";
import { EQUIPMENT, type EquipmentState } from "../systems/equipment";

const SHOP_CSS = `
#shop { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; max-height: 86vh; overflow-y: auto; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#shop.show { display: block; }
#shop h3 { margin: 0 0 4px; font-size: 18px; }
#shop .coins { font-size: 13px; opacity: 0.85; margin-bottom: 12px; }
#shop .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
#shop .item .desc { display: block; font-size: 12px; opacity: 0.65; }
#shop button { border: none; border-radius: 6px; padding: 5px 14px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#shop button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#shop .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`;

interface ShopItem {
  id: "potion" | "small" | "medium";
  name: string;
  desc: string;
  price: number;
}

const GOODS: ShopItem[] = [
  { id: "potion", name: "回復藥水", desc: "+50 HP(按 R 使用)", price: 30 },
  { id: "small", name: "小型經驗結晶", desc: "10 EXP", price: 30 },
  { id: "medium", name: "中型經驗結晶", desc: "50 EXP", price: 120 },
];

/**
 * 商店面板:用貝拉幣購買藥水與經驗結晶(企劃書 4:商人販售結晶)。
 */
export class ShopPanel {
  private root: HTMLElement;
  private visible = false;

  constructor(
    private inventory: Inventory,
    private equipment: EquipmentState,
    private onBuy: () => void,
  ) {
    const style = document.createElement("style");
    style.textContent = SHOP_CSS;
    document.head.appendChild(style);
    this.root = document.createElement("div");
    this.root.id = "shop";
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
    const rows = GOODS.map((item) => {
      const affordable = this.inventory.coins >= item.price;
      return `<div class="item">
        <span>${item.name} <span class="desc">${item.desc}</span></span>
        <button data-buy="${item.id}" ${affordable ? "" : "disabled"}>🪙 ${item.price}</button>
      </div>`;
    }).join("");

    const equipRows = EQUIPMENT.filter((def) => !this.equipment.has(def.id))
      .map(
        (def) => `<div class="item">
          <span>${def.name} <span class="desc">${def.desc}</span></span>
          <button data-buyequip="${def.id}" ${this.inventory.coins >= def.price ? "" : "disabled"}>🪙 ${def.price}</button>
        </div>`,
      )
      .join("");

    this.root.innerHTML = `
      <h3>商人圓圓的雜貨攤</h3>
      <div class="coins">持有 🪙 ${this.inventory.coins}｜🧪 ${this.inventory.potions}</div>
      ${rows}
      <h3 style="margin-top:14px;">裝備</h3>
      ${equipRows || '<div class="muted">裝備都被你買光啦!</div>'}
      <div class="muted">按 F 關閉(買到的裝備在背包 Tab 穿戴)</div>
    `;

    this.root.querySelectorAll<HTMLButtonElement>("button[data-buy]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = GOODS.find((g) => g.id === btn.dataset.buy);
        if (!item || this.inventory.coins < item.price) return;
        this.inventory.coins -= item.price;
        if (item.id === "potion") this.inventory.potions++;
        else this.inventory.crystals[item.id]++;
        this.onBuy();
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-buyequip]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const def = EQUIPMENT.find((e) => e.id === btn.dataset.buyequip);
        if (!def || this.equipment.has(def.id) || this.inventory.coins < def.price) return;
        this.inventory.coins -= def.price;
        this.equipment.owned.push(def.id);
        this.onBuy();
        this.render();
      });
    });
  }
}
