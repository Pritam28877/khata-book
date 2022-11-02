// constants
import {
  STORAGE_LOCALE_KEY,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
} from 'src/constants/locale';

// defs
import { SupportedLangsType } from 'src/types/locale';

export const isSupportedLocale = (locale: string) =>
  SUPPORTED_LOCALES.includes(locale);

export const getLocale = (): SupportedLangsType | null => {
  const locale = localStorage.getItem(STORAGE_LOCALE_KEY);
  if (locale === null) {
    return locale;
  }
  if (isSupportedLocale(locale)) {
    return locale as SupportedLangsType;
  }
  return DEFAULT_LOCALE;
};

export const saveLocale = (locale: SupportedLangsType) => {
  localStorage.setItem(STORAGE_LOCALE_KEY, locale);
};

export const hasLocale = () => getLocale() !== null;

export const isLongWordsLanguageSelected = () => {
  const locale = getLocale();
  const longWordsLanguages = {
    tamil: 'ta',
    malayalam: 'ml',
    assamese: 'as',
    kannada: 'kn',
  };
  return locale && Object.values(longWordsLanguages).includes(locale)
    ? true
    : false;
};
