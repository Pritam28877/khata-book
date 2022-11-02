// libs
import React, { memo, useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

// components
import TransactionsList from './TransactionsList';
import CustomersList from './CustomersList';
import KhatasList from './KhatasList';
import Loader from '@components/Loader';

// constants
import { COLORS_THEME } from '@styles/variables';
import { LIST_TYPES } from './constants';

// icons
import BinIcon from '../icons/BinIcon';

// web worker
import workerApi from 'src/webWorkers/Api';

// hooks
import useReRenderOnUpdate from 'src/hooks/useReRenderOnUpdate';

// context
import { useLanguageContext } from '@components/LanguageProvider/context';

// defs
import {
  IBookValue,
  IDeletedCustomerValue,
  IDeletedTransactionValue,
} from 'src/webWorkers/DB/types';
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '512px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    '@media only screen and (max-width: 1440px)': {
      marginBottom: '15px',
    },
  },
  binIcon: {
    marginRight: '18px',
  },
  title: {
    display: 'flex',
    fontSize: '18px',
    fontWeight: 500,
  },
  count: {
    fontSize: '16px',
    fontWeight: 500,
    color: COLORS_THEME.PRIMARY_COLOR,
  },
  buttonsGroup: {
    width: '100%',
    height: '57px',
    borderRadius: '6px',
    backgroundColor: COLORS_THEME.LIGHT_BLUE,
    padding: '5px',
    marginBottom: '16px',
    display: 'flex',
    '& .MuiButtonGroup-groupedContainedHorizontal': {
      borderRadius: '5px',
      '&:not(:last-child)': {
        borderRight: 'none',
      },
    },
  },
  selectListButton: {
    width: 'calc(100% / 3)',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    maxWidth: '164px',
    textTransform: 'capitalize',
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: COLORS_THEME.WHITE,
      color: COLORS_THEME.MID_BLUE,
    },
  },
  activeListButton: {
    backgroundColor: COLORS_THEME.WHITE,
    color: COLORS_THEME.MID_BLUE,
  },
  selectedListContainer: {
    overflowY: 'auto',
    maxHeight: '490px',
    '@media only screen and (max-width: 1920px)': {
      maxHeight: '600px',
    },
    '@media only screen and (max-width: 1440px)': {
      maxHeight: '490px',
    },
    '@media only screen and (max-width: 1280px)': {
      maxHeight: '370px',
    },
  },
}));
interface IRecycleBin {
  location?: {
    state: {
      selectedList?: string; // to select recycle bin active list
    };
  };
}

