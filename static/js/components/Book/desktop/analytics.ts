// helpers
import { sendEvent } from 'src/helpers/analytics';

// constants
import { CUSTOM_EVENTS } from 'src/helpers/analytics/constants';
import { CUSTOMER_FILTER, CUSTOMER_SORT } from '@webWorkers/DB/constants';

export const onHomePageViewed = () => sendEvent(CUSTOM_EVENTS.HomePageView);

export const onCustomerClicked = (customer: object) =>
  sendEvent(CUSTOM_EVENTS.HomeItemClick, { ...customer });

export const onSidebarItemClicked = (eventName: CUSTOM_EVENTS) =>
  sendEvent(CUSTOM_EVENTS[eventName]);

export const onAddNewLedgerClicked = () =>
  sendEvent(CUSTOM_EVENTS.HomePageAddLedgerClick);

export const addNewCustomerClicked = () =>
  sendEvent(CUSTOM_EVENTS.AddNewCustomerClick);

export const onTransactionMenuClicked = () =>
  sendEvent(CUSTOM_EVENTS.TransactionKebabMenuActionClick);

export const onProfileMenuClicked = () =>
  sendEvent(CUSTOM_EVENTS.UserNameClick);

export const onAddNewLedgerGetStartedClicked = (data: object) =>
  sendEvent(CUSTOM_EVENTS.AddNewLedgerGetStartedClick, { ...data });

export const onTransactionKebabMenuEditEntryClicked = () =>
  sendEvent(CUSTOM_EVENTS.TransactionKebabMenuEditEntryClick);

export const onAddTransactionClicked = (data: object) =>
  sendEvent(CUSTOM_EVENTS.AddTransaction, { ...data });

export const onTransactionClicked = () =>
  sendEvent(CUSTOM_EVENTS.CustomerKhataOnTransactionClicked);

export const onHomeBannerClicked = (banner_name: string) =>
  sendEvent(CUSTOM_EVENTS.HomeBannerClick, { banner_name });

export const onHomeFiltersMenuClicked = () =>
  sendEvent(CUSTOM_EVENTS.HomeFilterClick);

export const onHomeFilterClicked = (filterName: string) => {
  switch (filterName) {
    case CUSTOMER_FILTER.ALL:
      sendEvent(CUSTOM_EVENTS.HomeRefreshFilter, { customerFilter: 'All' });
      break;
    case CUSTOMER_FILTER.PAYABLES:
      sendEvent(CUSTOM_EVENTS.HomeRefreshFilter, {
        customerFilter: 'You will give',
      });
      break;
    case CUSTOMER_FILTER.RECEIVABLES:
      sendEvent(CUSTOM_EVENTS.HomeRefreshFilter, {
        customerFilter: 'You will get',
      });
      break;
    case CUSTOMER_FILTER.SETTLED:
      sendEvent(CUSTOM_EVENTS.HomeRefreshFilter, { customerFilter: 'Settled' });
      break;
  }
};

export const onHomeSortClicked = (filterName: string) => {
  switch (filterName) {
    case CUSTOMER_SORT.RECENT:
      sendEvent(CUSTOM_EVENTS.HomeRefreshSort, { customerSort: 'Most Recent' });
      break;
    case CUSTOMER_SORT.OLDEST:
      sendEvent(CUSTOM_EVENTS.HomeRefreshSort, {
        customerSort: 'Oldest',
      });
      break;
    case CUSTOMER_SORT.HIGH_AMOUNT:
      sendEvent(CUSTOM_EVENTS.HomeRefreshSort, {
        customerSort: 'Highest Amount',
      });
      break;
    case CUSTOMER_SORT.LEAST_AMOUNT:
      sendEvent(CUSTOM_EVENTS.HomeRefreshSort, {
        customerSort: 'Least Amount',
      });
      break;
    case CUSTOMER_SORT.NAME:
      sendEvent(CUSTOM_EVENTS.HomeRefreshSort, {
        customerSort: 'By Name (A-Z)',
      });
      break;
  }
};

export const onHomeRemoveFilterClicked = () =>
  sendEvent(CUSTOM_EVENTS.HomeRemoveFilterClick);

export const onGetAccessClicked = () => {
  sendEvent(CUSTOM_EVENTS.TryForFreeClick);
};
