// defs
import { ICustomerValue, ITransactionValue } from 'src/webWorkers/DB/types';

interface IBookData {
  book_id: string;
}

export const chunkArray = <T>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export const getDataByBook = <T extends IBookData>(data: T[]) => {
  const dataByBook: { [key: string]: T[] } = {};

  data.forEach((singleData) => {
    if (dataByBook[singleData.book_id] === undefined) {
      dataByBook[singleData.book_id] = [];
    }

    dataByBook[singleData.book_id].push(singleData);
  });

  return dataByBook;
};

export const getCustomersByBook = (customers: ICustomerValue[]) =>
  getDataByBook(customers);

export const getTransactionsByBook = (transactions: ITransactionValue[]) =>
  getDataByBook(transactions);
