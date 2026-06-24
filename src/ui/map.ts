import { ISLANDS, seaOf, islandAt } from "../world/terrain";

// 群島地圖:按 M 開關的全螢幕覆蓋層。畫出玩家「目前所在海域」各島嶼的相對位置
// (上=北/−Z,右=東/+X),標出玩家位置與目前所在島嶼;右側列出該海域島名圖例。
// 兩海相距甚遠(第一海 x≈0、第二海 x≈2000),同框會各擠成一團,故只畫當前海域。

const MAP_CSS = `
#map { position: fixed; inset: 0; display: none; align-items: center; justify-content: center;
  background: rgba(6, 16, 28, 0.78); z-index: 50; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; color: #eaf4ff; }
#map.show { display: flex; }
#map .frame { background: rgba(10, 26, 42, 0.92); border: 1px solid rgba(120, 190, 240, 0.4);
  border-radius: 14px; padding: 18px 20px; display: flex; gap: 18px; box-shadow: 0 12px 40px rgba(0,0,0,0.5); }
#map .left { display: flex; flex-direction: column; gap: 10px; }
#map .head { display: flex; justify-content: space-between; align-items: baseline; }
#map .head .t { font-size: 20px; font-weight: 800; letter-spacing: 3px; }
#map .head .sea { font-size: 13px; opacity: 0.8; }
#map canvas { background: linear-gradient(160deg, #14385c, #0e2740); border-radius: 10px; display: block; }
#map .foot { font-size: 12px; opacity: 0.7; text-align: center; }
#map .legend { min-width: 150px; display: flex; flex-direction: column; gap: 6px; padding-top: 30px; }
#map .legend .lg-t { font-size: 13px; font-weight: 700; opacity: 0.8; margin-bottom: 2px; }
#map .legend .item { font-size: 14px; display: flex; align-items: center; gap: 8px; opacity: 0.92; }
#map .legend .item.here { color: #ffd24a; font-weight: 700; }
#map .legend .dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.6); flex: 0 0 auto; }
`;

const W = 460;
const H = 460;

export class MapOverlay {
  private root: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private seaLabel: HTMLElement;
  private legend: HTMLElement;
  isOpen = false;

  constructor() {
    const style = document.createElement("style");
    style.textContent = MAP_CSS;
    document.head.appendChild(style);

    this.root = document.createElement("div");
    this.root.id = "map";
    this.root.innerHTML = `
      <div class="frame">
        <div class="left">
          <div class="head"><span class="t">群島地圖</span><span class="sea" id="map-sea"></span></div>
          <canvas id="map-canvas" width="${W}" height="${H}"></canvas>
          <div class="foot">上 = 北　按 M 關閉</div>
        </div>
        <div class="legend"><div class="lg-t">島嶼</div><div id="map-legend"></div></div>
      </div>`;
    document.body.appendChild(this.root);

    this.canvas = this.root.querySelector("#map-canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.seaLabel = this.root.querySelector("#map-sea") as HTMLElement;
    this.legend = this.root.querySelector("#map-legend") as HTMLElement;
  }

  /** 切換開關,回傳切換後是否開啟 */
  toggle(): boolean {
    this.isOpen = !this.isOpen;
    this.root.classList.toggle("show", this.isOpen);
    return this.isOpen;
  }

  close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.root.classList.remove("show");
  }

  /** 開啟時每幀呼叫:依玩家世界座標重繪當前海域島嶼相對位置與玩家標記 */
  render(px: number, pz: number): void {
    if (!this.isOpen) return;
    const sea = seaOf(px);
    const isls = ISLANDS.filter((i) => seaOf(i.x) === sea);
    const here = islandAt(px, pz);
    this.seaLabel.textContent = sea === 2 ? "第二海" : "第一海";

    // 以島嶼(含半徑)與玩家點求世界邊界,等比縮放置中到畫布
    const pad = 46;
    const minX = Math.min(px, ...isls.map((i) => i.x - i.r));
    const maxX = Math.max(px, ...isls.map((i) => i.x + i.r));
    const minZ = Math.min(pz, ...isls.map((i) => i.z - i.r));
    const maxZ = Math.max(pz, ...isls.map((i) => i.z + i.r));
    const worldW = maxX - minX || 1;
    const worldH = maxZ - minZ || 1;
    const s = Math.min((W - 2 * pad) / worldW, (H - 2 * pad) / worldH);
    const offX = (W - worldW * s) / 2 - minX * s;
    const offZ = (H - worldH * s) / 2 - minZ * s;
    const toX = (x: number) => x * s + offX;
    const toY = (z: number) => z * s + offZ;

    const ctx = this.ctx;
    ctx.clearRect(0, 0, W, H);

    for (const isl of isls) {
      const cx = toX(isl.x);
      const cy = toY(isl.z);
      const rr = Math.max(6, isl.r * s);
      const current = here === isl;
      // 島身(沙岸暈 + 草色填充)
      ctx.beginPath();
      ctx.arc(cx, cy, rr, 0, Math.PI * 2);
      ctx.fillStyle = `#${isl.grass.toString(16).padStart(6, "0")}`;
      ctx.globalAlpha = 0.92;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.lineWidth = current ? 3 : 1.5;
      ctx.strokeStyle = current ? "#ffd24a" : "rgba(255,255,255,0.7)";
      ctx.stroke();
      // 島名
      ctx.fillStyle = current ? "#ffe9a8" : "#eaf4ff";
      ctx.font = `${current ? "bold " : ""}13px "PingFang TC", sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(isl.name, cx, cy + rr + 14);
    }

    // 玩家標記:紅點 + 白圈
    const px2 = toX(px);
    const pz2 = toY(pz);
    ctx.beginPath();
    ctx.arc( px2, pz2, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#ff4d4d";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#fff";
    ctx.stroke();

    // 右側名稱圖例(目前島嶼標金高亮)
    this.legend.innerHTML = isls
      .map((isl) => {
        const cls = here === isl ? "item here" : "item";
        const color = `#${isl.grass.toString(16).padStart(6, "0")}`;
        const mark = here === isl ? "📍 " : "";
        return `<div class="${cls}"><span class="dot" style="background:${color}"></span>${mark}${isl.name}</div>`;
      })
      .join("");
  }
}
