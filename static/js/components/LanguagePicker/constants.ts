// defs
import { SupportedLangsType } from 'src/components/LanguageProvider/types';

export enum LANG_FROM {
  INITIAL,
  SETTINGS,
}

export interface ILanguageConfig {
  labelColor: string;
  labelText: string;
  text: string;
  value: SupportedLangsType;
}

export const languageConfig: ILanguageConfig[] = [
  {
    labelColor: '#1b6cce',
    labelText: 'H',
    text: 'Hinglish',
    value: 'en_US',
  },
  {
    labelColor: '#04408a',
    labelText: 'E',
    text: 'English',
    value: 'en',
  },
  {
    labelColor: '#0752ad',
    labelText: 'हिं',
    text: 'हिंदी',
    value: 'hi',
  },
  {
    labelColor: '#1b6cce',
    labelText: 'বা',
    text: 'বাংলা',
    value: 'bn',
  },
  {
    labelColor: '#1b6cce',
    labelText: 'ગુ',
    text: 'ગુજરાતી',
    value: 'gu',
  },
  {
    labelColor: '#0752ad',
    labelText: 'ಕ',
    text: 'ಕನ್ನಡ',
    value: 'kn',
  },
  {
    labelColor: '#58a0f7',
    labelText: 'മ',
    text: 'മലയാളം',
    value: 'ml',
  },
  {
    labelColor: '#04408a',
    labelText: 'म',
    text: 'मराठी',
    value: 'mr',
  },
  {
    labelColor: '#0752ad',
    labelText: 'ਪੰ',
    text: 'ਪੰਜਾਬੀ',
    value: 'pa',
  },
  {
    labelColor: '#58a0f7',
    labelText: 'த',
    text: 'தமிழ்',
    value: 'ta',
  },
  {
    labelColor: '#58a0f7',
    labelText: 'తె',
    text: 'తెలుగు',
    value: 'te',
  },
  {
    labelColor: '#04408a',
    labelText: 'ଓ',
    text: 'ଓଡ଼ିଆ',
    value: 'or',
  },
  {
    labelColor: '#186fd9',
    labelText: 'অ',
    text: 'অসমীয়া',
    value: 'as',
  },
];
