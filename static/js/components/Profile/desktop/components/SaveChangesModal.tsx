// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// icons
import saveIcon from 'src/assets/images/saveIcon.svg';

// constants
import { COLORS_THEME, MODAL_STYLE } from 'src/styles/variables';

// styles
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '640px',
    height: '422px',

    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '15px',
    boxShadow: COLORS_THEME.GREY_SHADOW,
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveIcon: {
    width: '89px',
    height: '80px',
    marginBottom: '45px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '32px',
    color: COLORS_THEME.DARK_GREY,
    marginBottom: '24px',
  },
  confirmationText: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
    marginBottom: '32px',
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    width: '240px',
    height: '64px',
    borderRadius: '10px',
    textTransform: 'capitalize',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  cancelButton: {
    color: COLORS_THEME.GREY_BORDER,
    backgroundColor: '#ECEEF1',
    marginRight: '32px',
  },
  saveButton: {
    color: COLORS_THEME.WHITE,
    backgroundColor: COLORS_THEME.SECONDARY_COLOR,
    '&:disabled': {
      cursor: 'default',
      color: COLORS_THEME.TEXT_DISABLED,
      backgroundColor: '#ECEEF1',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: '#C9C9C9',
    cursor: 'pointer',
  },
}));

interface ISaveChangesModal {
  open: boolean;
  onClose: VoidFunction;
  handleSave: VoidFunction;
}

function SaveChangesModal({ open, onClose, handleSave }: ISaveChangesModal) {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div style={MODAL_STYLE} className={classes.paper}>
        <CloseIcon className={classes.closeIcon} onClick={onClose} />

        <img src={saveIcon} alt="save" className={saveIcon} />
        <Typography className={classes.title}>Save Changes</Typography>
        <Typography className={classes.confirmationText}>
          Are you sure you want to save changes?
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            size="small"
            onClick={onClose}
            className={`${classes.button} ${classes.cancelButton}`}
          >
            Cancel
          </Button>
          <Button
            size="small"
            onClick={handleSave}
            color="primary"
            variant="contained"
            className={`${classes.button} ${classes.saveButton}`}
            //disabled={isDeleteDisabled}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
}
export default memo(SaveChangesModal);
