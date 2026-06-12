/** 動作音效名稱 */
export type SfxName =
  | "swing"
  | "hit"
  | "enemyDie"
  | "crystal"
  | "coin"
  | "levelup"
  | "jump"
  | "dodge"
  | "hurt"
  | "ui"
  | "spin"
  | "chargeReady"
  | "block"
  | "wave"
  | "fire"
  | "gem"
  | "potion"
  | "quake"
  | "anvil"
  | "lava"
  | "ice"
  | "shatter"
  | "blink"
  | "dive"
  | "victory"
  | "thunder"
  | "shrine"
  | "seaTravel"
  | "shrineTravel";

/** 配樂模式:白天探索/航海/夜晚(兼潛水) */
export type MusicMode = "day" | "sail" | "night";

/** 音名頻率表 */
const N = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.0,
};

/** 一個音:[頻率, 小節內位置 0–1, 長度秒] */
type Note = [number, number, number];

interface MusicTrack {
  barSeconds: number;
  chords: number[][];
  /** melody:逐小節旋律;arp:由和弦自動產生琶音 */
  style: "melody" | "arp";
  melody: Note[][];
  /** 打點位置(小節內 0–1) */
  hats: number[];
  padType: OscillatorType;
  padVol: number;
}

/** 三首情境配樂(程式編曲):白天輕快、航海琶音、夜晚靜謐 */
const TRACKS: Record<MusicMode, MusicTrack> = {
  day: {
    barSeconds: 3.2,
    chords: [
      [N.C4, N.E4, N.G4],
      [220.0, N.C4, N.E4],
      [174.61, 220.0, N.C4],
      [196.0, 246.94, N.D4],
    ],
    style: "melody",
    melody: [
      [[N.E5, 0, 0.5], [N.G5, 0.25, 0.5], [N.A5, 0.5, 0.5], [N.G5, 0.75, 0.45]],
      [[N.E5, 0, 0.6], [N.C5, 0.5, 0.85]],
      [[N.D5, 0, 0.5], [N.E5, 0.25, 0.5], [N.F5, 0.5, 0.5], [N.D5, 0.75, 0.45]],
      [[N.C5, 0, 1.5]],
    ],
    hats: [0.5],
    padType: "triangle",
    padVol: 0.05,
  },
  sail: {
    barSeconds: 2.8,
    chords: [
      [174.61, 220.0, N.C4],
      [N.C4, N.E4, N.G4],
      [196.0, 246.94, N.D4],
      [220.0, N.C4, N.E4],
    ],
    style: "arp",
    melody: [],
    hats: [0, 0.25, 0.5, 0.75],
    padType: "triangle",
    padVol: 0.04,
  },
  night: {
    barSeconds: 4.2,
    chords: [
      [220.0, N.C4, N.E4],
      [174.61, 220.0, N.C4],
      [130.81, 164.81, 196.0],
      [196.0, 246.94, N.D4],
    ],
    style: "melody",
    melody: [
      [[N.A4, 0, 1.4]],
      [[N.C5, 0, 1.0], [N.B4, 0.5, 1.2]],
      [[N.E5, 0, 1.8]],
      [],
    ],
    hats: [],
    padType: "sine",
    padVol: 0.045,
  },
};

/**
 * 程式合成音訊引擎:全部用 WebAudio 即時合成,不載入任何音檔。
 * 瀏覽器自動播放政策限制,需在第一次使用者操作時呼叫 unlock()。
 */
export class AudioEngine {
  private ctx: AudioContext | null = null;
  private sfxBus: GainNode | null = null;
  private musicBus: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private chordIndex = 0;
  private musicTimer: ReturnType<typeof setTimeout> | null = null;
  private volume = 1;
  private musicEnabled = true;
  private rainGain: GainNode | null = null;
  /** 目前配樂模式(換模式於下一小節生效) */
  musicMode: MusicMode = "day";

  /** 建立 AudioContext 並啟動背景音樂(首次使用者手勢時呼叫,重複呼叫無害) */
  unlock(): void {
    if (this.ctx) return;
    const ctx = new AudioContext();
    this.ctx = ctx;

    this.sfxBus = ctx.createGain();
    this.sfxBus.connect(ctx.destination);

    this.musicBus = ctx.createGain();
    this.musicBus.connect(ctx.destination);
    this.applyVolume();

    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buffer;

    this.startWaves();
    this.startRain();
    this.scheduleBar();
  }

  /** 停止背景音樂(目前未用,保留給設定選單) */
  stopMusic(): void {
    if (this.musicTimer) clearTimeout(this.musicTimer);
    this.musicTimer = null;
  }

  /** 切換配樂模式(下一小節生效) */
  setMusicMode(mode: MusicMode): void {
    this.musicMode = mode;
  }

