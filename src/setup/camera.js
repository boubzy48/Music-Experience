import * as THREE from "three";
import { sizes } from "./constants";

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000,
);
camera.position.z = 5;

export { camera };
