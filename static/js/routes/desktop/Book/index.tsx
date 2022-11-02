// libs
import React, { memo, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// global components
import BookHeader from 'src/components/Book/desktop/components/Header';

// components
import ChildRoutes from './ChildRoutes';

// constants
import { COLORS, COLORS_THEME, DWEB_SIDEBAR_WIDTH } from 'src/styles/variables';
import AppBar from '@components/Book/desktop/components/AppBar';
import AddNewLedger from '@components/Book/desktop/components/AddNewLedger';
import { useAppState } from '@store/app/selectors';
import { ADD_BUSINESS_URI } from 'src/constants/url';

// helpers
import { getUserInfo } from 'src/helpers/user';

// styles
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
  leftPane: {
    width: `${DWEB_SIDEBAR_WIDTH}px`,
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRight: `1px solid ${COLORS.GREY}`,
    minHeight: '100vh',
  },
  leftPaneContent: {
    position: 'relative',
    left: 0,
    width: `${DWEB_SIDEBAR_WIDTH}px`,
    borderRight: '1px solid #e6e6e6',
    background: '#fff',

    scrollbarWidth: 'thin',
    '&::after': {
      content: '""',
      height: '160px',
      display: 'block',
    },
    '&::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: '#fff',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#babac0',
      borderRadius: '4px',
      width: '4px',
      border: '2px solid #fff',
    },
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
  },
  rightPane: {
    minHeight: '100%',
    flex: '1',
    backgroundColor: COLORS_THEME.APP_BACKGROUND,
    display: 'flex',
    flexDirection: 'column',
  },
}));

function Book() {
  const classes = useStyles();
  const [addNewLedger, setAddNewLedger] = useState(false);
  const { getCurrentBook } = useAppState();
  const currentBook = getCurrentBook();
  const user = getUserInfo();
  const history = useHistory();

  useEffect(() => {
    // prevent accessing  if user does not have ledger
    if (user && (!currentBook || currentBook?.deleted)) {
      history.replace(ADD_BUSINESS_URI);
    }
  }, [currentBook, history, user]);

  const handleAddNewLedger = () => setAddNewLedger(!addNewLedger);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.leftPane}>
          <BookHeader handleAddNewLedger={handleAddNewLedger} />
        </div>
        <div className={classes.rightPane}>
          <AppBar />
          <ChildRoutes />
        </div>
        <AddNewLedger
          showModal={addNewLedger}
          handleAddNewLedger={handleAddNewLedger}
        />
      </div>
    </>
  );
}

export default memo(Book);
