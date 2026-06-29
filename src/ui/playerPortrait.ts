// 群島之歌 — 背包角色展示台
//
// 在背包面板的 .model-stage 裡用一個獨立的小 WebGL 場景渲染玩家 VRM(待機姿),
// 取代原本的 emoji 占位。只有背包開啟時才跑渲染迴圈。
// 沿用專案精神:**模型載入失敗就回退原 emoji,絕不擋住背包。**

import * as THREE from "three";
import type { VRM } from "@pixiv/three-vrm";
import { loadPortraitModel } from "../world/playerModel";

/** 正規化展示身高(與遊戲內 useModel 的目標身高一致) */
const TARGET_H = 1.7;

export class PlayerPortrait {
  private canvas = document.createElement("canvas");
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private mixer: THREE.AnimationMixer | null = null;
  private vrm: VRM | null = null;
  private clock = new THREE.Clock();
  private raf = 0;
  private running = false;
  private booting = false;
  /** 模型已就緒可顯示 */
  private ready = false;
  /** 載入失敗:永久退回 emoji */
  private failed = false;
  /** 目前掛載的展示台容器(載入完成時用來隱藏其 emoji 占位) */
  private stage: HTMLElement | null = null;

  constructor() {
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.display = "block";
  }

  /**
   * 把展示台 canvas 掛進容器(背包每次重繪後呼叫,因 innerHTML 會重建 .model-stage)。
   * 首次呼叫會啟動非同步載入。失敗則移除 canvas、保留容器內的 emoji。
   */
  mount(stage: HTMLElement): void {
    this.stage = stage;
    if (this.failed) return; // 退回 emoji:不掛 canvas
    stage.appendChild(this.canvas);
    this.boot();
    // 樂觀隱藏 emoji 占位(載入幾乎必成;真失敗時 onFailed 會還原)
    if (this.ready || this.booting) this.hideAvatar(stage);
    this.start();
  }

  /** 暫停渲染迴圈(關背包時呼叫) */
  stop(): void {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  private start(): void {
    if (this.running || this.failed || !this.renderer) return;
    this.running = true;
    this.clock.getDelta(); // 丟棄暫停期間累積的時間
    const tick = () => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(tick);
      this.frame();
    };
    this.raf = requestAnimationFrame(tick);
  }

  /** 建立場景與啟動載入(只做一次) */
  private boot(): void {
    if (this.renderer || this.booting || this.failed) return;
    this.booting = true;

    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // 透明:露出 .model-stage 的漸層底
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer = renderer;

    const scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x335577, 1.2));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(1.5, 3, 2.5);
    scene.add(key);
    this.scene = scene;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, TARGET_H * 0.55, TARGET_H * 1.95);
    camera.lookAt(0, TARGET_H * 0.52, 0);
    this.camera = camera;

    loadPortraitModel()
      .then((proto) => {
        if (!proto) return this.onFailed();
        const root = new THREE.Group();
        root.add(proto.vrm.scene);
        const box = new THREE.Box3().setFromObject(proto.vrm.scene);
        const h = box.max.y - box.min.y || 1;
        root.scale.setScalar(TARGET_H / h);
        root.rotation.y = Math.PI; // VRM0 預設面向 -Z,轉正面向 +Z(朝鏡頭)
        scene.add(root);
        this.vrm = proto.vrm;
        this.mixer = new THREE.AnimationMixer(proto.vrm.scene);
        this.mixer.clipAction(proto.idle).play();
        this.ready = true;
        this.booting = false;
        if (this.stage) this.hideAvatar(this.stage);
      })
      .catch(() => this.onFailed());
  }

  private frame(): void {
    const r = this.renderer;
    const cam = this.camera;
    if (!r || !cam || !this.scene) return;
    // 依 canvas 實際顯示尺寸調整繪圖緩衝
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    if (this.canvas.width !== Math.floor(w * r.getPixelRatio()) || this.canvas.height !== Math.floor(h * r.getPixelRatio())) {
      r.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    }
    const dt = this.clock.getDelta();
    this.mixer?.update(dt);
    this.vrm?.update(dt); // 推進骨架/彈簧骨(頭髮、裙襬)
    r.render(this.scene, cam);
  }

  private hideAvatar(stage: HTMLElement): void {
    const avatar = stage.querySelector<HTMLElement>(".avatar");
    if (avatar) avatar.style.display = "none";
  }

  /** 載入失敗:永久退回 emoji(移除 canvas、還原占位) */
  private onFailed(): void {
    this.failed = true;
    this.booting = false;
    this.ready = false;
    this.stop();
    this.canvas.remove();
    const avatar = this.stage?.querySelector<HTMLElement>(".avatar");
    if (avatar) avatar.style.display = "";
    this.renderer?.dispose();
    this.renderer = null;
  }
}
