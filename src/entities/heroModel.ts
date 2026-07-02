// 群島之歌 — 勇者模型(本機玩家與遠端玩家共用)
//
// 把劍盾勇者的外觀組裝抽成可重用、可換色的 buildHero():本機玩家用預設綠袍,
// 遠端玩家(多人)傳入各自的醒目色當長袍色 → 大家長一樣、只有袍色不同好區分。
// 守慣例:toonMaterial + addOutlines + castShadow。動畫由各自的擁有者(Player / RemotePlayer)驅動。

import * as THREE from "three";
import { toonMaterial, addOutlines } from "../core/toon";

/** 勇者配色(長袍色可由 buildHero 參數覆寫,其餘共用) */
export const COLOR = {
  tunic: 0x3e9e4f,
  tunicDark: 0x2e7a3c,
  skin: 0xf2c9a0,
  hair: 0xe8b84a,
  legs: 0xf0e8d0,
  boots: 0x7a5230,
  belt: 0x4a3520,
  blade: 0xdce6f2,
  guard: 0x3a5fd8,
  grip: 0x4a3a6a,
  gold: 0xf0c040,
  shield: 0x2e4fa8,
  shieldRim: 0x9aa4b8,
  glove: 0x6a4a2a,
  brow: 0xb8902e,
  eye: 0x35506e,
  collar: 0xf0d878,
};

/** 盾牌平時揹背、防禦時舉前的兩個位置(Player / RemotePlayer 共用) */
export const SHIELD_HOME = new THREE.Vector3(0, 1.45, -0.46);
export const SHIELD_BLOCK = new THREE.Vector3(0.18, 1.32, 0.5);

/** 組好的勇者骨架:擁有者拿這些群組做動畫 */
export interface HeroRig {
  group: THREE.Group;
  body: THREE.Group;
  armL: THREE.Group;
  armR: THREE.Group;
  forearmL: THREE.Group;
  forearmR: THREE.Group;
  legL: THREE.Group;
  legR: THREE.Group;
  shinL: THREE.Group;
  shinR: THREE.Group;
  shield: THREE.Group;
  sword: THREE.Group;
  bladeMaterial: THREE.MeshToonMaterial;
  /** 主長袍材質(供受擊/死亡著色) */
  tunicMat: THREE.MeshToonMaterial;
}

/** 大腿(髖關節群)+ 可彎曲小腿群(膝)+ 靴 */
function buildLeg(x: number): { leg: THREE.Group; shin: THREE.Group } {
  const leg = new THREE.Group();
  const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.36, 10), toonMaterial(COLOR.legs));
  thigh.position.y = -0.18;
  const shin = new THREE.Group();
  shin.position.y = -0.36;
  const calf = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.32, 10), toonMaterial(COLOR.legs));
  calf.position.y = -0.16;
  const boot = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.18, 0.36), toonMaterial(COLOR.boots));
  boot.position.set(0, -0.36, 0.05);
  const bootCuff = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.12, 10), toonMaterial(COLOR.boots));
  bootCuff.position.y = -0.28;
  shin.add(calf, boot, bootCuff);
  leg.add(thigh, shin);
  leg.position.set(x, 0.72, 0);
  return { leg, shin };
}

/** 肩甲 + 上臂(長袍色)+ 可彎曲前臂群(肘)+ 護腕 + 手 */
function buildArm(x: number, tunic: number): { arm: THREE.Group; forearm: THREE.Group } {
  const arm = new THREE.Group();
  const pauldron = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), toonMaterial(COLOR.guard));
  pauldron.position.y = 0.02;
  pauldron.scale.set(1, 0.8, 1);
  const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.085, 0.34, 10), toonMaterial(tunic));
  upper.position.y = -0.18;
  const forearm = new THREE.Group();
  forearm.position.y = -0.35;
  const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.07, 0.26, 10), toonMaterial(COLOR.skin));
  lower.position.y = -0.13;
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.035, 8, 12), toonMaterial(COLOR.glove));
  cuff.position.y = -0.02;
  cuff.rotation.x = Math.PI / 2;
  const hand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), toonMaterial(COLOR.glove));
  hand.position.y = -0.25;
  forearm.add(lower, cuff, hand);
  arm.add(pauldron, upper, forearm);
  arm.position.set(x, 1.7, 0);
  return { arm, forearm };
}

