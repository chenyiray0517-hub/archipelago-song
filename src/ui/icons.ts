/**
 * 程式繪製的物品圖示庫:每件裝備/寶石/果實一張專屬圖案(取代 emoji)。
 * 零外部資產:全部用 canvas 2D 畫在 48×48、轉 data URL 快取;
 * 風格對齊遊戲 cel-shading——平塗色塊 + 深色描邊 + 亮暗切面。
 */

type Ctx = CanvasRenderingContext2D;
type Pt = readonly [number, number];

const SIZE = 48;
const OUT = "#262a3a"; // 描邊色(同 toon 描邊的深藍黑)
const LINE = 3;

// ── 基礎繪圖工具 ──────────────────────────────────────────────

function tracePath(c: Ctx, pts: readonly Pt[]): void {
  c.beginPath();
  c.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]);
  c.closePath();
}

/** 填色 + 描邊的多邊形 */
function poly(c: Ctx, pts: readonly Pt[], fill: string): void {
  tracePath(c, pts);
  c.fillStyle = fill;
  c.fill();
  c.stroke();
}

/** 只填色不描邊(切面亮暗用) */
function facet(c: Ctx, pts: readonly Pt[], fill: string): void {
  tracePath(c, pts);
  c.fillStyle = fill;
  c.fill();
}

function circ(c: Ctx, x: number, y: number, r: number, fill: string, stroke = true): void {
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
  c.fillStyle = fill;
  c.fill();
  if (stroke) c.stroke();
}

function seg(c: Ctx, x1: number, y1: number, x2: number, y2: number, color: string, w: number): void {
  c.save();
  c.strokeStyle = color;
  c.lineWidth = w;
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
  c.restore();
}

/** 四芒星(星芒/星核用) */
function star4(c: Ctx, x: number, y: number, r: number, fill: string, stroke = false): void {
  const w = r * 0.32;
  c.beginPath();
  c.moveTo(x, y - r);
  c.quadraticCurveTo(x + w * 0.4, y - w * 0.4, x + r, y);
  c.quadraticCurveTo(x + w * 0.4, y + w * 0.4, x, y + r);
  c.quadraticCurveTo(x - w * 0.4, y + w * 0.4, x - r, y);
  c.quadraticCurveTo(x - w * 0.4, y - w * 0.4, x, y - r);
  c.closePath();
  c.fillStyle = fill;
  c.fill();
  if (stroke) c.stroke();
}

/** 弦月 */
function crescent(c: Ctx, x: number, y: number, r: number, fill: string): void {
  c.save();
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
  c.fillStyle = fill;
  c.fill();
  c.globalCompositeOperation = "destination-out";
  c.beginPath();
  c.arc(x + r * 0.55, y - r * 0.25, r * 0.85, 0, Math.PI * 2);
  c.fill();
  c.restore();
}

/** 波浪線(潮汐/海寶石用) */
function waveLine(c: Ctx, x: number, y: number, w: number, color: string, lw: number): void {
  c.save();
  c.strokeStyle = color;
  c.lineWidth = lw;
  c.beginPath();
  c.moveTo(x, y);
  c.quadraticCurveTo(x + w * 0.25, y - w * 0.22, x + w * 0.5, y);
  c.quadraticCurveTo(x + w * 0.75, y + w * 0.22, x + w, y);
  c.stroke();
  c.restore();
}

// ── 家族底型:寶石/果實/裝備各槽位共用輪廓,換色與紋樣即成專屬圖案 ──

/** 靈紋寶石底型:五角切面水晶 */
function crystal(c: Ctx, main: string, light: string, dark: string): void {
  const body: readonly Pt[] = [[24, 4], [41, 16], [36, 41], [12, 41], [7, 16]];
  poly(c, body, main);
  facet(c, [[24, 4], [7, 16], [22, 18]], light); // 左上受光面
  facet(c, [[41, 16], [36, 41], [27, 22]], dark); // 右側暗面
  tracePath(c, body);
  c.stroke();
}

