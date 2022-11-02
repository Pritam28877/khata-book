// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS } from 'src/styles/variables';

// components
import Image from 'src/components/Image';
import Alert from 'src/components/Desktop/Alert';

//material components
import Grid from '@material-ui/core/Grid';

//images
import homeSkeleton from 'src/assets/images/home-skeleton.png';
import LoginScreenPattern from 'src/assets/images/LoginScreenPattern.png';
import { useLanguageContext } from '@components/LanguageProvider/context';

const useStyles = makeStyles((theme) => ({
  left: {
    position: 'relative',
  },
  homeImage: {},
  bottomImage: {
    width: '100%',
    position: 'relative',
  },
  leftBackground: {
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  alertUp: {
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    top: theme.spacing(11),
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderTop: `15px solid ${COLORS.WHITE}`,
    marginLeft: theme.spacing(2),
  },
  alertTop: {
    width: '394px',
    position: 'relative',
    padding: '20px 24px',
    borderRadius: theme.spacing(1),
    marginRight: theme.spacing(22),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  alertDown: {
    position: 'absolute',
    top: '-14px',
    width: 0,
    height: 0,
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: `15px solid ${COLORS.WHITE}`,
    left: theme.spacing(1),
  },
  alertBottom: {
    width: '258px',
    position: 'absolute',
    padding: '18px 24px',
    borderRadius: theme.spacing(1),
    right: '9%',
    top: '60%',
  },
}));

function LeftPane() {
  const { t } = useLanguageContext();
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.left}>
      <div className={classes.leftBackground}>
        <Alert className={classes.alertTop}>
          <div className={classes.alertUp}></div>
          {t('home_header')}
        </Alert>
        <div className={classes.homeImage}>
          <Image src={homeSkeleton} width={604} height={430} alt="home" />
        </div>
        <div className={classes.bottomImage}>
          <Image
            className={classes.image}
            src={LoginScreenPattern}
            alt="bottom"
          />
          <Alert className={classes.alertBottom}>
            <div className={classes.alertDown}></div>
            {t('info')}
          </Alert>
        </div>
      </div>
    </Grid>
  );
}

export default memo(LeftPane);
