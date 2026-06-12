// 煙霧測試:載入 → 走向史萊姆 → 砍死 → 撿結晶 → 背包使用結晶升級 → 加點
// 用法:npm run dev 啟動後執行 node scripts/smoke.mjs
import { chromium } from "playwright";

const errors = [];
const fail = (msg) => {
  console.error(`✗ ${msg}`);
  errors.push(msg);
};
const ok = (msg) => console.log(`✓ ${msg}`);

// headless 預設用 SwiftShader 軟體渲染(~3fps,時間相關測項全掛),強制走 GPU
const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--enable-gpu", "--use-angle=metal"],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (e) => fail(`pageerror: ${e.message}`));
page.on("console", (m) => {
  if (m.type() === "error") fail(`console: ${m.text()}`);
});

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
await page.screenshot({ path: "/tmp/archipelago-1-initial.png" });

const boot = await page.evaluate(() => ({
  hasGame: !!window.__game,
  enemies: window.__game?.enemies.length,
  playerHp: window.__game?.player.hp,
}));
boot.hasGame ? ok(`遊戲載入,敵人 ${boot.enemies} 隻,玩家 HP ${boot.playerHp}`) : fail("無 __game 掛鉤");

// 1. 走向史萊姆(W+D 斜走 1 秒,引怪追擊)
await page.keyboard.down("w");
await page.keyboard.down("d");
await page.waitForTimeout(1000);
await page.keyboard.up("w");
await page.keyboard.up("d");

// 2. 連打直到至少一隻史萊姆死亡(上限 20 刀)。
// 揮劍是前方扇形判定,每刀前先依最近敵人方位輕點方向鍵轉身。
// 鏡頭初始 yaw=π:W=+z、S=−z、A=+x、D=−x。
const faceNearestEnemy = async () => {
  const dir = await page.evaluate(() => {
    const p = window.__game.player.mesh.position;
    let best = null;
    let bestDist = Infinity;
    for (const e of window.__game.enemies) {
      if (e.isDead) continue;
      const d = e.mesh.position.distanceTo(p);
      if (d < bestDist) {
        bestDist = d;
        best = e;
      }
    }
    if (!best) return null;
    return { dx: best.mesh.position.x - p.x, dz: best.mesh.position.z - p.z, dist: bestDist };
  });
  if (!dir || dir.dist < 0.6) return;
  const len = Math.hypot(dir.dx, dir.dz);
  const keys = [];
  if (dir.dz / len > 0.4) keys.push("w");
  if (dir.dz / len < -0.4) keys.push("s");
  if (dir.dx / len > 0.4) keys.push("a");
  if (dir.dx / len < -0.4) keys.push("d");
  for (const k of keys) await page.keyboard.down(k);
  await page.waitForTimeout(120);
  for (const k of keys) await page.keyboard.up(k);
};

let killed = false;
for (let i = 0; i < 20 && !killed; i++) {
  await faceNearestEnemy();
  await page.mouse.click(640, 400);
  await page.waitForTimeout(450);
  killed = await page.evaluate(() => window.__game.enemies.some((e) => e.isDead));
}
killed ? ok("擊殺敵人") : fail("20 刀內未擊殺任何敵人");
await page.screenshot({ path: "/tmp/archipelago-2-combat.png" });

// 3. 原地等磁吸撿掉落物
await page.waitForTimeout(1500);
const loot = await page.evaluate(() => ({
  crystals: window.__game.inventory.crystals.small,
  coins: window.__game.inventory.coins,
}));
loot.crystals >= 1 ? ok(`撿到小型結晶 ×${loot.crystals}`) : fail("未撿到結晶");
loot.coins >= 5 ? ok(`撿到貝拉幣 ${loot.coins}`) : fail("未撿到貝拉幣");

// 3b. 戰鬥回饋:傷害跳字曾出現、撿取提示曾出現、血條有數值
const feedback = await page.evaluate(() => ({
  dmgFloats: window.__game.floats.totalSpawned,
  pickupFeed: window.__game.feed.totalSpawned,
  hpNum: document.getElementById("hud-hp-num")?.textContent ?? "",
}));
feedback.dmgFloats > 0 ? ok(`傷害跳字出現(累計 ${feedback.dmgFloats} 次)`) : fail("無傷害跳字");
feedback.pickupFeed > 0 ? ok(`撿取提示出現(累計 ${feedback.pickupFeed} 次)`) : fail("無撿取提示");
/\d+ \/ \d+/.test(feedback.hpNum) ? ok(`血條數值顯示(${feedback.hpNum})`) : fail(`血條無數值:${feedback.hpNum}`);

// 4. 補足結晶後開背包,點「全部」使用 → 應升級
await page.evaluate(() => {
  window.__game.inventory.crystals.small += 12;
});
await page.keyboard.press("Tab");
await page.waitForTimeout(400);
await page.screenshot({ path: "/tmp/archipelago-3-bag.png" });
await page.click('button[data-use="small"][data-count="999"]');
await page.waitForTimeout(400);
const afterUse = await page.evaluate(() => ({
  level: window.__game.player.stats.level,
  points: window.__game.player.stats.points,
}));
afterUse.level >= 2 ? ok(`使用結晶後升級至 Lv.${afterUse.level}`) : fail(`未升級(Lv.${afterUse.level})`);
afterUse.points >= 3 ? ok(`獲得能力點數 ${afterUse.points}`) : fail("未獲得點數");

// 5. 分配 1 點力量 → 攻擊力 +2
await page.click('button[data-alloc="str"]');
await page.waitForTimeout(300);
const afterAlloc = await page.evaluate(() => ({
  str: window.__game.player.stats.attrs.str,
  atk: window.__game.player.stats.atk,
}));
afterAlloc.str === 1 && afterAlloc.atk === 12
  ? ok(`加點成功:力量 ${afterAlloc.str},攻擊 ${afterAlloc.atk}`)
  : fail(`加點異常:${JSON.stringify(afterAlloc)}`);
await page.screenshot({ path: "/tmp/archipelago-4-alloc.png" });
await page.keyboard.press("Tab"); // 關背包
await page.waitForTimeout(300);

