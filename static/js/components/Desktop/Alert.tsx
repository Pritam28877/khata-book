// libs
import React, { memo, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS, PIXEL_SIZE } from 'src/styles/variables';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    minHeight: '90px',
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    color: COLORS.DOVE_GREY,
  },
}));

interface IAlert {
  className?: string;
  children?: ReactNode;
}

function Alert(props: IAlert) {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </div>
  );
}

export default memo(Alert);
