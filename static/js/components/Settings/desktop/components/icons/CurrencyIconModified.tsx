import { useCurrencyContext } from '@components/CurrencyProvider/context';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

interface ICurrencyIconModified {
  width: number;
  height: number;
  stroke: string;
}

function CurrencyIconModified(props: ICurrencyIconModified) {
  const { width, height, stroke } = props;
  const { currency } = useCurrencyContext();
  const lengthIsLarge = currency.length >= 3 ? true : false;

  const useStyles = makeStyles(() => ({
    iconSpan: {
      width,
      height,
      boxShadow: `inset 0px 0px 0px 2.5px ${stroke}`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: stroke,
      fontWeight: 'bold',
      fontSize: lengthIsLarge ? '8px' : '16px',
      userSelect: 'none',
      ...(lengthIsLarge ? { paddingBottom: '2px' } : { paddingTop: '2px' }),
    },
  }));
  const classes = useStyles();

  return <span className={classes.iconSpan}>{currency}</span>;
}

export default CurrencyIconModified;
