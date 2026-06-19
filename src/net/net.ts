// 群島之歌 — 客戶端連線層(第 1 階段:看得到彼此)
//
// 設計原則:**連得上就多人,連不上就單機**。
// 連線失敗、伺服器沒開、半路斷線,一律靜默處理,絕不影響單機遊玩
// (這也讓沒開伺服器的 smoke 測試照常全綠)。

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
}

/** 伺服器 → 客戶端訊息 */
type ServerMsg =
  | { t: "welcome"; id: string; others: { id: string; state: NetState }[] }
  | { t: "join"; id: string }
  | { t: "state"; id: string; state: NetState }
  | { t: "leave"; id: string };

export interface NetCallbacks {
  /** 收到別人的最新狀態(第一次收到即代表該玩家出現) */
  onState(id: string, state: NetState): void;
  /** 某玩家離線 */
  onLeave(id: string): void;
  /** 連線狀態變化(供 HUD 顯示「已連線/單機」) */
  onStatus?(connected: boolean): void;
}

/** 伺服器位址:正式環境用建置時注入的 VITE_SERVER_URL,開發走本機 8787 */
function serverUrl(): string {
  const injected = import.meta.env.VITE_SERVER_URL as string | undefined;
  if (injected) return injected;
  const proto = location.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${location.hostname}:8787`;
}

export class NetClient {
  private ws: WebSocket | null = null;
  private cb: NetCallbacks;
  /** 本機玩家在伺服器上的 id(連線後才有) */
  localId: string | null = null;

  constructor(cb: NetCallbacks) {
    this.cb = cb;
  }

  get connected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

  /** 嘗試連線。失敗只記 warning,不丟例外、不影響呼叫端。 */
  connect(): void {
    let ws: WebSocket;
    try {
      ws = new WebSocket(serverUrl());
    } catch (err) {
      console.warn("[net] 無法建立連線,維持單機:", err);
      return;
    }
    this.ws = ws;

    ws.addEventListener("open", () => {
      this.cb.onStatus?.(true);
    });

    ws.addEventListener("message", (ev) => {
      let msg: ServerMsg;
      try {
        msg = JSON.parse(ev.data as string) as ServerMsg;
      } catch {
        return;
      }
      switch (msg.t) {
        case "welcome":
          this.localId = msg.id;
          for (const o of msg.others) this.cb.onState(o.id, o.state);
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
      }
    });

    const down = () => {
      if (this.ws !== ws) return;
      this.ws = null;
      this.localId = null;
      this.cb.onStatus?.(false);
    };
    ws.addEventListener("close", down);
    ws.addEventListener("error", down);
  }

  /** 送出本機玩家狀態(未連線時靜默忽略) */
  sendState(state: NetState): void {
    if (!this.connected) return;
    this.ws!.send(JSON.stringify({ t: "state", state }));
  }
}
