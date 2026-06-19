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
const target = await A.evaluate(() => {
  const p = window.__game.player.mesh.position;
  p.x += 12; p.z -= 8;
  return { x: p.x, z: p.z };
});
await A.waitForTimeout(800); // 等封包送達 + B 端插值逼近
const remote = await B.evaluate((tid) => {
  const rp = window.__game.remotePlayers.get(tid);
  if (!rp) return null;
  return { x: rp.mesh.position.x, z: rp.mesh.position.z };
}, ids[0]);
if (remote) {
  const d = Math.hypot(remote.x - target.x, remote.z - target.z);
  d < 1.0
    ? ok(`位置同步:B 端遠端 A 已逼近真實位置(誤差 ${d.toFixed(2)})`)
    : fail(`位置同步誤差過大:${d.toFixed(2)}(target ${JSON.stringify(target)} got ${JSON.stringify(remote)})`);
} else {
  fail("B 端找不到遠端 A");
}

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

// 8. 房主離線 → 移交:A 關閉後,B 應移除 A 的 avatar 並接任房主
await A.close();
await B.waitForTimeout(700);
const afterLeave = await B.evaluate(() => window.__game.remotePlayers.size);
afterLeave === 0 ? ok("A 離線後 B 端正確移除其 avatar") : fail(`A 離線後仍殘留:${afterLeave}`);
const bHostNow = await B.evaluate(() => window.__game.net.isHost);
bHostNow === true ? ok("房主移交成功(A 離線後 B 接任房主)") : fail("房主未移交給 B");

await browser.close();
if (errors.length) { console.error(`\n多人驗證失敗 ${errors.length} 項`); process.exit(1); }
console.log("\n✅ 多人第 3a 階段(房主權威共享敵人)驗證全綠");
