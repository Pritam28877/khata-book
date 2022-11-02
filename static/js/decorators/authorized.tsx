// libs
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// global components
import Loader from 'src/components/Loader';

// selectors
import { useAppState } from 'src/store/app/selectors';

// helpers
import { setUser } from 'src/helpers/analytics';
import { isIndianPhoneNumberUser } from 'src/helpers/user';

// constants
import {
  HOME_URI,
  MONEY_URI,
  BOOKS_URI,
  SYNC_DATA_URI,
  ADD_BUSINESS_URI,
} from 'src/constants/url';

function authorized<T>(Component: React.ComponentClass<T> | React.FC<T>) {
  return function Authorized(props: T) {
    const { isLoggedIn, getUserInfo, getCurrentBook } = useAppState();
    const history = useHistory();
    const currentBook = getCurrentBook();

    useEffect(() => {
      if (isLoggedIn() === false && !currentBook?.deleted) {
        history.replace(HOME_URI);
      }

      if (
        !history.location.pathname.includes(SYNC_DATA_URI) &&
        currentBook?.deleted
      ) {
        history.replace(ADD_BUSINESS_URI);
      }
      const userInfo = getUserInfo();

      if (userInfo !== undefined) {
        // analytics
        setUser(userInfo.user_id);
      }

      // prevent non-indian users from accessing money tab
      if (
        !isIndianPhoneNumberUser() &&
        history.location.pathname.includes(MONEY_URI)
      ) {
        history.replace(BOOKS_URI);
      }
    }, [history, isLoggedIn, getUserInfo, currentBook]);

    return isLoggedIn() ? <Component {...props} /> : <Loader />;
  };
}

export default authorized;
