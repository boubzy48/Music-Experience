import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { roboto } from "../fonts/roboto";
import { scene } from "../setup/scene";

// MATERIAL
const material = new THREE.MeshBasicMaterial();

export const createPitch = (note, positionX) =>
  roboto.then((font) => {
    // HELPER
    const axesHelper = new THREE.AxesHelper();

    // GEOMETRY
    const geometry = new TextGeometry(note, {
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
    geometry.center();

    // OBJECT
    const pitch = new THREE.Mesh(geometry, material);
    pitch.position.set(positionX, 1, 0);
    pitch.add(axesHelper);

    scene.add(pitch);
  });
