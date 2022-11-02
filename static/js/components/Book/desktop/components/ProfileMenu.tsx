// libs
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// material components
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextOverflowTooltip from '@components/TextOverflowTooltip';
import Divider from '@material-ui/core/Divider';

// helpers
import { getInitials } from 'src/helpers/utils/name';

//constants
import { COLORS_THEME } from '@styles/variables';
import { SETTINGS_URI, LOGOUT_URI, MY_PROFILE_URI } from 'src/constants/url';
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import {
  onHomeProfileClick,
  onProfileClick,
  onProfileLogoutClick,
} from '@components/Profile/analytics';

interface IProfileMenu {
  open: boolean;
  anchorEl: React.RefObject<HTMLDivElement>;
  handleCloseProfileMenu: (event: React.MouseEvent<EventTarget>) => void;
  bookName: string;
  bookImage: string;
  phoneNumber: string;
}

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: 5,
  },
  profileMenuContainer: {
    width: '258px',
    marginTop: '20px',
    background: COLORS_THEME.WHITE,
    boxShadow: `0px 2px 10px ${COLORS_THEME.GREY_SHADOW}`,
    borderRadius: '8px',
  },
  profileWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    padding: '24px',
  },
  profileDivider: {
    backgroundColor: COLORS_THEME.LIGHT_GREY,
    width: '210px',
    margin: '0 auto',
  },
  avatar: {
    width: '48px',
    height: '48px',
    backgroundColor: COLORS_THEME.SECONDARY_COLOR,
    fontSize: '18px',
    fontWeight: 'bold',
    color: COLORS_THEME.WHITE,
    marginRight: '12px',
  },
  bookName: {
    fontWeight: 500,
    fontSize: '18px',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '160px',
  },
  phoneNumber: {
    fontSize: '14px',
    color: COLORS_THEME.LIGHT_MEDIUM_GREY,
  },
  list: {
    padding: '24px',
  },
  listItem: {
    padding: '8px 0',
    '&:hover': {
      '& $listItemTitle': {
        color: COLORS_THEME.SECONDARY_COLOR,
      },
    },
  },
  listItemLink: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
  },
  listItemAvatar: {
    minWidth: 'unset',
  },
  listItemTitle: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
    marginLeft: '10px',
  },
  logoutText: {
    color: COLORS_THEME.PRIMARY_COLOR,
  },
}));

function ProfileMenu({
  open,
  anchorEl,
  handleCloseProfileMenu,
  bookName,
  bookImage,
  phoneNumber,
}: IProfileMenu) {
  const classes = useStyles();

  const { t } = useLanguageContext();

  const profileMenuOptions = [
    {
      id: 1,
      title: t('edit_profile'),
      link: MY_PROFILE_URI,
    },
    {
      id: 2,
      title: t('settings'),
      link: SETTINGS_URI,
    },
    {
      id: 3,
      title: t('logout'),
      link: LOGOUT_URI,
    },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    option:
      | {
          id: number;
          title: string;
          link: string;
          disabled: boolean;
        }
      | {
          id: number;
          title: string;
          link: string;
          disabled?: undefined;
        }
  ) => {
    if (option.link === MY_PROFILE_URI) {
      onProfileClick();
      onHomeProfileClick();
    }
    if (option.link === LOGOUT_URI) {
      onProfileLogoutClick();
      e.preventDefault();
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.href = LOGOUT_URI;
      }, 1000);
    }
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorEl.current}
      role={undefined}
      className={classes.popper}
      transition
      disablePortal
      placement={'bottom-end'}
    >
      <Paper className={classes.profileMenuContainer}>
        <ClickAwayListener onClickAway={handleCloseProfileMenu}>
          <div>
            <div className={classes.profileWrapper}>
              <Avatar alt="book" src={bookImage} className={classes.avatar}>
                {getInitials(bookName)}
              </Avatar>
              <div>
                <TextOverflowTooltip
                  text={bookName}
                  className={classes.bookName}
                  arrow={true}
                  placement="top-start"
                />
                <Typography className={classes.phoneNumber}>
                  {phoneNumber}
                </Typography>
              </div>
            </div>
            <Divider className={classes.profileDivider} />
            <List className={classes.list}>
              {profileMenuOptions.map((option) => (
                <ListItem
                  key={option.id}
                  classes={{
                    root: classes.listItem,
                  }}
                >
                  <Link
                    to={option.link}
                    onClick={(e) => handleLinkClick(e, option)}
                    className={classes.listItemLink}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          className={`${classes.listItemTitle} ${
                            option.title === t('logout') && classes.logoutText
                          }`}
                        >
                          {option.title}
                        </Typography>
                      }
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
}
export default ProfileMenu;
