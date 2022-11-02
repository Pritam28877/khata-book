// libs
import React, { memo, useState, useCallback, useMemo } from 'react';

// components
import ToastMessage from './components/ToastMessageUI';

// context
import ToastMessageContext from './context';

// const
import { TOAST_TYPE } from './constants';
interface IToastMessageProps {
  children: React.ReactNode;
}

function ToastMessageProvider({ children }: IToastMessageProps) {
  const [openToastMessage, setOpenToastMessage] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | React.ReactNode>(
    ''
  );
  const [showViewButton, setShowViewButton] = useState<boolean>(false);
  const [toastType, setToastType] = useState(TOAST_TYPE.INFO);
  const [handleViewClick, setToastActionHandler] = useState<VoidFunction>(
    () => {
      /** DO NOTHING */
    }
  );

  const showToastMessage = useCallback(() => setOpenToastMessage(true), []);

  const values = useMemo(
    () => ({
      showToastMessage,
      setToastMessage,
      setToastActionHandler,
      setShowViewButton,
      setToastType,
    }),
    [
      showToastMessage,
      setToastMessage,
      setToastActionHandler,
      setShowViewButton,
      setToastType,
    ]
  );
  const handleCloseToastMessage = () => setOpenToastMessage(false);

  return (
    <ToastMessageContext.Provider value={values}>
      {children}
      <ToastMessage
        toastMessage={toastMessage}
        open={openToastMessage}
        handleClose={handleCloseToastMessage}
        actionHandler={handleViewClick}
        showViewButton={showViewButton}
        toastType={toastType}
      />
    </ToastMessageContext.Provider>
  );
}

export default memo(ToastMessageProvider);
