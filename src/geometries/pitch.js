import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { roboto } from "../fonts/roboto";
import { scene } from "../setup/scene";

// MATERIAL
const material = new THREE.MeshBasicMaterial({ color: 0xd1d4e6 });

// PITCH
const createPitch = (text) =>
  roboto.then((font) => {
    // HELPER
    const axesHelper = new THREE.AxesHelper();

    // GEOMETRY
    const geometry = new TextGeometry(text, {
      font,
      size: 0.5,
      depth: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    const pitch = new THREE.Mesh(geometry, material);

    // GROUP
    const pitchGroup = new THREE.Group();
    pitchGroup.add(pitch, axesHelper);

    return pitchGroup;
  });

export { createPitch };
