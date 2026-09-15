import * as THREE from "three";
import { renderer } from "./renderer";
import { scene } from "./scene";
import { camera } from "./camera";
import { controls } from "./controls";

const timer = new THREE.Timer();
timer.connect(document);

export const animateScene = () => {
  controls.update();
  renderer.render(scene, camera);

  window.requestAnimationFrame(animateScene);
};

export const animatePitch = (pitch) => {
  timer.update();
  const elapsedTime = timer.getElapsed();

  pitch.rotation.set(
    0,
    elapsedTime * Math.PI * -0.1,
    elapsedTime * Math.PI * -0.1,
  );
  pitch.position.set(
    Math.sin(elapsedTime * 0.5) * -0.1,
    Math.cos(elapsedTime * 0.5) * -0.1 + 1,
    Math.sin(elapsedTime * 0.5) * -0.1,
  );

  window.requestAnimationFrame(() => animatePitch(pitch));
};

export const animateParticules = (particules) => {
  timer.update();
  const elapsedTime = timer.getElapsed();

  particules.rotation.set(
    0,
    elapsedTime * Math.PI * 0.1,
    elapsedTime * Math.PI * 0.1,
  );
  particules.position.set(
    Math.sin(elapsedTime * 0.5) * 0.1,
    Math.cos(elapsedTime * 0.5) * 0.1,
    Math.sin(elapsedTime * 0.5) * 0.1,
  );

  window.requestAnimationFrame(() => animateParticules(particules));
};

export const animateRectLight = (light) => {
  timer.update();
  const elapsedTime = timer.getElapsed();

  light.rotation.set(0, elapsedTime * Math.PI * 0.2, 0);

  window.requestAnimationFrame(() => animateRectLight(light));
};

export const animateSpotLights = (ligths) => {
  timer.update();
  const elapsedTime = timer.getElapsed();

  for (let i = 0; i < ligths.length; i++) {
    ligths[i].intensity = (Math.sin(elapsedTime * Math.PI * 0.2) + 1) * 5;
  }

  window.requestAnimationFrame(() => animateSpotLights(ligths));
};
