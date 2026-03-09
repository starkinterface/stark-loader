import type { SVGProps } from "react"

type RingLoaderProps = SVGProps<SVGSVGElement>

const RingLoader = (props: RingLoaderProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    data-type="loader"
    data-loader="ring"
    {...props}
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
    <g className="stark-ring-loader">
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeOpacity={0.24}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M22 12A10 10 0 0 0 12 2"
        stroke="currentColor"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </g>
  </svg>
)

export { RingLoader }
export type { RingLoaderProps }
