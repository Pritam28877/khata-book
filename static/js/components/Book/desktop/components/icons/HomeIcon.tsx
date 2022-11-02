// libs
import React, { memo } from 'react';

// defs
interface IHomeIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string | null;
}

function HomeIcon({ className, height, width, stroke }: IHomeIcon) {
  return (
    <svg
      className={className ? className : ''}
      viewBox="0 0 20 20"
      height={height}
      width={width}
      fill="none"
    >
      <path
        d="M7.39413 18.0401V15.229C7.39412 14.5139 7.97705 13.9329 8.69928 13.9281H11.3449C12.0705 13.9281 12.6588 14.5105 12.6588 15.229V15.229V18.0489C12.6587 18.6559 13.1481 19.1521 13.7611 19.1663H15.5249C17.2831 19.1663 18.7084 17.7553 18.7084 16.0147V16.0147V8.01769C18.699 7.33293 18.3742 6.68991 17.8265 6.27162L11.7946 1.4612C10.7379 0.62361 9.23571 0.62361 8.17899 1.4612L2.17354 6.28035C1.62376 6.69695 1.29846 7.34104 1.29169 8.02642V16.0147C1.29169 17.7553 2.71699 19.1663 4.47519 19.1663H6.2389C6.86718 19.1663 7.3765 18.6621 7.3765 18.0401V18.0401"
        stroke={stroke || '#004BAC'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default memo(HomeIcon);
