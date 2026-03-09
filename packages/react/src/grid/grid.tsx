import type { SVGProps } from "react"

type GridLoaderProps = SVGProps<SVGSVGElement>

const GridLoader = (props: GridLoaderProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    data-type="loader"
    data-loader="grid"
    {...props}
  >
    <style>
      {`
        .stark-loader-grid rect {
          animation: stark-loader-grid 1440ms ease-in-out infinite;
          opacity: 0.16;
          width: 4px;
          height: 4px;
          fill: currentColor;
        }

        .stark-loader-grid rect:nth-child(5) {
          animation-delay: 0ms;
        }

        .stark-loader-grid rect:nth-child(2),
        .stark-loader-grid rect:nth-child(4),
        .stark-loader-grid rect:nth-child(6),
        .stark-loader-grid rect:nth-child(8) {
          animation-delay: 120ms;
        }

        .stark-loader-grid rect:nth-child(1),
        .stark-loader-grid rect:nth-child(3),
        .stark-loader-grid rect:nth-child(7),
        .stark-loader-grid rect:nth-child(9) {
          animation-delay: 240ms;
        }

        @keyframes stark-loader-grid {
          0%,
          100% {
            opacity: 0.16;
          }

          24%,
          48% {
            opacity: 1;
          }
        }
      `}
    </style>

    <g className="stark-loader-grid">
      <rect x={3} y={3} />
      <rect x={10} y={3} />
      <rect x={17} y={3} />
      <rect x={3} y={10} />
      <rect x={10} y={10} />
      <rect x={17} y={10} />
      <rect x={3} y={17} />
      <rect x={10} y={17} />
      <rect x={17} y={17} />
    </g>
  </svg>
)

export { GridLoader }
export type { GridLoaderProps }