/** 大師之劍風格:漸縮劍身 + 藍色護手 + 金色圓頭;劍身材質供集氣發光 */
function buildSword(): { sword: THREE.Group; bladeMaterial: THREE.MeshToonMaterial } {
  const sword = new THREE.Group();
  const bladeMaterial = toonMaterial(COLOR.blade, { emissive: 0x66ccff, emissiveIntensity: 0 });
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.13, 1.0, 0.035), bladeMaterial);
  blade.position.y = 0.62;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.24, 4), bladeMaterial);
  tip.position.y = 1.24;
  tip.rotation.y = Math.PI / 4;
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.95, 0.05), toonMaterial(COLOR.shieldRim));
  ridge.position.y = 0.6;
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.09, 0.09), toonMaterial(COLOR.guard));
  guard.position.y = 0.1;
  const wing = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 6), toonMaterial(COLOR.guard));
  wing.position.set(0.2, 0.16, 0);
  const wing2 = wing.clone();
  wing2.position.x = -0.2;
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8), toonMaterial(COLOR.grip));
  grip.position.y = -0.1;
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), toonMaterial(COLOR.gold));
  pommel.position.y = -0.28;
  sword.add(blade, tip, ridge, guard, wing, wing2, grip, pommel);
  return { sword, bladeMaterial };
}

/** 圓盾:藍面 + 金屬框 + 金色紋章(正面朝 -Z) */
function buildShield(): THREE.Group {
  const shield = new THREE.Group();
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.46, 0.07, 16), toonMaterial(COLOR.shield));
  face.rotation.x = Math.PI / 2;
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.05, 8, 16), toonMaterial(COLOR.shieldRim));
  const emblem = new THREE.Mesh(new THREE.OctahedronGeometry(0.12), toonMaterial(COLOR.gold));
  emblem.position.z = -0.06;
  emblem.scale.set(1, 1.4, 0.4);
  shield.add(face, rim, emblem);
  return shield;
}

/**
 * VRM 玩家掛手骨用的同款劍盾(獨立成品,自帶描邊與陰影)。
 * 位置/朝向/縮放由掛載端依骨架調整(見 playerModel.attachHeroWeapons)。
 */
export function buildHeroWeapons(): {
  sword: THREE.Group;
  shield: THREE.Group;
  bladeMaterial: THREE.MeshToonMaterial;
} {
  const sw = buildSword();
  const shield = buildShield();
  for (const g of [sw.sword, shield]) {
    addOutlines(g);
    g.traverse((child) => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });
  }
  return { sword: sw.sword, shield, bladeMaterial: sw.bladeMaterial };
}

/**
 * 組裝劍盾勇者模型。
 * @param tunic 長袍主色(本機 = COLOR.tunic 綠;遠端玩家傳各自醒目色)
 * @param tunicDark 帽子等深色;省略則由長袍色自動推深
 */
