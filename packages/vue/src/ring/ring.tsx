// oxlint-disable typescript/no-empty-object-type
// oxlint-disable typescript/no-empty-interface

import { defineComponent } from "vue"

import type { SVGAttributes } from "vue"

interface RingLoaderBaseProps {}
interface RingLoaderProps
  extends
    RingLoaderBaseProps,
    /* @vue-ignore */
    SVGAttributes {}

const RingLoader = defineComponent<RingLoaderProps>({
  name: "RingLoader",
  setup(_, { attrs }) {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        data-loader="ring"
        {...attrs}
      >
        <style>
          {`
            .stark-ring-loader {
              animation: stark-ring-loader 1000ms linear infinite;
              transform-origin: center;
            }

            @keyframes stark-ring-loader {
              from {
                transform: rotate3d(0,0,1,0deg);
              }
              to {
                transform: rotate3d(0,0,1,360deg);
              }
            }
          `}
        </style>
        <g class="stark-ring-loader">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-opacity="0.24"
            stroke-width="2"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M22 12A10 10 0 0 0 12 2"
            stroke="currentColor"
            stroke-width="2"
            vector-effect="non-scaling-stroke"
          />
        </g>
      </svg>
    )
  },
})

export { RingLoader }
export type { RingLoaderBaseProps, RingLoaderProps }
