// libs
import React, { useState, useEffect } from 'react';

// material components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

// components
import Currency from 'src/components/Currency';

// worker api
import workerApi from 'src/webWorkers/Api';

// helpers
import { abbreviateAmount } from 'src/helpers/utils/amount';
import { useAppState } from 'src/store/app/selectors';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// icons
import netBalanceIcon from 'src/assets/images/netBalance.svg';
import bizAnalystIcon from 'src/assets/images/bizAnalystIcon.svg';

import arrowIcon from 'src/assets/images/leftArrow.svg';

// analytics
import { onHomeBannerClicked } from '../../analytics';

// styles
import useStyles from './styles';

interface IStatisticsSection {
  customersCount: number;
}

const StatisticsSection = ({ customersCount }: IStatisticsSection) => {
  const { t } = useLanguageContext();
  const classes = useStyles();
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);
  const [netBalance, setNetBalance] = useState(0);

  const { getCurrentBook } = useAppState();

  useEffect(() => {
    const book = getCurrentBook();

    const bookId = book?.book_id || '0';

    workerApi.getBookAggregations(bookId).then((data) => {
      setCredit(data.credit);
      setDebit(data.debit);
      setNetBalance(data.credit - data.debit);
    });
  }, [getCurrentBook]);

  return (
    <div className={classes.root}>
      <Paper className={`${classes.paper}`}>
        <div className={classes.group}>
          <img
            src={netBalanceIcon}
            alt="net balance"
            className={classes.netBalanceIcon}
          />
          <Typography
            className={`${classes.groupText} ${classes.netBalanceTitle}`}
          >
            {t('net_balance')}
          </Typography>
          <div
            className={`${classes.amount}  ${
              netBalance < 0
                ? classes.youWillGive
                : netBalance === 0
                ? classes.amount
                : classes.youWillGet
            }`}
          >
            <Currency /> {abbreviateAmount(Math.abs(Number(netBalance)))}
          </div>
          <Typography className={classes.groupText}>
            {customersCount === 0
              ? t('no_customers_yet')
              : netBalance > 0
              ? t('you_will_get')
              : t('you_will_give')}
          </Typography>
        </div>
        <div className={classes.statisticsWrapper}>
          <div className={classes.group}>
            <Typography className={classes.groupText}>
              {t('you_will_give')}
            </Typography>
            <div className={`${classes.amount} ${classes.youWillGive}`}>
              <Currency /> {abbreviateAmount(debit)}
            </div>
          </div>
          <Divider orientation="vertical" className={classes.amountDivider} />
          <div className={classes.group}>
            <Typography className={classes.groupText}>
              {t('you_will_get')}
            </Typography>
            <div className={`${classes.amount} ${classes.youWillGet}`}>
              <Currency /> {abbreviateAmount(credit)}
            </div>
          </div>
        </div>
      </Paper>
      <Paper className={`${classes.paper} ${classes.productsPaper}`}>
        <a
          className={classes.productItem}
          target="_blank"
          href={process.env.REACT_APP_BIZANALYST_LINK}
          rel="noopener noreferrer"
          onClick={() => onHomeBannerClicked('BizAnalyst')}
        >
          <img
            src={bizAnalystIcon}
            className={classes.productsIcon}
            alt="bizAnalyst"
          />
          <div className={classes.arrowWrapper}>
            <Typography className={classes.linkTitle}>
              {t('tally_on_mobile')}
            </Typography>
            <img src={arrowIcon} alt="arrow" className={classes.arrowIcon} />
          </div>
        </a>
      </Paper>
    </div>
  );
};

export default StatisticsSection;
