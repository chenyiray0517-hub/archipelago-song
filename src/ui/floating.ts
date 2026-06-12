import * as THREE from "three";

const FLOAT_CSS = `
.float-dmg { position: fixed; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; font-weight: 800; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.7); transform: translate(-50%, -50%); z-index: 6; }
#pickup-feed { position: fixed; top: 30%; left: 50%; transform: translateX(-50%); pointer-events: none; text-align: center; z-index: 6; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; }
#pickup-feed div { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 2px 5px rgba(0,0,0,0.7); margin-top: 4px; opacity: 0; animation: feed-in 1.6s ease-out forwards; }
@keyframes feed-in { 0% { opacity: 0; transform: translateY(8px); } 12% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }
`;

interface FloatItem {
  el: HTMLDivElement;
  pos: THREE.Vector3;
  life: number;
}

const FLOAT_LIFE = 0.9;

/**
 * 3D 錨定的浮動傷害數字:每幀把世界座標投影到螢幕,上飄淡出。
 */
export class FloatingTextManager {
  /** 累計生成數(測試用) */
  totalSpawned = 0;

  private items: FloatItem[] = [];

  constructor() {
    const style = document.createElement("style");
    style.textContent = FLOAT_CSS;
    document.head.appendChild(style);
  }

  /** 在世界座標上方跳出文字 */
  spawn(worldPos: THREE.Vector3, text: string, color: string): void {
    const el = document.createElement("div");
    el.className = "float-dmg";
    el.textContent = text;
    el.style.color = color;
    document.body.appendChild(el);
    this.items.push({ el, pos: worldPos.clone(), life: FLOAT_LIFE });
    this.totalSpawned++;
  }

  /** 每幀更新:投影 + 上飄 + 淡出 */
  update(dt: number, camera: THREE.Camera): void {
    this.items = this.items.filter((item) => {
      item.life -= dt;
      if (item.life <= 0) {
        item.el.remove();
        return false;
      }
      item.pos.y += dt * 1.6;
      const projected = item.pos.clone().project(camera);
      if (projected.z > 1) {
        item.el.style.display = "none";
        return true;
      }
      item.el.style.display = "block";
      item.el.style.left = `${(projected.x * 0.5 + 0.5) * window.innerWidth}px`;
      item.el.style.top = `${(-projected.y * 0.5 + 0.5) * window.innerHeight}px`;
      item.el.style.opacity = String(Math.min(item.life / 0.35, 1));
      return true;
    });
  }
}

/**
 * 撿取提示串流:畫面中央偏上逐行跳出「獲得 ×××」,自動淡出。
 */
export class PickupFeed {
  /** 累計生成數(測試用) */
  totalSpawned = 0;

  private root: HTMLElement;

  constructor() {
    this.root = document.createElement("div");
    this.root.id = "pickup-feed";
    document.body.appendChild(this.root);
  }

  /** 顯示一行撿取提示 */
  push(text: string): void {
    const el = document.createElement("div");
    el.textContent = text;
    this.root.appendChild(el);
    this.totalSpawned++;
    setTimeout(() => el.remove(), 1700);
    // 保持最多 5 行
    while (this.root.children.length > 5) this.root.firstChild?.remove();
  }
}