// 6. 舉盾防禦:Q 按住 → blocking,正面來襲傷害減 85%
await page.keyboard.down("q");
await page.waitForTimeout(300);
const blockResult = await page.evaluate(() => {
  const p = window.__game.player;
  const blockingState = p.blocking;
  const front = p.mesh.position.clone();
  front.x += Math.sin(p.facing) * 2;
  front.z += Math.cos(p.facing) * 2;
  const hit = p.takeDamage(20, front);
  return { blockingState, ...hit };
});
await page.keyboard.up("q");
blockResult.blockingState ? ok("Q 按住進入舉盾狀態") : fail("未進入舉盾狀態");
blockResult.blocked && blockResult.taken <= 3
  ? ok(`格擋成功:20 點正面傷害只受 ${blockResult.taken} 點`)
  : fail(`格擋異常:${JSON.stringify(blockResult)}`);
await page.waitForTimeout(400);
const unblocked = await page.evaluate(() => window.__game.player.blocking);
!unblocked ? ok("放開 Q 解除舉盾") : fail("舉盾未解除");

// 7. 集氣迴旋斬:走近敵人 → 按住左鍵 → 集氣滿 → 放開 → 對周圍敵人造成傷害
for (let i = 0; i < 20; i++) {
  const near = await page.evaluate(() => {
    const p = window.__game.player.mesh.position;
    return window.__game.enemies.some(
      (e) => !e.isDead && e.mesh.position.distanceTo(p) < 3.5,
    );
  });
  if (near) break;
  await faceNearestEnemy();
  await page.waitForTimeout(150);
}
await page.mouse.down();
await page.waitForTimeout(1600);
const charged = await page.evaluate(() => window.__game.player.chargeRatio);
await page.screenshot({ path: "/tmp/archipelago-22-charged.png" }); // 滿氣劍身閃光目視確認
const nearBefore = await page.evaluate(() => {
  const p = window.__game.player.mesh.position;
  return window.__game.enemies
    .map((e, i) => ({ i, hp: e.hp, dist: e.mesh.position.distanceTo(p), dead: e.isDead }))
    .filter((e) => !e.dead && e.dist < 4.5);
});
await page.mouse.up();
await page.waitForTimeout(200);
const waveCount = await page.evaluate(() => window.__game.shockwaves.length);
waveCount > 0 ? ok("滿氣釋放衝擊波") : fail("滿氣未產生衝擊波");
await page.waitForTimeout(300);
charged >= 0.99 ? ok(`集氣滿(ratio=${charged.toFixed(2)})`) : fail(`集氣未滿:${charged}`);
const after = await page.evaluate(() => window.__game.player.chargeRatio);
after === 0 ? ok("放開後集氣歸零") : fail(`集氣未歸零:${after}`);
if (nearBefore.length > 0) {
  const nearAfter = await page.evaluate(
    (idx) => idx.map((i) => ({ hp: window.__game.enemies[i].hp, dead: window.__game.enemies[i].isDead })),
    nearBefore.map((e) => e.i),
  );
  const damaged = nearAfter.some((e, j) => e.dead || e.hp < nearBefore[j].hp);
  damaged ? ok(`迴旋斬命中範圍內 ${nearBefore.length} 隻敵人`) : fail("迴旋斬未造成傷害");
} else {
  ok("(範圍內無敵人,跳過迴旋斬傷害驗證)");
}
await page.screenshot({ path: "/tmp/archipelago-5-skills.png" });

// 8. 焰心石火焰斬:授予寶石 → E 施放 → 靈力扣除 + 火焰劍氣生成
const flameResult = await page.evaluate(() => {
  window.__game.gems.flameOwned = true;
  return window.__game.player.mp;
});
await page.keyboard.press("e");
await page.waitForTimeout(200);
const afterFlame = await page.evaluate(() => ({
  mp: window.__game.player.mp,
  waves: window.__game.shockwaves.length,
}));
afterFlame.mp <= flameResult - 9
  ? ok(`火焰斬消耗靈力(${Math.round(flameResult)} → ${Math.round(afterFlame.mp)})`)
  : fail(`靈力未扣除:${flameResult} → ${afterFlame.mp}`);
afterFlame.waves > 0 ? ok("火焰劍氣生成") : fail("火焰劍氣未生成");
await page.screenshot({ path: "/tmp/archipelago-6-flame.png" });

// 9. NPC 對話:存檔含位置會干擾,直接把玩家移回漁村旁再走向村長
await page.evaluate(() => {
  window.__game.player.mesh.position.set(2.5, 1, -53);
});
await page.keyboard.down("w");
await page.waitForTimeout(350);
await page.keyboard.up("w");
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const dialogOpen = await page.evaluate(
  () => document.getElementById("dialog")?.classList.contains("show") ?? false,
);
dialogOpen ? ok("NPC 對話開啟") : fail("NPC 對話未開啟");
let dialogClosed = false;
for (let i = 0; i < 8 && !dialogClosed; i++) {
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
  dialogClosed = await page.evaluate(
    () => !document.getElementById("dialog")?.classList.contains("show"),
  );
}
dialogClosed ? ok("對話推進至結束自動關閉") : fail("對話未關閉");
await page.screenshot({ path: "/tmp/archipelago-7-npc.png" });

// 11. 任務回報:再跟村長對話(已持有焰心石)→ 任務完成 + 100 貝拉幣獎勵
const coinsBefore = await page.evaluate(() => window.__game.inventory.coins);
await page.keyboard.press("f");
await page.waitForTimeout(300);
for (let i = 0; i < 8; i++) {
  const open = await page.evaluate(
    () => document.getElementById("dialog")?.classList.contains("show") ?? false,
  );
  if (!open) break;
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
}
const questResult = await page.evaluate(() => ({
  state: window.__game.quests.get("gem"),
  coins: window.__game.inventory.coins,
}));
questResult.state === "done" ? ok("任務「取回焰心石」回報完成") : fail(`任務狀態:${questResult.state}`);
questResult.coins >= coinsBefore + 100
  ? ok(`任務獎勵入帳(${coinsBefore} → ${questResult.coins} 貝拉幣)`)
  : fail(`獎勵未入帳:${coinsBefore} → ${questResult.coins}`);

