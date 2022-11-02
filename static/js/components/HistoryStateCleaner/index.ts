// libs
import { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// constants
import { NAV_PREFIX } from 'src/hooks/useNavHelper/constants';

// defs
import { INavHistory } from 'src/hooks/useNavHelper/types';

// Clear history states if user reloaded when state pushed by app and could not clear
function HistoryStateCleaner() {
  const history = useHistory<INavHistory>();

  useEffect(() => {
    if (history.location.state === undefined) {
      return;
    }

    Object.keys((navKey: string) => {
      // check if state is added by App
      if (navKey.indexOf(NAV_PREFIX) !== 0) {
        return;
      }

      // clear history state
      history.goBack();
    });
  }, [history]);

  return null;
}

export default memo(HistoryStateCleaner);
