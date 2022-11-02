// libs
import React, { memo } from 'react';

interface ICompletedIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string;
}

function CompletedIcon({
  className,
  height = 34,
  width = 34,
  stroke = '#3CB17C',
}: ICompletedIcon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17" cy="17" r="17" fill={stroke} />
      <path
        d="M17 27C22.5 27 27 22.5 27 17C27 11.5 22.5 7 17 7C11.5 7 7 11.5 7 17C7 22.5 11.5 27 17 27Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 16.83L15.83 19.66L21.5 14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default memo(CompletedIcon);
