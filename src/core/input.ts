/**
 * 鍵盤與滑鼠輸入狀態。每幀結束需呼叫 endFrame() 清除單幀事件。
 */
export class Input {
  private keys = new Set<string>();
  private justPressed = new Set<string>();
  private leftReleased = false;

  /** 左鍵是否按住(用於集氣) */
  leftDown = false;
  /** 右鍵是否按住(用於鏡頭環繞) */
  rightDown = false;
  /** 本幀滑鼠位移 */
  dx = 0;
  dy = 0;
  /** 本幀滾輪位移 */
  wheel = 0;

  constructor(target: HTMLElement) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Tab") e.preventDefault();
      if (!this.keys.has(e.code)) this.justPressed.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener("keyup", (e) => this.keys.delete(e.code));

    target.addEventListener("contextmenu", (e) => e.preventDefault());
    target.addEventListener("mousedown", (e) => {
      if (e.button === 0) this.leftDown = true;
      if (e.button === 2) this.rightDown = true;
    });
    window.addEventListener("mouseup", (e) => {
      if (e.button === 0) {
        if (this.leftDown) this.leftReleased = true;
        this.leftDown = false;
      }
      if (e.button === 2) this.rightDown = false;
    });
    window.addEventListener("mousemove", (e) => {
      this.dx += e.movementX;
      this.dy += e.movementY;
    });
    target.addEventListener("wheel", (e) => {
      this.wheel += e.deltaY;
    });
  }

  /** 按鍵是否按住中 */
  isDown(code: string): boolean {
    return this.keys.has(code);
  }

  /** 按鍵是否在本幀剛按下 */
  wasPressed(code: string): boolean {
    return this.justPressed.has(code);
  }

  /** 取出一次左鍵放開事件(有則回傳 true 並消耗) */
  consumeLeftRelease(): boolean {
    if (this.leftReleased) {
      this.leftReleased = false;
      return true;
    }
    return false;
  }

  /** 清除單幀事件,於遊戲迴圈尾端呼叫 */
  endFrame(): void {
    this.justPressed.clear();
    this.dx = 0;
    this.dy = 0;
    this.wheel = 0;
    this.leftReleased = false;
  }
}