/** 靈樹果實底型:圓果 + 蒂頭小葉 */
function fruitBase(c: Ctx, main: string, light: string): void {
  circ(c, 24, 28, 15, main);
  facet(c, [[15, 20], [21, 16], [18, 26]], light); // 受光斑
  seg(c, 24, 13, 24, 7, OUT, 3.4); // 蒂
  c.beginPath(); // 小葉
  c.moveTo(24, 9);
  c.quadraticCurveTo(33, 2, 36, 10);
  c.quadraticCurveTo(29, 13, 24, 9);
  c.closePath();
  c.fillStyle = "#5fae52";
  c.fill();
  c.stroke();
}

/** 海寶石底型:圓珠 + 高光,wave 條數區分三海 */
function seaOrb(c: Ctx, main: string, deep: string, waves: number): void {
  circ(c, 24, 24, 17, main);
  c.save();
  c.beginPath();
  c.arc(24, 24, 17, 0, Math.PI * 2);
  c.clip();
  c.fillStyle = deep;
  c.fillRect(7, 28, 34, 14); // 下半深色
  for (let i = 0; i < waves; i++) waveLine(c, 12, 20 + i * 6, 24, "#ffffff", 2.6);
  c.restore();
  circ(c, 17, 16, 3.4, "rgba(255,255,255,0.85)", false);
  c.beginPath();
  c.arc(24, 24, 17, 0, Math.PI * 2);
  c.stroke();
}

/** 頭盔底型:圓頂 + 護鼻/面甲開槽 */
function helmBase(c: Ctx, main: string, dark: string): void {
  const body: readonly Pt[] = [[8, 26], [8, 18], [14, 8], [34, 8], [40, 18], [40, 26], [36, 40], [12, 40]];
  poly(c, body, main);
  facet(c, [[14, 8], [10, 16], [18, 14]], "rgba(255,255,255,0.35)");
  tracePath(c, [[12, 26], [20, 26], [20, 34], [12, 34]]); // 左眼槽
  c.fillStyle = dark;
  c.fill();
  c.stroke();
  tracePath(c, [[28, 26], [36, 26], [36, 34], [28, 34]]); // 右眼槽
  c.fill();
  c.stroke();
}

/** 皇冠底型:底環 + 三尖 */
function crownBase(c: Ctx, main: string, tall: number): void {
  const t = 30 - tall; // 尖高
  poly(c, [[7, 38], [7, 20], [16, 28], [24, t], [32, 28], [41, 20], [41, 38]], main);
  facet(c, [[7, 20], [7, 30], [13, 27]], "rgba(255,255,255,0.4)");
}

/** 胸甲底型:肩 + 收腰軀幹 */
function chestBase(c: Ctx, main: string): void {
  const body: readonly Pt[] = [[14, 6], [34, 6], [42, 12], [40, 22], [35, 26], [35, 42], [13, 42], [13, 26], [8, 22], [6, 12]];
  poly(c, body, main);
  facet(c, [[14, 6], [8, 14], [18, 14]], "rgba(255,255,255,0.3)");
}

/** 長靴底型:靴筒 + 前伸鞋頭 */
function bootBase(c: Ctx, main: string): void {
  const body: readonly Pt[] = [[13, 6], [29, 6], [29, 26], [40, 32], [42, 38], [42, 42], [11, 42], [11, 26], [13, 22]];
  poly(c, body, main);
  facet(c, [[13, 6], [13, 20], [19, 14], [19, 6]], "rgba(255,255,255,0.28)");
  seg(c, 11, 36, 42, 36, OUT, 2.4); // 鞋底線
}

/** 墜飾鍊子(飾品用):兩側鍊線垂到中央 */
function chainTop(c: Ctx): void {
  c.save();
  c.lineWidth = 2.6;
  c.beginPath();
  c.moveTo(10, 4);
  c.quadraticCurveTo(24, 14, 38, 4);
  c.stroke();
  c.restore();
}

// ── 紋樣(疊在底型上的小記號) ──────────────────────────────────

