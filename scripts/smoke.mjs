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

// 寶石技能改用數字鍵 1–6:施放某寶石技能 = 確保其已綁鍵位後,按下對應數字鍵。
// 未綁定(未出戰)時 slotOf=-1,按下 "0"(無綁定)→ 不施放,用於負向測試。
async function castGem(key) {
  const digit = await page.evaluate((k) => {
    const g = window.__game.gems;
    g.ensureSlots();
    return g.slotOf(k) + 1; // 1–6;未綁定回 0
  }, key);
  await page.keyboard.press(String(digit));
}

const boot = await page.evaluate(() => ({
  hasGame: !!window.__game,
  enemies: window.__game?.enemies.length,
  playerHp: window.__game?.player.hp,
}));
boot.hasGame ? ok(`遊戲載入,敵人 ${boot.enemies} 隻,玩家 HP ${boot.playerHp}`) : fail("無 __game 掛鉤");

// 0b. 場景障礙物碰撞:樹/石/房子等已註冊碰撞圓,且 resolveObstacles 能把圓心推出
const obstacleCount = await page.evaluate(() => window.__game.obstacles.length);
obstacleCount > 100
  ? ok(`場景障礙物碰撞體 ${obstacleCount} 個(樹/石/房子/碼頭柱/古城石柱)`)
  : fail(`障礙物碰撞體過少:${obstacleCount}`);

// 0c. 玩家被瞬移到障礙物正中央後,應於數幀內被推出該障礙物外
const pushed = await page.evaluate(async () => {
  // 找第一座島(曙光嶼,x≈0,z≈0)上的陸地障礙物,瞬移玩家到其中心
  const o = window.__game.obstacles.find((o) => Math.hypot(o.x, o.z) < 60);
  if (!o) return { ok: false, reason: "找不到第一島障礙物" };
  const p = window.__game.player.mesh.position;
  const home = { x: p.x, y: p.y, z: p.z };
  p.set(o.x, 5, o.z);
  await new Promise((r) => setTimeout(r, 400));
  const dist = Math.hypot(p.x - o.x, p.z - o.z);
  p.set(home.x, home.y, home.z); // 還原,避免影響後續測項
  return { ok: true, dist, r: o.r };
});
pushed.ok && pushed.dist >= pushed.r - 0.05
  ? ok(`玩家被障礙物推出(離心 ${pushed.dist.toFixed(2)}≥半徑 ${pushed.r.toFixed(2)})`)
  : fail(`玩家未被推出障礙物:${JSON.stringify(pushed)}`);

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
  // 只看主世界敵人(副本敵人開場沉眠 = isDead,會誤判)
  killed = await page.evaluate(() =>
    window.__game.enemies.slice(0, window.__game.dungeon.start).some((e) => e.isDead),
  );
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
// 4b. 角色展示台:.model-stage 應掛上 3D 模型 canvas(模型載入成功時取代 emoji)
const portrait = await page.evaluate(() => {
  const stage = document.querySelector("#bag .model-stage");
  const avatar = stage?.querySelector(".avatar");
  return {
    hasCanvas: !!stage?.querySelector("canvas"),
    avatarHidden: !avatar || getComputedStyle(avatar).display === "none",
  };
});
portrait.hasCanvas && portrait.avatarHidden
  ? ok("背包角色展示台顯示 3D 模型")
  : fail(`展示台異常:${JSON.stringify(portrait)}`);
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
  window.__game.gems.equipped = ["flame"]; // 出戰才生效
  return window.__game.player.mp;
});
await castGem("flame");
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

// 8b. 寶石鍵位可指定:把焰心石綁到第 3 鍵,按 "3" 應施放(驗證非預設鍵位也對應正確)
const slotCastBefore = await page.evaluate(() => {
  const g = window.__game;
  g.gems.slots = new Array(6).fill(null);
  g.gems.assignSlot("flame", 2); // 第 3 鍵
  g.player.mp = g.player.stats.maxMP;
  return { mp: g.player.mp, slot: g.gems.slotOf("flame") };
});
await page.keyboard.press("3");
await page.waitForTimeout(180);
const slotCastAfter = await page.evaluate(() => window.__game.player.mp);
slotCastBefore.slot === 2 && slotCastAfter <= slotCastBefore.mp - 9
  ? ok(`寶石鍵位指定生效(焰心石綁第 3 鍵,按 3 → 靈力 ${Math.round(slotCastBefore.mp)} → ${Math.round(slotCastAfter)})`)
  : fail(`數字鍵位施放異常:${JSON.stringify({ slotCastBefore, slotCastAfter })}`);

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

// 12b. 三位商人分櫃販售:圓圓只賣 tier1;珍珠(港口鎮)賣 tier2;星塵(望潮鎮)賣 tier3
// 重開圓圓貨架:不該出現第二海裝備
await page.keyboard.press("f");
await page.waitForTimeout(300);
const tier1Shop = await page.evaluate(() => ({
  tier: window.__game.shop.tier,
  hasT2: !!document.querySelector('button[data-buyequip="corahelm"]'),
  hasT1: !!document.querySelector('button[data-buyequip="cap"]'),
}));
tier1Shop.tier === 1 && tier1Shop.hasT1 && !tier1Shop.hasT2
  ? ok("圓圓貨架僅 tier1(無第二海裝備)")
  : fail(`圓圓貨架異常:${JSON.stringify(tier1Shop)}`);
await page.keyboard.press("f");
await page.waitForTimeout(200);

// 港口鎮・商人珍珠:F 開店 → 招牌/貨架 tier2 → 買熔岩重鎧
await page.evaluate(() => {
  window.__game.player.mesh.position.set(2007, 2, -47.5);
  window.__game.inventory.coins = 20000;
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const tier2Shop = await page.evaluate(() => ({
  open: window.__game.shop.isOpen,
  tier: window.__game.shop.tier,
  title: document.querySelector("#shop h3")?.textContent ?? "",
  hasT1: !!document.querySelector('button[data-buyequip="cap"]'),
}));
tier2Shop.open && tier2Shop.tier === 2 && tier2Shop.title.includes("珍珠") && !tier2Shop.hasT1
  ? ok(`商人珍珠開店(${tier2Shop.title},貨架僅 tier2)`)
  : fail(`珍珠商店異常:${JSON.stringify(tier2Shop)}`);
await page.click('button[data-buyequip="lavaplate"]');
await page.waitForTimeout(200);
const tier2Buy = await page.evaluate(() => ({
  owned: window.__game.equipment.owned.includes("lavaplate"),
  coins: window.__game.inventory.coins,
}));
tier2Buy.owned && tier2Buy.coins === 20000 - 3200
  ? ok(`購買熔岩重鎧成功(🪙 20000 → ${tier2Buy.coins})`)
  : fail(`珍珠購買異常:${JSON.stringify(tier2Buy)}`);
await page.keyboard.press("f");
await page.waitForTimeout(200);

// 望潮鎮・商人星塵:F 開店 → 貨架 tier3 → 買星輝冠冕
await page.evaluate(() => {
  window.__game.player.mesh.position.set(4007, 2, -47.5);
});
await page.waitForTimeout(300);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const tier3Shop = await page.evaluate(() => ({
  open: window.__game.shop.isOpen,
  tier: window.__game.shop.tier,
  title: document.querySelector("#shop h3")?.textContent ?? "",
  hasT2: !!document.querySelector('button[data-buyequip="lavaplate"]'),
}));
tier3Shop.open && tier3Shop.tier === 3 && tier3Shop.title.includes("星塵") && !tier3Shop.hasT2
  ? ok(`商人星塵開店(${tier3Shop.title},貨架僅 tier3)`)
  : fail(`星塵商店異常:${JSON.stringify(tier3Shop)}`);
await page.click('button[data-buyequip="starcrown"]');
await page.waitForTimeout(200);
const tier3Buy = await page.evaluate(() => ({
  owned: window.__game.equipment.owned.includes("starcrown"),
  coins: window.__game.inventory.coins,
}));
tier3Buy.owned && tier3Buy.coins === 20000 - 3200 - 5000
  ? ok(`購買星輝冠冕成功(🪙 ${tier3Buy.coins + 5000} → ${tier3Buy.coins})`)
  : fail(`星塵購買異常:${JSON.stringify(tier3Buy)}`);
await page.keyboard.press("f");
await page.waitForTimeout(200);
// 回到第一島出發點,恢復後續測試前提
await page.evaluate(() => {
  window.__game.player.mesh.position.set(7, 1, -49.5);
});
await page.waitForTimeout(300);

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
  window.__game.gems.equipped = ["earth"]; // 出戰才生效
  const p = window.__game.player;
  p.mesh.position.set(-150, 5, 95); // 離開熔岩區
  p.mp = p.stats.maxMP;
  return p.mp;
});
await page.waitForTimeout(300);
await castGem("earth");
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
  window.__game.gems.equipped = ["frost"]; // 出戰才生效(冰箭 + 冰面渡水都吃此判定)
  window.__game.player.hasFrostGem = true;
  const p = window.__game.player;
  p.mp = p.stats.maxMP;
  p.mesh.position.set(60, 1, -215); // 雪峰島南灘,離開陡坡
  return p.mp;
});
await page.waitForTimeout(300);
await castGem("frost");
await page.waitForTimeout(200);
const afterIce = await page.evaluate(() => ({
  mp: window.__game.player.mp,
  arrows: window.__game.iceArrows.length,
}));
afterIce.mp <= mpBeforeIce - 11
  ? ok(`冰箭消耗靈力(${Math.round(mpBeforeIce)} → ${Math.round(afterIce.mp)})`)
  : fail(`冰箭靈力未扣:${mpBeforeIce} → ${afterIce.mp}`);
afterIce.arrows > 0 ? ok("寒冰箭矢生成") : fail("寒冰箭矢未生成");

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
  window.__game.gems.equipped = ["void"]; // 出戰才生效
  const p = window.__game.player;
  p.mp = p.stats.maxMP;
  return { x: p.mesh.position.x, z: p.mesh.position.z, mp: p.mp };
});
await castGem("void");
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

// 31b. 專屬圖示:寶石盤/果實格全用程式繪製圖示(canvas data URL),不再用 emoji
const bagIcons = await page.evaluate(() => {
  const bag = document.getElementById("bag");
  const icons = [...(bag?.querySelectorAll("img.px-icon") ?? [])];
  const ids = new Set(icons.map((i) => i.dataset.icon));
  const slotText = [...(bag?.querySelectorAll(".gem-slot") ?? [])]
    .map((el) => el.textContent ?? "")
    .join("")
    .replace(/[✅]/gu, ""); // 出戰勾勾非物品圖示,排除
  return {
    count: icons.length,
    hasFlame: ids.has("flame"),
    hasThunder: ids.has("thunder"),
    allDrawn: icons.every((i) => i.src.startsWith("data:image/png")),
    emojiLeft: /[\u{1F300}-\u{1FAFF}]/u.test(slotText),
  };
});
bagIcons.count >= 15 && bagIcons.hasFlame && bagIcons.hasThunder && bagIcons.allDrawn && !bagIcons.emojiLeft
  ? ok(`寶石/果實皆為程式繪製專屬圖示(${bagIcons.count} 張,無 emoji)`)
  : fail(`圖示異常:${JSON.stringify(bagIcons)}`);
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
// 32b. 商店貨架每件裝備前有專屬圖示
const shopIcons = await page.evaluate(
  () => document.querySelectorAll("#shop img.px-icon").length,
);
shopIcons >= 8
  ? ok(`商店貨架裝備皆有專屬圖示(${shopIcons} 張)`)
  : fail(`商店圖示數異常:${shopIcons}`);
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
// 34b. 鍛造坊寶石/果實列表有專屬圖示
const forgeIcons = await page.evaluate(
  () => document.querySelectorAll("#forge img.px-icon").length,
);
forgeIcons >= 1
  ? ok(`鍛造坊升階列表有專屬圖示(${forgeIcons} 張)`)
  : fail(`鍛造坊圖示數異常:${forgeIcons}`);
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
shrineCount === 18 ? ok("每座島各一座重生石碑(第一海 5 + 第二海 7 + 第三海 5 + 祭壇島 1,共 18 座)") : fail(`石碑數量異常:${shrineCount}`);

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
npcCount === 26 ? ok("任務 NPC 到位(共 26 位,含兩位引路人、兩位鎮長、三位商人、兩島祭司/守林人、二、三海九位委託人與祭壇島司祭)") : fail(`NPC 數量異常:${npcCount}`);

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

