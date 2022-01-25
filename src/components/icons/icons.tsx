import { FC } from 'react';

export const Moon: FC = () => {
  return (
    <svg width="23" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
};

export const Icon: FC = () => null;
