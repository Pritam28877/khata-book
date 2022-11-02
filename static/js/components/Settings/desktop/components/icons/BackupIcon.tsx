// libs
import React, { memo } from 'react';

// defs
interface IArrowIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string;
}

function BackupIcon({ className, height, width, stroke }: IArrowIcon) {
  return (
    <svg
      className={className ? className : ''}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.25C17.9363 1.25 22.75 6.06255 22.75 12C22.75 17.9362 17.9362 22.75 12 22.75C6.06255 22.75 1.25 17.9363 1.25 12C1.25 6.06246 6.06246 1.25 12 1.25Z"
        stroke={stroke || '#2666B8'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.63672V13.0913"
        stroke={stroke || '#2666B8'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.995 16.8633H12.005"
        stroke={stroke || '#2666B8'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default memo(BackupIcon);
