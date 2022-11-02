// libs
import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';

// material components
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// components
import TextOverflowTooltip from '@components/TextOverflowTooltip';
import BookListing from './BookListing';

// constants
import {
  COLORS,
  PIXEL_SIZE,
  FONTWEIGHT,
  DWEB_SIDEBAR_WIDTH,
  COLORS_THEME,
} from 'src/styles/variables';
import {
  BOOKS_URI,
  SETTINGS_URI,
  ABOUT_US_URI,
  MONEY_URI,
  REPORTS_URI,
} from 'src/constants/url';
import { SENTRY_TAG } from 'src/constants/sentry';
import { CHAT_WITH_US_NUMBER } from 'src/constants/appInfo';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';
import { useSearchContext } from '@components/SearchProvider/context';

// selectors
import { useAppState } from 'src/store/app/selectors';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { captureException } from 'src/helpers/sentry';
import { isLongWordsLanguageSelected } from 'src/helpers/locale';
import { isIndianPhoneNumberUser } from 'src/helpers/user';
import { getCurrentStoredBook } from 'src/helpers/data';
import {
  listenBookChanged,
  listenBookDeleted,
} from 'src/helpers/customEvents/listeners';

// analytics
import { onSidebarItemClicked, onAddNewLedgerClicked } from '../analytics';

// icons
import MobileIcon from './icons/MobileIcon';
import MoneyIcon from './icons/MoneyIcon';
import SettingsIcon from './icons/SettingsIcon';
import AboutIcon from './icons/AboutIcon';
import SidebarLogo from '@components/Logo/SidebarLogo';
import PlusIcon from './icons/PlusIcon';
import HomeIcon from './icons/HomeIcon';
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';
import activeBorder from 'src/assets/images/activeStatus.svg';

// worker api
import workerApi from 'src/webWorkers/Api';

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    left: 0,
    width: `${DWEB_SIDEBAR_WIDTH}px`,
    zIndex: 9,
    backgroundColor: COLORS.LIGHT_BLUE,
    position: 'sticky',
    top: 1,
    maxHeight: '100vh',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '3px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '24px 16px 16px 16px',
  },
  upperWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '15px',
  },
  menuIcon: {
    width: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    borderRight: `1px solid ${COLORS.GREY}`,
    borderRadius: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    border: `1px solid ${COLORS_THEME.LIGHT_GREY}`,
    borderRadius: '4px',
    padding: '12px 16px 12px 12px',
    '&:hover': {
      borderColor: COLORS_THEME.MID_BLUE,
      backgroundColor: 'transparent',
    },
  },
  bookingListWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItemContainer: {
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    cursor: 'pointer',
    alignItems: 'center',
    position: 'relative',
  },
  activeItem: {
    '&::after': {
      content: `url(${activeBorder})`,
      height: '48px',
      width: '4px',
      position: 'absolute',
      left: '0px',
      top: '28px',
      transform: 'translateY(-50%)',
    },
    '& .MuiListItem-root': {
      backgroundColor: 'rgba(66, 136, 222,0.1)',
    },
    '& $listItemText': {
      fontWeight: 500,
      color: COLORS_THEME.SECONDARY_COLOR,
    },
  },
  nonActiveItem: {
    color: COLORS_THEME.TEXT_DISABLED,
  },
  headerLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignContent: 'center',
    paddingBottom: '24px',
  },
  headerIcon: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    alignItems: 'center',
  },
  arrowIconDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    color: COLORS_THEME.MEDIUM_GREY,
  },
  headerText: {
    fontSize: `${PIXEL_SIZE['18px']}rem`,
    fontWeight: FONTWEIGHT.BOLD,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '120px',
    color: COLORS_THEME.DARK_GREY,
    textAlign: 'left',
  },
  listItemText: {
    fontSize: '16px',
    whiteSpace: 'nowrap',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
  },
  popOver: {
    top: '81px',
    left: '71px',
    boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.12)',
  },
  bookAvatar: {
    backgroundColor: COLORS_THEME.SECONDARY_COLOR,
    width: '44px',
    height: '44px',
    fontSize: '24px',
    fontWeight: 500,
  },
  addLedgerButton: {
    width: '100%',
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: '14px',
    boxShadow: 'none',
    padding: '18px 0',
    borderTop: '1px solid #DBE0E5',
    borderRadius: '0',
  },
  plusIcon: {
    marginRight: '10px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_BLUE,
    wordBreak: 'break-all',
    padding: '8px 12px',
    borderRadius: '4px',
    margin: '4px 0',
    '&:hover': {
      backgroundColor: COLORS.WHITE,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: '32px',
    },
  },
  modifyGutters: {},
  bottomSection: {
    marginTop: '2px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bottomCTA: {
    textAlign: 'center',
    color: COLORS_THEME.TEXT_GREY,
  },
  listContainer: {
    flexGrow: 1,
  },
  scrollableSection: {
    overflowY: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  customersCount: {
    color: COLORS_THEME.TEXT_DISABLED,
  },
  longLanguageText: {
    wordBreak: 'break-all',
    whiteSpace: 'normal',
  },
  popper: {
    zIndex: 5,
  },
  bookListingPaper: {
    width: '208px',
    maxHeight: '324px',
    background: COLORS_THEME.WHITE,
    border: '1px solid #DBE0E5',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
    marginTop: '8px',
  },
  longWordsAddBtn: {
    fontSize: '10px',
    whiteSpace: 'nowrap',
  },
}));

