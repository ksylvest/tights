import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), dts({ include: [resolve(__dirname, "src")] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      name: "tights",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "clsx"],
    },
  },
  test: {
    environment: "jsdom",
  },
});
