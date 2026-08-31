import * as THREE from "three";

// HELPER
const axesHelper = new THREE.AxesHelper();

// GEOMETRY
const geometry = new THREE.PlaneGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xd1d4e6,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(geometry, material);
plane.rotation.set(Math.PI * 0.5, 0, 0);

// GROUP
const planeGroup = new THREE.Group();
planeGroup.add(plane, axesHelper);

export { planeGroup };
