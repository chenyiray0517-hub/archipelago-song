import * as THREE from "three";

let gradientMap: THREE.DataTexture | null = null;

/** 共用的卡通渲染色階貼圖(4 階,薩爾達式硬邊光影) */
function getGradientMap(): THREE.DataTexture {
  if (!gradientMap) {
    const data = new Uint8Array([90, 150, 210, 255]);
    gradientMap = new THREE.DataTexture(data, data.length, 1, THREE.RedFormat);
    gradientMap.minFilter = THREE.NearestFilter;
    gradientMap.magFilter = THREE.NearestFilter;
    gradientMap.needsUpdate = true;
  }
  return gradientMap;
}

/** 建立 cel-shading 材質(色階硬切光影) */
export function toonMaterial(
  color: number,
  options: {
    transparent?: boolean;
    opacity?: number;
    vertexColors?: boolean;
    emissive?: number;
    emissiveIntensity?: number;
  } = {},
): THREE.MeshToonMaterial {
  const material = new THREE.MeshToonMaterial({
    color,
    gradientMap: getGradientMap(),
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1,
    vertexColors: options.vertexColors ?? false,
  });
  if (options.emissive !== undefined) {
    material.emissive.setHex(options.emissive);
    material.emissiveIntensity = options.emissiveIntensity ?? 1;
  }
  return material;
}

const OUTLINE_MATERIAL = new THREE.MeshBasicMaterial({
  color: 0x1c2333,
  side: THREE.BackSide,
});

/**
 * 為群組內所有網格加上反向外殼描邊(卡通輪廓線)。
 * 在模型組裝完成後呼叫一次;之後新增的子網格不會自動有描邊。
 */
export function addOutlines(group: THREE.Object3D, thickness = 1.06): void {
  const targets: THREE.Mesh[] = [];
  group.traverse((child) => {
    if (child instanceof THREE.Mesh && !(child instanceof THREE.Sprite)) targets.push(child);
  });
  for (const mesh of targets) {
    const outline = new THREE.Mesh(mesh.geometry, OUTLINE_MATERIAL);
    outline.position.copy(mesh.position);
    outline.rotation.copy(mesh.rotation);
    outline.scale.copy(mesh.scale).multiplyScalar(thickness);
    outline.raycast = () => undefined;
    mesh.parent?.add(outline);
  }
}
