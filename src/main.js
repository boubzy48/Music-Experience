import { scene } from "./setup/scene";
import { camera } from "./setup/camera";
import { renderer } from "./setup/renderer";
import { controls } from "./setup/controls";
import { createDo } from "./pitches";

import "./setup/resize";

createDo();

const animateFrame = () => {
  controls.update();
  renderer.render(scene, camera);
};

// Run on each frame
renderer.setAnimationLoop(animateFrame);

// Add the scene to the DOM
document.body.appendChild(renderer.domElement);
