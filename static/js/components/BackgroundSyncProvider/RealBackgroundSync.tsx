// libs
import { memo, useEffect } from 'react';

// helpers
import { canSync } from 'src/helpers/sync';
import {
  isSynced,
  isSyncing,
  localSyncStatus,
  localPromise,
  sync,
} from './helper';

// selectors
import { useAppState } from 'src/store/app/selectors';

interface IRealBackgroundSyncProps {
  setIsSynced: (isSynced: boolean) => void;
  setIsLocalSynced: (isLocalSynced: boolean) => void;
}

function RealBackgroundSync({
  setIsSynced,
  setIsLocalSynced,
}: IRealBackgroundSyncProps) {
  const { getDeviceInfo, getUserInfo } = useAppState();

  // on user login we try and sync remote data
  useEffect(() => {
    let isActive = true;
    const deviceInfo = getDeviceInfo();
    const user = getUserInfo();

    if (isSynced) {
      setIsSynced(true);
      setIsLocalSynced(localSyncStatus);
      return;
    }

    if (isSyncing) {
      localPromise.then((data) => {
        setIsSynced(true);
        setIsLocalSynced(data.status);
      });
      return;
    }

    // check if we can sync based on last sync time or any active sync
    if (
      canSync(true) === false ||
      user === undefined ||
      deviceInfo === undefined
    ) {
      setIsSynced(true);
      setIsLocalSynced(false);
      return;
    }

    const { token } = deviceInfo;
    const { user_id: userId } = user;

    sync(token, userId).then((data) => {
      if (isActive === false) {
        return;
      }

      setIsSynced(true);
      setIsLocalSynced(data.status);
    });

    return () => {
      isActive = false;
    };
  }, [getDeviceInfo, getUserInfo, setIsLocalSynced, setIsSynced]);

  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    const user = getUserInfo();

    // listen to tab visibility
    // if tab becomes visible check last sync info and sync if we have not synced for long time
    const onVisibilityChange = () => {
      if (document.hidden) {
        return;
      }

      // check if we can sync based on last sync time or any active sync
      if (
        canSync() === false ||
        user === undefined ||
        deviceInfo === undefined
      ) {
        return;
      }

      const { token } = deviceInfo;
      const { user_id: userId } = user;

      sync(token, userId);
    };

    document.addEventListener('visibilitychange', onVisibilityChange, false);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [getDeviceInfo, getUserInfo]);

  return null;
}

export default memo(RealBackgroundSync);
