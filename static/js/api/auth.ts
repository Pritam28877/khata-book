import KBFetch from 'src/helpers/api';
import { ROUTES, getUrl } from 'src/api/url';
import { IOtp, ILogin, IUserPreferences } from 'src/types/auth';
import {
  ConfirmationResult,
  getAuth,
  signInWithPhoneNumber,
} from '@firebase/auth';
import { initializeRecaptchaAppVerifier } from 'src/helpers/firebase';

export function requestOTPAPICall(data: IOtp): Promise<unknown> {
  const body = JSON.stringify(data);
  const contentType = 'application/json';
  const method = 'POST';
  return KBFetch(ROUTES.REQUEST_OTP, getUrl(ROUTES.REQUEST_OTP), {
    method,
    body,
    headers: { 'content-type': contentType },
  }).then((response) => response?.json());
}

export function requestFirebaseOTP(
  data: IOtp,
  onSuccess?: {
    (confirmationResult: any): void;
    (arg0: ConfirmationResult): void;
  },
  onFailure?: {
    (error: {
      status?: number | undefined;
      message?: string | undefined;
    }): void;
    (arg0: any): void;
  }
) {
  const auth = getAuth();
  const phoneNumber = `${data.country_code}${data.phone}`;
  // if recaptcha app verifier wasn't initialized
  if (!window.recaptchaVerifier) {
    initializeRecaptchaAppVerifier();
  }

  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      onSuccess && onSuccess(confirmationResult);
    })
    .catch((error) => {
      onFailure && onFailure(error);
    });
}

export function dologinAPICall(data: ILogin) {
  const body = JSON.stringify(data);
  const contentType = 'application/json';
  const method = 'POST';

  return KBFetch(ROUTES.LOGIN, getUrl(ROUTES.LOGIN), {
    method,
    body,
    headers: { 'content-type': contentType },
  }).then((response) => response?.json());
}

export function submitUserPreferences(data: IUserPreferences, token: string) {
  const body = JSON.stringify(data);
  const contentType = 'application/json';
  const appVersion = 'Infinity';
  const method = 'POST';

  return KBFetch(ROUTES.USER_PREFERENCES, getUrl(ROUTES.USER_PREFERENCES), {
    method,
    body,
    headers: {
      'content-type': contentType,
      'x-khatabook-token': token,
      'x-kb-app-version': appVersion,
    },
  }).then((response) => response?.json());
}
