// libs
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';

//components
import ComingSoonPage from 'src/components/ComingSoonPage';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import { useLanguageContext } from '@components/LanguageProvider/context';

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
}));

function Reports() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{t('reports')}</Typography>
      <ComingSoonPage />
    </div>
  );
}
export default Reports;
