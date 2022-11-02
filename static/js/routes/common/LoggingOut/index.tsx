// libs
import React, { memo, useEffect } from 'react';

// global components
import Loader from 'src/components/Loader';

// constants
import { HOME_URI } from 'src/constants/url';

function LoggingOut() {
  useEffect(() => {
    // fallback if we miss loginStatus change broadcast
    // between reloads
    const timer = window.setTimeout(() => {
      window.location.href = HOME_URI;
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return <Loader />;
}

export default memo(LoggingOut);
