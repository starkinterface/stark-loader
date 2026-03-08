import BasicExample from "./examples/basic.vue"

import type { Meta } from "@storybook/vue3-vite"

export default {
  title: "BarsLoader",
} as Meta

export const Basic = {
  render: () => ({
    components: { BasicExample },
    template: `<BasicExample />`,
  }),
}
