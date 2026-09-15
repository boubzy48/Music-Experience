import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { roboto } from "../fonts/roboto";

// MATERIAL
const standardMaterial = new THREE.MeshLambertMaterial();

export const createPitch = (text) =>
  roboto.then((font) => {
    // HELPER
    // NOTE: tester si l'initialiser en dehors de la fonction crée un problème quand il il y a deux plans.
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
    geometry.center();

    // OBJECT
    const pitch = new THREE.Mesh(geometry, standardMaterial);
    pitch.castShadow = true;
    pitch.receiveShadow = true;
    pitch.position.set(0, 1, 0);
    pitch.add(axesHelper);

    return pitch;
  });
