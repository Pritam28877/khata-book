// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const onAboutKhatabookCliked = () =>
  sendEvent(CUSTOM_EVENTS.BookProfileAboutKhatabookClick);

export const onPrivacyPolicyClicked = () =>
  sendEvent(CUSTOM_EVENTS.BookProfilePrivacyPolicyClick);

export const onTermsAndConditionClicked = () =>
  sendEvent(CUSTOM_EVENTS.BookProfileTermsAndConditionsClick);
