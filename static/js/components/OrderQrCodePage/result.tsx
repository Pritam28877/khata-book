// libs
import React from 'react';
import { useHistory } from 'react-router';
import moment from 'moment';

// material components
import { makeStyles, Typography } from '@material-ui/core';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

// components
import BreadCrumbs from '@routes/desktop/BreadCrumbs';
import DownloadQrCode from '@components/Money/DownloadQrCode';

// icons
import phoneIcon from 'src/assets/images/phoneIcon.svg';
import addressIcon from 'src/assets/images/address.svg';

// constants
import { MONEY_URI, ORDER_DETAILS_URI } from 'src/constants/url';
import { COLORS_THEME, COLORS } from '@styles/variables';
import { CHAT_WITH_US_NUMBER } from 'src/constants/appInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    padding: '32px 24px 24px 24px',
    display: 'flex',
  },
  breadCrumbs: {
    marginBottom: '24px',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  content: {
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '6px',
    flexGrow: 1,
    marginRight: '24px',
  },

  title: {
    padding: '24px 40px',
    borderBottom: '1px solid #ECEEF1',
  },
  pageTitle: {
    fontSize: '18px',
    fontWeight: 500,
    color: COLORS_THEME.DARK_GREY,
  },
  orderDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 37px',
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '40px',
    marginBottom: '40px',
  },
  statusTitle: {
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    marginBottom: '4px',
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  addressTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: 500,
    marginBottom: '8px',
  },
  addressIcon: {
    width: '16px',
    height: '16px',
    marginRight: '8px',
  },
  infoText: {
    fontS: '14px',
    fontWeight: 400,
    color: COLORS_THEME.MEDIUM_GREY,
    lineHeight: '24px',
  },
  customerCareContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px',
    borderRadius: '6px',
    backgroundColor: COLORS.LIGHT_BLUE,
    width: 'fit-content',
    margin: 'auto',
  },
  contactText: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    margin: '8px 0 16px 0',
  },
  phoneNumber: {
    display: 'flex',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    color: COLORS_THEME.SECONDARY1,
  },
  phoneIcon: {
    width: '20px',
    height: '20px',
    marginRight: '8px',
  },
}));

function QrOrderResult() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const router = useHistory();
  const routerState: any = router.location.state;
  const orderData = routerState?.qrOrderDetails;
  const isQrCodeEnabled = routerState?.isQrCodeEnabled;
  const qrUrl = routerState?.isQrCodeEnabled;

  const breadCrumbsList = [
    {
      name: t('money'),
      href: MONEY_URI,
    },

    {
      name: t('qrcode_orderqrcode'),
      href: ORDER_DETAILS_URI,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <header>
          <div className={classes.breadCrumbs}>
            <BreadCrumbs breadCrumbsList={breadCrumbsList} />
          </div>
        </header>

        <div className={classes.content}>
          <div className={classes.title}>
            <Typography className={classes.pageTitle}>
              {t('qrcode_orderqrcode')}
            </Typography>
          </div>
          <div className={classes.orderDetails}>
            <div className={classes.flexContainer}>
              <div className={classes.group}>
                <Typography className={classes.statusTitle}>
                  {t('myqrcode_status')}:
                </Typography>
                <Typography className={classes.infoText}>
                  {orderData?.qr_delivery_order?.status}
                </Typography>
              </div>
              <div className={classes.group}>
                <Typography className={classes.statusTitle}>
                  {t('order_delivery_date')}:
                </Typography>
                <Typography className={classes.infoText}>
                  {moment(orderData?.qr_delivery_order?.created_at).format(
                    'DD/MM/YYYY - hh:mm A'
                  )}
                </Typography>
              </div>
            </div>
            <div className={classes.flexContainer}>
              <div className={classes.addressContainer}>
                <Typography className={classes.addressTitle}>
                  <img
                    src={addressIcon}
                    alt="address"
                    className={classes.addressIcon}
                  />{' '}
                  {t('qrcode_shippingaddress')}
                </Typography>
                <Typography className={classes.infoText}>
                  {orderData?.qr_delivery_order?.address?.address_line_1}
                </Typography>
                <Typography className={classes.infoText}>
                  {orderData?.qr_delivery_order?.address?.address_line_2}
                </Typography>
                <Typography className={classes.infoText}>
                  {' '}
                  {orderData?.qr_delivery_order?.address?.landmark}-{' '}
                  {orderData?.qr_delivery_order?.address?.building_number}{' '}
                </Typography>
                <Typography className={classes.infoText}>
                  {' '}
                  {orderData?.qr_delivery_order?.address?.city} -{' '}
                  {orderData?.qr_delivery_order?.address?.pincode}
                </Typography>
                <Typography className={classes.infoText}>
                  {' '}
                  {orderData?.qr_delivery_order?.address?.state}
                </Typography>
              </div>
              <div className={classes.customerCareContainer}>
                <Typography className={classes.addressTitle}>
                  {t('qrcode_reordermessage')}
                </Typography>
                <Typography className={classes.contactText}>
                  {t('qrcode_customercare')}
                </Typography>
                <a
                  href={`tel:${CHAT_WITH_US_NUMBER}`}
                  className={classes.phoneNumber}
                >
                  <img
                    src={phoneIcon}
                    alt="phone icon"
                    className={classes.phoneIcon}
                  />
                  {CHAT_WITH_US_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadQrCode
        qrUrl={orderData?.qr_url || qrUrl}
        isQrCodeEnabled={isQrCodeEnabled && (orderData?.qr_url || qrUrl)}
      />
    </div>
  );
}

export default QrOrderResult;
