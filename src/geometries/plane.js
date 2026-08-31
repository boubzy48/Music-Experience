import * as THREE from "three";

// MATERIAL
const material = new THREE.MeshBasicMaterial({
  color: 0xd1d4e6,
  side: THREE.DoubleSide,
});

const createPlane = () => {
  // HELPER
  const axesHelper = new THREE.AxesHelper();

  // GEOMETRY
  const geometry = new THREE.PlaneGeometry(1, 1);

  // PLANE
  const plane = new THREE.Mesh(geometry, material);
  plane.rotation.set(Math.PI * 0.5, 0, 0);

  // GROUP
  const planeGroup = new THREE.Group();
  planeGroup.add(plane, axesHelper);
  return planeGroup;
};

export { createPlane };
