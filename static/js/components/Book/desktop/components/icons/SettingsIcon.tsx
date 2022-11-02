// libs
import React, { memo } from 'react';

// defs
interface ISettingsIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string | null;
}

function SettingsIcon({ className, height, width, stroke }: ISettingsIcon) {
  return (
    <svg
      className={className ? className : ''}
      viewBox="0 0 19 20"
      height={height}
      width={width}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0727 5.98797L16.5022 4.99788C16.0195 4.16012 14.9498 3.87111 14.1109 4.35181V4.35181C13.7115 4.58705 13.235 4.65379 12.7864 4.53732C12.3378 4.42084 11.954 4.13071 11.7196 3.73091C11.5687 3.47679 11.4877 3.18735 11.4846 2.89186V2.89186C11.4982 2.41811 11.3195 1.95902 10.9891 1.61918C10.6588 1.27935 10.2049 1.0877 9.731 1.08789H8.5815C8.11718 1.08789 7.672 1.27291 7.34446 1.60202C7.01692 1.93113 6.83404 2.3772 6.83627 2.84151V2.84151C6.82251 3.80017 6.0414 4.57006 5.08264 4.56997C4.78715 4.5669 4.49771 4.48585 4.24359 4.33503V4.33503C3.40468 3.85433 2.33498 4.14334 1.85229 4.9811L1.23978 5.98797C0.757669 6.82468 1.04274 7.89371 1.87746 8.37927V8.37927C2.42004 8.69252 2.75428 9.27145 2.75428 9.89796C2.75428 10.5245 2.42004 11.1034 1.87746 11.4166V11.4166C1.0438 11.8989 0.758418 12.9654 1.23978 13.7996V13.7996L1.81872 14.798C2.04489 15.2061 2.42435 15.5073 2.87314 15.6348C3.32193 15.7624 3.80305 15.7058 4.21003 15.4777V15.4777C4.61012 15.2442 5.08688 15.1803 5.53435 15.3C5.98183 15.4197 6.36293 15.7133 6.59294 16.1154C6.74377 16.3695 6.82481 16.6589 6.82788 16.9544V16.9544C6.82788 17.9229 7.613 18.708 8.5815 18.708H9.731C10.6962 18.708 11.48 17.928 11.4846 16.9628V16.9628C11.4824 16.497 11.6664 16.0497 11.9958 15.7203C12.3251 15.391 12.7725 15.2069 13.2383 15.2092C13.533 15.2171 13.8213 15.2978 14.0773 15.4441V15.4441C14.914 15.9262 15.983 15.6411 16.4686 14.8064V14.8064L17.0727 13.7996C17.3066 13.3982 17.3707 12.9202 17.2511 12.4713C17.1314 12.0225 16.8377 11.6399 16.435 11.4083V11.4083C16.0324 11.1766 15.7387 10.794 15.619 10.3452C15.4993 9.89635 15.5635 9.41832 15.7974 9.01695C15.9494 8.75146 16.1696 8.53133 16.435 8.37927V8.37927C17.2648 7.89397 17.5492 6.83119 17.0727 5.99636V5.99636V5.98797Z"
        stroke={stroke || '#004BAC'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="9.16043"
        cy="9.89792"
        rx="2.41648"
        ry="2.41648"
        stroke={stroke || '#004BAC'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default memo(SettingsIcon);
