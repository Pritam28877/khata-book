// libs
import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Typography } from '@material-ui/core';

// components
import Button from 'src/components/Button';

//material components
import FormHelperText from '@material-ui/core/FormHelperText';

// icons
import closeIcon from 'src/assets/images/closeModalIcon.svg';

// helpers
import { captureException } from 'src/helpers/sentry';

import { BOOKS_URI, LOGIN_URI } from 'src/constants/url';
import { SENTRY_TAG } from 'src/constants/sentry';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import { useErrorContext } from 'src/components/ErrorBoundary/context';

// worker api
import workerApi from 'src/webWorkers/Api';

// actions
import { useAppActions } from 'src/store/app/actions';

// selectors
import { useAppState } from 'src/store/app/selectors';

// defs
import { IBookValue } from 'src/webWorkers/DB/types';

// constants
import { COLORS, MODAL_STYLE } from 'src/styles/variables';
import { MAX_BOOK_NAME_LENGTH } from 'src/constants/book';
import TextInputField from '@components/TextInputField';

//analytics
import { onAddNewLedgerGetStartedClicked } from '../analytics';

// styles
import useButtonStyles from '@styles/ButtonsStyles';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    position: 'absolute',
    width: 465,
    height: 232,
    backgroundColor: COLORS.WHITE,
    borderRadius: '15px',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    padding: '16px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  buttonContainer: {
    minWidth: '100%',
    marginTop: '24px',
    height: '64px',
  },

  header: {
    margin: '24px 0',
    fontSize: '20px',
    fontWeight: 500,
  },

  error: {
    margin: '13px 0',
  },

  closeIcon: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    color: '#C9C9C9',
    cursor: 'pointer',
  },
}));

interface IAddNewLedger {
  showModal: boolean;
  handleAddNewLedger: Function;
}

function AddNewLedger({ showModal, handleAddNewLedger }: IAddNewLedger) {
  const classes = useStyles();
  const btnClasses = useButtonStyles();
  const { t } = useLanguageContext();
  const { showError } = useErrorContext();
  const { setBook } = useAppActions();
  const { getUserInfo, getDeviceInfo } = useAppState();

  const history = useHistory<{ [key: string]: boolean }>();
  const [businessName, setBusinessName] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setBusinessName('');
    return () => {
      setBusinessName('');
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const businessName: string = event.target.value;
    if (businessName.trim().length) {
      setHasError(false);
    }
    setBusinessName(businessName);
  };

  const handleCloseModal = () => {
    handleAddNewLedger();
    setBusinessName('');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (businessName.trim().length === 0) {
      setHasError(true);
      return;
    }
    setHasError(false);

    const user = getUserInfo();
    const deviceInfo = getDeviceInfo();
    // analytics
    onAddNewLedgerGetStartedClicked({
      ledger_name: businessName,
      user_id: user?.user_id,
    });

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    const santizedString = () => {
      const trimmedBusinessName = businessName.trim();
      if (trimmedBusinessName.endsWith('.')) {
        return trimmedBusinessName.slice(0, -1);
      }
      return trimmedBusinessName;
    };

    workerApi
      .addBook({
        bookName: santizedString(),
        user,
        deviceInfo,
      })
      .then((book: IBookValue) => {
        setBook(book);
        handleAddNewLedger();
        setBusinessName('');
        history.replace(BOOKS_URI);
      })
      .catch((e) => {
        captureException(e, {
          tags: {
            module: SENTRY_TAG.ADD_BUSINESS,
          },
        });
        showError();
      });
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={MODAL_STYLE} className={classes.paper}>
          <img
            className={classes.closeIcon}
            src={closeIcon}
            onClick={handleCloseModal}
            alt="close"
          />
          <div>
            <Typography className={classes.header}>{t('add')}</Typography>
          </div>
          <form noValidate onSubmit={onSubmit} className={classes.form}>
            <TextInputField
              name="businessName"
              value={businessName}
              onChangeHandler={handleChange}
              autoFocus={true}
              placeholder={t('business_name_placeholder')}
              error={hasError}
              maxLength={MAX_BOOK_NAME_LENGTH}
            />
            {hasError && (
              <FormHelperText className={classes.error} error>
                {t('naya_khata_business_hint')}
              </FormHelperText>
            )}

            <div className={classes.buttonContainer}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                className={btnClasses.secondaryBtn}
                disabled={businessName.length === 0}
              >
                {t('create_book_button')}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default memo(AddNewLedger);
