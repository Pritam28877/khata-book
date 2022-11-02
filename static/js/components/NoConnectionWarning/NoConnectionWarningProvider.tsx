// libs
import React, { memo, useState, useMemo, useEffect } from 'react';

// components
import NoConnectionUI from './NoConnectionUI';

// context
import NoConnectionContext from './context';

// helpers
import useConnectionStatus from './useConnectionStatus';

// defs
interface INoConnectionProvider {
  children: React.ReactNode;
}

function NoConnectionProvider({ children }: INoConnectionProvider) {
  const onlineStatus = useConnectionStatus();
  const [showNoConnection, setShowNoConnection] = useState(!onlineStatus);
  const handleCloseNoConnection = () => setShowNoConnection(false);

  useEffect(() => {
    setShowNoConnection(!onlineStatus);
  }, [onlineStatus]);
  const values = useMemo(() => ({ showNoConnection }), [showNoConnection]);

  return (
    <NoConnectionContext.Provider value={values}>
      {children}
      <NoConnectionUI
        open={showNoConnection}
        onClose={handleCloseNoConnection}
      />
    </NoConnectionContext.Provider>
  );
}

export default memo(NoConnectionProvider);
