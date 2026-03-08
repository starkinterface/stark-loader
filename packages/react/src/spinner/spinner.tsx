import type { SVGProps } from "react"

type SpinnerLoaderProps = SVGProps<SVGSVGElement>

const SpinnerLoader = (props: SpinnerLoaderProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    data-loader="spinner"
    {...props}
  >
    <style>
      {`
        .stark-loader-spinner-outer {
          transform-origin: center;
          animation: stark-loader-spinner 1440ms linear infinite;
        }

        @keyframes stark-loader-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth={1}
      strokeOpacity={0.36}
    />
    <path
      d="M6.70084 3.51958C8.28996 2.5266 10.1261 2.00009 12 2.00009C13.8738 2.00009 15.71 2.5266 17.2991 3.51958M21.9938 11.651C22.0592 13.5237 21.5971 15.3772 20.6602 17C19.7233 18.6228 18.3492 19.9497 16.6947 20.8294M7.30527 20.8294C5.65075 19.9497 4.2767 18.6228 3.33977 17C2.40284 15.3772 1.94073 13.5237 2.00612 11.651"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className="stark-loader-spinner-outer"
    />
    <path
      d="M7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12Z"
      stroke="currentColor"
      strokeWidth={1}
      strokeOpacity={0.36}
    />
  </svg>
)

export { SpinnerLoader }
export type { SpinnerLoaderProps }
