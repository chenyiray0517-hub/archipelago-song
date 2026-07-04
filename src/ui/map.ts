import * as THREE from "three";
import { ISLANDS, LAVA_ZONES, groundHeight, islandAt, seaOf, type IslandDef } from "../world/terrain";
import { toonMaterial } from "../core/toon";

// 群島地圖:按 M 開關的全螢幕覆蓋層。以 Three.js 迷你場景呈現玩家「目前所在海域」
// 各島嶼的 3D 縮小模型(真實地形高度場 + 同款配色,上=北/−Z,右=東/+X),
// 標出玩家位置;點擊島嶼(或右側圖例)→ 進入該島上帝視角(onInspect 回呼)。
// 兩海相距甚遠(第一海 x≈0、第二海 x≈2000),同框會各擠成一團,故只畫當前海域。

const MAP_CSS = `
#map { position: fixed; inset: 0; display: none; align-items: center; justify-content: center;
  background: rgba(6, 16, 28, 0.78); z-index: 50; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; color: #eaf4ff; }
#map.show { display: flex; }
#map .frame { background: rgba(10, 26, 42, 0.92); border: 1px solid rgba(120, 190, 240, 0.4);
  border-radius: 14px; padding: 18px 20px; display: flex; gap: 18px; box-shadow: 0 12px 40px rgba(0,0,0,0.5); }
#map .left { display: flex; flex-direction: column; gap: 10px; }
#map .head { display: flex; justify-content: space-between; align-items: baseline; }
#map .head .t { font-size: 20px; font-weight: 800; letter-spacing: 3px; }
#map .head .sea { font-size: 13px; opacity: 0.8; }
#map .stage { position: relative; }
#map .stage canvas { background: linear-gradient(160deg, #14385c, #0e2740); border-radius: 10px; display: block; }
#map .stage .isl-label { position: absolute; transform: translate(-50%, 0); pointer-events: none;
  font-size: 13px; text-shadow: 0 1px 4px rgba(0,0,0,0.8); white-space: nowrap; }
#map .stage .isl-label.here { color: #ffd24a; font-weight: 700; }
#map .stage .isl-label.hover { color: #ffe9a8; font-weight: 700; }
#map .foot { font-size: 12px; opacity: 0.7; text-align: center; }
#map .legend { min-width: 150px; display: flex; flex-direction: column; gap: 6px; padding-top: 30px; }
#map .legend .lg-t { font-size: 13px; font-weight: 700; opacity: 0.8; margin-bottom: 2px; }
#map .legend .item { font-size: 14px; display: flex; align-items: center; gap: 8px; opacity: 0.92; cursor: pointer; }
#map .legend .item:hover { color: #ffe9a8; }
#map .legend .item.here { color: #ffd24a; font-weight: 700; }
#map .legend .dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.6); flex: 0 0 auto; }
`;

const W = 460;
const H = 460;
/** 迷你模型的地形高度誇張倍率(等比縮小後高度太扁,拉高才看得出山勢) */
const HEIGHT_SCALE = 1.6;

/** 一片海域的迷你場景(建一次快取:島嶼網格 + 海面 + 佈局縮放) */
interface SeaScene {
  group: THREE.Group;
  /** 世界座標 → 迷你場景座標(置中 + 等比縮放) */
  toLocal: (x: number, z: number) => THREE.Vector3;
  scale: number;
  islands: { def: IslandDef; mesh: THREE.Mesh }[];
}

export class MapOverlay {
  private root: HTMLElement;
  private stage: HTMLElement;
  private seaLabel: HTMLElement;
  private legend: HTMLElement;
  private labels = new Map<string, HTMLElement>();
  isOpen = false;

  /** 點擊島嶼(或圖例)→ 進入該島上帝視角;由 main 接線 */
  onInspect: ((isl: IslandDef) => void) | null = null;

  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(40, W / H, 1, 2000);
  private seaScenes = new Map<1 | 2 | 3, SeaScene>();
  private currentSea: 1 | 2 | 3 | null = null;
  private marker: THREE.Group;
  private hoverRing: THREE.Mesh;
  private raycaster = new THREE.Raycaster();
  private pointer: THREE.Vector2 | null = null;
  private hovered: IslandDef | null = null;
  private legendKey = "";

