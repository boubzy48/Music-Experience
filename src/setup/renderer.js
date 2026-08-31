import * as THREE from "three";

import { scene } from "./scene";
import { camera } from "./camera";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const animateFrame = () => {
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animateFrame);

export { renderer };
