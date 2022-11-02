// libs
import React, { memo, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// components
import TextInputField from 'src/components/TextInputField';
import TextOverflowTooltip from '@components/TextOverflowTooltip';

// icons
import deleteIcon from 'src/assets/images/deleteIcon.svg';

// constants
import { COLORS_THEME, MODAL_STYLE } from 'src/styles/variables';

// context
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// selectors
import { useAppState } from 'src/store/app/selectors';

// styles
const useStyles = makeStyles((theme) => ({
  modal: {
    height: '100%',
    display: 'flex',
  },
  paper: {
    position: 'absolute',
    width: '640px',
    maxHeight: '525px',
    height: '100%',
    overflowY: 'auto',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '15px',
    boxShadow: COLORS_THEME.GREY_SHADOW,
    padding: '31px 64px 56px 64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    width: '89px',
    height: '80px',
    margin: '12px 0 29px 0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '28px',
    color: COLORS_THEME.DARK_GREY,
    marginBottom: '24px',
    maxWidth: '490px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
    boxShadow: 'none',
  },
  cancelButton: {
    color: COLORS_THEME.GREY_BORDER,
    backgroundColor: '#ECEEF1',
    marginRight: '32px',
  },
  deleteButton: {
    color: COLORS_THEME.WHITE,
    backgroundColor: COLORS_THEME.DARK_PRIMARY,
    '&:hover': {
      backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
      color: COLORS_THEME.DARK_PRIMARY,
    },
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
  deletionConfirmationText: {
    fontSize: '18px',
    fontWeight: 500,
    color: COLORS_THEME.PRIMARY_COLOR,
    marginBottom: '16px',
    textAlign: 'center',
  },
  inputFieldWarper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '24px',
  },
}));

interface IDeleteKhataConfirmationModal {
  open: boolean;
  onClose: VoidFunction;
  onDeleteClicked: () => void;
}

function DeleteKhataConfirmationModal({
  open,
  onClose,
  onDeleteClicked,
}: IDeleteKhataConfirmationModal) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const { getCurrentBook } = useAppState();
  const currentBook = getCurrentBook();
  const bookName = currentBook?.business_name || '';

  const [khataName, setKhataName] = useState('');
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(true);

  // clear khataName whenever the modal is closed
  useEffect(() => {
    if (!open) {
      setKhataName('');
    }
  }, [open]);

  const handleKhataNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputName = event.target.value;
    setKhataName(inputName);
    if (inputName === bookName) {
      setIsDeleteDisabled(false);
    } else {
      setIsDeleteDisabled(true);
    }
  };

  const handleClose = () => {
    setKhataName('');
    setIsDeleteDisabled(true);
    onClose();
  };

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <div style={MODAL_STYLE} className={classes.paper}>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />

        <img src={deleteIcon} alt="delete" className={deleteIcon} />

        <TextOverflowTooltip
          text={t('confirmation_modal_title', [bookName])}
          className={classes.title}
          arrow={true}
          placement="top-start"
        />
        <Typography className={classes.confirmationText}>
          {t('delete_khata_confirmation')}
        </Typography>
        <div className={classes.inputFieldWarper}>
          <Typography className={classes.deletionConfirmationText}>
            {t('are_you_sure_confirmation')}
          </Typography>
          <TextInputField
            name="deleteBook"
            value={khataName}
            onChangeHandler={handleKhataNameChange}
            placeholder={t('type_book_name_place_holder', [bookName])}
            style={{ width: '100%' }}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            size="small"
            onClick={handleClose}
            className={`${classes.button} ${classes.cancelButton}`}
          >
            {t('cancel')}
          </Button>
          <Button
            size="small"
            onClick={onDeleteClicked}
            className={`${classes.button} ${classes.deleteButton}`}
            disabled={isDeleteDisabled}
          >
            {t('delete')}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
export default memo(DeleteKhataConfirmationModal);
