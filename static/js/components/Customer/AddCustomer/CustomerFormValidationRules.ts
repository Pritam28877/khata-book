import {
  MIN_NON_INDIAN_PHONE,
  MAX_NON_INDIAN_PHONE,
} from 'src/constants/phone';
import { getAllCustomersByPhone } from 'src/webWorkers/DB/customers';

export function validate(values: { [key: string]: string }) {
  const errors: { [key: string]: string } = {};
  if (values.country_code === '+91' || !values.country_code) {
    if (values.phone && !/^\d{10}$/.test(values.phone)) {
      errors.phone = 'Please enter a valid 10 digit mobile number';
    }
  } else {
    const phoneWithCountryCode = values?.country_code + values?.phone;
    const phoneWithCountryCodeLength = phoneWithCountryCode.length;
    if (values?.phone?.length !== 0) {
      if (
        phoneWithCountryCodeLength < MIN_NON_INDIAN_PHONE ||
        phoneWithCountryCodeLength > MAX_NON_INDIAN_PHONE
      ) {
        errors.phone = 'Enter valid mobile number';
      }
    }
  }

  if (values.customer_name !== undefined) {
    if (values.customer_name.length === 0) {
      errors.name = `Please enter Customer's name`;
    }
  }
  if (values.amount) {
    errors.amount = '';
  }
  return errors;
}

export const isExistingCustomer = async (
  bookId: string,
  phone: string,
  customerId: string,
  countryCode: string
) => {
  const existingCustomers = await getAllCustomersByPhone(bookId, phone);
  let isDuplicatedPhoneNumber = false;
  if (existingCustomers && phone.length > 0) {
    existingCustomers?.forEach((customer) => {
      if (
        customer.customer_id !== customerId &&
        customer.country_code === countryCode
      ) {
        isDuplicatedPhoneNumber = true;
        return;
      }
    });
  }
  return isDuplicatedPhoneNumber;
};
