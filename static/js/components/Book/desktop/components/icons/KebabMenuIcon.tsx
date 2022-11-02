// libs
import React, { memo } from 'react';

// defs
interface IKebabMenuIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string | null;
}

function KebabMenuIcon({ className, height, width, stroke }: IKebabMenuIcon) {
  return (
    <svg
      width={width || '4'}
      height={height || '18'}
      className={className ? className : ''}
      viewBox="0 0 4 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 2C4 0.9 3.1 7.86804e-08 2 1.74845e-07C0.900002 2.7101e-07 2.9397e-06 0.9 3.03587e-06 2C3.13203e-06 3.1 0.900003 4 2 4C3.1 4 4 3.1 4 2ZM4 16C4 14.9 3.1 14 2 14C0.900003 14 4.16362e-06 14.9 4.25979e-06 16C4.35595e-06 17.1 0.900004 18 2 18C3.1 18 4 17.1 4 16ZM4 9C4 7.9 3.1 7 2 7C0.900003 7 3.55166e-06 7.9 3.64783e-06 9C3.74399e-06 10.1 0.900003 11 2 11C3.1 11 4 10.1 4 9Z"
        fill={stroke || '#797979'}
      />
    </svg>
  );
}
export default memo(KebabMenuIcon);
