import * as THREE from "three";

// LIGHTS
const ambientLight = new THREE.AmbientLight();

const directionalLight = new THREE.DirectionalLight();
const directionalHelper = new THREE.DirectionalLightHelper(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
const hemisphereHelper = new THREE.HemisphereLightHelper(hemisphereLight);

const rectAreaLight = new THREE.RectAreaLight();

const spotLight = new THREE.SpotLight();
const spotHelper = new THREE.SpotLightHelper(spotLight);

// SCENE
const scene = new THREE.Scene();

// scene.add(ambientLight);
// scene.add(directionalLight);
// scene.add(directionalHelper);
// scene.add(hemisphereLight);
// scene.add(hemisphereHelper);
// scene.add(rectAreaLight);
// scene.add(spotLight);
// scene.add(spotHelper);

export { scene };