  constructor() {
    const style = document.createElement("style");
    style.textContent = MAP_CSS;
    document.head.appendChild(style);

    this.root = document.createElement("div");
    this.root.id = "map";
    this.root.innerHTML = `
      <div class="frame">
        <div class="left">
          <div class="head"><span class="t">群島地圖</span><span class="sea" id="map-sea"></span></div>
          <div class="stage" id="map-stage"></div>
          <div class="foot">上 = 北　點擊島嶼:上帝視角觀看　按 M 關閉</div>
        </div>
        <div class="legend"><div class="lg-t">島嶼</div><div id="map-legend"></div></div>
      </div>`;
    document.body.appendChild(this.root);

    this.stage = this.root.querySelector("#map-stage") as HTMLElement;
    this.seaLabel = this.root.querySelector("#map-sea") as HTMLElement;
    this.legend = this.root.querySelector("#map-legend") as HTMLElement;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(W, H);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.stage.appendChild(this.renderer.domElement);

    // 迷你場景光照(俯瞰視角固定,不吃日夜循環)
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const sun = new THREE.DirectionalLight(0xffffff, 0.95);
    sun.position.set(120, 220, 140);
    this.scene.add(sun);
    this.camera.position.set(0, 218, 172);
    this.camera.lookAt(0, 0, -8);

    // 玩家標記:倒立紅錐 + 上下浮動(render 時定位)
    this.marker = new THREE.Group();
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(2.4, 6, 10),
      new THREE.MeshBasicMaterial({ color: 0xff4d4d }),
    );
    cone.rotation.x = Math.PI;
    cone.position.y = 3;
    this.marker.add(cone);
    this.scene.add(this.marker);

    // 滑鼠停在島上的金色光環
    this.hoverRing = new THREE.Mesh(
      new THREE.RingGeometry(1, 1.08, 48),
      new THREE.MeshBasicMaterial({ color: 0xffd24a, side: THREE.DoubleSide, transparent: true, opacity: 0.9 }),
    );
    this.hoverRing.rotation.x = -Math.PI / 2;
    this.hoverRing.visible = false;
    this.scene.add(this.hoverRing);

