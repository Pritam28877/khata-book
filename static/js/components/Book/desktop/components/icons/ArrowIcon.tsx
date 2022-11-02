// libs
import React, { memo } from 'react';

// defs
interface IAboutIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string | null;
}

function ArrowIcon({ className, height, width, stroke }: IAboutIcon) {
  return (
    <svg
      className={className ? className : ''}
      height={height || 5}
      width={width || 10}
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 5L5 -4.37114e-07L0 5L10 5Z" fill={stroke || '#2B2F32'} />
    </svg>
  );
}
export default memo(ArrowIcon);
