// libs
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { captureException } from 'src/helpers/sentry';

// worker api
import workerApi from 'src/webWorkers/Api';

// defs
import { IBookValue } from 'src/webWorkers/DB/types';

// actions
import { useAppActions } from 'src/store/app/actions';

// selectors
import { useAppState } from 'src/store/app/selectors';

// material components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

// components
import TextOverflowTooltip from '@components/TextOverflowTooltip';

// constants
import {
  PIXEL_SIZE,
  FONTWEIGHT,
  COLORS,
  COLORS_THEME,
} from 'src/styles/variables';
import { SENTRY_TAG } from 'src/constants/sentry';
import { BOOKS_URI } from 'src/constants/url';

// contexts
import { useErrorContext } from 'src/components/ErrorBoundary/context';
import { useLanguageContext } from '@components/LanguageProvider/context';
import { useSearchContext } from '@components/SearchProvider/context';

// helpers
import {
  listenCustomerChange,
  listenCustomerDeleted,
} from 'src/helpers/customEvents/listeners';
import { dispatchBookChanged } from 'src/helpers/customEvents/index';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    position: 'relative',
  },
  list: {
    paddingTop: '0px',
    overflowY: 'auto',
    maxHeight: '266px',
  },
  listItem: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(66, 136, 222,0.14)',
      '& .MuiAvatar-root': {
        backgroundColor: 'rgba(0, 75, 172,0.2)',
        color: COLORS_THEME.SECONDARY_COLOR,
      },
    },
  },
  buttonMargin: {
    margin: theme.spacing(2),
  },
  btnBare: {
    color: `${COLORS.BLUE}`,
    boxShadow: 'none',
    border: `1px solid ${COLORS.BLUE}`,
    fontWeight: FONTWEIGHT.BOLD,
  },
  avatar: {
    width: '40px',
    height: '40px',
    backgroundColor: COLORS_THEME.MID_BLUE,
    marginRight: '12px',
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    fontWeight: FONTWEIGHT.SEMIBOLD,
    color: COLORS_THEME.WHITE,
  },
  doveAvatar: {
    backgroundColor: `${COLORS.AVATAR_GREY}`,
    color: `${COLORS.DOVE_GREY}`,
  },
  selectedBookText: {
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    color: `${COLORS.BLUE}`,
    fontWeight: FONTWEIGHT.BOLD,
  },
  bookText: {
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    fontWeight: FONTWEIGHT.SEMIBOLD,
    color: `${COLORS.BLACK}`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '180px',
  },
  modifyGutters: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  sizeIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  animationContainer: {
    height: '50px',
    width: '100%',
    position: 'relative',
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  top: {
    color: COLORS.LITE_BLUE,
    animationDuration: '550ms',
    position: 'absolute',
    left: '50%',
    marginLeft: '-10px',
  },
  circle: {
    strokeLinecap: 'round',
  },
  divider: {},
}));

interface IBookListing {
  bookDeleted: string;
  toggleBookListing: () => void;
}

function BookListing({ bookDeleted, toggleBookListing }: IBookListing) {
  const classes = useStyles();
  const history = useHistory();
  const [books, setBooks] = useState<IBookValue[]>([]);
  const [counts, setCounts] = useState<Array<number>>([]);
  const [customerDeleted, setCustomerDeleted] = useState(false);
  const [customerChanged, setCustomerChanged] = useState(false);
  const { getCurrentBook } = useAppState();
  const { setBook } = useAppActions();
  const { showError } = useErrorContext();
  const { t } = useLanguageContext();
  const { searchText, setSearchText } = useSearchContext();

  const currentBook = getCurrentBook();
  const bookId = currentBook?.book_id || '0';

  const handleToggle = (book_id: string) => {
    const book = books.find((obj) => {
      return obj.book_id === book_id;
    });
    toggleBookListing();
    if (book !== undefined) {
      setBook(book);
      dispatchBookChanged(book);
      // clear search upon book change
      if (searchText.length > 0) {
        setSearchText('');
      }
      // redirect to home page upon book change
      if (book.deleted !== 1 && history.location.pathname !== `/${BOOKS_URI}`) {
        history.push(BOOKS_URI);
      }
    }
  };

  useEffect(() => {
    workerApi
      .getBooks()
      .then((booksData) => {
        setBooks(booksData.filter((book) => book.deleted !== 1));
      })
      .catch((e) => {
        showError();
        captureException(e, {
          tags: {
            module: SENTRY_TAG.BOOK_LISTING,
          },
          extra: {
            worker: 'GET_BOOKS',
          },
        });
      });
  }, [showError, bookDeleted]);

  const customerDeletedListener = listenCustomerDeleted(() => {
    setCustomerDeleted(!customerDeleted);
  });

  const customerChangedListener = listenCustomerChange(() => {
    setCustomerChanged(!customerChanged);
  });

  // for tracking customer addition and deletion and updating customers count
  useEffect(() => {
    return () => {
      customerDeletedListener();
      customerChangedListener();
    };
  }, [customerDeletedListener, customerChangedListener]);

  useEffect(() => {
    const countPromises: Promise<number>[] = [];
    books.forEach((bookInfo) => {
      countPromises.push(
        workerApi
          .getCustomerCount(bookInfo.book_id)
          .then((count) => {
            return count;
          })
          .catch((e) => {
            showError();
            captureException(e, {
              tags: {
                module: SENTRY_TAG.BOOK_LISTING,
              },
              extra: {
                worker: 'GET_CUSTOMER_COUNT',
              },
            });
            return 0;
          })
      );
    });

    Promise.all(countPromises).then((results: Array<number>) => {
      setCounts(results);
    });
  }, [books, showError, customerChanged, customerDeleted]);

  return (
    <div className={classes.root}>
      <List component="nav" className={classes.list}>
        {books.map((book, key) => (
          <div key={book.book_id}>
            {book.book_id !== bookId && (
              <ListItem
                key={book.book_id}
                component="a"
                onClick={() => handleToggle(book.book_id)}
                classes={{
                  root: classes.listItem,
                  gutters: classes.modifyGutters,
                }}
              >
                <ListItemAvatar>
                  {book.business_image !== null ? (
                    <Avatar
                      className={classes.avatar}
                      src={book.business_image}
                    />
                  ) : (
                    <Avatar className={classes.avatar}>
                      {getInitials(book.business_name || book.book_name)}
                    </Avatar>
                  )}
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <TextOverflowTooltip
                      text={book.business_name || book.book_name}
                      className={classes.bookText}
                      arrow={true}
                      placement="top-start"
                    />
                  }
                  secondary={counts[key] + ' ' + t('customers', [''])}
                />
              </ListItem>
            )}
          </div>
        ))}
      </List>
    </div>
  );
}

export default BookListing;
