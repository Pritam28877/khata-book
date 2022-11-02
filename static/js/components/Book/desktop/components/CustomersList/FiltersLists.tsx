// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// components
import FilterDropdown from '@components/FilterDropdown';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import { FILTERS_LIST, SORTING_FILTERS_LIST } from '../../constants';
import { CUSTOMER_FILTER, CUSTOMER_SORT } from 'src/webWorkers/DB/constants';

//contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

// helpers
import { isLongWordsLanguageSelected } from 'src/helpers/locale';

// styles
const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    '@media only screen and (max-width: 1440px)': {
      flexWrap: 'wrap',
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: 500,
    color: COLORS_THEME.TEXT_GREY,
    marginRight: '8px',
  },
  dropdownsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  listWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '8px',
  },
  clearFiltersButton: {
    border: 'none',
    textTransform: 'capitalize',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontSize: '16px',
    fontWeight: 'normal',
    padding: '5px',
    minWidth: 'unset',
    color: COLORS_THEME.TEXT_DISABLED,
    '@media only screen and (max-width: 1440px)': {
      fontSize: '14px',
    },
  },
  smallFilterDropdown: {
    '& .MuiOutlinedInput-input': {
      width: '70px',
    },
  },
  divider: {
    margin: '0 5px',
    height: '24px',
  },
  countWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  customersCount: {
    fontSize: '12px',
    marginRight: '4px',
  },
  longTextStyle: {
    fontSize: '12px',
  },
}));

interface ICustomersFilters {
  customerFilter: string;
  customerSort: string;
  handleFilterChange: (filter: CUSTOMER_FILTER) => void;
  handleSortChange: (filter: CUSTOMER_SORT) => void;
  handleClearAllFilters?: () => void;
  customersCount: number;
}

function FiltersLists({
  customerFilter,
  customerSort,
  handleFilterChange,
  handleSortChange,
  handleClearAllFilters,
  customersCount,
}: ICustomersFilters) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const shouldDisplayClearFiltersButton =
    customerFilter !== CUSTOMER_FILTER.ALL ||
    customerSort !== CUSTOMER_SORT.RECENT;

  const longTextClass = isLongWordsLanguageSelected()
    ? classes.longTextStyle
    : '';

  return (
    <div className={classes.filtersContainer}>
      <div className={classes.countWrapper}>
        <Typography className={`${classes.title} ${longTextClass}`}>
          {t('customers', [''])}
          <span className={classes.customersCount}> ({customersCount})</span>
        </Typography>
      </div>
      <div className={classes.dropdownsContainer}>
        <div className={classes.listWrapper}>
          <FilterDropdown
            options={FILTERS_LIST}
            handleChange={handleFilterChange}
            selected={customerFilter}
            filterText={t('filter_by')}
            id="filter"
            isHomePageFilter={true}
            className={classes.smallFilterDropdown}
          />
        </div>
        <div className={classes.listWrapper}>
          <FilterDropdown
            options={SORTING_FILTERS_LIST}
            handleChange={handleSortChange}
            selected={customerSort}
            filterText={t('sort_by')}
            id="sort"
            isHomePageFilter={true}
          />
        </div>
      </div>
      {shouldDisplayClearFiltersButton && (
        <>
          <Divider orientation="vertical" className={classes.divider} />
          <Button
            className={classes.clearFiltersButton}
            onClick={handleClearAllFilters}
          >
            {t('reset')}
          </Button>
        </>
      )}
    </div>
  );
}

export default memo(FiltersLists);