function flameMark(c: Ctx, x: number, y: number, s: number, fill: string): void {
  c.beginPath();
  c.moveTo(x, y - s);
  c.quadraticCurveTo(x + s * 0.9, y - s * 0.2, x + s * 0.45, y + s * 0.55);
  c.quadraticCurveTo(x + s * 0.2, y + s, x, y + s);
  c.quadraticCurveTo(x - s * 0.2, y + s, x - s * 0.45, y + s * 0.55);
  c.quadraticCurveTo(x - s * 0.9, y - s * 0.2, x, y - s);
  c.closePath();
  c.fillStyle = fill;
  c.fill();
}

function boltMark(c: Ctx, x: number, y: number, s: number, fill: string): void {
  tracePath(c, [[x + s * 0.3, y - s], [x - s * 0.5, y + s * 0.15], [x - s * 0.05, y + s * 0.15], [x - s * 0.3, y + s], [x + s * 0.5, y - s * 0.1], [x + s * 0.05, y - s * 0.1]]);
  c.fillStyle = fill;
  c.fill();
}

function leafMark(c: Ctx, x: number, y: number, s: number, fill: string): void {
  c.beginPath();
  c.moveTo(x, y - s);
  c.quadraticCurveTo(x + s, y - s * 0.3, x, y + s);
  c.quadraticCurveTo(x - s, y - s * 0.3, x, y - s);
  c.closePath();
  c.fillStyle = fill;
  c.fill();
}

function snowMark(c: Ctx, x: number, y: number, s: number, color: string): void {
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI;
    seg(c, x - Math.cos(a) * s, y - Math.sin(a) * s, x + Math.cos(a) * s, y + Math.sin(a) * s, color, 2.6);
  }
}

function swirlMark(c: Ctx, x: number, y: number, s: number, color: string): void {
  c.save();
  c.strokeStyle = color;
  c.lineWidth = 2.8;
  c.beginPath();
  c.arc(x, y, s, -0.4, Math.PI * 1.15);
  c.stroke();
  c.beginPath();
  c.arc(x + s * 0.15, y - s * 0.1, s * 0.5, Math.PI * 0.7, Math.PI * 2.1);
  c.stroke();
  c.restore();
}

function dropMark(c: Ctx, x: number, y: number, s: number, fill: string): void {
  c.beginPath();
  c.moveTo(x, y - s);
  c.quadraticCurveTo(x + s * 0.85, y + s * 0.15, x, y + s * 0.7);
  c.quadraticCurveTo(x - s * 0.85, y + s * 0.15, x, y - s);
  c.closePath();
  c.fillStyle = fill;
  c.fill();
}

function mapleMark(c: Ctx, x: number, y: number, s: number, fill: string): void {
  // 簡化三裂楓葉:中尖 + 左右尖 + 短柄
  tracePath(c, [[x, y - s], [x + s * 0.35, y - s * 0.25], [x + s, y - s * 0.45], [x + s * 0.55, y + s * 0.25], [x + s * 0.25, y + s * 0.45], [x, y + s * 0.25], [x - s * 0.25, y + s * 0.45], [x - s * 0.55, y + s * 0.25], [x - s, y - s * 0.45], [x - s * 0.35, y - s * 0.25]]);
  c.fillStyle = fill;
  c.fill();
  seg(c, x, y + s * 0.3, x, y + s * 0.85, fill, 2.2);
}

function crackMark(c: Ctx, color: string): void {
  // 岩漿裂紋:兩道折線
  c.save();
  c.strokeStyle = color;
  c.lineWidth = 2.6;
  c.beginPath();
  c.moveTo(15, 14);
  c.lineTo(22, 22);
  c.lineTo(19, 30);
  c.lineTo(25, 37);
  c.stroke();
  c.beginPath();
  c.moveTo(30, 16);
  c.lineTo(27, 24);
  c.lineTo(32, 30);
  c.stroke();
  c.restore();
}

// ── 各物品的繪製函式 ──────────────────────────────────────────

