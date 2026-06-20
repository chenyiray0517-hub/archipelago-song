// 多人連線驗證(第 2 階段:房間系統)。
// A、B 進同一房間應看到彼此並同步位置;C 進別的房間應與他們互不可見。
// 前置:npm run server 與 npm run dev 都已啟動。用法:node scripts/mp-check.mjs
import { chromium } from "playwright";

const errors = [];
const fail = (m) => { console.error(`✗ ${m}`); errors.push(m); };
const ok = (m) => console.log(`✓ ${m}`);

const browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--enable-gpu", "--use-angle=metal"] });
const A = await browser.newPage({ viewport: { width: 800, height: 600 } });
const B = await browser.newPage({ viewport: { width: 800, height: 600 } });
const C = await browser.newPage({ viewport: { width: 800, height: 600 } });
for (const [name, p] of [["A", A], ["B", B], ["C", C]]) {
  p.on("pageerror", (e) => fail(`${name} pageerror: ${e.message}`));
  p.on("console", (m) => { if (m.type() === "error") fail(`${name} console: ${m.text()}`); });
}

// A、B 同房間 mptest;C 在另一間 other(用來驗證房間隔離)
await A.goto("http://localhost:5173/?room=mptest", { waitUntil: "networkidle" });
await B.goto("http://localhost:5173/?room=mptest", { waitUntil: "networkidle" });
await C.goto("http://localhost:5173/?room=other", { waitUntil: "networkidle" });

// 1. 三頁都連上伺服器(等 welcome 封包設好 net.localId,而非猜固定時間)
await Promise.all(
  [A, B, C].map((p) => p.waitForFunction(() => window.__game?.net?.localId != null, null, { timeout: 10000 })),
).catch(() => fail("等待連線逾時(localId 未就緒)"));
const ids = await Promise.all([A, B, C].map((p) => p.evaluate(() => window.__game?.net?.localId)));
const rooms = await Promise.all([A, B, C].map((p) => p.evaluate(() => window.__game?.net?.room)));
new Set(ids).size === 3 && ids.every(Boolean)
  ? ok(`三頁皆連線,id = ${ids.join(" / ")}`)
  : fail(`連線/id 異常:${JSON.stringify(ids)}`);
rooms[0] === "mptest" && rooms[1] === "mptest" && rooms[2] === "other"
  ? ok(`房間指派正確(A/B = mptest,C = other)`)
  : fail(`房間指派異常:${JSON.stringify(rooms)}`);

// 2. 房間隔離:A、B 只看到對方(各 1 人),C 在別間應看到 0 人
await A.waitForTimeout(500);
const counts = await Promise.all([A, B, C].map((p) => p.evaluate(() => window.__game.remotePlayers.size)));
counts[0] === 1 && counts[1] === 1 && counts[2] === 0
  ? ok(`房間隔離正確(A 看到 ${counts[0]}、B 看到 ${counts[1]}、C 看到 ${counts[2]})`)
  : fail(`房間隔離失敗:${JSON.stringify(counts)}`);

// 3. A 移動後,B 畫面中「遠端 A」的位置應跟著逼近(同步生效)
// A 每 50ms 持續送出位置,B 端 avatar 以指數插值逼近;改用輪詢等它收斂(避免固定時間窗
// 不足以讓 14 單位跳躍插值到位而誤判)。A 移到該座標後留在原地(此處用瞬移、無敵人推擠)。
const target = await A.evaluate(() => {
  const p = window.__game.player.mesh.position;
  p.x += 12; p.z -= 8;
  return { x: p.x, z: p.z };
});
const converged = await B.waitForFunction(
  ({ tid, t }) => {
    const rp = window.__game.remotePlayers.get(tid);
    if (!rp) return false;
    return Math.hypot(rp.mesh.position.x - t.x, rp.mesh.position.z - t.z) < 1.0;
  },
  { tid: ids[0], t: target },
  { timeout: 5000, polling: 100 },
).then(() => true).catch(() => false);
const remote = await B.evaluate((tid) => {
  const rp = window.__game.remotePlayers.get(tid);
  return rp ? { x: rp.mesh.position.x, z: rp.mesh.position.z } : null;
}, ids[0]);
converged
  ? ok(`位置同步:B 端遠端 A 已逼近真實位置(${JSON.stringify(target)})`)
  : fail(`位置同步未收斂:target ${JSON.stringify(target)} got ${JSON.stringify(remote)}`);

