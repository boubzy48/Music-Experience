import { FontLoader } from "three/addons/loaders/FontLoader.js";

const robotoLoader = new FontLoader();

const roboto = new Promise((resolve, reject) => {
  robotoLoader.load("/fonts/roboto_regular.json", (font) => resolve(font));
});

export { roboto };
