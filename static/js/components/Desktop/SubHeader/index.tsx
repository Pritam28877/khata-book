// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { LAYOUT } from 'src/styles/variables';

const useStyles = makeStyles(() => ({
  root: {
    display: `${LAYOUT.FLEX}`,
  },
}));

interface ISubHeader {
  children?: React.ReactNode;
}

function SubHeader(props: ISubHeader) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}

export default memo(SubHeader);
