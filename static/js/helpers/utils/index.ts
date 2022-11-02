// db
import { getBook } from '@webWorkers/DB/books';
import { getCustomer } from '@webWorkers/DB/customers';

export function isEmptyValues(value: string | number | object | undefined) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

// for finding number lesser than 10 and appending 0 to it
export function minTwoDigits(n: number) {
  return (n < 10 ? '0' : '') + n;
}

export function roundTo(n: number, digits: number) {
  if (digits === undefined) {
    digits = 0;
  }

  const multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  return (Math.round(n) / multiplicator).toFixed(2);
}

export const isWindowsOS = () => {
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const platform = window.navigator.platform;
  if (windowsPlatforms.find((platformOption) => platformOption === platform)) {
    return true;
  }
  return false;
};

// ISO 3166-1 alpha-2
// // ⚠️ No support for IE 11
export function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

// checks if the address was erased from the android app
export function isAnEmptyAddress(address: string) {
  const clearedAndroidAddress = ',,,,';
  const trimmedAddress = address.trim();
  return trimmedAddress === clearedAndroidAddress || trimmedAddress === '';
}

export async function isDeletedBook(bookId: string) {
  const book = await getBook(bookId);
  return book && book.deleted === 1;
}

export async function isDeletedCustomer(customerId: string) {
  const customer = await getCustomer(customerId);
  return customer && customer.deleted === 1;
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function isServerError(error: any) {
  return error?.status && error?.status?.toString().startsWith('5');
}
