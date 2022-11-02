// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';

// components
import AddCustomerButton from '../AddCustomerButton';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

// icons
import customerIcon from 'src/assets/images/customerIcon.svg';

// styles
const useStyles = makeStyles({
  emptyCustomerState: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '205px',
    height: '140px',
    marginBottom: '15px',
    marginLeft: '35px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '16px',
  },
});

function EmptyCustomersState() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  return (
    <div className={classes.emptyCustomerState}>
      <img src={customerIcon} alt="add customers" className={classes.icon} />
      <Typography className={classes.text}>{t('add_customers')}</Typography>
      <AddCustomerButton />
    </div>
  );
}
export default memo(EmptyCustomersState);
