# 群島之歌(Archipelago Song)— 專案交接文件

> 本專案由 Rai(陳建文)與 Claude 從《群島之歌_遊戲企劃書.pdf》(`docs/`)從零打造,
> 2026-06-13 主線完結 + 打磨完成,現交由下一位維護者接手。
> 改動前請先讀完本文件,**尤其是「不可違反的慣例」一節。**

## 一句話描述

3D 海島探索 ARPG:六座主題島、六顆靈紋寶石能力、經驗結晶成長系統,薩爾達 3D 風 cel-shading,可通關。

## 指令

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc 嚴格檢查 + vite build(兩者都過才算綠)
npm run smoke    # Playwright 端到端煙霧測試 95 項(需先開 dev server,需本機 Chrome)
```

## 技術棧(定案,別改)

- **HTML5 + TypeScript(strict,禁 any)+ Three.js**。Three.js 只是渲染函式庫,遊戲迴圈/物理/存檔全部自寫——**不要引入 Unity/UE5/Godot/物理引擎**,這是 Rai 的明確決策。
- **零外部資產**:模型 = 程式組裝幾何體、音效音樂 = WebAudio 程式合成、貼圖 = canvas 即時繪製。優點是零授權、零載入;要升級成真資產(glTF 模型、錄音音樂)時,替換對應模組內部即可,介面已預留。
- 美術方向:薩爾達 3D 風 cel-shading(色階硬切 + 反向外殼描邊),見 `core/toon.ts`。

## 架構地圖

```
src/
├── main.ts              # 組裝 + 遊戲迴圈(最大的檔案;所有系統在這裡接線)
├── core/
│   ├── input.ts         # 鍵盤滑鼠(單幀事件要在 endFrame 清除)
│   ├── audio.ts         # 全程式合成:20+ 音效 + 三首情境配樂(day/sail/night)+ 雨聲
│   ├── toon.ts          # cel-shading 材質 + 描邊(所有新模型都要用 toonMaterial + addOutlines)
│   └── fx.ts            # 打擊感:hit-stop 頓幀/鏡頭震動/粒子爆裂
├── world/
│   ├── terrain.ts       # ★ ISLANDS 配置驅動多島地形;groundHeight 同時管視覺與碰撞;第二海(x>1100)靠海寶石往返
│   ├── ocean.ts         # CPU 頂點波浪(振幅吃天氣倍率)
│   └── sky.ts           # 日夜循環(6 分鐘/天)+ 天氣狀態機(晴/雨/風暴)+ 雨絲 + 閃電
├── entities/
│   ├── player.ts        # 角色控制/動畫/格擋/集氣/二段跳滑翔/陡坡滑行/冰面渡水
│   ├── enemy.ts         # 果凍怪 FSM(patrol/chase/windup/lunge/recover/dying)+ 冰凍
│   ├── boat.ts          # 帆船(慣性滑行 1.6s!測試傳送前要等停)
│   ├── shockwave.ts     # 平躺新月劍氣(衝擊波/火焰斬/冰箭共用,options 換色換參數)
│   ├── pickup.ts        # 掉落物磁吸(距離判定只看水平面,別改回 3D 距離)
│   ├── npc.ts / chest.ts
│   ├── shrine.ts        # 重生石碑(每島一座,F 啟用,上限 2;死亡畫面可選重生地,背包傳送區可隨時傳送)
├── systems/
│   ├── stats.ts         # 等級/五維/經驗結晶/背包(EXP 是道具,核心特色)
│   ├── gems.ts          # 六寶石 + 升階等級與傷害公式
│   ├── equipment.ts     # 防具三件套 + 飾品兩格
│   ├── quests.ts / save.ts(localStorage v1,新欄位一律 optional 保持舊檔相容)
└── ui/                  # 全 DOM:hud/bag/dialog/shop/forge/settings/floating
scripts/smoke.mjs        # ★ 95 項端到端測試,改任何功能後必跑
```

## 不可違反的慣例

1. **改完必驗**:`npm run build`(tsc strict)綠 + `npm run smoke` 全項全綠才算完成(目前 95 項)。新功能要加對應 smoke 步驟。
2. **存檔相容**:`save.ts` 的 SaveData 加欄位一律 optional + 讀檔給預設值,不要破壞玩家舊存檔;結構大改才升版本號。
3. **回饋三件套**:任何新的傷害來源接 `floats.spawn`(跳字)、新的拾取接 `feed.push`(中央提示)、新的動作配 `audio.sfx`(每種動作不同音效)——Rai 明確要求。
4. **新敵人至少四段動作**(移動/蓄力/攻擊/死亡),新模型必過 `toonMaterial` + `addOutlines` + castShadow。
5. **加新島** = `terrain.ts` ISLANDS 加一筆 def(可帶 crater 火山口)+ 敵人 + 村長對話分支 + 任務 + 追蹤列,照既有島嶼模式抄。
6. **地圖不要做小**(島嶼半徑 50 起跳),Rai 嫌過小地圖。

## 操作對照(改鍵位前先確認 HUD 提示同步更新)

WASD 移動|空白鍵 跳(風語石:二段/三段跳、按住滑翔)|Shift 閃避|左鍵短按普攻/按住集氣迴旋斬(滿氣加衝擊波)|Q 舉盾|E 火焰斬|C 地震波|V 冰箭|X 瞬移|R 藥水|F 對話/上下船/潛入/設置重生點|Tab 背包|ESC 設定

## 測試掛鉤(dev-only)

`window.__game` 暴露 player/enemies/inventory/gems/quests/boat/sky/audio/floats/feed/doSave 等,
smoke 測試靠它讀狀態與快轉(授予寶石、傳送、強制天氣)。新系統記得掛上去。

## 已知限制與後續方向

- 模型是程式組裝幾何體(無骨骼動畫);升級路線:glTF 資產 + AnimationMixer。
- 音樂是 WebAudio 程式編曲;換錄音資產時只動 `audio.ts` 內部(TRACKS/scheduleBar)。
- 效能:目前全場景常駐(38 隻敵人 + 七島,含第二海港口鎮),要擴更多島嶼時做分區載入;海面網格只有一張,依玩家所在海域移動。
- 未做:本地化、手把支援、打包上架(建議 itch.io 網頁版先行,Steam 走 Tauri)。
- 詳細歷程與每輪驗證紀錄:`PROGRESS.md`(由新到舊);玩家視角功能清單:`README.md`。

## 給接手的 Claude 的話

這個專案的開發節奏是:**小步實作 → build 綠 → smoke 全綠 → 截圖目視 → 更新 PROGRESS.md**。
測試紅的時候先查根因再動手(曾多次發現是測試腳本問題而非遊戲 bug,例如船的慣性滑行、
從背後攻擊揮空)。保持這個循環,東西就不會壞。
