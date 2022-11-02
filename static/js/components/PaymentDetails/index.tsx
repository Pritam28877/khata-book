// libs
import React, { memo, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

// components
import BreadCrumbs from '@routes/desktop/BreadCrumbs';
import PaymentProcessingTimeline from './components/PaymentProcessingTimeline';
import PaymentHeader from './components/PaymentHeader';
import PaymentDetailsCard from './components/PaymentDetailsCard';
import Loader from '@components/Loader';

//constants
import { MONEY_URI, PAYMENT_DETAILS } from 'src/constants/url';
import { PAYMENTS_TRANSACTIONS_TYPES } from '@components/PaymentHistory/constants';
import { COLORS_THEME } from '@styles/variables';

// web workers
import workerApi from 'src/webWorkers/Api';

// defs
import { IInvoiceValue } from '@webWorkers/DB/types';
import { IPaymentCharge } from 'src/types/payments';
// api
import { getPaymentCharges } from 'src/api/money';
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// analytics
import { onPaymentDetailsPageViewed } from 'src/components/Money/analytics';

// styles
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: '24px 24px 24px 15px',
  },

  paymentDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
  mainContent: {
    width: '100%',
    maxWidth: '820px',
    margin: 'auto',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '6px',
    marginTop: '16px',
  },
  section: {
    width: '100%',
    padding: '32px 36px',
    borderBottom: '1px solid #ECEEF1',
    '&:nth-of-type(2)': {
      padding: '20px 36px',
    },
    '&:last-child': {
      borderBottom: 'none',
      padding: '20px 0',
    },
  },
});

function PaymentDetails() {
  const classes = useStyles();

  const { t } = useLanguageContext();
  const { paymentId } = useParams<{ paymentId: string }>();

  const [invoice, setInvoice] = useState<IInvoiceValue>();

  const [paymentCharges, setPaymentCharges] = useState<IPaymentCharge[]>();
  const [isFetchingPayment, setIsFetchingPayment] = useState(true);

  const invoiceFromTransaction = invoice?.from[0]?.transactions[0];
  const invoiceToTransaction = invoice?.to[0]?.transactions[0];

  const breadCrumbsList = [
    {
      name: t('money'),
      href: MONEY_URI,
    },
    {
      name: t('transactions_list_exact'),
      href: MONEY_URI,
    },
    {
      name: t('payment_details'),
      href: PAYMENT_DETAILS,
    },
  ];
  const fetchInvoice = (paymentId: string) => {
    // @ts-ignore
    workerApi.getInvoice(paymentId).then((invoice) => {
      if (invoice) {
        setInvoice(invoice);
        setIsFetchingPayment(false);
      }
    });
  };

  const fetchPaymentCharges = async () => {
    const paymentCharges = await getPaymentCharges();
    if (paymentCharges) {
      setPaymentCharges(
        paymentCharges.sort(
          (charge1: IPaymentCharge, charge2: IPaymentCharge) =>
            charge1.position < charge2.position
        )
      );
    }
  };

  useEffect(() => {
    fetchInvoice(paymentId);

    fetchPaymentCharges();

    // analytics
    onPaymentDetailsPageViewed();
  }, [paymentId]);

  if (isFetchingPayment) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      <BreadCrumbs breadCrumbsList={breadCrumbsList} />
      {invoice && (
        <div className={classes.mainContent}>
          <div className={classes.section}>
            <PaymentHeader
              amount={invoice.to[0]?.total_amount || 0}
              totalFees={invoice.to[0]?.total_fee || 0}
              totalSettlementAmount={
                (invoice.from[0]?.total_amount || 0) -
                (invoice.to[0]?.total_fee || 0)
              }
              paymentFrom={invoice.from[0]?.name || ''}
            />
          </div>
          <div className={classes.section}>
            <PaymentDetailsCard
              khatabookTransactionId={invoice.order_id}
              paymentsTransactionId={
                invoiceFromTransaction?.txn_id ||
                invoiceToTransaction?.txn_id ||
                ''
              }
              to={invoice.to[0]?.name || ''}
              from={invoice.from[0]?.name || ''}
              paymentMode={
                invoiceFromTransaction?.method ||
                invoiceToTransaction?.method ||
                ''
              }
              fromAccountNumber={
                invoice.from[0].transactions[0]?.description || ''
              }
              toAccountNumber={invoice.to[0].transactions[0]?.description || ''}
              paymentCharges={paymentCharges}
            />
          </div>
          <div className={classes.section}>
            {invoice.journey.length > 0 && (
              <PaymentProcessingTimeline
                transactionType={
                  invoice.txn_mode || PAYMENTS_TRANSACTIONS_TYPES.QR
                }
                journey={invoice.journey}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default memo(PaymentDetails);
