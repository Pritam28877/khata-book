// db
import {
  getPayouts as getPayoutsDB,
  getPayout as getPayoutDB,
} from '@webWorkers/DB/payouts';

export const getPayouts = getPayoutsDB;
export const getPayout = getPayoutDB;
