// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const onHomeProfileClick = () =>
  sendEvent(CUSTOM_EVENTS.HomeProfileClick);

export const onProfileClick = () => sendEvent(CUSTOM_EVENTS.ProfileClick);

export const onProfileSaveClick = () =>
  sendEvent(CUSTOM_EVENTS.ProfileSaveClick);

export const onProfileSaveConfirmClick = (changes: {}) =>
  sendEvent(CUSTOM_EVENTS.ProfileSaveConfirmClick, changes);

export const onProfileLogoutClick = () => {
  return sendEvent(CUSTOM_EVENTS.ProfileLogoutClick);
};
