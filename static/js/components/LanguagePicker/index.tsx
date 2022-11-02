// libs
import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

// constants
import { COLORS, PIXEL_SIZE, FONTWEIGHT } from 'src/styles/variables';
import { HOME_URI } from 'src/constants/url';
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// components
import LanguagePill from './components/LanguagePill';
import { ILanguageConfig, LANG_FROM } from './constants';

// analytics
import { onLanguageSelected, onLanguageChanged } from './analytics';

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageLabel: {
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    display: 'flex',
    alignItems: 'center',
    color: COLORS.BLACK,
    fontWeight: FONTWEIGHT.SEMIBOLD,
    padding: '20px 0',
  },
}));

interface ILanguagePicker {
  className?: string;
  from?: LANG_FROM;
}

function LanguagePicker({
  className = '',
  from = LANG_FROM.INITIAL,
}: ILanguagePicker) {
  const classes = useStyles();
  const { updateLocale } = useLanguageContext();
  const history = useHistory();

  const changeLanguage = useCallback(
    (config: ILanguageConfig): void => {
      if (from === LANG_FROM.INITIAL) {
        // analytics
        onLanguageSelected(config.value);
      } else {
        // analytics
        onLanguageChanged(config.value);
      }

      updateLocale(config.value);

      // redirect to home
      history.replace(HOME_URI);
    },
    [from, history, updateLocale]
  );

  return (
    <Grid className={classes.root} container direction="row">
      <Grid className={className} item xs={11}>
        <div className={classes.languageLabel}>Choose language</div>
      </Grid>
      <Grid item xs={11}>
        <LanguagePill onSelectLanguage={changeLanguage} />
      </Grid>
    </Grid>
  );
}

export default memo(LanguagePicker);
