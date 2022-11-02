// constants
import { HOME_URI, LOGGING_OUT } from 'src/constants/url';

const EMPTY_FUNC = () => {
  return Promise.resolve();
};

let onLoggingOutCallback: () => Promise<void> = EMPTY_FUNC;
let onLoginStatusChangeCallback = () => {
  window.location.href = HOME_URI;
};

export const setOnLoggingOutCallback = (
  loggingOutCallback: () => Promise<void>
) => {
  onLoggingOutCallback = loggingOutCallback;
};

export const setOnLoginStatusChange = (loggedOutCallback: VoidFunction) => {
  onLoginStatusChangeCallback = loggedOutCallback;
};

export const onLoggingOut = () => {
  onLoggingOutCallback().then(() => {
    // after callback we redirect to transition state
    window.location.href = LOGGING_OUT;
  });
};
export const onLoginStatusChange = () => onLoginStatusChangeCallback();
