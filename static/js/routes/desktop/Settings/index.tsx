// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';

// components
import SideBar from 'src/components/Settings/desktop/components/SideBar';

// constants
import { PIXEL_SIZE, COLORS_THEME } from 'src/styles/variables';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import {
  onSelectBackupSettingsTab,
  onSelectCurrencySettingsTab,
} from 'src/components/Settings/desktop/analytics';

// analytics
import { onRecycleBinClicked } from 'src/components/Settings/desktop/analytics';
import SettingsChildRoutes from './SettingsChildRoutes';
import {
  BACKUP_INFO_URI,
  CURRENCY_URI,
  RECYCLE_BIN_URI,
} from 'src/constants/url';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    width: '100%',
    height: '100%',
    padding: '24px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  settingsTitle: {
    fontWeight: 'bold',
    fontSize: `${PIXEL_SIZE['20px']}rem`,
    color: COLORS_THEME.TEXT_GREY,
    marginBottom: `${PIXEL_SIZE['24px']}rem`,
  },
  settingsGrid: {
    flexGrow: 1,
    display: 'flex',
    '@media only screen and (max-width: 1170px)': {
      flexDirection: 'column',
    },
  },
  mainContent: {
    background: COLORS_THEME.WHITE,
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    borderRadius: '8px',
    marginLeft: `${PIXEL_SIZE['24px']}rem`,
    flexGrow: 1,
    padding: '48px 24px 24px 24px',
    display: 'flex',
    justifyContent: 'center',
    '@media only screen and (max-width: 1440px)': {
      padding: '24px',
    },
    '@media only screen and (max-width: 1170px)': {
      marginTop: '16px',
    },
  },
  loader: {
    width: '100%',
    backgroundColor: COLORS_THEME.WHITE,
  },
}));

function Settings() {
  const { t } = useLanguageContext();
  const classes = useStyles();
  const history = useHistory();

  const onSettingsOptionChange = (url: string) => {
    history.push(url);

    switch (url) {
      case RECYCLE_BIN_URI:
        onRecycleBinClicked();
        break;
      case BACKUP_INFO_URI:
        onSelectBackupSettingsTab();
        break;
      case CURRENCY_URI:
        onSelectCurrencySettingsTab();
        break;
      // TODO: Add remaining events
      default:
        return <div>{t('coming_soon')}</div>;
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.settingsTitle}>{t('settings')}</Typography>
      <div className={classes.settingsGrid}>
        <SideBar onSettingsOptionChange={onSettingsOptionChange} />
        <div className={classes.mainContent}>
          <SettingsChildRoutes />
        </div>
      </div>
    </div>
  );
}

export default memo(Settings);
