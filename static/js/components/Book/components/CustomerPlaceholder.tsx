// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS } from 'src/styles/variables';

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    height: '72px',
    display: 'flex',
    background: COLORS.WHITE,
    alignItems: 'center',
    padding: `0 ${theme.spacing(2)}px`,
    marginBottom: '1px',
  },
  icon: {
    height: '40px',
    width: '40px',
    background: COLORS.LIGHT_GREY,
    marginRight: theme.spacing(2),
    borderRadius: '50%',
  },
  contentLeft: {
    flex: 1,
  },
  name: {
    width: '120px',
    height: '8px',
    borderRadius: '5px',
    backgroundColor: '#c9c9c9',
    marginBottom: '12px',
  },
  time: {
    width: '92px',
    height: '8px',
    borderRadius: '5px',
    backgroundColor: COLORS.LIGHT_GREY,
  },
  amount: {
    height: '8px',
    borderRadius: '5px',
    width: '50px',
    backgroundColor: '#e38c99',
    marginBottom: '12px',
  },
  help: {
    width: '75px',
    height: '8px',
    borderRadius: '5px',
    backgroundColor: COLORS.LIGHT_GREY,
  },
  contentRight: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
}));

function CustomerPlaceholder() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.icon} />
      <div className={classes.contentLeft}>
        <div className={classes.name} />
        <div className={classes.time} />
      </div>
      <div className={classes.contentRight}>
        <div className={classes.amount} />
        <div className={classes.help} />
      </div>
    </div>
  );
}

export default memo(CustomerPlaceholder);
