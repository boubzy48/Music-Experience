import * as THREE from "three";
import { createPitch } from "./geometries/pitch";
import { createPlane } from "./geometries/plane";
import { scene } from "./setup/scene";

const createDo = () => {
  const plane = createPlane();

  return createPitch("Do").then((pitch) => {
    const group = new THREE.Group();

    group.add(pitch, plane);
    scene.add(group);
  });
};

export { createDo };