  /** 雨聲環境音開關(平滑淡入淡出) */
  setRain(on: boolean): void {
    if (!this.ctx || !this.rainGain) return;
    const target = on ? 0.16 : 0.0001;
    this.rainGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.8);
  }

  /** 設定主音量(0–1),未 unlock 前也會記住 */
  setVolume(volume: number): void {
    this.volume = volume;
    this.applyVolume();
  }

  /** 背景音樂開關 */
  setMusicEnabled(enabled: boolean): void {
    this.musicEnabled = enabled;
    this.applyVolume();
  }

  private applyVolume(): void {
    if (this.sfxBus) this.sfxBus.gain.value = 0.9 * this.volume;
    if (this.musicBus) this.musicBus.gain.value = this.musicEnabled ? 0.55 * this.volume : 0;
  }

  /** 播放指定動作音效 */
  sfx(name: SfxName): void {
    if (!this.ctx) return;
    switch (name) {
      case "swing":
        this.noiseBurst("bandpass", 900, 250, 0.16, 0.35);
        break;
      case "hit":
        this.tone("square", 160, 70, 0.12, 0.3);
        this.noiseBurst("lowpass", 500, 200, 0.08, 0.2);
        break;
      case "enemyDie":
        this.tone("triangle", 420, 90, 0.3, 0.35);
        this.noiseBurst("lowpass", 800, 150, 0.25, 0.15);
        break;
      case "crystal":
        this.tone("sine", 880, 880, 0.08, 0.25);
        this.tone("sine", 1318.5, 1318.5, 0.14, 0.22, 0.07);
        break;
      case "coin":
        this.tone("sine", 1568, 1568, 0.05, 0.2);
        this.tone("sine", 2093, 2093, 0.12, 0.16, 0.05);
        break;
      case "levelup":
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) =>
          this.tone("triangle", freq, freq, 0.3, 0.3, i * 0.11),
        );
        break;
      case "jump":
        this.tone("sine", 280, 520, 0.14, 0.22);
        break;
      case "dodge":
        this.noiseBurst("highpass", 1200, 2800, 0.2, 0.2);
        break;
      case "hurt":
        this.tone("sawtooth", 220, 90, 0.18, 0.3);
        break;
      case "ui":
        this.tone("sine", 600, 600, 0.05, 0.15);
        break;
      case "spin":
        this.noiseBurst("bandpass", 400, 1400, 0.32, 0.4);
        this.tone("sawtooth", 200, 90, 0.3, 0.25);
        break;
      case "chargeReady":
        this.tone("sine", 1046.5, 1046.5, 0.1, 0.25);
        this.tone("sine", 1568, 1568, 0.18, 0.2, 0.08);
        break;
      case "block":
        this.tone("square", 2200, 1700, 0.07, 0.22);
        this.tone("triangle", 880, 660, 0.12, 0.2, 0.02);
        break;
      case "wave":
        this.tone("sine", 500, 1400, 0.35, 0.3);
        this.noiseBurst("highpass", 800, 3000, 0.3, 0.18);
        break;
      case "fire":
        this.noiseBurst("lowpass", 2400, 400, 0.4, 0.4);
        this.tone("sawtooth", 320, 110, 0.35, 0.22);
        break;
      case "gem":
        [659.25, 830.61, 987.77, 1318.5].forEach((freq, i) =>
          this.tone("sine", freq, freq, 0.35, 0.28, i * 0.13),
        );
        break;
      case "potion":
        this.tone("sine", 420, 260, 0.1, 0.22);
        this.tone("sine", 520, 320, 0.12, 0.2, 0.1);
        this.tone("sine", 700, 900, 0.15, 0.18, 0.22);
        break;
      case "quake":
        this.noiseBurst("lowpass", 320, 60, 0.5, 0.5);
        this.tone("sine", 85, 40, 0.45, 0.4);
        break;
      case "anvil":
        this.tone("square", 1800, 1400, 0.08, 0.25);
        this.tone("triangle", 900, 700, 0.15, 0.22, 0.08);
        break;
      case "lava":
        this.noiseBurst("lowpass", 900, 300, 0.25, 0.2);
        break;
      case "ice":
        this.tone("sine", 1400, 900, 0.2, 0.25);
        this.noiseBurst("highpass", 2500, 5000, 0.15, 0.15);
        break;
      case "shatter":
        this.noiseBurst("highpass", 1800, 4000, 0.3, 0.3);
        this.tone("triangle", 900, 300, 0.25, 0.2);
        break;
      case "blink":
        this.tone("sine", 600, 1800, 0.12, 0.25);
        this.tone("sine", 1800, 700, 0.12, 0.2, 0.1);
        break;
      case "dive":
        this.noiseBurst("lowpass", 1200, 200, 0.5, 0.3);
        this.tone("sine", 400, 150, 0.4, 0.2);
        break;
      case "victory":
        [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5].forEach((freq, i) =>
          this.tone("triangle", freq, freq, 0.4, 0.3, i * 0.18),
        );
        break;
      case "thunder":
        this.noiseBurst("lowpass", 200, 40, 0.9, 0.5);
        this.tone("sine", 60, 30, 0.8, 0.35);
        break;
      case "shrine":
        [659.25, 987.77, 1318.5].forEach((freq, i) =>
          this.tone("sine", freq, freq, 0.4, 0.25, i * 0.12),
        );
        this.tone("triangle", 329.63, 329.63, 0.6, 0.18);
        break;
      case "seaTravel":
        this.noiseBurst("bandpass", 500, 2200, 0.6, 0.25);
        this.tone("sine", 300, 1100, 0.55, 0.25);
        [523.25, 783.99, 1046.5].forEach((freq, i) =>
          this.tone("sine", freq, freq, 0.3, 0.2, 0.25 + i * 0.12),
        );
        break;
      case "shrineTravel":
        this.noiseBurst("highpass", 1000, 3200, 0.35, 0.2);
        this.tone("sine", 880, 1760, 0.3, 0.22);
        [987.77, 1318.5].forEach((freq, i) =>
          this.tone("sine", freq, freq, 0.25, 0.2, 0.18 + i * 0.1),
        );
        break;
    }
  }

  /** 單音:type 波形從 f0 滑到 f1,長度 dur 秒 */
  private tone(
    type: OscillatorType,
    f0: number,
    f1: number,
    dur: number,
    vol: number,
    delay = 0,
  ): void {
    if (!this.ctx || !this.sfxBus) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) osc.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + dur);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(gain).connect(this.sfxBus);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  /** 雜訊爆發:濾波器頻率從 f0 掃到 f1 */
  private noiseBurst(
    filterType: BiquadFilterType,
    f0: number,
    f1: number,
    dur: number,
    vol: number,
  ): void {
    if (!this.ctx || !this.sfxBus || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(f0, t);
    filter.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + dur);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(filter).connect(gain).connect(this.sfxBus);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  /** 海浪環境音:循環雜訊 + 低通濾波 + 慢速 LFO 起伏 */
  private startWaves(): void {
    if (!this.ctx || !this.musicBus || !this.noiseBuffer) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 380;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.1;
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.08;
    const lfoDepth = this.ctx.createGain();
    lfoDepth.gain.value = 0.05;
    lfo.connect(lfoDepth).connect(gain.gain);
    src.connect(filter).connect(gain).connect(this.musicBus);
    src.start();
    lfo.start();
  }

  /** 雨聲:常駐迴圈雜訊,setRain 控制音量 */
  private startRain(): void {
    if (!this.ctx || !this.musicBus || !this.noiseBuffer) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2200;
    filter.Q.value = 0.4;
    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.value = 0.0001;
    src.connect(filter).connect(this.rainGain).connect(this.musicBus);
    src.start();
  }

  /**
   * 排程一小節 BGM(自我鏈式排程,模式切換於下一小節生效):
   * pad 和弦 + 低音 + 旋律/琶音 + 打點。
   */
  private scheduleBar(): void {
    if (!this.ctx || !this.musicBus) return;
    const track = TRACKS[this.musicMode];
    const bar = track.barSeconds;
    const t = this.ctx.currentTime + 0.05;
    const barIndex = this.chordIndex % track.chords.length;
    const chord = track.chords[barIndex];
    this.chordIndex++;

    // pad 和弦
    for (const freq of chord) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = track.padType;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(track.padVol, t + 0.7);
      gain.gain.setValueAtTime(track.padVol, t + bar - 1.0);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + bar + 0.5);
      osc.connect(gain).connect(this.musicBus);
      osc.start(t);
      osc.stop(t + bar + 0.6);
    }

    // 低音
    const bass = this.ctx.createOscillator();
    const bassGain = this.ctx.createGain();
    bass.type = "sine";
    bass.frequency.value = chord[0] / 2;
    bassGain.gain.setValueAtTime(0.0001, t);
    bassGain.gain.exponentialRampToValueAtTime(0.07, t + 0.3);
    bassGain.gain.exponentialRampToValueAtTime(0.0001, t + bar);
    bass.connect(bassGain).connect(this.musicBus);
    bass.start(t);
    bass.stop(t + bar + 0.1);

    // 旋律或琶音
    if (track.style === "melody") {
      const notes = track.melody[barIndex % track.melody.length] ?? [];
      for (const [freq, offset, dur] of notes) {
        this.melodyNote(freq, t + offset * bar, dur);
      }
    } else {
      // 琶音:和弦音上行來回,八分音符
      const seq = [0, 1, 2, 1, 0, 1, 2, 1];
      for (let i = 0; i < seq.length; i++) {
        this.melodyNote(chord[seq[i]] * 2, t + (i / 8) * bar, bar / 8 - 0.05);
      }
    }

    // 打點(輕柔雜訊 hat)
    for (const offset of track.hats) {
      this.hatTick(t + offset * bar);
    }

    this.musicTimer = setTimeout(() => this.scheduleBar(), bar * 1000);
  }

  private melodyNote(freq: number, when: number, dur: number): void {
    if (!this.ctx || !this.musicBus) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(0.09, when + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    osc.connect(gain).connect(this.musicBus);
    osc.start(when);
    osc.stop(when + dur + 0.05);
  }

  private hatTick(when: number): void {
    if (!this.ctx || !this.musicBus || !this.noiseBuffer) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 6000;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.05, when);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.06);
    src.connect(filter).connect(gain).connect(this.musicBus);
    src.start(when);
    src.stop(when + 0.08);
  }
}
