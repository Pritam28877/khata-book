import React from 'react';

interface IProps {
  image: string;
  width?: string;
  height?: string;
  className?: string;
}

function QrCode(props: IProps) {
  const { image, ...rest } = props;

  return <img src={image} alt="qr code" {...rest} />;
}

export default QrCode;
