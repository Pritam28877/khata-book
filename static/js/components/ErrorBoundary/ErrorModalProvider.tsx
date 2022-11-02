// libs
import React, { memo, useState, useCallback, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

// components
import ErrorUI from './components/ErrorUI';

// context
import ErrorContext from './context';

// styles
const useStyles = makeStyles(() => ({
  errorBox: {
    minHeight: '360px',
    maxHeight: '100%',
  },
}));

// defs
interface IErrorModalProviderProps {
  children: React.ReactNode;
}

const reload = () => window.location.reload();

function ErrorModalProvider({ children }: IErrorModalProviderProps) {
  const [canShowError, setShowError] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    reload();
  };

  const showError = useCallback(() => setShowError(true), []);
  const values = useMemo(() => ({ showError }), [showError]);

  return (
    <ErrorContext.Provider value={values}>
      {children}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={canShowError}
      >
        <DialogContent>
          <ErrorUI className={classes.errorBox} />
        </DialogContent>
      </Dialog>
    </ErrorContext.Provider>
  );
}

export default memo(ErrorModalProvider);
