import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { COLORS_THEME } from 'src/styles/variables';

import { useLanguageContext } from '@components/LanguageProvider/context';
import CurrencyIconModified from './icons/CurrencyIconModified';
import CurrencyDropDown from '@components/CurrencyDropDown';
import { useCurrencyContext } from '@components/CurrencyProvider/context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '512px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  iconWrapper: {
    display: 'flex',
  },
  title: {
    fontWeight: 500,
    fontSize: '18px',
    color: COLORS_THEME.DARK_GREY,
    marginLeft: '16px',
  },
  selectedLang: {
    fontWeight: 500,
    fontSize: '16px',
    color: COLORS_THEME.MID_BLUE,
  },
}));

function CurrencySettings() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const { currency, currencyCountry } = useCurrencyContext();

  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <div className={classes.iconWrapper}>
          <CurrencyIconModified
            width={24}
            height={24}
            stroke={COLORS_THEME.MID_BLUE}
          />
          <Typography className={classes.title}>{t('currency')}</Typography>
        </div>
        <Typography className={classes.selectedLang}>
          {currencyCountry} Currency: {currency}
        </Typography>
      </div>
      <CurrencyDropDown fullWidth={false} />
    </div>
  );
}
export default CurrencySettings;
