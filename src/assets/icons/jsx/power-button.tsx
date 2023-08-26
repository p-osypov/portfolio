import React from 'react';

const IconPowerButton: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="white"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 280"
    {...props}
  >
    <path
      d="M140,0C62.804,0,0,62.804,0,140s62.804,140,140,140s140-62.804,140-140S217.196,0,140,0z M140,250
		c-60.654,0-110-49.346-110-110S79.346,30,140,30s110,49.346,110,110S200.654,250,140,250z"
    />
    <path
      d="M140,75c-8.284,0-15,6.716-15,15v100c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V90
		C155,81.716,148.284,75,140,75z"
    />
  </svg>
);
export default IconPowerButton;
