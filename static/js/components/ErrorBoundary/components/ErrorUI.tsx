// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Button from 'src/components/Button';

// constants
import { PIXEL_SIZE, COLORS, FONTWEIGHT } from 'src/styles/variables';

// styles
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '#fff',
    minHeight: '100vh',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '302px',
    maxWidth: 'calc(100% - 32px)',
  },
  title: {
    fontSize: `${PIXEL_SIZE['24px']}rem`,
    fontWeight: FONTWEIGHT.BOLD,
    letterSpacing: '0.46px',
    textAlign: 'center',
    color: COLORS.BLACK,
    margin: '0 0 22px 0',
  },
  info: {
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    marginBottom: '48px',
    textAlign: 'center',
  },
}));

interface IErrorUIProps {
  className?: string;
  onClick?: VoidFunction;
}

const reload = () => window.location.reload();

function ErrorUI({ className = '', onClick = reload }: IErrorUIProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.container} ${className}`}>
      <div className={classes.inner}>
        <h1 className={classes.title}>Oops</h1>
        <div className={classes.info}>
          An unknown error occured while we were processing your request'
        </div>
        <Button fullWidth variant="contained" color="primary" onClick={onClick}>
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default memo(ErrorUI);
