import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const onEditCustomerClicked = () =>
  sendEvent(CUSTOM_EVENTS.EditCustomerClick);

export const onDeleteCustomerClicked = () =>
  sendEvent(CUSTOM_EVENTS.DeleteCustomerClick);

export const onSaveCustomerClicked = () =>
  sendEvent(CUSTOM_EVENTS.SaveCustomer);

export const onAddAddressClicked = () =>
  sendEvent(CUSTOM_EVENTS.AddAddressClick);

export const onAddPhoneNumberClicked = () =>
  sendEvent(CUSTOM_EVENTS.AddPhoneNumberClick);

export const onSaveAddressClicked = () =>
  sendEvent(CUSTOM_EVENTS.SaveAddressClick);

export const onSavePhoneNumberClicked = () =>
  sendEvent(CUSTOM_EVENTS.SavePhoneNumberClick);

export const onDeleteCustomerConfirmClicked = () =>
  sendEvent(CUSTOM_EVENTS.DeleteCustomerConfirmClick);

export const onDeleteCustomerCancelClicked = () =>
  sendEvent(CUSTOM_EVENTS.DeleteCustomerCancelClick);

// SMS Reminder events
export const onCustomerSummarySMSClicked = () =>
  sendEvent(CUSTOM_EVENTS.CustomerSummarySMSClick);

export const onSMSerrorLimitExceeded = () =>
  sendEvent(CUSTOM_EVENTS.SMSerrorLimitExceeded);

export const onSMSClickAddPhoneNumberToastClicked = () =>
  sendEvent(CUSTOM_EVENTS.SMSClickAddPhoneNumberToastClick);

export const onSendSMSClicked = () => sendEvent(CUSTOM_EVENTS.SendSMSClick);

export const onSMSCancelClicked = () => sendEvent(CUSTOM_EVENTS.SMSCancelClick);
