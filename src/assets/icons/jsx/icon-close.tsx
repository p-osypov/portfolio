import React from 'react';

const IconClose: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
      {...props}
    >
      <g>
        <path
          d="M0 50V0H50V50H0Z"
          fill="var(--color-primary-dark)"
          className="icon-bg"
        />
        <path
          d="M36.3138 36.314C30.0658 42.562 19.9348 42.562 13.6862 36.314C7.43762 30.066 7.43824 19.9349 13.6862 13.6862C19.9342 7.43761 30.0652 7.43823 36.3138 13.6862C42.5624 19.9343 42.5618 30.0654 36.3138 36.314ZM31.9624 30.2217L27.6111 25.0001L31.9624 19.7786L30.2221 18.0383L25 22.389L19.7785 18.0376L18.0382 19.778L22.3889 25.0001L18.0376 30.2217L19.7779 31.962L25 27.6112L30.2215 31.9626L31.9624 30.2217Z"
          fill="url(#paint0_linear_103_8)"
        />
        <path
          d="M16.579 14.8947L14.8947 16.579L21.912 25L14.8947 33.4211L16.579 35.1053L25 28.088L33.4211 35.1053L35.1053 33.4211L28.088 25L35.1053 16.579L33.4211 14.8947L25 21.912L16.579 14.8947Z"
          fill="var(--color-primary-dark)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_103_8"
          x1="36.8153"
          y1="8.06468"
          x2="8.4583"
          y2="41.1476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-matrix)" />
          <stop offset="1" stopColor="var(--color-user)" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default IconClose;
