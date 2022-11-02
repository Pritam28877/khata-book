// helpers
import KBFetch from 'src/helpers/api';
import { ROUTES, getUrl } from 'src/api/url';

// defs
import { ITransaction } from 'src/types/db';

export const getTransactions = ({
  bookId,
  serverSeq = '0',
  limit = 100,
}: {
  bookId: string;
  serverSeq: string;
  limit?: number;
}) => {
  const baseUrl = getUrl(ROUTES.GET_TRANSACTIONS);

  const params = new URLSearchParams();
  params.append('book_id', bookId);
  params.append('server_seq', String(serverSeq));
  params.append('limit', String(limit));

  const url = `${baseUrl}?${params.toString()}`;

  return KBFetch(ROUTES.GET_TRANSACTIONS, url).then((response) =>
    response?.json()
  );
};

export const pushTransactions = (
  bookId: string,
  transactions: ITransaction[]
) => {
  const url = getUrl(ROUTES.POST_TRANSACTIONS);

  const body = JSON.stringify({ book_id: bookId, transactions });

  const options = {
    body,
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  };

  return KBFetch(ROUTES.POST_TRANSACTIONS, url, options).then((response) =>
    response?.json()
  );
};
