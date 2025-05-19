import { pluginReact } from "@rsbuild/plugin-react";

import { defineConfig } from "@rsbuild/core";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  output: {
    filename: {
      js: "[name].[contenthash:8].js",
      css: "[name].[contenthash:8].css",
      svg: "[name].[contenthash:8].svg",
      font: "[name].[contenthash:8][ext]",
      image: "[name].[contenthash:8][ext]",
      media: "[name].[contenthash:8][ext]",
    },
    copy: [{ from: "./extensions", to: "" }],
    sourceMap: {
      js: "inline-source-map",
    },
  },
  html: {
    template: "./src/index.html",
  },
  dev: {
    hmr: false,
    liveReload: false,
    writeToDisk: true,
    progressBar: false,
  },
  server: {
    open: false,
    publicDir: {
      watch: true,
    },
  },
});
