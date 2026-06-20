// 群島之歌 — 房間聊天(階段 4b)
//
// 全 DOM(與其他 UI 一致)。Enter 開啟輸入、再次 Enter 送出、Esc 取消。
// 打字期間由 main 設定 input.suspended 讓鍵盤不觸發遊戲動作。
// 訊息只在本機顯示(伺服器純轉發),自己送出的訊息由 main 端一併本機回顯。

const MAX_LINES = 8;
const FADE_MS = 9000;
const MAX_LEN = 200;

function hex(color: number): string {
  return "#" + color.toString(16).padStart(6, "0");
}

export class Chat {
  private log: HTMLDivElement;
  private input: HTMLInputElement;
  /** 是否正在打字(供 main 暫停遊戲鍵盤輸入) */
  isTyping = false;

  constructor(private onSend: (text: string) => void) {
    const style = document.createElement("style");
    style.textContent = `
      #chat { position: fixed; left: 12px; bottom: 92px; width: 340px; z-index: 50;
        font: 13px/1.4 system-ui, sans-serif; pointer-events: none; }
      #chat-log { display: flex; flex-direction: column; gap: 2px; margin-bottom: 6px; }
      #chat-log .line { background: rgba(0,0,0,0.42); color: #f4f4f4; padding: 2px 8px;
        border-radius: 8px; width: fit-content; max-width: 100%; word-break: break-word;
        transition: opacity 0.6s; text-shadow: 0 1px 2px rgba(0,0,0,0.8); }
      #chat-log .line .who { font-weight: 700; margin-right: 6px; }
      #chat-input { display: none; width: 100%; box-sizing: border-box; pointer-events: auto;
        background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.35); border-radius: 8px;
        color: #fff; padding: 6px 10px; font: 14px system-ui, sans-serif; outline: none; }
      #chat-input.show { display: block; }
    `;
    document.head.appendChild(style);

    const root = document.createElement("div");
    root.id = "chat";
    root.innerHTML = `<div id="chat-log"></div><input id="chat-input" maxlength="${MAX_LEN}" placeholder="輸入訊息…Enter 送出、Esc 取消" />`;
    document.body.appendChild(root);

    this.log = root.querySelector("#chat-log") as HTMLDivElement;
    this.input = root.querySelector("#chat-input") as HTMLInputElement;

    this.input.addEventListener("keydown", (e) => {
      e.stopPropagation();
      if (e.key === "Enter") {
        const text = this.input.value.trim().slice(0, MAX_LEN);
        if (text) this.onSend(text);
        this.stopTyping();
      } else if (e.key === "Escape") {
        this.stopTyping();
      }
    });
  }

  /** 開始打字:顯示並聚焦輸入框 */
  startTyping(): void {
    this.isTyping = true;
    this.input.classList.add("show");
    this.input.value = "";
    this.input.focus();
  }

  /** 結束打字:隱藏輸入框 */
  stopTyping(): void {
    this.isTyping = false;
    this.input.classList.remove("show");
    this.input.value = "";
    this.input.blur();
  }

  /** 顯示一則訊息(who = 發話者名,color = 名字顏色) */
  push(who: string, text: string, color: number): void {
    const line = document.createElement("div");
    line.className = "line";
    const whoEl = document.createElement("span");
    whoEl.className = "who";
    whoEl.style.color = hex(color);
    whoEl.textContent = who;
    const textEl = document.createElement("span");
    textEl.textContent = text;
    line.append(whoEl, textEl);
    this.log.appendChild(line);

    while (this.log.childElementCount > MAX_LINES) {
      this.log.firstElementChild?.remove();
    }
    // 淡出後移除(打字中暫留所有訊息較不打擾;此處仍統一淡出)
    setTimeout(() => {
      line.style.opacity = "0";
      setTimeout(() => line.remove(), 600);
    }, FADE_MS);
  }
}
