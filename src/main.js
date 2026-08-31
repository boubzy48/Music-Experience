import { plane } from "./geometries/plane";
import { camera } from "./setup/camera";
import { controls } from "./setup/controls";
import { renderer } from "./setup/renderer";
import { scene } from "./setup/scene";

scene.add(plane);

const animateFrame = () => {
  controls.update();
  renderer.render(scene, camera);
};

// Run on each frame
renderer.setAnimationLoop(animateFrame);

// Add the scene to the DOM
document.body.appendChild(renderer.domElement);
