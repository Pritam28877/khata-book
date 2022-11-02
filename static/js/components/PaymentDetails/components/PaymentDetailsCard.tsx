// libs
import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// components
import ChargesModal from './ChargesModal';

// icons
import transactionIdIcon from 'src/assets/images/transactionIdIcon.svg';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import {
  PAYMENT_METHODS_TYPES_MAP,
  PAYMENT_METHODS_TYPES,
} from '@components/PaymentHistory/constants';

// defs
import { IPaymentCharge } from 'src/types/payments';
import { useLanguageContext } from '@components/LanguageProvider/context';

// analytics
import { onPaymentDetailsViewChargesClicked } from 'src/components/Money/analytics';

// styles
const useStyles = makeStyles({
  paymentDetails: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '45% 1fr 1fr',
    '@media only screen and (max-width: 800px)': {
      gridTemplateColumns: '1fr',
      justifyContent: 'center',
    },
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    margin: '12px',
  },
  title: {
    fontSize: '14px',
    fontWeight: 400,
    color: COLORS_THEME.MEDIUM_GREY,
    marginBottom: '4px',
  },
  info: {
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
  },
  copyTransactionIdButton: {
    boxShadow: 'none',
    height: '20px',
    width: '20px',
    minWidth: 'unset',
    padding: '4px',
  },
  transactionIdIcon: {
    width: '16px',
    height: '16px',
  },
  displayFlex: {
    display: 'flex',
  },

  viewChargesButton: {
    border: '1px solid #DBE0E5',
    borderRadius: '6px',
    padding: '8px 16px',
    boxShadow: 'none',
    fontSize: '16px',
    color: COLORS_THEME.MID_BLUE,
    textTransform: 'capitalize',
    lineHeight: 'unset',
    maxWidth: '180px',
  },
  tooltipLabel: {
    fontSize: '12px',
  },
});

interface IPaymentHeader {
  khatabookTransactionId?: string | ' ';
  paymentsTransactionId?: string | '';
  to?: string | '';
  from?: string | '';
  paymentMode?: string | '';
  fromAccountNumber?: string | '';
  toAccountNumber?: string | '';
  paymentCharges?: IPaymentCharge[];
}

function PaymentDetailsCard({
  khatabookTransactionId,
  paymentsTransactionId,
  to,
  from,
  paymentMode,
  fromAccountNumber,
  toAccountNumber,
  paymentCharges,
}: IPaymentHeader) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const [openChargesModal, setOpenChargesModal] = useState(false);
  const [openCopiedTooltip, setOpenCopiedTooltip] = useState(false);

  const renderPaymentMethod = () => {
    switch (paymentMode) {
      case PAYMENT_METHODS_TYPES.UPI:
        return t(PAYMENT_METHODS_TYPES_MAP.UPI);
      case PAYMENT_METHODS_TYPES.CC:
        return t(PAYMENT_METHODS_TYPES_MAP.CC);
      case PAYMENT_METHODS_TYPES.DC:
        return t(PAYMENT_METHODS_TYPES_MAP.DC);
      case PAYMENT_METHODS_TYPES.NET_BANKING:
        return t(PAYMENT_METHODS_TYPES_MAP.NET_BANKING);
      case PAYMENT_METHODS_TYPES.RUPAY:
        return t(PAYMENT_METHODS_TYPES_MAP.RUPAY);
      case PAYMENT_METHODS_TYPES.WALLET:
        return t(PAYMENT_METHODS_TYPES_MAP.WALLET);
    }
  };

  const handleOpenChargesModal = () => {
    setOpenChargesModal(true);
    // analytics
    onPaymentDetailsViewChargesClicked();
  };
  const handleCloseChargesModal = () => setOpenChargesModal(false);
  const handleCopyTransactionID = () => {
    if (khatabookTransactionId) {
      navigator.clipboard.writeText(khatabookTransactionId);
      setOpenCopiedTooltip(true);
      setTimeout(() => {
        setOpenCopiedTooltip(false);
      }, 3000);
    }
  };

  const handleTooltipClose = () => setOpenCopiedTooltip(false);
  return (
    <div className={classes.paymentDetails}>
      <div className={classes.group}>
        <div className={classes.displayFlex}>
          <Typography className={classes.title}>
            {t('transactiondetail_kb_payment_id')}
          </Typography>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={openCopiedTooltip}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={`Copied: ${khatabookTransactionId}`}
              arrow
              classes={{ tooltip: classes.tooltipLabel }}
            >
              <Button
                className={classes.copyTransactionIdButton}
                onClick={handleCopyTransactionID}
              >
                <img
                  src={transactionIdIcon}
                  alt="transactionId"
                  className={classes.transactionIdIcon}
                />
              </Button>
            </Tooltip>
          </ClickAwayListener>
        </div>
        <Typography className={classes.info}>
          {khatabookTransactionId}
        </Typography>
      </div>
      <div className={classes.group}>
        <Typography className={classes.title}>
          {t('transactiondetail_transaction_id')}
        </Typography>
        <Typography className={classes.info}>
          {paymentsTransactionId}
        </Typography>
      </div>
      <div className={classes.group}>
        <Typography className={classes.title}>{t('payment_mode')}</Typography>
        <Typography className={classes.info}>
          {renderPaymentMethod()}
        </Typography>
      </div>
      <div className={classes.group}>
        <Typography className={classes.title}>
          {t('from')}: {from}
        </Typography>
        <Typography className={classes.info}>
          {t('account_number')}: {fromAccountNumber}
        </Typography>
      </div>
      <div className={classes.group}>
        <Typography className={classes.title}>
          {t('to')}: {to}
        </Typography>
        <Typography className={classes.info}>
          {t('account_number')}: {toAccountNumber}
        </Typography>
      </div>
      <div className={classes.group}>
        <Button
          className={classes.viewChargesButton}
          onClick={handleOpenChargesModal}
        >
          {t('view_charges')}
        </Button>
      </div>

      <ChargesModal
        open={openChargesModal}
        onClose={handleCloseChargesModal}
        paymentCharges={paymentCharges}
      />
    </div>
  );
}
export default memo(PaymentDetailsCard);
