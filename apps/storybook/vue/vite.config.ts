/* oxlint-disable unicorn/prefer-module */

import path from "node:path"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./../../../packages/vue/"),
      "@": path.resolve(__dirname, "./../../../packages/vue/src/"),
    },
  },
})
