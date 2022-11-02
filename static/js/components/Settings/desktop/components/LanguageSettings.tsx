// libs
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';

// components
import LanguageDropDown from 'src/components/LanguageDropDown';

// helpers
import { getLocale } from 'src/helpers/locale';

// analytics
import { onLanguageChanged } from '../analytics';

// constants
import {
  languageConfig,
  ILanguageConfig,
  LANG_FROM,
} from 'src/components/LanguagePicker/constants';
import { COLORS_THEME } from 'src/styles/variables';

import LanguageIcon from './icons/LanguageIcon';
import { useLanguageContext } from '@components/LanguageProvider/context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '512px',
    display: 'flex',
    flexDirection: 'column',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  iconWrapper: {
    display: 'flex',
  },
  title: {
    fontWeight: 500,
    fontSize: '18px',
    color: COLORS_THEME.DARK_GREY,
    marginLeft: '16px',
  },
  selectedLang: {
    fontWeight: 500,
    fontSize: '16px',
    color: COLORS_THEME.MID_BLUE,
  },
  description: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
    marginBottom: '24px',
  },
}));

function LanguageSettings() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const getSelectedLanguage = () => {
    const local = getLocale();
    const label = languageConfig?.find(
      (lang: ILanguageConfig) => lang.value === local
    );
    return label?.text || 'English';
  };

  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <div className={classes.iconWrapper}>
          <LanguageIcon width={24} height={24} />
          <Typography className={classes.title}>{t('language')}</Typography>
        </div>
        <Typography className={classes.selectedLang}>
          {getSelectedLanguage()}
        </Typography>
      </div>
      <Typography className={classes.description}>
        {t('more_indian_languages')}
      </Typography>
      <LanguageDropDown
        fullWidth={false}
        label={t('language_placeholder')}
        onLanguageChanged={onLanguageChanged}
        from={LANG_FROM.SETTINGS}
      />
    </div>
  );
}
export default LanguageSettings;
