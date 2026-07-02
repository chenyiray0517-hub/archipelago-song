// 群島之歌 — 客戶端連線層(第 2 階段:房間系統)
//
// 設計原則:**連得上就多人,連不上就單機**。
// 連線失敗、伺服器沒開、半路斷線,一律靜默處理,絕不影響單機遊玩
// (這也讓沒開伺服器的 smoke 測試照常全綠)。
// 連線時把房間名(?room=xxx)帶進伺服器 URL,只與同房間的人互通。

/** 一名玩家同步出去的狀態(第 1 階段只同步外觀所需的最小集合) */
export interface NetState {
  /** 位置 */
  x: number;
  y: number;
  z: number;
  /** 面向(弧度,繞 Y 軸) */
  facing: number;
  /** 是否正在移動(決定遠端 avatar 播走路或待機) */
  moving: boolean;
  /** 動作位元旗標(階段 4a):1 攻擊 / 2 舉盾 / 4 騰空 / 8 受擊(舊封包缺省以 0 處理) */
  act?: number;
  /** 是否已倒下(階段 4c):房主據此略過鎖定,遠端 avatar 播倒地/站起 */
  dead?: boolean;
  /** 角色外觀 id(playerModel.CHARACTERS):遠端據此載入/切換 VRM;缺省(舊版)維持程序化勇者 */
  char?: string;
}

/** 伺服器 → 客戶端訊息 */
type ServerMsg =
  | { t: "welcome"; id: string; room: string; host: string; others: { id: string; state: NetState }[] }
  | { t: "join"; id: string }
  | { t: "state"; id: string; state: NetState }
  | { t: "leave"; id: string }
  /** 房主指派/移交(階段 3a) */
  | { t: "host"; id: string }
  /** 房主廣播的敵人快照:扁平陣列 [x,y,z,yaw,dead,hp]×敵人數(階段 3a) */
  | { t: "enemies"; id: string; e: number[] }
  /** 客戶端→房主的傷害請求(階段 3a;id = 送出傷害的客戶端) */
  | { t: "hit"; id: string; i: number; dmg: number }
  /** 房主→客戶端:敵人 i 被 by 補刀擊殺,該客戶端在自己世界結算掉落(階段 3b) */
  | { t: "kill"; id: string; i: number; by: string }
  /** 房主→指定客戶端:敵人對該玩家造成傷害(突進/頭目技);to 指定承受者(階段 3b) */
  | { t: "pdmg"; id: string; to: string; dmg: number; sx: number; sy: number; sz: number; knock: number; eff: string }
  /** 客戶端→房主:對敵人 i 施加控場(冰凍/灼燒/麻痺),由房主權威套用(階段 3b) */
  | { t: "cc"; id: string; i: number; kind: "freeze" | "burn" | "stun"; sec: number; dps: number }
  /** 房間聊天訊息(廣播給同房間;id = 發話者)(階段 4b) */
  | { t: "chat"; id: string; text: string }
  /** 伺服器心跳(階段 5a):客戶端據此判斷連線是否仍存活 */
  | { t: "ping" };

export interface NetCallbacks {
  /** 收到別人的最新狀態(第一次收到即代表該玩家出現) */
  onState(id: string, state: NetState): void;
  /** 某玩家離線 */
  onLeave(id: string): void;
  /** 連線狀態變化(供 HUD 顯示「已連線/單機」) */
  onStatus?(connected: boolean): void;
  /** 房主身分變化(連上/移交時觸發;true = 本機是房主)(階段 3a) */
  onHostChange?(isHost: boolean): void;
  /** 房主送來的敵人快照(僅客戶端會收到)(階段 3a) */
  onEnemies?(e: number[]): void;
  /** 客戶端送來的傷害請求(僅房主需處理);by = 送出傷害的客戶端 id(階段 3a/3b) */
  onHit?(i: number, dmg: number, by: string): void;
  /** 房主宣告擊殺歸屬:敵人 i 由 by 補刀;by===本機則自行結算掉落(階段 3b) */
  onKill?(i: number, by: string): void;
  /** 敵人對本機玩家造成傷害(僅被指定的客戶端會收到;net 已過濾 to===本機)(階段 3b) */
  onPlayerDamage?(dmg: number, sx: number, sy: number, sz: number, knock: number, eff: string): void;
  /** 客戶端送來的控場請求(僅房主需處理)(階段 3b) */
  onCc?(i: number, kind: "freeze" | "burn" | "stun", sec: number, dps: number): void;
  /** 收到同房間聊天訊息(id = 發話者,非本機)(階段 4b) */
  onChat?(id: string, text: string): void;
  /** 重連狀態變化(階段 5a):active=true 表示斷線後正在嘗試重連 */
  onReconnecting?(active: boolean): void;
}

