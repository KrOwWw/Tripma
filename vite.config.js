import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  root: "./src",
  base: "/Tripma/",
  server: {
    port: 3000,
  },
  publicDir: "./src/assets",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/index.html",
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
