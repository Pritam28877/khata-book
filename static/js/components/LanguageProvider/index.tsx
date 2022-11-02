// libs
import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import get from 'lodash.get';

// translations
import { english as enTranslations } from './translations/files/english';

// components
import Loader from 'src/components/Loader';

// context
import LanguageContext from './context';

// helpers
import { getLocale } from 'src/helpers/locale';
import localeFetcherMap from './translations';
import { captureException } from 'src/helpers/sentry';

// actions
import { useAppActions } from 'src/store/app/actions';

// constants
import { DEFAULT_LOCALE } from 'src/constants/locale';
import { TAGS } from 'src/helpers/sentry/constants';
import { SENTRY_TAG } from 'src/constants/sentry';

// defs
import { SupportedLangsType, ITranslationOption } from './types';
import { I18nKeyValue } from './translations/files/types';

const fetchTranslations = async (locale: SupportedLangsType) => {
  return await localeFetcherMap[locale](locale);
};

interface ILanguageProviderProps {
  children?: React.ReactNode;
}

function LanguageProvider({ children }: ILanguageProviderProps) {
  const [canShowChildren, setCanShowChildren] = useState(false);
  const [translations, setTranslations] = useState<I18nKeyValue | undefined>();
  const [currentLocale, setCurrentLocale] = useState<SupportedLangsType>(
    getLocale() || DEFAULT_LOCALE
  );
  const { setLocale } = useAppActions();

  useEffect(() => {
    setCanShowChildren(false);
    fetchTranslations(currentLocale)
      .then((translations) => {
        setTranslations(translations);
        setCanShowChildren(true);
      })
      .catch((e) => {
        // log the exception
        captureException(e, {
          tags: {
            [TAGS.LOCALE]: currentLocale,
            module: SENTRY_TAG.LANG_PROVIDER,
          },
        });
        setTranslations(enTranslations);
        setCanShowChildren(true);
      });
  }, [currentLocale]);

  const updateLocale = useCallback(
    (locale: SupportedLangsType) => {
      // update store locale
      setLocale(locale);

      setCurrentLocale(locale);
    },
    [setLocale]
  );

  const getTranslation = useCallback(
    (key: string, options?: ITranslationOption) => {
      let text: string = get(translations, key, key);

      if (options !== undefined) {
        if (Array.isArray(options)) {
          options.forEach((value, idx) => {
            let regExp = new RegExp(`\\%${idx + 1}\\$s`, 'ig');
            text = text.replace(regExp, String(value));

            // %s replace
            regExp = new RegExp(`\\%s`, 'ig');
            text = text.replace(regExp, String(value));
          });
        } else {
          Object.keys(options).forEach((stringVariable) => {
            let regExp = new RegExp(`\\%\\(${stringVariable}\\)s?`, 'ig');
            text = text.replace(regExp, String(options[stringVariable]));

            // %s replace
            regExp = new RegExp(`\\%s`, 'ig');
            text = text.replace(regExp, String(options[stringVariable]));
          });
        }
      }

      return text;
    },
    [translations]
  );

  // context being set in currentLocale
  const contextValue = useMemo(
    () => ({
      t: getTranslation,
      updateLocale,
    }),
    [getTranslation, updateLocale]
  );

  if (canShowChildren === false) {
    return <Loader />;
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export default memo(LanguageProvider);
