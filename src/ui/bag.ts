import {
  CRYSTAL_EXP,
  type AttributeKey,
  type CrystalSize,
  type Inventory,
  type PlayerStats,
} from "../systems/stats";
import { MAX_EQUIPPED_GEMS, GEM_SLOT_COUNT, isActiveGem, type GemBag, type GemKey } from "../systems/gems";
import { MAX_EQUIPPED_FRUITS, type FruitBag, type FruitKey } from "../systems/fruits";
import { equipDefOf, type EquipmentState, type EquipSlot } from "../systems/equipment";

const BAG_CSS = `
#bag { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 920px; max-width: 94vw; max-height: 84vh; overflow-y: auto; overscroll-behavior: contain; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 20px 24px; display: none; z-index: 10; }
#bag::-webkit-scrollbar { width: 8px; }
#bag::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 4px; }
#bag.show { display: block; }
#bag h3 { margin: 0 0 12px; font-size: 18px; }
#bag h4 { margin: 0 0 8px; font-size: 14px; opacity: 0.9; }
#bag .section { margin-bottom: 14px; }
#bag .item { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; font-size: 14px; }
#bag button { border: none; border-radius: 6px; padding: 4px 12px; margin-left: 6px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#bag button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#bag .alloc button { background: #8e6fe8; }
#bag .muted { opacity: 0.7; font-size: 12px; }
#bag .top { display: grid; grid-template-columns: 320px 1fr; gap: 20px; margin-bottom: 18px; align-items: stretch; }
#bag .portrait { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 12px; padding: 14px 12px; text-align: center; }
/* 角色展示台:之後 3D 模型的 canvas 放進這裡(目前先放 emoji) */
#bag .model-stage { height: 240px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); background: radial-gradient(ellipse at 50% 70%, rgba(90,209,255,0.18), rgba(0,0,0,0.35)); margin-bottom: 10px; overflow: hidden; }
#bag .model-stage canvas { width: 100%; height: 100%; display: block; }
#bag .avatar { font-size: 130px; line-height: 1; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.55)); }
#bag .pname { font-size: 17px; font-weight: 700; }
#bag .plv { font-size: 13px; opacity: 0.8; margin-bottom: 8px; }
#bag .expbar { height: 9px; border-radius: 5px; background: rgba(0,0,0,0.4); overflow: hidden; margin: 0 4px 5px; }
#bag .expbar > i { display: block; height: 100%; background: linear-gradient(90deg,#5ad1ff,#3a6fd8); }
#bag .pstats { font-size: 16px; line-height: 1.8; margin-top: 8px; }
#bag .alloc-box { display: flex; flex-direction: column; justify-content: center; }
#bag .alloc-box h4 { font-size: 16px; }
#bag .arow { display: flex; align-items: center; justify-content: space-between; padding: 7px 0; font-size: 16px; }
#bag .arow .pts { font-size: 13px; opacity: 0.8; margin-bottom: 6px; }
#bag .eq-icon { display: inline-block; width: 1.5em; font-size: 16px; }
#bag .gems { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
#bag .gem-slot { border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 6px 4px; text-align: center; font-size: 12px; line-height: 1.5; }
#bag .gem-slot.off { opacity: 0.35; filter: grayscale(1); }
#bag .gem-slot.eq { border-color: #f0c040; background: rgba(240,192,64,0.14); }
#bag .gembtn { margin: 4px 0 0; padding: 2px 8px; font-size: 11px; }
#bag .gembtn.on { background: #c8902c; }
#bag .keybinds { display: flex; gap: 2px; justify-content: center; margin-top: 4px; }
#bag .kb { padding: 1px 0; width: 16px; margin: 0; font-size: 10px; line-height: 1.4; background: #3a4760; border-radius: 4px; }
#bag .kb.on { background: #f0c040; color: #1a1a22; font-weight: 700; }
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

/** 各件裝備的 emoji 圖示(依 id) */
const EQUIP_ICON: Record<string, string> = {
  cap: "🧢",
  helm: "⛑️",
  crown: "👑",
  vest: "🦺",
  plate: "🛡️",
  scalemail: "🐉",
  sandals: "👡",
  greaves: "🥾",
  windboots: "🌬️",
  badge: "🎖️",
  locket: "💗",
  ring: "💍",
  gauntlet: "🥊",
  amulet: "🔱",
  treepend: "🌳",
};

/** 能力分配列用的精簡圖示與短名(完整說明放 title 提示) */
const ATTR_META: Record<AttributeKey, [string, string]> = {
  hp: ["❤️", "生命"],
  str: ["⚔️", "力量"],
  spirit: ["✨", "靈能"],
  agi: ["💨", "敏捷"],
  vit: ["🛡️", "體魄"],
};

/**
 * 背包面板:使用經驗結晶注入 EXP、升級後分配能力點數。
 */
export class BagPanel {
  private root: HTMLElement;
  private visible = false;
  /** 底部傳送區是否展開(每次開背包重設為收合) */
  private teleportOpen = false;

  constructor(
    private inventory: Inventory,
    private stats: PlayerStats,
    private gems: GemBag,
    private fruits: FruitBag,
    private equipment: EquipmentState,
    private onUseCrystal: (size: CrystalSize, count: number) => void,
    private onAllocate: (key: AttributeKey) => void,
    private onEquipChange: () => void,
    private onUseSeaGem: (sea: 1 | 2) => void,
    private getShrineTargets: () => { id: string; island: string }[],
    private onTeleportShrine: (id: string) => void,
    private onLoadoutChange: () => void,
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
    if (this.visible) {
      this.teleportOpen = false;
      this.render();
    }
  }

  /** 背包開啟時重繪內容(數值變動後呼叫) */
  render(): void {
    if (!this.visible) return;
    this.gems.ensureSlots(); // 確保出戰主動寶石都有鍵位,鍵位列才顯示正確高亮
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

    // 能力分配:永遠顯示五維,沒點數時 +1 鈕變灰(仍可看到目前數值)
    const noPoints = s.points <= 0;
    const allocRows = (Object.keys(ATTR_META) as AttributeKey[])
      .map((key) => {
        const [icon, name] = ATTR_META[key];
        return `<div class="arow">
          <span title="${ATTR_LABEL[key]}">${icon} ${name} <span class="muted">${s.attrs[key]}</span></span>
          <button data-alloc="${key}" ${noPoints ? "disabled" : ""}>+1</button>
        </div>`;
      })
      .join("");

    const gemSlots: Array<[GemKey, string, string]> = [
      ["flame", "🔥", "焰心石"],
      ["wind", "🌪️", "風語石"],
      ["earth", "🪨", "地殼石"],
      ["frost", "❄️", "霜語晶"],
      ["tide", "🌊", "潮汐石"],
      ["void", "🌀", "虛空石"],
      ["lava", "🌋", "溶岩石"],
      ["aqua", "💧", "碧波石"],
      ["life", "🌿", "翠生石"],
    ];
    const gemFull = !this.gems.hasFreeSlot();
    const gemGrid = gemSlots
      .map(([key, icon, name]) => {
        const owned = this.gems.ownedOf(key);
        if (!owned)
          return `<div class="gem-slot off">${icon}<br/>${name}<br/><span class='muted'>未取得</span></div>`;
        const eq = this.gems.isEquipped(key);
        const disabled = !eq && gemFull;
        // 出戰中的主動寶石:列出 1–6 鍵位,目前綁定的高亮,點擊即指定/對調
        let keybinds = "";
        if (eq && isActiveGem(key)) {
          const cur = this.gems.slotOf(key);
          const btns = Array.from({ length: GEM_SLOT_COUNT }, (_, i) =>
            `<button class="kb ${cur === i ? "on" : ""}" data-bind="${key}" data-slot="${i}">${i + 1}</button>`,
          ).join("");
          keybinds = `<div class="keybinds">${btns}</div>`;
        }
        return `<div class="gem-slot ${eq ? "eq" : ""}">${icon}<br/>${name}<br/>
          <button class="gembtn ${eq ? "on" : ""}" data-gemtoggle="${key}" ${disabled ? "disabled" : ""}>${eq ? "✅ 出戰" : "裝備"}</button>${keybinds}</div>`;
      })
      .join("");

    const fruitSlots: Array<[FruitKey, string, string]> = [
      ["thunder", "⚡", "雷光果"],
      ["gravity", "🌀", "引力果"],
    ];
    const fruitFull = !this.fruits.hasFreeSlot();
    const fruitGrid = fruitSlots
      .map(([key, icon, name]) => {
        const owned = this.fruits.ownedOf(key);
        if (!owned)
          return `<div class="gem-slot off">${icon}<br/>${name}<br/><span class='muted'>未取得</span></div>`;
        const eq = this.fruits.isEquipped(key);
        const disabled = !eq && fruitFull;
        return `<div class="gem-slot ${eq ? "eq" : ""}">${icon}<br/>${name}<br/>
          <button class="gembtn ${eq ? "on" : ""}" data-fruittoggle="${key}" ${disabled ? "disabled" : ""}>${eq ? "✅ 出戰" : "裝備"}</button></div>`;
      })
      .join("");

    const seaGemRows: string[] = [];
    if (this.inventory.firstSeaGem)
      seaGemRows.push(`<div class="item">
        <span>🔱 第一海寶石 <span class="muted">(傳送至第一海・曙光嶼)</span></span>
        <button data-sea="1">使用</button>
      </div>`);
    if (this.inventory.secondSeaGem)
      seaGemRows.push(`<div class="item">
        <span>🌐 第二海寶石 <span class="muted">(傳送至第二海・港口鎮)</span></span>
        <button data-sea="2">使用</button>
      </div>`);

    const equipRows = this.equipment.owned
      .map((id) => {
        const def = equipDefOf(id);
        if (!def) return "";
        const slot = this.equipment.slotOf(id);
        const icon = EQUIP_ICON[id] ?? "🎽";
        return `<div class="item">
          <span><span class="eq-icon">${icon}</span>${slot ? "✅ " : ""}${def.name} <span class="muted">(${def.desc})</span></span>
          ${
            slot
              ? `<button data-unequip="${slot}">卸下</button>`
              : `<button data-equip="${id}">裝備</button>`
          }
        </div>`;
      })
      .join("");

    const expMax = s.expToNext();
    const expPct = expMax > 0 ? Math.min(100, Math.round((s.exp / expMax) * 100)) : 0;
    const importantRows = `${crystalRows}${seaGemRows.join("")}`;

    this.root.innerHTML = `
      <h3>背包</h3>
      <div class="top">
        <div class="portrait">
          <div class="model-stage"><div class="avatar">🧝</div></div>
          <div class="pname">海島旅人</div>
          <div class="plv">Lv.${s.level}</div>
          <div class="expbar"><i style="width:${expPct}%"></i></div>
          <div class="muted">EXP ${s.exp} / ${expMax}</div>
          <div class="pstats">⚔️ ${s.atk}　🛡️ ${s.def}<br/>❤️ ${s.maxHP}　✨ ${s.maxMP}</div>
        </div>
        <div class="alloc-box alloc">
          <h4>能力分配</h4>
          <div class="pts">可分配點數 <b>${s.points}</b></div>
          ${allocRows}
        </div>
      </div>
      <div class="section"><h3>裝備</h3>${equipRows || '<div class="muted">尚無裝備,去商人圓圓那裡看看吧</div>'}</div>
      <div class="section"><h3>靈紋寶石盤(出戰 ${this.gems.equipped.length}/${MAX_EQUIPPED_GEMS})</h3>
        <div class="muted" style="margin-bottom:6px;">點「裝備」選擇出戰寶石(只有出戰中的技能與被動才生效);出戰的主動寶石點下方數字 1–6 指定快捷鍵位</div>
        <div class="gems">${gemGrid}</div></div>
      <div class="section"><h3>靈樹果實(出戰 ${this.fruits.equipped.length}/${MAX_EQUIPPED_FRUITS})</h3><div class="gems">${fruitGrid}</div></div>
      <div class="section"><h3>重要道具</h3>${importantRows || '<div class="muted">尚無重要道具</div>'}</div>
      <div class="section"><h3>傳送</h3>${this.renderTeleport()}</div>
      <div class="muted">按 Tab 關閉</div>
    `;

    this.root.querySelectorAll<HTMLButtonElement>("button[data-use]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const size = btn.dataset.use as CrystalSize;
        this.onUseCrystal(size, Number(btn.dataset.count));
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-sea]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.onUseSeaGem(Number(btn.dataset.sea) === 2 ? 2 : 1);
      });
    });
    this.root.querySelector<HTMLButtonElement>("button[data-tp-open]")?.addEventListener("click", () => {
      this.teleportOpen = !this.teleportOpen;
      this.render();
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-tp]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.onTeleportShrine(btn.dataset.tp as string);
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
    this.root.querySelectorAll<HTMLButtonElement>("button[data-gemtoggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.gemtoggle as GemKey;
        if (this.gems.isEquipped(key)) this.gems.unequip(key);
        else this.gems.equip(key);
        this.onLoadoutChange();
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-bind]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.bind as GemKey;
        const slot = Number(btn.dataset.slot);
        this.gems.assignSlot(key, slot);
        this.onLoadoutChange();
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-fruittoggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.fruittoggle as FruitKey;
        if (this.fruits.isEquipped(key)) this.fruits.unequip(key);
        else this.fruits.equip(key);
        this.onLoadoutChange();
        this.render();
      });
    });
  }

  /** 底部傳送區:收合時一顆按鈕,點開列出已設置的重生點 */
  private renderTeleport(): string {
    if (!this.teleportOpen)
      return `<div class="item">
        <span class="muted">傳送到已設置的重生點</span>
        <button data-tp-open>選擇傳送點</button>
      </div>`;
    const targets = this.getShrineTargets();
    const rows =
      targets.length > 0
        ? targets
            .map(
              (t) => `<div class="item">
                <span>🗿 【${t.island}】重生點</span>
                <button data-tp="${t.id}">傳送</button>
              </div>`,
            )
            .join("")
        : `<div class="muted">尚未設置重生點(靠近島上的石碑按 F 設置)</div>`;
    return `${rows}<div class="item"><span></span><button data-tp-open>收合</button></div>`;
  }
}
