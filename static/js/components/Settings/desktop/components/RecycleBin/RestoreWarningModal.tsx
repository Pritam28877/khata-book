// libs
import React, { memo } from 'react';

// material components
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// constants
import { MODAL_STYLE } from 'src/styles/variables';

// icons
import warningIcon from 'src/assets/images/warningIcon.svg';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

//styles
import useStyles from './modalStyles';

interface IRestoreWarningModal {
  open: boolean;
  onClose: VoidFunction;
  primaryText: string;
  secondaryText: string;
}

function RestoreWarningModal({
  open,
  onClose,
  primaryText,
  secondaryText,
}: IRestoreWarningModal) {
  const classes = useStyles();
  const { t } = useLanguageContext();

  return (
    <Modal open={open} onClose={onClose}>
      <div style={MODAL_STYLE} className={classes.paper}>
        <CloseIcon className={classes.closeIcon} onClick={onClose} />
        <img src={warningIcon} alt="icon" className={classes.icon} />
        <Typography className={classes.primaryText}>{primaryText}</Typography>
        <Typography className={classes.secondaryText}>
          {secondaryText}
        </Typography>
        <div className={classes.buttonsContainer}>
          <Button
            className={`${classes.button} ${classes.secondaryBtn}`}
            onClick={onClose}
          >
            {t('cancel')}
          </Button>{' '}
          <Button
            className={`${classes.button} ${classes.primaryBtn}`}
            onClick={onClose}
          >
            {t('okay')}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
export default memo(RestoreWarningModal);
