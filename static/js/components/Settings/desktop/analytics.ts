// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const onLanguageChanged = (language: string) =>
  sendEvent(CUSTOM_EVENTS.UserSelectsLanguage, {
    language,
  });

export const onSelectBackupSettingsTab = () =>
  sendEvent(CUSTOM_EVENTS.SettingsBackupInformationClick);

export const onCurrencyChanged = (currency: string) =>
  sendEvent(CUSTOM_EVENTS.UserSelectsCurrency, { currency });

export const onSelectCurrencySettingsTab = () =>
  sendEvent(CUSTOM_EVENTS.SettingCurrencyClick);

export const onCurrencyDropdownClicked = () =>
  sendEvent(CUSTOM_EVENTS.CurrencyDropDownClick);
export const onRecycleBinClicked = () =>
  sendEvent(CUSTOM_EVENTS.SettingsRecycleBinClick);

export const onRecycleBinUndoClicked = () =>
  sendEvent(CUSTOM_EVENTS.RecycleBinOnUndoClicked);

export const onRecycleBinRecoverClicked = () =>
  sendEvent(CUSTOM_EVENTS.RecycleBinRecoverItemConfirmation);

export const onSettingsDeleteKhataClicked = () =>
  sendEvent(CUSTOM_EVENTS.SettingsDeleteKhataClick);

export const onDeleteBookConfirmClicked = () =>
  sendEvent(CUSTOM_EVENTS.DeleteKhataConfirmClick);
