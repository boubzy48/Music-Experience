import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera } from "./camera";
import { renderer } from "./renderer";

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

export { controls };
