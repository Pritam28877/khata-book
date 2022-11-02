// libs
import React, { Suspense, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

// global components
import Loader from 'src/components/Loader';
import NotFoundComponent from 'src/components/NotFoundPage';
import Login from 'src/components/Login';
import VerifyMobile from 'src/components/Login/VerifyMobile';

// components
import Home from 'src/routes/common/Home';
import Internationalization from './Internationalization';
import LoggingOut from 'src/routes/common/LoggingOut';

// decorators
import authorized from 'src/decorators/authorized';

const Book = React.lazy(() => import(/* webpackChunkName: "book" */ './Book'));

const Transactions = React.lazy(
  () => import(/* webpackChunkName: "transactions" */ './Transactions')
);

const AddBusiness = React.lazy(
  () => import(/* webpackChunkName: "add-business" */ './AddBusiness')
);

const AddCustomer = React.lazy(
  () => import(/* webpackChunkName: "add-customer" */ './AddCustomer')
);

const SyncData = React.lazy(
  () => import(/* webpackChunkName: "sync-data" */ 'src/routes/common/SyncData')
);

const Settings = React.lazy(
  () => import(/* webpackChunkName: "settings" */ './Settings')
);

const ProfileEdit = React.lazy(
  () => import(/* webpackChunkName: "profile" */ './Settings/ProfileEdit')
);

const Contact = React.lazy(
  () => import(/* webpackChunkName: "contact" */ './Settings/Contact')
);

const CreateANewKhata = React.lazy(
  () =>
    import(/* webpackChunkName: "create-khata" */ './Settings/CreateANewKhata')
);

const AddTransaction = React.lazy(
  () => import(/* webpackChunkName: "transaction-form" */ './AddTransaction')
);

const TransactionDetail = React.lazy(
  () =>
    import(/* webpackChunkName: "transaction-detail" */ './TransactionDetail')
);

const EditTransaction = React.lazy(
  () => import(/* webpackChunkName: "transaction-form" */ './EditTransaction')
);

const Logout = React.lazy(
  () => import(/* webpackChunkName: "logout" */ 'src/routes/common/Logout')
);

function MobileRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book" exact component={authorized(Book)} />
        <Route path="/language" exact component={Internationalization} />
        <Route path="/login" exact component={Login} />
        <Route path="/verify" exact component={VerifyMobile} />
        <Route path="/add-customer" exact component={authorized(AddCustomer)} />
        <Route
          path="/add-transaction/:customerId/:transactionType"
          exact
          component={authorized(AddTransaction)}
        />
        <Route path="/add-business" exact component={authorized(AddBusiness)} />
        <Route
          path="/transactions/:customerId"
          exact
          component={authorized(Transactions)}
        />
        <Route
          path="/transaction/details/:transactionId"
          exact
          component={authorized(TransactionDetail)}
        />
        <Route
          path="/transaction/edit/:transactionId"
          exact
          component={authorized(EditTransaction)}
        />
        <Route path="/sync-data" exact component={authorized(SyncData)} />

        <Route path="/settings" exact component={authorized(Settings)} />
        <Route
          path="/settings/profile"
          exact
          component={authorized(ProfileEdit)}
        />
        <Route path="/settings/contact" exact component={authorized(Contact)} />
        <Route
          path="/settings/create-khata"
          exact
          component={authorized(CreateANewKhata)}
        />
        <Route path="/logging-out" exact component={LoggingOut} />
        <Route path="/logout" exact component={Logout} />
        <Route path="*" component={NotFoundComponent} />
      </Switch>
    </Suspense>
  );
}

export default memo(MobileRoutes);
