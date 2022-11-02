// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

// components
import Button from 'src/components/Button';

//icons
import deleteIcon from 'src/assets/images/deleteIcon.svg';
import closeIcon from 'src/assets/images/closeModalIcon.svg';

// constants
import { COLORS_THEME, MODAL_STYLE } from 'src/styles/variables';

// styles
import useButtonStyles from '@styles/ButtonsStyles';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    position: 'absolute',
    width: '540px',
    padding: '36px 40px',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '15px',
    boxShadow: COLORS_THEME.GREY_SHADOW,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mainContent: {
    display: 'flex',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
    borderRadius: '8px',
    marginRight: '24px',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  deleteIcon: {
    width: '28px',
    height: '28px',
  },
  title: {
    fontWeight: 500,
    fontSize: '20px',
    color: COLORS_THEME.DARK_GREY,
    marginBottom: '4px',
  },
  confirmationText: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
    marginBottom: '24px',
  },
  buttonContainer: {
    display: 'flex',
    '& > button:first-child': {
      marginRight: '24px',
    },
  },
  button: {
    width: '220px',
    height: '48px',
    borderRadius: '6px',
    textTransform: 'capitalize',
    fontSize: '18px',
    fontWeight: 'bold',
    boxShadow: 'none',
  },

  closeIcon: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    color: '#C9C9C9',
    cursor: 'pointer',
  },
}));

interface IDialogProps {
  open: boolean;
  onClose: VoidFunction;
  secondaryAction: VoidFunction;
  primaryAction: VoidFunction;
  secondaryActionText: string;
  primaryActionText: string;
  title: string;
  confirmationText: string;
  isDeleteDisabled?: boolean;
}

function DeletionConfirmationModal({
  open,
  onClose,
  secondaryAction,
  primaryAction,
  secondaryActionText,
  primaryActionText,
  title,
  confirmationText,
  isDeleteDisabled,
}: IDialogProps) {
  const classes = useStyles();
  const btnClasses = useButtonStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div style={MODAL_STYLE} className={classes.paper}>
        <img
          className={classes.closeIcon}
          src={closeIcon}
          onClick={onClose}
          alt="close"
        />
        <div className={classes.mainContent}>
          <div className={classes.iconWrapper}>
            <img src={deleteIcon} alt="delete" className={deleteIcon} />
          </div>
          <div className={classes.textWrapper}>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.confirmationText}>
              {confirmationText}
            </Typography>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            size="small"
            onClick={secondaryAction}
            className={`${classes.button} ${btnClasses.greyBtn}`}
          >
            {secondaryActionText}
          </Button>
          <Button
            size="small"
            onClick={primaryAction}
            className={`${classes.button} ${btnClasses.primaryBtn}`}
            disabled={isDeleteDisabled}
          >
            {primaryActionText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default memo(DeletionConfirmationModal);
