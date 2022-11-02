// libs
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';

// constants
import { COLORS_THEME } from 'src/styles/variables';

// context
import { useLanguageContext } from '@components/LanguageProvider/context';

// icons
import noInternetIcon from 'src/assets/images/noInternetIcon.svg';

// styles
const useStyles = makeStyles(() => ({
  snackBar: {
    padding: '16px 16px 16px 24px',
    backgroundColor: COLORS_THEME.TEXT_GREY,
    borderRadius: '10px',
    boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.2)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },
  noConnectionIcon: {
    width: '40px',
    height: '40px',
    marginRight: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: COLORS_THEME.WHITE,
  },
  closeIcon: {
    position: 'absolute',
    top: '0',
    right: '0',
    color: '#A6A9AB',
    cursor: 'pointer',
  },
  txt: {
    fontSize: '16px',
    color: COLORS_THEME.WHITE,
  },
}));

interface INetworkDetector {
  open: boolean;
  onClose: () => void;
}

function NoConnectionUI({ open, onClose }: INetworkDetector) {
  const classes = useStyles();
  const { t } = useLanguageContext();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      TransitionComponent={(props) => <Fade {...props} />}
      className={classes.snackBar}
      style={open ? { display: 'block' } : { display: 'none' }}
    >
      <div className={classes.container}>
        <img
          src={noInternetIcon}
          alt="no internet"
          className={classes.noConnectionIcon}
        />
        <div>
          <Typography className={classes.title}>
            {t('no_internet_connection')}
          </Typography>
          <Typography className={classes.txt}>
            {t('changes_will_be_lost')}
          </Typography>
        </div>
        <CloseIcon onClick={onClose} className={classes.closeIcon} />
      </div>
    </Snackbar>
  );
}

export default NoConnectionUI;