// ── 階段 3a:房主權威共享敵人 ──────────────────────────────
// 4. 房主身分:先連線的 A 是房主,B 是客戶端
const hostFlags = await Promise.all([A, B].map((p) => p.evaluate(() => window.__game.net.isHost)));
hostFlags[0] === true && hostFlags[1] === false
  ? ok("房主指派正確(A=房主、B=客戶端)")
  : fail(`房主指派異常:${JSON.stringify(hostFlags)}`);

// 5. 客戶端的敵人是「房主權威傀儡」(remote=true),房主的不是
const remoteFlags = await Promise.all([A, B].map((p) => p.evaluate(() => window.__game.enemies[0].remote)));
remoteFlags[0] === false && remoteFlags[1] === true
  ? ok("敵人模式正確(房主權威模擬、客戶端傀儡)")
  : fail(`敵人 remote 旗標異常:${JSON.stringify(remoteFlags)}`);

// 6. 客戶端攻擊 → 房主結算:B 對 0 號敵人造成「非致命」傷害,房主 A 端該敵血量應下降且同步回 B
const hp0 = await A.evaluate(() => window.__game.enemies[0].hp);
await B.evaluate(() => window.__game.enemies[0].takeDamage(12)); // 客戶端只記帳,不本機扣血
await B.waitForTimeout(700); // 等 B 送 hit → 房主結算 → 房主快照同步回 B
const [hpHostAfter, hpClientAfter] = await Promise.all([
  A.evaluate(() => window.__game.enemies[0].hp),
  B.evaluate(() => window.__game.enemies[0].hp),
]);
Math.abs(hpHostAfter - (hp0 - 12)) <= 1
  ? ok(`客戶端傷害經房主結算生效(房主端 ${hp0} → ${hpHostAfter})`)
  : fail(`房主未正確結算客戶端傷害:${hp0} → ${hpHostAfter}(預期 ${hp0 - 12})`);
Math.abs(hpClientAfter - hpHostAfter) <= 1
  ? ok(`敵人血量同步回客戶端(B 端 ${hpClientAfter} ≈ 房主 ${hpHostAfter})`)
  : fail(`血量未同步回客戶端:B ${hpClientAfter} vs 房主 ${hpHostAfter}`);

// 7. 敵人位置同步:房主驅動的 0 號敵人位置,客戶端應逼近一致
const [ePosHost, ePosClient] = await Promise.all([
  A.evaluate(() => { const p = window.__game.enemies[0].mesh.position; return { x: p.x, z: p.z }; }),
  B.evaluate(() => { const p = window.__game.enemies[0].mesh.position; return { x: p.x, z: p.z }; }),
]);
Math.hypot(ePosHost.x - ePosClient.x, ePosHost.z - ePosClient.z) < 1.5
  ? ok("敵人位置由房主同步到客戶端")
  : fail(`敵人位置未同步:房主 ${JSON.stringify(ePosHost)} vs 客戶端 ${JSON.stringify(ePosClient)}`);

// ── 階段 3b:各自成長歸屬 ──────────────────────────────────
// 8. 客戶端補刀 → 自己得擊殺歸屬:B(客戶端)擊殺 0 號史萊姆,任務擊殺數應記在 B 而非房主 A
const killsBefore = await Promise.all([A, B].map((p) => p.evaluate(() => window.__game.quests.slimeKills)));
const pickupsBeforeB = await B.evaluate(() => window.__game.pickups.length);
await B.evaluate(() => window.__game.enemies[0].takeDamage(999)); // 客戶端記帳 → 送房主結算致死
await B.waitForTimeout(800); // 等 B 送 hit → 房主結算致死 → 廣播 kill → B 自行結算掉落
const killsAfter = await Promise.all([A, B].map((p) => p.evaluate(() => window.__game.quests.slimeKills)));
const pickupsAfterB = await B.evaluate(() => window.__game.pickups.length);
killsAfter[1] === killsBefore[1] + 1 && killsAfter[0] === killsBefore[0]
  ? ok(`擊殺歸屬正確(補刀者 B 任務 +1:${killsBefore[1]}→${killsAfter[1]},房主 A 不變:${killsAfter[0]})`)
  : fail(`擊殺歸屬異常:A ${killsBefore[0]}→${killsAfter[0]}、B ${killsBefore[1]}→${killsAfter[1]}`);
pickupsAfterB > pickupsBeforeB
  ? ok(`補刀者 B 在自己世界產出掉落(${pickupsBeforeB}→${pickupsAfterB})`)
  : fail(`補刀者 B 未產出掉落:${pickupsBeforeB}→${pickupsAfterB}`);

