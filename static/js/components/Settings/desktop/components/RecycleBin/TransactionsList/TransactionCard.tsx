// libs
import React, { memo, useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import Currency from 'src/components/Currency';
import RestoreWarningModal from '../RestoreWarningModal';
import RestoreModal from '../RestoreModal';
import TextOverflowTooltip from '@components/TextOverflowTooltip';
import CheckBox from 'src/components/Checkbox';

// defs
import {
  IDeletedTransactionValue,
  ITransactionValue,
} from 'src/webWorkers/DB/types';

// helpers
import { abbreviateAmount } from 'src/helpers/utils/amount';
import { getDateTime } from 'src/helpers/utils/time';
import { isDeletedBook, isDeletedCustomer } from 'src/helpers/utils';
import { captureException } from 'src/helpers/sentry';
import { dispatchTransactionChange } from 'src/helpers/customEvents';
import { getBook } from '@webWorkers/DB/books';

// icons
import deletedEntryIcon from 'src/assets/images/deletedEntryIcon.svg';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';
import { useErrorContext } from 'src/components/ErrorBoundary/context';
import { useToastMessageContext } from '@components/ToastMessage/context';

// web worker
import workerApi from 'src/webWorkers/Api';

// selectors
import { useAppState } from 'src/store/app/selectors';

// actions
import { useAppActions } from 'src/store/app/actions';

// constants
import { LOGIN_URI } from 'src/constants/url';
import { SENTRY_TAG } from 'src/constants/sentry';
import { TOAST_TYPE } from 'src/components/ToastMessage/constants';

// analytics
import {
  onRecycleBinUndoClicked,
  onRecycleBinRecoverClicked,
} from '../../../analytics';

// styles
import useStyles from '../cardStyles';

interface IRecycleBinCard {
  transaction: IDeletedTransactionValue;
  isMultipleSelectionEnabled: boolean;
  onSelect: (
    isSelected: boolean,
    transaction: IDeletedTransactionValue
  ) => void;
  selectAll: boolean;
  shouldUnSelectAll: boolean;
}

function TransactionCard({
  transaction,
  isMultipleSelectionEnabled,
  onSelect,
  selectAll,
  shouldUnSelectAll,
}: IRecycleBinCard) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useLanguageContext();
  const { showError } = useErrorContext();
  const {
    showToastMessage,
    setToastMessage,
    setToastActionHandler,
    setShowViewButton,
    setToastType,
  } = useToastMessageContext();
  const { getUserInfo, getDeviceInfo, getCurrentBook } = useAppState();
  const { setBook } = useAppActions();

  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [selected, setSelected] = useState(selectAll || false);

  const [modalsText, setModalText] = useState({
    primaryText: '',
    secondaryText: '',
  });

  const onUndoClick = async (transaction: IDeletedTransactionValue) => {
    const isBookDeleted = await isDeletedBook(transaction.book_id);
    const isCustomerDeleted = await isDeletedCustomer(transaction.customer_id);

    if (isBookDeleted) {
      setShowWarningModal(true);
      setModalText({
        primaryText: t('khata_does_not_exist'),
        secondaryText: t('please_restore_khata_to_restore_entry'),
      });
    } else if (isCustomerDeleted) {
      setShowWarningModal(true);
      setModalText({
        primaryText: t('customer_does_not_exist'),
        secondaryText: t('please_restore_customer_to_restore_entry'),
      });
    } else {
      setShowRestoreModal(true);
      setModalText({
        primaryText: t('restore_entry_confirmation'),
        secondaryText: t('this_may_change_balance'),
      });
    }
    // analytics
    onRecycleBinUndoClicked();
  };

  const onTransactionRestored = (transaction: ITransactionValue) => {
    setShowRestoreModal(false);
    setToastMessage(t('entry_restored'));
    setToastType(TOAST_TYPE.SUCCESS);
    setShowViewButton(true);
    showToastMessage();
    setToastActionHandler(() => handleViewClick);
    setTimeout(() => {
      dispatchTransactionChange(transaction);
    }, 2000);
  };

  const handleCloseRestoreModal = useCallback(() => {
    setShowRestoreModal(false);
  }, []);

  const handleCloseWarningModal = useCallback(() => {
    setShowWarningModal(false);
  }, []);

  const handleRestore = () => {
    const user = getUserInfo();
    const deviceInfo = getDeviceInfo();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    workerApi
      .restoreTransaction({
        transactionId: transaction?.transaction_id,
        user,
        deviceInfo,
      })
      .then(() => {
        onTransactionRestored(transaction);
      })
      .catch((e) => {
        showError();
        captureException(e, {
          tags: {
            module: SENTRY_TAG.RESTORE_TRANSACTION,
          },
        });
      });

    // analytics
    onRecycleBinRecoverClicked();
  };
  const handleViewClick = async () => {
    const currentBook = getCurrentBook();
    if (currentBook?.book_id === transaction.book_id) {
      history.push(`/book/${transaction.customer_id}`);
    } else {
      const book = await getBook(transaction.book_id);
      if (book) {
        setBook(book);
        history.push(`/book/${transaction.customer_id}`);
      }
    }
  };

  const handleSelectionChange = () => {
    onSelect(!selected, transaction);
    setSelected(!selected);
  };

  useEffect(() => {
    if (shouldUnSelectAll) {
      setSelected(false);
    } else {
      setSelected(selectAll);
    }
  }, [selectAll, shouldUnSelectAll]);

  return (
    <>
      <div className={`${classes.card} ${selected && classes.selectedCard}`}>
        <div className={classes.cardLeftWrapper}>
          {isMultipleSelectionEnabled && (
            <CheckBox
              checked={selected}
              className={classes.checkbox}
              onChange={handleSelectionChange}
            />
          )}
          <div
            className={`${classes.avatarWrapper} ${classes.entryAvatarWrapper}`}
          >
            <img
              src={deletedEntryIcon}
              className={classes.entryIcon}
              alt="deletedEntry"
            />
          </div>
          <div className={classes.infoWrapper}>
            <TextOverflowTooltip
              text={transaction?.book_name}
              className={`${classes.text} ${classes.bookName}`}
              arrow={true}
              placement="top-start"
            />
            <TextOverflowTooltip
              text={transaction?.customer_name}
              className={classes.title}
              arrow={true}
              placement="top-start"
            />

            <Typography className={classes.text}>
              {transaction && transaction?.amount <= 0
                ? `${t('transactions_list_header_debit')}:`
                : `${t('transactions_list_header_credit')}:`}
              <span className={classes.amount}>
                <Currency />
                {abbreviateAmount(Math.abs(transaction?.amount || 0))}
              </span>
            </Typography>
          </div>
        </div>
        <div className={classes.cardRightWrapper}>
          <Typography className={classes.text}>
            {transaction?.updated_at && getDateTime(transaction?.updated_at)}
          </Typography>
          {transaction && !isMultipleSelectionEnabled && (
            <Button
              className={classes.undoButton}
              onClick={() => onUndoClick(transaction)}
            >
              {t('undo')}
            </Button>
          )}
        </div>
      </div>
      <RestoreModal
        open={showRestoreModal}
        onClose={handleCloseRestoreModal}
        primaryText={modalsText.primaryText}
        secondaryText={modalsText.secondaryText}
        onRestoreClick={handleRestore}
      />
      <RestoreWarningModal
        open={showWarningModal}
        onClose={handleCloseWarningModal}
        primaryText={modalsText.primaryText}
        secondaryText={modalsText.secondaryText}
      />
    </>
  );
}

export default memo(TransactionCard);
