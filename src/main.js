import { renderer } from "./setup/renderer";

import { createDo } from "./geometries/pitches";
import {
  animateParticules,
  animatePitch,
  animateRectLight,
  animateScene,
  animateSpotLights,
} from "./setup/animations";

import "./setup/resize";

createDo().then(
  ({ pitch, particules, rectLight, spotLightLeft, spotLightRight }) => {
    animatePitch(pitch);
    animateParticules(particules);
    animateRectLight(rectLight);
    animateSpotLights([spotLightLeft, spotLightRight]);
  },
);

animateScene();

// Run on each frame
// renderer.setAnimationLoop(animateScene);

// Add the scene to the DOM
document.body.appendChild(renderer.domElement);