// 12. 商店:走向商人 → F 開店 → 買藥水 → F 關店
await page.evaluate(() => {
  window.__game.player.mesh.position.set(7, 1, -49.5);
  window.__game.inventory.coins = Math.max(window.__game.inventory.coins, 100);
});
await page.keyboard.down("w");
await page.waitForTimeout(350);
await page.keyboard.up("w");
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const shopOpen = await page.evaluate(() => window.__game.shop.isOpen);
shopOpen ? ok("商店開啟") : fail("商店未開啟");
const shopBefore = await page.evaluate(() => ({ coins: window.__game.inventory.coins }));
await page.click('button[data-buy="potion"]');
await page.waitForTimeout(200);
const shopAfter = await page.evaluate(() => ({
  coins: window.__game.inventory.coins,
  potions: window.__game.inventory.potions,
}));
shopAfter.potions >= 1 && shopAfter.coins === shopBefore.coins - 30
  ? ok(`購買藥水成功(🪙 ${shopBefore.coins} → ${shopAfter.coins},🧪 ${shopAfter.potions})`)
  : fail(`購買異常:${JSON.stringify({ shopBefore, shopAfter })}`);
await page.keyboard.press("f");
await page.waitForTimeout(200);
const shopClosed = await page.evaluate(() => !window.__game.shop.isOpen);
shopClosed ? ok("商店關閉") : fail("商店未關閉");

// 13. R 喝藥水:扣血後使用 → 回血 + 藥水歸零
const potionTest = await page.evaluate(() => {
  const p = window.__game.player;
  p.takeDamage(40);
  return p.hp;
});
await page.keyboard.press("r");
await page.waitForTimeout(200);
const afterPotion = await page.evaluate(() => ({
  hp: window.__game.player.hp,
  potions: window.__game.inventory.potions,
}));
afterPotion.hp > potionTest
  ? ok(`藥水回血(${potionTest} → ${afterPotion.hp})`)
  : fail(`藥水未回血:${potionTest} → ${afterPotion.hp}`);

// 14. 果凍清理任務:跟漁夫對話接取 → HUD 任務列顯示
await page.evaluate(() => {
  window.__game.player.mesh.position.set(-4, 1, -51);
});
await page.keyboard.down("w");
await page.waitForTimeout(350);
await page.keyboard.up("w");
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
for (let i = 0; i < 8; i++) {
  const open = await page.evaluate(
    () => document.getElementById("dialog")?.classList.contains("show") ?? false,
  );
  if (!open) break;
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
}
const jellyState = await page.evaluate(() => ({
  state: window.__game.quests.get("jelly"),
  hudText: document.getElementById("hud-quest-list")?.textContent ?? "",
}));
jellyState.state === "active" ? ok("任務「果凍清理」接取") : fail(`任務狀態:${jellyState.state}`);
jellyState.hudText.includes("果凍清理")
  ? ok(`HUD 任務列顯示:${jellyState.hudText}`)
  : fail(`HUD 任務列異常:${jellyState.hudText}`);
await page.screenshot({ path: "/tmp/archipelago-8-quest.png" });

