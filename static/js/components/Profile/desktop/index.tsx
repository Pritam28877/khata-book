// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';

// components
import EditProfileForm from './components/EditProfileForm';

// constants
import { COLORS_THEME } from 'src/styles/variables';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    '@media only screen and (max-width: 1440px)': {
      padding: ' 14px 24px',
    },
  },
  title: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_GREY,
    marginBottom: '24px',
    '@media only screen and (max-width: 1440px)': {
      marginBottom: '14px',
    },
  },
}));

function Profile() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{t('profile')}</Typography>
      <EditProfileForm />
    </div>
  );
}
export default memo(Profile);
