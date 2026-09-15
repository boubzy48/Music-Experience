import * as THREE from "three";
import { createPitch } from "./pitch";
import { createPlane } from "./plane";
import { scene } from "../setup/scene";
import {
  RectAreaLightHelper,
  RectAreaLightUniformsLib,
} from "three/examples/jsm/Addons.js";

const createDo = () => {
  const plane = createPlane();

  return createPitch("Do").then(
    ({ pitchWithParticules, pitch, particules }) => {
      // LIGHTS
      const pointLight = new THREE.PointLight();
      pointLight.position.set(0, 0.001, 0);
      pointLight.castShadow = true;
      const pointLightHelper = new THREE.PointLightHelper(pointLight);
      pointLight.add(pointLightHelper);

      RectAreaLightUniformsLib.init();
      const rectLight = new THREE.RectAreaLight(0xffffff, 1, 1.2, 1.2);
      rectLight.position.set(0, 1, -1.5);
      rectLight.rotation.set(0, Math.PI, 0);

      const rectLightHelper = new RectAreaLightHelper(rectLight);
      rectLight.add(rectLightHelper);

      const spotLightLeft = new THREE.SpotLight(0xffffff, 10, 4, Math.PI / 6);
      spotLightLeft.castShadow = true;
      spotLightLeft.position.set(-1, 2, 0);
      const spotLightRight = new THREE.SpotLight(0xffffff, 10, 4, Math.PI / 6);
      spotLightRight.position.set(1, 2, 0);
      spotLightRight.castShadow = true;
      const spotLightHelperLeft = new THREE.SpotLightHelper(spotLightLeft);
      spotLightLeft.add(spotLightHelperLeft);
      const spotLightHelperRight = new THREE.SpotLightHelper(spotLightRight);
      spotLightRight.add(spotLightHelperRight);

      // GROUP
      const pitchWithPlane = new THREE.Group();
      pitchWithPlane.add(
        pitchWithParticules,
        plane,
        pointLight,
        rectLight,
        spotLightLeft,
        spotLightRight,
      );

      scene.add(pitchWithPlane);

      return { pitch, particules, rectLight, spotLightLeft, spotLightRight };
    },
  );
};

export { createDo };
