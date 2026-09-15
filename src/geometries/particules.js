import * as THREE from "three";

// MATERIAL
const material = new THREE.PointsMaterial();
material.size = 0.03;
material.sizeAttenuation = true;
material.vertexColors = true;

export const createParticules = () => {
  // GEOMETRY
  const geometry = new THREE.BufferGeometry();
  const count = 50;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = Math.random() - 0.5;
    colors[i] = Math.random();
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // PARTICULES
  const particules = new THREE.Points(geometry, material);

  return particules;
};
