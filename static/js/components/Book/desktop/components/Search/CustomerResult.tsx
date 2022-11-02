// libs
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

//material components
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// components
import TextOverflowTooltip from '@components/TextOverflowTooltip';

// helpers
import { getInitials } from 'src/helpers/utils/name';

// defs
import { ICustomer } from 'src/types/db';

// constants
import { INDIAN_COUNTRY_CODE } from 'src/constants/phone';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

// styles
import useStyles from './resultRowStyles';

interface ICustomerResult {
  customer: ICustomer;
  handleCloseSearch: VoidFunction;
}

function CustomerResult({ customer, handleCloseSearch }: ICustomerResult) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useLanguageContext();
  const customerPhone =
    customer?.phone && customer.phone.length > 0
      ? `${customer.country_code || INDIAN_COUNTRY_CODE} ${customer.phone}`
      : t('no_contact_number');

  const handleCustomerClick = () => {
    handleCloseSearch();
    history.push(`/book/${customer.customer_id}`);
  };
  return (
    <div className={classes.rowContainer} onClick={handleCustomerClick}>
      <div className={classes.result}>
        <Avatar
          className={`${classes.icon} ${classes.customerAvatar}`}
          src={customer.image}
        >
          {getInitials(customer.name)}
        </Avatar>
        <div className={classes.textWrapper}>
          <TextOverflowTooltip
            text={customer.name}
            className={classes.customerName}
            arrow={true}
            placement="top-start"
            isSearchResult={true}
          />
          <Typography className={classes.phone}>{customerPhone}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
}
export default memo(CustomerResult);
