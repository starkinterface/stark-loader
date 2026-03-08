import { defineMain } from "@storybook/vue3-vite/node"

export default defineMain({
  addons: ["@storybook/addon-a11y"],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  framework: "@storybook/vue3-vite",
  stories: ["./../../../../packages/vue/src/**/*.stories.ts"],
})