export function buildHero(tunic: number = COLOR.tunic, tunicDark?: number): HeroRig {
  const darkHex = tunicDark ?? new THREE.Color(tunic).multiplyScalar(0.74).getHex();
  const group = new THREE.Group();
  const body = new THREE.Group();
  group.add(body);

  // 腿與靴
  const lL = buildLeg(0.17);
  const lR = buildLeg(-0.17);
  body.add(lL.leg, lR.leg);

  // 長袍軀幹:胸甲 + 外翻下襬 + 腰帶 + 領口
  const tunicMat = toonMaterial(tunic);
  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.44, 0.72, 14), tunicMat);
  chest.position.y = 1.4;
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.6, 0.5, 14, 1, true), tunicMat);
  skirt.position.y = 0.74;
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.34, 0.16, 14), toonMaterial(COLOR.collar));
  collar.position.y = 1.78;
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.48, 0.13, 14), toonMaterial(COLOR.belt));
  belt.position.y = 0.98;
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.05), toonMaterial(COLOR.gold));
  buckle.position.set(0, 0.98, 0.47);
  const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18, 0.12), toonMaterial(COLOR.glove));
  pouch.position.set(0.34, 0.9, 0.18);
  body.add(chest, skirt, collar, belt, buckle, pouch);

  // 脖子
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.2, 10), toonMaterial(COLOR.skin));
  neck.position.y = 1.86;
  body.add(neck);

  // 頭、髮、尖帽
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 14), toonMaterial(COLOR.skin));
  head.position.y = 2.08;
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.37, 16, 14), toonMaterial(COLOR.hair));
  hair.position.set(0, 2.16, -0.07);
  hair.scale.set(1, 0.85, 1);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.66, 14), toonMaterial(darkHex));
  cap.position.set(0, 2.54, -0.12);
  cap.rotation.x = -0.5;
  const capTip = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 10), toonMaterial(tunic));
  capTip.position.set(0, 2.78, -0.5);
  capTip.rotation.x = -1.5;
  const capBand = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.05, 8, 16), toonMaterial(COLOR.gold));
  capBand.position.set(0, 2.28, -0.04);
  capBand.rotation.x = Math.PI / 2;
  body.add(head, hair, cap, capTip, capBand);

  // 臉:精靈尖耳 + 眼睛 + 眉 + 鼻 + 鬢髮
  const skinMat = toonMaterial(COLOR.skin);
  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 6), skinMat);
    ear.position.set(0.32 * side, 2.06, -0.02);
    ear.rotation.z = side * -1.1;
    body.add(ear);
    const sideburn = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), toonMaterial(COLOR.hair));
    sideburn.position.set(0.28 * side, 1.96, -0.04);
    sideburn.scale.set(0.7, 1.1, 0.8);
    body.add(sideburn);
    const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), toonMaterial(0xffffff));
    eyeWhite.position.set(0.13 * side, 2.1, 0.29);
    eyeWhite.scale.set(0.8, 1.1, 0.6);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), toonMaterial(COLOR.eye));
    pupil.position.set(0.13 * side, 2.09, 0.34);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.035, 0.04), toonMaterial(COLOR.brow));
    brow.position.set(0.13 * side, 2.21, 0.3);
    brow.rotation.z = side * -0.12;
    body.add(eyeWhite, pupil, brow);
  }
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 6), skinMat);
  nose.position.set(0, 2.02, 0.34);
  nose.rotation.x = Math.PI / 2;
  body.add(nose);

  // 手臂(右手持劍)
  const aL = buildArm(0.46, tunic);
  const aR = buildArm(-0.46, tunic);
  const sw = buildSword();
  sw.sword.position.y = -0.58; // 對齊右手位置(手在前臂群 y=-0.25 再往下)
  sw.sword.rotation.x = Math.PI / 2;
  aR.arm.add(sw.sword);
  body.add(aL.arm, aR.arm);

  // 盾牌(平時揹背後,防禦時舉到身前)
  const shield = buildShield();
  shield.position.copy(SHIELD_HOME);
  body.add(shield);

  addOutlines(group);
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) child.castShadow = true;
  });

  return {
    group,
    body,
    armL: aL.arm,
    armR: aR.arm,
    forearmL: aL.forearm,
    forearmR: aR.forearm,
    legL: lL.leg,
    legR: lR.leg,
    shinL: lL.shin,
    shinR: lR.shin,
    shield,
    sword: sw.sword,
    bladeMaterial: sw.bladeMaterial,
    tunicMat,
  };
}
