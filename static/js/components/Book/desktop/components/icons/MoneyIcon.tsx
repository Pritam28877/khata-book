// libs
import React, { memo } from 'react';

// defs
interface IMoneyIcon {
  className?: string;
  height?: number;
  width?: number;
  stroke?: string | null;
}

function MoneyIcon({ className, height, width, stroke }: IMoneyIcon) {
  return (
    <svg
      className={className ? className : ''}
      viewBox="0 0 20 13"
      height={height}
      width={width}
      fill="none"
    >
      <path
        d="M15.8333 13H4.16667C3.062 12.9987 2.00296 12.5703 1.22185 11.8087C0.440735 11.0471 0.00132321 10.0145 0 8.9375L0 4.0625C0.00132321 2.98545 0.440735 1.95289 1.22185 1.1913C2.00296 0.429717 3.062 0.00129013 4.16667 0H15.8333C16.938 0.00129013 17.997 0.429717 18.7782 1.1913C19.5593 1.95289 19.9987 2.98545 20 4.0625V8.9375C19.9987 10.0145 19.5593 11.0471 18.7782 11.8087C17.997 12.5703 16.938 12.9987 15.8333 13ZM4.16667 1.625C3.50363 1.625 2.86774 1.88181 2.3989 2.33893C1.93006 2.79605 1.66667 3.41603 1.66667 4.0625V8.9375C1.66667 9.58397 1.93006 10.204 2.3989 10.6611C2.86774 11.1182 3.50363 11.375 4.16667 11.375H15.8333C16.4964 11.375 17.1323 11.1182 17.6011 10.6611C18.0699 10.204 18.3333 9.58397 18.3333 8.9375V4.0625C18.3333 3.41603 18.0699 2.79605 17.6011 2.33893C17.1323 1.88181 16.4964 1.625 15.8333 1.625H4.16667ZM10 9.75C9.34073 9.75 8.69626 9.55939 8.1481 9.20228C7.59994 8.84516 7.17269 8.33758 6.9204 7.74372C6.66811 7.14986 6.6021 6.49639 6.73072 5.86596C6.85933 5.23552 7.1768 4.65642 7.64298 4.2019C8.10915 3.74738 8.7031 3.43785 9.3497 3.31245C9.9963 3.18705 10.6665 3.25141 11.2756 3.49739C11.8847 3.74338 12.4053 4.15994 12.7716 4.6944C13.1378 5.22886 13.3333 5.85721 13.3333 6.5C13.3333 7.36195 12.9821 8.1886 12.357 8.7981C11.7319 9.40759 10.8841 9.75 10 9.75ZM10 4.875C9.67036 4.875 9.34813 4.9703 9.07405 5.14886C8.79997 5.32742 8.58635 5.58121 8.4602 5.87814C8.33405 6.17507 8.30105 6.5018 8.36536 6.81702C8.42967 7.13224 8.5884 7.42179 8.82149 7.64905C9.05458 7.87631 9.35155 8.03108 9.67485 8.09378C9.99815 8.15648 10.3333 8.1243 10.6378 8.0013C10.9423 7.87831 11.2026 7.67003 11.3858 7.4028C11.5689 7.13557 11.6667 6.82139 11.6667 6.5C11.6667 6.06902 11.4911 5.6557 11.1785 5.35095C10.8659 5.04621 10.442 4.875 10 4.875ZM4.16667 3.25C4.00185 3.25 3.84073 3.29765 3.70369 3.38693C3.56665 3.47621 3.45984 3.6031 3.39677 3.75157C3.33369 3.90003 3.31719 4.0634 3.34935 4.22101C3.3815 4.37862 3.46087 4.52339 3.57741 4.63702C3.69395 4.75065 3.84244 4.82804 4.00409 4.85939C4.16574 4.89074 4.3333 4.87465 4.48557 4.81315C4.63784 4.75166 4.76799 4.64752 4.85956 4.5139C4.95113 4.38029 5 4.2232 5 4.0625C5 3.84701 4.9122 3.64035 4.75592 3.48798C4.59964 3.3356 4.38768 3.25 4.16667 3.25ZM15 4.0625C15 4.2232 15.0489 4.38029 15.1404 4.5139C15.232 4.64752 15.3622 4.75166 15.5144 4.81315C15.6667 4.87465 15.8343 4.89074 15.9959 4.85939C16.1576 4.82804 16.306 4.75065 16.4226 4.63702C16.5391 4.52339 16.6185 4.37862 16.6507 4.22101C16.6828 4.0634 16.6663 3.90003 16.6032 3.75157C16.5402 3.6031 16.4333 3.47621 16.2963 3.38693C16.1593 3.29765 15.9982 3.25 15.8333 3.25C15.6123 3.25 15.4004 3.3356 15.2441 3.48798C15.0878 3.64035 15 3.84701 15 4.0625ZM4.16667 8.125C4.00185 8.125 3.84073 8.17265 3.70369 8.26193C3.56665 8.35121 3.45984 8.4781 3.39677 8.62657C3.33369 8.77503 3.31719 8.9384 3.34935 9.09601C3.3815 9.25362 3.46087 9.39839 3.57741 9.51202C3.69395 9.62565 3.84244 9.70304 4.00409 9.73439C4.16574 9.76574 4.3333 9.74965 4.48557 9.68815C4.63784 9.62666 4.76799 9.52252 4.85956 9.3889C4.95113 9.25529 5 9.0982 5 8.9375C5 8.72201 4.9122 8.51535 4.75592 8.36298C4.59964 8.2106 4.38768 8.125 4.16667 8.125ZM15 8.9375C15 9.0982 15.0489 9.25529 15.1404 9.3889C15.232 9.52252 15.3622 9.62666 15.5144 9.68815C15.6667 9.74965 15.8343 9.76574 15.9959 9.73439C16.1576 9.70304 16.306 9.62565 16.4226 9.51202C16.5391 9.39839 16.6185 9.25362 16.6507 9.09601C16.6828 8.9384 16.6663 8.77503 16.6032 8.62657C16.5402 8.4781 16.4333 8.35121 16.2963 8.26193C16.1593 8.17265 15.9982 8.125 15.8333 8.125C15.6123 8.125 15.4004 8.2106 15.2441 8.36298C15.0878 8.51535 15 8.72201 15 8.9375Z"
        fill={stroke || '#004BAC'}
      />
    </svg>
  );
}
export default memo(MoneyIcon);