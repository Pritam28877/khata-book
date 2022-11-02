// helpers
import KBFetch from 'src/helpers/api';
import { ROUTES, getUrl } from 'src/api/url';

// defs
import { ICustomer } from 'src/types/db';

// constants
import { CUSTOMERS_LIMIT } from 'src/constants/customers';

export const getCustomers = ({
  bookId,
  serverSeq = '0',
  limit = CUSTOMERS_LIMIT,
}: {
  bookId: string;
  serverSeq: string;
  limit?: number;
}) => {
  const baseUrl = getUrl(ROUTES.GET_CUSTOMERS);

  const params = new URLSearchParams();
  params.append('book_id', bookId);
  params.append('server_seq', serverSeq);
  params.append('limit', String(limit));

  const url = `${baseUrl}?${params.toString()}`;

  return KBFetch(ROUTES.GET_CUSTOMERS, url).then((response) =>
    response?.json()
  );
};

export const pushCustomers = (bookId: string, customers: ICustomer[]) => {
  const url = getUrl(ROUTES.POST_CUSTOMERS);

  const body = JSON.stringify({ book_id: bookId, customers });

  const options = {
    body,
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  };

  return KBFetch(ROUTES.POST_CUSTOMERS, url, options).then((response) =>
    response?.json()
  );
};
