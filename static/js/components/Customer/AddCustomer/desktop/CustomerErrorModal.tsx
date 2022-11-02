// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// constants
import { MODAL_STYLE, COLORS_THEME, PIXEL_SIZE } from 'src/styles/variables';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

interface IEditCustomerModal {
  open: boolean;
  onClose: () => void;
  errorMessage: string;
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '302px',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '15px',
    boxShadow: COLORS_THEME.GREY_SHADOW,
    padding: '50px 32px ',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    textAlign: 'center',
    marginBottom: '20px',
  },
}));

function CustomerErrorModal({
  onClose,
  open,
  errorMessage,
}: IEditCustomerModal) {
  const { t } = useLanguageContext();
  const classes = useStyles();
  return (
    <Modal onClose={onClose} open={open}>
      <div style={MODAL_STYLE} className={classes.paper}>
        <Typography className={classes.info}>{errorMessage}</Typography>
        <Button fullWidth variant="contained" color="primary" onClick={onClose}>
          {t('try_again')}
        </Button>
      </div>
    </Modal>
  );
}
export default memo(CustomerErrorModal);
