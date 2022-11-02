// helpers
import { convertToPng } from 'src/helpers/image';

// constants
import { FORM_MODE } from 'src/components/Customer/TransactionForm/constants';

// defs
import { ITransactionValue } from 'src/webWorkers/DB/types';
import { IAttachmentInfo } from './types';

export const getToday = () => {
  let now = new Date().getTime();
  if (isNaN(now)) {
    now = Date.now();
  }
  return convertDate(now);
};

export const convertDate = (epoch: number): string => {
  let date = new Date(epoch);
  // NaN-NaN-NaN
  if (!(date instanceof Date) || !date.getTime()) {
    date = new Date(Date.now());
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let displayMonth = String(month);
  if (month < 10) {
    displayMonth = `0${month}`;
  }

  let displayDate = String(day);
  if (day < 10) {
    displayDate = `0${day}`;
  }

  return `${year}-${displayMonth}-${displayDate}`;
};

export const getDateAsNumber = (
  dateAsNumber: number | typeof NaN,
  dateString: string
): { epoch: number | null; isError?: boolean } => {
  if (dateString === 'NaN-NaN-NaN' || !dateString || !dateString.length) {
    return { epoch: null, isError: true };
  }
  const dateParts = dateString?.split('/');
  const [month, day, year] = dateParts;

  if (
    year.length !== 4 ||
    parseInt(year) < 1900 ||
    parseInt(year) > 2100 ||
    parseInt(month) > 12 ||
    parseInt(month) < 1 ||
    parseInt(day) > 31 ||
    parseInt(day) < 1
  ) {
    return { epoch: null, isError: true };
  }
  let epoch: number | typeof NaN = dateAsNumber;
  if (!isNaN(epoch)) {
    return { epoch };
  }
  epoch = Date.parse(dateString);
  if (!isNaN(epoch)) {
    return { epoch };
  }

  const date = new Date(parseInt(year), parseInt(month), parseInt(day));
  return { epoch: date.getTime() };
};

export const getAmount = (mode: FORM_MODE, transaction?: ITransactionValue) => {
  if (mode === FORM_MODE.ADD) {
    return '';
  }

  const amount = transaction?.amount || 0;

  return amount < 0 ? amount * -1 : amount;
};

export const getNote = (mode: FORM_MODE, transaction?: ITransactionValue) => {
  if (mode === FORM_MODE.ADD) {
    return '';
  }

  return transaction?.description || '';
};

export const getLocalAttachments = (
  mode: FORM_MODE,
  transaction?: ITransactionValue
): IAttachmentInfo[] => {
  if (mode === FORM_MODE.ADD) {
    return [];
  }

  const localAttachments = transaction?.localAttachments || [];

  return localAttachments.map((attachment) => ({
    file: attachment.file,
    fileName: attachment.fileName,
    isImageOptimized: true,
    preview: URL.createObjectURL(attachment.file),
  }));
};

export const getRemoteAttachments = (
  mode: FORM_MODE,
  transaction?: ITransactionValue
) => {
  if (mode === FORM_MODE.ADD) {
    return [];
  }

  return transaction?.attachments || [];
};

export const getDate = (mode: FORM_MODE, transaction?: ITransactionValue) => {
  if (mode === FORM_MODE.ADD) {
    return getToday();
  }

  return transaction?.date || getToday();
};

export const getDateTime = (
  mode: FORM_MODE,
  transaction?: ITransactionValue
) => {
  if (mode === FORM_MODE.ADD) {
    return new Date().getTime();
  }

  const dateString = transaction?.date || getToday();

  const [yearStr, monthStr, dayStr] = dateString.split('-');
  const date = new Date(Number(yearStr), Number(monthStr) - 1, Number(dayStr));
  return date.getTime();
};

export const optimizeImage = async (file: Blob, fileName: string) => {
  const url = URL.createObjectURL(file);

  let uploadFile: Blob = file;
  let uploadFileName = fileName;

  try {
    // try to create resized oxiPNG image
    const { file: newFile, name } = await convertToPng(url, fileName);

    uploadFile = newFile;
    uploadFileName = name;
  } catch (e) {
    // we tried to resize image and convert to png but failed so using existing image
  }

  return {
    file: uploadFile,
    fileName: uploadFileName,
  };
};

export const formatStringDate = (date: string) => {
  const dateParts = date?.split('-');
  const [year, month, day] = dateParts;
  return `${day}/${month}/${year}`;
};