// ── 階段 3b-2:敵人傷害客戶端 + 最近玩家鎖定 ──────────────────
// 9. 把 B 放到 1 號史萊姆的「房主權威位置」、A 移到遠處 → 敵人應鎖定最近者 B,房主結算後送傷害回 B。
//    注意:要用房主端的敵人座標(權威),不能用客戶端的傀儡座標(會有同步延遲,導致貼錯位置)。
const ePosAuth = await A.evaluate(() => { const e = window.__game.enemies[1].mesh.position; return { x: e.x, z: e.z }; });
await A.evaluate(() => window.__game.player.mesh.position.set(50, 5, 50)); // 房主走遠,確保 B 最近
await B.evaluate((e) => window.__game.player.mesh.position.set(e.x, 5, e.z), ePosAuth);
const bHpBefore = await B.evaluate(() => window.__game.player.hp);
await B.waitForTimeout(5000); // 等房主端敵人 chase→windup→lunge 命中 B(每 ~1.8s 一次)
const bHpAfter = await B.evaluate(() => window.__game.player.hp);
bHpAfter < bHpBefore
  ? ok(`敵人鎖定最近玩家並傷害客戶端(B HP ${bHpBefore}→${bHpAfter})`)
  : fail(`客戶端未被敵人傷害(最近鎖定/pdmg 失效):B HP ${bHpBefore}→${bHpAfter}`);

// ── 階段 3b-3:客戶端控場 + 頭目預警跨端 ──────────────────────
// 10. 客戶端對共享敵人施加冰凍 → 房主權威套用,並把「冰凍」旗標經快照同步回客戶端傀儡
const ccIdx = 5; // 一隻未被前面測試動過的史萊姆
await B.evaluate((i) => window.__game.enemies[i].freeze(5), ccIdx); // 客戶端只記帳 → 送房主
await B.waitForTimeout(700); // 等 cc 送房主 → 房主套用 → 旗標隨快照同步回 B
const hostFreeze = await A.evaluate((i) => window.__game.enemies[i].freezeT, ccIdx);
const clientCcFlag = await B.evaluate((i) => window.__game.enemies[i].remoteStatusFlag, ccIdx);
hostFreeze > 0
  ? ok(`客戶端控場經房主權威套用(房主端 freezeT=${hostFreeze.toFixed(1)})`)
  : fail(`客戶端控場未送達房主:freezeT=${hostFreeze}`);
clientCcFlag === 3
  ? ok(`控場狀態旗標同步回客戶端傀儡(flag=3 冰凍)`)
  : fail(`控場旗標未同步回客戶端傀儡:flag=${clientCcFlag}`);

// 11. 頭目蓄力預警跨端:房主強制 12 號菁英施放特殊技,客戶端傀儡應收到預警/引爆旗標
await A.evaluate(() => window.__game.enemies[12].forceSpecial());
await B.waitForTimeout(300); // 等 telegraph 階段的旗標隨快照同步到 B
const bossFlag = await B.evaluate(() => window.__game.enemies[12].remoteStatusFlag);
bossFlag === 1 || bossFlag === 2
  ? ok(`頭目蓄力預警/引爆跨端同步到客戶端(flag=${bossFlag})`)
  : fail(`頭目預警未跨端同步:flag=${bossFlag}`);

// ── 階段 4a:玩家動作跨端 ──────────────────────────────────
// 12. A 揮劍 → B 端「遠端 A」應播揮劍動畫(act 攻擊位元跨端)
await A.evaluate(() => window.__game.player.mesh.position.set(5, 2, -52)); // 回陸地確保可攻擊
await A.waitForTimeout(200);
await A.mouse.move(400, 300);
await A.mouse.down();
await A.waitForTimeout(60);
await A.mouse.up();
const swung = await B.waitForFunction(
  (tid) => { const rp = window.__game.remotePlayers.get(tid); return !!rp && rp.swinging; },
  ids[0], { timeout: 3000 },
).then(() => true).catch(() => false);
swung
  ? ok("玩家動作跨端:A 揮劍時 B 端遠端 A 播攻擊動畫")
  : fail("玩家動作未跨端:B 端遠端 A 未播攻擊");

// 13. A 舉盾 → B 端 act 應帶舉盾位元(2)
await A.evaluate(() => { window.__game.player.mesh.position.set(5, 2, -52); });
await A.keyboard.down("KeyQ");
const blocked = await B.waitForFunction(
  (tid) => { const rp = window.__game.remotePlayers.get(tid); return !!rp && (rp.actBits & 2) !== 0; },
  ids[0], { timeout: 3000 },
).then(() => true).catch(() => false);
await A.keyboard.up("KeyQ");
blocked
  ? ok("玩家動作跨端:A 舉盾旗標同步到 B")
  : fail("舉盾未跨端:B 端遠端 A 未收到舉盾位元");

