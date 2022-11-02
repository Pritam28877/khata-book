// libs
import React, { memo, Suspense, useMemo, useState } from 'react';

// context
import BackgroundContext from './context';

// selectors
import { useAppState } from 'src/store/app/selectors';

// components
const RealBackgroundSync = React.lazy(
  () => import(/* webpackChunkName: "background-sync" */ './RealBackgroundSync')
);

interface IBackgroundSyncProviderProps {
  children: React.ReactNode;
}

function BackgroundSyncProvider({ children }: IBackgroundSyncProviderProps) {
  const { isLoggedIn } = useAppState();

  const [isSynced, setIsSynced] = useState(false);
  const [isLocalSynced, setIsLocalSynced] = useState(false);

  const values = useMemo(
    () => ({
      isSynced,
      isLocalSynced,
    }),
    [isLocalSynced, isSynced]
  );

  return (
    <BackgroundContext.Provider value={values}>
      {isLoggedIn() && (
        <Suspense fallback={null}>
          <RealBackgroundSync
            setIsSynced={setIsSynced}
            setIsLocalSynced={setIsLocalSynced}
          />
        </Suspense>
      )}
      {children}
    </BackgroundContext.Provider>
  );
}

export default memo(BackgroundSyncProvider);
