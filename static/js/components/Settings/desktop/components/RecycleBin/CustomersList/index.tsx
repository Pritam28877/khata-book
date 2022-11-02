// libs
import React, { memo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// components
import CustomerCard from './CustomerCard';
import MultipleSelectionHeader from '../MultipleSelectionHeader';
import RestoreWarningModal from '../RestoreWarningModal';
import RestoreModal from '../RestoreModal';

// defs
import { ICustomerValue, IDeletedCustomerValue } from 'src/webWorkers/DB/types';

// helpers
import { isDeletedBook } from 'src/helpers/utils';
import { captureException } from 'src/helpers/sentry';
import { dispatchCustomerChange } from 'src/helpers/customEvents';

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

interface ICustomersList {
  deletedCustomers: IDeletedCustomerValue[];
}

function CustomersList({ deletedCustomers }: ICustomersList) {
  const { t } = useLanguageContext();
  const { getUserInfo, getDeviceInfo } = useAppState();
  const { showError } = useErrorContext();
  const history = useHistory();
  const { showToastMessage, setToastMessage, setToastType } =
    useToastMessageContext();
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [shouldUnSelectAll, setShouldUnSelectAll] = useState(false);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState<
    IDeletedCustomerValue[]
  >([]);
  const [modalsText, setModalText] = useState({
    primaryText: '',
    secondaryText: '',
  });

  useEffect(() => {
    if (selectedCustomers.length === 0 && selectAll) {
      setSelectAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCustomers]);

  const onCustomersRestored = (customer: ICustomerValue) => {
    setShowRestoreModal(false);
    setToastMessage(t('customers_restored'));
    setToastType(TOAST_TYPE.SUCCESS);
    showToastMessage();
    setTimeout(() => {
      dispatchCustomerChange(customer);
    }, 2000);
  };

  const handleMultipleSelectionClick = () => {
    setEnableMultipleSelection(!enableMultipleSelection);
  };

  const handleCustomerSelection = (
    isSelected: boolean,
    customer: IDeletedCustomerValue
  ) => {
    let newlySelectedCustomers = selectedCustomers;
    if (isSelected) {
      newlySelectedCustomers = [...newlySelectedCustomers, customer];
    } else {
      newlySelectedCustomers = newlySelectedCustomers.filter(
        (t) => t.customer_id !== customer.customer_id
      );
    }
    setSelectedCustomers(newlySelectedCustomers);
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedCustomers(deletedCustomers);
      setSelectAll(true);
      setShouldUnSelectAll(false);
    } else {
      setSelectedCustomers([]);
      setSelectAll(false);
    }
  };

  const handleUnSelect = () => {
    setSelectedCustomers([]);
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

    for (const customer of selectedCustomers) {
      isBookDeleted = await isDeletedBook(customer.book_id);
      if (isBookDeleted) {
        break;
      }
    }

    if (isBookDeleted) {
      setShowWarningModal(true);
      setModalText({
        primaryText: t('khatas_do_not_exist'),
        secondaryText: t('please_restore_khatas_to_restore_customers'),
      });
    } else {
      setShowRestoreModal(true);
      setModalText({
        primaryText: t('restore_customers_confirmation'),
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

    const promises = selectedCustomers.map(async (customer) => {
      return workerApi.restoreCustomer({
        customerId: customer.customer_id,
        user,
        deviceInfo,
        bookId: customer.book_id,
      });
    });
    Promise.all(promises)
      .then(() => {
        onCustomersRestored(selectedCustomers[0]);
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

  return (
    <div>
      <MultipleSelectionHeader
        selectAll={selectAll}
        onSelect={handleSelectAll}
        handleMultipleSelectionClick={handleMultipleSelectionClick}
        enableMultipleSelection={enableMultipleSelection}
        selectedCount={selectedCustomers.length}
        onUnSelect={handleUnSelect}
        handleRestore={handleRestoreAll}
      />
      {deletedCustomers.map((customer) => (
        <CustomerCard
          key={customer.customer_id}
          customer={customer}
          isMultipleSelectionEnabled={enableMultipleSelection}
          onSelect={handleCustomerSelection}
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
export default memo(CustomersList);
