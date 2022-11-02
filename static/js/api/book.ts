// helpers
import KBFetch from 'src/helpers/api';
import { ROUTES, getUrl } from 'src/api/url';

import { IBook } from 'src/types/db';

/**
 * function to fetch remote new / updated books
 * @param {string} serverSeq - local max server sequence till which we have data
 */
export const getBooks = (serverSeq = '0') => {
  const baseUrl = getUrl(ROUTES.GET_BOOKS);

  const params = new URLSearchParams();
  params.append('server_seq', String(serverSeq));

  const url = `${baseUrl}?${params.toString()}`;

  return KBFetch(ROUTES.GET_BOOKS, url).then((response) => response?.json());
};

export const pushBooks = (books: IBook[]) => {
  const url = getUrl(ROUTES.POST_BOOKS);

  const body = JSON.stringify({ books });

  const options = {
    body,
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  };

  return KBFetch(ROUTES.POST_BOOKS, url, options).then((response) =>
    response?.json()
  );
};
