// libs
import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

let isSentryEnabled = false;

const prodHost = /app\.khatabook\.com/i;
const stagingHost = /app\.dev\.khatabook\.com/i;
export const init = () => {
  let environment = 'development';
  switch (true) {
    case prodHost.test(window.location.host): {
      environment = 'production';
      break;
    }
    case stagingHost.test(window.location.host): {
      environment = 'staging';
      break;
    }
  }

  try {
    const dsn = process.env.REACT_APP_SENTRY_DSN;
    if (!dsn) {
      return;
    }

    Sentry.init({
      dsn,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 0, // 30% traffic sampling
      environment,
    });
    isSentryEnabled = true;
  } catch (e) {
    /** DO Nothing */
  }
};

interface ISentryExtra {
  tags?: {
    [key: string]: string;
  };
  extra?: {
    [key: string]: string;
  };
}

export const captureException = (
  error: Error,
  { tags, extra }: ISentryExtra
) => {
  // cannot log error if sentry is not registered
  if (isSentryEnabled === false) {
    console.error('Dev Sentry', error, tags, extra);
    return;
  }

  Sentry.withScope((scope) => {
    if (tags) {
      Object.keys(tags).forEach((key) => {
        scope.setTag(key, tags[key]);
      });
    }

    if (extra) {
      Object.keys(extra).forEach((key) => {
        scope.setExtra(key, extra[key]);
      });
    }

    Sentry.captureException(error);
  });
};

export default Sentry;