interface IHeader {
  handleAddNewLedger: Function;
}

function Header({ handleAddNewLedger }: IHeader) {
  const classes = useStyles();
  const { getCurrentBook } = useAppState();
  const [book, setBook] = useState(getCurrentBook());
  const { t } = useLanguageContext();
  const { searchText, setSearchText } = useSearchContext();
  const bookName = book?.business_name || book?.book_name || '';
  const bookImage = book?.business_image || '';
  const history = useHistory<{ [key: string]: boolean }>();
  const [showBookListing, setShowBookListing] = useState(false);
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const bookListingRef = useRef<HTMLButtonElement>(null);
  const [bookDeleted, setBookDeleted] = useState<string>('');
  const [bookCustomersCount, setBookCustomersCount] = useState(0);

  const isSearchApplied = searchText.length > 0;

  useEffect(() => {
    const fetchCurrentBook = async () => {
      const currentBook = await getCurrentStoredBook();
      if (currentBook) {
        setBook(currentBook);
      }
    };
    fetchCurrentBook();
  }, []);

  listenBookChanged((newBook) => {
    if (newBook) {
      setBook(newBook);
    }
  });

  const executeScroll = () => {
    if (scrollableSectionRef && scrollableSectionRef.current) {
      scrollableSectionRef.current.scrollTop = 0;
    }
  };

  const toggleBookListing = useCallback(() => {
    setShowBookListing(!showBookListing);
    executeScroll();
  }, [showBookListing]);

  const handleCloseBookListing = (event: React.MouseEvent<EventTarget>) => {
    if (
      bookListingRef.current &&
      bookListingRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setShowBookListing(false);
  };

  const handleListItemClick = (uri: string) => {
    // clear search text upon route change
    if (isSearchApplied) {
      setSearchText('');
    }
    history.replace(uri);
    // analytics
    switch (uri) {
      case MONEY_URI:
        onSidebarItemClicked(CUSTOM_EVENTS.HomeSidebarMoneyClick);
        break;
      case REPORTS_URI:
        onSidebarItemClicked(CUSTOM_EVENTS.HomeSidebarReportsClick);
        break;
      case SETTINGS_URI:
        onSidebarItemClicked(CUSTOM_EVENTS.HomeSidebarSettingsClick);
        break;
      case ABOUT_US_URI:
        onSidebarItemClicked(CUSTOM_EVENTS.BookProfileAboutUsClick);
        break;
    }
  };

  useEffect(() => {
    if (book) {
      workerApi
        .getCustomerCount(book.book_id)
        .then((count) => {
          setBookCustomersCount(count);
        })
        .catch((e) => {
          captureException(e, {
            tags: {
              module: SENTRY_TAG.BOOK_LISTING,
            },
            extra: {
              worker: 'GET_CUSTOMER_COUNT',
            },
          });
          return 0;
        });
    }
  }, [book]);

  useEffect(() => {
    const unsubscribeBookDeletedEvent = listenBookDeleted((book) => {
      setBookDeleted(book?.book_id);
    });
    return () => {
      unsubscribeBookDeletedEvent();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogoClick = () => {
    if (history.location.pathname === BOOKS_URI) {
      window.location.reload();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.upperWrapper}>
        <div className={classes.headerLogoContainer}>
          <Link to={BOOKS_URI} onClick={handleLogoClick}>
            <SidebarLogo width={113} height={24} />
          </Link>
        </div>
        <IconButton
          onClick={toggleBookListing}
          aria-label="downArrow"
          className={classes.content}
          ref={bookListingRef}
        >
          <Avatar className={classes.bookAvatar} src={bookImage}>
            {getInitials(bookName)}
          </Avatar>

          <div className={classes.bookingListWrapper}>
            <TextOverflowTooltip
              text={bookName}
              className={classes.headerText}
              arrow={true}
              placement="top-start"
            />

            <Typography
              className={classes.customersCount}
            >{`${bookCustomersCount} ${t('customers', [''])}`}</Typography>
          </div>
          <div className={classes.arrowIconDiv}>
            {showBookListing ? (
              <KeyboardArrowUpIcon className={classes.arrowIcon} />
            ) : (
              <KeyboardArrowDownIcon className={classes.arrowIcon} />
            )}
          </div>
        </IconButton>
        <Popper
          open={showBookListing}
          anchorEl={bookListingRef.current}
          role={undefined}
          className={classes.popper}
          transition
          placement={'bottom'}
          disablePortal
        >
          <Paper className={classes.bookListingPaper}>
            <ClickAwayListener onClickAway={handleCloseBookListing}>
              <div>
                <BookListing
                  bookDeleted={bookDeleted}
                  toggleBookListing={toggleBookListing}
                />
                <Button
                  className={`${classes.addLedgerButton} ${
                    isLongWordsLanguageSelected() ? classes.longWordsAddBtn : ''
                  }`}
                  variant="text"
                  color="primary"
                  size="large"
                  onClick={() => {
                    handleAddNewLedger();
                    setShowBookListing(!showBookListing);
                    // analytics
                    onAddNewLedgerClicked();
                  }}
                >
                  <PlusIcon
                    className={classes.plusIcon}
                    width={12}
                    height={12}
                  />
                  {t('add')}
                </Button>
              </div>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
      <div className={classes.scrollableSection}>
        <div className={classes.listContainer}>
          <div
            className={`${classes.listItemContainer}
              ${
                BOOKS_URI === history.location.pathname
                  ? classes.activeItem
                  : classes.nonActiveItem
              }`}
          >
            <ListItem
              component="a"
              classes={{
                root: classes.listItem,
                gutters: classes.modifyGutters,
              }}
              onClick={() => handleListItemClick(BOOKS_URI)}
            >
              <ListItemAvatar>
                <HomeIcon
                  stroke={
                    BOOKS_URI !== history.location.pathname
                      ? COLORS_THEME.MEDIUM_DARK_GREY
                      : null
                  }
                  height={22}
                  width={22}
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography className={classes.listItemText}>
                    {t('navigation_menu_title_home')}
                  </Typography>
                }
              />
            </ListItem>
          </div>
          {isIndianPhoneNumberUser() && (
            <>
              <div
                className={`${classes.listItemContainer} ${
                  MONEY_URI === history.location.pathname
                    ? classes.activeItem
                    : classes.nonActiveItem
                }`}
              >
                <ListItem
                  component="a"
                  classes={{
                    root: classes.listItem,
                    gutters: classes.modifyGutters,
                  }}
                  onClick={() => handleListItemClick(MONEY_URI)}
                >
                  <ListItemAvatar>
                    <MoneyIcon
                      height={13}
                      width={20}
                      stroke={
                        MONEY_URI !== history.location.pathname
                          ? COLORS_THEME.MEDIUM_DARK_GREY
                          : null
                      }
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <Typography className={classes.listItemText}>
                        {t('money')}
                      </Typography>
                    }
                  />
                </ListItem>
              </div>
            </>
          )}
          <div
            className={`${classes.listItemContainer} ${
              SETTINGS_URI === history.location.pathname
                ? classes.activeItem
                : classes.nonActiveItem
            }`}
          >
            <ListItem
              component="a"
              classes={{
                root: classes.listItem,
                gutters: classes.modifyGutters,
              }}
              onClick={() => handleListItemClick(SETTINGS_URI)}
            >
              <ListItemAvatar>
                <SettingsIcon
                  height={22}
                  width={22}
                  stroke={
                    SETTINGS_URI !== history.location.pathname
                      ? COLORS_THEME.MEDIUM_DARK_GREY
                      : null
                  }
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography
                    className={`${classes.listItemText} ${
                      isLongWordsLanguageSelected() && classes.longLanguageText
                    }`}
                  >
                    {t('settings')}
                  </Typography>
                }
              />
            </ListItem>
          </div>
          <div
            className={`${classes.listItemContainer} ${
              ABOUT_US_URI === history.location.pathname
                ? classes.activeItem
                : classes.nonActiveItem
            }`}
          >
            <ListItem
              component="a"
              classes={{
                root: classes.listItem,
                gutters: classes.modifyGutters,
              }}
              onClick={() => handleListItemClick(ABOUT_US_URI)}
            >
              <ListItemAvatar>
                <AboutIcon
                  height={22}
                  width={22}
                  stroke={
                    ABOUT_US_URI !== history.location.pathname
                      ? COLORS_THEME.MEDIUM_DARK_GREY
                      : null
                  }
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography className={classes.listItemText}>
                    {t('about_us')}
                  </Typography>
                }
              />
            </ListItem>
          </div>
        </div>

        <div className={classes.bottomSection}>
          <MobileIcon width={122} height={122} />
          <Typography variant="subtitle1" className={classes.bottomCTA}>
            {t('feedback')} <br />
            {CHAT_WITH_US_NUMBER}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