const DRAWS: Record<string, (c: Ctx) => void> = {
  // ── 裝備:頭部 ──
  cap(c) {
    // 皮帽:棕色圓頂 + 帽簷 + 縫線
    c.beginPath();
    c.arc(24, 26, 15, Math.PI, 0);
    c.closePath();
    c.fillStyle = "#a5713f";
    c.fill();
    c.stroke();
    poly(c, [[5, 26], [43, 26], [40, 32], [8, 32]], "#8a5a30");
    seg(c, 14, 18, 22, 14, "#c99a66", 2.4); // 縫線高光
  },
  helm(c) {
    helmBase(c, "#9aa4b2", "#3a4150");
  },
  crown(c) {
    crownBase(c, "#e8b83a", 4);
    circ(c, 24, 32, 4, "#59d6d6"); // 晶紋:中央青晶
  },
  corahelm(c) {
    helmBase(c, "#b5533a", "#4a2320");
    // 熔鱗:額前三片鱗弧
    c.save();
    c.strokeStyle = "#f0925a";
    c.lineWidth = 2.4;
    for (let i = 0; i < 3; i++) {
      c.beginPath();
      c.arc(16 + i * 8, 16, 4, Math.PI * 0.15, Math.PI * 0.85);
      c.stroke();
    }
    c.restore();
  },
  starcrown(c) {
    crownBase(c, "#f0cf5a", 10);
    star4(c, 24, 14, 6, "#ffffff"); // 中尖星輝
    circ(c, 15, 33, 3, "#8a6ae0");
    circ(c, 33, 33, 3, "#8a6ae0");
  },

  // ── 裝備:胸甲 ──
  vest(c) {
    chestBase(c, "#a5713f");
    seg(c, 24, 12, 24, 40, "#6a4520", 2.4); // 皮甲繫帶
    seg(c, 18, 20, 30, 24, "#6a4520", 2.2);
    seg(c, 30, 20, 18, 24, "#6a4520", 2.2);
  },
  plate(c) {
    chestBase(c, "#9aa4b2");
    seg(c, 24, 10, 24, 40, "#5a6373", 2.6); // 中脊
    circ(c, 16, 14, 1.8, "#5a6373", false); // 鉚釘
    circ(c, 32, 14, 1.8, "#5a6373", false);
    circ(c, 16, 34, 1.8, "#5a6373", false);
    circ(c, 32, 34, 1.8, "#5a6373", false);
  },
  scalemail(c) {
    chestBase(c, "#4a9a5a");
    // 龍鱗:交錯鱗弧
    c.save();
    c.strokeStyle = "#2a6a3a";
    c.lineWidth = 2.2;
    for (let row = 0; row < 3; row++)
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.arc(17 + i * 7 + (row % 2) * 3.5, 18 + row * 8, 3.4, Math.PI * 0.1, Math.PI * 0.9);
        c.stroke();
      }
    c.restore();
  },
  lavaplate(c) {
    chestBase(c, "#5a5560");
    crackMark(c, "#ff8a3a"); // 熔岩裂紋
  },
  astralmail(c) {
    chestBase(c, "#3a4a8a");
    star4(c, 24, 22, 5, "#ffffff");
    star4(c, 16, 32, 2.6, "#c8d8ff");
    star4(c, 32, 33, 2.6, "#c8d8ff");
    seg(c, 14, 8, 34, 8, "#e8b83a", 2.6); // 金色領緣
  },

  // ── 裝備:靴子 ──
  sandals(c) {
    // 草鞋:俯視橢圓草底 + V 型繩帶
    c.beginPath();
    c.ellipse(24, 26, 11, 17, 0, 0, Math.PI * 2);
    c.fillStyle = "#c9b264";
    c.fill();
    c.stroke();
    c.save();
    c.strokeStyle = "#8a7434";
    c.lineWidth = 2.2;
    for (let i = 0; i < 4; i++) seg(c, 14, 14 + i * 8, 34, 14 + i * 8, "#8a7434", 2); // 編織紋
    c.restore();
    seg(c, 24, 16, 16, 30, OUT, 2.8); // 繩帶
    seg(c, 24, 16, 32, 30, OUT, 2.8);
    circ(c, 24, 15, 2.2, "#6a5424");
  },
  greaves(c) {
    bootBase(c, "#9aa4b2");
    seg(c, 13, 14, 29, 14, "#5a6373", 2.4); // 鐵靴環扣
    seg(c, 13, 21, 29, 21, "#5a6373", 2.4);
  },
  windboots(c) {
    bootBase(c, "#4ab8a8");
    // 疾風:靴後三道風速線
    c.save();
    c.strokeStyle = "#d8fff4";
    c.lineWidth = 2.4;
    for (let i = 0; i < 3; i++) {
      c.beginPath();
      c.moveTo(15, 10 + i * 6);
      c.quadraticCurveTo(21, 12 + i * 6, 26, 9 + i * 6);
      c.stroke();
    }
    c.restore();
  },
  tideboots(c) {
    bootBase(c, "#3a7ac8");
    waveLine(c, 12, 13, 18, "#aee2ff", 2.6); // 潮行:靴筒波浪
    waveLine(c, 12, 19, 18, "#aee2ff", 2.6);
  },
  meteorboots(c) {
    bootBase(c, "#7a5ac8");
    // 流星:斜曳星痕
    seg(c, 14, 20, 25, 9, "#ffb85a", 3);
    star4(c, 26, 8, 4.5, "#ffe8a8");
  },

  // ── 裝備:飾品 ──
  badge(c) {
    // 勇者徽章:盾形 + 上升緞帶
    poly(c, [[24, 44], [38, 32], [38, 12], [10, 12], [10, 32]], "#e8b83a");
    facet(c, [[10, 12], [10, 30], [17, 24], [17, 12]], "rgba(255,255,255,0.35)");
    poly(c, [[17, 12], [24, 4], [31, 12]], "#c84a3a"); // 頂緞帶
    seg(c, 24, 18, 24, 34, "#8a6a1a", 3); // 中央劍形
    poly(c, [[24, 38], [21, 34], [27, 34]], "#8a6a1a");
  },
  locket(c) {
    chainTop(c);
    // 生命墜飾:心形
    c.beginPath();
    c.moveTo(24, 42);
    c.bezierCurveTo(8, 30, 12, 12, 24, 20);
    c.bezierCurveTo(36, 12, 40, 30, 24, 42);
    c.closePath();
    c.fillStyle = "#e86a8a";
    c.fill();
    c.stroke();
    circ(c, 18, 22, 2.6, "rgba(255,255,255,0.8)", false);
  },
  ring(c) {
    // 靈能戒指:金環 + 藍晶
    c.save();
    c.lineWidth = 6;
    c.strokeStyle = "#e8b83a";
    c.beginPath();
    c.arc(24, 28, 12, 0, Math.PI * 2);
    c.stroke();
    c.lineWidth = LINE;
    c.strokeStyle = OUT;
    c.beginPath();
    c.arc(24, 28, 15, 0, Math.PI * 2);
    c.stroke();
    c.beginPath();
    c.arc(24, 28, 9, 0, Math.PI * 2);
    c.stroke();
    c.restore();
    poly(c, [[24, 4], [31, 11], [24, 18], [17, 11]], "#5a8ae8"); // 戒面菱形晶
  },
  gauntlet(c) {
    // 猛擊護手:握拳手套
    poly(c, [[10, 22], [10, 12], [34, 12], [40, 20], [40, 34], [30, 42], [14, 42], [10, 34]], "#b5654a");
    seg(c, 17, 12, 17, 26, "#7a3a28", 2.4); // 指縫
    seg(c, 24, 12, 24, 26, "#7a3a28", 2.4);
    seg(c, 31, 12, 31, 26, "#7a3a28", 2.4);
    poly(c, [[10, 26], [4, 30], [10, 36]], "#8a4a34"); // 拇指
  },
  amulet(c) {
    chainTop(c);
    circ(c, 24, 27, 14, "#4ab8b8"); // 潮汐護符:青碧圓牌
    // 三叉戟記號
    seg(c, 24, 19, 24, 35, "#ffffff", 2.6);
    c.save();
    c.strokeStyle = "#ffffff";
    c.lineWidth = 2.6;
    c.beginPath();
    c.arc(24, 23, 5.5, Math.PI * 0.15, Math.PI * 0.85, true);
    c.stroke();
    c.restore();
    poly(c, [[24, 16], [22, 20], [26, 20]], "#ffffff");
  },
  treepend(c) {
    chainTop(c);
    circ(c, 24, 27, 14, "#7ac87a"); // 世界樹墜飾:翠綠圓牌
    seg(c, 24, 34, 24, 24, "#2a5a2a", 2.8); // 樹幹
    circ(c, 24, 22, 6.5, "#2a8a3a"); // 樹冠
    circ(c, 18, 26, 4, "#2a8a3a");
    circ(c, 30, 26, 4, "#2a8a3a");
  },
  seaheart(c) {
    // 深海之心:深藍心形晶 + 氣泡
    c.beginPath();
    c.moveTo(24, 43);
    c.bezierCurveTo(6, 29, 11, 9, 24, 18);
    c.bezierCurveTo(37, 9, 42, 29, 24, 43);
    c.closePath();
    c.fillStyle = "#2a4ac8";
    c.fill();
    c.stroke();
    facet(c, [[15, 16], [20, 14], [17, 24]], "rgba(255,255,255,0.45)");
    circ(c, 34, 10, 2, "#aee2ff", false);
    circ(c, 38, 16, 1.4, "#aee2ff", false);
  },
  corefist(c) {
    // 熔核護手:黑鐵拳套 + 指節熔核
    poly(c, [[10, 22], [10, 12], [34, 12], [40, 20], [40, 34], [30, 42], [14, 42], [10, 34]], "#4a4550");
    seg(c, 17, 12, 17, 24, "#2a2530", 2.4);
    seg(c, 24, 12, 24, 24, "#2a2530", 2.4);
    seg(c, 31, 12, 31, 24, "#2a2530", 2.4);
    poly(c, [[10, 26], [4, 30], [10, 36]], "#3a3540");
    circ(c, 25, 31, 5.5, "#ff8a3a"); // 熔核
    circ(c, 25, 31, 2.4, "#ffd85a", false);
  },
  starcore(c) {
    chainTop(c);
    circ(c, 24, 27, 14, "#2a2a4a"); // 星核墜飾:夜空圓牌
    star4(c, 24, 27, 8, "#ffd85a");
    circ(c, 17, 20, 1.3, "#c8d8ff", false);
    circ(c, 32, 33, 1.3, "#c8d8ff", false);
  },
  tidecharm(c) {
    chainTop(c);
    circ(c, 24, 27, 14, "#3a6ac8"); // 望潮護符:月與潮
    crescent(c, 20, 22, 5.5, "#ffe8a8");
    waveLine(c, 14, 32, 20, "#aee2ff", 2.6);
    waveLine(c, 14, 36, 20, "#aee2ff", 2.2);
  },

  // ── 靈紋寶石(切面水晶 + 專屬紋樣) ──
  flame(c) {
    crystal(c, "#d84a3a", "#ff9a7a", "#8a2a20");
    flameMark(c, 24, 27, 8, "#ffe0b0");
  },
  wind(c) {
    crystal(c, "#8ad0b0", "#d0f5e2", "#4a8a6a");
    swirlMark(c, 24, 27, 7, "#ffffff");
  },
  earth(c) {
    crystal(c, "#a5764a", "#d0a878", "#6a4526");
    // 岩紋:短折線
    seg(c, 18, 22, 24, 28, "#4a3016", 2.6);
    seg(c, 24, 28, 21, 35, "#4a3016", 2.6);
    seg(c, 28, 20, 30, 28, "#4a3016", 2.6);
  },
  frost(c) {
    crystal(c, "#7ac0e8", "#d8f2ff", "#3a6a9a");
    snowMark(c, 24, 27, 7.5, "#ffffff");
  },
  tide(c) {
    crystal(c, "#3a7ac8", "#9ac8f0", "#1a4a8a");
    waveLine(c, 15, 24, 18, "#ffffff", 2.6);
    waveLine(c, 15, 31, 18, "#ffffff", 2.6);
  },
  void(c) {
    crystal(c, "#8a5ac8", "#c8a8f0", "#4a2a7a");
    swirlMark(c, 24, 27, 7, "#e8d8ff");
  },
  lava(c) {
    crystal(c, "#4a4048", "#7a7078", "#251f28");
    crackMark(c, "#ff8a3a");
  },
  aqua(c) {
    crystal(c, "#3ac8d8", "#a8f0f8", "#1a7a8a");
    dropMark(c, 24, 26, 8, "#ffffff");
  },
  life(c) {
    crystal(c, "#4aa84a", "#a8e0a0", "#1a6a2a");
    leafMark(c, 24, 27, 8, "#e0ffd8");
  },
  astral(c) {
    crystal(c, "#e8d08a", "#fff4d0", "#a88a3a");
    star4(c, 24, 26, 8, "#ffffff");
  },
  maple(c) {
    crystal(c, "#e07a3a", "#ffb888", "#a03a1a");
    mapleMark(c, 24, 26, 8, "#ffe8c8");
  },
  shadow(c) {
    crystal(c, "#3a3555", "#6a6488", "#1d1a30");
    crescent(c, 24, 26, 7, "#b8a8e8");
  },

  // ── 海寶石(圓珠,波紋條數 = 第幾海) ──
  sea1(c) {
    seaOrb(c, "#4ac8b8", "#1a8a80", 1);
  },
  sea2(c) {
    seaOrb(c, "#e8b83a", "#a87a1a", 2);
  },
  sea3(c) {
    seaOrb(c, "#6a7ae8", "#3a3aa8", 3);
  },

  // ── 靈樹果實(圓果 + 專屬紋樣) ──
  thunder(c) {
    fruitBase(c, "#f0d04a", "#fff0a8");
    boltMark(c, 25, 29, 8, "#8a6a0a");
  },
  gravity(c) {
    fruitBase(c, "#8a5ac8", "#c8a8f0");
    // 引力:環繞軌道圈
    c.save();
    c.beginPath();
    c.ellipse(24, 29, 19, 6.5, -0.3, 0, Math.PI * 2);
    c.stroke();
    c.restore();
    circ(c, 24, 29, 3.5, "#3a2a5a", false);
  },
  starfall(c) {
    fruitBase(c, "#3a4a9a", "#8a9ae0");
    seg(c, 17, 35, 26, 26, "#ffd85a", 2.6); // 落星曳痕
    star4(c, 28, 24, 5, "#ffe8a8");
  },

  // ── 後備圖示(未知 id) ──
  default(c) {
    poly(c, [[10, 16], [38, 16], [40, 40], [8, 40]], "#8a7a5a"); // 小布袋
    c.beginPath();
    c.arc(24, 14, 8, Math.PI, 0);
    c.stroke();
  },
};

// ── 對外 API ──────────────────────────────────────────────────

const CACHE = new Map<string, string>();

/** 取得圖示的 data URL(首次呼叫時繪製,之後走快取) */
export function iconSrc(id: string): string {
  const key = id in DRAWS ? id : "default";
  const hit = CACHE.get(key);
  if (hit) return hit;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = SIZE;
  const c = canvas.getContext("2d");
  if (!c) return "";
  c.lineWidth = LINE;
  c.strokeStyle = OUT;
  c.lineJoin = "round";
  c.lineCap = "round";
  DRAWS[key](c);
  const url = canvas.toDataURL();
  CACHE.set(key, url);
  return url;
}

/** 產生圖示 <img> HTML(嵌入 innerHTML 模板用);data-icon 供測試辨識 */
export function iconImg(id: string, size = 18): string {
  return `<img class="px-icon" data-icon="${id}" src="${iconSrc(id)}" width="${size}" height="${size}" alt="" style="vertical-align:-0.22em;image-rendering:auto;" />`;
}
