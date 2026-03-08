import { defineMain } from "@storybook/react-vite/node"

export default defineMain({
  addons: ["@storybook/addon-a11y"],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  framework: "@storybook/react-vite",
  stories: ["./../../../../packages/react/src/**/*.stories.tsx"],
})
