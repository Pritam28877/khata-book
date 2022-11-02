// libs
import React, { memo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// components
import KhataCard from './KhataCard';
import MultipleSelectionHeader from '../MultipleSelectionHeader';
import RestoreModal from '../RestoreModal';

// helpers
import { captureException } from 'src/helpers/sentry';
import { dispatchBookChanged } from 'src/helpers/customEvents';

// defs
import { IBookValue } from '@webWorkers/DB/types';

// web worker
import workerApi from 'src/webWorkers/Api';

// selectors
import { useAppState } from 'src/store/app/selectors';

// constants
import { SENTRY_TAG } from 'src/constants/sentry';
import { LOGIN_URI } from 'src/constants/url';
import { TOAST_TYPE } from 'src/components/ToastMessage/constants';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';
import { useErrorContext } from 'src/components/ErrorBoundary/context';
import { useToastMessageContext } from '@components/ToastMessage/context';

// actions
import { useAppActions } from 'src/store/app/actions';

// analytics
import { onRecycleBinRecoverClicked } from '../../../analytics';

interface IKhatasList {
  deletedBooks: IBookValue[];
}

function KhatasList({ deletedBooks }: IKhatasList) {
  const { t } = useLanguageContext();
  const { getUserInfo, getDeviceInfo } = useAppState();
  const { setBook } = useAppActions();
  const { showError } = useErrorContext();
  const history = useHistory();
  const { showToastMessage, setToastMessage, setShowViewButton, setToastType } =
    useToastMessageContext();
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [shouldUnSelectAll, setShouldUnSelectAll] = useState(false);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState<IBookValue[]>([]);
  const [modalsText, setModalText] = useState({
    primaryText: '',
    secondaryText: '',
  });

  useEffect(() => {
    if (selectedBooks.length === 0 && selectAll) {
      setSelectAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBooks]);

  const onBooksRestored = () => {
    setShowRestoreModal(false);
    setToastMessage(t('khatas_restored'));
    setToastType(TOAST_TYPE.SUCCESS);
    setShowViewButton(false);
    showToastMessage();
    setTimeout(() => {
      dispatchBookChanged();
    }, 2000);
  };

  const handleMultipleSelectionClick = () => {
    setEnableMultipleSelection(!enableMultipleSelection);
  };

  const handleBookSelection = (isSelected: boolean, book: IBookValue) => {
    let newlySelectedBooks = selectedBooks;
    if (isSelected) {
      newlySelectedBooks = [...newlySelectedBooks, book];
    } else {
      newlySelectedBooks = newlySelectedBooks.filter(
        (b) => b.book_id !== book.book_id
      );
    }
    setSelectedBooks(newlySelectedBooks);
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedBooks(deletedBooks);
      setSelectAll(true);
      setShouldUnSelectAll(false);
    } else {
      setSelectedBooks([]);
      setSelectAll(false);
    }
  };

  const handleUnSelect = () => {
    setSelectedBooks([]);
    setShouldUnSelectAll(true);
    setSelectAll(false);
  };

  const handleCloseModal = (
    closeModalHandler: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    closeModalHandler(false);
  };

  const handleRestoreAll = () => {
    setShowRestoreModal(true);
    setModalText({
      primaryText: t('restore_khata_confirmation'),
      secondaryText: t('this_may_change_balance'),
    });
  };

  const handleRestore = () => {
    const user = getUserInfo();
    const deviceInfo = getDeviceInfo();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    const promises = selectedBooks.map(async (book) => {
      return workerApi.restoreBook({
        bookId: book.book_id,
        user,
        deviceInfo,
      });
    });
    Promise.all(promises)
      .then((books) => {
        setBook(books[0]);
        onBooksRestored();
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
        selectedCount={selectedBooks.length}
        onUnSelect={handleUnSelect}
        handleRestore={handleRestoreAll}
      />
      {deletedBooks.map((book) => (
        <KhataCard
          key={book.book_id}
          book={book}
          isMultipleSelectionEnabled={enableMultipleSelection}
          onSelect={handleBookSelection}
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
    </div>
  );
}
export default memo(KhatasList);
