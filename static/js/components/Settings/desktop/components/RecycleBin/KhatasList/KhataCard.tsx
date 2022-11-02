// libs
import React, { memo, useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import RestoreModal from '../RestoreModal';
import TextOverflowTooltip from '@components/TextOverflowTooltip';
import CheckBox from 'src/components/Checkbox';

// defs
import { IBookValue } from 'src/webWorkers/DB/types';

// helpers

import { getDateTime } from 'src/helpers/utils/time';
import { captureException } from 'src/helpers/sentry';
import { dispatchBookChanged } from 'src/helpers/customEvents';

// icons
import deletedKhataIcon from 'src/assets/images/deletedKhataIcon.svg';

// contexts
import { useErrorContext } from 'src/components/ErrorBoundary/context';
import { useToastMessageContext } from '@components/ToastMessage/context';
import { useLanguageContext } from '@components/LanguageProvider/context';

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
import { setTimeout } from 'timers';

interface IKhataCard {
  book: IBookValue;
  isMultipleSelectionEnabled: boolean;
  onSelect: (isSelected: boolean, book: IBookValue) => void;
  selectAll: boolean;
  shouldUnSelectAll: boolean;
}

function TransactionCard({
  book,
  isMultipleSelectionEnabled,
  onSelect,
  selectAll,
  shouldUnSelectAll,
}: IKhataCard) {
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
  const { getUserInfo, getDeviceInfo } = useAppState();
  const { setBook } = useAppActions();

  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [selected, setSelected] = useState(selectAll || false);

  const [modalsText, setModalText] = useState({
    primaryText: '',
    secondaryText: '',
  });

  const onUndoClick = async (book: IBookValue) => {
    setShowRestoreModal(true);
    setModalText({
      primaryText: t('restore_khata_confirmation'),
      secondaryText: t('this_may_change_balance'),
    });

    // analytics
    onRecycleBinUndoClicked();
  };

  const onBookRestored = (book: IBookValue) => {
    setShowRestoreModal(false);
    setToastMessage(t('khata_restored'));
    setToastType(TOAST_TYPE.SUCCESS);
    setShowViewButton(true);
    showToastMessage();
    setToastActionHandler(() => () => {
      setBook(book);
      history.push(`/book`);
    });
    setTimeout(() => {
      dispatchBookChanged(book);
    }, 2000);
  };

  const handleCloseRestoreModal = useCallback(() => {
    setShowRestoreModal(false);
  }, []);

  const handleRestore = () => {
    const user = getUserInfo();
    const deviceInfo = getDeviceInfo();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    workerApi
      .restoreBook({
        bookId: book.book_id,
        user,
        deviceInfo,
      })
      .then((book) => {
        setBook(book);
        onBookRestored(book);
      })
      .catch((e) => {
        showError();
        captureException(e, {
          tags: {
            module: SENTRY_TAG.RESTORE_BOOK,
          },
        });
      });

    // analytics
    onRecycleBinRecoverClicked();
  };

  const handleSelectionChange = () => {
    setSelected(!selected);
    onSelect(!selected, book);
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
            className={`${classes.avatarWrapper} ${classes.bookIconWrapper}`}
          >
            <img
              src={deletedKhataIcon}
              className={classes.khataIcon}
              alt="deletedEntry"
            />
          </div>
          <div className={classes.infoWrapper}>
            <TextOverflowTooltip
              text={book.business_name}
              className={classes.title}
              arrow={true}
              placement="top-start"
            />
            <Typography className={classes.text}>
              {book?.updated_at && getDateTime(book?.updated_at)}
            </Typography>
          </div>
        </div>
        <div className={classes.cardRightWrapper}>
          {!isMultipleSelectionEnabled && (
            <Button
              className={classes.undoButton}
              onClick={() => onUndoClick(book)}
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
    </>
  );
}

export default memo(TransactionCard);
