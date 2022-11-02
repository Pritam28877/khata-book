import React, { memo } from 'react';

interface IImageProps {
  className?: string;
  height?: number;
  width?: number;
  src: string;
  alt: string;
}

function Image({ className, height, width, src, alt }: IImageProps) {
  return (
    <img
      className={className ? className : ''}
      src={src}
      height={height}
      width={width}
      alt={alt}
    />
  );
}
export default memo(Image);
