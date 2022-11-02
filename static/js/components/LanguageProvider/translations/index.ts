// defs
// import { SupportedLangsType } from 'src/components/LanguageProvider/types';

import { english } from './files/english';

// create a map with dynamic import functions
const localeMap: {
  // [key in SupportedLangsType]: Function;
  [key: string]: Function;
} = {
  bn: async function () {
    const data = await import(
      /* webpackChunkName: "bn-i18n" */ './files/bengali'
    );
    return data['bengali'];
  },
  en: function () {
    return Promise.resolve(english);
  },
  gu: async function () {
    const data = await import(
      /* webpackChunkName: "gu-i18n" */ './files/gujarati'
    );
    return data['gujarati'];
  },
  hi: async function () {
    const data = await import(
      /* webpackChunkName: "hi-i18n" */ './files/hindi'
    );
    return data['hindi'];
  },
  en_US: async function () {
    const data = await import(
      /* webpackChunkName: "en_US-i18n" */ './files/hinglish'
    );
    return data['hinglish'];
  },
  kn: async function () {
    const data = await import(
      /* webpackChunkName: "kn-i18n" */ './files/kannada'
    );
    return data['kannada'];
  },
  ml: async function () {
    const data = await import(
      /* webpackChunkName: "ml-i18n" */ './files/malayalam'
    );
    return data['malayalam'];
  },
  mr: async function () {
    const data = await import(
      /* webpackChunkName: "mr-i18n" */ './files/marathi'
    );
    return data['marathi'];
  },
  pa: async function () {
    const data = await import(
      /* webpackChunkName: "pa-i18n" */ './files/punjabi'
    );
    return data['punjabi'];
  },
  ta: async function () {
    const data = await import(
      /* webpackChunkName: "ta-i18n" */ './files/tamil'
    );
    return data['tamil'];
  },
  te: async function () {
    const data = await import(
      /* webpackChunkName: "te-i18n" */ './files/telugu'
    );
    return data['telugu'];
  },
  or: async function () {
    const data = await import(/* webpackChunkName: "or-i18n" */ './files/odia');
    return data['odia'];
  },
  as: async function () {
    const data = await import(
      /* webpackChunkName: "as-i18n" */ './files/assamese'
    );
    return data['assamese'];
  },
};

export default localeMap;
