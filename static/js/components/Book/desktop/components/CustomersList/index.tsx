// libs
import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// global components
import IOElement from 'src/components/IOElement';

// components
import FiltersLists from './FiltersLists';
import Loader from '@components/Loader';
import AddCustomerButton from '../AddCustomerButton';
import CustomerRow from './CustomerRow';
import NoResultsFound from '../Search/NoResultsFound';
import EmptyCustomersState from './EmptyCustomersState';
import CustomerPlaceholder from '../../../components/CustomerPlaceholder';
import SearchResultsHeader from '../Search/SearchResultsHeader';

// constants
import { LAYOUT, COLORS_THEME } from '@styles/variables';
import { CUSTOMER_FILTER, CUSTOMER_SORT } from 'src/webWorkers/DB/constants';
import { ICustomerValue } from 'src/webWorkers/DB/types';
import {
  SEARCH_TYPE_KEY,
  SEARCH_TYPES,
} from '@components/Book/desktop/components/Search/constants';

// contexts
import { useSearchContext } from '@components/SearchProvider/context';

// analytics
import {
  onHomeFilterClicked,
  onHomeSortClicked,
  onHomeRemoveFilterClicked,
} from '../../analytics';

interface ICustomersList {
  customersCount: number;
  customers: ICustomerValue[];
  isInitialCustomersFetched: boolean;
  applyCustomersFiltering: (
    initial?: boolean,
    newSearchText?: string,
    filterBy?: CUSTOMER_FILTER,
    sortBy?: CUSTOMER_SORT
  ) => void;
  fetchNextPage: VoidFunction;
  showPlaceholder?: boolean;
}

const useStyles = makeStyles({
  customersListContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '16px 16px 16px 24px',
  },
  customersList: {
    display: `${LAYOUT.FLEX}`,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    borderRadius: '6px',
    backgroundColor: COLORS_THEME.WHITE,
    boxShadow: COLORS_THEME.PAPER_SHADOW,
  },
  filtersListsWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    flexWrap: 'wrap-reverse',
    '& div:nth-of-type(2)': {
      marginLeft: 'auto',
    },
  },
});

const PLACEHOLDERS = [0, 0, 0];

const IO_OPTIONS = {
  rootMargin: '600px 0px 0px 0px',
};

function CustomersList({
  customersCount,
  customers,
  isInitialCustomersFetched,
  applyCustomersFiltering,
  fetchNextPage,
  showPlaceholder,
}: ICustomersList) {
  const classes = useStyles();

  const [customerFilter, setCustomerFilter] = useState(CUSTOMER_FILTER.ALL);
  const [customerSort, setCustomerSort] = useState(CUSTOMER_SORT.RECENT);
  const scrollableSectionRef = useRef<HTMLDivElement>(null);

  const { searchText } = useSearchContext();

  const hasCustomers = customers.length !== 0;

  const isSearchApplied =
    searchText.length > 0 &&
    localStorage.getItem(SEARCH_TYPE_KEY) !== SEARCH_TYPES.MONEY;

  const isFilterApplied = customerFilter !== CUSTOMER_FILTER.ALL;

  const filteredCustomersLength = customers.length;

  const scrollToCustomersListHead = () => {
    if (scrollableSectionRef && scrollableSectionRef.current) {
      scrollableSectionRef.current.scrollTop = 0;
    }
  };

  const handleFilterChange = (filterName: CUSTOMER_FILTER) => {
    setCustomerFilter(filterName);
    applyCustomersFiltering(true, searchText, filterName, customerSort);
    scrollToCustomersListHead();
    // analytics
    onHomeFilterClicked(filterName);
  };

  const handleSortChange = (filterName: CUSTOMER_SORT) => {
    setCustomerSort(filterName);
    applyCustomersFiltering(true, searchText, customerFilter, filterName);
    scrollToCustomersListHead();
    // analytics
    onHomeSortClicked(filterName);
  };

  const handleClearAllFilters = () => {
    setCustomerFilter(CUSTOMER_FILTER.ALL);
    setCustomerSort(CUSTOMER_SORT.RECENT);
    applyCustomersFiltering(
      true,
      searchText,
      CUSTOMER_FILTER.ALL,
      CUSTOMER_SORT.RECENT
    );
    scrollToCustomersListHead();
    //analytics
    onHomeRemoveFilterClicked();
  };

  useEffect(() => {
    if (localStorage.getItem(SEARCH_TYPE_KEY) !== SEARCH_TYPES.MONEY) {
      applyCustomersFiltering(
        true,
        searchText,
        CUSTOMER_FILTER.ALL,
        CUSTOMER_SORT.RECENT
      );
      if (isFilterApplied) {
        setCustomerFilter(CUSTOMER_FILTER.ALL);
      }
    }
  }, [searchText]);

  if (!hasCustomers && isSearchApplied && isInitialCustomersFetched) {
    return (
      <div className={classes.customersListContainer}>
        <SearchResultsHeader
          resultsCount={customersCount}
          foundTranslationKey="found_customers"
        />
        <NoResultsFound />
      </div>
    );
  }

  if (!hasCustomers && !isFilterApplied) {
    if (isInitialCustomersFetched) {
      return (
        <div className={classes.customersListContainer}>
          <EmptyCustomersState />
        </div>
      );
    }
    return (
      <div className={classes.customersListContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classes.customersListContainer}>
      <div className={classes.filtersListsWrapper}>
        <FiltersLists
          customerFilter={customerFilter}
          customerSort={customerSort}
          handleFilterChange={handleFilterChange}
          handleSortChange={handleSortChange}
          handleClearAllFilters={handleClearAllFilters}
          customersCount={
            isFilterApplied || isSearchApplied
              ? filteredCustomersLength
              : customersCount
          }
        />
        <AddCustomerButton />
      </div>
      {!hasCustomers && isFilterApplied ? (
        <NoResultsFound />
      ) : (
        <>
          {isSearchApplied && (
            <SearchResultsHeader
              resultsCount={customersCount}
              foundTranslationKey="found_customers"
            />
          )}
          <div className={classes.customersList}>
            {customers.map((customer, i) => (
              <CustomerRow customer={customer} key={i} />
            ))}
            {showPlaceholder && (
              <>
                <IOElement options={IO_OPTIONS} onVisible={fetchNextPage} />
                {PLACEHOLDERS.map((_, idx) => (
                  <CustomerPlaceholder key={idx} />
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(CustomersList);