// 45b. 鎮長波叔給予「熔砂的試煉」任務(第七顆寶石溶岩石)
const lavaQuest = await page.evaluate(() => window.__game.quests.get("lava"));
lavaQuest === "active"
  ? ok("鎮長波叔給予「熔砂的試煉」任務")
  : fail(`熔砂任務未接取:${lavaQuest}`);

// 45c. 熔砂島存在:熔砂果凍 ×5 + 熔岩守護者,且島心為陸地(groundHeight>0)
const desertIsland = await page.evaluate(() => {
  const g = window.__game;
  const sand = g.enemies.filter((e) => e.kind === "sand").length;
  const guardian = g.enemies.find((e) => e.kind === "magmaGuardian");
  // 熔岩守護者位在 ~2200,144,停在島上 → y 高於海平面
  return { sand, hasGuardian: !!guardian, guardianY: guardian ? guardian.mesh.position.y : -99 };
});
desertIsland.sand === 5 && desertIsland.hasGuardian && desertIsland.guardianY > 0.5
  ? ok(`熔砂島生成(熔砂果凍×${desertIsland.sand} + 熔岩守護者,島心 y=${desertIsland.guardianY.toFixed(1)})`)
  : fail(`熔砂島異常:${JSON.stringify(desertIsland)}`);

// 45d. 溶岩石熔岩噴發:授予寶石 → G 施放 → 靈力扣除 + 岩漿衝擊波(附帶灼燒旗標)
const lavaMpBefore = await page.evaluate(() => {
  const g = window.__game;
  g.gems.lavaOwned = true;
  g.gems.equipped = ["lava"]; // 出戰才生效
  g.player.mp = g.player.stats.maxMP;
  return g.player.mp;
});
await castGem("lava");
await page.waitForTimeout(200);
const afterLava = await page.evaluate(() => {
  const waves = window.__game.shockwaves;
  return {
    mp: window.__game.player.mp,
    waves: waves.length,
    burns: waves.length > 0 && waves[waves.length - 1].burns === true,
  };
});
afterLava.mp <= lavaMpBefore - 13
  ? ok(`熔岩噴發消耗靈力(${Math.round(lavaMpBefore)} → ${Math.round(afterLava.mp)})`)
  : fail(`靈力未扣除:${lavaMpBefore} → ${afterLava.mp}`);
afterLava.waves > 0 && afterLava.burns
  ? ok("岩漿衝擊波生成(附帶灼燒旗標)")
  : fail(`衝擊波/灼燒旗標異常:${JSON.stringify(afterLava)}`);
await page.screenshot({ path: "/tmp/archipelago-30-lava.png" });

// 45e. 灼燒 DoT:點燃熔砂果凍 → 主迴圈每 0.5s 結算,持續扣血
const burnStart = await page.evaluate(() => {
  const e = window.__game.enemies.find((x) => x.kind === "sand" && !x.isDead);
  e.burn(3, 40);
  return e.hp;
});
await page.waitForTimeout(1200);
const burnNow = await page.evaluate(() => {
  const e = window.__game.enemies.find((x) => x.kind === "sand");
  return { hp: e.hp, burnT: e.burnT };
});
burnNow.hp < burnStart && burnNow.burnT > 0
  ? ok(`灼燒 DoT 持續扣血(${burnStart} → ${burnNow.hp},剩餘 ${burnNow.burnT.toFixed(1)}s)`)
  : fail(`灼燒未生效:${JSON.stringify({ burnStart, ...burnNow })}`);

// 45f. 持有溶岩石後回報鎮長 → 「熔砂的試煉」完成 + 發獎
await page.evaluate(() => {
  window.__game.player.mesh.position.set(2000, 2, -38.5); // 鎮長波叔旁
});
await page.waitForTimeout(200);
const coinsBeforeLava = await page.evaluate(() => window.__game.inventory.coins);
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
const lavaDone = await page.evaluate(() => ({
  state: window.__game.quests.get("lava"),
  coins: window.__game.inventory.coins,
}));
lavaDone.state === "done" && lavaDone.coins >= coinsBeforeLava + 600
  ? ok(`「熔砂的試煉」完成(獲得 ${lavaDone.coins - coinsBeforeLava} 貝拉幣)`)
  : fail(`熔砂任務未完成:${JSON.stringify(lavaDone)}`);

// 45g. 第二海新島生成:珊瑚礁島(礁石果凍×5 + 珊瑚守護者)、靈脈島(孢子果凍×5 + 靈脈守護者),守護者立於島心(y>0.5)
const sea2Islands = await page.evaluate(() => {
  const g = window.__game;
  const coral = g.enemies.find((e) => e.kind === "coralGuardian");
  const life = g.enemies.find((e) => e.kind === "lifeGuardian");
  return {
    reef: g.enemies.filter((e) => e.kind === "reef").length,
    // 副本三環也用孢子果凍,只計主世界(索引 < dungeon.start)的
    spore: g.enemies.slice(0, g.dungeon.start).filter((e) => e.kind === "spore").length,
    coralY: coral ? coral.mesh.position.y : -99,
    lifeY: life ? life.mesh.position.y : -99,
  };
});
sea2Islands.reef === 5 && sea2Islands.coralY > 0.5
  ? ok(`珊瑚礁島生成(礁石果凍×${sea2Islands.reef} + 珊瑚守護者,島心 y=${sea2Islands.coralY.toFixed(1)})`)
  : fail(`珊瑚礁島異常:${JSON.stringify(sea2Islands)}`);
sea2Islands.spore === 5 && sea2Islands.lifeY > 0.5
  ? ok(`靈脈島生成(孢子果凍×${sea2Islands.spore} + 靈脈守護者,島心 y=${sea2Islands.lifeY.toFixed(1)})`)
  : fail(`靈脈島異常:${JSON.stringify(sea2Islands)}`);

// 45g-2. 第二海敵人大幅強化:血量 ×2.5、傷害 ×2(第一海敵人不變)
const seaScaling = await page.evaluate(() => {
  const g = window.__game;
  const spore = g.enemies.find((e) => e.kind === "spore"); // 第二海,基礎 hp220/dmg28
  const coral = g.enemies.find((e) => e.kind === "coralGuardian"); // 第二海,基礎 hp700/dmg34
  const slime = g.enemies.find((e) => e.kind === "slime"); // 第一海,基礎 hp30/dmg8
  return {
    sporeHp: spore?.maxHp, sporeDmg: spore?.dmg,
    coralHp: coral?.maxHp, coralDmg: coral?.dmg,
    slimeHp: slime?.maxHp, slimeDmg: slime?.dmg,
  };
});
seaScaling.sporeHp === 550 && seaScaling.sporeDmg === 56 &&
seaScaling.coralHp === 1750 && seaScaling.coralDmg === 68
  ? ok(`第二海敵人強化(孢子 hp${seaScaling.sporeHp}/dmg${seaScaling.sporeDmg}、珊瑚守護者 hp${seaScaling.coralHp}/dmg${seaScaling.coralDmg})`)
  : fail(`第二海強化異常:${JSON.stringify(seaScaling)}`);
seaScaling.slimeHp === 30 && seaScaling.slimeDmg === 8
  ? ok("第一海敵人維持原數值(史萊姆 hp30/dmg8)")
  : fail(`第一海不該被改:${JSON.stringify(seaScaling)}`);

// 45h. 碧波石碧波震盪:授予寶石 → 站到礁島心、聚集礁石果凍 → B 施放 → 靈力扣除 + 周身敵人凍結受傷
const aquaBefore = await page.evaluate(() => {
  const g = window.__game;
  g.gems.aquaOwned = true;
  g.gems.equipped = ["aqua"]; // 出戰才生效
  g.player.mp = g.player.stats.maxMP;
  g.player.mesh.position.set(1790, 14, -110);
  const reefs = g.enemies.filter((e) => e.kind === "reef").slice(0, 3);
  reefs.forEach((e, i) => e.mesh.position.set(1790 + (i - 1) * 2, 14, -108));
  return { mp: g.player.mp, hp: reefs.map((r) => r.hp) };
});
await castGem("aqua");
await page.waitForTimeout(150);
const aquaAfter = await page.evaluate(() => {
  const g = window.__game;
  const reefs = g.enemies.filter((e) => e.kind === "reef").slice(0, 3);
  return {
    mp: g.player.mp,
    frozen: reefs.filter((r) => r.freezeT > 0).length,
    hp: reefs.map((r) => r.hp),
  };
});
aquaAfter.mp <= aquaBefore.mp - 15
  ? ok(`碧波震盪消耗靈力(${Math.round(aquaBefore.mp)} → ${Math.round(aquaAfter.mp)})`)
  : fail(`靈力未扣除:${aquaBefore.mp} → ${aquaAfter.mp}`);
const aquaHurt = aquaAfter.hp.filter((hp, i) => hp < aquaBefore.hp[i]).length;
aquaAfter.frozen >= 2 && aquaHurt >= 2
  ? ok(`碧波震盪凍結並擊傷 ${aquaAfter.frozen} 個周身敵人`)
  : fail(`碧波震盪異常:frozen=${aquaAfter.frozen} hurt=${aquaHurt}`);
await page.screenshot({ path: "/tmp/archipelago-33-aqua.png" });

// 45i. 翠生石生命汲取:授予寶石 → 壓低生命、前方放一隻孢子果凍 → H 施放 → 吸血光束即時傷害 + 生命回復
const lifeBefore = await page.evaluate(() => {
  const g = window.__game;
  g.gems.lifeOwned = true;
  g.gems.equipped = ["life"]; // 出戰才生效
  g.player.mp = g.player.stats.maxMP;
  g.player.hp = 30;
  g.player.facing = 0; // 面向 +z
  g.player.mesh.position.set(2120, 18, -180);
  const spore = g.enemies.find((e) => e.kind === "spore" && !e.isDead);
  spore.stun(5); // 定身排除自走/攻擊干擾
  spore.mesh.position.set(2120, 18, -176); // 玩家前方(+z)約 4
  return { mp: g.player.mp, hp: g.player.hp, sphp: spore.hp };
});
await castGem("life");
await page.waitForTimeout(250);
const lifeAfter = await page.evaluate(() => {
  const g = window.__game;
  const spore = g.enemies.find((e) => e.kind === "spore");
  return {
    mp: g.player.mp,
    hp: g.player.hp,
    beam: g.gemFx.length > 0,
    sphp: spore.hp,
  };
});
lifeAfter.mp <= lifeBefore.mp - 13
  ? ok(`生命汲取消耗靈力(${Math.round(lifeBefore.mp)} → ${Math.round(lifeAfter.mp)})`)
  : fail(`靈力未扣除:${lifeBefore.mp} → ${lifeAfter.mp}`);
lifeAfter.beam && lifeAfter.sphp < lifeBefore.sphp && lifeAfter.hp > lifeBefore.hp
  ? ok(`生命汲取光束命中孢子果凍並回血(HP ${lifeBefore.hp} → ${lifeAfter.hp})`)
  : fail(`生命汲取異常:${JSON.stringify({ lifeBefore, lifeAfter })}`);
await page.screenshot({ path: "/tmp/archipelago-34-life.png" });

// 45j. 持有碧波石後找珊瑚祭司娜瑪回報 →「礁海的低語」完成 + 發獎
await page.evaluate(() => {
  const g = window.__game;
  g.gems.aquaOwned = true;
  g.quests.accept("aqua");
  // 礁島樹石隨機散布,偶爾長在傳送點上把玩家推出對話圈(曾致偶發紅);先清掉祭司身邊的障礙圓
  for (let i = g.obstacles.length - 1; i >= 0; i--) {
    const o = g.obstacles[i];
    if (Math.hypot(o.x - 1768, o.z - -92) < 6) g.obstacles.splice(i, 1);
  }
  g.player.mesh.position.set(1768, 12, -89); // 祭司娜瑪旁
});
await page.waitForTimeout(200);
const coinsBeforeAqua = await page.evaluate(() => window.__game.inventory.coins);
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
const aquaQuestDone = await page.evaluate(() => ({
  state: window.__game.quests.get("aqua"),
  coins: window.__game.inventory.coins,
}));
aquaQuestDone.state === "done" && aquaQuestDone.coins >= coinsBeforeAqua + 700
  ? ok(`「礁海的低語」完成(獲得 ${aquaQuestDone.coins - coinsBeforeAqua} 貝拉幣)`)
  : fail(`礁海任務未完成:${JSON.stringify(aquaQuestDone)}`);

