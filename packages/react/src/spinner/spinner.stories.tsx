import BasicExample from "./examples/basic"

import type { Meta } from "@storybook/react-vite"

export default {
  title: "SpinnerLoader",
} as Meta

export const Basic = {
  render: () => <BasicExample />,
}
