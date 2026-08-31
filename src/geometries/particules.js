import * as THREE from "three";
import { colorsPalette } from "./constants";

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
    const randomIndex = 1 + Math.floor(Math.random() * 3);
    const color = new THREE.Color(Number(colorsPalette[randomIndex]));

    positions[i] = Math.random() - 0.5;

    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // PARTICULES
  const particules = new THREE.Points(geometry, material);

  return particules;
};
