// libs
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

// material components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import DeleteKhataConfirmationModal from './DeleteKhataConfirmationModal';

// icons
import ArrowIcon from './icons/ArrowIcon';
import BinIcon from './icons/BinIcon';
import LanguageIcon from './icons/LanguageIcon';
import BackupIcon from './icons/BackupIcon';
import LockIcon from './icons/LockIcon';

import { useLanguageContext } from '@components/LanguageProvider/context';
import { useToastMessageContext } from '@components/ToastMessage/context';

import CurrencyIconModified from './icons/CurrencyIconModified';
// analytics
import {
  onDeleteBookConfirmClicked,
  onSettingsDeleteKhataClicked,
} from '../analytics';

//constant
import { COLORS_THEME } from 'src/styles/variables';
import {
  RECYCLE_BIN_URI,
  LOGIN_URI,
  BOOKS_URI,
  SETTINGS_URI,
  CURRENCY_URI,
  BACKUP_INFO_URI,
  PASSWORD_LOCK_URI,
  LANGUAGE_SETTINGS_URI,
} from 'src/constants/url';
import { SENTRY_TAG } from 'src/constants/sentry';
import { LIST_TYPES } from '@components/Settings/desktop/components/RecycleBin/constants';
import { TOAST_TYPE } from 'src/components/ToastMessage/constants';

// worker api
import workerApi from '@webWorkers/Api';

// selectors
import { useAppState } from 'src/store/app/selectors';

// helpers
import { captureException } from 'src/helpers/sentry';
import { getUserInfo, getDeviceInfo } from 'src/helpers/user';
import { useAppActions } from '@store/app/actions';
import { dispatchBookDeleted } from 'src/helpers/customEvents';

// defs
import { IBookValue } from '@webWorkers/DB/types';

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    width: '390px',
    maxHeight: '758px',
    background: COLORS_THEME.WHITE,
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& .MuiList-padding': {
      padding: '0',
      '& > div:first-child': {
        borderRadius: '8px 8px 0 0',
      },
    },
  },
  listItem: {
    padding: '23px 24px 23px 32px',
  },
  active: {
    backgroundColor: `${COLORS_THEME.LIGHTER_BLUE} !important`,
  },
  listItemAvatar: {
    minWidth: 'unset',
  },
  listIcon: {
    width: '24px',
    height: '24px',
  },
  listItemText: {
    fontWeight: 500,
    fontSize: '18px',
    color: COLORS_THEME.TEXT_GREY,
    marginLeft: '24px',
  },
  deleteButton: {
    maxWidth: '326px',
    width: '100%',
    height: '44px',
    border: `1px solid ${COLORS_THEME.PRIMARY_COLOR}`,
    boxSizing: 'border-box',
    borderRadius: '10px',
    margin: '32px auto',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '16px',
    color: COLORS_THEME.PRIMARY_COLOR,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: `${COLORS_THEME.LIGHT_PRIMARY} !important`,
    },
    '&:disabled': {
      borderColor: COLORS_THEME.TEXT_DISABLED,
      color: COLORS_THEME.TEXT_DISABLED,
    },
  },
}));

