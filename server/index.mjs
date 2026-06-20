// 群島之歌 — 極簡多人連線伺服器(第 2 階段:房間系統)
//
// 職責只有「轉發」:收到某玩家的狀態封包,附上其 id,廣播給「同房間」其他人。
// 不算遊戲邏輯、不存任何東西、不做防作弊(2~4 個熟人共玩,毋需)。
// 房間 = 連線時 URL 帶的 ?room=xxx(沒帶就丟進預設房間 lobby);不同房間互不可見。
// 之後階段才會加房主權威世界同步(階段 3)。
//
// 啟動:npm run server   (預設埠 8787,可用環境變數 PORT 覆寫)

import { WebSocketServer } from "ws";
import { createServer } from "http";

const PORT = Number(process.env.PORT) || 8787;

// 包一層極簡 HTTP 伺服器:雲端平台(Render)會用 GET / 做健康檢查,純 WebSocket
// 伺服器不回應 HTTP 會被判定不健康。這裡回 200,WebSocket 掛在同一個埠上升級。
// 本機行為不變(客戶端照樣連 ws://host:PORT),room 仍從升級請求 URL 取得。
const httpServer = createServer((_req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("archipelago-song multiplayer relay: ok");
});
const wss = new WebSocketServer({ server: httpServer });

/** @type {Map<import("ws").WebSocket, { id: string, room: string, last: object | null }>} */
const clients = new Map();
/** 每個房間目前的房主 id(階段 3a:房主權威模擬敵人);房主離線即移交給同房下一位 */
/** @type {Map<string, string>} */
const hostByRoom = new Map();
/** 可原樣轉發給「同房間其他人」的訊息(附上 sender id);其餘一律忽略 */
// enemies/hit:階段 3a 房主權威同步;kill/pdmg/cc:階段 3b;chat:階段 4b 房間聊天
// (kill/pdmg 雖原樣廣播給同房間,但帶 by/to 欄位,由客戶端各自比對本機 id 決定是否套用)
const RELAY = new Set(["enemies", "hit", "kill", "pdmg", "cc", "chat"]);
let nextId = 1;

/** 從連線請求 URL 取房間名(?room=xxx);沒帶或空字串丟進預設房間 lobby */
function roomOf(req) {
  try {
    const url = new URL(req.url ?? "/", "http://localhost");
    const r = url.searchParams.get("room");
    return r && r.trim() ? r.trim().slice(0, 64) : "lobby";
  } catch {
    return "lobby";
  }
}

/** 廣播給「同房間、除了 except 以外」的所有連線 */
function broadcast(room, except, msg) {
  const data = JSON.stringify(msg);
  for (const [ws, info] of clients) {
    if (ws === except || info.room !== room) continue;
    if (ws.readyState === ws.OPEN) ws.send(data);
  }
}

wss.on("connection", (ws, req) => {
  const id = `p${nextId++}`;
  const room = roomOf(req);
  clients.set(ws, { id, room, last: null });
  // 房間若還沒有房主,這位新玩家就當房主(階段 3a)
  if (!hostByRoom.has(room)) hostByRoom.set(room, id);

  // 告知新玩家自己的 id、所在房間、目前房主,以及「同房間」在場其他玩家的最新狀態
  const others = [];
  for (const [other, info] of clients) {
    if (other !== ws && info.room === room && info.last) others.push({ id: info.id, state: info.last });
  }
  ws.send(JSON.stringify({ t: "welcome", id, room, host: hostByRoom.get(room), others }));

  // 通知同房間其他人有新玩家加入(尚無狀態,等對方第一個 state 封包才會有位置)
  broadcast(room, ws, { t: "join", id });

  ws.on("message", (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return; // 壞封包直接丟掉,不讓伺服器崩
    }
    const info = clients.get(ws);
    if (!info) return;
    if (msg.t === "state" && msg.state && typeof msg.state === "object") {
      info.last = msg.state;
      broadcast(info.room, ws, { t: "state", id: info.id, state: msg.state });
    } else if (RELAY.has(msg.t)) {
      // enemies/hit:原樣轉發給同房間其他人,附上 sender id(由客戶端依房主身分判斷是否處理)
      broadcast(info.room, ws, { ...msg, id: info.id });
    }
  });

  const drop = () => {
    const info = clients.get(ws);
    if (!info) return;
    clients.delete(ws);
    broadcast(info.room, ws, { t: "leave", id: info.id });
    // 房主離線:移交給同房間下一位(沒人就清掉),並廣播新房主
    if (hostByRoom.get(info.room) === info.id) {
      let next = null;
      for (const inf of clients.values()) {
        if (inf.room === info.room) { next = inf.id; break; }
      }
      if (next) {
        hostByRoom.set(info.room, next);
        broadcast(info.room, null, { t: "host", id: next });
      } else {
        hostByRoom.delete(info.room);
      }
    }
  };
  ws.on("close", drop);
  ws.on("error", drop);
});

// 心跳(階段 5a):每 5 秒對所有連線送一則 ping,讓客戶端看門狗判斷連線是否仍存活
const PING = JSON.stringify({ t: "ping" });
setInterval(() => {
  for (const ws of clients.keys()) {
    if (ws.readyState === ws.OPEN) ws.send(PING);
  }
}, 5000);

httpServer.listen(PORT, () => {
  console.log(`[群島之歌] 多人伺服器啟動於 ws://localhost:${PORT}(房間分組,?room=xxx)`);
});
