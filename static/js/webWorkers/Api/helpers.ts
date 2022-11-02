// libs
import { v4 as uuidV4 } from 'uuid';

/**
 * helper function to generate UUID
 */
export const generateUUID = () => uuidV4();

/**
 * Alias Date function
 */
export const getCurrentTime = () => new Date().getTime();

export const getSortDate = (dateString: string, createdAt: string) => {
  const [yearStr, monthStr, dayStr] = dateString.split('-');
  const createdDate = new Date(Number(createdAt));
  return new Date(
    Number(yearStr),
    Number(monthStr),
    Number(dayStr),
    createdDate.getHours(),
    createdDate.getMinutes()
  ).getTime();
};
