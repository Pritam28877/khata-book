// libs
import React, { memo, useCallback, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// material components
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// components
import CustomerResult from './CustomerResult';
import InvoiceResult from './InvoiceResult';

// web worker
import workerApi from 'src/webWorkers/Api';

// constants
import { SEARCH_TYPES } from './constants';
import { COLORS_THEME } from 'src/styles/variables';
import { BOOKS_URI, MONEY_URI } from 'src/constants/url';
import { SENTRY_TAG } from 'src/constants/sentry';

// selectors
import { useAppState } from 'src/store/app/selectors';

// context
import { useLanguageContext } from '@components/LanguageProvider/context';

// defs
import {
  IBookValue,
  ICustomerValue,
  IInvoiceValue,
} from 'src/webWorkers/DB/types';

// helpers
import { captureException } from 'src/helpers/sentry';

// styles
import useButtonStyles from '@styles/ButtonsStyles';

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: 5,
    width: '100%',
    maxWidth: '284px',
    marginTop: '8px',
  },
  paper: {
    width: '100%',
    padding: '16px 0',
    borderRadius: '8px',
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    backgroundColor: COLORS_THEME.WHITE,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '12px',
    fontWeight: 500,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    marginLeft: '24px',
  },
  resultsList: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '320px',
    width: '100%',
    overflowY: 'auto',
    marginBottom: '16px',
  },
  viewAllBtn: {
    width: '100%',
    height: '32px',
    maxWidth: '236px',
    margin: '0 auto',
    fontSize: '14px',
    fontWeight: 700,
  },
  viewBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  noResultsText: {
    fontSize: '12px',
    fontWeight: 500,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    margin: '0 24px',
  },
}));

interface ISearchResultsMenu {
  open: boolean;
  anchorEl: React.RefObject<HTMLDivElement>;
  handleCloseMenu: VoidFunction;
  handleClickAway: (event: React.MouseEvent<EventTarget>) => void;
  searchType: string;
  searchText: string;
}

function SearchResultsMenu({
  open,
  anchorEl,
  handleCloseMenu,
  handleClickAway,
  searchType,
  searchText,
}: ISearchResultsMenu) {
  const classes = useStyles();
  const btnClasses = useButtonStyles();
  const history = useHistory();
  const { t } = useLanguageContext();
  const { getCurrentBook } = useAppState();
  const book: IBookValue = getCurrentBook() as IBookValue;
  const [customers, setCustomers] = useState<ICustomerValue[]>([]);
  const [invoices, setInvoices] = useState<IInvoiceValue[]>([]);

  const hasResults =
    searchType === SEARCH_TYPES.MONEY
      ? invoices.length > 0
      : customers.length > 0;

  const fetchCustomers = useCallback(
    (search: string) => {
      if (book === undefined) {
        return;
      }

      workerApi
        .getCustomers({
          bookId: book.book_id,
          search,
        })
        .then(({ data }) => {
          let newCustomers: ICustomerValue[] = [];
          newCustomers = [...newCustomers, ...data];
          setCustomers(newCustomers);
        });
    },
    [book]
  );
  const fetchInvoices = useCallback(
    (searchText: string) => {
      if (book) {
        workerApi
          .getInvoices({
            bookId: book.book_id,
            searchText,
          })
          .then(({ data }) => {
            setInvoices(data);
          })
          .catch((e) => {
            captureException(e, {
              tags: {
                module: SENTRY_TAG.FETCH_INVOICES,
              },
            });
          });
      }
    },
    [book]
  );

  useEffect(() => {
    if (searchType === SEARCH_TYPES.CUSTOMERS) {
      fetchCustomers(searchText);
    }
    if (searchType === SEARCH_TYPES.MONEY) {
      fetchInvoices(searchText);
    }
  }, [searchText, fetchCustomers, searchType, fetchInvoices]);

  const handleViewAllSearchResults = () => {
    if (searchType === SEARCH_TYPES.CUSTOMERS) {
      history.push(BOOKS_URI);
    } else {
      history.push(MONEY_URI);
    }
    handleCloseMenu();
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorEl.current}
      role={undefined}
      className={classes.popper}
      transition
      disablePortal
      placement={'bottom'}
    >
      <Paper className={classes.paper}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            {hasResults ? (
              <>
                <Typography className={classes.title}>
                  {searchType === SEARCH_TYPES.CUSTOMERS
                    ? t('customers_results')
                    : t('transactions_results')}
                </Typography>
                <div className={classes.resultsList}>
                  {searchType === SEARCH_TYPES.CUSTOMERS
                    ? customers.map((customer) => (
                        <CustomerResult
                          customer={customer}
                          key={customer.customer_id}
                          handleCloseSearch={handleCloseMenu}
                        />
                      ))
                    : invoices.map((invoice) => (
                        <InvoiceResult
                          invoice={invoice}
                          key={invoice.invoice_id}
                          handleCloseSearch={handleCloseMenu}
                        />
                      ))}
                </div>
              </>
            ) : (
              <Typography className={classes.noResultsText}>
                {t('searchresults_nothingfound')}
              </Typography>
            )}
            {hasResults && (
              <div className={classes.viewBtnWrapper}>
                <Button
                  onClick={handleViewAllSearchResults}
                  className={`${classes.viewAllBtn} ${btnClasses.greyBtn}`}
                >
                  {t('view_all_results')}
                </Button>
              </div>
            )}
          </div>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
}
export default memo(SearchResultsMenu);
