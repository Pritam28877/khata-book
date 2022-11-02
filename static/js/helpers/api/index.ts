// helpers
import { captureException } from 'src/helpers/sentry';
import fetch from 'isomorphic-fetch';

// constants
import { TAGS } from 'src/helpers/sentry/constants';
import { SENTRY_TAG } from 'src/constants/sentry';

let globalHeaders: RequestInit['headers'] = {};

/**
 * helper function to set headers for all requests via KBFetch
 * like Authorization headers / token
 **/
export const setFetchHeaders = (headers: RequestInit['headers']) => {
  globalHeaders = { ...headers };
};

export const getFetchHeaders = () => globalHeaders;

/**
 * Just a decorator over fetch with some defaults and logging
 * @param apiIdentfier - Unique Indentifer for sentry logging
 * @param url - Request URL
 * @param options - Fetch Request Options
 */
const KBFetch = (
  apiIdentfier: string,
  url: string,
  {
    method = 'GET',
    mode = 'cors',
    credentials = 'same-origin',
    headers = {},
    ...rest
  }: RequestInit = {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {},
  }
) => {
  return fetch(url, {
    method,
    mode,
    credentials,
    // adding global headers
    headers: { ...globalHeaders, ...headers },
    ...rest,
  })
    .then((response) => {
      // TODO - add middleware to handle logged out status
      // non valid response log in sentry;
      if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response);
      }
      if (response.status >= 400) {
        captureException(new Error(`API invalid status: ${response.status}`), {
          tags: {
            [TAGS.API]: apiIdentfier,
            module: SENTRY_TAG.API_HELPER,
          },
          extra: {
            url,
          },
        });

        return Promise.reject(response);
      }
    })
    .catch((e) => {
      // log exceptions in sentry
      captureException(e, {
        tags: {
          [TAGS.API]: apiIdentfier,
          module: SENTRY_TAG.API_HELPER,
        },
        extra: {
          url,
        },
      });

      // consumer should handle rejection
      return Promise.reject(e);
    });
};

export default KBFetch;
