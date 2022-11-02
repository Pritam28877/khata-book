// constants
import { NUMBERS, NUMBER_ABBREVIATION } from 'src/constants/amount';

export const formatAmount = (amount: number) => {
  return Intl !== undefined
    ? new Intl.NumberFormat().format(amount)
    : String(amount);
};

export const abbreviateAmount = (amount: number) => {
  const numOfDigits = Math.abs(amount).toString().split('.')[0].length;
  if (numOfDigits < 7)
    return Intl !== undefined
      ? new Intl.NumberFormat().format(roundAmount(Math.abs(amount)))
      : String(roundAmount(amount));
  else return abbreviateNumber(amount);
};

export const roundAmount = (amount: string | number) =>
  Math.round((Number(amount) + Number.EPSILON) * 100) / 100;

export const abbreviate = (amount: number) => {
  const absoluteAmount = Math.abs(amount);
  let abbreviatedAmount = absoluteAmount;
  let numberAbbreviation = '';
  if (absoluteAmount >= NUMBERS.KHARAB) {
    abbreviatedAmount /= NUMBERS.KHARAB;
    abbreviatedAmount = abbreviatedAmount * 10000; // convert to crore
    numberAbbreviation = NUMBER_ABBREVIATION.CRORE;
  } else if (absoluteAmount >= NUMBERS.ARAB) {
    abbreviatedAmount /= NUMBERS.ARAB;
    abbreviatedAmount = abbreviatedAmount * 100; // convert to crore
    numberAbbreviation = NUMBER_ABBREVIATION.CRORE;
  } else if (absoluteAmount >= NUMBERS.CRORE) {
    abbreviatedAmount /= NUMBERS.CRORE;
    numberAbbreviation = NUMBER_ABBREVIATION.CRORE;
  } else if (absoluteAmount >= NUMBERS.LAKHS) {
    abbreviatedAmount /= NUMBERS.LAKHS;
    numberAbbreviation = NUMBER_ABBREVIATION.LAKHS;
  }
  return [roundAmount(abbreviatedAmount), numberAbbreviation];
};

export const abbreviateNumber = (number: number) => {
  const [abbreviatedAmount, numberAbbreviation] = abbreviate(number);
  return `${abbreviatedAmount}${numberAbbreviation}`;
};
