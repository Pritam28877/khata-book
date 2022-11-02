// libs
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// global components
import HistoryStateCleaner from 'src/components/HistoryStateCleaner';

// helpers
import { initialize as initializeAnalytics } from 'src/helpers/analytics';

// components
import MobileRoutes from './mobile';
import DesktopRoutes from './desktop';

// context
import { useAppTypeContext } from 'src/components/AppTypeProvider/context';
import LanguageProvider from '@components/LanguageProvider';
import CurrencyProvider from '@components/CurrencyProvider';
import ToastMessageProvider from '@components/ToastMessage/ToastMessageProvider';
import NoConnectionWarningProvider from '@components/NoConnectionWarning/NoConnectionWarningProvider';
import SearchProvider from '@components/SearchProvider';

function Routes() {
  const { isMobile } = useAppTypeContext();

  useEffect(() => {
    try {
      document.body.classList.remove('base-not-loaded');

      // we are loading analytics script once our Routes component is loaded
      // we wont loose events as data is still flowing to dataLayer variable
      // which we have created in public/index.html
      initializeAnalytics(isMobile);
    } catch (e) {
      /** DO NOTHING */
    }
  }, [isMobile]);

  return (
    <Router>
      <HistoryStateCleaner />
      <CurrencyProvider>
        <LanguageProvider>
          <ToastMessageProvider>
            <SearchProvider>
              {isMobile ? (
                <MobileRoutes />
              ) : (
                <NoConnectionWarningProvider>
                  <DesktopRoutes />
                </NoConnectionWarningProvider>
              )}
            </SearchProvider>
          </ToastMessageProvider>
        </LanguageProvider>
      </CurrencyProvider>
    </Router>
  );
}

export default Routes;
