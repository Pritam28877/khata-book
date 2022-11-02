// libs
import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// global components
import Button from 'src/components/Button';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// helpers
import { isLongWordsLanguageSelected } from 'src/helpers/locale';

// icons
import addCustomerIcon from 'src/assets/images/addCustomerIcon.svg';

// constants
import { COLORS_THEME } from 'src/styles/variables';

// analytics
import { addNewCustomerClicked } from '../analytics';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  addCustomerBtn: {
    padding: '4px 12px 4px 10px',
    fontSize: '14px',
    textTransform: 'capitalize',
    color: COLORS_THEME.WHITE,
    backgroundColor: COLORS_THEME.DARK_PINK,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: COLORS_THEME.DARK_PINK,
      opacity: 0.8,
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: '#730135',
      opacity: 1,
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.DARK_PINK,
      color: COLORS_THEME.WHITE,
      opacity: 0.5,
    },
  },
  addCustomerIcon: {
    width: '16px',
    height: '16px',
    marginRight: '8px',
  },
  longTextStyle: {
    fontSize: '12px',
  },
}));

function AddCustomerButton() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const history = useHistory<{ [key: string]: boolean }>();

  const onClick = useCallback(() => {
    // analytics
    addNewCustomerClicked();

    history.push('/book/add-customer');
  }, [history]);

  return (
    <>
      <div className={classes.container}>
        <Button
          variant="contained"
          fullWidth
          className={`${classes.addCustomerBtn} ${
            isLongWordsLanguageSelected() ? classes.longTextStyle : ''
          }`}
          onClick={onClick}
        >
          <img
            src={addCustomerIcon}
            alt={t('add_customer')}
            className={classes.addCustomerIcon}
          />{' '}
          {t('add_customer')}
        </Button>
      </div>
    </>
  );
}

export default memo(AddCustomerButton);
