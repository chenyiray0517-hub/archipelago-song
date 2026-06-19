// 群島之歌 — 極簡多人連線伺服器(第 1 階段:看得到彼此)
//
// 職責只有「轉發」:收到某玩家的狀態封包,附上其 id,廣播給其他所有人。
// 不算遊戲邏輯、不存任何東西、不做防作弊(2~4 個熟人共玩,毋需)。
// 之後階段才會加房間(階段 2)與房主權威世界同步(階段 3)。
//
// 啟動:npm run server   (預設埠 8787,可用環境變數 PORT 覆寫)

import { WebSocketServer } from "ws";

const PORT = Number(process.env.PORT) || 8787;
const wss = new WebSocketServer({ port: PORT });

/** @type {Map<import("ws").WebSocket, { id: string, last: object | null }>} */
const clients = new Map();
let nextId = 1;

/** 廣播給「除了 except 以外」的所有連線 */
function broadcast(except, msg) {
  const data = JSON.stringify(msg);
  for (const [ws] of clients) {
    if (ws === except) continue;
    if (ws.readyState === ws.OPEN) ws.send(data);
  }
}

wss.on("connection", (ws) => {
  const id = `p${nextId++}`;
  clients.set(ws, { id, last: null });

  // 告知新玩家自己的 id,以及目前在場其他玩家的最新狀態
  const others = [];
  for (const [other, info] of clients) {
    if (other !== ws && info.last) others.push({ id: info.id, state: info.last });
  }
  ws.send(JSON.stringify({ t: "welcome", id, others }));

  // 通知其他人有新玩家加入(尚無狀態,等對方第一個 state 封包才會有位置)
  broadcast(ws, { t: "join", id });

  ws.on("message", (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return; // 壞封包直接丟掉,不讓伺服器崩
    }
    if (msg.t === "state" && msg.state && typeof msg.state === "object") {
      const info = clients.get(ws);
      if (!info) return;
      info.last = msg.state;
      broadcast(ws, { t: "state", id: info.id, state: msg.state });
    }
  });

  const drop = () => {
    const info = clients.get(ws);
    if (!info) return;
    clients.delete(ws);
    broadcast(ws, { t: "leave", id: info.id });
  };
  ws.on("close", drop);
  ws.on("error", drop);
});

console.log(`[群島之歌] 多人伺服器啟動於 ws://localhost:${PORT}`);
