// helpers
import { setFetchHeaders } from 'src/helpers/api';
import { isEmptyValues } from 'src/helpers/utils';
import { generateUUID, getCurrentTime } from './helpers';
import isEmpty from 'lodash/isEmpty';

// db
import {
  addCustomer as addCustomerDB,
  getCustomer as getCustomerDB,
  updateCustomer as updateCustomerDB,
  getCustomers as getCustomersDB,
  getCustomerCount as getCustomerCountDB,
  getBookAggregations as getBookAggregationsDB,
  getDeletedCustomers as getDeletedCustomersDB,
  getCustomerByPhone,
} from 'src/webWorkers/DB/customers';

// api
import { pushCustomers } from 'src/api/customer';

// defs
import { IDevice, IUser } from 'src/types/user';
import { ICustomerValue } from 'src/webWorkers/DB/types';
import { reconcileCustomerBalance } from './transactionHelper';
import { IAttachmentInfo } from 'src/components/Settings/types';

// constants
import { upload } from 'src/api/file';

interface IAddCustomerProps {
  bookId: string;
  customerName: string;
  phone: string;
  user: IUser;
  deviceInfo: IDevice;
  customerId?: string;
  country_code?: string;
}

export const addCustomer = async ({
  bookId,
  customerName,
  phone,
  user,
  deviceInfo,
  customerId = generateUUID(),
  country_code,
}: IAddCustomerProps) => {
  if (isEmptyValues(bookId)) {
    return Promise.reject('Invalid Book');
  }

  if (isEmptyValues(customerName)) {
    return Promise.reject('Invalid Customer Name');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  // if customer with same number exists dont create again
  if (phone !== undefined) {
    const existingCustomer = await getCustomerByPhone(bookId, phone);

    if (existingCustomer !== undefined) {
      return existingCustomer;
    }
  }

  const customerRemote = {
    customer_id: customerId,
    book_id: bookId,
    name: customerName,
    address: '',
    phone: phone,
    country_code: country_code || '+91',
    deleted: 0,
    balance: 0,
    created_at: String(getCurrentTime()),
    created_by_user: user.user_id,
    created_by_device: deviceInfo.device_id,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
    enable_sms_alerts: 0,
    last_transaction_time: getCurrentTime(),
  };

  const customer = {
    ...customerRemote,
    dirty: 1,
  };

  const localCustomer = await getCustomerDB(customerId);

  try {
    if (!localCustomer) {
      // add in local DB
      await addCustomerDB(customer);
    }
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }

  if (localCustomer) {
    try {
      // dont wait for API calls
      pushCustomers(bookId, [customerRemote]).then(async () => {
        if (localCustomer === undefined) {
          return;
        }
        // @ts-ignore
        await updateCustomerDB({
          ...localCustomer,
          phone,
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  } else {
    try {
      // dont wait for API calls
      pushCustomers(bookId, [customerRemote]).then(async () => {
        if (localCustomer === undefined) {
          return;
        }
        // @ts-ignore
        await updateCustomerDB({
          ...(localCustomer as object),
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  }
  return customer as ICustomerValue;
};

interface IUpdateCustomerProps {
  bookId: string;
  customerName: string;
  phone: string;
  country_code?: string;
  user: IUser;
  deviceInfo: IDevice;
  customerId: string;
  address?: string;
  image?: string;
  localImage?: IAttachmentInfo | undefined;
}
export const updateCustomer = async ({
  bookId,
  customerName,
  phone,
  user,
  deviceInfo,
  address,
  country_code,
  image,
  localImage,
  customerId,
}: IUpdateCustomerProps) => {
  if (isEmptyValues(bookId)) {
    return Promise.reject('Invalid Book');
  }

  if (isEmptyValues(customerName)) {
    return Promise.reject('Invalid Customer Name');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  let customerImage = '';

  if (localImage) {
    await upload({
      file: localImage.file,
      fileName: localImage.fileName,
      userId: customerId,
    })
      .then((url) => {
        customerImage = url;
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  }

  // if customer with same number exists dont create again
  if (phone !== undefined && !isEmpty(phone)) {
    const existingCustomer = await getCustomerByPhone(bookId, phone);

    if (
      existingCustomer !== undefined &&
      existingCustomer.customer_id !== customerId &&
      existingCustomer.country_code === country_code
    ) {
      return Promise.reject('Mobile number already exists with another name');
    }
  }
  const localCustomer = await getCustomerDB(customerId);

  if (!localCustomer) {
    return Promise.reject('Customer not found');
  }

  const customerRemote = {
    ...localCustomer,
    customer_id: customerId,
    book_id: bookId,
    name: customerName,
    address: address,
    phone: phone,
    country_code: country_code || '+91',
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
    image: customerImage || image,
  };

  const customer = {
    ...customerRemote,
    dirty: 1,
  };
  try {
    // dont wait for API calls
    pushCustomers(bookId, [customerRemote]).then(async () => {
      // @ts-ignore
      await updateCustomerDB({
        ...customerRemote,
        dirty: 0,
      });
    });
  } catch (e) {
    if (e?.status === 401) {
      // TODO - do something so that we can ask user to login
      // before next action
    }

    /** if remote API calls fail do nothing, we can sync later */
  }
  return customer as ICustomerValue;
};

interface IDeleteCustomerArgs {
  customerId: string;
  user: IUser;
  deviceInfo: IDevice;
  bookId: string;
}
export const deleteCustomer = async ({
  customerId,
  user,
  deviceInfo,
  bookId,
}: IDeleteCustomerArgs) => {
  if (customerId === undefined) {
    return Promise.reject('Invalid Customer Id');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const localCustomer = await getCustomerDB(customerId);

  if (localCustomer === undefined) {
    return Promise.reject('Customer not found');
  }

  const customerRemote = {
    ...localCustomer,
    sms_status: 0,
    deleted: 1,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const customer = {
    ...customerRemote,
    dirty: 1,
  };

  try {
    // update in local DB
    await updateCustomerDB(customer);
    await reconcileCustomerBalance(localCustomer.customer_id);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }
  if (localCustomer) {
    try {
      // dont wait for API calls
      pushCustomers(bookId, [customerRemote]).then(async () => {
        if (localCustomer === undefined) {
          return;
        }
        // @ts-ignore
        await updateCustomerDB({
          ...localCustomer,
          ...customerRemote,
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  } else {
    try {
      // dont wait for API calls
      pushCustomers(bookId, [customerRemote]).then(async () => {
        if (localCustomer === undefined) {
          return;
        }
        // @ts-ignore
        await updateCustomerDB({
          ...(localCustomer as object),
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  }

  return customer as ICustomerValue;
};

export const restoreCustomer = async ({
  customerId,
  user,
  deviceInfo,
  bookId,
}: IDeleteCustomerArgs) => {
  if (customerId === undefined) {
    return Promise.reject('Invalid Customer Id');
  }

  if (isEmptyValues(user)) {
    return Promise.reject('Invalid User Info');
  }

  if (isEmptyValues(deviceInfo)) {
    return Promise.reject('Invalid device Info');
  }

  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const localCustomer = await getCustomerDB(customerId);

  if (localCustomer === undefined) {
    return Promise.reject('Customer not found');
  }

  const customerRemote = {
    ...localCustomer,
    sms_status: 0,
    deleted: 0,
    updated_at: String(getCurrentTime()),
    updated_by_user: user.user_id,
    updated_by_device: deviceInfo.device_id,
  };

  const customer = {
    ...customerRemote,
    dirty: 1,
  };

  try {
    // update in local DB
    await updateCustomerDB(customer);
    await reconcileCustomerBalance(localCustomer.customer_id);
  } catch (e) {
    // catch local DB error and reject current promise
    return Promise.reject(e);
  }
  if (localCustomer) {
    try {
      // dont wait for API calls
      pushCustomers(bookId, [customerRemote]).then(async () => {
        if (localCustomer === undefined) {
          return;
        }
        // @ts-ignore
        await updateCustomerDB({
          ...localCustomer,
          ...customerRemote,
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  } else {
    try {
      // dont wait for API calls
      pushCustomers(bookId, [customerRemote]).then(async () => {
        if (localCustomer === undefined) {
          return;
        }
        // @ts-ignore
        await updateCustomerDB({
          ...(localCustomer as object),
          dirty: 0,
        });
      });
    } catch (e) {
      if (e?.status === 401) {
        // TODO - do something so that we can ask user to login
        // before next action
      }

      /** if remote API calls fail do nothing, we can sync later */
    }
  }

  return customer as ICustomerValue;
};

export const getCustomer = getCustomerDB;
export const getCustomers = getCustomersDB;
export const getCustomerCount = getCustomerCountDB;
export const getBookAggregations = getBookAggregationsDB;
export const getDeletedCustomers = getDeletedCustomersDB;
