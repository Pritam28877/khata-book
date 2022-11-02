// libs
import { deleteDB } from 'idb';

// constants
import { DB_NAME } from './constants';

export const cleanup = async () => {
  await deleteDB(DB_NAME);
};