    const canvas = this.renderer.domElement;
    canvas.style.cursor = "default";
    canvas.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      this.pointer = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1,
      );
    });
    canvas.addEventListener("pointerleave", () => (this.pointer = null));
    canvas.addEventListener("click", () => {
      if (this.hovered) this.onInspect?.(this.hovered);
    });
  }

  /** 切換開關,回傳切換後是否開啟 */
  toggle(): boolean {
    this.isOpen = !this.isOpen;
    this.root.classList.toggle("show", this.isOpen);
    return this.isOpen;
  }

  close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.root.classList.remove("show");
  }

  /** 依島名觸發點擊島嶼的同一條路徑(dev 測試 / 圖例點擊共用);找不到回 false */
  inspect(name: string): boolean {
    const isl = ISLANDS.find((i) => i.name === name);
    if (!isl || !this.onInspect) return false;
    this.onInspect(isl);
    return true;
  }

  /** 建立(或取快取)一片海域的迷你場景 */
  private seaScene(sea: 1 | 2 | 3): SeaScene {
    const cached = this.seaScenes.get(sea);
    if (cached) return cached;

    const isls = ISLANDS.filter((i) => seaOf(i.x) === sea);
    const minX = Math.min(...isls.map((i) => i.x - i.r));
    const maxX = Math.max(...isls.map((i) => i.x + i.r));
    const minZ = Math.min(...isls.map((i) => i.z - i.r));
    const maxZ = Math.max(...isls.map((i) => i.z + i.r));
    const cx = (minX + maxX) / 2;
    const cz = (minZ + maxZ) / 2;
    const span = Math.max(maxX - minX, maxZ - minZ) || 1;
    const scale = 176 / span;

    const group = new THREE.Group();
    group.scale.setScalar(scale);
    const toLocal = (x: number, z: number): THREE.Vector3 =>
      new THREE.Vector3((x - cx) * scale, 0, (z - cz) * scale);

    // 海面(蓋滿視野的深藍平面;用 toon 材質與島嶼裙邊同光照,顏色才接得起來)
    const seaPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(span + 3000, span + 3000),
      toonMaterial(0x123a5e),
    );
    seaPlane.rotation.x = -Math.PI / 2;
    seaPlane.position.y = -0.4;
    group.add(seaPlane);

    const islands: SeaScene["islands"] = [];
    const seaColor = new THREE.Color(0x123a5e);
    for (const def of isls) {
      // 真實地形高度場的低解析度縮小版,配色沿用 createIslandMesh 的沙/草/深色漸層
      const size = def.r * 2 + 12;
      const segments = 56;
      const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
      geometry.rotateX(-Math.PI / 2);
      const position = geometry.getAttribute("position");
      const colors = new Float32Array(position.count * 3);
      const sand = new THREE.Color(def.sand);
      const grass = new THREE.Color(def.grass);
      const dark = new THREE.Color(def.dark);
      const c = new THREE.Color();
      for (let i = 0; i < position.count; i++) {
        const wx = position.getX(i) + def.x;
        const wz = position.getZ(i) + def.z;
        const y = groundHeight(wx, wz);
        position.setY(i, y * HEIGHT_SCALE);
        if (y < 0.8) c.copy(sand);
        else if (y < 1.8) c.lerpColors(sand, grass, (y - 0.8) / 1.0);
        else c.lerpColors(grass, dark, Math.min((y - 1.8) / 9, 1));
        // 島半徑外的方形裙邊往海色漸變(近岸留沙色淺灘,方框融入海面)
        const d = Math.hypot(wx - def.x, wz - def.z);
        if (d > def.r) c.lerp(seaColor, Math.min((d - def.r) / 6, 1));
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.computeVertexNormals();
      const mesh = new THREE.Mesh(geometry, toonMaterial(0xffffff, { vertexColors: true }));
      mesh.position.set(def.x - cx, 0, def.z - cz);
      mesh.userData.island = def;
      group.add(mesh);
      islands.push({ def, mesh });

      // 熔岩池(火山口島的視覺記號)
      for (const zone of LAVA_ZONES) {
        if (Math.hypot(zone.x - def.x, zone.z - def.z) >= def.r) continue;
        const lava = new THREE.Mesh(
          new THREE.CircleGeometry(zone.r, 20),
          new THREE.MeshBasicMaterial({ color: 0xff5a1c }),
        );
        lava.rotation.x = -Math.PI / 2;
        lava.position.set(
          zone.x - cx,
          groundHeight(zone.x, zone.z) * HEIGHT_SCALE + 0.15,
          zone.z - cz,
        );
        group.add(lava);
      }
    }

    const built: SeaScene = { group, toLocal, scale, islands };
    this.seaScenes.set(sea, built);
    return built;
  }

  /** 開啟時每幀呼叫:切換海域場景、更新玩家標記/hover/島名標籤並渲染 */
  render(px: number, pz: number): void {
    if (!this.isOpen) return;
    const sea = seaOf(px);
    const ss = this.seaScene(sea);
    if (this.currentSea !== sea) {
      const prev = this.currentSea !== null ? this.seaScenes.get(this.currentSea) : null;
      if (prev) this.scene.remove(prev.group);
      this.scene.add(ss.group);
      this.currentSea = sea;
      this.rebuildLabels(ss);
    }
    const here = islandAt(px, pz);
    this.seaLabel.textContent = sea === 3 ? "第三海" : sea === 2 ? "第二海" : "第一海";

    // 玩家標記(等比縮放後大小固定,加上浮動)
    const mpos = ss.toLocal(px, pz);
    const groundY = groundHeight(px, pz) * HEIGHT_SCALE * ss.scale;
    this.marker.position.set(mpos.x, groundY + 2 + Math.sin(performance.now() * 0.004) * 0.8, mpos.z);

    // hover 判定:射線打島嶼網格
    this.hovered = null;
    if (this.pointer) {
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const hit = this.raycaster.intersectObjects(ss.islands.map((i) => i.mesh))[0];
      if (hit) this.hovered = hit.object.userData.island as IslandDef;
    }
    this.renderer.domElement.style.cursor = this.hovered ? "pointer" : "default";
    if (this.hovered) {
      const hpos = ss.toLocal(this.hovered.x, this.hovered.z);
      this.hoverRing.position.set(hpos.x, 0.6, hpos.z);
      this.hoverRing.scale.setScalar((this.hovered.r + 5) * ss.scale);
      this.hoverRing.visible = true;
    } else {
      this.hoverRing.visible = false;
    }

    // 島名標籤:投影到畫布座標
    for (const { def } of ss.islands) {
      const label = this.labels.get(def.name);
      if (!label) continue;
      const p = ss.toLocal(def.x, def.z);
      p.z += (def.r + 4) * ss.scale; // 標籤放島的南緣
      const ndc = p.project(this.camera);
      label.style.left = `${((ndc.x + 1) / 2) * W}px`;
      label.style.top = `${((1 - ndc.y) / 2) * H}px`;
      label.className = `isl-label${here === def ? " here" : this.hovered === def ? " hover" : ""}`;
    }

    this.renderer.render(this.scene, this.camera);

    // 右側名稱圖例(目前島嶼標金高亮;點擊 = 點島);只在海域/所在島變更時重建
    const legendKey = `${sea}:${here?.name ?? ""}`;
    if (this.legendKey !== legendKey) {
      this.legendKey = legendKey;
      this.legend.innerHTML = "";
      for (const { def } of ss.islands) {
        const item = document.createElement("div");
        item.className = here === def ? "item here" : "item";
        const color = `#${def.grass.toString(16).padStart(6, "0")}`;
        item.innerHTML = `<span class="dot" style="background:${color}"></span>${here === def ? "📍 " : ""}${def.name}`;
        item.addEventListener("click", () => this.onInspect?.(def));
        this.legend.appendChild(item);
      }
    }
  }

  /** 換海域時重建島名 DOM 標籤 */
  private rebuildLabels(ss: SeaScene): void {
    for (const label of this.labels.values()) label.remove();
    this.labels.clear();
    for (const { def } of ss.islands) {
      const label = document.createElement("div");
      label.className = "isl-label";
      label.textContent = def.name;
      this.stage.appendChild(label);
      this.labels.set(def.name, label);
    }
  }
}
