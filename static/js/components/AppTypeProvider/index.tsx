// libs
import React, { useState, useEffect, useMemo, memo } from 'react';

// global components
import Loader from 'src/components/Loader';

// contexts
import AppTypeContext from './context';

// defs
interface IAppTypeProviderProps {
  children: React.ReactNode;
}

const MOBILE_REGEXP = /mobile|phone|ipad|mini|tablet/i;

function AppTypeProvider({ children }: IAppTypeProviderProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (MOBILE_REGEXP.test(window.navigator.userAgent)) {
      setIsMobile(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsDesktop(true);
    }

    setShowLoader(false);
  }, []);

  const values = useMemo(
    () => ({ isMobile, isDesktop }),
    [isDesktop, isMobile]
  );

  if (showLoader) {
    return <Loader />;
  }

  return (
    <AppTypeContext.Provider value={values}>{children}</AppTypeContext.Provider>
  );
}

export default memo(AppTypeProvider);
