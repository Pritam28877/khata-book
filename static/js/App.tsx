// libs
import React, { useEffect, useState, useRef, useCallback } from 'react';

// material components
import Button from '@material-ui/core/Button';
import Snackbar, { SnackbarCloseReason } from '@material-ui/core/Snackbar';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

// components
import AppTypeProvider from 'src/components/AppTypeProvider';
import BaseStyles from 'src/styles/BaseStyles';
import ThemeProvider from 'src/styles/ThemeProvider';
import ErrorBoundary from 'src/components/ErrorBoundary';
import BackgroundSyncProvider from 'src/components/BackgroundSyncProvider';

// helpers
import { init as sentryInit } from 'src/helpers/sentry';
import { listenBroadcast } from 'src/helpers/broadcast';

import { initializeFirebase } from './helpers/firebase';
import { listenServiceWorkerChange } from 'src/helpers/customEvents/listeners';

import Routes from './routes';
import StateProvider from './store';

// initializing sentry
sentryInit();

// initializing Firebase
initializeFirebase();

// initialize listening to broadcasts
listenBroadcast();

function App() {
  const [showSWUpdate, setShowSWUpdate] = useState(false);
  const newSW = useRef<ServiceWorker | null>(null);

  useEffect(() => {
    const onSWUpdate = (sw: ServiceWorker) => {
      newSW.current = sw;
      setShowSWUpdate(true);
    };

    const clearFunc = listenServiceWorkerChange(onSWUpdate);

    return () => {
      clearFunc();
    };
  }, []);

  const onSnackBarClose = useCallback(
    (event: React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }

      setShowSWUpdate(false);
    },
    []
  );

  const onSWReload = useCallback(() => {
    if (newSW.current !== null) {
      // ask new service worker to skip waiting
      newSW.current.postMessage({ type: 'SKIP_WAITING' });
    }
    setShowSWUpdate(false);
  }, []);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider>
        <BaseStyles />
        <ErrorBoundary>
          <StateProvider>
            <BackgroundSyncProvider>
              <AppTypeProvider>
                <Routes />
              </AppTypeProvider>
            </BackgroundSyncProvider>
          </StateProvider>

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={showSWUpdate}
            onClose={onSnackBarClose}
            message={'Update Available'}
            action={
              <Button color="secondary" size="small" onClick={onSWReload}>
                Reload
              </Button>
            }
          />
        </ErrorBoundary>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
