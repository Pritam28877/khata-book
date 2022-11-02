import { CUSTOMER_FILTER, CUSTOMER_SORT } from 'src/webWorkers/DB/constants';

export const FILTERS_LIST = [
  { name: CUSTOMER_FILTER.ALL, label: 'all' },
  {
    name: CUSTOMER_FILTER.RECEIVABLES,
    label: 'you_will_get',
  },
  {
    name: CUSTOMER_FILTER.PAYABLES,
    label: 'you_will_give',
  },
  {
    name: CUSTOMER_FILTER.SETTLED,
    label: 'filter_settled',
  },
];

export const SORTING_FILTERS_LIST = [
  {
    name: CUSTOMER_SORT.RECENT,
    label: 'most_recent',
  },
  { name: CUSTOMER_SORT.OLDEST, label: 'oldest' },
  {
    name: CUSTOMER_SORT.HIGH_AMOUNT,
    label: 'highest_amount',
  },
  {
    name: CUSTOMER_SORT.LEAST_AMOUNT,
    label: 'least_amount',
  },
  {
    name: CUSTOMER_SORT.NAME,
    label: 'by_name_a_z',
  },
];
