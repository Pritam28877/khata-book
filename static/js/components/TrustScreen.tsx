import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Box from '@material-ui/core/Box';

// common commponents
import Image from 'src/components/Image';

//assets
import trust from 'src/assets/images/trust.png';

// constants
import { COLORS, LAYOUT } from 'src/styles/variables';
import { useLanguageContext } from 'src/components/LanguageProvider/context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: `${LAYOUT.FLEX}`,
    backgroundColor: `${COLORS.WHITE}`,
    alignItems: 'center',
    minHeight: '72px',
  },
  imgDiv: {
    width: '15%',
    marginLeft: theme.spacing(2),
  },
  trustDiv: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(8),
    color: `${COLORS.DOVE_GREY}`,
  },
}));

interface ITrustScreen {
  className?: string;
}

function TrustScreen(props: ITrustScreen) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  return (
    <div
      className={`${classes.root} ${props.className ? props.className : ''}`}
    >
      <Box className={classes.imgDiv}>
        <Image height={40} width={40} src={trust} alt="group" />
      </Box>
      <Box className={classes.trustDiv}>
        {/* Content will be taken from localisation files */}
        {t('login_tagline')}
      </Box>
    </div>
  );
}

export default memo(TrustScreen);
