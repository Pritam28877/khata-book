// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const onLoginScreenViewed = () =>
  sendEvent(CUSTOM_EVENTS.LoginScreenView);

export const onPrivacyPolicyClicked = () =>
  sendEvent(CUSTOM_EVENTS.ViewPrivacyPolicy, { screen: 'LoginActivity' });

export const onTermsAndConditionClicked = () =>
  sendEvent(CUSTOM_EVENTS.ViewTnCPolicy, { screen: 'LoginActivity' });

export const handleLanguageDropdownClicked = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingLanguageSelectionDropdown);

export const onLanguageSelected = (language: string) =>
  sendEvent(CUSTOM_EVENTS.OnboardingLanguageSelected, {
    language,
  });

export const onLanguageChanged = (language: string) =>
  sendEvent(CUSTOM_EVENTS.UserSelectsLanguage, {
    language,
  });

export const handleCountrySelectorClicked = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingCountryPickerClick);

export const handleCountrySelected = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingCountrySelected);

export const requestOTPClicked = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingRequestOtp);

export const onEditPhoneClicked = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingEditNumberClick);

export const onResendOtpClicked = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingResendOtpClick);

export const otpSubmitClicked = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingVerifyOtp);

export const onLaunchMainScreen = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingLaunchMainScreen);

export const onOnboardingError = (message: string) =>
  sendEvent(CUSTOM_EVENTS.OnboardingError, { message });

export const onUniqueLoginSuccess = (type: string) =>
  sendEvent(CUSTOM_EVENTS.UniqueLoginSuccess, { type });

export const onboardingCreateLedgerScreenViewed = () =>
  sendEvent(CUSTOM_EVENTS.OnboardingCreateLedgerScreenView);

export const onboardingGetStartedClicked = (
  business_name: string,
  kb_id: string
) => {
  sendEvent(CUSTOM_EVENTS.OnboardingGetStartedClick, { business_name, kb_id });
};