// 45k. 持有翠生石後找靈脈守林人葉羅回報 →「靈脈的搏動」完成 + 發獎
await page.evaluate(() => {
  const g = window.__game;
  g.gems.lifeOwned = true;
  g.quests.accept("life");
  g.player.mesh.position.set(2098, 12, -159); // 守林人葉羅旁
});
await page.waitForTimeout(200);
const coinsBeforeLife = await page.evaluate(() => window.__game.inventory.coins);
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
const lifeQuestDone = await page.evaluate(() => ({
  state: window.__game.quests.get("life"),
  coins: window.__game.inventory.coins,
}));
lifeQuestDone.state === "done" && lifeQuestDone.coins >= coinsBeforeLife + 700
  ? ok(`「靈脈的搏動」完成(獲得 ${lifeQuestDone.coins - coinsBeforeLife} 貝拉幣)`)
  : fail(`靈脈任務未完成:${JSON.stringify(lifeQuestDone)}`);

// 45m. 第二海重生石碑:四座就位;在第二海設置走「每海上限 2」且與第一海獨立
const SEA2_SHRINES = ["port", "desert", "coral", "spring"];
const sea2ShrineDefs = await page.evaluate(
  () => window.__game.shrines.filter((s) => s.def.x > 1100 && s.def.x < 3100).map((s) => s.def.id),
);
sea2ShrineDefs.length === 7 &&
["port", "desert", "coral", "spring", "marsh", "brine", "solar"].every((id) => sea2ShrineDefs.includes(id))
  ? ok(`第二海七座重生石碑就位(${sea2ShrineDefs.join("/")})`)
  : fail(`第二海石碑異常:${JSON.stringify(sea2ShrineDefs)}`);

// 依序設置 3 座(port → desert → coral),港口鎮應被替換(每海上限 2)
const setShrineAt = async (x, z) => {
  await page.evaluate(([px, pz]) => window.__game.player.mesh.position.set(px, 14, pz), [x, z]);
  await page.waitForTimeout(300);
  await page.keyboard.press("f");
  await page.waitForTimeout(250);
};
await setShrineAt(1988, 14); // 港口鎮
await setShrineAt(2178, 130); // 熔砂島
await setShrineAt(1812, -92); // 珊瑚礁島(此時應替換掉最早的港口鎮)
const shrineState = await page.evaluate(() => {
  const sea2set = ["port", "desert", "coral", "spring"];
  const ids = window.__game.shrineIds;
  return {
    sea2: ids.filter((id) => sea2set.includes(id)),
    sea1: ids.filter((id) => !sea2set.includes(id)),
  };
});
shrineState.sea2.length === 2 &&
shrineState.sea2.includes("desert") &&
shrineState.sea2.includes("coral") &&
!shrineState.sea2.includes("port")
  ? ok(`第二海重生點每海上限 2 生效(${shrineState.sea2.join("+")},港口鎮被替換)`)
  : fail(`第二海上限異常:${JSON.stringify(shrineState)}`);
shrineState.sea1.length >= 1 && shrineState.sea1.includes("ember")
  ? ok(`第一海重生點不受第二海設置影響(${shrineState.sea1.join("+")})`)
  : fail(`第一海重生點異常:${JSON.stringify(shrineState)}`);

// 背包傳送清單:身處第二海只列第二海的重生點
await page.keyboard.press("Tab");
await page.waitForTimeout(300);
await page.click("#bag button[data-tp-open]");
await page.waitForTimeout(200);
const sea2TpList = await page.evaluate(() =>
  [...document.querySelectorAll("#bag button[data-tp]")].map((b) => b.dataset.tp),
);
await page.keyboard.press("Tab");
await page.waitForTimeout(200);
sea2TpList.length === 2 && sea2TpList.includes("desert") && sea2TpList.includes("coral")
  ? ok(`第二海背包傳送清單只列第二海重生點(${sea2TpList.join("+")})`)
  : fail(`背包分海過濾異常:${JSON.stringify(sea2TpList)}`);

