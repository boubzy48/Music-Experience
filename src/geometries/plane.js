import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xd1d4e6,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(geometry, material);

export { plane };
