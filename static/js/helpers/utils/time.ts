// constants
import moment from 'moment';
import 'moment/min/locales';
import { MONTHS } from 'src/constants/months';

const ONE_SEC = 1000;
const ONE_MIN = 60 * ONE_SEC;
const ONE_HOUR = ONE_MIN * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;
const ONE_YEAR = ONE_DAY * 365;

export enum TIME_TYPE {
  SECONDS,
  MINUTES,
  HOURS,
  DAYS,
  WEEKS,
  YEARS,
}

export const getTime = (time: number) => {
  const currentTime = new Date().getTime();

  const diff = currentTime - time;

  // less than a minute
  if (diff < ONE_MIN) {
    const numOfSec = Math.floor(diff / ONE_SEC);
    return { value: numOfSec, type: TIME_TYPE.SECONDS };
  }

  // less than a hour
  if (diff < ONE_HOUR) {
    const numOfMin = Math.floor(diff / ONE_MIN);
    return { value: numOfMin, type: TIME_TYPE.MINUTES };
  }

  // less than a day
  if (diff < ONE_DAY) {
    const numOfHours = Math.floor(diff / ONE_HOUR);
    return { value: numOfHours, type: TIME_TYPE.HOURS };
  }

  // less than a week
  if (diff < ONE_WEEK) {
    const numOfDays = Math.floor(diff / ONE_DAY);
    return { value: numOfDays, type: TIME_TYPE.DAYS };
  }

  // less than a year
  if (diff < ONE_YEAR) {
    const numOfWeeks = Math.floor(diff / ONE_WEEK);
    return { value: numOfWeeks, type: TIME_TYPE.WEEKS };
  }

  const numOfYears = Math.floor(diff / ONE_YEAR);
  return { value: numOfYears, type: TIME_TYPE.YEARS };
};

export const getDisplayDate = (dateString: string, isFullYear = false) => {
  try {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = isFullYear
      ? date.getFullYear()
      : date.getFullYear().toString().substr(-2);

    return `${day} ${month} ${year}`;
  } catch (e) {
    /** TODO - error capture */
    return dateString;
  }
};

export const getDisplayTime = (time: number) => {
  const date = new Date(time);

  let hour = date.getHours();
  let meridiem = 'AM';

  if (hour > 12) {
    hour = hour - 12;
    meridiem = 'PM';
  }

  let displayHour = String(hour);
  if (hour < 10) {
    displayHour = `0${hour}`;
  }

  const minutes = date.getMinutes();
  let displayMin = String(minutes);
  if (minutes < 10) {
    displayMin = `0${minutes}`;
  }

  return `${displayHour}:${displayMin} ${meridiem}`;
};

const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

export const getDateTime = (timestamp: string | undefined) => {
  if (timestamp === undefined) return '';

  const date = new Date(+timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year} - ${formatAMPM(date)}`;
};

export const periodFromNow = (
  timestamp: string | undefined,
  locale: string | null
) => {
  if (timestamp === undefined) return '';

  // https://github.com/moment/moment/tree/develop/locale
  const localeMapper: string | null = locale === 'pa' ? 'pa-in' : locale;
  const isLocaleExist: boolean = moment.locales().includes(localeMapper || '');
  if (!localeMapper || !isLocaleExist) {
    return moment(+timestamp)
      .locale('en')
      .fromNow();
  }

  return moment(+timestamp)
    .locale(localeMapper || 'en')
    .fromNow();
};

export const fromTimestampToDate = (timestamp: number) =>
  moment(timestamp).toDate();

export const isSameDay = (date1: Date, date2: Date) =>
  moment(date1).isSame(date2, 'day');

export const isDayBetween = (day: Date, startDate: Date, endDate: Date) =>
  (moment(day).isAfter(startDate) || isSameDay(day, startDate)) &&
  (moment(day).isBefore(endDate) || isSameDay(day, endDate));

export const getLastMonthDateRange = () => {
  return {
    startDate: moment().subtract(30, 'days').toDate(),
    endDate: new Date(),
  };
};

export const dateToTimestamp = (date: Date) => date.getTime();

export const getTimePassed = (time: number) => {
  const { value, type } = getTime(time);
  let timeTranslationKey = '';
  switch (type) {
    case TIME_TYPE.SECONDS: {
      timeTranslationKey = value === 0 ? 'just_now' : 'home_seconds_ago';
      break;
    }
    case TIME_TYPE.MINUTES: {
      timeTranslationKey = 'home_minutes_ago';
      break;
    }
    case TIME_TYPE.HOURS: {
      timeTranslationKey = 'home_hours_ago';
      break;
    }
    case TIME_TYPE.DAYS: {
      timeTranslationKey = 'home_days_ago';
      break;
    }
    case TIME_TYPE.WEEKS: {
      timeTranslationKey = 'home_weeks_ago';
      break;
    }
    case TIME_TYPE.YEARS: {
      timeTranslationKey = 'home_years_ago';
      break;
    }
  }
  return { timeValue: value, timeTranslationKey };
};
