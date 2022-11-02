// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const onLanguageSelected = (language: string) =>
  sendEvent(CUSTOM_EVENTS.LANGUAGE_SELECTED, { language });

export const onLanguageChanged = (language: string) =>
  sendEvent(CUSTOM_EVENTS.LANGUAGE_CHANGED, { language });
