import { renderer } from "./setup/renderer";
import { createPlane } from "./geometries/createPlane";
import { animateScene } from "./setup/animations";
import { createPitch } from "./geometries/createPitch";
import { notes } from "./setup/utils/constants";

createPlane();

for (let i = 0; i < notes.length; i++) {
  const { text, position } = notes[i];
  createPitch(text, position);
}

renderer.setAnimationLoop(animateScene);
