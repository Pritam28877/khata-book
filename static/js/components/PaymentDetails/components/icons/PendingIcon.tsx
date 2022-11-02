// libs
import React, { memo } from 'react';

interface IPendingIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string;
}

function PendingIcon({
  className,
  height = 34,
  width = 34,
  stroke = '#CFD0D1',
}: IPendingIcon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.6"
        cx="17"
        cy="17"
        r="13.5"
        stroke={stroke}
        strokeWidth="7"
      />
    </svg>
  );
}
export default memo(PendingIcon);
