// libs
import React from 'react';
import { useHistory } from 'react-router';

// material components
import { Button, makeStyles, Typography } from '@material-ui/core';

// icons
import correctionIcon from 'src/assets/images/correction1.svg';

// constant
import { ORDER_DETAILS_URI } from 'src/constants/url';

// context
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// analytics
import { onQRCodeViewOrderClicked } from 'src/components/Money/analytics';
// defs
import { IOrderQrData } from 'src/types/payments';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    padding: '32px 24px 24px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '48px',
    letterSpacing: '0.2px',
    color: '#2B2F32',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    color: '#94979B',
    textAlign: 'center',
    marginTop: '24px',
    marginBottom: '24px',
  },
  correctionIcon: {
    marginBottom: '40px',
  },
  orderBtn: {
    width: '255px',
    height: '43px',
    textTransform: 'none',
  },
  blurredRoot: {
    opacity: 0.5,
  },
}));

function OrderHasPlaced({
  qrOrderDetails,
  isQrCodeEnabled,
  qrUrl,
}: {
  qrOrderDetails: IOrderQrData;
  isQrCodeEnabled: boolean;
  qrUrl: string;
}) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useLanguageContext();

  return (
    <div
      className={`${classes.root} ${
        !isQrCodeEnabled ? classes.blurredRoot : ''
      }`}
    >
      <img
        src={correctionIcon}
        alt="correction icon"
        className={classes.correctionIcon}
      />

      <Typography className={classes.title}>
        {t('qrcode_orderplaced')}
      </Typography>
      <Typography className={classes.subTitle}>
        {t('myqrcode_orderdetails', [
          qrOrderDetails.qr_delivery_order?.created_at || '',
        ])}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.orderBtn}
        disabled={!isQrCodeEnabled}
        onClick={() => {
          // analytics
          onQRCodeViewOrderClicked();
          history.push(ORDER_DETAILS_URI, {
            qrOrderDetails,
            isQrCodeEnabled,
            qrUrl,
          });
        }}
      >
        {t('qrcode_vieworder')}
      </Button>
    </div>
  );
}

export default OrderHasPlaced;
