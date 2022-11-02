// libs
import { useCallback, useMemo } from 'react';
import get from 'lodash.get';
import { useHistory } from 'react-router-dom';

// contexts
import { useErrorContext } from 'src/components/ErrorBoundary/context';

// worker api
import workerApi from 'src/webWorkers/Api';

// constants
import { HOME_URI, LOGIN_URI } from 'src/constants/url';
import { SENTRY_TAG } from 'src/constants/sentry';

// hooks
import useForm from 'src/hooks/useForm';

// helpers
import { isEmptyValues } from 'src/helpers/utils';
import { captureException } from 'src/helpers/sentry';
import { validate } from 'src/components/Customer/AddCustomer/CustomerFormValidationRules';

// selectors
import { useAppState } from 'src/store/app/selectors';

// defs
import { ICustomerValue } from 'src/webWorkers/DB/types';

interface IUseAddCustomerProps {
  onSuccess: (customer: ICustomerValue) => void;
  isEdit?: boolean | false;
}

const useAddCustomer = ({ onSuccess, isEdit }: IUseAddCustomerProps) => {
  const { getUserInfo, getDeviceInfo, getCurrentBook } = useAppState();
  const history = useHistory();
  const { showError } = useErrorContext();
  const book = getCurrentBook();
  const validateOnChange = true;

  const addCustomer = useCallback(
    (data) => {
      const {
        customer_name: customerName,
        phone,
        address,
        country_code,
        image,
        localImage,
      } = data;

      const customerId = data?.customer_id;

      const user = getUserInfo();
      const deviceInfo = getDeviceInfo();

      if (user === undefined || deviceInfo === undefined) {
        history.replace(LOGIN_URI);
        return;
      }

      if (book === undefined) {
        history.replace(HOME_URI);
        return;
      }

      const bookId = book.book_id;
      isEdit
        ? workerApi
            .updateCustomer({
              bookId,
              customerName,
              phone,
              user,
              deviceInfo,
              address,
              country_code,
              image,
              ...(localImage && { localImage }),
              ...(customerId && { customerId }),
            })
            .then((customer: ICustomerValue) => {
              onSuccess(customer);
            })
            .catch((e: Error) => {
              showError();
              captureException(e, {
                tags: {
                  module: SENTRY_TAG.ADD_CUSTOMER,
                },
              });
            })
        : workerApi
            .addCustomer({
              bookId,
              customerName,
              phone,
              user,
              deviceInfo,
              ...(customerId && { customerId }),
            })
            .then((customer: ICustomerValue) => onSuccess(customer))
            .catch((e: Error) => {
              showError();
              captureException(e, {
                tags: {
                  module: SENTRY_TAG.ADD_CUSTOMER,
                },
              });
            });
    },
    [book, getDeviceInfo, getUserInfo, history, onSuccess, showError, isEdit]
  );

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handlePhoneNumberChange,
    handleCountryCodeChange,
  } = useForm(addCustomer, validate, validateOnChange);

  const isDisabled = useMemo(() => {
    const phoneHasError = get(errors, 'phone') ? true : false;
    return (
      isEmptyValues(values.customer_name) ||
      (Boolean(values.phone) && phoneHasError)
    );
  }, [errors, values.customer_name, values.phone]);

  return {
    book,
    values,
    handleChange,
    handleSubmit,
    handlePhoneNumberChange,
    handleCountryCodeChange,
    isDisabled,
    errors,
  };
};

export default useAddCustomer;