// ── 階段 4b:房間聊天 ──────────────────────────────────────
// 14. A 發話 → B 端聊天框應收到並顯示該訊息
const chatMsg = "嗨大家_" + (Date.now() % 100000);
await A.evaluate((m) => window.__game.net.sendChat(m), chatMsg);
const gotChat = await B.waitForFunction(
  (m) => document.querySelector("#chat-log")?.textContent?.includes(m) ?? false,
  chatMsg, { timeout: 3000 },
).then(() => true).catch(() => false);
gotChat
  ? ok("聊天跨端:A 發話 B 端聊天框收到並顯示")
  : fail("聊天未跨端:B 端聊天框未顯示訊息");

// 15. 聊天打字狀態:startTyping/stopTyping 切換 isTyping(供 main 暫停遊戲鍵盤)
await B.evaluate(() => window.__game.chat.startTyping());
const typing = await B.evaluate(() => window.__game.chat.isTyping);
await B.evaluate(() => window.__game.chat.stopTyping());
const stopped = await B.evaluate(() => window.__game.chat.isTyping);
typing && !stopped
  ? ok("聊天打字狀態正確(開→isTyping=true、關→false)")
  : fail(`聊天打字狀態異常:typing=${typing} stopped=${stopped}`);

// ── 階段 4c:客戶端死亡/重生同步 ──────────────────────────────
// 16. B 倒下 → 房主端遠端 B 標記 dead(nearestPlayer 略過,不再鎖定);復活後恢復
await B.evaluate(() => { window.__game.player.hp = 0; });
const deadSeen = await A.waitForFunction(
  (tid) => window.__game.remotePlayers.get(tid)?.dead === true, ids[1], { timeout: 3000 },
).then(() => true).catch(() => false);
deadSeen
  ? ok("死亡同步:B 倒下後房主端標記遠端 B 為 dead(略過鎖定)")
  : fail("死亡未同步:房主端遠端 B 未標記 dead");
await B.evaluate(() => { const g = window.__game; g.player.hp = g.player.stats.maxHP; });
const aliveSeen = await A.waitForFunction(
  (tid) => window.__game.remotePlayers.get(tid)?.dead === false, ids[1], { timeout: 3000 },
).then(() => true).catch(() => false);
aliveSeen
  ? ok("重生同步:B 復活後房主端遠端 B 恢復存活")
  : fail("重生未同步:房主端遠端 B 仍為 dead");

// ── 階段 4d:頭目 AoE 多人分別判定 ──────────────────────────
// 17. A、B 同時站在菁英特殊技範圍內 → 引爆時兩人應各自受擊(非只打最近一位)
const ep12 = await A.evaluate(() => { const e = window.__game.enemies[12].mesh.position; return { x: e.x, z: e.z }; });
await A.evaluate((e) => { const g = window.__game; g.player.hp = g.player.stats.maxHP; g.player.mesh.position.set(e.x + 2, 2, e.z); }, ep12);
await B.evaluate((e) => { const g = window.__game; g.player.hp = g.player.stats.maxHP; g.player.mesh.position.set(e.x - 2, 2, e.z + 2); }, ep12);
await A.waitForTimeout(400); // 等 B 位置同步到房主
const hpA0 = await A.evaluate(() => window.__game.player.hp);
const hpB0 = await B.evaluate(() => window.__game.player.hp);
await A.evaluate(() => window.__game.enemies[12].forceSpecial());
await A.waitForTimeout(1300); // 蓄力 0.7s + 引爆 + 同步
const hpA1 = await A.evaluate(() => window.__game.player.hp);
const hpB1 = await B.evaluate(() => window.__game.player.hp);
hpA1 < hpA0 && hpB1 < hpB0
  ? ok(`頭目 AoE 多人分別判定:房主 A(${hpA0}→${hpA1})與客戶端 B(${hpB0}→${hpB1})同時受擊`)
  : fail(`AoE 未對雙方分別判定:A ${hpA0}→${hpA1}、B ${hpB0}→${hpB1}`);

