import * as THREE from "three";

// MATERIAL
const standardMaterial = new THREE.MeshStandardMaterial();
const lambertMaterial = new THREE.MeshLambertMaterial();
const phongMaterial = new THREE.MeshPhongMaterial();
const toonMaterial = new THREE.MeshToonMaterial();

export const createPlane = () => {
  // HELPER
  const axesHelper = new THREE.AxesHelper();

  // GEOMETRY
  const geometry = new THREE.PlaneGeometry(2, 2);

  // PLANE
  const plane = new THREE.Mesh(geometry, lambertMaterial);
  plane.rotation.set(-Math.PI * 0.5, 0, 0);
  plane.castShadow = true;
  plane.receiveShadow = true;
  plane.add(axesHelper);

  return plane;
};
