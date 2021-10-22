import path from "path";
import { defineConfig } from "vite";
import webpackConfig from "./webpack-alias";
const packageJson = require("../package.json");
const packageName = packageJson.name;

export default defineConfig({
  resolve: {
    alias: webpackConfig.resolve.alias,
  },
  css: {
    postcss: path.resolve(__dirname, "./postcss.config.js"),
  },
  build: {
    target: "es2015",
    outDir: "./build/dist",
    cssCodeSplit: false,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "../UI/index.ts"),
      name: packageName,
      fileName: (format) => `${packageName}.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return `${packageName}.css`;
          return assetInfo.name;
        },
      },
    },
  },
});
