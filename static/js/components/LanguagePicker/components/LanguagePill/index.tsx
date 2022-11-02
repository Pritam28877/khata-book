// libs
import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// components
import Button from 'src/components/Button';

// constants
import { COLORS, PIXEL_SIZE, FONTWEIGHT } from 'src/styles/variables';
import {
  languageConfig,
  ILanguageConfig,
} from 'src/components/LanguagePicker/constants';

// styles
const useStyles = makeStyles((theme) => ({
  languagePill: {
    borderRadius: '2px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '20px',
  },
  button: {
    padding: theme.spacing(1),
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.14)',
    textTransform: 'none',
    fontWeight: FONTWEIGHT.NORMAL,
    width: '100%',
    justifyContent: 'flex-start',
    color: COLORS.DARK_BLUE,
    background: COLORS.WHITE,
  },
  label: {
    borderRadius: '100px',
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    height: '40px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.WHITE,
    fontSize: '20px',
    fontWeight: FONTWEIGHT.SEMIBOLD,
  },
}));

interface ILanguagePillProps {
  onSelectLanguage: (config: ILanguageConfig) => void;
}

function LanguagePill({ onSelectLanguage }: ILanguagePillProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      {languageConfig.map((config, id) => {
        return (
          <Grid item xs={6} className={classes.languagePill} key={id}>
            <Button
              className={classes.button}
              onClick={() => onSelectLanguage(config)}
            >
              <span
                className={classes.label}
                style={{ backgroundColor: config['labelColor'] }}
              >
                {config['labelText']}
              </span>
              <span>{config['text']}</span>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default memo(LanguagePill);
