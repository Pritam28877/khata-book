// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS } from 'src/styles/variables';

const useStyles = makeStyles((_theme) => ({
  root: {
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: `${COLORS.WHITE}`,
  },
}));

interface ICustomHeader {
  children: React.ReactNode;
  className?: string;
}

function CustomHeader({ children, className = '' }: ICustomHeader) {
  const classes = useStyles();
  return <div className={`${classes.root} ${className}`}>{children}</div>;
}

export default memo(CustomHeader);
