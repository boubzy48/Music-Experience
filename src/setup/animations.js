import { camera } from "./camera";
import { controls } from "./controls";
import { renderer } from "./renderer";
import { scene } from "./scene";

export const animateScene = () => {
  controls.update();
  renderer.render(scene, camera);
};
