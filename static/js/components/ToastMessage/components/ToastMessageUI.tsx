// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

// icons
import BorderIcon from './icons/BorderIcon';
import toastSuccess from 'src/assets/images/toastSuccess.svg';
import toastInfo from 'src/assets/images/toastInfo.svg';

// constants
import { COLORS_THEME } from '@styles/variables';
import { TOAST_TYPE } from '../constants';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

// styles
const useStyles = makeStyles({
  snackbar: {
    '& .MuiSnackbarContent-root': {
      boxShadow: COLORS_THEME.PAPER_SHADOW,
      borderRadius: '6px',
      fontSize: '14px',
      padding: '8px 16px 8px 8px',
      color: COLORS_THEME.MEDIUM_DARK_GREY,
      backgroundColor: COLORS_THEME.WHITE,
      fontWeight: 500,
    },
    '& .MuiSnackbarContent-message': {
      padding: '0',
    },
  },
  closeIcon: {
    opacity: 0.5,
  },
  actionButton: {
    backgroundColor: COLORS_THEME.LIGHT_GREY,
    borderRadius: '4px',
    boxShadow: 'none',
    padding: '4px 12px',
    margin: '0 24px',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'capitalize',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
  },
  toastMessage: {
    display: 'flex',
    alignItems: 'center',
  },
  toastBorder: {
    marginRight: '15px',
  },
  toastIcon: {
    width: '22px',
    height: '22px',
    marginRight: '16px',
  },
});

interface IToastMessage {
  toastMessage: string | React.ReactNode;
  open: boolean;
  handleClose: () => void;
  actionHandler: () => void;
  showViewButton: boolean;
  toastType: TOAST_TYPE;
}

function ToastMessage({
  toastMessage,
  open,
  handleClose,
  actionHandler,
  showViewButton,
  toastType,
}: IToastMessage) {
  const classes = useStyles();
  const { t } = useLanguageContext();

  const handleAction = () => {
    handleClose();
    actionHandler();
  };

  const toastColor =
    toastType === TOAST_TYPE.INFO ? COLORS_THEME.SECONDARY_COLOR : '#3CB17C';

  const ToastMessage = (
    <div className={classes.toastMessage}>
      <BorderIcon
        width={4}
        height={40}
        stroke={toastColor}
        className={classes.toastBorder}
      />
      {toastType === TOAST_TYPE.INFO ? (
        <img src={toastInfo} alt="information" className={classes.toastIcon} />
      ) : (
        <img src={toastSuccess} className={classes.toastIcon} alt="success" />
      )}
      {toastMessage}
    </div>
  );

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      style={open ? { display: 'block' } : { display: 'none' }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      message={ToastMessage}
      className={classes.snackbar}
      TransitionComponent={(props) => <Slide {...props} direction="left" />}
      action={
        <React.Fragment>
          {showViewButton && (
            <Button className={classes.actionButton} onClick={handleAction}>
              {t('view')}
            </Button>
          )}
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <ClearIcon fontSize="small" classes={{ root: classes.closeIcon }} />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}
export default memo(ToastMessage);
