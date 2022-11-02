// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS, LAYOUT } from 'src/styles/variables';

// components
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  headerBase: {
    minHeight: '64px',
    display: `${LAYOUT.FLEX}`,
    alignItems: 'center',
    backgroundColor: `${COLORS.WHITE}`,
    borderBottom: `1px solid ${COLORS.GREY}`,
  },
  headerLogo: {
    display: `${LAYOUT.FLEX}`,
    width: '100%',
  },
  logo: {
    marginLeft: '16px',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerBase}>
      <div className={classes.headerLogo}>
        <Logo className={classes.logo} width={122} height={32} />
      </div>
    </div>
  );
}

export default memo(Header);
