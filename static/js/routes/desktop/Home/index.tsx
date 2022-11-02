// libs
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// components
import Loader from 'src/components/Loader';

// constants
import { LOGIN_URI, SYNC_DATA_URI } from 'src/constants/url';
import { DEFAULT_LOCALE } from 'src/constants/locale';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// selectors
import { useAppState } from 'src/store/app/selectors';

// actions
import { useAppActions } from 'src/store/app/actions';

// helpers
import { onUniqueLoginSuccess } from 'src/components/Desktop/OnBoarding/analytics';

function Home() {
  const history = useHistory();
  const { hasLocale, isLoggedIn, getUserInfo } = useAppState();
  const { setLocale } = useAppActions();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (isLoggedIn() === false || userInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    if (hasLocale() === false) {
      setLocale(DEFAULT_LOCALE);
      return;
    }

    history.replace(SYNC_DATA_URI);

    // analytics
    if (isLoggedIn() && userInfo !== undefined && userInfo.is_new_user) {
      onUniqueLoginSuccess('manual');
    }
  }, [getUserInfo, hasLocale, history, isLoggedIn]);

  const { t } = useLanguageContext();

  return <Loader text={t('khatabook_preparing')} />;
}

export default Home;
