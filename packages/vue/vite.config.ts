import { resolve } from "node:path"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import pkg from "./package.json" with { type: "json" }

const root = import.meta.dirname

export default defineConfig({
  build: {
    lib: { entry: resolve(root, "src/index.ts"), formats: ["es"] },
    minify: false,
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
        /^vue($|\/)/,
      ],
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    target: "esnext",
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: "src",
      staticImport: true,
    }),
  ],
  resolve: {
    alias: {
      "#": root,
      "@": resolve(root, "src"),
    },
  },
})