function RecycleBin({ location }: IRecycleBin) {
  const locationFromRouter = useLocation();
  const classes = useStyles();
  const { reRenderKey } = useReRenderOnUpdate();
  const { t } = useLanguageContext();
  const [deletedCustomers, setDeletedCustomers] = useState<
    IDeletedCustomerValue[]
  >([]);
  const [deletedTransactions, setDeletedTransactions] = useState<
    IDeletedTransactionValue[]
  >([]);
  const [deletedBooks, setDeletedBooks] = useState<IBookValue[]>([]);
  const [deletedCustomersCount, setDeletedCustomersCount] = useState(0);
  const [deletedTransactionsCount, setDeletedTransactionsCount] = useState(0);
  const [deletedBooksCount, setDeletedBooksCount] = useState(0);
  const [isDeletedCustomersFetched, setIsDeletedCustomersFetched] =
    useState(false);
  const [isDeletedTransactionsFetched, setIsDeletedTransactionsFetched] =
    useState(false);
  const [isDeletedBooksFetched, setIsDeletedBooksFetched] = useState(false);

  const [recycleActiveList, setRecycleActiveList] = useState(
    location?.state?.selectedList || LIST_TYPES.ENTRIES
  );

  const fetchDeletedCustomers = useCallback(() => {
    setIsDeletedCustomersFetched(false);
    workerApi.getDeletedCustomers().then(({ data }) => {
      let fetchedCustomers: IDeletedCustomerValue[] = [];
      fetchedCustomers = [...data];
      setDeletedCustomers(fetchedCustomers);
      setDeletedCustomersCount(fetchedCustomers.length);
      setIsDeletedCustomersFetched(true);
    });
  }, []);

  const fetchDeletedTransactions = useCallback(() => {
    setIsDeletedTransactionsFetched(false);
    workerApi.getDeletedTransactions().then(({ data }) => {
      let fetchedTransactions: IDeletedTransactionValue[] = [];

      fetchedTransactions = [...data];
      setDeletedTransactions(fetchedTransactions);
      setDeletedTransactionsCount(fetchedTransactions.length);
      setIsDeletedTransactionsFetched(true);
    });
  }, []);

  const fetchDeletedBooks = useCallback(() => {
    setIsDeletedBooksFetched(false);
    workerApi.getDeletedBooks().then((data) => {
      let fetchedBooks: IBookValue[] = [];

      fetchedBooks = [...data];
      setDeletedBooks(fetchedBooks);
      setDeletedBooksCount(fetchedBooks.length);
      setIsDeletedBooksFetched(true);
    });
  }, []);

  useEffect(() => {
    setRecycleActiveList(
      //@ts-ignore
      locationFromRouter?.state?.selectedList || LIST_TYPES.ENTRIES
    );
  }, [locationFromRouter]);

  // fetch deleted data
  useEffect(() => {
    fetchDeletedTransactions();
    fetchDeletedCustomers();
    fetchDeletedBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRenderKey]);

  const renderSelectedList = () => {
    switch (recycleActiveList) {
      case LIST_TYPES.ENTRIES:
        return <TransactionsList deletedTransactions={deletedTransactions} />;
      case LIST_TYPES.CUSTOMERS:
        return <CustomersList deletedCustomers={deletedCustomers} />;
      case LIST_TYPES.KHATA:
        return <KhatasList deletedBooks={deletedBooks} />;
      default:
        return;
    }
  };

  const renderDeletedCount = () => {
    switch (recycleActiveList) {
      case LIST_TYPES.ENTRIES:
        return `( ${deletedTransactionsCount} ${t('deleted_entries')})`;
      case LIST_TYPES.CUSTOMERS:
        return `( ${deletedCustomersCount} ${t('deleted_customers')} )`;

      case LIST_TYPES.KHATA:
        return `( ${deletedBooksCount} ${t('deleted_khata')})`;
      default:
        return '';
    }
  };

  const handleActiveListChange = (listName: string) => {
    setRecycleActiveList(listName);
  };

  if (
    isDeletedCustomersFetched &&
    isDeletedTransactionsFetched &&
    isDeletedBooksFetched
  ) {
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography className={classes.title}>
            <BinIcon
              width={20}
              height={24}
              stroke={COLORS_THEME.SECONDARY_COLOR}
              className={classes.binIcon}
            />
            {t('recycle_bin')}
          </Typography>
          <Typography className={classes.count}>
            {renderDeletedCount()}
          </Typography>
        </div>
        <ButtonGroup
          className={classes.buttonsGroup}
          disableElevation
          variant="contained"
        >
          <Button
            className={`${classes.selectListButton} ${
              recycleActiveList === LIST_TYPES.ENTRIES
                ? classes.activeListButton
                : ''
            }`}
            onClick={() => handleActiveListChange(LIST_TYPES.ENTRIES)}
          >
            {t('entries')}
          </Button>
          <Button
            className={`${classes.selectListButton} ${
              recycleActiveList === LIST_TYPES.CUSTOMERS
                ? classes.activeListButton
                : ''
            }`}
            onClick={() => handleActiveListChange(LIST_TYPES.CUSTOMERS)}
          >
            {t('customers', [''])}
          </Button>
          <Button
            className={`${classes.selectListButton} ${
              recycleActiveList === LIST_TYPES.KHATA
                ? classes.activeListButton
                : ''
            }`}
            onClick={() => handleActiveListChange(LIST_TYPES.KHATA)}
          >
            {t('khata')}
          </Button>
        </ButtonGroup>
        <div className={classes.selectedListContainer}>
          {renderSelectedList()}
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
}
export default memo(RecycleBin);
