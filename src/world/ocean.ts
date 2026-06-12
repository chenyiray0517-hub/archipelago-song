import * as THREE from "three";
import { toonMaterial } from "../core/toon";

const WAVE_AMPLITUDE = 0.6;
const WAVE_FREQUENCY = 0.25;

/**
 * 建立海面網格(CPU 頂點波浪,原型期夠用;量產期再換 shader)。
 */
export function createOcean(): THREE.Mesh {
  const geometry = new THREE.PlaneGeometry(700, 700, 96, 96);
  geometry.rotateX(-Math.PI / 2);
  const material = toonMaterial(0x2a8fc8, {
    transparent: true,
    opacity: 0.92,

  });
  return new THREE.Mesh(geometry, material);
}

/**
 * 依經過時間更新海面波浪頂點。
 * @param ocean createOcean() 回傳的網格
 * @param elapsed 經過秒數
 * @param amplitudeScale 波高倍率(風暴加大)
 */
export function updateOcean(ocean: THREE.Mesh, elapsed: number, amplitudeScale = 1): void {
  const position = ocean.geometry.getAttribute("position");
  const amplitude = WAVE_AMPLITUDE * amplitudeScale;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const z = position.getZ(i);
    const wave =
      Math.sin(x * WAVE_FREQUENCY + elapsed) *
      Math.cos(z * WAVE_FREQUENCY + elapsed * 0.8) *
      amplitude;
    position.setY(i, wave);
  }
  position.needsUpdate = true;
  ocean.geometry.computeVertexNormals();
}
