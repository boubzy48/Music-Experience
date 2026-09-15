import * as THREE from "three";
import { sizes } from "./constants";

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

export { renderer };