/** 伺服器位址:正式環境用建置時注入的 VITE_SERVER_URL,開發走本機 8787;房間名併入 ?room= */
function serverUrl(room: string): string {
  const injected = import.meta.env.VITE_SERVER_URL as string | undefined;
  const base = injected ?? `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.hostname}:8787`;
  const url = new URL(base);
  url.searchParams.set("room", room);
  return url.toString();
}

/** 重連退避(階段 5a):800ms 起,每次 ×2,上限 8s */
const RECONNECT_BASE_MS = 800;
const RECONNECT_MAX_MS = 8000;
/** 心跳看門狗:每 3s 檢查一次;超過 12s 沒收到任何訊息即視為半死連線,主動斷線重連 */
const WATCHDOG_INTERVAL_MS = 3000;
const WATCHDOG_TIMEOUT_MS = 12000;

export class NetClient {
  private ws: WebSocket | null = null;
  private cb: NetCallbacks;
  /** 本機玩家在伺服器上的 id(連線後才有) */
  localId: string | null = null;
  /** 本機所在(嘗試加入)的房間;connect 時記下,welcome 回來以伺服器為準 */
  room: string | null = null;
  /** 目前房主的 id(由伺服器指派/移交);與 localId 相同即本機為房主 */
  hostId: string | null = null;

  // ── 斷線重連(階段 5a)────────────────────────────────────
  /** 是否「想要」維持連線(connect 後為 true;手動 leave 設 false 即不再重連) */
  private wantConnect = false;
  /** 目前是否處於重連中(斷線後到重新連上之間) */
  reconnecting = false;
  private reconnectAttempts = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  /** 最後收到伺服器訊息的時間(心跳看門狗用) */
  private lastRecvAt = 0;
  private watchdogTimer: ReturnType<typeof setInterval> | null = null;

  constructor(cb: NetCallbacks) {
    this.cb = cb;
  }

  get connected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

  /** 本機是否為房主(連線且 hostId === localId) */
  get isHost(): boolean {
    return this.connected && this.hostId !== null && this.hostId === this.localId;
  }

  /** 嘗試連線到指定房間(連得上就多人、連不上就單機;斷線會自動重連)。 */
  connect(room: string): void {
    this.room = room;
    this.wantConnect = true;
    this.reconnectAttempts = 0;
    this.openSocket();
  }

  /** 手動離開房間:停止重連並關閉連線(供「離開房間」用) */
  leave(): void {
    this.wantConnect = false;
    this.reconnecting = false;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    this.reconnectTimer = null;
    this.stopWatchdog();
    const ws = this.ws;
    this.ws = null;
    this.localId = null;
    this.hostId = null;
    ws?.close();
  }

  /** 測試掛鉤:強制斷開目前連線(模擬網路中斷,驗證自動重連) */
  _debugDrop(): void {
    this.ws?.close();
  }

