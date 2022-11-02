// libs
import React, { memo, useMemo, useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

// components
import StatisticsSection from './components/StatisticsSection';
import CustomersList from './components/CustomersList';

// web worker
import workerApi from 'src/webWorkers/Api';

// contexts
import ActionContext from 'src/components/Book/ActionContext';
import { useSearchContext } from '../../SearchProvider/context';

// hooks
import useReRenderOnUpdate from 'src/hooks/useReRenderOnUpdate';

// selectors
import { useAppState } from 'src/store/app/selectors';

// defs
import { IBookValue, ICustomerValue } from 'src/webWorkers/DB/types';

//analytics
import { onHomePageViewed } from './analytics';

// constants
import { CUSTOMERS_LIMIT } from 'src/constants/customers';
import { CUSTOMER_FILTER, CUSTOMER_SORT } from 'src/webWorkers/DB/constants';

// styles
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    overflowY: 'hidden',
  },
});

interface IBookProps {
  customerId: string;
  setCustomerId: (customerId: string) => void;
}

function Book({ customerId, setCustomerId }: IBookProps) {
  const classes = useStyles();
  const { reRenderKey } = useReRenderOnUpdate();
  const { getCurrentBook } = useAppState();
  const { searchText } = useSearchContext();
  const [isInitialCustomersFetched, setIsInitialCustomersFetched] =
    useState(false);
  const [isFetchingCustomers, setIsFetchingCustomers] = useState(false);
  const [customers, setCustomers] = useState<ICustomerValue[]>([]);
  const [totalCustomers, setTotalSetCustomers] = useState(0);
  const [lastCustomerId, setLastCustomerId] = useState<string | undefined>(
    undefined
  );
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const book: IBookValue = getCurrentBook() as IBookValue;
  const values = useMemo(
    () => ({
      selectedCustomerId: customerId,
      onClick: setCustomerId,
    }),
    [customerId, setCustomerId]
  );

  useEffect(() => {
    // analytics
    onHomePageViewed();
  }, []);

  const fetchCustomers = useCallback(
    (
      initial = false,
      newSearchText?: string,
      filterBy?: CUSTOMER_FILTER,
      sortBy?: CUSTOMER_SORT
    ) => {
      if (book === undefined) {
        return;
      }

      setIsFetchingCustomers(true);

      workerApi
        .getCustomers({
          bookId: book.book_id,
          filterBy,
          sortBy,
          limit: CUSTOMERS_LIMIT,
          search: newSearchText || searchText,
          ...(initial ? {} : { lastCustomerId }),
        })
        .then(({ data, count }) => {
          let newCustomers: ICustomerValue[] = [];

          if (initial === false) {
            newCustomers = [...customers];
          }

          setIsInitialCustomersFetched(true);

          newCustomers = [...newCustomers, ...data];
          setTotalSetCustomers(count);
          setCustomers(newCustomers);
          setIsFetchingCustomers(false);
          if (newCustomers.length > 0 && !isFetchingCustomers) {
            setLastCustomerId(
              newCustomers[newCustomers.length - 1].customer_id
            );
          }
        });
    },
    [book, customers, lastCustomerId, isFetchingCustomers, searchText]
  );

  useEffect(() => {
    // to prevent memory leak
    let componentMounted = true;

    if (isInitialCustomersFetched) {
      return;
    }
    if (componentMounted) {
      fetchCustomers(true);
    }
    return () => {
      componentMounted = false;
    };
  }, [isInitialCustomersFetched, fetchCustomers]);

  useEffect(() => {
    setIsInitialCustomersFetched(false);
  }, [book, reRenderKey]);

  useEffect(() => {
    setShowPlaceholder(
      isInitialCustomersFetched === false ||
        (customers.length !== 0 &&
          customers.length < totalCustomers &&
          customers.length % CUSTOMERS_LIMIT === 0)
    );
  }, [customers, isInitialCustomersFetched, totalCustomers]);

  const fetchNextPage = useCallback(() => {
    if (isFetchingCustomers === false) {
      fetchCustomers();
    }
  }, [fetchCustomers, isFetchingCustomers]);

  return (
    <ActionContext.Provider value={values} key={reRenderKey}>
      <div className={classes.root}>
        <CustomersList
          customersCount={totalCustomers}
          customers={customers}
          isInitialCustomersFetched={isInitialCustomersFetched}
          applyCustomersFiltering={fetchCustomers}
          fetchNextPage={fetchNextPage}
          showPlaceholder={showPlaceholder}
        />
        <StatisticsSection customersCount={customers.length} />
      </div>
    </ActionContext.Provider>
  );
}

export default memo(Book);
