const RESEND_OTP_DATA_KEY = 'KB_ROP_KEY';
const MAX_RESEND_ALLOWED = 2;
const ALLOWED_RESEND_AFTER_TIME = 1000 * 60 * 10; // 10 minutes

// hoist resend OTP count at global level
let resendOTPCount = 0;

const getResendOTPExceededTime = () => {
  const resendOTPExpiryTime = window.localStorage.getItem(RESEND_OTP_DATA_KEY);

  return resendOTPExpiryTime === null ? undefined : Number(resendOTPExpiryTime);
};

const setResendOTPExceededTime = () => {
  window.localStorage.setItem(
    RESEND_OTP_DATA_KEY,
    String(new Date().getTime())
  );
};

const clearResendOTPExceededTime = () =>
  window.localStorage.removeItem(RESEND_OTP_DATA_KEY);

export const canAllowResendOTP = () => {
  // if resend count is initialized, let the logic to show be based on count
  if (resendOTPCount > 0) {
    return resendOTPCount < MAX_RESEND_ALLOWED;
  }

  const resendOTPExpiryTime = getResendOTPExceededTime();

  // if we dont have any expiry time let our logic be based on memory resendOTPCount
  if (resendOTPExpiryTime === undefined) {
    return resendOTPCount < MAX_RESEND_ALLOWED;
  }

  const currentTime = new Date().getTime();
  // if difference between current time and the time user reached max otp click limit
  // is still not exceeded the ALLOWED_RESEND_AFTER_TIME, dont allow further clicks
  if (currentTime - resendOTPExpiryTime < ALLOWED_RESEND_AFTER_TIME) {
    resendOTPCount = 2;
    return false;
  }

  // allow resend OTP click
  clearResendOTPExceededTime();
  resendOTPCount = 0;
  return true;
};

export const onResendClick = () => {
  resendOTPCount = resendOTPCount + 1;

  // ideally onResendClick should not be called more than MAX_RESEND_ALLOWED
  // we would update local storage only when resendOTPCount value is same as MAX_RESEND_ALLOWED
  if (resendOTPCount === MAX_RESEND_ALLOWED) {
    setResendOTPExceededTime();
  }
};
