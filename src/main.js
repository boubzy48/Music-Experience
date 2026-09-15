import { renderer } from "./setup/renderer";

import { createPitchGroup } from "./geometries/createPitchGroup";
import {
  animatePitch,
  animateRectLight,
  animateScene,
  animateSpotLights,
} from "./setup/animations";

import "./setup/resize";

createPitchGroup("Do").then(
  ({ pitch, pitchGroup, rectLight, spotLightLeft, spotLightRight }) => {
    pitchGroup.position.set(-3.5, 0, 0);
    // animatePitch(pitch);
    // animateRectLight(rectLight);
    // animateSpotLights([spotLightLeft, spotLightRight]);
  },
);

createPitchGroup("Re").then(
  ({ pitch, pitchGroup, rectLight, spotLightLeft, spotLightRight }) => {
    pitchGroup.position.set(-2.5, 0, 0);
    // animatePitch(pitch);
    // animateRectLight(rectLight);
    // animateSpotLights([spotLightLeft, spotLightRight]);
  },
);

createPitchGroup("Mi").then(
  ({ pitch, pitchGroup, rectLight, spotLightLeft, spotLightRight }) => {
    pitchGroup.position.set(-1.5, 0, 0);
    // animatePitch(pitch);
    // animateRectLight(rectLight);
    // animateSpotLights([spotLightLeft, spotLightRight]);
  },
);
createPitchGroup("Fa").then(
  ({ pitch, pitchGroup, rectLight, spotLightLeft, spotLightRight }) => {
    pitchGroup.position.set(0, 0, 0);
    // animatePitch(pitch);
    // animateRectLight(rectLight);
    // animateSpotLights([spotLightLeft, spotLightRight]);
  },
);
createPitchGroup("Sol").then(
  ({ pitch, pitchGroup, rectLight, spotLightLeft, spotLightRight }) => {
    pitchGroup.position.set(1.5, 0, 0);
    // animatePitch(pitch);
    // animateRectLight(rectLight);
    // animateSpotLights([spotLightLeft, spotLightRight]);
  },
);
createPitchGroup("La").then(
  ({ pitch, pitchGroup, rectLight, spotLightLeft, spotLightRight }) => {
    pitchGroup.position.set(2.5, 0, 0);
    // animatePitch(pitch);
    // animateRectLight(rectLight);
    // animateSpotLights([spotLightLeft, spotLightRight]);
  },
);
createPitchGroup("Si").then(
  ({ pitch, pitchGroup, rectLight, spotLightLeft, spotLightRight }) => {
    pitchGroup.position.set(3.5, 0, 0);
    // animatePitch(pitch);
    // animateRectLight(rectLight);
    // animateSpotLights([spotLightLeft, spotLightRight]);
  },
);

animateScene();

// Run on each frame
// renderer.setAnimationLoop(animateScene);

// Add the scene to the DOM
document.body.appendChild(renderer.domElement);
