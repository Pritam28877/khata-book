// libs
import React, { Suspense, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

// global components
import Loader from 'src/components/Loader';
import NotFoundComponent from 'src/components/NotFoundPage';

// decorators
import authorized from 'src/decorators/authorized';
import {
  ABOUT_US_URI,
  BOOKS_URI,
  LANGUAGE_URI,
  LOGGING_OUT,
  LOGIN_URI,
  LOGOUT_URI,
  MONEY_URI,
  MY_PROFILE_URI,
  REPORTS_URI,
  SETTINGS_URI,
  SYNC_DATA_URI,
  VERIFY_URI,
  ADD_BUSINESS_URI,
  COMPLETE_KYC_URI,
} from 'src/constants/url';

// components
const Home = React.lazy(
  () => import(/* webpackChunkName: "dweb-book" */ './Home')
);
const LanguageScreen = React.lazy(
  () => import(/* webpackChunkName: "dweb-book" */ './LanguageScreen')
);
const LoggingOut = React.lazy(
  () =>
    import(/* webpackChunkName: "dweb-logout" */ 'src/routes/common/LoggingOut')
);

const SyncData = React.lazy(
  () => import(/* webpackChunkName: "sync-data" */ './SyncData')
);

const Logout = React.lazy(
  () => import(/* webpackChunkName: "logout" */ 'src/routes/common/Logout')
);

const Book = React.lazy(
  () => import(/* webpackChunkName: "dweb-book" */ './Book')
);

const OnBoarding = React.lazy(
  () => import(/* webpackChunkName: "dweb-onboarding" */ './OnBoarding')
);

function DesktopRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={LANGUAGE_URI} exact component={LanguageScreen} />
        <Route path={ADD_BUSINESS_URI} exact component={OnBoarding} />
        <Route path={LOGIN_URI} exact component={OnBoarding} />
        <Route path={VERIFY_URI} exact component={OnBoarding} />
        <Route path={SYNC_DATA_URI} exact component={authorized(SyncData)} />
        <Route path={LOGGING_OUT} exact component={LoggingOut} />
        <Route path={LOGOUT_URI} exact component={Logout} />
        <Route path={BOOKS_URI} component={authorized(Book)} />
        <Route path={SETTINGS_URI} component={authorized(Book)} />
        <Route path={ABOUT_US_URI} component={authorized(Book)} />
        <Route path={MONEY_URI} component={authorized(Book)} />
        <Route path={COMPLETE_KYC_URI} component={authorized(Book)} />
        <Route path={REPORTS_URI} component={authorized(Book)} />
        <Route path={MY_PROFILE_URI} component={authorized(Book)} />
        <Route path="*" component={NotFoundComponent} />
      </Switch>
    </Suspense>
  );
}

export default memo(DesktopRoutes);
