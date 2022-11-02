import React, { memo } from 'react';
import MButton, { ButtonProps } from '@material-ui/core/Button';

interface IButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

function Button(props: IButtonProps) {
  const { children, size = 'large', ...rest } = props;
  return (
    <MButton size={size} {...rest}>
      {children}
    </MButton>
  );
}

export default memo(Button);
