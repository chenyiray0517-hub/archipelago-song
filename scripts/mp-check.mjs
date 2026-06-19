// 多人連線第 1 階段驗證:兩個瀏覽器分頁應看到彼此,且位置會同步。
// 前置:npm run server 與 npm run dev 都已啟動。用法:node scripts/mp-check.mjs
import { chromium } from "playwright";

const errors = [];
const fail = (m) => { console.error(`✗ ${m}`); errors.push(m); };
const ok = (m) => console.log(`✓ ${m}`);

const browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--enable-gpu", "--use-angle=metal"] });
const A = await browser.newPage({ viewport: { width: 800, height: 600 } });
const B = await browser.newPage({ viewport: { width: 800, height: 600 } });
for (const [name, p] of [["A", A], ["B", B]]) {
  p.on("pageerror", (e) => fail(`${name} pageerror: ${e.message}`));
  p.on("console", (m) => { if (m.type() === "error") fail(`${name} console: ${m.text()}`); });
}

await A.goto("http://localhost:5173/?mp", { waitUntil: "networkidle" });
await B.goto("http://localhost:5173/?mp", { waitUntil: "networkidle" });

// 1. 兩頁都連上伺服器(等 welcome 封包設好 net.localId,而非猜固定時間)
await Promise.all(
  [A, B].map((p) => p.waitForFunction(() => window.__game?.net?.localId != null, null, { timeout: 10000 })),
).catch(() => fail("等待連線逾時(localId 未就緒)"));
const ids = await Promise.all([A, B].map((p) => p.evaluate(() => window.__game?.net?.localId)));
ids[0] && ids[1] && ids[0] !== ids[1]
  ? ok(`兩頁皆連線,id = ${ids[0]} / ${ids[1]}`)
  : fail(`連線/id 異常:${JSON.stringify(ids)}`);

// 2. 各自看得到對方(remotePlayers 各含 1 人)
await A.waitForTimeout(500);
const counts = await Promise.all([A, B].map((p) => p.evaluate(() => window.__game.remotePlayers.size)));
counts[0] === 1 && counts[1] === 1
  ? ok(`互相看到對方(A 看到 ${counts[0]} 人,B 看到 ${counts[1]} 人)`)
  : fail(`看不到對方:${JSON.stringify(counts)}`);

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

// 4. A 關掉分頁,B 應在短時間內移除遠端 A
await A.close();
await B.waitForTimeout(600);
const afterLeave = await B.evaluate(() => window.__game.remotePlayers.size);
afterLeave === 0 ? ok("A 離線後 B 端正確移除其 avatar") : fail(`A 離線後仍殘留:${afterLeave}`);

await browser.close();
if (errors.length) { console.error(`\n多人驗證失敗 ${errors.length} 項`); process.exit(1); }
console.log("\n✅ 多人第 1 階段驗證全綠");
