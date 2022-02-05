import { FC } from 'react';

export const Moon: FC = () => (
  <svg width="23" height="20" fill="none">
    <g filter="url(#a)" clipRule="evenodd">
      <path
        fillRule="evenodd"
        d="M13.553 11.815c-3.884 0-7.034-2.887-7.034-6.447 0-1.343.448-2.586 1.212-3.618C4.691 2.695 2.5 5.331 2.5 8.438c0 3.9 3.45 7.062 7.704 7.062 3.389 0 6.266-2.007 7.296-4.796a7.458 7.458 0 0 1-3.947 1.111Z"
        fill="#fff"
      />
      <path
        d="M13.553 11.815c-3.884 0-7.034-2.887-7.034-6.447 0-1.343.448-2.586 1.212-3.618C4.691 2.695 2.5 5.331 2.5 8.438c0 3.9 3.45 7.062 7.704 7.062 3.389 0 6.266-2.007 7.296-4.796a7.458 7.458 0 0 1-3.947 1.111Z"
        stroke="#111517"
        strokeWidth="1.25"
      />
    </g>
    <defs>
      <filter
        id="a"
        x="-2.125"
        y=".585"
        width="24.844"
        height="23.54"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_505" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_0_505"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const Search: FC = () => (
  <svg width="18" height="18" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 11h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C13 2.9 10.1 0 6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5Zm-6 0C4 11 2 9 2 6.5S4 2 6.5 2 11 4 11 6.5 9 11 6.5 11Z"
      fill="#848484"
    />
  </svg>
);

export const Expand: FC = () => (
  <svg width="10" height="6" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.45.45 5 3.9 1.55.45.5 1.5 5 6l4.5-4.5L8.45.45Z"
      fill="#848484"
    />
  </svg>
);

// eslint-disable-next-line react/require-default-props
export const Arrow: FC<{ next?: boolean }> = ({ next = false }) => (
  <svg
    style={{
      transform: next ? 'rotate(180deg)' : '',
    }}
    width="20"
    height="20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.464 4.107 1.179 1.179-3.89 3.889h14.85v1.65H3.753l3.89 3.889-1.179 1.179L.572 10l5.892-5.893Z"
      fill="#848484"
    />
  </svg>
);

export const Loader = () => (
  <svg
    style={{
      margin: '20vh auto',
      background: 'transparent 0 0',
      display: 'block',
    }}
    width="200"
    height="200"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#848484"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);
