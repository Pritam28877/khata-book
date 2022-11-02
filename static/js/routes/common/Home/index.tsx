// libs
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// components
import Loader from 'src/components/Loader';

// constants
import { LANGUAGE_URI, LOGIN_URI, SYNC_DATA_URI } from 'src/constants/url';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// selectors
import { useAppState } from 'src/store/app/selectors';

// helpers
import { setUser } from 'src/helpers/analytics';

function Home() {
  const history = useHistory();
  const {
    hasLocale,
    isLoggedIn,
    getUserInfo,
    // getCurrentBook,
  } = useAppState();

  useEffect(() => {
    if (hasLocale() === false) {
      history.replace(LANGUAGE_URI);
      return;
    }

    const userInfo = getUserInfo();

    if (isLoggedIn() === false || userInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    // analytics
    setUser(userInfo.user_id);

    // if user has not created any book
    // if (userInfo.is_new_user) {
    //   history.replace(ADD_BUSINESS_URI);
    //   return;
    // }

    history.replace(SYNC_DATA_URI);
  }, [getUserInfo, hasLocale, history, isLoggedIn]);

  const { t } = useLanguageContext();

  return <Loader text={t('khatabook_preparing')} />;
}

export default Home;
