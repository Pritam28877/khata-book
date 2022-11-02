// libs
import React, { memo } from 'react';

// defs
interface IArrowIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string;
}

function ArrowIcon({ className, height, width, stroke }: IArrowIcon) {
  return (
    <svg
      className={className ? className : ''}
      width={width}
      height={height}
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.4125 6.33333L0.875 1.79583L2.17117 0.49966L8.00483 6.33333L2.17117 12.167L0.875 10.8708L5.4125 6.33333Z"
        fill={stroke || '#4F4F4F'}
      />
    </svg>
  );
}
export default memo(ArrowIcon);
