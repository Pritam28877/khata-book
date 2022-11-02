// libs
import React, { memo, Suspense, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// global components
import Loader from 'src/components/Loader';

import Settings from '../Settings';
import AboutUs from 'src/components/AboutUs';
import Reports from 'src/components/Reports';
import Profile from 'src/components/Profile/desktop';
import PaymentDetails from 'src/components/PaymentDetails';

// decorators
import authorized from 'src/decorators/authorized';

// constants
import {
  ABOUT_US_URI,
  MY_PROFILE_URI,
  CURRENCY_URI,
  BACKUP_INFO_URI,
  RECYCLE_BIN_URI,
  PASSWORD_LOCK_URI,
  SETTINGS_URI,
  REPORTS_URI,
  MONEY_URI,
  BOOKS_URI,
  ORDER_DETAILS_URI,
  ORDER_QR_URI,
  PAYMENT_DETAILS,
  COMPLETE_KYC_URI,
} from 'src/constants/url';
import OrderQrCodePage from '@components/OrderQrCodePage';
import QrOrderResult from '@components/OrderQrCodePage/result';

// components
const Transactions = React.lazy(
  () =>
    import(
      /* webpackChunkName: "dweb-transactions" */ 'src/routes/desktop/Transactions'
    )
);

const EditTransaction = React.lazy(
  () =>
    import(
      /* webpackChunkName: "dweb-transactions" */ 'src/components/Customer/Transactions/Desktop/components/TransactionEditForm'
    )
);

const TransactionDetails = React.lazy(
  () =>
    import(
      /* webpackChunkName: "dweb-transactions" */ 'src/components/Customer/TransactionDetails/components/DesktopDetails'
    )
);

const AddCustomer = React.lazy(
  () =>
    import(
      /* webpackChunkName: "dweb-customer" */ 'src/routes/desktop/AddCustomer'
    )
);

const BookUI = React.lazy(
  () =>
    import(/* webpackChunkName: "dweb-book" */ 'src/components/Book/desktop')
);
const LandingMoney = React.lazy(
  () =>
    import(/* webpackChunkName: "dweb-money" */ 'src/components/LandingMoney')
);

const Money = React.lazy(
  () => import(/* webpackChunkName: "dweb-money" */ 'src/components/Money')
);

function ChildRoutes() {
  const [customerId, setCustomerId] = useState('');
  const history = useHistory();

  const goToCustomerTransaction = (customerId: string) => {
    history.push(`/book/${customerId}`);
    setCustomerId(customerId);
  };

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path="/book/add-customer"
          exact
          component={authorized(AddCustomer)}
        />
        <Route
          path="/book/:customerId"
          exact
          component={authorized(Transactions)}
        />
        <Route
          path="/book/:customerId/add"
          exact
          component={authorized(Transactions)}
        />
        <Route
          path="/book/:customerId/:transactionId/edit"
          exact
          component={authorized(EditTransaction)}
        />
        <Route
          path="/book/:customerId/:transactionId"
          exact
          component={authorized(TransactionDetails)}
        />
        <Route
          path={BOOKS_URI}
          exact
          render={() => (
            <BookUI
              customerId={customerId}
              setCustomerId={goToCustomerTransaction}
            />
          )}
        />
        <Route path={MONEY_URI} exact component={authorized(Money)} />
        <Route
          path={ORDER_QR_URI}
          exact
          component={authorized(OrderQrCodePage)}
        />
        <Route
          path={ORDER_DETAILS_URI}
          exact
          component={authorized(QrOrderResult)}
        />
        <Route
          path={`${PAYMENT_DETAILS}/:paymentId`}
          exact
          component={authorized(PaymentDetails)}
        />
        <Route
          path={COMPLETE_KYC_URI}
          exact
          component={authorized(LandingMoney)}
        />
        <Route path={REPORTS_URI} exact component={authorized(Reports)} />
        <Route path={SETTINGS_URI} exact component={authorized(Settings)} />
        <Route path={CURRENCY_URI} exact component={authorized(Settings)} />
        <Route path={RECYCLE_BIN_URI} exact component={authorized(Settings)} />
        <Route
          path={PASSWORD_LOCK_URI}
          exact
          component={authorized(Settings)}
        />
        <Route path={BACKUP_INFO_URI} exact component={authorized(Settings)} />
        <Route path={ABOUT_US_URI} exact component={authorized(AboutUs)} />
        <Route path={MY_PROFILE_URI} exact component={authorized(Profile)} />
      </Switch>
    </Suspense>
  );
}

export default memo(ChildRoutes);
