// libs
import React, { memo, useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//material components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// global components
import Currency from 'src/components/Currency';
import KebabMenu from 'src/components/KebabMenu';
import EditCustomerModal from '../EditCustomerModal';
import DeletionConfirmationModal from 'src/components/DeletionConfirmationModal';
import TextOverflowTooltip from '@components/TextOverflowTooltip';

// defs
import { ICustomerValue } from 'src/webWorkers/DB/types';

// assets
import KebabMenuIcon from '../icons/KebabMenuIcon';

//constants
import { COLORS_THEME } from '@styles/variables';
import { SENTRY_TAG } from 'src/constants/sentry';
import { LOGIN_URI, RECYCLE_BIN_URI } from 'src/constants/url';
import { LIST_TYPES } from '@components/Settings/desktop/components/RecycleBin/constants';
import { TRANSACTION_TYPE } from 'src/components/Customer/TransactionForm/constants';
import { TOAST_TYPE } from 'src/components/ToastMessage/constants';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { getTimePassed } from 'src/helpers/utils/time';
import { abbreviateAmount } from 'src/helpers/utils/amount';
import { getUserInfo, getDeviceInfo } from 'src/helpers/user';
import {
  dispatchCustomerDeleted,
  dispatchCustomerChange,
} from 'src/helpers/customEvents';
import { captureException } from 'src/helpers/sentry';
import { isLongWordsLanguageSelected } from 'src/helpers/locale';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';
import { useToastMessageContext } from '@components/ToastMessage/context';

//analytics
import { onCustomerClicked } from '../../analytics';
import {
  onEditCustomerClicked,
  onDeleteCustomerClicked,
  onDeleteCustomerConfirmClicked,
  onDeleteCustomerCancelClicked,
} from 'src/components/Customer/analytics';
import { onAddTransactionClicked } from 'src/components/Book/desktop/analytics';

// webWorker
import workerApi from 'src/webWorkers/Api';

// styles
import useButtonStyles from '@styles/ButtonsStyles';

interface ICustomerRowProps {
  customer: ICustomerValue;
}

const useStyles = makeStyles({
  customersRow: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '&:hover': {
      boxShadow: '0px 1px 48px rgba(0, 0, 0, 0.07)',
    },
  },
  customersRowWrapper: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    width: '100%',
    '&:hover': {
      boxShadow: '0px 1px 48px rgba(0, 0, 0, 0.07)',
    },
    '@media only screen and (max-width: 1160px)': {
      flexDirection: 'column',
      margin: '8px 0',
    },
  },
  leftSideWrapper: {
    display: 'flex',
  },
  rightSideWrapper: {
    display: 'flex',
    alignItems: 'center',
    '@media only screen and (max-width: 1160px)': {
      flexDirection: 'column',
      margin: '8px 0',
    },
  },
  customerAvatar: {
    backgroundColor: COLORS_THEME.SECONDARY3,
    width: '40px',
    height: '40px',
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.WHITE,
    marginRight: '16px',
  },
  customerName: {
    fontSize: '16px',
    fontWeight: 500,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    marginBottom: '4x',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '120px',
  },
  rowText: {
    fontSize: '14px',
    color: '#A4A4A4',
  },
  amountWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: '20px',
    '@media only screen and (max-width: 1160px)': {
      maxWidth: '150px',
    },
  },
  actionsWrapper: {
    marginRight: '24px',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  actionBtn: {
    padding: '4px 17px',
    margin: '0 4px',
    whiteSpace: 'nowrap',
  },
  amountCell: {
    fontSize: '18px',
    color: COLORS_THEME.SECONDARY2,
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  youWillGetCell: {
    color: COLORS_THEME.DARK_PRIMARY,
    fontWeight: 'bold',
  },
  youWillGiveCell: {
    color: COLORS_THEME.DARK_GREEN,
    fontWeight: 'bold',
  },
  kebabMenuButton: {
    display: 'flex',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: '3px 10px',
    margin: '15px 12px 0 0',
    minWidth: 'unset',
    boxShadow: 'unset',
  },
  activeButton: {
    backgroundColor: COLORS_THEME.WHITE,
    boxShadow: COLORS_THEME.PAPER_SHADOW,
  },
  kebabMenuWrapper: {
    width: '24px',
    height: '24px',
    position: 'absolute',
    right: '22px',
    top: '15px',
  },
  divider: {
    backgroundColor: ' #ECEEF1',
    margin: '0 24px',
  },
  longTextStyle: {
    fontSize: '12px',
  },
  amountReducedMargin: {
    marginRight: '10px',
  },
});