// 15. 出海:走到南灘小船旁 → F 上船 → W 前進,船應駛離泊點
await page.evaluate(() => {
  window.__game.player.mesh.position.set(4, 1, -60);
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const sailingOn = await page.evaluate(() => window.__game.sailing);
sailingOn ? ok("F 上船進入航行模式") : fail("未進入航行模式");
await page.keyboard.down("w");
await page.waitForTimeout(1500);
await page.keyboard.up("w");
const boatMoved = await page.evaluate(() => {
  const b = window.__game.boat.mesh.position;
  return Math.hypot(b.x - 4, b.z - -63);
});
boatMoved > 5 ? ok(`船隻航行了 ${boatMoved.toFixed(1)} 單位`) : fail(`船未移動:${boatMoved}`);
await page.screenshot({ path: "/tmp/archipelago-9-sail.png" });
await page.waitForTimeout(1800); // 等船的慣性滑行完全停止,避免傳送後繼續漂離岸邊

// 16. 翠風林島上岸:把船開到南岸 → F 上岸
await page.evaluate(() => {
  window.__game.boat.place(150, 56);
});
await page.waitForTimeout(400);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const landed = await page.evaluate(() => ({
  sailing: window.__game.sailing,
  pos: window.__game.player.mesh.position.toArray().map((n) => Math.round(n)),
}));
!landed.sailing ? ok(`翠風林島上岸(位置 ${landed.pos})`) : fail("未能上岸");

// 17. 風語石:二段跳 + 滑翔
await page.evaluate(() => {
  window.__game.gems.windOwned = true;
  window.__game.player.hasWindGem = true;
});
await page.keyboard.press("Space");
await page.waitForTimeout(200);
await page.keyboard.press("Space");
await page.waitForTimeout(100);
const doubleJump = await page.evaluate(() => window.__game.player.airJumpsUsed);
doubleJump === 1 ? ok("二段跳觸發") : fail(`二段跳未觸發:airJumpsUsed=${doubleJump}`);
await page.waitForTimeout(300);
await page.keyboard.down("Space");
await page.waitForTimeout(250);
const glide = await page.evaluate(() => window.__game.player.gliding);
await page.keyboard.up("Space");
glide ? ok("滑翔觸發(下落減速)") : fail("滑翔未觸發");
await page.screenshot({ path: "/tmp/archipelago-10-jungle.png" });

// 18. 熔岩環境傷害:傳送到火山口熔岩區,血量應持續下降
const hpBeforeLava = await page.evaluate(() => {
  const p = window.__game.player;
  p.hp = p.stats.maxHP;
  p.mesh.position.set(-150, 18, 120);
  return p.hp;
});
await page.waitForTimeout(2200);
const hpAfterLava = await page.evaluate(() => window.__game.player.hp);
hpAfterLava < hpBeforeLava
  ? ok(`熔岩灼傷生效(HP ${hpBeforeLava} → ${hpAfterLava})`)
  : fail(`熔岩未造成傷害:${hpBeforeLava} → ${hpAfterLava}`);
await page.screenshot({ path: "/tmp/archipelago-11-volcano.png" });

// 19. 地殼石地震波:授予寶石 → C 施放 → 靈力扣除
const mpBeforeQuake = await page.evaluate(() => {
  window.__game.gems.earthOwned = true;
  const p = window.__game.player;
  p.mesh.position.set(-150, 5, 95); // 離開熔岩區
  p.mp = p.stats.maxMP;
  return p.mp;
});
await page.waitForTimeout(300);
await page.keyboard.press("c");
await page.waitForTimeout(200);
const mpAfterQuake = await page.evaluate(() => window.__game.player.mp);
mpAfterQuake <= mpBeforeQuake - 14
  ? ok(`地震波消耗靈力(${Math.round(mpBeforeQuake)} → ${Math.round(mpAfterQuake)})`)
  : fail(`地震波靈力未扣:${mpBeforeQuake} → ${mpAfterQuake}`);

// 20. 鍛造:走到爐婆旁 → F 開鍛造坊 → 強化武器 → 攻擊力 +3
const atkBefore = await page.evaluate(() => {
  window.__game.player.mesh.position.set(-150, 1, 81);
  window.__game.inventory.coins = Math.max(window.__game.inventory.coins, 150);
  return window.__game.player.stats.atk;
});
await page.waitForTimeout(400);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const forgeOpen = await page.evaluate(() => window.__game.forge.isOpen);
forgeOpen ? ok("鍛造坊開啟") : fail("鍛造坊未開啟");
await page.click("#forge-btn");
await page.waitForTimeout(200);
const afterForge = await page.evaluate(() => ({
  atk: window.__game.player.stats.atk,
  weaponLevel: window.__game.player.stats.weaponLevel,
}));
afterForge.atk === atkBefore + 3 && afterForge.weaponLevel === 1
  ? ok(`武器強化成功(攻擊 ${atkBefore} → ${afterForge.atk})`)
  : fail(`鍛造異常:${JSON.stringify({ atkBefore, afterForge })}`);
await page.keyboard.press("f");
await page.waitForTimeout(200);
await page.screenshot({ path: "/tmp/archipelago-12-forge.png" });

// 21. 霜雪峰陡坡滑行:傳送到雪峰中坡,無輸入應自動下滑
const slideBefore = await page.evaluate(() => {
  const p = window.__game.player;
  p.hp = p.stats.maxHP;
  p.mesh.position.set(60, 16, -155);
  return p.mesh.position.z;
});
await page.waitForTimeout(1500);
const slideAfter = await page.evaluate(() => ({
  z: window.__game.player.mesh.position.z,
  sliding: window.__game.player.sliding,
}));
slideAfter.z - slideBefore > 2
  ? ok(`陡坡滑行(z ${slideBefore.toFixed(0)} → ${slideAfter.z.toFixed(1)})`)
  : fail(`未滑行:${slideBefore} → ${slideAfter.z}(sliding=${slideAfter.sliding})`);
await page.screenshot({ path: "/tmp/archipelago-14-snow.png" });

// 22. 霜語晶冰箭:V 施放 → 靈力扣除 + 冰箭生成
const mpBeforeIce = await page.evaluate(() => {
  window.__game.gems.frostOwned = true;
  window.__game.player.hasFrostGem = true;
  const p = window.__game.player;
  p.mp = p.stats.maxMP;
  p.mesh.position.set(60, 1, -215); // 雪峰島南灘,離開陡坡
  return p.mp;
});
await page.waitForTimeout(300);
await page.keyboard.press("v");
await page.waitForTimeout(200);
const afterIce = await page.evaluate(() => ({
  mp: window.__game.player.mp,
  waves: window.__game.shockwaves.length,
}));
afterIce.mp <= mpBeforeIce - 11
  ? ok(`冰箭消耗靈力(${Math.round(mpBeforeIce)} → ${Math.round(afterIce.mp)})`)
  : fail(`冰箭靈力未扣:${mpBeforeIce} → ${afterIce.mp}`);
afterIce.waves > 0 ? ok("冰箭生成") : fail("冰箭未生成");

// 23. 冰面渡水:走出涉水範圍踏上海面 → 靈力持續消耗;靈力歸零 → 碎裂沖回岸邊
await page.evaluate(() => {
  const p = window.__game.player;
  p.mp = p.stats.maxMP;
  p.mesh.position.set(0, 1, -75); // 曙光嶼外海(涉水範圍外)
});
await page.waitForTimeout(1500);
const frostWalk = await page.evaluate(() => ({
  mp: window.__game.player.mp,
  maxMp: window.__game.player.stats.maxMP,
}));
frostWalk.mp < frostWalk.maxMp - 1
  ? ok(`冰面渡水消耗靈力(${frostWalk.maxMp} → ${frostWalk.mp.toFixed(1)})`)
  : fail(`渡水靈力未消耗:${JSON.stringify(frostWalk)}`);
await page.evaluate(() => {
  window.__game.player.mp = 0.5; // 快轉到即將耗盡
});
await page.waitForTimeout(800);
const shattered = await page.evaluate(() => {
  const p = window.__game.player.mesh.position;
  return { x: p.x, z: p.z, dist: Math.hypot(p.x, p.z) };
});
shattered.dist < 60
  ? ok(`冰面碎裂沖回岸邊(離島心 ${shattered.dist.toFixed(1)})`)
  : fail(`未沖回岸邊:${JSON.stringify(shattered)}`);

// 24. 潮汐石:開船靠近隱藏海域 → 自動拾取
await page.evaluate(() => {
  const g = window.__game;
  g.player.mesh.position.set(4, 1, -60);
  g.boat.place(4, -63); // 船拉回泊點(前面測試把船留在翠風林島)
});
await page.waitForTimeout(300);
await page.keyboard.press("f"); // 上船
await page.waitForTimeout(300);
await page.evaluate(() => {
  window.__game.boat.place(-60, -120); // 隱藏海域
});
await page.waitForTimeout(1200);
const tideOwned = await page.evaluate(() => window.__game.gems.tideOwned);
tideOwned ? ok("開船拾取潮汐石") : fail("潮汐石未拾取");

// 25. 潛入沉沒古城:船開到遺跡上方 → F 潛入 → 藍色濾鏡 + 水下行走
await page.evaluate(() => {
  window.__game.boat.place(-40, 230);
});
await page.waitForTimeout(600);
await page.keyboard.press("f");
await page.waitForTimeout(400);
const diveState = await page.evaluate(() => ({
  diving: window.__game.diving,
  y: window.__game.player.mesh.position.y,
}));
diveState.diving && diveState.y < 1.5
  ? ok(`潛入沉沒古城(海底 y=${diveState.y.toFixed(1)})`)
  : fail(`潛入失敗:${JSON.stringify(diveState)}`);
await page.screenshot({ path: "/tmp/archipelago-15-dive.png" });

// 26. 虛空石瞬移:授予寶石 → X → 位置位移 + 靈力扣除
const blinkBefore = await page.evaluate(() => {
  window.__game.gems.voidOwned = true;
  const p = window.__game.player;
  p.mp = p.stats.maxMP;
  return { x: p.mesh.position.x, z: p.mesh.position.z, mp: p.mp };
});
await page.keyboard.press("x");
await page.waitForTimeout(200);
const blinkAfter = await page.evaluate(() => {
  const p = window.__game.player;
  return { x: p.mesh.position.x, z: p.mesh.position.z, mp: p.mp };
});
const blinkDist = Math.hypot(blinkAfter.x - blinkBefore.x, blinkAfter.z - blinkBefore.z);
blinkDist > 3 && blinkAfter.mp < blinkBefore.mp
  ? ok(`瞬移成功(位移 ${blinkDist.toFixed(1)},靈力 ${blinkBefore.mp} → ${blinkAfter.mp.toFixed(0)})`)
  : fail(`瞬移異常:位移 ${blinkDist}`);

// 27. 浮上水面:F → 回到船上恢復航行
await page.keyboard.press("f");
await page.waitForTimeout(300);
const surfaced = await page.evaluate(() => ({
  diving: window.__game.diving,
  sailing: window.__game.sailing,
}));
!surfaced.diving && surfaced.sailing ? ok("浮上水面回到船上") : fail(`浮上異常:${JSON.stringify(surfaced)}`);

// 28. 最終頭目與結局:直接擊殺虛空魔王 → 結局畫面顯示
await page.evaluate(() => {
  const lord = window.__game.enemies.find((e) => e.kind === "voidLord");
  lord.takeDamage(99999);
});
await page.waitForTimeout(600);
const endingVisible = await page.evaluate(
  () => document.getElementById("ending")?.style.display === "flex",
);
endingVisible ? ok("擊敗虛空魔王 → 結局畫面顯示") : fail("結局畫面未顯示");
await page.screenshot({ path: "/tmp/archipelago-16-ending.png" });
await page.click("#ending button");
await page.waitForTimeout(200);
const endingClosed = await page.evaluate(
  () => document.getElementById("ending")?.style.display === "none",
);
endingClosed ? ok("結局畫面可關閉繼續遊玩") : fail("結局畫面未關閉");

// 29. 漂流寶箱:開船到寶箱位置 → 自動開啟 → 隨機獎勵入帳
const chestBefore = await page.evaluate(() => {
  const g = window.__game;
  const chest = g.chests.find((c) => c.active);
  g.boat.place(chest.mesh.position.x, chest.mesh.position.z);
  return {
    coins: g.inventory.coins,
    small: g.inventory.crystals.small,
    medium: g.inventory.crystals.medium,
    potions: g.inventory.potions,
  };
});
await page.waitForTimeout(800);
const chestAfter = await page.evaluate(() => {
  const g = window.__game;
  return {
    coins: g.inventory.coins,
    small: g.inventory.crystals.small,
    medium: g.inventory.crystals.medium,
    potions: g.inventory.potions,
    activeCount: g.chests.filter((c) => c.active).length,
  };
});
const rewarded =
  chestAfter.coins > chestBefore.coins ||
  chestAfter.small > chestBefore.small ||
  chestAfter.medium > chestBefore.medium ||
  chestAfter.potions > chestBefore.potions;
rewarded ? ok("漂流寶箱開啟並獲得獎勵") : fail(`寶箱無獎勵:${JSON.stringify({ chestBefore, chestAfter })}`);
chestAfter.activeCount === 5 ? ok("寶箱進入重生倒數(剩 5 個活躍)") : fail(`寶箱數異常:${chestAfter.activeCount}`);

// 30. 設定選單:ESC 開啟 → 關音樂 → 關死亡掉落 → ESC 關閉
await page.keyboard.press("Escape");
await page.waitForTimeout(300);
const settingsOpen = await page.evaluate(() => window.__game.settings.isOpen);
settingsOpen ? ok("ESC 開啟設定選單") : fail("設定選單未開啟");
await page.click("#set-music");
await page.click("#set-drop");
await page.waitForTimeout(200);
const settingsState = await page.evaluate(() => ({ ...window.__game.settings.settings }));
!settingsState.music && !settingsState.deathDrop
  ? ok("音樂與死亡掉落開關生效")
  : fail(`設定異常:${JSON.stringify(settingsState)}`);
await page.keyboard.press("Escape");
await page.waitForTimeout(200);
const settingsClosed = await page.evaluate(() => !window.__game.settings.isOpen);
settingsClosed ? ok("ESC 關閉設定選單") : fail("設定選單未關閉");
await page.evaluate(() => {
  // 還原預設,避免影響後續輪次
  window.__game.settings.settings.music = true;
  window.__game.settings.settings.deathDrop = true;
  localStorage.removeItem("archipelago-settings-v1");
});

// 31. 寶石盤:開背包 → 顯示六顆寶石收集狀態
await page.keyboard.press("Tab");
await page.waitForTimeout(300);
const bagGems = await page.evaluate(() => {
  const html = document.getElementById("bag")?.innerHTML ?? "";
  return {
    hasPanel: html.includes("靈紋寶石盤"),
    slots: (html.match(/gem-slot/g) ?? []).length,
    ownedSlots: (html.match(/gem-slot "/g) ?? []).length,
  };
});
bagGems.hasPanel && bagGems.slots >= 6
  ? ok(`背包寶石盤顯示(${bagGems.slots} 格)`)
  : fail(`寶石盤異常:${JSON.stringify(bagGems)}`);
await page.screenshot({ path: "/tmp/archipelago-17-gembag.png" });
await page.keyboard.press("Tab");
await page.waitForTimeout(200);

// 32. 購買裝備:靠岸 → 到商人處買鐵盔
await page.evaluate(() => {
  window.__game.boat.place(0, -60);
});
await page.waitForTimeout(600);
await page.keyboard.press("f"); // 上岸
await page.waitForTimeout(400);
await page.evaluate(() => {
  window.__game.player.mesh.position.set(7, 1, -47.5);
  window.__game.inventory.coins = Math.max(window.__game.inventory.coins, 1000);
});
await page.waitForTimeout(400);
await page.keyboard.press("f"); // 開商店
await page.waitForTimeout(300);
await page.click('button[data-buyequip="helm"]');
await page.waitForTimeout(200);
const boughtHelm = await page.evaluate(() => window.__game.equipment.has("helm"));
boughtHelm ? ok("購買鐵盔成功") : fail("鐵盔未購入");
await page.keyboard.press("f"); // 關商店
await page.waitForTimeout(200);

// 33. 穿戴裝備:背包裝備鐵盔 → 防禦 +5
const defBefore = await page.evaluate(() => window.__game.player.stats.def);
await page.keyboard.press("Tab");
await page.waitForTimeout(300);
await page.click('button[data-equip="helm"]');
await page.waitForTimeout(200);
const afterEquip = await page.evaluate(() => ({
  def: window.__game.player.stats.def,
  head: window.__game.equipment.equipped.head,
}));
afterEquip.def === defBefore + 5 && afterEquip.head === "helm"
  ? ok(`穿戴鐵盔(防禦 ${defBefore} → ${afterEquip.def})`)
  : fail(`穿戴異常:${JSON.stringify({ defBefore, afterEquip })}`);
await page.screenshot({ path: "/tmp/archipelago-18-equip.png" });
await page.keyboard.press("Tab");
await page.waitForTimeout(200);

// 34. 寶石升階:到爐婆鍛造坊升焰心石 → Lv.2、火焰斬傷害提升
await page.evaluate(() => {
  window.__game.player.mesh.position.set(-150, 1, 81);
  window.__game.inventory.coins = Math.max(window.__game.inventory.coins, 500);
});
await page.waitForTimeout(400);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const coinsBeforeUp = await page.evaluate(() => window.__game.inventory.coins);
await page.click('button[data-gemup="flame"]');
await page.waitForTimeout(200);
const afterGemUp = await page.evaluate(() => ({
  level: window.__game.gems.levels.flame,
  coins: window.__game.inventory.coins,
}));
afterGemUp.level === 2 && afterGemUp.coins === coinsBeforeUp - 400
  ? ok(`焰心石升階 Lv.2(🪙 ${coinsBeforeUp} → ${afterGemUp.coins})`)
  : fail(`升階異常:${JSON.stringify({ coinsBeforeUp, afterGemUp })}`);
await page.screenshot({ path: "/tmp/archipelago-19-gemup.png" });
await page.keyboard.press("f");
await page.waitForTimeout(200);

// 35. 日夜循環:撥到夜晚 → 太陽轉暗 + 配樂切夜晚主題
await page.evaluate(() => {
  window.__game.sky.time = 0.8; // 夜晚
});
await page.waitForTimeout(400);
const nightState = await page.evaluate(() => ({
  mode: window.__game.audio.musicMode,
  sunIntensity: window.__game.sky ? undefined : undefined,
}));
nightState.mode === "night" ? ok("夜晚:配樂切換為夜晚主題") : fail(`配樂模式:${nightState.mode}`);
await page.screenshot({ path: "/tmp/archipelago-20-night.png" });

// 36. 風暴天氣:強制風暴 → 雨絲顯示 + 雷聲事件循環
await page.evaluate(() => {
  window.__game.sky.forceWeather("storm");
});
await page.waitForTimeout(500);
const stormState = await page.evaluate(() => ({
  weather: window.__game.sky.weather,
  rain: window.__game.sky.rainVisible,
}));
stormState.weather === "storm" && stormState.rain
  ? ok("風暴:雨絲粒子顯示")
  : fail(`風暴異常:${JSON.stringify(stormState)}`);
await page.screenshot({ path: "/tmp/archipelago-21-storm.png" });

// 37. 恢復白天晴天:配樂切回白天主題、雨停
await page.evaluate(() => {
  window.__game.sky.time = 0.3;
  window.__game.sky.forceWeather("clear");
});
await page.waitForTimeout(400);
const dayState = await page.evaluate(() => ({
  mode: window.__game.audio.musicMode,
  rain: window.__game.sky.rainVisible,
}));
dayState.mode === "day" && !dayState.rain
  ? ok("白天晴天:配樂切回白天主題、雨停")
  : fail(`白天異常:${JSON.stringify(dayState)}`);

// 38. 重生點:每島一座石碑;F 設置(上限 2,第三座替換最早的)
const shrineCount = await page.evaluate(() => window.__game.shrines.length);
shrineCount === 5 ? ok("每座島各一座重生石碑(共 5 座)") : fail(`石碑數量異常:${shrineCount}`);

await page.evaluate(() => {
  window.__game.player.mesh.position.set(-9, 1, -46); // 曙光嶼石碑旁
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(200);
const shrine1 = await page.evaluate(() => window.__game.shrineIds);
shrine1.includes("dawn") ? ok("F 設置曙光嶼重生點") : fail(`重生點未設置:${JSON.stringify(shrine1)}`);

await page.evaluate(() => {
  window.__game.player.mesh.position.set(150, 1, 66); // 翠風林島石碑旁
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(200);
await page.evaluate(() => {
  window.__game.player.mesh.position.set(-143, 1, 76); // 燼岩火山島石碑旁(第三座)
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(200);
const shrine3 = await page.evaluate(() => window.__game.shrineIds);
shrine3.length === 2 && !shrine3.includes("dawn") && shrine3.includes("verdant") && shrine3.includes("ember")
  ? ok(`重生點上限 2 個,第三座替換最早的(${shrine3.join("+")})`)
  : fail(`替換邏輯異常:${JSON.stringify(shrine3)}`);
await page.screenshot({ path: "/tmp/archipelago-23-shrine.png" });

// 39. 死亡重生選擇:熔岩中倒下 → 海灘 + 兩個重生點共三個選項 → 選燼岩重生
await page.evaluate(() => {
  const p = window.__game.player;
  p.hp = 5;
  p.mesh.position.set(-150, 18, 120); // 火山口熔岩
});
let deadShown = false;
for (let i = 0; i < 12 && !deadShown; i++) {
  await page.waitForTimeout(500);
  deadShown = await page.evaluate(
    () => document.getElementById("death")?.classList.contains("show") ?? false,
  );
}
deadShown ? ok("熔岩倒下 → 死亡畫面顯示") : fail("死亡畫面未顯示");
const respawnBtns = await page.evaluate(() =>
  [...document.querySelectorAll("#death button")].map((b) => b.dataset.respawn),
);
respawnBtns.length === 3 && respawnBtns[0] === "beach"
  ? ok(`重生選項 3 個(${respawnBtns.join("/")})`)
  : fail(`重生選項異常:${JSON.stringify(respawnBtns)}`);
await page.screenshot({ path: "/tmp/archipelago-24-death-choice.png" });
await page.click('#death button[data-respawn="ember"]');
await page.waitForTimeout(300);
const respawned = await page.evaluate(() => {
  const g = window.__game;
  const p = g.player.mesh.position;
  const b = g.boat.mesh.position;
  return { x: p.x, z: p.z, hp: g.player.hp, bx: b.x, bz: b.z };
});
Math.hypot(respawned.x - -143, respawned.z - 76) < 3 && respawned.hp > 0
  ? ok(`在燼岩重生點復活(位置 ${respawned.x.toFixed(0)},${respawned.z.toFixed(0)})`)
  : fail(`重生位置異常:${JSON.stringify(respawned)}`);
Math.hypot(respawned.bx - -150, respawned.bz - 62) < 6
  ? ok("船隻移到燼岩島近岸(不會被困)")
  : fail(`船位異常:${JSON.stringify(respawned)}`);

// 40. 島嶼清剿任務:四座外島各有任務 NPC;接取 → 擊殺進度 → 回報領貝拉幣+結晶
const npcCount = await page.evaluate(() => window.__game.npcs.length);
npcCount === 10 ? ok("任務 NPC 到位(共 10 位,含領航者與鎮長)") : fail(`NPC 數量異常:${npcCount}`);

await page.evaluate(() => {
  window.__game.player.mesh.position.set(160, 1, 64); // 翠風林島獵人小藤旁
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
for (let i = 0; i < 8; i++) {
  const open = await page.evaluate(
    () => document.getElementById("dialog")?.classList.contains("show") ?? false,
  );
  if (!open) break;
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
}
const vineAccepted = await page.evaluate(() => ({
  state: window.__game.quests.get("vineHunt"),
  hudText: document.getElementById("hud-quest-list")?.textContent ?? "",
}));
vineAccepted.state === "active" && vineAccepted.hudText.includes("藤蔓清剿")
  ? ok(`接取「藤蔓清剿」並顯示追蹤(${vineAccepted.hudText})`)
  : fail(`接取異常:${JSON.stringify(vineAccepted)}`);

const huntBefore = await page.evaluate(() => {
  for (let i = 0; i < 4; i++) window.__game.quests.addKill("vine"); // 模擬擊殺 4 隻
  return {
    coins: window.__game.inventory.coins,
    medium: window.__game.inventory.crystals.medium,
  };
});
await page.keyboard.press("f");
await page.waitForTimeout(300);
for (let i = 0; i < 8; i++) {
  const open = await page.evaluate(
    () => document.getElementById("dialog")?.classList.contains("show") ?? false,
  );
  if (!open) break;
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
}
const huntAfter = await page.evaluate(() => ({
  state: window.__game.quests.get("vineHunt"),
  coins: window.__game.inventory.coins,
  medium: window.__game.inventory.crystals.medium,
}));
huntAfter.state === "done" ? ok("「藤蔓清剿」回報完成") : fail(`回報異常:${huntAfter.state}`);
huntAfter.coins === huntBefore.coins + 150 && huntAfter.medium === huntBefore.medium + 2
  ? ok(`清剿獎勵入帳(🪙 +150,中型結晶 +2)`)
  : fail(`獎勵異常:${JSON.stringify({ huntBefore, huntAfter })}`);
await page.screenshot({ path: "/tmp/archipelago-25-hunt.png" });

// 41. 第二海解鎖:界海之門的領航者——條件不足時接取「跨越界海」並顯示試煉進度
await page.evaluate(() => {
  window.__game.player.mesh.position.set(230, 2, -93); // 界海之門南灘,領航者汐音旁
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
for (let i = 0; i < 10; i++) {
  const open = await page.evaluate(
    () => document.getElementById("dialog")?.classList.contains("show") ?? false,
  );
  if (!open) break;
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
}
const sea2First = await page.evaluate(() => ({
  state: window.__game.quests.get("sea2"),
  hasGem: window.__game.inventory.secondSeaGem,
  hudText: document.getElementById("hud-quest-list")?.textContent ?? "",
}));
sea2First.state === "active" && !sea2First.hasGem
  ? ok("領航者對話:條件不足,接取「跨越界海」未發寶石")
  : fail(`跨越界海接取異常:${JSON.stringify(sea2First)}`);
sea2First.hudText.includes("跨越界海")
  ? ok(`HUD 顯示試煉進度(${sea2First.hudText.match(/跨越界海[^任]*/)?.[0] ?? ""})`)
  : fail(`HUD 無跨越界海追蹤:${sea2First.hudText}`);
await page.screenshot({ path: "/tmp/archipelago-26-gate.png" });

// 42. 補滿三條件(六寶石已於前面測試授予)→ 再對話 → 獲得兩顆海寶石
await page.evaluate(() => {
  const g = window.__game;
  const kinds = ["slime", "elite", "vine", "windGuardian", "ember", "earthGuardian", "frost", "frostGuardian", "deep", "voidGuardian", "voidLord"];
  for (const kind of kinds) g.quests.addKill(kind); // 模擬每種敵人都擊敗過
  g.player.stats.level = 35;
});
await page.keyboard.press("f");
await page.waitForTimeout(300);
for (let i = 0; i < 10; i++) {
  const open = await page.evaluate(
    () => document.getElementById("dialog")?.classList.contains("show") ?? false,
  );
  if (!open) break;
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
}
const seaGems = await page.evaluate(() => ({
  first: window.__game.inventory.firstSeaGem,
  second: window.__game.inventory.secondSeaGem,
  state: window.__game.quests.get("sea2"),
}));
seaGems.first && seaGems.second
  ? ok("試煉通過:獲得第一海寶石 + 第二海寶石")
  : fail(`海寶石未發放:${JSON.stringify(seaGems)}`);
seaGems.state === "done" ? ok("「跨越界海」任務完成") : fail(`任務狀態:${seaGems.state}`);

// 43. 背包:重要道具區顯示海寶石,且面板可用滾輪捲動
await page.keyboard.press("Tab");
await page.waitForTimeout(300);
const bagSea = await page.evaluate(() => {
  const bagEl = document.getElementById("bag");
  const style = getComputedStyle(bagEl);
  return {
    seaButtons: bagEl.querySelectorAll("button[data-sea]").length,
    hasSection: bagEl.innerHTML.includes("重要道具"),
    scrollable: style.overflowY === "auto" && style.maxHeight !== "none",
  };
});
bagSea.seaButtons === 2 && bagSea.hasSection
  ? ok("背包「重要道具」區顯示兩顆海寶石")
  : fail(`重要道具區異常:${JSON.stringify(bagSea)}`);
bagSea.scrollable ? ok("背包面板可滾輪捲動(overflow-y)") : fail("背包不可捲動");
await page.screenshot({ path: "/tmp/archipelago-27-seagems.png" });

// 44. 使用第二海寶石 → 人與船一起傳送到港口鎮
await page.click('button[data-sea="2"]');
await page.waitForTimeout(500);
const arrive = await page.evaluate(() => {
  const g = window.__game;
  const p = g.player.mesh.position;
  const b = g.boat.mesh.position;
  return { x: p.x, z: p.z, bx: b.x, bz: b.z, bagOpen: g.bag.isOpen, sailing: g.sailing };
});
arrive.x > 1500 && !arrive.sailing
  ? ok(`傳送至第二海港口鎮(位置 ${arrive.x.toFixed(0)},${arrive.z.toFixed(0)})`)
  : fail(`傳送異常:${JSON.stringify(arrive)}`);
Math.hypot(arrive.bx - 2002, arrive.bz - -58) < 5
  ? ok("船隻同行,停在港口鎮碼頭旁")
  : fail(`船位異常:${arrive.bx.toFixed(0)},${arrive.bz.toFixed(0)}`);
!arrive.bagOpen ? ok("傳送後背包自動關閉") : fail("背包未關閉");
await page.screenshot({ path: "/tmp/archipelago-28-porttown.png" });

// 45. 港口鎮鎮長對話
await page.evaluate(() => {
  window.__game.player.mesh.position.set(2000, 2, -38.5); // 鎮長波叔旁
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const mayorDialog = await page.evaluate(
  () => document.getElementById("dialog")?.classList.contains("show") ?? false,
);
mayorDialog ? ok("港口鎮鎮長對話開啟") : fail("鎮長對話未開啟");
for (let i = 0; i < 10; i++) {
  const open = await page.evaluate(
    () => document.getElementById("dialog")?.classList.contains("show") ?? false,
  );
  if (!open) break;
  await page.keyboard.press("f");
  await page.waitForTimeout(150);
}

// 46. 使用第一海寶石 → 回到第一海曙光嶼,船回泊點
await page.keyboard.press("Tab");
await page.waitForTimeout(300);
await page.click('button[data-sea="1"]');
await page.waitForTimeout(500);
const goBack = await page.evaluate(() => {
  const g = window.__game;
  const p = g.player.mesh.position;
  const b = g.boat.mesh.position;
  return { x: p.x, z: p.z, bx: b.x, bz: b.z };
});
Math.hypot(goBack.x - 2.5, goBack.z - -52) < 3 && Math.hypot(goBack.bx - 4, goBack.bz - -63) < 5
  ? ok(`回到第一海曙光嶼(位置 ${goBack.x.toFixed(0)},${goBack.z.toFixed(0)},船回泊點)`)
  : fail(`返航異常:${JSON.stringify(goBack)}`);

// 10. 存檔:手動觸發存檔後重新整理,等級與寶石持有應保留
const beforeReload = await page.evaluate(() => {
  window.__game.doSave();
  const g = window.__game;
  return { level: g.player.stats.level, flame: g.gems.flameOwned };
});
await page.reload({ waitUntil: "networkidle" });
await page.waitForTimeout(2000);
const afterReload = await page.evaluate(() => ({
  level: window.__game.player.stats.level,
  flame: window.__game.gems.flameOwned,
  gemQuest: window.__game.quests.get("gem"),
  flameLevel: window.__game.gems.levels.flame,
  head: window.__game.equipment.equipped.head,
  def: window.__game.player.stats.def,
  shrineIds: window.__game.shrineIds,
  vineHunt: window.__game.quests.get("vineHunt"),
  seaFirst: window.__game.inventory.firstSeaGem,
  seaSecond: window.__game.inventory.secondSeaGem,
  sea2: window.__game.quests.get("sea2"),
}));
afterReload.level === beforeReload.level
  ? ok(`重新整理後等級保留(Lv.${afterReload.level})`)
  : fail(`等級未保留:${beforeReload.level} → ${afterReload.level}`);
afterReload.flame === beforeReload.flame
  ? ok("重新整理後寶石持有保留")
  : fail("寶石持有未保留");
afterReload.gemQuest === "done" ? ok("重新整理後任務進度保留") : fail(`任務進度未保留:${afterReload.gemQuest}`);
afterReload.flameLevel === 2 ? ok("重新整理後寶石升階保留(焰心石 Lv.2)") : fail(`升階未保留:${afterReload.flameLevel}`);
afterReload.head === "helm" && afterReload.def >= 5
  ? ok(`重新整理後裝備保留(鐵盔,防禦 ${afterReload.def})`)
  : fail(`裝備未保留:${JSON.stringify(afterReload)}`);
afterReload.shrineIds.length === 2 && afterReload.shrineIds.includes("ember")
  ? ok(`重新整理後重生點保留(${afterReload.shrineIds.join("+")})`)
  : fail(`重生點未保留:${JSON.stringify(afterReload.shrineIds)}`);
afterReload.vineHunt === "done"
  ? ok("重新整理後清剿任務進度保留")
  : fail(`清剿任務未保留:${afterReload.vineHunt}`);
afterReload.seaFirst && afterReload.seaSecond && afterReload.sea2 === "done"
  ? ok("重新整理後海寶石與跨越界海進度保留")
  : fail(`海寶石未保留:${JSON.stringify({ seaFirst: afterReload.seaFirst, seaSecond: afterReload.seaSecond, sea2: afterReload.sea2 })}`);

await browser.close();
console.log(errors.length ? `\n${errors.length} 項失敗` : "\n全部通過");
process.exit(errors.length > 0 ? 1 : 0);
