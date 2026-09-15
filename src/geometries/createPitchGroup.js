import * as THREE from "three";
import { createPitch } from "./createPitch";
import { createPlane } from "./createPlane";
import { scene } from "../setup/scene";
import {
  RectAreaLightHelper,
  RectAreaLightUniformsLib,
} from "three/examples/jsm/Addons.js";

const createAreaLight = () => {
  // LIGHT
  RectAreaLightUniformsLib.init();
  const rectLight = new THREE.RectAreaLight(0xffffff, 1, 1.2, 1.2);
  rectLight.position.set(0, 1, -1.5);
  rectLight.rotation.set(0, Math.PI, 0);

  // HELPER
  const rectLightHelper = new RectAreaLightHelper(rectLight);
  rectLight.add(rectLightHelper);

  return rectLight;
};

const createSpotLight = (x) => {
  // LIGHT
  const spotLight = new THREE.SpotLight(0xffffff, 10, 4, Math.PI / 6);
  spotLight.castShadow = true;
  spotLight.position.set(x, 2, 0);

  // HELPER
  const spotLightHelperLeft = new THREE.SpotLightHelper(spotLight);
  spotLight.add(spotLightHelperLeft);

  return spotLight;
};

const createPitchGroup = (note) => {
  return createPitch(note).then((pitch) => {
    // LIGHTS
    const rectLight = createAreaLight();
    // const spotLightLeft = createSpotLight(-1);
    // const spotLightRight = createSpotLight(1);

    // PLANE
    const plane = createPlane();

    // GROUP
    const pitchGroup = new THREE.Group();
    // pitchGroup.add(plane, pitch, rectLight, spotLightLeft, spotLightRight);
    pitchGroup.add(plane, pitch, rectLight);
    scene.add(pitchGroup);

    return {
      pitch,
      pitchGroup,
      rectLight,
    };
  });
};

export { createPitchGroup };
