// oxlint-disable typescript/no-empty-object-type
// oxlint-disable typescript/no-empty-interface

import { defineComponent } from "vue"

import type { SVGAttributes } from "vue"

interface BarsLoaderBaseProps {}
interface BarsLoaderProps
  extends
    BarsLoaderBaseProps,
    /* @vue-ignore */
    SVGAttributes {}

const BarsLoader = defineComponent<BarsLoaderProps>({
  name: "BarsLoader",
  setup(_, { attrs }) {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        data-type="loader"
        data-loader="bars"
        {...attrs}
      >
        <style>
          {`
            .stark-loader-bar {
              opacity: 0.24;
              animation: stark-loader-bar 720ms infinite;
            }

            .stark-loader-bar-start {
              animation-delay: 0ms;
            }

            .stark-loader-bar-middle {
              animation-delay: 120ms;
            }

            .stark-loader-bar-end {
              animation-delay: 240ms;
            }

            @keyframes stark-loader-bar {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0.24;
              }
            }
          `}
        </style>
        <rect
          width={4}
          height={12}
          x={1}
          y={6}
          fill="currentColor"
          class="stark-loader-bar stark-loader-bar-start"
        />
        <rect
          width={4}
          height={12}
          x={10}
          y={6}
          fill="currentColor"
          class="stark-loader-bar stark-loader-bar-middle"
        />
        <rect
          width={4}
          height={12}
          x={19}
          y={6}
          fill="currentColor"
          class="stark-loader-bar stark-loader-bar-end"
        />
      </svg>
    )
  },
})

export { BarsLoader }
export type { BarsLoaderBaseProps, BarsLoaderProps }
