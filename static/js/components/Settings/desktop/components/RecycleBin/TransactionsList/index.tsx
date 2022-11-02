// libs
import React, { memo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// components
import TransactionCard from './TransactionCard';
import MultipleSelectionHeader from '../MultipleSelectionHeader';
import RestoreWarningModal from '../RestoreWarningModal';
import RestoreModal from '../RestoreModal';

// defs
import {
  IDeletedTransactionValue,
  ITransactionValue,
} from '@webWorkers/DB/types';

// helpers
import { isDeletedBook, isDeletedCustomer } from 'src/helpers/utils';
import { captureException } from 'src/helpers/sentry';
import { dispatchTransactionChange } from 'src/helpers/customEvents';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';
import { useErrorContext } from 'src/components/ErrorBoundary/context';
import { useToastMessageContext } from '@components/ToastMessage/context';

// web worker
import workerApi from 'src/webWorkers/Api';

// selectors
import { useAppState } from 'src/store/app/selectors';

// constants
import { SENTRY_TAG } from 'src/constants/sentry';
import { LOGIN_URI } from 'src/constants/url';
import { TOAST_TYPE } from 'src/components/ToastMessage/constants';

// analytics
import { onRecycleBinRecoverClicked } from '../../../analytics';
interface ITransactionsList {
  deletedTransactions: IDeletedTransactionValue[];
}

function TransactionsList({ deletedTransactions }: ITransactionsList) {
  const { t } = useLanguageContext();
  const { getUserInfo, getDeviceInfo } = useAppState();
  const { showError } = useErrorContext();
  const history = useHistory();
  const { showToastMessage, setToastMessage, setShowViewButton, setToastType } =
    useToastMessageContext();
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [shouldUnSelectAll, setShouldUnSelectAll] = useState(false);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [selectedTransactions, setSelectedTransactions] = useState<
    IDeletedTransactionValue[]
  >([]);
  const [modalsText, setModalText] = useState({
    primaryText: '',
    secondaryText: '',
  });

  const selectedCount = selectedTransactions.length;

  useEffect(() => {
    if (selectedTransactions.length === 0 && selectAll) {
      setSelectAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTransactions]);

  const onTransactionsRestored = (transaction: ITransactionValue) => {
    setToastMessage(t('entries_restored'));
    setToastType(TOAST_TYPE.SUCCESS);
    showToastMessage();
    setShowViewButton(false);
    setShowRestoreModal(false);
    setTimeout(() => {
      dispatchTransactionChange(transaction);
    }, 2000);
  };

  const handleMultipleSelectionClick = () => {
    setEnableMultipleSelection(!enableMultipleSelection);
  };

  const handleTransactionSelection = (
    isSelected: boolean,
    transaction: IDeletedTransactionValue
  ) => {
    let newlySelectedTransactions = selectedTransactions;
    if (isSelected) {
      newlySelectedTransactions = [...newlySelectedTransactions, transaction];
    } else {
      newlySelectedTransactions = newlySelectedTransactions.filter(
        (t) => t.transaction_id !== transaction.transaction_id
      );
    }
    setSelectedTransactions(newlySelectedTransactions);
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedTransactions(deletedTransactions);
      setSelectAll(true);
      setShouldUnSelectAll(false);
    } else {
      setSelectedTransactions([]);
      setSelectAll(false);
    }
  };

  const handleUnSelect = () => {
    setSelectedTransactions([]);
    setShouldUnSelectAll(true);
    setSelectAll(false);
  };

  const handleCloseModal = (
    closeModalHandler: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    closeModalHandler(false);
  };

  const handleRestoreAll = async () => {
    let isBookDeleted: boolean | undefined;
    let isCustomerDeleted: boolean | undefined;

    for (const transaction of selectedTransactions) {
      isBookDeleted = await isDeletedBook(transaction.book_id);
      isCustomerDeleted = await isDeletedCustomer(transaction.customer_id);
      if (isBookDeleted || isCustomerDeleted) {
        break;
      }
    }

    if (isBookDeleted) {
      setShowWarningModal(true);
      setModalText({
        primaryText: t('khatas_do_not_exist'),
        secondaryText: t('please_restore_khatas_to_restore_entries'),
      });
    } else if (isCustomerDeleted) {
      setShowWarningModal(true);
      setModalText({
        primaryText: t('customers_do_not_exist'),
        secondaryText: t('please_restore_customers_to_restore_enties'),
      });
    } else {
      setShowRestoreModal(true);
      setModalText({
        primaryText: t('restore_entries_confirmation'),
        secondaryText: t('this_may_change_balance'),
      });
    }
  };

  const handleRestore = () => {
    const user = getUserInfo();
    const deviceInfo = getDeviceInfo();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    const promises = selectedTransactions.map(async (transaction) => {
      return workerApi.restoreTransaction({
        transactionId: transaction?.transaction_id,
        user,
        deviceInfo,
      });
    });
    Promise.all(promises)
      .then(() => {
        onTransactionsRestored(selectedTransactions[0]);
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

  return (
    <div>
      <MultipleSelectionHeader
        selectAll={selectAll}
        onSelect={handleSelectAll}
        handleMultipleSelectionClick={handleMultipleSelectionClick}
        enableMultipleSelection={enableMultipleSelection}
        selectedCount={selectedCount}
        onUnSelect={handleUnSelect}
        handleRestore={handleRestoreAll}
      />
      {deletedTransactions.map((transaction) => (
        <TransactionCard
          key={transaction.transaction_id}
          transaction={transaction}
          isMultipleSelectionEnabled={enableMultipleSelection}
          onSelect={handleTransactionSelection}
          selectAll={selectAll}
          shouldUnSelectAll={shouldUnSelectAll}
        />
      ))}
      <RestoreModal
        open={showRestoreModal}
        onClose={() => handleCloseModal(setShowRestoreModal)}
        primaryText={modalsText.primaryText}
        secondaryText={modalsText.secondaryText}
        onRestoreClick={handleRestore}
      />
      <RestoreWarningModal
        open={showWarningModal}
        onClose={() => handleCloseModal(setShowWarningModal)}
        primaryText={modalsText.primaryText}
        secondaryText={modalsText.secondaryText}
      />
    </div>
  );
}
export default memo(TransactionsList);
