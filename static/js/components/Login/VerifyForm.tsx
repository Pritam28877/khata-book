// libs
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// material components
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import FormHelperText from '@material-ui/core/FormHelperText';

// components
import Button from 'src/components/Button';

// constants
import { HOME_URI, VERIFY_URI } from 'src/constants/url';
import { INPUT_MODE, PATTERNS } from './constants';

// helpers
import { isEmptyValues, minTwoDigits } from 'src/helpers/utils';
import { validateOTP } from './LoginFormValidationRules';
import { loginStatusChanged } from 'src/helpers/broadcast/actions';
import { onResendClick, canAllowResendOTP } from './helpers';

// hooks
import useForm from 'src/hooks/useForm';

// constants
import { FONTWEIGHT } from 'src/styles/variables';

// service functions
import { requestOTPAPICall, dologinAPICall } from 'src/api/auth';

// actions
import { useAppActions } from 'src/store/app/actions';

// selectors
import { useAppState } from 'src/store/app/selectors';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// analytics
import { otpSubmitClicked } from './analytics';

// defs
import { ILoginResponse } from 'src/types/user';
import { IOtp, ILogin } from 'src/types/auth';

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: FONTWEIGHT.SEMIBOLD,
  },
  mobileBox: {
    margin: '36px 16px',
  },
  m: {
    margin: '13px 0',
  },
  mb1: {
    marginBottom: '13px',
  },
  buttonContainer: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

interface IVerifyMobileProps {
  location: {
    state: {
      country_code: string;
      phone: string;
      app_signature: string;
    };
  };
  className?: string;
  buttonContainerClassName?: string;
}

const VerifyMobilePropsDefaults: IVerifyMobileProps = {
  location: {
    state: {
      country_code: '',
      phone: '',
      app_signature: '',
    },
  },
  className: '',
  buttonContainerClassName: '',
};

function VerifyForm(props: IVerifyMobileProps) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useLanguageContext();
  const [counter, setCounter] = useState<number>(30);
  const [showOTPError, setShowOTPError] = useState(false);
  const { setOtpSent, setUser, setDevice } = useAppActions();
  const { isOtpSent } = useAppState();
  const { values, errors, handleChange, handleSubmit } = useForm(
    onLogin,
    validateOTP(t('login_enter_6_digit'))
  );

  const state =
    props.location.state || VerifyMobilePropsDefaults.location.state;
  const inputProps: { [key: string]: string } = {
    inputMode: INPUT_MODE.NUMERIC,
    pattern: PATTERNS.NUMBER_ONLY,
  };

  const initialOtpState: IOtp = {
    country_code: state.country_code,
    phone: state.phone,
    app_signature: state.app_signature,
  };

  function onLogin() {
    const loginState: ILogin = {
      country_code: state.country_code,
      phone: state.phone,
      khatabook_otp: values.pin,
      device_model: window.navigator.userAgent,
    };

    // analytics
    otpSubmitClicked(state.phone, state.country_code);

    dologinAPICall(loginState).then(
      (res: ILoginResponse) => {
        // set app state
        setUser(res.user);
        setDevice(res.device);

        // for new user redirect to add business screen
        // if (res.user.is_new_user) {
        //   history.replace(ADD_BUSINESS_URI, {
        //     fromVerifyLogin: true,
        //   });
        //   return;
        // }

        // redirect to home
        history.replace(HOME_URI);
        loginStatusChanged();
      },
      (error: unknown) => {
        setShowOTPError(true);
      }
    );
  }

  const resendOtp = () => {
    setShowOTPError(false);
    // update resend counter
    onResendClick();
    requestOTPAPICall(initialOtpState).then((res: unknown) => {
      setOtpSent(true);
      history.replace(VERIFY_URI, initialOtpState);
      setCounter(30);
    });
  };

  useEffect(() => {
    let timer: number;
    if (counter > 0) {
      timer = window.setTimeout(() => setCounter(counter - 1), 1000);
    }
    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, [counter, isOtpSent]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    setShowOTPError(false);
    handleSubmit(e);
  };

  return (
    <form
      className={`${classes.mobileBox} ${props.className}`}
      onSubmit={onSubmit}
      noValidate
      autoComplete="off"
    >
      <FormControl fullWidth>
        <TextField
          error={errors.pin ? true : false}
          required
          id="pin"
          name="pin"
          variant="outlined"
          value={values.pin || ''}
          onChange={handleChange}
          inputProps={inputProps}
          autoFocus
          placeholder={t('login_enter_6_digit')}
          fullWidth
        />
      </FormControl>
      {errors.pin && (
        <FormHelperText className={classes.m} error>
          {errors.pin}
        </FormHelperText>
      )}
      {showOTPError && (
        <FormHelperText className={classes.m} error>
          {t('login_error_server_invalid_otp')}
        </FormHelperText>
      )}
      {counter > 0 && (
        <div className={classes.m}>
          {t('login_waiting_for_code', {
            'phone number': '00:' + minTwoDigits(counter),
          })}
        </div>
      )}
      {counter <= 0 && canAllowResendOTP() && (
        <div className={classes.m}>
          <Link className={classes.link} onClick={resendOtp} href="#">
            {t('login_retry_resend_code')}
          </Link>
        </div>
      )}
      <div
        className={`${classes.buttonContainer} ${
          props.buttonContainerClassName ? props.buttonContainerClassName : ''
        }`}
      >
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disabled={isEmptyValues(values.pin)}
        >
          {t('login_submit_submit')}
        </Button>
      </div>
    </form>
  );
}

export default VerifyForm;
