const DIALOG_CSS = `
#dialog { position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%); width: min(620px, 86vw); background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 14px 20px 12px; display: none; z-index: 20; }
#dialog.show { display: block; }
#dialog .name { display: inline-block; background: #3a6fd8; border-radius: 6px; padding: 2px 10px; font-size: 13px; margin-bottom: 8px; }
#dialog .text { font-size: 16px; line-height: 1.7; min-height: 3em; }
#dialog .next { text-align: right; font-size: 12px; opacity: 0.7; }
`;

/**
 * 對話框:逐句顯示 NPC 台詞,F 鍵或點擊推進,結束自動關閉。
 */
export class DialogBox {
  private root: HTMLElement;
  private nameEl: HTMLElement;
  private textEl: HTMLElement;
  private lines: string[] = [];
  private index = 0;
  private visible = false;

  constructor() {
    const style = document.createElement("style");
    style.textContent = DIALOG_CSS;
    document.head.appendChild(style);

    this.root = document.createElement("div");
    this.root.id = "dialog";
    this.root.innerHTML = `
      <div class="name"></div>
      <div class="text"></div>
      <div class="next">F 或點擊 繼續 ▸</div>
    `;
    document.body.appendChild(this.root);
    this.nameEl = this.root.querySelector(".name") as HTMLElement;
    this.textEl = this.root.querySelector(".text") as HTMLElement;
    this.root.addEventListener("click", () => this.advance());
  }

  get isOpen(): boolean {
    return this.visible;
  }

  /** 開啟對話 */
  open(name: string, lines: string[]): void {
    if (lines.length === 0) return;
    this.lines = lines;
    this.index = 0;
    this.visible = true;
    this.nameEl.textContent = name;
    this.textEl.textContent = lines[0];
    this.root.classList.add("show");
  }

  /** 推進到下一句,最後一句後關閉 */
  advance(): void {
    if (!this.visible) return;
    this.index++;
    if (this.index >= this.lines.length) {
      this.close();
      return;
    }
    this.textEl.textContent = this.lines[this.index];
  }

  close(): void {
    this.visible = false;
    this.root.classList.remove("show");
  }
}
