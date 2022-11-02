/* eslint-disable prettier/prettier */
// libs
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Box from '@material-ui/core/Box';
// constants
import { COLORS } from 'src/styles/variables';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: `${COLORS.WHITE}`,
    minHeight: '52px',
    alignItems: 'center',
    color: `${COLORS.DOVE_GREY}`,
  },
}));

interface ICodeBox {
  children?: React.ReactNode;
  className?: string;
}

function CodeBox(props: ICodeBox) {
  const classes = useStyles();
  return (
    <Box className={`${classes.root} ${props.className}`}>{props.children}</Box>
  );
}

export default CodeBox;
