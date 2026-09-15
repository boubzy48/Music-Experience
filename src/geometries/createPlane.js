import * as THREE from "three";

const createPointLight = () => {
  // LIGHT
  const pointLight = new THREE.PointLight();
  pointLight.position.set(0, 0.001, 0);
  pointLight.castShadow = true;

  // HELPER
  const pointLightHelper = new THREE.PointLightHelper(pointLight);
  pointLight.add(pointLightHelper);

  return pointLight;
};

// MATERIAL
const lambertMaterial = new THREE.MeshLambertMaterial();

export const createPlane = () => {
  // HELPER
  // NOTE: tester si l'initialiser en dehors de la fonction crée un problème quand il il y a deux plans.
  const axesHelper = new THREE.AxesHelper();

  // LIGHTS
  const pointLight = createPointLight();

  // GEOMETRY
  const geometry = new THREE.PlaneGeometry(2, 2);

  // PLANE
  const plane = new THREE.Mesh(geometry, lambertMaterial);
  plane.rotation.set(-Math.PI * 0.5, 0, 0);
  plane.castShadow = true;
  plane.receiveShadow = true;
  plane.add(axesHelper);
  plane.attach(pointLight);

  return plane;
};
