// libs
import React, { memo, useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// material components
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// components
import RestoreWarningModal from '../RestoreWarningModal';
import RestoreModal from '../RestoreModal';
import TextOverflowTooltip from '@components/TextOverflowTooltip';
import CheckBox from 'src/components/Checkbox';

// defs
import { ICustomerValue, IDeletedCustomerValue } from 'src/webWorkers/DB/types';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { getDateTime } from 'src/helpers/utils/time';
import { isDeletedBook } from 'src/helpers/utils';
import { captureException } from 'src/helpers/sentry';
import { dispatchCustomerChange } from 'src/helpers/customEvents';
import { getBook } from '@webWorkers/DB/books';

// web worker
import workerApi from 'src/webWorkers/Api';

// contexts
import { useErrorContext } from 'src/components/ErrorBoundary/context';
import { useToastMessageContext } from '@components/ToastMessage/context';
import { useLanguageContext } from '@components/LanguageProvider/context';

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

interface ICustomerCard {
  customer: IDeletedCustomerValue;
  isMultipleSelectionEnabled: boolean;
  onSelect: (isSelected: boolean, customer: IDeletedCustomerValue) => void;
  selectAll: boolean;
  shouldUnSelectAll: boolean;
}

function CustomerCard({
  customer,
  isMultipleSelectionEnabled,
  onSelect,
  selectAll,
  shouldUnSelectAll,
}: ICustomerCard) {
  const classes = useStyles();
  const history = useHistory();
  const { showError } = useErrorContext();
  const { t } = useLanguageContext();
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

  const onUndoClick = async (customer: IDeletedCustomerValue) => {
    const isBookDeleted = await isDeletedBook(customer.book_id);
    if (isBookDeleted) {
      setShowWarningModal(true);
      setModalText({
        primaryText: t('khata_does_not_exist'),
        secondaryText: t('please_restore_khata_to_restore_customer'),
      });
    } else {
      setShowRestoreModal(true);

      setModalText({
        primaryText: t('restore_customer_confirmation'),
        secondaryText: t('this_may_change_balance'),
      });
    }

    // analytics
    onRecycleBinUndoClicked();
  };

  const onCustomerRestored = (customer: ICustomerValue) => {
    setShowRestoreModal(false);
    setToastMessage(t('customer_restored'));
    setToastType(TOAST_TYPE.SUCCESS);
    setShowViewButton(true);
    showToastMessage();
    setToastActionHandler(() => handleViewClick);
    setTimeout(() => {
      dispatchCustomerChange(customer);
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
      .restoreCustomer({
        customerId: customer.customer_id,
        user,
        deviceInfo,
        bookId: customer.book_id,
      })
      .then(() => {
        onCustomerRestored(customer);
      })
      .catch((e) => {
        showError();
        captureException(e, {
          tags: {
            module: SENTRY_TAG.RESTORE_CUSTOMER,
          },
        });
      });

    // analytics
    onRecycleBinRecoverClicked();
  };

  const handleViewClick = async () => {
    const currentBook = getCurrentBook();
    if (currentBook?.book_id === customer.book_id) {
      history.push(`/book`);
    } else {
      const book = await getBook(customer.book_id);
      if (book) {
        setBook(book);
        history.push(`/book`);
      }
    }
  };

  const handleSelectionChange = () => {
    setSelected(!selected);
    onSelect(!selected, customer);
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
          <Avatar className={classes.avatar} src={customer?.image || ''}>
            {getInitials(customer?.name || '')}
          </Avatar>
          <div className={classes.infoWrapper}>
            <TextOverflowTooltip
              text={customer?.book_name}
              className={`${classes.text} ${classes.bookName}`}
              arrow={true}
              placement="top-start"
            />
            <TextOverflowTooltip
              text={customer?.name}
              className={classes.title}
              arrow={true}
              placement="top-start"
            />
          </div>
        </div>
        <div className={classes.cardRightWrapper}>
          <Typography className={classes.text}>
            {customer?.updated_at && getDateTime(customer?.updated_at)}
          </Typography>
          {customer && !isMultipleSelectionEnabled && (
            <Button
              className={classes.undoButton}
              onClick={() => onUndoClick(customer)}
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

export default memo(CustomerCard);
