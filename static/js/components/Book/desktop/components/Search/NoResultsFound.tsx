// libs
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// icons
import noResultsIcon from 'src/assets/images/noResultsFound.svg';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import { BOOKS_URI } from 'src/constants/url';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import { useSearchContext } from '../../../../SearchProvider/context';

// styles
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  noResultsIcon: {
    width: '112px',
    height: '89px',
    marginBottom: '24px',
  },
  primaryText: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
    marginBottom: '16px',
  },
  secondaryText: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
  },
  backBtn: {
    height: '32px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: COLORS_THEME.LIGHT_GREY,
    fontSize: '14px',
    fontWeight: 700,
    textTransform: 'capitalize',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    padding: '0 29.5px',
  },
}));

interface INoResultsFound {
  action?: VoidFunction;
  actionText?: string;
}

function NoResultsFound({ action, actionText }: INoResultsFound) {
  const { t } = useLanguageContext();
  const { setSearchText } = useSearchContext();
  const classes = useStyles();
  const history = useHistory();

  const handleBackToHome = () => {
    setSearchText('');
    history.replace(BOOKS_URI);
  };
  return (
    <div className={classes.root}>
      <img
        src={noResultsIcon}
        alt={t('searchresults_nothingfound')}
        className={classes.noResultsIcon}
      />
      <Typography className={classes.primaryText}>
        {t('searchresults_nothingfound')}
      </Typography>
      <Button className={classes.backBtn} onClick={action || handleBackToHome}>
        {actionText || t('back_to_home')}
      </Button>
    </div>
  );
}
export default memo(NoResultsFound);