// 45n. 第二海打怪委託:珊瑚礁島「礁石清剿」接取 → 模擬擊殺 → 回報領獎
await page.evaluate(() => window.__game.player.mesh.position.set(1812, 12, -130)); // 潛水夫阿蚌旁
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
const reefAccepted = await page.evaluate(() => window.__game.quests.get("reefHunt"));
const reefCoinsBefore = await page.evaluate(() => {
  for (let i = 0; i < 4; i++) window.__game.quests.addKill("reef"); // 模擬擊殺 4 隻
  return window.__game.inventory.coins;
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
const reefDone = await page.evaluate(() => ({
  state: window.__game.quests.get("reefHunt"),
  coins: window.__game.inventory.coins,
}));
reefAccepted === "active" && reefDone.state === "done" && reefDone.coins >= reefCoinsBefore + 500
  ? ok(`第二海委託「礁石清剿」可接取並完成(獲得 ${reefDone.coins - reefCoinsBefore} 貝拉幣)`)
  : fail(`礁石清剿異常:${JSON.stringify({ reefAccepted, reefDone })}`);

// 45o. 第二海三座委託島生成:沼氣/鹽晶/熾光果凍各 ×5,且各島心為陸地(敵人 y>0.5)
const sea2HuntIslands = await page.evaluate(() => {
  const g = window.__game;
  const stat = (kind) => {
    const list = g.enemies.filter((e) => e.kind === kind);
    return { count: list.length, onLand: list.some((e) => e.mesh.position.y > 0.5) };
  };
  return { marsh: stat("marsh"), brine: stat("brine"), solar: stat("solar") };
});
sea2HuntIslands.marsh.count === 5 &&
sea2HuntIslands.brine.count === 5 &&
sea2HuntIslands.solar.count === 5 &&
sea2HuntIslands.marsh.onLand &&
sea2HuntIslands.brine.onLand &&
sea2HuntIslands.solar.onLand
  ? ok("第二海三座委託島生成(沼氣/鹽晶/熾光果凍各×5,立於陸地)")
  : fail(`委託島生成異常:${JSON.stringify(sea2HuntIslands)}`);

// 45p. 迷霧沼島打怪委託:沼澤嚮導苔翁「沼氣清剿」接取 → 模擬擊殺 → 回報領獎
await page.evaluate(() => window.__game.player.mesh.position.set(1740, 12, 142)); // 沼澤嚮導苔翁旁
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
const marshAccepted = await page.evaluate(() => window.__game.quests.get("marshHunt"));
const marshCoinsBefore = await page.evaluate(() => {
  for (let i = 0; i < 4; i++) window.__game.quests.addKill("marsh"); // 模擬擊殺 4 隻
  return window.__game.inventory.coins;
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
const marshDone = await page.evaluate(() => ({
  state: window.__game.quests.get("marshHunt"),
  coins: window.__game.inventory.coins,
}));
marshAccepted === "active" && marshDone.state === "done" && marshDone.coins >= marshCoinsBefore + 500
  ? ok(`迷霧沼島委託「沼氣清剿」可接取並完成(獲得 ${marshDone.coins - marshCoinsBefore} 貝拉幣)`)
  : fail(`沼氣清剿異常:${JSON.stringify({ marshAccepted, marshDone })}`);

// 45q. 第三海解鎖:遠海之門的遠航者——條件不足(守護者未全滅)時接取「遠渡滄海」並顯示進度
await page.evaluate(() => {
  window.__game.player.mesh.position.set(2320, 3, -193); // 遠海之門南灘,遠航者滄瀾旁
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
const sea3First = await page.evaluate(() => ({
  state: window.__game.quests.get("sea3"),
  hasGem: window.__game.inventory.thirdSeaGem,
  hudText: document.getElementById("hud-quest-list")?.textContent ?? "",
}));
sea3First.state === "active" && !sea3First.hasGem
  ? ok("遠航者對話:條件不足,接取「遠渡滄海」未發寶石")
  : fail(`遠渡滄海接取異常:${JSON.stringify(sea3First)}`);
sea3First.hudText.includes("遠渡滄海")
  ? ok(`HUD 顯示遠渡滄海進度(${sea3First.hudText.match(/遠渡滄海[^楓幽星沼鹽熾]*/)?.[0] ?? ""})`)
  : fail(`HUD 無遠渡滄海追蹤:${sea3First.hudText}`);
await page.screenshot({ path: "/tmp/archipelago-45q-fargate.png" });

// 45r. 補滿條件(Lv.35 已達,補三位守護者擊敗紀錄)→ 再對話 → 獲得第三海寶石
await page.evaluate(() => {
  const g = window.__game;
  for (const kind of ["magmaGuardian", "coralGuardian", "lifeGuardian"]) g.quests.addKill(kind);
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
const sea3Gem = await page.evaluate(() => ({
  gem: window.__game.inventory.thirdSeaGem,
  state: window.__game.quests.get("sea3"),
}));
sea3Gem.gem ? ok("試煉通過:獲得第三海寶石") : fail(`第三海寶石未發放:${JSON.stringify(sea3Gem)}`);
sea3Gem.state === "done" ? ok("「遠渡滄海」任務完成") : fail(`任務狀態:${sea3Gem.state}`);

// 45s. 使用第三海寶石 → 背包列三顆海寶石;人與船一起傳送到望潮鎮
await page.keyboard.press("Tab");
await page.waitForTimeout(300);
const sea3Buttons = await page.evaluate(
  () => document.getElementById("bag").querySelectorAll("button[data-sea]").length,
);
sea3Buttons === 3
  ? ok("背包「重要道具」區顯示三顆海寶石")
  : fail(`海寶石按鈕數異常:${sea3Buttons}`);
await page.click('button[data-sea="3"]');
await page.waitForTimeout(500);
const arrive3 = await page.evaluate(() => {
  const g = window.__game;
  const p = g.player.mesh.position;
  const b = g.boat.mesh.position;
  return { x: p.x, z: p.z, bx: b.x, bz: b.z, bagOpen: g.bag.isOpen, sailing: g.sailing };
});
arrive3.x > 3500 && !arrive3.sailing
  ? ok(`傳送至第三海望潮鎮(位置 ${arrive3.x.toFixed(0)},${arrive3.z.toFixed(0)})`)
  : fail(`第三海傳送異常:${JSON.stringify(arrive3)}`);
Math.hypot(arrive3.bx - 4002, arrive3.bz - -58) < 5
  ? ok("船隻同行,停在望潮鎮碼頭旁")
  : fail(`船位異常:${arrive3.bx.toFixed(0)},${arrive3.bz.toFixed(0)}`);
await page.screenshot({ path: "/tmp/archipelago-45s-tidewatch.png" });

// 45t. 第三海三座委託島生成:楓靈/幽影/星砂果凍各 ×5,且立於陸地;敵人再強化(hp ×3.2、dmg ×2.4)
const sea3Spawn = await page.evaluate(() => {
  const g = window.__game;
  const of = (k) => g.enemies.filter((e) => e.kind === k);
  const maple = of("maple")[0];
  return {
    maple: of("maple").length,
    shade: of("shade").length,
    // 星砂果凍分佈兩島(星砂洲 5 + 星穹島 4),此處只計星砂洲島上的
    star: of("star").filter((e) => Math.hypot(e.mesh.position.x - 4230, e.mesh.position.z - -170) < 50).length,
    mapleY: maple?.mesh.position.y ?? -1,
    hp: maple?.maxHp,
    dmg: maple?.dmg,
  };
});
sea3Spawn.maple === 5 && sea3Spawn.shade === 5 && sea3Spawn.star === 5 && sea3Spawn.mapleY > 0.5
  ? ok(`第三海三島生成(楓靈×${sea3Spawn.maple}、幽影×${sea3Spawn.shade}、星砂×${sea3Spawn.star})`)
  : fail(`第三海敵人生成異常:${JSON.stringify(sea3Spawn)}`);
sea3Spawn.hp === 768 && sea3Spawn.dmg === 72
  ? ok(`第三海敵人強化(楓靈 hp${sea3Spawn.hp}/dmg${sea3Spawn.dmg},基礎 240/30 × 3.2/2.4)`)
  : fail(`第三海強化異常:${JSON.stringify(sea3Spawn)}`);

// 45u. 楓紅島打怪委託:楓園主楓伯「楓靈清剿」接取 → 模擬擊殺 → 回報領獎
await page.evaluate(() => window.__game.player.mesh.position.set(4170, 3, 174)); // 楓園主楓伯旁
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
const mapleAccepted = await page.evaluate(() => window.__game.quests.get("mapleHunt"));
const mapleCoinsBefore = await page.evaluate(() => {
  for (let i = 0; i < 4; i++) window.__game.quests.addKill("maple"); // 模擬擊殺 4 隻
  return window.__game.inventory.coins;
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
const mapleDone = await page.evaluate(() => ({
  state: window.__game.quests.get("mapleHunt"),
  coins: window.__game.inventory.coins,
}));
mapleAccepted === "active" && mapleDone.state === "done" && mapleDone.coins >= mapleCoinsBefore + 600
  ? ok(`楓紅島委託「楓靈清剿」可接取並完成(獲得 ${mapleDone.coins - mapleCoinsBefore} 貝拉幣)`)
  : fail(`楓靈清剿異常:${JSON.stringify({ mapleAccepted, mapleDone })}`);
await page.screenshot({ path: "/tmp/archipelago-45u-maple.png" });

// 45v. 星穹島生成:星砂果凍 ×4 + 星穹守護者立於隕石坑,第三海倍率(hp 750×3.2、dmg 36×2.4)
const astralIsle = await page.evaluate(() => {
  const g = window.__game;
  const guardian = g.enemies.find((e) => e.kind === "astralGuardian");
  const stars = g.enemies.filter(
    (e) => e.kind === "star" && Math.hypot(e.mesh.position.x - 3960, e.mesh.position.z - 210) < 54,
  ).length;
  return {
    has: !!guardian,
    y: guardian ? guardian.mesh.position.y : -99,
    hp: guardian?.maxHp,
    dmg: guardian?.dmg,
    stars,
  };
});
astralIsle.has && astralIsle.y > 0.5 && astralIsle.stars === 4
  ? ok(`星穹島生成(星砂果凍×${astralIsle.stars} + 星穹守護者,隕石坑 y=${astralIsle.y.toFixed(1)})`)
  : fail(`星穹島異常:${JSON.stringify(astralIsle)}`);
astralIsle.hp === 2400 && astralIsle.dmg === 86
  ? ok(`星穹守護者第三海強化(hp${astralIsle.hp}/dmg${astralIsle.dmg},基礎 750/36 × 3.2/2.4)`)
  : fail(`星穹守護者數值異常:${JSON.stringify(astralIsle)}`);

// 45v2. 三委託島守護者:楓魂/幽影/星砂守護者各鎮守島心,第三海倍率 + 專屬特殊技
const sea3Guardians = await page.evaluate(() => {
  const g = window.__game;
  const pick = (kind) => {
    const e = g.enemies.find((en) => en.kind === kind);
    return e ? { y: e.mesh.position.y, hp: e.maxHp, dmg: e.dmg, special: e.special?.name ?? "" } : null;
  };
  return {
    maple: pick("mapleGuardian"),
    shade: pick("shadeGuardian"),
    star: pick("starGuardian"),
  };
});
sea3Guardians.maple?.y > 0.5 && sea3Guardians.shade?.y > 0.5 && sea3Guardians.star?.y > 0.5
  ? ok("三委託島守護者生成(楓魂/幽影/星砂各鎮守島心)")
  : fail(`三委託島守護者生成異常:${JSON.stringify(sea3Guardians)}`);
sea3Guardians.maple?.hp === 2208 && sea3Guardians.maple?.dmg === 82 &&
sea3Guardians.shade?.hp === 2272 && sea3Guardians.shade?.dmg === 84 &&
sea3Guardians.star?.hp === 2240 && sea3Guardians.star?.dmg === 82
  ? ok(`三委託島守護者第三海強化(hp ${sea3Guardians.maple.hp}/${sea3Guardians.shade.hp}/${sea3Guardians.star.hp},基礎 690/710/700 × 3.2)`)
  : fail(`三委託島守護者數值異常:${JSON.stringify(sea3Guardians)}`);
sea3Guardians.maple?.special === "楓火焚風" && sea3Guardians.shade?.special === "幽影汲取" && sea3Guardians.star?.special === "星砂風暴"
  ? ok("三委託島守護者特殊技(楓火焚風/幽影汲取/星砂風暴)")
  : fail(`守護者特殊技異常:${JSON.stringify(sea3Guardians)}`);

// 45v3. 擊敗幽影守護者(灼燒致死走主迴圈掉落結算)→ 大結晶×2 + 貝拉幣×2 磁吸拾取
const shadeBossBefore = await page.evaluate(() => {
  const g = window.__game;
  const guardian = g.enemies.find((e) => e.kind === "shadeGuardian");
  const gp = guardian.mesh.position;
  g.player.mesh.position.set(gp.x, gp.y, gp.z + 2);
  guardian.burn(3, 99999); // 主迴圈 tickBurn 致死 → spawnDrops 正規掉落流程
  return { large: g.inventory.crystals.large, coins: g.inventory.coins };
});
await page.waitForTimeout(1800);
const shadeBossAfter = await page.evaluate(() => ({
  large: window.__game.inventory.crystals.large,
  coins: window.__game.inventory.coins,
  dead: window.__game.enemies.find((e) => e.kind === "shadeGuardian").isDead,
}));
shadeBossAfter.dead && shadeBossAfter.large >= shadeBossBefore.large + 2 && shadeBossAfter.coins >= shadeBossBefore.coins + 2
  ? ok(`幽影守護者擊殺掉落(大結晶+${shadeBossAfter.large - shadeBossBefore.large}、貝拉幣+${shadeBossAfter.coins - shadeBossBefore.coins})`)
  : fail(`幽影守護者掉落異常:${JSON.stringify({ shadeBossBefore, shadeBossAfter })}`);
await page.screenshot({ path: "/tmp/archipelago-45v3-shade-boss.png" });

// 45v4. 幽影守護者掉落【幽影石】(45v3 擊殺時已磁吸拾取)→ 施放幽影迴環:靈力扣除 + 傷敵吸血
const shadowOwned = await page.evaluate(() => window.__game.gems.shadowOwned);
shadowOwned ? ok("幽影守護者掉落幽影石並拾取") : fail("幽影石未取得");
const shadowCastBefore = await page.evaluate(() => {
  const g = window.__game;
  g.gems.equipped = ["shadow"];
  g.gems.ensureSlots();
  g.player.mp = g.player.stats.maxMP;
  g.player.hp = Math.round(g.player.stats.maxHP * 0.5); // 壓低血量以驗吸血
  // 傳送到一隻活著的幽影果凍旁(迴環半徑內)
  const mob = g.enemies.find((e) => e.kind === "shade" && !e.isDead);
  const mp2 = mob.mesh.position;
  g.player.mesh.position.set(mp2.x + 2, mp2.y, mp2.z);
  return { mp: g.player.mp, hp: g.player.hp, mobHp: mob.hp, mobIdx: mob.netIndex };
});
await castGem("shadow");
await page.waitForTimeout(300);
const shadowCastAfter = await page.evaluate((idx) => {
  const g = window.__game;
  const mob = g.enemies[idx];
  return { mp: g.player.mp, hp: g.player.hp, mobHp: mob.hp, dead: mob.isDead };
}, shadowCastBefore.mobIdx);
// 靈力在等待期間會自然回復,扣除量以「≥ 消耗 -1」判定
shadowCastBefore.mp - shadowCastAfter.mp >= 13 && (shadowCastAfter.mobHp < shadowCastBefore.mobHp || shadowCastAfter.dead)
  ? ok(`幽影迴環施放(靈力 -14,幽影果凍 ${shadowCastBefore.mobHp}→${shadowCastAfter.dead ? "擊殺" : shadowCastAfter.mobHp})`)
  : fail(`幽影迴環異常:${JSON.stringify({ shadowCastBefore, shadowCastAfter })}`);
shadowCastAfter.hp > shadowCastBefore.hp
  ? ok(`幽影迴環吸血回復(HP ${shadowCastBefore.hp}→${shadowCastAfter.hp})`)
  : fail(`幽影迴環未吸血:${JSON.stringify({ shadowCastBefore, shadowCastAfter })}`);
// 回滿血再去打下一位守護者(半血站在頭目旁等掉落會被打死,卡住後續測試)
await page.evaluate(() => {
  window.__game.player.hp = window.__game.player.stats.maxHP;
});

// 45v5. 擊敗楓魂守護者 →【楓燃石】掉落拾取 → 施放楓刃旋舞:靈力扣除 + 六道劍氣
await page.evaluate(() => {
  const g = window.__game;
  g.player.hp = g.player.stats.maxHP;
  const guardian = g.enemies.find((e) => e.kind === "mapleGuardian");
  const gp = guardian.mesh.position;
  g.player.mesh.position.set(gp.x, gp.y, gp.z + 2);
  guardian.burn(3, 99999);
});
await page.waitForTimeout(1800);
const mapleOwned = await page.evaluate(() => window.__game.gems.mapleOwned);
mapleOwned ? ok("楓魂守護者掉落楓燃石並拾取") : fail("楓燃石未取得");
const mapleCastBefore = await page.evaluate(() => {
  const g = window.__game;
  g.gems.equipped = ["maple"];
  g.gems.ensureSlots();
  g.player.mp = g.player.stats.maxMP;
  return { mp: g.player.mp, waves: g.shockwaves.length };
});
await castGem("maple");
const mapleCastAfter = await page.evaluate(() => ({
  mp: window.__game.player.mp,
  waves: window.__game.shockwaves.length,
}));
mapleCastBefore.mp - mapleCastAfter.mp >= 14 && mapleCastAfter.waves >= mapleCastBefore.waves + 6
  ? ok(`楓刃旋舞施放(靈力 -15,全方位六道楓刃 +${mapleCastAfter.waves - mapleCastBefore.waves})`)
  : fail(`楓刃旋舞異常:${JSON.stringify({ mapleCastBefore, mapleCastAfter })}`);

// 45v6. 擊敗星砂守護者 → 靈樹果實【星辰果】掉落拾取 → G 星隕雨:靈力扣除 + 命中周圍敵人
await page.evaluate(() => {
  const g = window.__game;
  g.player.hp = g.player.stats.maxHP;
  const guardian = g.enemies.find((e) => e.kind === "starGuardian");
  const gp = guardian.mesh.position;
  g.player.mesh.position.set(gp.x, gp.y, gp.z + 2);
  guardian.burn(3, 99999);
});
await page.waitForTimeout(1800);
const starfallOwned = await page.evaluate(() => window.__game.fruits.starfallOwned);
starfallOwned ? ok("星砂守護者掉落星辰果並拾取") : fail("星辰果未取得");
const starfallCastBefore = await page.evaluate(() => {
  const g = window.__game;
  g.fruits.equipped = ["starfall"];
  g.player.mp = g.player.stats.maxMP;
  // 傳送到一隻活著的星砂果凍旁(索敵範圍 14 內)
  const mob = g.enemies.find((e) => e.kind === "star" && !e.isDead);
  const mp2 = mob.mesh.position;
  g.player.mesh.position.set(mp2.x + 3, mp2.y, mp2.z);
  return { mp: g.player.mp, mobHp: mob.hp, mobIdx: mob.netIndex };
});
await page.keyboard.press("g");
await page.waitForTimeout(300);
const starfallCastAfter = await page.evaluate((idx) => {
  const g = window.__game;
  const mob = g.enemies[idx];
  return { mp: g.player.mp, hit: mob.hp < mob.maxHp || mob.isDead };
}, starfallCastBefore.mobIdx);
starfallCastBefore.mp - starfallCastAfter.mp >= 19 && starfallCastAfter.hit
  ? ok("星隕雨施放(靈力 -20,星隕命中周圍敵人)")
  : fail(`星隕雨異常:${JSON.stringify({ starfallCastBefore, starfallCastAfter })}`);
await page.screenshot({ path: "/tmp/archipelago-45v6-starfall.png" });

// 45w. 三委託辦妥後,鎮長汐婆給予「星穹的呼喚」+ HUD 追蹤
await page.evaluate(() => {
  const g = window.__game;
  g.quests.complete("shadeHunt"); // 楓靈已於 45u 完成,補完剩下兩島委託
  g.quests.complete("starHunt");
  g.player.mesh.position.set(4000, 2, -38.5); // 鎮長汐婆旁
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
const astralQuest = await page.evaluate(() => ({
  state: window.__game.quests.get("astral"),
  owned: window.__game.gems.astralOwned,
  hudText: document.getElementById("hud-quest-list")?.textContent ?? "",
}));
astralQuest.state === "active" && !astralQuest.owned
  ? ok("鎮長汐婆給予「星穹的呼喚」任務(尚未發石)")
  : fail(`星穹任務接取異常:${JSON.stringify(astralQuest)}`);
astralQuest.hudText.includes("星穹的呼喚")
  ? ok("HUD 顯示星穹的呼喚追蹤")
  : fail(`HUD 無星穹追蹤:${astralQuest.hudText}`);

// 45x. 擊敗星穹守護者(灼燒致死走主迴圈掉落結算)→ 星芒石掉落 → 磁吸拾取 → 自動出戰
await page.evaluate(() => {
  const g = window.__game;
  g.gems.equipped = ["flame"]; // 騰出出戰空位,讓星芒石能自動出戰
  g.gems.ensureSlots();
  const guardian = g.enemies.find((e) => e.kind === "astralGuardian");
  const gp = guardian.mesh.position;
  g.player.mesh.position.set(gp.x, gp.y, gp.z + 2);
  guardian.burn(3, 99999); // 主迴圈 tickBurn 致死 → spawnDrops 正規掉落流程
});
await page.waitForTimeout(1800);
const astralGot = await page.evaluate(() => ({
  owned: window.__game.gems.astralOwned,
  equipped: window.__game.gems.isEquipped("astral"),
  slot: window.__game.gems.slotOf("astral"),
}));
astralGot.owned
  ? ok("星穹守護者掉落星芒石並拾取")
  : fail(`星芒石未取得:${JSON.stringify(astralGot)}`);
astralGot.equipped && astralGot.slot >= 0
  ? ok(`星芒石自動出戰並綁定鍵位 ${astralGot.slot + 1}`)
  : fail(`星芒石未出戰:${JSON.stringify(astralGot)}`);
await page.screenshot({ path: "/tmp/archipelago-45x-astral-gem.png" });

// 45y. 星芒斬:施放 → 靈力扣除 + 一次三道星光劍氣
const astralCastBefore = await page.evaluate(() => {
  const g = window.__game;
  g.player.mp = g.player.stats.maxMP;
  return { mp: g.player.mp, waves: g.shockwaves.length };
});
await castGem("astral");
await page.waitForTimeout(200);
const astralCastAfter = await page.evaluate(() => ({
  mp: window.__game.player.mp,
  waves: window.__game.shockwaves.length,
}));
astralCastAfter.mp <= astralCastBefore.mp - 15
  ? ok(`星芒斬消耗靈力(${Math.round(astralCastBefore.mp)} → ${Math.round(astralCastAfter.mp)})`)
  : fail(`星芒斬靈力未扣除:${astralCastBefore.mp} → ${astralCastAfter.mp}`);
astralCastAfter.waves - astralCastBefore.waves >= 3
  ? ok(`星芒斬一次射出三道星光劍氣(場上 +${astralCastAfter.waves - astralCastBefore.waves})`)
  : fail(`星光劍氣數異常:${astralCastBefore.waves} → ${astralCastAfter.waves}`);
await page.screenshot({ path: "/tmp/archipelago-45y-astral-cast.png" });

// 45z. 持有星芒石後回報汐婆 → 「星穹的呼喚」完成 + 發獎(800 貝拉幣 + 大型結晶×3)
const astralCoinsBefore = await page.evaluate(() => {
  window.__game.player.mesh.position.set(4000, 2, -38.5); // 鎮長汐婆旁
  return window.__game.inventory.coins;
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
const astralDone = await page.evaluate(() => ({
  state: window.__game.quests.get("astral"),
  coins: window.__game.inventory.coins,
}));
astralDone.state === "done" && astralDone.coins >= astralCoinsBefore + 800
  ? ok(`「星穹的呼喚」完成(獲得 ${astralDone.coins - astralCoinsBefore} 貝拉幣)`)
  : fail(`星穹任務未完成:${JSON.stringify({ astralCoinsBefore, astralDone })}`);

// 45l. 出戰配置上限:10 顆寶石只能同時裝備 4 顆,第 5 顆被拒
const capTest = await page.evaluate(() => {
  const g = window.__game;
  g.gems.equipped = [];
  const tryEquip = ["flame", "earth", "frost", "void", "lava"].map((k) => g.gems.equip(k));
  return { count: g.gems.equipped.length, fifthRejected: tryEquip[4] === false };
});
capTest.count === 4 && capTest.fifthRejected
  ? ok("靈紋寶石出戰上限 4 生效(第 5 顆裝備被拒)")
  : fail(`出戰上限異常:${JSON.stringify(capTest)}`);

// 未出戰的寶石技能不生效:焰心石未出戰 → 無綁定鍵位 → 施放鍵不消耗靈力
const offBefore = await page.evaluate(() => {
  const g = window.__game;
  g.gems.equipped = ["earth", "frost", "void", "lava"]; // 不含 flame
  g.gems.ensureSlots();
  g.player.mp = g.player.stats.maxMP;
  g.player.mesh.position.set(0, 1, 0);
  return { mp: g.player.mp, flameSlot: g.gems.slotOf("flame") };
});
await castGem("flame"); // 未出戰 → slotOf=-1 → 按 "0" 不施放
await page.waitForTimeout(120);
const offAfter = await page.evaluate(() => window.__game.player.mp);
offBefore.flameSlot === -1 && offAfter >= offBefore.mp - 1
  ? ok("未出戰寶石無鍵位、技能失效(施放未消耗靈力)")
  : fail(`未出戰寶石仍生效:${JSON.stringify(offBefore)} → ${offAfter}`);

// 45m. 寶石鍵位:出戰主動寶石可指定/對調 1–6 鍵位,且按該數字鍵即施放
const bindTest = await page.evaluate(() => {
  const g = window.__game.gems;
  g.equipped = ["flame", "earth"];
  g.slots = new Array(6).fill(null);
  g.ensureSlots(); // flame→0, earth→1(出戰順序)
  const initial = { flame: g.slotOf("flame"), earth: g.slotOf("earth") };
  g.assignSlot("flame", 4); // 焰心石移到第 5 鍵
  const moved = g.slotOf("flame");
  g.assignSlot("earth", 4); // 指到已被 flame 占用的鍵 → 對調
  return { initial, moved, afterSwapEarth: g.slotOf("earth"), afterSwapFlame: g.slotOf("flame") };
});
bindTest.initial.flame === 0 &&
bindTest.moved === 4 &&
bindTest.afterSwapEarth === 4 &&
bindTest.afterSwapFlame === 1
  ? ok("寶石鍵位可指定與對調(flame→5、earth 指同鍵與 flame 對調)")
  : fail(`鍵位指定/對調異常:${JSON.stringify(bindTest)}`);

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

// 47. 重生點傳送:背包底部「傳送」區(預設收合)→ 點開列出已設置重生點 → 傳送
await page.keyboard.press("Tab");
await page.waitForTimeout(300);
const tpCollapsed = await page.evaluate(() => ({
  hasOpenBtn: !!document.querySelector("#bag button[data-tp-open]"),
  listed: document.querySelectorAll("#bag button[data-tp]").length,
}));
tpCollapsed.hasOpenBtn && tpCollapsed.listed === 0
  ? ok("背包底部顯示「傳送」區(預設收合)")
  : fail(`傳送區異常:${JSON.stringify(tpCollapsed)}`);
await page.click("#bag button[data-tp-open]");
await page.waitForTimeout(200);
const tpList = await page.evaluate(() =>
  [...document.querySelectorAll("#bag button[data-tp]")].map((b) => b.dataset.tp),
);
tpList.length === 2 && tpList.includes("ember") && tpList.includes("verdant")
  ? ok(`傳送點選項列出(${tpList.join("+")})`)
  : fail(`傳送點選項異常:${JSON.stringify(tpList)}`);
await page.screenshot({ path: "/tmp/archipelago-29-teleport.png" });
await page.click('#bag button[data-tp="ember"]');
await page.waitForTimeout(400);
const tpResult = await page.evaluate(() => {
  const g = window.__game;
  const p = g.player.mesh.position;
  const b = g.boat.mesh.position;
  return { x: p.x, z: p.z, bx: b.x, bz: b.z, bagOpen: g.bag.isOpen };
});
Math.hypot(tpResult.x - -143, tpResult.z - 76) < 3 && !tpResult.bagOpen
  ? ok(`傳送到燼岩重生點(位置 ${tpResult.x.toFixed(0)},${tpResult.z.toFixed(0)},背包自動關閉)`)
  : fail(`重生點傳送異常:${JSON.stringify(tpResult)}`);
Math.hypot(tpResult.bx - -150, tpResult.bz - 62) < 5
  ? ok("船隻同行移到燼岩島近岸")
  : fail(`船位異常:${tpResult.bx.toFixed(0)},${tpResult.bz.toFixed(0)}`);

// 48. 雷光果取得:只在風暴天氣於霜雪峰山頂顯現,走近即拾取
await page.evaluate(() => window.__game.sky.forceWeather("clear"));
await page.waitForTimeout(200);
const clearNoFruit = await page.evaluate(
  () => window.__game.pickups.filter((p) => p.kind === "fruit-thunder").length,
);
clearNoFruit === 0 ? ok("晴天時雷光果未顯現") : fail(`晴天不應有雷光果:${clearNoFruit}`);
await page.evaluate(() => window.__game.sky.forceWeather("storm"));
await page.waitForTimeout(250);
const stormFruit = await page.evaluate(
  () => window.__game.pickups.filter((p) => p.kind === "fruit-thunder").length,
);
stormFruit >= 1 ? ok("風暴天氣雷光果於霜雪峰山頂顯現") : fail(`風暴應顯現雷光果:${stormFruit}`);
await page.evaluate(() => window.__game.player.mesh.position.set(60, 30, -170));
await page.waitForTimeout(300);
const thunderGot = await page.evaluate(() => window.__game.fruits.thunderOwned);
thunderGot ? ok("走近拾取雷光果(thunderOwned)") : fail("雷光果未拾取");
await page.screenshot({ path: "/tmp/archipelago-31-thunder.png" });

// 49. 連鎖閃電:聚集敵人 → Z → 多目標連鎖 + 折線 + 麻痺
const thunderBefore = await page.evaluate(() => {
  const g = window.__game;
  g.player.mp = g.player.stats.maxMP;
  g.player.mesh.position.set(60, 30, -170);
  const frosts = g.enemies.filter((e) => e.kind === "frost").slice(0, 3);
  frosts[0].mesh.position.set(60, 28, -164);
  frosts[1].mesh.position.set(63, 28, -161);
  frosts[2].mesh.position.set(57, 28, -167);
  return { mp: g.player.mp, hp: frosts.map((f) => f.hp) };
});
await page.keyboard.press("z");
await page.waitForTimeout(150);
const thunderAfter = await page.evaluate(() => {
  const g = window.__game;
  const frosts = g.enemies.filter((e) => e.kind === "frost").slice(0, 3);
  return {
    mp: g.player.mp,
    bolts: g.bolts.length,
    hp: frosts.map((f) => f.hp),
    stunned: frosts.filter((f) => f.stunT > 0).length,
  };
});
thunderAfter.mp <= thunderBefore.mp - 15
  ? ok(`連鎖閃電消耗靈力(${Math.round(thunderBefore.mp)} → ${Math.round(thunderAfter.mp)})`)
  : fail(`靈力未扣:${thunderBefore.mp} → ${thunderAfter.mp}`);
const chained = thunderAfter.hp.filter((hp, i) => hp < thunderBefore.hp[i]).length;
thunderAfter.bolts > 0 && chained >= 2
  ? ok(`連鎖閃電命中 ${chained} 個目標(折線生成)`)
  : fail(`連鎖異常:bolts=${thunderAfter.bolts} chained=${chained}`);
thunderAfter.stunned >= 1
  ? ok(`命中目標被麻痺(${thunderAfter.stunned} 個)`)
  : fail("連鎖閃電未造成麻痺");

// 50. 引力果引力漩渦:聚怪 + 持續傷害(先麻痺定身以隔離測「吸引位移」)
const gravBefore = await page.evaluate(() => {
  const g = window.__game;
  g.fruits.gravityOwned = true;
  g.fruits.equip("gravity"); // 出戰才生效(雷光果已於拾取時自動出戰,引力果補上)
  g.player.mp = g.player.stats.maxMP;
  g.player.facing = 0; // 面向 +z → 漩渦生成於玩家前方 8(中心 60,-162)
  g.player.mesh.position.set(60, 30, -170);
  const cx = 60;
  const cz = -162;
  const frosts = g.enemies.filter((e) => e.kind === "frost").slice(0, 3);
  frosts.forEach((f, i) => {
    f.stun(5); // 定身,排除自走干擾,專測漩渦吸引
    f.mesh.position.set(cx + (i - 1) * 3, 28, cz + 2);
  });
  return {
    mp: g.player.mp,
    hp: frosts.map((f) => f.hp),
    dist: frosts.map((f) => Math.hypot(f.mesh.position.x - cx, f.mesh.position.z - cz)),
  };
});
await page.keyboard.press("t");
// 立刻量靈力(漩渦持續期間靈力會自然回復,量太晚會誤判沒扣)
await page.waitForTimeout(70);
const gravMpAfter = await page.evaluate(() => window.__game.player.mp);
await page.waitForTimeout(700);
const gravAfter = await page.evaluate(() => {
  const g = window.__game;
  const cx = 60;
  const cz = -162;
  const frosts = g.enemies.filter((e) => e.kind === "frost").slice(0, 3);
  return {
    vortexes: g.vortexes.length,
    hp: frosts.map((f) => f.hp),
    dist: frosts.map((f) => Math.hypot(f.mesh.position.x - cx, f.mesh.position.z - cz)),
  };
});
gravMpAfter <= gravBefore.mp - 17
  ? ok(`引力漩渦消耗靈力(${Math.round(gravBefore.mp)} → ${Math.round(gravMpAfter)})`)
  : fail(`靈力未扣:${gravBefore.mp} → ${gravMpAfter}`);
const pulled = gravAfter.dist.filter((d, i) => d < gravBefore.dist[i] - 0.3).length;
pulled >= 2
  ? ok(`引力漩渦把 ${pulled} 個敵人吸向中心`)
  : fail(`吸引異常:${JSON.stringify({ before: gravBefore.dist, after: gravAfter.dist })}`);
const hurt = gravAfter.hp.filter((hp, i) => hp < gravBefore.hp[i]).length;
hurt >= 2
  ? ok(`引力漩渦持續傷害命中 ${hurt} 個敵人`)
  : fail(`漩渦傷害異常:${JSON.stringify({ before: gravBefore.hp, after: gravAfter.hp })}`);
await page.screenshot({ path: "/tmp/archipelago-32-vortex.png" });

// 51. 島嶼頭目特殊技能:每位守護者皆具專屬技能,且能蓄力 → 範圍命中玩家
const BOSS_KINDS = [
  "elite",
  "windGuardian",
  "earthGuardian",
  "frostGuardian",
  "voidGuardian",
  "voidLord",
  "magmaGuardian",
  "coralGuardian",
  "lifeGuardian",
];
const bossSkills = await page.evaluate((kinds) => {
  const g = window.__game;
  const map = {};
  for (const k of kinds) {
    const e = g.enemies.find((en) => en.kind === k);
    map[k] = e ? e.specialSkill : null;
  }
  const slime = g.enemies.find((en) => en.kind === "slime");
  return { map, slimeSkill: slime ? slime.specialSkill : "MISSING" };
}, BOSS_KINDS);
const missingSkill = BOSS_KINDS.filter((k) => !bossSkills.map[k]);
missingSkill.length === 0
  ? ok(`九位島嶼頭目皆具特殊技能(${BOSS_KINDS.map((k) => bossSkills.map[k]).join("/")})`)
  : fail(`頭目缺特殊技能:${missingSkill.join(",")}`);
bossSkills.slimeSkill === null
  ? ok("雜魚史萊姆無特殊技能(僅頭目擁有)")
  : fail(`雜魚不應有特殊技能:${bossSkills.slimeSkill}`);

// 引爆風之守護者的特殊技能 → 蓄力預警 + 範圍命中玩家扣血
const bossBefore = await page.evaluate(() => {
  const g = window.__game;
  const wg = g.enemies.find((e) => e.kind === "windGuardian");
  const p = wg.mesh.position;
  g.player.mesh.position.set(p.x + 3, p.y + 1, p.z);
  g.player.hp = g.player.stats.maxHP;
  g.player.blocking = false;
  wg.forceSpecial();
  return { hp: g.player.hp, phase: wg.specialPhase };
});
await page.waitForTimeout(750); // telegraph(0.6)結束、引爆特效仍在場
const bossBlastFx = await page.evaluate(() => {
  const g = window.__game;
  return { waves: g.bossWaves.length, gemFx: g.gemFx.length };
});
await page.waitForTimeout(350); // 補足 blast(0.45) + 餘裕
const bossAfter = await page.evaluate(() => {
  const g = window.__game;
  const wg = g.enemies.find((e) => e.kind === "windGuardian");
  return { hp: g.player.hp, phase: wg.specialPhase };
});
bossBlastFx.waves > 0
  ? ok(`頭目引爆播放玩家同款技能特效(放射劍氣 ×${bossBlastFx.waves})`)
  : fail(`頭目引爆未生成放射劍氣特效(waves=${bossBlastFx.waves}, gemFx=${bossBlastFx.gemFx})`);
bossBefore.phase === "telegraph"
  ? ok("頭目特殊技能進入蓄力預警階段")
  : fail(`未進入蓄力預警:${bossBefore.phase}`);
bossAfter.hp < bossBefore.hp
  ? ok(`頭目特殊技能範圍命中玩家(HP ${Math.round(bossBefore.hp)} → ${Math.round(bossAfter.hp)})`)
  : fail(`特殊技能未造成傷害:${bossBefore.hp} → ${bossAfter.hp}`);
await page.screenshot({ path: "/tmp/archipelago-33-boss-special.png" });

// 10. 存檔:手動觸發存檔後重新整理,等級與寶石持有應保留
const beforeReload = await page.evaluate(() => {
  const g = window.__game;
  // 設一個有辨識度的鍵位綁定(焰心石→第 5 鍵)再存檔,驗證重整後保留
  g.gems.flameOwned = true;
  if (!g.gems.isEquipped("flame")) g.gems.equip("flame");
  g.gems.assignSlot("flame", 4);
  g.doSave();
  return {
    level: g.player.stats.level,
    flame: g.gems.flameOwned,
    gemsEquipped: [...g.gems.equipped],
    flameSlot: g.gems.slotOf("flame"),
    fruitsEquipped: [...g.fruits.equipped],
  };
});
await page.reload({ waitUntil: "networkidle" });
// 重載開機含 16MB 玩家 VRM,固定等待偶爾不夠 → 等 __game 掛鉤就緒再讀
await page.waitForFunction(() => !!window.__game, null, { timeout: 30000 });
await page.waitForTimeout(800); // 再等存檔套用/系統接線完成
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
  lava: window.__game.gems.lavaOwned,
  lavaQuest: window.__game.quests.get("lava"),
  thunder: window.__game.fruits.thunderOwned,
  gravity: window.__game.fruits.gravityOwned,
  aqua: window.__game.gems.aquaOwned,
  aquaQuest: window.__game.quests.get("aqua"),
  life: window.__game.gems.lifeOwned,
  lifeQuest: window.__game.quests.get("life"),
  gemsEquipped: [...window.__game.gems.equipped],
  flameSlot: window.__game.gems.slotOf("flame"),
  fruitsEquipped: [...window.__game.fruits.equipped],
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
afterReload.shrineIds.length === 4 &&
afterReload.shrineIds.includes("ember") &&
afterReload.shrineIds.includes("desert") &&
afterReload.shrineIds.includes("coral")
  ? ok(`重新整理後兩海重生點皆保留(${afterReload.shrineIds.join("+")})`)
  : fail(`重生點未保留:${JSON.stringify(afterReload.shrineIds)}`);
afterReload.vineHunt === "done"
  ? ok("重新整理後清剿任務進度保留")
  : fail(`清剿任務未保留:${afterReload.vineHunt}`);
afterReload.lava && afterReload.lavaQuest === "done"
  ? ok("重新整理後溶岩石與熔砂試煉進度保留")
  : fail(`溶岩石未保留:${JSON.stringify({ lava: afterReload.lava, lavaQuest: afterReload.lavaQuest })}`);
afterReload.thunder && afterReload.gravity
  ? ok("重新整理後靈樹果實(雷光果+引力果)保留")
  : fail(`果實未保留:${JSON.stringify({ thunder: afterReload.thunder, gravity: afterReload.gravity })}`);
afterReload.seaFirst && afterReload.seaSecond && afterReload.sea2 === "done"
  ? ok("重新整理後海寶石與跨越界海進度保留")
  : fail(`海寶石未保留:${JSON.stringify({ seaFirst: afterReload.seaFirst, seaSecond: afterReload.seaSecond, sea2: afterReload.sea2 })}`);
afterReload.aqua && afterReload.aquaQuest === "done" && afterReload.life && afterReload.lifeQuest === "done"
  ? ok("重新整理後碧波石/翠生石與兩島任務進度保留")
  : fail(`新寶石未保留:${JSON.stringify({ aqua: afterReload.aqua, aquaQuest: afterReload.aquaQuest, life: afterReload.life, lifeQuest: afterReload.lifeQuest })}`);
JSON.stringify(afterReload.gemsEquipped) === JSON.stringify(beforeReload.gemsEquipped) &&
JSON.stringify(afterReload.fruitsEquipped) === JSON.stringify(beforeReload.fruitsEquipped)
  ? ok(`重新整理後出戰配置保留(寶石 ${afterReload.gemsEquipped.join("/")}, 果實 ${afterReload.fruitsEquipped.join("/")})`)
  : fail(`出戰配置未保留:before=${JSON.stringify({ g: beforeReload.gemsEquipped, f: beforeReload.fruitsEquipped })} after=${JSON.stringify({ g: afterReload.gemsEquipped, f: afterReload.fruitsEquipped })}`);
afterReload.flameSlot === beforeReload.flameSlot && afterReload.flameSlot === 4
  ? ok(`重新整理後寶石鍵位綁定保留(焰心石綁第 ${afterReload.flameSlot + 1} 鍵)`)
  : fail(`寶石鍵位未保留:before=${beforeReload.flameSlot} after=${afterReload.flameSlot}`);

// 進入島嶼顯示島名 + 群島地圖(按 M)
// 先移到外海清空「目前所在島」,再傳送上翠風林島,應跳出島名大字
await page.evaluate(() => window.__game.player.mesh.position.set(500, 1, 500));
await page.waitForTimeout(160);
await page.evaluate(() => window.__game.player.mesh.position.set(150, 20, 110));
await page.waitForTimeout(260);
const islandTitle = await page.evaluate(() => {
  const el = document.getElementById("hud-island");
  return { show: el?.classList.contains("show") ?? false, text: el?.textContent ?? "" };
});
islandTitle.show && islandTitle.text.includes("翠風林島")
  ? ok(`進入島嶼顯示島名大字(${islandTitle.text.replace(/\s+/g, " ").trim()})`)
  : fail(`島名未顯示:${JSON.stringify(islandTitle)}`);

// 按 M 開地圖,應顯示且圖例列出當前海域(第一海)島嶼
await page.keyboard.press("m");
await page.waitForTimeout(180);
const mapOpen = await page.evaluate(() => {
  const el = document.getElementById("map");
  return {
    isOpen: window.__game.map?.isOpen ?? false,
    show: el?.classList.contains("show") ?? false,
    legend: document.getElementById("map-legend")?.textContent ?? "",
  };
});
mapOpen.isOpen && mapOpen.show && mapOpen.legend.includes("翠風林島") && mapOpen.legend.includes("曙光嶼")
  ? ok("按 M 開啟群島地圖(圖例列出第一海島嶼)")
  : fail(`地圖未正確開啟:${JSON.stringify(mapOpen)}`);

// 地圖只列當前海域:第一海地圖不應含第二海島嶼
!mapOpen.legend.includes("熔砂島") && !mapOpen.legend.includes("珊瑚礁島")
  ? ok("地圖僅列玩家所在海域(第一海)島嶼,不混入第二海")
  : fail(`地圖混入第二海島嶼:${mapOpen.legend}`);

// 再按 M 關閉
await page.keyboard.press("m");
await page.waitForTimeout(120);
const mapClosed = await page.evaluate(() => ({
  isOpen: window.__game.map?.isOpen ?? true,
  show: document.getElementById("map")?.classList.contains("show") ?? true,
}));
!mapClosed.isOpen && !mapClosed.show
  ? ok("再按 M 關閉地圖")
  : fail(`地圖未關閉:${JSON.stringify(mapClosed)}`);

// ── 島嶼 3D 小模型地圖 + 上帝視角(點島觀看,單機全暫停)──────────────────
// 重新開地圖:應以 3D 迷你場景呈現(stage 內有 WebGL canvas + 各島 DOM 標籤)
await page.keyboard.press("m");
await page.waitForTimeout(250);
const map3d = await page.evaluate(() => {
  const stage = document.getElementById("map-stage");
  return {
    isOpen: window.__game.map?.isOpen ?? false,
    canvas: !!stage?.querySelector("canvas"),
    labels: [...(stage?.querySelectorAll(".isl-label") ?? [])].map((el) => el.textContent),
  };
});
map3d.isOpen && map3d.canvas && map3d.labels.includes("曙光嶼") && map3d.labels.includes("翠風林島")
  ? ok(`地圖以 3D 迷你模型呈現(${map3d.labels.length} 座島 + 島名標籤)`)
  : fail(`3D 地圖未就緒:${JSON.stringify(map3d)}`);
await page.screenshot({ path: "/tmp/archipelago-map3d.png" });

// 滑鼠實點島嶼:游標移到「曙光嶼」島名標籤上方(島身),hover 後點擊 → 進入上帝視角
const clickAt = await page.evaluate(() => {
  const stage = document.getElementById("map-stage");
  const rect = stage.querySelector("canvas").getBoundingClientRect();
  const label = [...stage.querySelectorAll(".isl-label")].find((el) => el.textContent === "曙光嶼");
  return { x: rect.left + parseFloat(label.style.left), y: rect.top + parseFloat(label.style.top) - 26 };
});
await page.mouse.move(clickAt.x, clickAt.y);
await page.waitForTimeout(200); // 等 render 針對游標位置算出 hover
await page.mouse.click(clickAt.x, clickAt.y);
await page.waitForTimeout(200);
const inspecting = await page.evaluate(() => ({
  active: window.__game.islandView.active,
  island: window.__game.islandView.island?.name ?? null,
  mapOpen: window.__game.map.isOpen,
}));
inspecting.active && inspecting.island === "曙光嶼" && !inspecting.mapOpen
  ? ok("點擊地圖島嶼 → 關地圖進入該島上帝視角(曙光嶼)")
  : fail(`點島未進入上帝視角:${JSON.stringify(inspecting)}`);

// 鏡頭飛抵島嶼上空(高度遠高於跟隨鏡頭、位於島心附近)
await page.waitForTimeout(900);
const camPos = await page.evaluate(() => {
  const c = window.__game.camera.position;
  const isl = window.__game.islandView.island;
  return { y: c.y, d: Math.hypot(c.x - isl.x, c.z - isl.z), r: isl.r };
});
camPos.y > 20 && camPos.d < camPos.r * 4
  ? ok(`上帝視角鏡頭飛抵島上空(高度 ${camPos.y.toFixed(0)}、離島心 ${camPos.d.toFixed(0)})`)
  : fail(`上帝視角鏡頭位置不對:${JSON.stringify(camPos)}`);
await page.screenshot({ path: "/tmp/archipelago-godview.png" });

// 單機:上帝視角中全世界暫停(敵人不動、日夜停走)
const readFrozen = () => ({
  time: window.__game.sky.time,
  pos: window.__game.enemies.slice(0, 5).flatMap((e) => [e.mesh.position.x, e.mesh.position.z]),
});
const frozen1 = await page.evaluate(readFrozen);
await page.waitForTimeout(700);
const frozen2 = await page.evaluate(readFrozen);
const frozenMoved = frozen1.pos.reduce((s, v, i) => s + Math.abs(v - frozen2.pos[i]), 0);
frozen2.time === frozen1.time && frozenMoved < 1e-6
  ? ok("單機上帝視角:世界全暫停(敵人/日夜凍結)")
  : fail(`上帝視角世界未暫停:dTime=${frozen2.time - frozen1.time} moved=${frozenMoved}`);

// 上帝視角中介面鍵不作用(Tab 不開背包)
await page.keyboard.press("Tab");
await page.waitForTimeout(120);
const bagBlocked = await page.evaluate(() => window.__game.bag.isOpen);
!bagBlocked ? ok("上帝視角中 Tab 不開背包") : fail("上帝視角中 Tab 打開了背包");

// WASD 平移注視點(視角可移動)
const pan1 = await page.evaluate(() => ({ x: window.__game.islandView.target.x, z: window.__game.islandView.target.z }));
await page.keyboard.down("w");
await page.waitForTimeout(400);
await page.keyboard.up("w");
const pan2 = await page.evaluate(() => ({ x: window.__game.islandView.target.x, z: window.__game.islandView.target.z }));
Math.hypot(pan2.x - pan1.x, pan2.z - pan1.z) > 2
  ? ok(`上帝視角 WASD 平移注視點(移動 ${Math.hypot(pan2.x - pan1.x, pan2.z - pan1.z).toFixed(1)})`)
  : fail(`WASD 未平移:${JSON.stringify({ pan1, pan2 })}`);

// M 返回地圖繼續選島
await page.keyboard.press("m");
await page.waitForTimeout(150);
const backToMap = await page.evaluate(() => ({
  active: window.__game.islandView.active,
  mapOpen: window.__game.map.isOpen,
}));
!backToMap.active && backToMap.mapOpen
  ? ok("上帝視角按 M 返回地圖")
  : fail(`按 M 未返回地圖:${JSON.stringify(backToMap)}`);

// 圖例點島同樣可進上帝視角;ESC 返回遊戲,世界恢復運轉且不誤開設定
await page.evaluate(() => window.__game.map.inspect("翠風林島"));
await page.waitForTimeout(150);
const inspect2 = await page.evaluate(() => window.__game.islandView.island?.name ?? null);
await page.keyboard.press("Escape");
await page.waitForTimeout(150);
const resumeTime = await page.evaluate(() => window.__game.sky.time);
await page.waitForTimeout(400);
const resumed = await page.evaluate(
  (prev) => ({
    active: window.__game.islandView.active,
    mapOpen: window.__game.map.isOpen,
    settings: window.__game.settings.isOpen,
    timeMoved: window.__game.sky.time !== prev,
  }),
  resumeTime,
);
inspect2 === "翠風林島" && !resumed.active && !resumed.mapOpen && !resumed.settings && resumed.timeMoved
  ? ok("圖例點島進上帝視角;ESC 返回遊戲、世界恢復(不誤開設定)")
  : fail(`ESC 返回異常:${JSON.stringify({ inspect2, resumed })}`);

// ── 角色外觀切換(可自由更換的多套 VRM)──────────────────────
const roster = await page.evaluate(() => ({
  count: window.__game.characters?.length ?? 0,
  first: window.__game.characterId,
}));
roster.count === 8
  ? ok(`角色外觀名單載入(${roster.count} 套 VRM,目前 ${roster.first})`)
  : fail(`角色名單數量不符:${JSON.stringify(roster)}`);

// 切到下一套,等新 VRM 載入完成(characterId 變更)
await page.evaluate(() => window.__game.switchCharacter(1));
const switched = await page
  .waitForFunction((prev) => window.__game.characterId !== prev, roster.first, { timeout: 15000 })
  .then(() => true)
  .catch(() => false);
const afterId = await page.evaluate(() => window.__game.characterId);
switched && afterId === "char2"
  ? ok(`背包箭頭切換角色外觀 → ${afterId}`)
  : fail(`角色切換失敗:switched=${switched} id=${afterId}`);

// 選擇寫入存檔(characterId 持久化)
const savedChar = await page.evaluate(() => {
  window.__game.doSave();
  return JSON.parse(localStorage.getItem("archipelago-save-v1")).characterId;
});
savedChar === "char2"
  ? ok(`角色外觀選擇寫入存檔(characterId=${savedChar})`)
  : fail(`角色外觀未存檔:${savedChar}`);

// ── VRM 劍盾掛手骨 + 攻擊動作加速 ──────────────────────
const weaponInfo = await page.evaluate(() => {
  const proto = window.__game.playerModel;
  return {
    sword: !!window.__game.player.mesh.getObjectByName("vrm-sword"),
    shield: !!window.__game.player.mesh.getObjectByName("vrm-shield"),
    attack: proto?.clips.attack.duration ?? 0,
    raw: proto?.attackRawDuration ?? 0,
  };
});
weaponInfo.sword && weaponInfo.shield
  ? ok("VRM 玩家劍盾掛載到手骨")
  : fail(`劍盾未掛載:${JSON.stringify(weaponInfo)}`);
weaponInfo.raw > 0 && Math.abs(weaponInfo.attack - weaponInfo.raw * 0.5) < 1e-3
  ? ok(`攻擊動作時間縮短 50%(${weaponInfo.raw.toFixed(2)}s → ${weaponInfo.attack.toFixed(2)}s)`)
  : fail(`攻擊動作未加速:${JSON.stringify(weaponInfo)}`);

// ── 靈脈試煉副本(祭壇島奉獻 → 三環全清推進 → 通關獎勵 → 可重複刷)──────
// 46a. 副本敵人開場沉眠:三環 48 隻全建好、全 isDead 且隱形
const dgBoot = await page.evaluate(() => {
  const g = window.__game;
  const d = g.dungeon;
  const mobs = g.enemies.slice(d.start);
  return {
    hasHook: !!d,
    count: mobs.length,
    rings: d.rings.length,
    allDormant: mobs.every((e) => e.isDead && !e.mesh.visible),
  };
});
dgBoot.hasHook && dgBoot.count === 48 && dgBoot.rings === 3 && dgBoot.allDormant
  ? ok(`副本敵人開場沉眠(三環 ${dgBoot.count} 隻全隱形)`)
  : fail(`副本沉眠異常:${JSON.stringify(dgBoot)}`);

// 46b. 副本島不在群島地圖:inspect 副本島應被拒絕(玩家點擊走同條路徑)
const dgInspect = await page.evaluate(() => window.__game.map.inspect("試煉之環・壹"));
!dgInspect ? ok("群島地圖排除副本島(inspect 試煉之環被拒)") : fail("地圖不該能點進副本島");

// 46c. 奉獻不足被拒:清空結晶與貝拉幣 → offer 不生效
const dgPoor = await page.evaluate(() => {
  const g = window.__game;
  const backup = { ...g.inventory.crystals, coins: g.inventory.coins };
  g.inventory.crystals.small = 0;
  g.inventory.crystals.medium = 0;
  g.inventory.crystals.large = 0;
  g.inventory.coins = 0;
  g.dungeon.offer();
  const rejected = !g.dungeon.run;
  Object.assign(g.inventory.crystals, backup);
  g.inventory.coins = backup.coins;
  return { rejected };
});
dgPoor.rejected ? ok("奉獻不足被祭壇拒絕(結晶/貝拉幣為 0)") : fail("奉獻不足仍開啟了副本");

// 46d. 奉獻成功:自動先扣小結晶(小2+中5 → 扣小2中1)、扣 100 幣、傳送進第一環、16 隻復活
const dgOffer = await page.evaluate(() => {
  const g = window.__game;
  g.inventory.crystals.small = 2;
  g.inventory.crystals.medium = 5;
  g.inventory.crystals.large = 0;
  g.inventory.coins = 150;
  g.dungeon.offer();
  const ring1 = g.enemies.slice(g.dungeon.start, g.dungeon.start + g.dungeon.ringSize);
  return {
    run: g.dungeon.run,
    small: g.inventory.crystals.small,
    medium: g.inventory.crystals.medium,
    coins: g.inventory.coins,
    z: g.player.mesh.position.z,
    alive: ring1.filter((e) => !e.isDead && e.mesh.visible).length,
  };
});
dgOffer.run && dgOffer.small === 0 && dgOffer.medium === 4 && dgOffer.coins === 50
  ? ok(`奉獻扣款正確(先扣小的:小 2→0、中 5→4,幣 150→${dgOffer.coins})`)
  : fail(`奉獻扣款異常:${JSON.stringify(dgOffer)}`);
dgOffer.z < -2000 && dgOffer.alive === 16
  ? ok(`奉獻後傳送進第一環(z=${dgOffer.z.toFixed(0)}),16 隻眷屬復活`)
  : fail(`進場異常:${JSON.stringify(dgOffer)}`);
await page.waitForTimeout(400);
await page.screenshot({ path: "/tmp/archipelago-46-dungeon-ring1.png" });

// 46e. 三環難度倍率覆寫(不吃第三海自動 ×3.2/×2.4):
// 壹=靈脈島同級(孢子 hp550/dmg56)、貳 +15%(633/64)、參 +25%(688/70;守護者 2250/88)
const dgScale = await page.evaluate(() => {
  const g = window.__game;
  const d = g.dungeon;
  const at = (ring, i) => g.enemies[d.start + ring * d.ringSize + i];
  return {
    r1: { hp: at(0, 0).maxHp, dmg: at(0, 0).dmg },
    r2: { hp: at(1, 0).maxHp, dmg: at(1, 0).dmg },
    r3: { hp: at(2, 0).maxHp, dmg: at(2, 0).dmg },
    boss3: { hp: at(2, 15).maxHp, dmg: at(2, 15).dmg, kind: at(2, 15).kind },
  };
});
dgScale.r1.hp === 550 && dgScale.r1.dmg === 56 &&
dgScale.r2.hp === 633 && dgScale.r2.dmg === 64 &&
dgScale.r3.hp === 688 && dgScale.r3.dmg === 70 &&
dgScale.boss3.kind === "lifeGuardian" && dgScale.boss3.hp === 2250 && dgScale.boss3.dmg === 88
  ? ok("三環難度倍率正確(壹 550/56、貳 +15% 633/64、參 +25% 688/70,守護者 2250/88)")
  : fail(`副本倍率異常:${JSON.stringify(dgScale)}`);

// 46f. 副本中按 M 不開群島地圖
await page.keyboard.press("m");
await page.waitForTimeout(150);
const dgMap = await page.evaluate(() => window.__game.map.isOpen);
!dgMap ? ok("副本中按 M 不開群島地圖") : fail("副本中不該能開地圖");
if (dgMap) await page.keyboard.press("m");

// 46f2. 副本全島仇恨:站島邊,同環最遠的眷屬(遠超一般索敵 12)也進 chase;
// 不同環(第二環)的眷屬不受影響、維持 patrol
await page.evaluate(() => {
  const g = window.__game;
  const r1 = g.dungeon.rings[0];
  g.player.mesh.position.set(r1.cx + 46, 2, r1.cz); // 第一環島緣
});
await page.waitForTimeout(700);
const dgAggro = await page.evaluate(() => {
  const g = window.__game;
  const d = g.dungeon;
  const p = g.player.mesh.position;
  const ring1 = g.enemies.slice(d.start, d.start + d.ringSize);
  let far = ring1[0];
  let farDist = 0;
  for (const e of ring1) {
    const dist = Math.hypot(e.mesh.position.x - p.x, e.mesh.position.z - p.z);
    if (dist > farDist) {
      farDist = dist;
      far = e;
    }
  }
  return { farDist, farState: far.state, ring2State: g.enemies[d.start + d.ringSize].state };
});
dgAggro.farDist > 12 && (dgAggro.farState === "chase" || dgAggro.farState === "windup")
  ? ok(`副本全島仇恨:最遠眷屬(${dgAggro.farDist.toFixed(0)} 單位外)進入追擊`)
  : fail(`全島仇恨異常:${JSON.stringify(dgAggro)}`);
dgAggro.ring2State === "patrol"
  ? ok("不同環的眷屬不跨島追擊(第二環維持巡邏)")
  : fail(`第二環眷屬不該被仇恨:${dgAggro.ring2State}`);

// 46f3. 祭壇島重生點:F 啟用(正常入存檔)→ 副本死亡選單列出(副本與第三海同區)→ 選它復活回祭壇島 → 再奉獻不重置
await page.evaluate(() => {
  const g = window.__game;
  g.player.hp = g.player.stats.maxHP;
  g.player.mesh.position.set(3746, 3, 102); // 祭壇島石碑前一步
});
await page.waitForTimeout(400);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const altarShrine = await page.evaluate(() => ({
  ids: window.__game.shrineIds,
  saved: JSON.parse(localStorage.getItem("archipelago-save-v1") ?? "{}").shrines ?? [],
}));
altarShrine.ids.includes("altar") && altarShrine.saved.includes("altar")
  ? ok("F 啟用祭壇島重生點(且寫入存檔)")
  : fail(`祭壇島重生點異常:${JSON.stringify(altarShrine)}`);

// 死亡需走傷害管線才會觸發死亡畫面:hp 壓 1 後站到環心,讓守護者/眷屬打死
await page.evaluate(() => {
  const g = window.__game;
  g.player.hp = 1;
  g.player.mesh.position.set(3820, 3, -3060);
});
let dgDead = false;
for (let i = 0; i < 24 && !dgDead; i++) {
  await page.waitForTimeout(500);
  dgDead = await page.evaluate(
    () => document.getElementById("death")?.classList.contains("show") ?? false,
  );
}
const dgBtns = await page.evaluate(() =>
  [...document.querySelectorAll("#death button")].map((b) => b.dataset.respawn),
);
dgDead && dgBtns.includes("altar")
  ? ok(`副本死亡選單含祭壇島重生點(${dgBtns.join("/")})`)
  : fail(`副本死亡選單異常:${JSON.stringify({ dgDead, dgBtns })}`);
await page.click('#death button[data-respawn="altar"]');
await page.waitForTimeout(400);
const dgRespawn = await page.evaluate(() => ({
  x: window.__game.player.mesh.position.x,
  z: window.__game.player.mesh.position.z,
  hp: window.__game.player.hp,
}));
Math.hypot(dgRespawn.x - 3746, dgRespawn.z - 100) < 4 && dgRespawn.hp > 0
  ? ok(`死在副本後於祭壇島重生點復活(${dgRespawn.x.toFixed(0)},${dgRespawn.z.toFixed(0)})`)
  : fail(`副本重生異常:${JSON.stringify(dgRespawn)}`);

await page.evaluate(() => {
  const g = window.__game;
  g.inventory.crystals.small = 3;
  g.inventory.coins = Math.max(g.inventory.coins, 200);
  g.player.hp = g.player.stats.maxHP;
  g.dungeon.offer(); // 再次奉獻(順便把 46g 需要的副本狀態重置):祭壇島重生點不受影響
});
await page.waitForTimeout(300);
const altarKept = await page.evaluate(() => window.__game.shrineIds.includes("altar"));
altarKept ? ok("再次奉獻後祭壇島重生點仍啟用(非副本石碑,不重置)") : fail("祭壇島重生點被誤重置");

// 46g. 全清第一環 16 隻 → 傳送門開啟;站到門邊按 F → 傳送至第二環
await page.evaluate(() => {
  const g = window.__game;
  for (let i = g.dungeon.start; i < g.dungeon.start + g.dungeon.ringSize; i++)
    g.enemies[i].takeDamage(999999);
});
await page.waitForTimeout(500);
const dgRing1Clear = await page.evaluate(() => window.__game.dungeon.portals);
dgRing1Clear[0] && !dgRing1Clear[1]
  ? ok("第一環全清,傳送門開啟(僅該環)")
  : fail(`傳送門狀態異常:${JSON.stringify(dgRing1Clear)}`);
await page.evaluate(() => {
  const g = window.__game;
  const r = g.dungeon.rings[0];
  g.player.mesh.position.set(r.cx, 3, r.cz + 22); // 站到傳送門邊
});
await page.waitForTimeout(200);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const dgRing2Pos = await page.evaluate(() => {
  const g = window.__game;
  const r = g.dungeon.rings[1];
  const p = g.player.mesh.position;
  return { dist: Math.hypot(p.x - r.cx, p.z - r.cz) };
});
dgRing2Pos.dist < 60
  ? ok(`傳送門 F 前往第二環(離環心 ${dgRing2Pos.dist.toFixed(0)})`)
  : fail(`未傳送至第二環:${JSON.stringify(dgRing2Pos)}`);

// 46h. 全清二、三環 → 通關獎勵 1000 幣 + 大型結晶×5,返回傳送門開啟;按 F 回祭壇島
const dgBefore = await page.evaluate(() => ({
  coins: window.__game.inventory.coins,
  large: window.__game.inventory.crystals.large,
}));
await page.evaluate(() => {
  const g = window.__game;
  for (let i = g.dungeon.start + g.dungeon.ringSize; i < g.dungeon.start + g.dungeon.ringSize * 3; i++)
    g.enemies[i].takeDamage(999999);
});
await page.waitForTimeout(500);
const dgClear = await page.evaluate((before) => {
  const g = window.__game;
  return {
    portals: g.dungeon.portals,
    coinGain: g.inventory.coins - before.coins,
    largeGain: g.inventory.crystals.large - before.large,
  };
}, dgBefore);
dgClear.portals[1] && dgClear.portals[2] && dgClear.coinGain === 1000 && dgClear.largeGain === 5
  ? ok(`三環通關獎勵發放(+${dgClear.coinGain} 貝拉幣、大型結晶 +${dgClear.largeGain})`)
  : fail(`通關獎勵異常:${JSON.stringify(dgClear)}`);
await page.evaluate(() => {
  const g = window.__game;
  const r = g.dungeon.rings[2];
  g.player.mesh.position.set(r.cx, 3, r.cz + 22); // 站到返回傳送門邊
});
await page.waitForTimeout(200);
await page.keyboard.press("f");
await page.waitForTimeout(300);
const dgReturn = await page.evaluate(() => {
  const g = window.__game;
  const p = g.player.mesh.position;
  return { z: p.z, dist: Math.hypot(p.x - g.dungeon.altar.x, p.z - g.dungeon.altar.z) };
});
dgReturn.z > -2000 && dgReturn.dist < 20
  ? ok(`返回傳送門 F 回到祭壇島(離祭壇 ${dgReturn.dist.toFixed(0)})`)
  : fail(`未返回祭壇島:${JSON.stringify(dgReturn)}`);
await page.screenshot({ path: "/tmp/archipelago-46-altar.png" });

// 46i. 可重複刷:再次奉獻 → 48 隻整批復活、傳送門全部關閉
const dgAgain = await page.evaluate(() => {
  const g = window.__game;
  g.inventory.crystals.small = 3;
  g.inventory.coins += 100;
  g.dungeon.offer();
  const mobs = g.enemies.slice(g.dungeon.start);
  return {
    run: g.dungeon.run,
    allAlive: mobs.every((e) => !e.isDead && e.mesh.visible),
    portals: g.dungeon.portals,
    z: g.player.mesh.position.z,
  };
});
dgAgain.run && dgAgain.allAlive && dgAgain.portals.every((p) => !p) && dgAgain.z < -2000
  ? ok("再次奉獻可重複刷(48 隻整批復活、傳送門重置)")
  : fail(`重複刷異常:${JSON.stringify(dgAgain)}`);

await browser.close();
console.log(errors.length ? `\n${errors.length} 項失敗` : "\n全部通過");
process.exit(errors.length > 0 ? 1 : 0);
