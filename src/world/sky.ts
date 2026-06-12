import * as THREE from "three";

export type Weather = "clear" | "rain" | "storm";

/** 一個完整日夜週期的秒數(6 分鐘:白天約 4 分鐘 + 夜晚 2 分鐘) */
const CYCLE_SECONDS = 360;
/** time 超過此值進入夜晚 */
const DAY_END = 0.65;

const DAY_SKY = new THREE.Color(0x87ceeb);
const NIGHT_SKY = new THREE.Color(0x0a1430);

const RAIN_COUNT = 260;
const RAIN_BOX = 42;

/** 天氣對航海與海面的影響(企劃書:雨天與風暴影響航海) */
const WEATHER_FX: Record<Weather, { wave: number; boat: number; darken: number }> = {
  clear: { wave: 1, boat: 1, darken: 1 },
  rain: { wave: 1.35, boat: 0.9, darken: 0.72 },
  storm: { wave: 2.2, boat: 0.65, darken: 0.5 },
};

export interface SkyState {
  isNight: boolean;
  weather: Weather;
  raining: boolean;
  waveScale: number;
  boatFactor: number;
  /** 本幀是否打雷(供雷聲音效) */
  thunder: boolean;
}

/**
 * 日夜循環 + 天氣系統:
 * 太陽沿東西弧線移動並跟隨玩家(陰影方向隨時間變化),
 * 天色/霧色由晝夜與天氣共同決定;雨/風暴有雨絲粒子,風暴有閃電。
 */
export class Sky {
  /** 一天進度 0–1(0 = 清晨;可由測試直接設定) */
  time = 0.12;
  weather: Weather = "clear";

  private weatherT = 50;
  private lightningT = 6;
  private flashT = 0;
  private readonly rain: THREE.LineSegments;
  private readonly rainVelocity: number[] = [];

  constructor(
    private scene: THREE.Scene,
    private sun: THREE.DirectionalLight,
    private hemi: THREE.HemisphereLight,
    private ambient: THREE.AmbientLight,
  ) {
    // 雨絲:玩家周圍盒內的短垂直線段
    const positions = new Float32Array(RAIN_COUNT * 6);
    for (let i = 0; i < RAIN_COUNT; i++) {
      const x = (Math.random() - 0.5) * RAIN_BOX;
      const y = Math.random() * 30;
      const z = (Math.random() - 0.5) * RAIN_BOX;
      positions.set([x, y, z, x, y - 0.9, z], i * 6);
      this.rainVelocity.push(30 + Math.random() * 14);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.rain = new THREE.LineSegments(
      geometry,
      new THREE.LineBasicMaterial({ color: 0xaaccee, transparent: true, opacity: 0.55 }),
    );
    this.rain.visible = false;
    scene.add(this.rain);
  }

  /** 強制切換天氣(測試/除錯用) */
  forceWeather(weather: Weather): void {
    this.weather = weather;
    this.weatherT = 60;
  }

  /** 雨絲目前是否顯示(測試用) */
  get rainVisible(): boolean {
    return this.rain.visible;
  }

  /**
   * 每幀更新。diving 時不接管天色(潛水模式有自己的濾鏡與霧)。
   */
  update(dt: number, playerPos: THREE.Vector3, diving: boolean): SkyState {
    this.time = (this.time + dt / CYCLE_SECONDS) % 1;

    // 天氣狀態機:到時隨機轉換(晴偏多)
    this.weatherT -= dt;
    if (this.weatherT <= 0) {
      this.weatherT = 45 + Math.random() * 45;
      const roll = Math.random();
      this.weather = roll < 0.55 ? "clear" : roll < 0.85 ? "rain" : "storm";
    }
    const fxConfig = WEATHER_FX[this.weather];
    const raining = this.weather !== "clear";

    // 晝夜亮度因子:白天走 sin 弧線,夜晚為 0
    const dayProgress = this.time / DAY_END;
    const daylight = this.time < DAY_END ? Math.sin(Math.PI * dayProgress) : 0;

    // 太陽沿東→西弧線,跟隨玩家讓所有島都有影子
    const sunAngle = Math.PI * (1 - dayProgress);
    this.sun.position.set(
      playerPos.x + Math.cos(sunAngle) * 120,
      Math.max(Math.sin(sunAngle), 0.12) * 130 + 15,
      playerPos.z + 40,
    );
    this.sun.target.position.set(playerPos.x, 0, playerPos.z);

    // 光照強度
    this.sun.intensity = 0.15 + 2.45 * daylight;
    this.hemi.intensity = 0.25 + 0.45 * daylight;
    let ambientIntensity = 0.12 + 0.23 * daylight;

    // 閃電:風暴中隨機白屏 + 雷聲事件
    let thunder = false;
    if (this.weather === "storm") {
      this.lightningT -= dt;
      if (this.lightningT <= 0) {
        this.lightningT = 4 + Math.random() * 8;
        this.flashT = 0.14;
        thunder = true;
      }
    }
    if (this.flashT > 0) {
      this.flashT -= dt;
      ambientIntensity += 1.6;
    }
    this.ambient.intensity = ambientIntensity;

    // 天色與霧色(潛水時由潛水模式接管)
    if (!diving) {
      const sky = NIGHT_SKY.clone().lerp(DAY_SKY, daylight).multiplyScalar(fxConfig.darken);
      if (this.flashT > 0) sky.lerp(new THREE.Color(0xffffff), 0.5);
      (this.scene.background as THREE.Color).copy(sky);
      (this.scene.fog as THREE.Fog).color.copy(sky);
    }

    // 雨絲跟著玩家,持續下落循環
    this.rain.visible = raining && !diving;
    if (this.rain.visible) {
      this.rain.position.set(playerPos.x, playerPos.y, playerPos.z);
      const positions = this.rain.geometry.getAttribute("position");
      const speedScale = this.weather === "storm" ? 1.6 : 1;
      for (let i = 0; i < RAIN_COUNT; i++) {
        let y = positions.getY(i * 2) - this.rainVelocity[i] * speedScale * dt;
        if (y < -4) y = 26 + Math.random() * 4;
        positions.setY(i * 2, y);
        positions.setY(i * 2 + 1, y - 0.9);
      }
      positions.needsUpdate = true;
    }

    return {
      isNight: daylight < 0.08,
      weather: this.weather,
      raining,
      waveScale: fxConfig.wave,
      boatFactor: fxConfig.boat,
      thunder,
    };
  }
}
