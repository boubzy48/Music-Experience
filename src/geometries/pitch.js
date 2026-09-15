import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { roboto } from "../fonts/roboto";
import { createParticules } from "./particules";

const particules = createParticules();

// MATERIAL
const standardMaterial = new THREE.MeshStandardMaterial();
const lambertMaterial = new THREE.MeshLambertMaterial();
const phongMaterial = new THREE.MeshPhongMaterial();
const toonMaterial = new THREE.MeshToonMaterial();

export const createPitch = (text) =>
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
    geometry.center();

    const pitch = new THREE.Mesh(geometry, standardMaterial);
    pitch.castShadow = true;
    pitch.receiveShadow = true;

    // GROUP
    const pitchWithParticules = new THREE.Group();
    pitchWithParticules.position.set(0, 1, 0);
    pitchWithParticules.add(pitch, axesHelper);

    return { pitchWithParticules, pitch, particules };
  });
