import { spawn } from "node:child_process";
import { cp, mkdir, rm } from "node:fs/promises";

const run = (command, args) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} exited with code ${code}`));
    });
  });

await rm("dist", { force: true, recursive: true });
await run("tsc", ["-p", "tsconfig.json"]);

await mkdir("dist/astro", { recursive: true });
await cp("src/astro/LiquidGlass.astro", "dist/astro/LiquidGlass.astro");
await cp("src/styles.css", "dist/styles.css");