// ── 階段 5b:插值緩衝 ──────────────────────────────────────
// 18. 把 A 移到無敵人開闊處並等同步;瞬移 +20 後 B 端 avatar 因緩衝延遲不會立刻貼上,隨後平滑到位
await A.evaluate(() => { const g = window.__game; g.player.hp = g.player.stats.maxHP; g.player.mesh.position.set(120, 5, -40); });
await B.waitForFunction(
  (tid) => { const rp = window.__game.remotePlayers.get(tid); return !!rp && Math.hypot(rp.mesh.position.x - 120, rp.mesh.position.z + 40) < 1.5; },
  ids[0], { timeout: 5000 },
).catch(() => {});
const tp = await A.evaluate(() => { const p = window.__game.player.mesh.position; p.x += 20; return { x: p.x, z: p.z }; });
await A.waitForTimeout(60); // 緩衝延遲(~110ms)內,avatar 仍渲染舊位置
const mid = await B.evaluate((tid) => { const rp = window.__game.remotePlayers.get(tid); return { x: rp.mesh.position.x, z: rp.mesh.position.z }; }, ids[0]);
const midGap = Math.hypot(mid.x - tp.x, mid.z - tp.z);
const conv = await B.waitForFunction(
  ({ tid, t }) => { const rp = window.__game.remotePlayers.get(tid); return !!rp && Math.hypot(rp.mesh.position.x - t.x, rp.mesh.position.z - t.z) < 1.0; },
  { tid: ids[0], t: tp }, { timeout: 5000 },
).then(() => true).catch(() => false);
midGap > 5 && conv
  ? ok(`插值緩衝:瞬移後先因緩衝延遲(差 ${midGap.toFixed(1)})、隨後平滑收斂到位`)
  : fail(`插值緩衝異常:midGap=${midGap.toFixed(1)} conv=${conv}`);

// ── 階段 5a:斷線自動重連 ──────────────────────────────────
// 19. 強制 B 斷線 → 應自動退避重連回同房間(connected 復原、取得新 id、重見 A)
const oldId = await B.evaluate(() => window.__game.net.localId);
await B.evaluate(() => window.__game.net._debugDrop());
await B.waitForFunction(() => !window.__game.net.connected, null, { timeout: 3000 }).catch(() => {});
const reconnected = await B.waitForFunction(
  () => window.__game.net.connected && window.__game.net.localId != null,
  null, { timeout: 10000 },
).then(() => true).catch(() => false);
const newId = await B.evaluate(() => window.__game.net.localId);
const reRoom = await B.evaluate(() => window.__game.net.room);
reconnected && newId && newId !== oldId
  ? ok(`斷線自動重連:B 重新連上(id ${oldId}→${newId})`)
  : fail(`重連失敗:connected=${reconnected} id ${oldId}→${newId}`);
reRoom === "mptest"
  ? ok("重連後回到同一房間 mptest")
  : fail(`重連後房間錯誤:${reRoom}`);
const seesAAgain = await B.waitForFunction(
  () => window.__game.remotePlayers.size >= 1, null, { timeout: 5000 },
).then(() => true).catch(() => false);
seesAAgain
  ? ok("重連後重新見到房主 A 的 avatar")
  : fail("重連後未重建遠端玩家");

// ── 階段 5c:房主遷移敵人接管平滑化 + 房主移交 ──────────────────
// 20. A 關閉前先凍結 5 號敵人(B 端傀儡收到冰凍旗標);A 離線→B 接任房主後,
//     該敵應由 becomeAuthoritative 接手控場(freezeT>0),A 的 avatar 被移除。
await A.evaluate(() => window.__game.enemies[5].freeze(8)); // 房主權威凍結
await B.waitForFunction(() => window.__game.enemies[5].remoteStatusFlag === 3, null, { timeout: 3000 }).catch(() => {});
await A.close();
await B.waitForFunction(() => window.__game.net.isHost === true, null, { timeout: 5000 }).catch(() => {});
const afterLeave = await B.evaluate(() => window.__game.remotePlayers.size);
afterLeave === 0 ? ok("A 離線後 B 端正確移除其 avatar") : fail(`A 離線後仍殘留:${afterLeave}`);
const bHostNow = await B.evaluate(() => window.__game.net.isHost);
bHostNow === true ? ok("房主移交成功(A 離線後 B 接任房主)") : fail("房主未移交給 B");
const carriedFreeze = await B.evaluate(() => window.__game.enemies[5].freezeT);
carriedFreeze > 0
  ? ok(`房主遷移平滑接管:接任後 5 號敵控場接手(freezeT=${carriedFreeze.toFixed(1)})`)
  : fail(`接管後控場遺失:freezeT=${carriedFreeze}`);

await browser.close();
if (errors.length) { console.error(`\n多人驗證失敗 ${errors.length} 項`); process.exit(1); }
console.log("\n✅ 多人第 3a/3b/4/5 階段(共享世界 + 成長歸屬 + 互動細節 + 斷線重連 + 插值緩衝 + 房主遷移平滑)驗證全綠");
