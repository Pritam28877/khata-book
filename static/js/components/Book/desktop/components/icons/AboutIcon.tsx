// libs
import React, { memo } from 'react';

// defs
interface IAboutIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string | null;
}

function AboutIcon({ className, height, width, stroke }: IAboutIcon) {
  return (
    <svg
      className={className ? className : ''}
      viewBox="0 0 20 20"
      height={height}
      width={width}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 1.52051C14.6824 1.52051 18.4793 5.31642 18.4793 9.99967C18.4793 14.682 14.6824 18.4788 10.0001 18.4788C5.31685 18.4788 1.52094 14.682 1.52094 9.99967C1.52094 5.31642 5.31685 1.52051 10.0001 1.52051Z"
        stroke={stroke || '#004BAC'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99563 6.52051V10.5713"
        stroke={stroke || '#004BAC'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99544 13.4798H10.0046"
        stroke={stroke || '#004BAC'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default memo(AboutIcon);
