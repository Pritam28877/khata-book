// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

// constants
import { COLORS_THEME, COLORS } from 'src/styles/variables';
import {
  PAYMENT_CHARGE_TYPES_MAP,
  PAYMENT_CHARGE_TYPES,
} from '@components/PaymentHistory/constants';

//icons
import AboutIcon from 'src/components/Book/desktop/components/icons/AboutIcon';
import moneyHandIcon from 'src/assets/images/moneyHand.svg';
import chargesIcon from 'src/assets/images/charges.svg';
import closeIcon from 'src/assets/images/closeModalIcon.svg';

// defs
import { IPaymentCharge } from 'src/types/payments';
import { useLanguageContext } from '@components/LanguageProvider/context';

// styles
const useStyles = makeStyles({
  modal: {
    height: '100%',
    display: 'flex',
  },
  paper: {
    position: 'relative',
    maxWidth: '630px',
    width: '100%',
    height: '100%',
    maxHeight: '555px',
    overflowY: 'auto',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '12px',
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    margin: 'auto',
  },
  headerWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ECEEF1',
    padding: '24px 40px 24px 40px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: COLORS_THEME.DARK_GREY,
  },
  closeIcon: {
    color: COLORS_THEME.GREY_BORDER,
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 40px 16px 40px',
  },
  warningContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    borderRadius: '6px',
    backgroundColor: COLORS.LIGHT_BLUE,
    marginBottom: '16px',
  },
  aboutIcon: {
    marginRight: '6px',
  },
  warningText: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '16px',
    borderBottom: '1px solid #ECEEF1',
  },
  title: {
    fontSize: '16px',
    fontWeight: 500,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    marginBottom: '4px',
  },
  moneyHandIconWrapper: {
    display: 'flex',
  },
  moneyHandIcon: {
    width: '20px',
    height: '20px',
    marginLeft: '8px',
  },
  titleDescription: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
  },
  group: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #ECEEF1',
    '&:last-child': {
      borderBottom: '0',
    },
  },
  infoText: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
  },
  percentage: {
    fontSize: '16px',
    fontWeight: 700,
    color: COLORS_THEME.DARK_GREY,
  },
  chargesIconWrapper: {
    display: 'flex',
  },

  chargesIcon: {
    width: '32px',
    height: '32px',
    marginRight: '8px',
  },
});

interface IChargesModal {
  open: boolean;
  onClose: VoidFunction;
  paymentCharges?: IPaymentCharge[];
}

function ChargesModal({ open, onClose, paymentCharges }: IChargesModal) {
  const { t } = useLanguageContext();
  const classes = useStyles();
  const renderChargeTitle = (type: string) => {
    return PAYMENT_CHARGE_TYPES_MAP[
      PAYMENT_CHARGE_TYPES[type as keyof typeof PAYMENT_CHARGE_TYPES]
    ];
  };

  return (
    <Modal
      open={open}
      className={classes.modal}
      onClose={onClose}
      disableScrollLock={true}
    >
      <div className={classes.paper}>
        <div className={classes.headerWrapper}>
          <div className={classes.chargesIconWrapper}>
            <img
              src={chargesIcon}
              alt={t('charges')}
              className={classes.chargesIcon}
            />
            <Typography className={classes.header}>{t('charges')}</Typography>
          </div>
          <img
            className={classes.closeIcon}
            src={closeIcon}
            alt="close"
            onClick={onClose}
          />
        </div>
        <div className={classes.mainContent}>
          <div className={classes.warningContainer}>
            <AboutIcon
              className={classes.aboutIcon}
              width={20}
              height={20}
              stroke={COLORS_THEME.MEDIUM_DARK_GREY}
            />
            <Typography className={classes.warningText}>
              {t('paymentcharges_payments')}
            </Typography>
          </div>
          <div className={classes.titleWrapper}>
            <Typography className={classes.title}>
              {t('payments_and_charges')}
            </Typography>
            <div className={classes.moneyHandIconWrapper}>
              <Typography className={classes.titleDescription}>
                {t('banking_charges_info_str')}
              </Typography>
              <img
                src={moneyHandIcon}
                className={classes.moneyHandIcon}
                alt="charges"
              />
            </div>
          </div>
          {paymentCharges?.map((charge, index) => (
            <div className={classes.group} key={index}>
              <Typography className={classes.infoText}>
                {renderChargeTitle(charge.type)}
              </Typography>
              <Typography className={classes.percentage}>
                {charge.fees}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
export default memo(ChargesModal);
