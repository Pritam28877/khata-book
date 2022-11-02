import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

// constants
import { COLORS_THEME } from 'src/styles/variables';

// icons
import aboutKbIcon from 'src/assets/images/aboutKbIcon.svg';
import termsIcon from 'src/assets/images/t&cIcon.svg';
import privacyIcon from 'src/assets/images/privacyIcon.svg';
import ArrowIcon from 'src/components/Settings/desktop/components/icons/ArrowIcon';
import { useLanguageContext } from '../LanguageProvider/context';

// analytics
import {
  onAboutKhatabookCliked,
  onPrivacyPolicyClicked,
  onTermsAndConditionClicked,
} from './analytics';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    padding: '32px 24px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: '18px',
    color: COLORS_THEME.TEXT_GREY,
    marginBottom: '24px',
  },
  listContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '8px',
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    flexGrow: 1,
    padding: '77px 24px 24px 24px',
  },
  list: {
    maxWidth: '415px',
    background: COLORS_THEME.WHITE,
    border: `0.5px solid ${COLORS_THEME.GREY_BORDER}`,
    borderRadius: '12px',
    margin: 'auto',
    padding: '0 32px',
  },
  listItem: {
    borderBottom: `1px solid ${COLORS_THEME.GREY_BORDER}`,
    padding: '32px 0',
    display: 'flex',
    justifyContent: 'space-between',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  listItemLink: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
  },
  itemLeftSide: {
    display: 'flex',
  },
  listItemAvatar: {
    minWidth: 'unset',
  },
  listIcon: {
    marginRight: '24px',
  },
  listItemTitle: {
    fontWeight: 500,
    fontSize: '18px',
    color: COLORS_THEME.TEXT_GREY,
  },
  listItemText: {
    fontSize: '14px',
    color: COLORS_THEME.TEXT_DISABLED,
  },
}));

function AboutUs() {
  const classes = useStyles();
  const { t } = useLanguageContext();

  const aboutUsOptions = [
    {
      id: 0,
      title: t('about'),
      description: t('know_more'),
      icon: aboutKbIcon,
      link: 'https://khatabook.com/about',
      onClick: onAboutKhatabookCliked,
    },
    {
      id: 1,
      title: t('terms'),
      description: t('know_terms'),
      icon: termsIcon,
      link: 'https://khatabook.com/terms',
      onClick: onTermsAndConditionClicked,
    },
    {
      id: 2,
      title: t('privacy_policy'),
      description: t('know_privacy_policy'),
      icon: privacyIcon,
      link: 'https://khatabook.com/privacy',
      onClick: onPrivacyPolicyClicked,
    },
  ];
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{t('about_us')}</Typography>
      <div className={classes.listContainer}>
        <List className={classes.list}>
          {aboutUsOptions.map((option) => (
            <ListItem
              key={option.id}
              classes={{
                root: classes.listItem,
              }}
            >
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.listItemLink}
                onClick={option.onClick}
              >
                <div className={classes.itemLeftSide}>
                  <ListItemAvatar
                    classes={{
                      root: classes.listItemAvatar,
                    }}
                  >
                    <img
                      src={option.icon}
                      alt={option.title}
                      className={classes.listIcon}
                    />
                  </ListItemAvatar>
                  <div>
                    <ListItemText
                      primary={
                        <Typography className={classes.listItemTitle}>
                          {option.title}
                        </Typography>
                      }
                    />
                    <ListItemText
                      primary={
                        <Typography className={classes.listItemText}>
                          {option.description}
                        </Typography>
                      }
                    />
                  </div>
                </div>
                <ListItemAvatar
                  classes={{
                    root: classes.listItemAvatar,
                  }}
                >
                  <ArrowIcon width={7} height={12} stroke="#186FD9" />
                </ListItemAvatar>
              </a>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default AboutUs;
