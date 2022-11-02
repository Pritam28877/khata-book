// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// components
import Currency from 'src/components/Currency';
import TextOverflowTooltip from '@components/TextOverflowTooltip';

//icons

// constants
import { COLORS_THEME } from 'src/styles/variables';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// styles
const useStyles = makeStyles({
  paymentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '@media only screen and (max-width: 800px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  group: {
    display: 'flex',
    width: '40%',
    margin: '0 12px',
  },
  rightGroup: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    marginRight: '32px',
    '@media only screen and (max-width: 800px)': {
      marginTop: '16px',
    },
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    marginRight: '8px',
  },
  avatar: {
    width: '100%',
    height: '100%',
    fontSize: '24px',
    fontWeight: 500,
    color: COLORS_THEME.MID_PRIMARY,
    backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
  },
  groupTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: COLORS_THEME.DARK_GREY,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
  },
  text: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
  },

  amount: {
    color: COLORS_THEME.SECONDARY1,
  },
});

interface IPaymentHeader {
  totalFees: number;
  amount: number;
  totalSettlementAmount: number;
  paymentFrom: string;
}

function PaymentHeader({
  totalFees,
  amount,
  totalSettlementAmount,
  paymentFrom,
}: IPaymentHeader) {
  const { t } = useLanguageContext();
  const classes = useStyles();
  return (
    <div className={classes.paymentHeader}>
      <div className={classes.group}>
        <div className={classes.iconWrapper}>
          <Avatar className={classes.avatar}>{getInitials(paymentFrom)}</Avatar>
        </div>
        <div>
          <TextOverflowTooltip
            text={paymentFrom}
            className={classes.groupTitle}
            arrow={true}
            placement="top-start"
          />
          <Typography className={classes.text}>
            <Currency /> {amount}
          </Typography>
        </div>
      </div>
      <div className={classes.rightGroup}>
        <div>
          <Typography className={classes.groupTitle}>
            <Currency /> {totalFees}
          </Typography>
          <Typography className={classes.text}>
            {t('banking_charges')}
          </Typography>
        </div>

        <div>
          <Typography className={`${classes.groupTitle} ${classes.amount}`}>
            <Currency /> {totalSettlementAmount}
          </Typography>
          <Typography className={classes.text}>
            {t('you_will_receive')}
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default memo(PaymentHeader);
