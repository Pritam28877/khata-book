import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { default as AB } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// components
import TextOverflowTooltip from '@components/TextOverflowTooltip';
import SearchBar from './Search/SearchBar';

// icons
//import NotificationIcon from './icons/NotificationIcon';
import ArrowIcon from 'src/components/Settings/desktop/components/icons/ArrowIcon';

// constants
import { COLORS, COLORS_THEME } from '@styles/variables';

//analytics
import { onGetAccessClicked, onProfileMenuClicked } from '../analytics';

import ProfileMenu from './ProfileMenu';

import { useAppState } from 'src/store/app/selectors';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { getCurrentStoredBook } from 'src/helpers/data';
import { listenBookChanged } from 'src/helpers/customEvents/listeners';
import { NEW_APP_URL } from 'src/constants/appInfo';

//context
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    position: 'sticky',
    top: 0,
    zIndex: 7,
  },
  AppBarNote: {
    backgroundImage: `linear-gradient(to right, ${COLORS.DARK_YELLOW} , ${COLORS.LIGHT_YELLOW})`,
    display: 'flex',
    justifyContent: 'flex-start',
    minHeight: 'unset',
    padding: '0 1rem',
    alignItems: 'center',
    fontWeight: 600,
  },
  AppBarContainer: {
    backgroundColor: COLORS.WHITE,
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
    minHeight: 'unset',
  },
  ToolbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rightSideWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  avatar: {
    marginLeft: '25px',
    width: '32px',
    height: '32px',
    backgroundColor: COLORS_THEME.SECONDARY_COLOR,
  },
  bookName: {
    fontWeight: 500,
    fontSize: '16px',
    color: COLORS_THEME.DARK_GREY,
    marginLeft: '8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
  },
  profileMenuButton: {
    width: '13px',
    minWidth: '13px',
    height: '8px',
    backgroundColor: 'transparent',
    padding: '0',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    marginLeft: '14px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  titleHeader: {
    fontWeight: 500,
    fontSize: '0.97rem',
  },
  RedTextButton: {
    border: `1px solid ${COLORS.DARK_RED}`,
    color: COLORS.DARK_RED,
    background: COLORS.WHITE,
    textTransform: 'initial',
    borderRadius: '8px',
    margin: '0.5rem 0 0.5rem 0.5rem',
  },
  downArrowIcon: {
    transform: 'rotate(90deg)',
  },
  upArrowIcon: {
    transform: 'rotate(-90deg)',
  },
}));

export default function AppBar() {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const { t } = useLanguageContext();
  const { getCurrentBook, getUserInfo } = useAppState();
  const [book, setBook] = useState(getCurrentBook());
  const bookName = book?.business_name || book?.book_name || '';
  const bookImage = book?.business_image || '';
  const user = getUserInfo();
  const phoneNumber = `${user?.country_code} ${user?.phone}` || '';

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

  const toggleProfileMenu = () => {
    setOpenProfileMenu((prevState) => !prevState);
    onProfileMenuClicked();
  };

  const handleCloseProfileMenu = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenProfileMenu(false);
  };

  const onTryClick = (event: React.MouseEvent<EventTarget>) => {
    window.open(NEW_APP_URL);
    //analytics
    onGetAccessClicked();
  };

  return (
    <div className={classes.root}>
      <div className={classes.AppBarNote}>
        <Typography variant="subtitle1" className={classes.titleHeader}>
          {t('web_retirement_banner_text')}
        </Typography>

        <Button
          className={classes.RedTextButton}
          variant="text"
          onClick={onTryClick}
        >
          <Typography variant="subtitle2">{t('web_beta_trial_cta')}</Typography>
        </Button>
      </div>
      <AB position="static" className={classes.AppBarContainer}>
        <Toolbar className={classes.ToolbarContainer}>
          <SearchBar />
          <div
            className={classes.rightSideWrapper}
            ref={anchorRef}
            aria-controls={openProfileMenu ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={toggleProfileMenu}
          >
            {/*TODO:Add notification functionality*/}
            {/*  <NotificationIcon width={24} height={24} /> */}
            <Avatar alt="book" src={bookImage} className={classes.avatar}>
              {getInitials(bookName)}
            </Avatar>
            <TextOverflowTooltip
              text={bookName}
              className={classes.bookName}
              arrow={true}
              placement="top-start"
            />
            <Button className={classes.profileMenuButton} variant="text">
              <ArrowIcon
                width={8}
                height={13}
                stroke={COLORS_THEME.DARK_GREY}
                className={
                  openProfileMenu ? classes.upArrowIcon : classes.downArrowIcon
                }
              />
            </Button>
            <ProfileMenu
              open={openProfileMenu}
              anchorEl={anchorRef}
              handleCloseProfileMenu={handleCloseProfileMenu}
              bookName={bookName}
              bookImage={bookImage}
              phoneNumber={phoneNumber}
            />
          </div>
        </Toolbar>
      </AB>
    </div>
  );
}
