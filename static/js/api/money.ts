// helpers
import KBFetch, { setFetchHeaders } from 'src/helpers/api';
import { ROUTES, getUrl } from 'src/api/url';
import { IDevice } from 'src/types/user';
interface IVerifyKYC {
  id: string;
  userId: string;
  accountId: string;
  pan: string;
}

export const fetchQrCode = (token: string, bookId: string) => {
  const baseUrl = getUrl(ROUTES.FETCH_QR_CODE);
  const params = new URLSearchParams();

  setFetchHeaders({ 'x-khatabook-token': token });

  const url = `${baseUrl}?${params.toString()}`;
  const body = {
    book_id: bookId,
  };

  return KBFetch(ROUTES.FETCH_QR_CODE, url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response?.json());
};

export const getBankAccount = (bookId: string, deviceInfo?: IDevice) => {
  const baseUrl = getUrl(ROUTES.GET_BANK_ACCOUNT);
  const token = deviceInfo?.token;
  const params = new URLSearchParams();
  if (bookId) params.append('bookId', bookId);
  if (token) {
    setFetchHeaders({ 'x-khatabook-token': token });
  }

  const url = `${baseUrl}?${params.toString()}`;

  return KBFetch(ROUTES.GET_BANK_ACCOUNT, url, {
    method: 'get',
  }).then((response) => response?.json());
};

export const getInvoices = ({
  bookId,
  serverSeq = '0',
  limit,
}: {
  bookId: string;
  serverSeq: string;
  limit?: number;
}) => {
  const baseUrl = getUrl(ROUTES.GET_INVOICES);
  const params = new URLSearchParams();
  params.append('bookId', bookId);
  params.append('serverSeq', serverSeq);
  params.append('limit', String(limit));
  const url = `${baseUrl}?${params.toString()}`;
  return KBFetch(ROUTES.GET_INVOICES, url, {
    method: 'get',
  })
    .then((response) => response?.json())
    .catch((error) => error?.json());
};

export const getPayouts = ({
  bookId,
  serverSeq = '0',
  limit,
}: {
  bookId: string;
  serverSeq: string;
  limit?: number;
}) => {
  const baseUrl = getUrl(ROUTES.GET_PAYOUTS);
  const params = new URLSearchParams();
  params.append('bookId', bookId);
  params.append('serverSeq', serverSeq);
  params.append('limit', String(limit));
  const url = `${baseUrl}?${params.toString()}`;
  return KBFetch(ROUTES.GET_PAYOUTS, url, {
    method: 'get',
  })
    .then((response) => response?.json())
    .catch((error) => error?.json());
};

export const verifyKYC = ({ id, accountId, userId, pan }: IVerifyKYC) => {
  const baseUrl = getUrl(ROUTES.VERIFY_KYC);

  const params = new URLSearchParams();
  params.append('id', id);
  params.append('account_id', accountId);
  params.append('user_id', userId);
  params.append('pan', pan);

  const url = `${baseUrl}?${params.toString()}`;

  return KBFetch(ROUTES.VERIFY_KYC, url, {
    method: 'get',
  })
    .then((response) => response?.json())
    .catch((error) => error?.json());
};

export const getStateAndCityFromPincode = (pincode: string) => {
  const baseUrl = getUrl(ROUTES.PINCODE_DETAILS);
  const params = new URLSearchParams();

  params.append('pincode', pincode);

  const url = `${baseUrl}?${params.toString()}`;
  return KBFetch(ROUTES.PINCODE_DETAILS, url, {
    method: 'get',
  }).then((response) => response?.json());
};

export const isPincodeServiceable = (pincode: string) => {
  const baseUrl = getUrl(ROUTES.IS_PINCODE_SERVICEABLE);
  const params = new URLSearchParams();

  params.append('pincode', pincode);

  const url = `${baseUrl}?${params.toString()}`;
  return KBFetch(ROUTES.IS_PINCODE_SERVICEABLE, url, {
    method: 'get',
  })
    .then((response) => response?.json())
    .catch((error) => error?.json());
};

export const orderQrCode = (data: any, deviceInfo: IDevice) => {
  const baseUrl = getUrl(ROUTES.ORDER_QR_CODE);
  const params = new URLSearchParams();
  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });
  const body = {
    book_id: data.bookId,
    business_name: data.businessName,
    phone: data.phone,
    country_code: data.countryCode,
    address: {
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      building_number: data.buildingNumber,
      address_line_1: data.address1,
      address_line_2: data.address2,
      landmark: data.landmark,
    },
  };

  const url = `${baseUrl}?${params.toString()}`;
  return KBFetch(ROUTES.ORDER_QR_CODE, url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response?.json());
};

export const getPaymentCharges = () => {
  const baseUrl = getUrl(ROUTES.PAYMENT_CHARGES);

  return KBFetch(ROUTES.PAYMENT_CHARGES, baseUrl, {
    method: 'get',
  })
    .then((response) => response?.json())
    .catch((error) => error?.json());
};

export const getQrOrderPlaced = (bookId: string, deviceInfo: IDevice) => {
  const baseUrl = getUrl(ROUTES.GET_QR_CODE_PLACED);
  const params = new URLSearchParams();
  const token = deviceInfo.token;

  setFetchHeaders({ 'x-khatabook-token': token });

  const body = {
    book_id: bookId,
  };

  const url = `${baseUrl}?${params.toString()}`;
  return KBFetch(ROUTES.ORDER_QR_CODE, url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response?.json());
};

export const getPaymentsPermissions = (
  bookId: string,
  deviceInfo?: IDevice
) => {
  const baseUrl = getUrl(ROUTES.GET_PAYMENTS_PERMISSIONS);
  const params = new URLSearchParams();
  params.append('bookId', bookId);
  const url = `${baseUrl}?${params.toString()}`;
  const token = deviceInfo?.token;
  if (token) {
    setFetchHeaders({ 'x-khatabook-token': token });
  }
  return KBFetch(ROUTES.GET_PAYMENTS_PERMISSIONS, url, {
    method: 'get',
  }).then((response) => response?.json());
};
