// libs
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

//material components
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// components
import TextOverflowTooltip from '@components/TextOverflowTooltip';
import Currency from '@components/Currency';

// icons
import linkTransactionIcon from 'src/assets/images/linkTransactionIcon.svg';
import giftTransactionIcon from 'src/assets/images/giftIcon.svg';
import qrCodeIcon from 'src/assets/images/qrCodeIcon.svg';

// defs
import { IInvoiceValue } from '@webWorkers/DB/types';

// helpers
import { roundAmount, formatAmount } from 'src/helpers/utils/amount';

// constants
import { PAYMENT_DETAILS } from 'src/constants/url';
import { PAYMENTS_TRANSACTIONS_TYPES } from 'src/components/PaymentHistory/constants';

// styles
import useStyles from './resultRowStyles';

interface IInvoiceResult {
  invoice: IInvoiceValue;
  handleCloseSearch: VoidFunction;
}

function InvoiceResult({ invoice, handleCloseSearch }: IInvoiceResult) {
  const classes = useStyles();
  const history = useHistory();

  const handleInvoiceClick = () => {
    handleCloseSearch();
    history.push(`${PAYMENT_DETAILS}/${invoice.invoice_id}`);
  };

  const renderTransactionTypeIcon = (transactionType: string) => {
    switch (transactionType) {
      case PAYMENTS_TRANSACTIONS_TYPES.LINK:
        return (
          <img
            src={linkTransactionIcon}
            alt="link transaction"
            className={classes.icon}
          />
        );
      case PAYMENTS_TRANSACTIONS_TYPES.GIFT:
        return (
          <img
            src={giftTransactionIcon}
            alt="gift transaction"
            className={classes.icon}
          />
        );
      default:
        return <img src={qrCodeIcon} alt="qr code" className={classes.icon} />;
    }
  };

  return (
    <div className={classes.rowContainer} onClick={handleInvoiceClick}>
      <div className={classes.result}>
        {renderTransactionTypeIcon(invoice.txn_mode)}
        <div className={classes.textWrapper}>
          <TextOverflowTooltip
            text={invoice.from[0].name}
            className={classes.customerName}
            arrow={true}
            placement="top-start"
            isSearchResult={true}
          />
          <Typography className={classes.phone}>
            <Currency />{' '}
            {formatAmount(roundAmount(Math.abs(invoice.from[0].total_amount)))}
          </Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
}
export default memo(InvoiceResult);
