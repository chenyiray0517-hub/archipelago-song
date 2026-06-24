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
    /** 貼圖(glTF 怪物用內嵌圖集);掛上後色階仍套用,做出貼圖 + cel-shading */
    map?: THREE.Texture;
  } = {},
): THREE.MeshToonMaterial {
  const material = new THREE.MeshToonMaterial({
    color,
    gradientMap: getGradientMap(),
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1,
    vertexColors: options.vertexColors ?? false,
    map: options.map ?? null,
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

/**
 * 為帶骨骼的 SkinnedMesh 加描邊。
 * 不能用 addOutlines 的「放大複製體」做法——那會卡在 bind pose 不跟動畫變形。
 * 改為共用同一副骨架的 SkinnedMesh 外殼,在頂點著色器裡沿法線外擴(skinning 前),
 * 讓外殼跟著動畫一起被骨架變形。thickness 為模型本地空間下的法線位移量。
 */
export function addSkinnedOutlines(root: THREE.Object3D, thickness = 0.03): void {
  const targets: THREE.SkinnedMesh[] = [];
  root.traverse((child) => {
    if (child instanceof THREE.SkinnedMesh) targets.push(child);
  });
  for (const mesh of targets) {
    const mat = new THREE.MeshBasicMaterial({ color: 0x1c2333, side: THREE.BackSide });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.outlineThickness = { value: thickness };
      shader.vertexShader =
        "uniform float outlineThickness;\n" +
        shader.vertexShader.replace(
          "#include <begin_vertex>",
          "#include <begin_vertex>\n  transformed += normalize(objectNormal) * outlineThickness;",
        );
    };
    const outline = new THREE.SkinnedMesh(mesh.geometry, mat);
    outline.bind(mesh.skeleton, mesh.bindMatrix);
    outline.position.copy(mesh.position);
    outline.quaternion.copy(mesh.quaternion);
    outline.scale.copy(mesh.scale);
    outline.castShadow = false;
    outline.raycast = () => undefined;
    mesh.parent?.add(outline);
  }
}
