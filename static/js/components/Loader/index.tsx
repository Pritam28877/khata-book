// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

// constants
import { COLORS, COLORS_THEME } from 'src/styles/variables';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  animationContainer: {
    height: '70px',
    width: '70px',
    position: 'relative',
  },
  bottom: {
    color: '#ededed',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '50%',
  },
  top: {
    color: COLORS.LITE_BLUE,
    animationDuration: '550ms',
    position: 'absolute',
    left: '2px',
    top: '1px',
  },
  circle: {
    strokeLinecap: 'round',
    color: COLORS_THEME.SECONDARY_COLOR,
  },
  text: {
    marginTop: '33px',
    fontSize: '18px',
    color: COLORS_THEME.SECONDARY_COLOR,
    fontWeight: 500,
  },
  percentage: {
    position: 'absolute',
    left: '24px',
    bottom: '24px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: COLORS_THEME.SECONDARY_COLOR,
  },
}));

interface ILoaderProps {
  text?: string;
  className?: string;
  value?: number;
  isSync?: boolean;
}

function Loader({ text, className = '', value, isSync }: ILoaderProps) {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`}>
      <div className={classes.animationContainer}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={70}
          thickness={4.5}
          value={100}
        />
        <CircularProgress
          variant={isSync ? 'determinate' : 'indeterminate'}
          disableShrink={isSync ? false : true}
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={67}
          thickness={3}
          value={value}
        />
        {value !== undefined && (
          <Typography
            variant="caption"
            component="div"
            className={classes.percentage}
          >{`${Math.round(value)}%`}</Typography>
        )}
      </div>
      {text !== undefined && <div className={classes.text}>{text}</div>}
    </div>
  );
}

export default memo(Loader);