interface ISideBarProps {
  onSettingsOptionChange: (index: string) => void;
}
function SideBar({ onSettingsOptionChange }: ISideBarProps) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useLanguageContext();
  const {
    showToastMessage,
    setToastMessage,
    setToastActionHandler,
    setShowViewButton,
    setToastType,
  } = useToastMessageContext();

  const { setBook } = useAppActions();
  const { getCurrentBook } = useAppState();
  const currentBook = getCurrentBook();

  const [showDeleteKhataModal, setShowDeleteKhataModal] = useState(false);

  const handleCloseDeleteKhataModal = () => setShowDeleteKhataModal(false);

  const handleDeleteKhataClick = () => {
    setShowDeleteKhataModal(true);
    // analytics
    onSettingsDeleteKhataClicked();
  };

  const onDeleteBookSuccess = (
    book: IBookValue,
    shouldCreateLedger: boolean
  ) => {
    setShowDeleteKhataModal(false);
    setToastMessage(t('khata_deleted'));
    setToastType(TOAST_TYPE.INFO);
    setShowViewButton(shouldCreateLedger ? false : true);
    showToastMessage();
    setToastActionHandler(() => () => {
      history.push({
        pathname: RECYCLE_BIN_URI,
        state: { selectedList: LIST_TYPES.KHATA },
      });
    });

    setTimeout(() => {
      dispatchBookDeleted(book);
      const historyLocationState = history.location.state as ArrayLike<unknown>;

      const isViewButtonClicked =
        history.location.pathname.includes(RECYCLE_BIN_URI) &&
        historyLocationState &&
        Object.values(historyLocationState).includes(LIST_TYPES.KHATA);

      // redirect to home page upon book deletion if toast message view button was not clicked
      if (
        !isViewButtonClicked &&
        getCurrentBook()?.deleted === 0 &&
        !shouldCreateLedger
      ) {
        history.push(BOOKS_URI);
      }
    }, 2000);
  };

  const deleteBook = async () => {
    const user = getUserInfo();
    const deviceInfo = getDeviceInfo();

    const bookId = currentBook?.book_id || '';

    // analytics
    onDeleteBookConfirmClicked();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    workerApi
      .deleteBook({
        user,
        deviceInfo,
        bookId,
      })
      .then((book) => {
        workerApi
          .getBooks()
          .then((booksData) => {
            const allBooks = booksData.filter((book) => book.deleted !== 1);
            // sort by created day in ascending order
            setBook(
              allBooks.sort((b1, b2) => {
                return Number(b1.created_at) - Number(b2.created_at);
              })[0]
            );
            onDeleteBookSuccess(book, allBooks.length === 0);
          })
          .catch((e) => {
            captureException(e, {
              tags: {
                module: SENTRY_TAG.BOOK_LISTING,
              },
              extra: {
                worker: 'GET_BOOKS',
              },
            });
          });
      })
      .catch((e) => {
        captureException(e, {
          tags: {
            module: SENTRY_TAG.DELETE_BOOK,
          },
        });
      });
  };

  const sideBarElements = [
    {
      id: 0,
      label: t('language'),
      icon: (
        <LanguageIcon
          width={24}
          height={24}
          stroke={
            history.location.pathname === LANGUAGE_SETTINGS_URI ||
            history.location.pathname === SETTINGS_URI
              ? COLORS_THEME.MID_BLUE
              : COLORS_THEME.TEXT_DISABLED
          }
        />
      ),
      disabled: false,
      url: SETTINGS_URI,
    },
    {
      id: 1,
      label: t('currency'),
      icon: (
        <CurrencyIconModified
          width={24}
          height={24}
          stroke={
            history.location.pathname === CURRENCY_URI
              ? COLORS_THEME.MID_BLUE
              : COLORS_THEME.TEXT_DISABLED
          }
        />
      ),
      disabled: false,
      url: CURRENCY_URI,
    },
    {
      id: 2,
      label: t('backup_title'),
      icon: (
        <BackupIcon
          width={24}
          height={24}
          stroke={
            history.location.pathname === BACKUP_INFO_URI
              ? COLORS_THEME.MID_BLUE
              : COLORS_THEME.TEXT_DISABLED
          }
        />
      ),
      disabled: false,
      url: BACKUP_INFO_URI,
    },
    {
      id: 3,
      label: 'Password Lock',
      icon: (
        <LockIcon width={24} height={24} stroke={COLORS_THEME.TEXT_DISABLED} />
      ),
      disabled: true,
      url: PASSWORD_LOCK_URI,
    },
    {
      id: 4,
      label: t('recycle_bin'),
      icon: (
        <BinIcon
          width={24}
          height={24}
          stroke={
            history.location.pathname === RECYCLE_BIN_URI
              ? COLORS_THEME.MID_BLUE
              : COLORS_THEME.TEXT_DISABLED
          }
        />
      ),
      disabled: false,
      url: RECYCLE_BIN_URI,
    },
  ];

  return (
    <div className={classes.sidebarContainer}>
      <List>
        {sideBarElements.map((option) => (
          <ListItem
            key={option.id}
            selected={option.url === history.location.pathname}
            classes={{
              root: classes.listItem,
              selected: classes.active,
            }}
            onClick={() => onSettingsOptionChange(option.url)}
            disabled={option.disabled}
            divider={true}
            button={true}
          >
            <ListItemAvatar
              classes={{
                root: classes.listItemAvatar,
              }}
            >
              {option.icon}
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.listItemText}>
                  {option.label}
                </Typography>
              }
            />
            <ListItemAvatar
              classes={{
                root: classes.listItemAvatar,
              }}
            >
              <ArrowIcon width={7} height={12} stroke="#9DABB6" />
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
      <Button
        type="button"
        className={classes.deleteButton}
        startIcon={
          <BinIcon width={17} height={20} stroke={COLORS_THEME.PRIMARY_COLOR} />
        }
        onClick={handleDeleteKhataClick}
      >
        {t('delete_khata')}
      </Button>

      <DeleteKhataConfirmationModal
        open={showDeleteKhataModal}
        onClose={handleCloseDeleteKhataModal}
        onDeleteClicked={deleteBook}
      />
    </div>
  );
}

export default SideBar;
