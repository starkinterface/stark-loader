import BasicExample from "./examples/basic"

import type { Meta } from "@storybook/react-vite"

export default {
  title: "RingLoader",
} as Meta

export const Basic = {
  render: () => <BasicExample />,
}
