// libs
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import { BOOKS_URI } from 'src/constants/url';

//icons
import comingSoon from 'src/assets/images/comingSoon.svg';
import { useLanguageContext } from '@components/LanguageProvider/context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '8px',
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    flexGrow: 1,
    padding: '77px 24px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoonImg: {
    width: '164px',
    height: '145px',
    marginBottom: '27px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: COLORS_THEME.DARK_GREY,
  },
  text: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
    margin: '16px 0',
  },
  homeLink: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#4288DE',
    border: '1px solid #4288DE',
    padding: '12px 60px',
    borderRadius: '20px',
    textDecoration: 'none',
  },
}));

function ComingSoonPage() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  return (
    <div className={classes.root}>
      <img
        src={comingSoon}
        alt="comingSoon"
        className={classes.comingSoonImg}
      />
      <Typography className={classes.title}>{t('coming_soon')}</Typography>
      <Typography className={classes.text}>{t('work_hard')}</Typography>
      <Link className={classes.homeLink} to={BOOKS_URI}>
        {t('back_to_home')}
      </Link>
    </div>
  );
}
export default ComingSoonPage;