function CustomerRow({ customer }: ICustomerRowProps) {
  const classes = useStyles();
  const btnClasses = useButtonStyles();
  const history = useHistory();
  const user = getUserInfo();
  const { t } = useLanguageContext();
  const {
    showToastMessage,
    setToastMessage,
    setToastActionHandler,
    setShowViewButton,
    setToastType,
  } = useToastMessageContext();

  const [isKebabMenuOpen, setIsKebabMenuOpen] = useState(false);
  const [showEditCustomerForm, setShowEditCustomerForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  const kebabMenuRef = useRef<HTMLButtonElement>(null);
  const { timeValue, timeTranslationKey } = getTimePassed(
    customer.last_transaction_time
  );

  const longTextClass = isLongWordsLanguageSelected()
    ? classes.longTextStyle
    : '';

  const handleCustomerClick = () => {
    history.push(`/book/${customer.customer_id}`);
    // analytics
    onCustomerClicked(customer);
  };

  const handleToggleKebabMenu = (event: React.MouseEvent<EventTarget>) => {
    event.stopPropagation();

    setIsKebabMenuOpen(!isKebabMenuOpen);
  };

  const handleCloseKebabMenu = (event: React.MouseEvent<EventTarget>) => {
    event.stopPropagation();
    if (
      kebabMenuRef.current &&
      kebabMenuRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setIsKebabMenuOpen(false);
  };

  const handleEditCustomer = useCallback(() => {
    setShowEditCustomerForm(!showEditCustomerForm);
    // analytics
    onEditCustomerClicked();
  }, [showEditCustomerForm]);

  const handleDeleteCustomer = useCallback(() => {
    setShowDeleteDialog(!showDeleteDialog);
    // analytics
    onDeleteCustomerClicked();
  }, [showDeleteDialog]);

  const handleCloseEditCustomerForm = () => {
    setShowEditCustomerForm(false);
  };
  const handleCancelDeleteCustomer = () => {
    setShowDeleteDialog(false);
    // analytics
    onDeleteCustomerCancelClicked();
  };

  const handleCloseDeleteDialog = () => setShowDeleteDialog(false);

  const handleViewDeletedCustomer = () => {
    history.push({
      pathname: RECYCLE_BIN_URI,
      state: { selectedList: LIST_TYPES.CUSTOMERS },
    });
  };

  const handleAddTransaction = (
    event: React.MouseEvent<EventTarget>,
    isCredit: boolean
  ) => {
    event.stopPropagation();
    if (isCredit) {
      // analytics
      onAddTransactionClicked({
        transaction_type: TRANSACTION_TYPE.CREDIT,
        customer_name: customer?.name,
        customer_Id: customer?.customer_id,
        user_id: user?.user_id,
      });

      history.push({
        pathname: `book/${customer.customer_id}/add`,
        state: { transactionType: TRANSACTION_TYPE.CREDIT },
      });
    } else {
      // analytics
      onAddTransactionClicked({
        transaction_type: TRANSACTION_TYPE.DEBIT,
        customer_name: customer?.name,
        customer_Id: customer?.customer_id,
        user_id: user?.user_id,
      });

      history.push({
        pathname: `book/${customer.customer_id}/add`,
        state: { transactionType: TRANSACTION_TYPE.DEBIT },
      });
    }
  };

  const deleteCustomer = () => {
    const user = getUserInfo();
    const deviceInfo = getDeviceInfo();
    setIsDeleteDisabled(true);
    // analytics
    onDeleteCustomerConfirmClicked();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    setShowDeleteDialog(false);

    workerApi
      .deleteCustomer({
        customerId: customer?.customer_id,
        user,
        deviceInfo,
        bookId: customer?.book_id,
      })
      .then((customer) => {
        onDeleteCustomerSuccess(customer);
      })
      .catch((e) => {
        // showError();
        captureException(e, {
          tags: {
            module: SENTRY_TAG.DELETE_CUSTOMER,
          },
        });
      });
  };

  const onEditCustomerSuccess = (customer: ICustomerValue) => {
    setShowEditCustomerForm(false);
    setShowViewButton(false);
    showToastMessage();
    setToastMessage(t('customer_updated'));
    setToastType(TOAST_TYPE.SUCCESS);
    setTimeout(() => {
      dispatchCustomerChange(customer);
    }, 2000);
  };

  const onDeleteCustomerSuccess = (customer: ICustomerValue) => {
    showToastMessage();
    setToastMessage(t('customer_deleted'));
    setToastType(TOAST_TYPE.INFO);
    setShowViewButton(true);
    setToastActionHandler(() => handleViewDeletedCustomer);

    setTimeout(() => {
      dispatchCustomerDeleted(customer);
    }, 2000);
    setIsDeleteDisabled(false);
  };

  const getAmountClass = (amount: number) => {
    if (amount === 0) {
      return classes.amountCell;
    }
    if (amount < 0) {
      return classes.youWillGetCell;
    }
    return classes.youWillGiveCell;
  };

  const getDealType = (amount: number) => {
    if (amount < 0) {
      return t('you_will_get');
    } else if (amount > 0) {
      return t('you_will_give');
    }
    return '-';
  };
  return (
    <div className={classes.customersRow} key={customer.customer_id}>
      <div
        className={classes.customersRowWrapper}
        onClick={handleCustomerClick}
        role="button"
      >
        <div className={classes.leftSideWrapper}>
          <Avatar className={classes.customerAvatar} src={`${customer.image}`}>
            {getInitials(customer.name)}
          </Avatar>
          <div>
            <TextOverflowTooltip
              text={customer.name}
              className={classes.customerName}
              arrow={true}
              placement="top-start"
              isSearchResult={true}
            />
            <Typography className={`${classes.rowText}  ${longTextClass}`}>
              {t(timeTranslationKey, [timeValue])}
            </Typography>
          </div>
        </div>
        <div className={classes.rightSideWrapper}>
          <div
            className={`${classes.amountWrapper} ${
              isLongWordsLanguageSelected() ? classes.amountReducedMargin : ''
            }`}
          >
            <Typography
              className={`${classes.amountCell} ${getAmountClass(
                customer.balance
              )}  ${longTextClass}`}
            >
              <Currency /> {abbreviateAmount(customer.balance)}
            </Typography>
            <Typography className={`${classes.rowText}  ${longTextClass}`}>
              {getDealType(customer.balance)}
            </Typography>
          </div>
          <div className={classes.actionsWrapper}>
            <Button
              className={`${classes.actionBtn} ${btnClasses.outlinedPrimaryBtn} ${longTextClass}`}
              onClick={(e) => handleAddTransaction(e, true)}
            >
              {t('transactions_list_header_debit')} <Currency />
            </Button>
            <Button
              className={`${classes.actionBtn} ${btnClasses.outlinedGreenBtn}  ${longTextClass}`}
              onClick={(e) => handleAddTransaction(e, false)}
            >
              {t('transactions_list_header_credit')} <Currency />
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.kebabMenuWrapper}>
        <Button
          className={`${classes.kebabMenuButton} ${
            isKebabMenuOpen && classes.activeButton
          }`}
          onClick={handleToggleKebabMenu}
          ref={kebabMenuRef}
          aria-controls={isKebabMenuOpen ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
        >
          <KebabMenuIcon
            width={4}
            height={18}
            stroke={COLORS_THEME.LIGHT_MEDIUM_GREY}
          />
        </Button>
        <KebabMenu
          open={isKebabMenuOpen}
          anchorEl={kebabMenuRef}
          handleCloseMenu={handleCloseKebabMenu}
          handleDelete={handleDeleteCustomer}
          handleEdit={handleEditCustomer}
          editText={t('edit_customer')}
          deleteText={t('delete_customer')}
        />
      </div>
      <EditCustomerModal
        open={showEditCustomerForm}
        onClose={handleCloseEditCustomerForm}
        customer={customer}
        onEditCustomerSuccess={onEditCustomerSuccess}
      />
      <DeletionConfirmationModal
        open={showDeleteDialog}
        onClose={handleCloseDeleteDialog}
        secondaryAction={handleCancelDeleteCustomer}
        primaryAction={deleteCustomer}
        primaryActionText={t('delete')}
        secondaryActionText={t('cancel')}
        title={t('delete_customer')}
        confirmationText={t('delete_customer_confirmation')}
        isDeleteDisabled={isDeleteDisabled}
      />
      <Divider className={classes.divider} />
    </div>
  );
}
export default memo(CustomerRow);