  /** 建立(或重建)WebSocket 連線並掛上所有處理器 */
  private openSocket(): void {
    let ws: WebSocket;
    try {
      ws = new WebSocket(serverUrl(this.room ?? "lobby"));
    } catch (err) {
      console.warn("[net] 無法建立連線,稍後重試:", err);
      this.scheduleReconnect();
      return;
    }
    this.ws = ws;

    ws.addEventListener("open", () => {
      this.reconnectAttempts = 0;
      this.lastRecvAt = Date.now();
      this.startWatchdog();
      if (this.reconnecting) {
        this.reconnecting = false;
        this.cb.onReconnecting?.(false);
      }
      this.cb.onStatus?.(true);
    });

    ws.addEventListener("message", (ev) => {
      this.lastRecvAt = Date.now();
      let msg: ServerMsg;
      try {
        msg = JSON.parse(ev.data as string) as ServerMsg;
      } catch {
        return;
      }
      switch (msg.t) {
        case "ping":
          break; // 心跳:收到即更新 lastRecvAt(上方已做),無需其他動作
        case "welcome":
          this.localId = msg.id;
          this.room = msg.room;
          this.hostId = msg.host;
          for (const o of msg.others) this.cb.onState(o.id, o.state);
          this.cb.onHostChange?.(this.isHost);
          break;
        case "state":
          this.cb.onState(msg.id, msg.state);
          break;
        case "join":
          // 對方尚未送出狀態,等其第一個 state 封包才畫得出來;此處不需動作
          break;
        case "leave":
          this.cb.onLeave(msg.id);
          break;
        case "host":
          this.hostId = msg.id;
          this.cb.onHostChange?.(this.isHost);
          break;
        case "enemies":
          this.cb.onEnemies?.(msg.e);
          break;
        case "hit":
          this.cb.onHit?.(msg.i, msg.dmg, msg.id);
          break;
        case "kill":
          this.cb.onKill?.(msg.i, msg.by);
          break;
        case "pdmg":
          // 只有被指定的承受者才套用(房主廣播,其餘客戶端忽略)
          if (msg.to === this.localId) this.cb.onPlayerDamage?.(msg.dmg, msg.sx, msg.sy, msg.sz, msg.knock, msg.eff);
          break;
        case "cc":
          this.cb.onCc?.(msg.i, msg.kind, msg.sec, msg.dps);
          break;
        case "chat":
          this.cb.onChat?.(msg.id, msg.text);
          break;
      }
    });

    const down = () => {
      if (this.ws !== ws) return;
      this.ws = null;
      this.localId = null;
      this.hostId = null;
      this.stopWatchdog();
      this.cb.onStatus?.(false);
      this.cb.onHostChange?.(false);
      // 仍想連線(非手動離開)→ 退避重連
      if (this.wantConnect) this.scheduleReconnect();
    };
    ws.addEventListener("close", down);
    ws.addEventListener("error", down);
  }

  /** 退避排程下一次重連(指數退避 + 抖動,進入重連狀態) */
  private scheduleReconnect(): void {
    if (!this.wantConnect || this.reconnectTimer) return;
    if (!this.reconnecting) {
      this.reconnecting = true;
      this.cb.onReconnecting?.(true);
    }
    const delay = Math.min(RECONNECT_BASE_MS * 2 ** this.reconnectAttempts, RECONNECT_MAX_MS);
    this.reconnectAttempts++;
    const jitter = Math.random() * 0.3 * delay;
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      if (this.wantConnect) this.openSocket();
    }, delay + jitter);
  }

  /** 心跳看門狗:定期檢查是否太久沒收到伺服器訊息,半死連線就主動斷開觸發重連 */
  private startWatchdog(): void {
    this.stopWatchdog();
    this.watchdogTimer = setInterval(() => {
      if (this.connected && Date.now() - this.lastRecvAt > WATCHDOG_TIMEOUT_MS) {
        // 連線看似還開著但久無訊息(半死)→ 主動關閉,close 事件會走重連
        this.ws?.close();
      }
    }, WATCHDOG_INTERVAL_MS);
  }

  private stopWatchdog(): void {
    if (this.watchdogTimer) clearInterval(this.watchdogTimer);
    this.watchdogTimer = null;
  }

  /** 送出本機玩家狀態(未連線時靜默忽略) */
  sendState(state: NetState): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "state", state }));
  }

  /** 房主廣播敵人快照(扁平陣列 [x,y,z,yaw,dead,hp]×敵人數)(階段 3a) */
  sendEnemies(e: number[]): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "enemies", e }));
  }

  /** 客戶端送傷害請求給房主(階段 3a) */
  sendHit(i: number, dmg: number): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "hit", i, dmg }));
  }

  /** 房主廣播擊殺歸屬給同房間(by = 補刀的客戶端 id)(階段 3b) */
  sendKill(i: number, by: string): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "kill", i, by }));
  }

  /** 房主送傷害給指定客戶端(to);sx/sy/sz = 傷害來源座標,knock = 擊退力道,eff = 附加狀態(階段 3b) */
  sendPlayerDamage(to: string, dmg: number, sx: number, sy: number, sz: number, knock: number, eff: string): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "pdmg", to, dmg, sx, sy, sz, knock, eff }));
  }

  /** 客戶端送控場請求給房主(冰凍/灼燒/麻痺);sec=秒數,dps=灼燒每秒傷害(其餘為 0)(階段 3b) */
  sendCc(i: number, kind: "freeze" | "burn" | "stun", sec: number, dps: number): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "cc", i, kind, sec, dps }));
  }

  /** 送出聊天訊息給同房間(階段 4b) */
  sendChat(text: string): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "chat", text }));
  }
}
