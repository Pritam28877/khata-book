// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS_THEME } from '@styles/variables';

// material components
import Typography from '@material-ui/core/Typography';

//contexts
import { useLanguageContext } from '@components/LanguageProvider/context';
import { useSearchContext } from '@components/SearchProvider/context';

// styles
const useStyles = makeStyles({
  searchResultTitleWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: '16px',
  },
  searchTitle: {
    fontSize: '16px',
    fontWeight: 700,
    marginRight: '16px',
  },
  searchSpan: {
    color: COLORS_THEME.SECONDARY2,
  },
  searchCount: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
  },
});

interface ISearchResultsHeader {
  resultsCount: number;
  foundTranslationKey: string;
}

function SearchResultsHeader({
  resultsCount,
  foundTranslationKey,
}: ISearchResultsHeader) {
  const { t } = useLanguageContext();
  const { searchText } = useSearchContext();
  const classes = useStyles();

  return (
    <div className={classes.searchResultTitleWrapper}>
      <Typography className={classes.searchTitle}>
        {t('search_result')}:
        <span className={classes.searchSpan}> "{searchText}"</span>
      </Typography>
      <Typography className={classes.searchCount}>
        {t(foundTranslationKey, [resultsCount])}
      </Typography>
    </div>
  );
}
export default memo(SearchResultsHeader);
