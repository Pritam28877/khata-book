// libs
import { CUSTOM_EVENTS } from './constants';
import { GTM_CONFIG, SEGMENT_CONFIG } from './config';

declare global {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Window {
    analytics: any;
    dataLayer: { [key: string]: string | number | boolean | object }[];
    confirmationResult: any;
    recaptchaVerifier: any;
    clevertap: any;
    bowser: any;
  }
}

const initializeSegment = () => {
  const analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize)
    if (analytics.invoked)
      window.console &&
        console.error &&
        console.error('Segment snippet included twice.');
    else {
      analytics.invoked = !0;
      analytics.methods = [
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        'debug',
        'page',
        'once',
        'off',
        'on',
        'addSourceMiddleware',
        'addIntegrationMiddleware',
        'setAnonymousId',
        'addDestinationMiddleware',
      ];
      analytics.factory = function (e: any) {
        return function (...args: any) {
          args.unshift(e);
          analytics.push(args);
          return analytics;
        };
      };
      for (let e = 0; e < analytics.methods.length; e++) {
        const key = analytics.methods[e];
        analytics[key] = analytics.factory(key);
      }
      analytics.load = function (key: string, e: any) {
        const t = document.createElement('script');
        t.type = 'text/javascript';
        t.async = !0;
        t.src =
          'https://cdn.segment.com/analytics.js/v1/' +
          key +
          '/analytics.min.js';
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(t);
        analytics._loadOptions = e;
      };
      analytics.SNIPPET_VERSION = '4.13.1';
      let segmentKey;

      switch (window.location.host) {
        case 'app.khatabook.com':
        case 'web-app.khatabook.com':
        case 'web.khatabook.com': {
          segmentKey = SEGMENT_CONFIG.PRODUCTION;
          break;
        }

        // We are serving staging version locally
        default: {
          segmentKey = SEGMENT_CONFIG.STAGING;
          break;
        }
      }
      if (segmentKey) {
        analytics.load(segmentKey);
      }
    }
};

const initializeGTM = (isMobile: boolean) => {
  let gtmId: string | undefined;

  switch (window.location.host) {
    case 'app.khatabook.com': {
      gtmId = GTM_CONFIG.APP_PROD;
      break;
    }

    case 'web.khatabook.com': {
      gtmId = GTM_CONFIG.WEB_PROD;
      break;
    }

    // We are serving STAGING version elsewhere
    default: {
      gtmId = isMobile ? GTM_CONFIG.APP_STAGING : GTM_CONFIG.WEB_STAGING;
      break;
    }
  }

  if (gtmId) {
    const firstScriptNode = document.getElementsByTagName('script')[0];
    const scriptNode = document.createElement('script');
    scriptNode.async = true;
    scriptNode.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    firstScriptNode.parentNode?.insertBefore(scriptNode, firstScriptNode);
  }
};

const initializeClevertap = () => {
  const NOTIFICATION_PROMPT_DELAY_MILISECONDS = 30 * 1000;
  const REPROMPT_DELAY_SECONDS = 7 * 24 * 60 * 60 * 1000;
  setTimeout(() => {
    window.clevertap.notifications.push({
      okButtonColor: '#f28046',
      askAgainTimeInSeconds: REPROMPT_DELAY_SECONDS,
      serviceWorkerPath: '/service-worker.js',
      skipDialog: true,
    });
  }, NOTIFICATION_PROMPT_DELAY_MILISECONDS);
};

export const initialize = (isMobile: boolean) => {
  initializeGTM(isMobile);
  initializeSegment();
};

let localUserId: string | undefined;
export const setUser = (userId: string) => {
  // if we have already set userId and it is same as local
  // avoid refiring GTM event
  if (localUserId === userId) {
    return;
  }

  localUserId = userId;
  //set userId on segment
  window.analytics.identify(userId);

  //set userId on gtm
  window.dataLayer.push({ event: 'SET_USER', userId });

  //initialize clevertap after  user login
  initializeClevertap();
};

export const unsetUser = () => {
  const userId = '';
  //set userId on segment
  window.analytics.identify(userId);

  //set userId on gtm
  window.dataLayer.push({ event: 'SET_USER', userId });

  //initialize clevertap after  user login
  initializeClevertap();
};

export const sendEvent = (
  event: CUSTOM_EVENTS,
  data?: { [key: string]: string | number | boolean }
) => {
  const browser = window.bowser.getParser(navigator.appVersion).getBrowser();
  if (data == undefined) {
    data = {};
  }
  data.browserName = browser.name;
  data.browserVersion = browser.version;
  // send event on segment
  window.analytics.track(event, data !== undefined ? { data } : {});
  // send event on gtm
  window.dataLayer.push({ event, ...(data !== undefined ? { data } : {}) });
};
