// libs
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

//components
import Loader from '@components/Loader';
import DownloadQrCode from '@components/Money/DownloadQrCode';
import BreadCrumbs from '@routes/desktop/BreadCrumbs';
import OrderHasPlaced from './OrderQrCodeForm/OrderHasPlaced';

// selectors
import { useAppState } from '@store/app/selectors';
import { getDeviceInfo } from 'src/helpers/user';

// constants
import { MONEY_URI, ORDER_QR_URI } from 'src/constants/url';

// defs
import { IOrderQrData } from 'src/types/payments';

// api
import { getQrOrderPlaced } from 'src/api/money';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    padding: '32px 24px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
  },
  breadCrumbs: {
    marginBottom: '24px',
  },
  moneyContent: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    display: 'flex',
  },
  moneyContentFlex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function OrderQrCodePage(props: {}) {
  const { getCurrentBook } = useAppState();
  const {} = props;
  const classes = useStyles();
  const router = useHistory();
  const qrLocationState: any = router?.location?.state;
  const qrUrl = qrLocationState?.qrUrl;
  const { t } = useLanguageContext();
  const book = getCurrentBook();
  const deviceInfo = getDeviceInfo();
  const [qrOrderDetails, setQrOrderDetails] = useState<
    IOrderQrData | undefined
  >(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isQrCodeEnabled, setIsQrCodeEnabled] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const getOrderPlaced = async () => {
      if (book) {
        setLoading(true);
        try {
          const orderPlacedData: IOrderQrData = await getQrOrderPlaced(
            book?.book_id,
            deviceInfo
          );
          if (orderPlacedData) {
            setQrOrderDetails(orderPlacedData);
            if (
              orderPlacedData.qr_delivery_order ||
              orderPlacedData.all_qr_delivery_orders.length > 0
            ) {
              setOrderPlaced(true);
            }
            if (!orderPlacedData.qr_url) {
              setIsQrCodeEnabled(false);
            }
          }
          setLoading(false);
        } catch (e) {
          setLoading(false);
          setIsQrCodeEnabled(false);
        }
      }
      setLoading(false);
    };

    getOrderPlaced();

    //eslint-disable-next-line
  }, []);

  const breadCrumbsList = [
    {
      name: t('money'),
      href: MONEY_URI,
    },
    {
      name: t('paymenthistory_useqr'),
      href: ORDER_QR_URI,
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      <header>
        <div className={classes.breadCrumbs}>
          <BreadCrumbs breadCrumbsList={breadCrumbsList} />
        </div>
      </header>
      <div
        className={`${classes.moneyContent} ${
          orderPlaced ? '' : classes.moneyContentFlex
        }`}
      >
        {orderPlaced && qrOrderDetails ? (
          <OrderHasPlaced
            qrOrderDetails={qrOrderDetails}
            isQrCodeEnabled={isQrCodeEnabled}
            qrUrl={qrUrl || qrOrderDetails?.qr_url}
          />
        ) : null}
        <DownloadQrCode
          qrUrl={qrUrl || qrOrderDetails?.qr_url}
          isQrCodeEnabled={isQrCodeEnabled && (qrOrderDetails?.qr_url || qrUrl)}
        />
      </div>
    </div>
  );
}

export default OrderQrCodePage;
