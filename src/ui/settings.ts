import type { AudioEngine } from "../core/audio";

const SETTINGS_KEY = "archipelago-settings-v1";

/** 玩家偏好設定(獨立於遊戲存檔) */
export interface GameSettings {
  /** 主音量 0–1 */
  volume: number;
  /** 背景音樂開關 */
  music: boolean;
  /** 死亡掉落部分未使用結晶(企劃書:可於設定中關閉) */
  deathDrop: boolean;
}

const DEFAULTS: GameSettings = { volume: 1, music: true, deathDrop: true };

/** 目前所在房間:?room=xxx,或 ?mp(向後相容 = lobby),否則單機(null) */
function currentRoom(): string | null {
  const p = new URLSearchParams(location.search);
  const r = p.get("room")?.trim();
  if (r) return r;
  if (p.has("mp")) return "lobby";
  return null;
}

/** 組出可分享的房間邀請連結 */
function roomLink(room: string): string {
  return `${location.origin}${location.pathname}?room=${encodeURIComponent(room)}`;
}

/** 產生一個簡短好分享的隨機房間名 */
function randomRoom(): string {
  return Math.random().toString(36).slice(2, 8);
}

function load(): GameSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<GameSettings>) };
  } catch {
    return { ...DEFAULTS };
  }
}

const SETTINGS_CSS = `
#settings { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 360px; background: rgba(10, 26, 42, 0.95); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 22px; display: none; z-index: 25; }
#settings.show { display: block; }
#settings h3 { margin: 0 0 14px; font-size: 18px; }
#settings .row { display: flex; align-items: center; justify-content: space-between; padding: 9px 0; font-size: 14px; }
#settings input[type="range"] { width: 150px; }
#settings input[type="checkbox"] { width: 18px; height: 18px; }
#settings .danger { margin-top: 14px; width: 100%; padding: 8px; border: none; border-radius: 8px; background: #b03030; color: #fff; cursor: pointer; font-size: 14px; }
#settings .muted { opacity: 0.6; font-size: 12px; margin-top: 10px; text-align: center; }
#settings hr { border: none; border-top: 1px solid rgba(255,255,255,0.12); margin: 12px 0; }
#settings .mp-btn { width: 100%; padding: 8px; border: none; border-radius: 8px; background: #2f6fb0; color: #fff; cursor: pointer; font-size: 14px; margin-top: 6px; }
#settings .mp-btn.ghost { background: rgba(255,255,255,0.12); }
#settings .mp-room { font-weight: 600; color: #7fd0ff; }
`;

/**
 * 設定選單(ESC 開關):音量、音樂、死亡掉落開關、重置存檔。
 * 設定即時生效並持久化到 localStorage(與遊戲存檔分開)。
 */
export class SettingsPanel {
  readonly settings: GameSettings;

  private root: HTMLElement;
  private visible = false;

  constructor(private audio: AudioEngine) {
    this.settings = load();

    const style = document.createElement("style");
    style.textContent = SETTINGS_CSS;
    document.head.appendChild(style);

    this.root = document.createElement("div");
    this.root.id = "settings";
    document.body.appendChild(this.root);
    this.render();
    this.apply();
  }

  get isOpen(): boolean {
    return this.visible;
  }

  toggle(): void {
    this.visible = !this.visible;
    this.root.classList.toggle("show", this.visible);
  }

  close(): void {
    this.visible = false;
    this.root.classList.remove("show");
  }

  /** 套用目前設定到音訊引擎 */
  private apply(): void {
    this.audio.setVolume(this.settings.volume);
    this.audio.setMusicEnabled(this.settings.music);
  }

  private persist(): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    } catch {
      // 寫入失敗忽略
    }
  }

  private render(): void {
    this.root.innerHTML = `
      <h3>設定</h3>
      <div class="row"><span>主音量</span><input id="set-vol" type="range" min="0" max="100" value="${Math.round(this.settings.volume * 100)}" /></div>
      <div class="row"><span>背景音樂</span><input id="set-music" type="checkbox" ${this.settings.music ? "checked" : ""} /></div>
      <div class="row"><span>死亡掉落結晶</span><input id="set-drop" type="checkbox" ${this.settings.deathDrop ? "checked" : ""} /></div>
      <hr />
      ${this.multiplayerSection()}
      <button class="danger" id="set-reset">重置存檔(從頭開始)</button>
      <div class="muted">按 ESC 關閉</div>
    `;
    this.wireMultiplayer();
    this.root.querySelector<HTMLInputElement>("#set-vol")?.addEventListener("input", (e) => {
      this.settings.volume = Number((e.target as HTMLInputElement).value) / 100;
      this.apply();
      this.persist();
    });
    this.root.querySelector<HTMLInputElement>("#set-music")?.addEventListener("change", (e) => {
      this.settings.music = (e.target as HTMLInputElement).checked;
      this.apply();
      this.persist();
    });
    this.root.querySelector<HTMLInputElement>("#set-drop")?.addEventListener("change", (e) => {
      this.settings.deathDrop = (e.target as HTMLInputElement).checked;
      this.persist();
    });
    this.root.querySelector<HTMLButtonElement>("#set-reset")?.addEventListener("click", () => {
      if (confirm("確定要刪除存檔、從頭開始嗎?")) {
        localStorage.removeItem("archipelago-save-v1");
        location.reload();
      }
    });
  }

  /** 多人房間區塊:單機時可建立房間,在房間時可複製邀請連結或離開 */
  private multiplayerSection(): string {
    const room = currentRoom();
    if (!room) {
      return `
        <div class="row"><span>多人房間</span><span>單機遊玩</span></div>
        <button class="mp-btn" id="set-mp-create">建立多人房間(產生邀請連結)</button>
        <div class="muted" id="set-mp-hint">建立後把網址列連結傳給家人朋友,即可進同一座群島</div>
      `;
    }
    const label = room === "lobby" ? "預設房間 lobby" : room;
    return `
      <div class="row"><span>多人房間</span><span class="mp-room">${label}</span></div>
      <button class="mp-btn" id="set-mp-copy">複製邀請連結</button>
      <button class="mp-btn ghost" id="set-mp-leave">離開房間(回單機)</button>
      <div class="muted" id="set-mp-hint">把連結傳給家人朋友,開同一條連結就會在同一間</div>
    `;
  }

  private wireMultiplayer(): void {
    this.root.querySelector<HTMLButtonElement>("#set-mp-create")?.addEventListener("click", () => {
      location.href = roomLink(randomRoom());
    });
    this.root.querySelector<HTMLButtonElement>("#set-mp-leave")?.addEventListener("click", () => {
      location.href = location.pathname; // 去掉查詢字串 = 回單機
    });
    this.root.querySelector<HTMLButtonElement>("#set-mp-copy")?.addEventListener("click", async () => {
      const room = currentRoom();
      if (!room) return;
      const link = roomLink(room);
      const hint = this.root.querySelector<HTMLElement>("#set-mp-hint");
      try {
        await navigator.clipboard.writeText(link);
        if (hint) hint.textContent = "已複製邀請連結!";
      } catch {
        // 無剪貼簿權限(如非安全環境):退而求其次,直接把連結秀出來讓玩家手動複製
        if (hint) hint.textContent = link;
      }
    });
  }
}
