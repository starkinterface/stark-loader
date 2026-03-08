import addonA11y from "@storybook/addon-a11y"
import { definePreview } from "@storybook/vue3-vite"

export default definePreview({
  addons: [addonA11y()],
  parameters: {},
})
