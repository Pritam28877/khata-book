// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';

export const onAddBankAccountPageViewed = () =>
  sendEvent(CUSTOM_EVENTS.MoneytabAddBankAccountPageView);

export const onKYCPageViewed = () =>
  sendEvent(CUSTOM_EVENTS.MoneytabKYCPageView);

export const onUseQRCodeClicked = () =>
  sendEvent(CUSTOM_EVENTS.MoneytabUseQRCodeClick);

export const onPaymentHistoryTransactionsClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistoryTransactionsClick);

export const onPaymentHistorySettlementsClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistorySettlementsClick);

export const onQRCodePlaceOrderClicked = () =>
  sendEvent(CUSTOM_EVENTS.QRCodePlaceOrderClick);

export const onQRCodeDownloadQRClicked = () =>
  sendEvent(CUSTOM_EVENTS.QRCodeDownloadQRClick);

export const onQRCodeViewOrderClicked = () =>
  sendEvent(CUSTOM_EVENTS.QRCodeViewOrderClick);

export const onPaymentHistoryCustomerTransactionClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistoryCustomerTransactionClick);

export const onPaymentHistoryTransactionDateFilterClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistoryTransactionDateFilterClick);

export const onPaymentHistoryTransactionTypeFilterClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistoryTransactionTypeFilterClick);

export const onPaymentHistoryTransactionStatusClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistoryTransactionStatusClick);

export const onPaymentHistoryTransactionDateFilterSetDateClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistoryTransactionDateFilterSetDate);

export const onPaymentHistoryCustomerSettlementClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistoryCustomerSettlementClick);

export const onPaymentDetailsPageViewed = () =>
  sendEvent(CUSTOM_EVENTS.PaymentDetailsPageView);

export const onPaymentDetailsViewChargesClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentDetailsViewCharges);

export const onPaymentHistorySettlementDateFilterClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistorySettlementDateFilterClick);

export const onPaymentHistorySettlementTypeFilterClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistorySettlementTypeFilterClick);

export const onPaymentHistorySettlementStatusClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistorySettlementStatusClick);

export const onPaymentHistorySettlementDateFilterSetDateClicked = () =>
  sendEvent(CUSTOM_EVENTS.PaymentHistorySettlementDateFilterSetDate);
