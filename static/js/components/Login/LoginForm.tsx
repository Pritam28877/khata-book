import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// material components
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

// components
import Button from 'src/components/Button';
import PhoneCountrySelector from 'src/components/PhoneCountrySelector';

//useForm
import useForm from 'src/hooks/useForm';
import { validateLogin } from './LoginFormValidationRules';
import { INPUT_MODE, REGX, PATTERNS } from './constants';

//utils
import { isEmptyValues } from 'src/helpers/utils';

//service functions
import { requestOTPAPICall } from 'src/api/auth';
import { IOtp } from 'src/types/auth';

// actions
import { useAppActions } from 'src/store/app/actions';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// analytics
import { requestOTPClicked } from './analytics';

// constants
import { VERIFY_URI } from 'src/constants/url';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '24px 16px',
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
  adornedStart: {
    padding: theme.spacing(0),
  },
}));

interface ILoginForm {
  className?: string;
  buttonContainerClassName?: string;
}

function LoginForm(props: ILoginForm) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useLanguageContext();
  const { setOtpSent } = useAppActions();

  const inputProps: { [key: string]: string } = {
    inputMode: INPUT_MODE.NUMERIC,
    pattern: PATTERNS.NUMBER_ONLY,
  };
  const { values, errors, handleChange, handleSubmit } = useForm(
    requestOtp,
    validateLogin(t('login_incorrect_10digit_number'))
  );
  const initialOtpState: IOtp = {
    country_code: values.country_code || '+91',
    phone: values.phone || '',
    app_signature: 'Jc/Zu7qNqQ2',
  };

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (
      event.target.value === '' ||
      REGX.NUMBER_ONLY.test(event.target.value)
    ) {
      handleChange(event);
    }
  }

  function requestOtp() {
    // analytics
    requestOTPClicked(values.phone);

    requestOTPAPICall(initialOtpState).then(
      () => {
        setOtpSent(true);
        history.push(VERIFY_URI, initialOtpState);
      },
      (error: any) => {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }

  return (
    <form
      className={`${classes.root} ${props.className ? props.className : ''}`}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div className={classes.mb1}>{t('mobile_number')}</div>
      <FormControl className={classes.mb1} fullWidth variant="outlined">
        <OutlinedInput
          error={errors.phone ? true : false}
          required
          inputProps={inputProps}
          id="phone"
          name="phone"
          value={values.phone || ''}
          onChange={handlePhoneChange}
          placeholder={t('mobile_number_placeholder')}
          autoFocus
          classes={{ adornedStart: classes.adornedStart }}
          startAdornment={
            <InputAdornment className="countryAdornment" position="start">
              <PhoneCountrySelector
                className="countrySelect"
                onChange={handleChange}
                name={'country_code'}
              />
            </InputAdornment>
          }
        />
        {errors.phone && <FormHelperText error>{errors.phone}</FormHelperText>}
      </FormControl>

      <div
        className={`${classes.buttonContainer} ${
          props.buttonContainerClassName ? props.buttonContainerClassName : ''
        }`}
      >
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={isEmptyValues(values.phone)}
        >
          {t('login_submit_get_code')}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
