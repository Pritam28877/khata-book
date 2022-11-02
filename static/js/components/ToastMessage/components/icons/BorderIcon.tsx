// libs
import React, { memo } from 'react';

// defs
interface IBorderIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string;
}

function BorderIcon({
  className,
  height = 40,
  width = 4,
  stroke = '#0752AD',
}: IBorderIcon) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 4 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="2"
        x2="2"
        y2="38"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
export default memo(BorderIcon);
