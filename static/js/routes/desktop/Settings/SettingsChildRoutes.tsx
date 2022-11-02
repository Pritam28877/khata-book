// libs
import React, { memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Loader from 'src/components/Loader';
import LanguageSettings from '@components/Settings/desktop/components/LanguageSettings';
import RecycleBin from '@components/Settings/desktop/components/RecycleBin';

// constants
import {
  SETTINGS_URI,
  RECYCLE_BIN_URI,
  CURRENCY_URI,
  BACKUP_INFO_URI,
} from 'src/constants/url';
import BackupSettings from '@components/Settings/desktop/components/BackupSettings';
import CurrencySettings from '@components/Settings/desktop/components/CurrencySettings';

function SettingsChildRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={SETTINGS_URI} exact component={LanguageSettings} />
        <Route path={RECYCLE_BIN_URI} exact component={RecycleBin} />
        <Route path={CURRENCY_URI} exact component={CurrencySettings} />
        <Route path={BACKUP_INFO_URI} exact component={BackupSettings} />
      </Switch>
    </Suspense>
  );
}
export default memo(SettingsChildRoutes);
