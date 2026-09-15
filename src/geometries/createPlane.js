import * as THREE from "three";
import { scene } from "../setup/scene";

// MATERIAL
const material = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
});

export const createPlane = () => {
  // HELPER
  const helper = new THREE.AxesHelper();

  // GEOMETRY
  const geometry = new THREE.PlaneGeometry(14, 5);

  // OBJECT
  const plane = new THREE.Mesh(geometry, material);
  plane.rotation.set(Math.PI * -0.5, 0, 0);
  plane.position.set(0, 0, 0);
  plane.add(helper);

  scene.add(plane);
};
