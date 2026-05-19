import { setupLiquidGlass } from "./core/index.js";

const setup = () => {
  setupLiquidGlass();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup, { once: true });
} else {
  setup();
}

export {};
