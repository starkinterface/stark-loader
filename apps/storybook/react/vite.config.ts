/* oxlint-disable unicorn/prefer-module */

import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./../../../packages/react/"),
      "@": path.resolve(__dirname, "./../../../packages/react/src/"),
    },
  },
})
