// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const requestOTPClicked = (customerPhone: string) =>
  sendEvent(CUSTOM_EVENTS.REQUEST_OTP_CLICKED, { customerPhone });

export const otpSubmitClicked = (customerPhone: string, countryCode: string) =>
  sendEvent(CUSTOM_EVENTS.OTP_VERIFY_CLICKED, {
    customerPhone,
    countryCode,
  });
