import {
  MIN_NON_INDIAN_PHONE,
  MAX_NON_INDIAN_PHONE,
} from 'src/constants/phone';
export const validateLogin = (phoneErrMessage: string) => {
  return (values: { [key: string]: string }) => {
    const errors: { [key: string]: string } = {};
    if (
      values.phone &&
      !/^\d{10}$/.test(values.phone) &&
      values.country_code === '+91'
    ) {
      errors.phone = phoneErrMessage;
    }
    if (values?.country_code && values.country_code !== '+91') {
      const phoneWithCountryCode = values?.country_code + values?.phone;
      const phoneWithCountryCodeLength = phoneWithCountryCode.length;
      if (values?.phone?.length !== 0) {
        if (
          phoneWithCountryCodeLength < MIN_NON_INDIAN_PHONE ||
          phoneWithCountryCodeLength > MAX_NON_INDIAN_PHONE
        ) {
          errors.phone = 'Enter valid mobile number';
        }
      }
    }

    return errors;
  };
};

export const validateOTP = (pinErrorMessage: string) => {
  return (values: { [key: string]: string }) => {
    const errors: { [key: string]: string } = {};
    if (values.pin && !/^[0-9]{6}$/.test(values.pin)) {
      errors.pin = pinErrorMessage;
    }

    return errors;
  };
};
