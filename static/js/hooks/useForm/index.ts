// libs
import { useState, useCallback } from 'react';
import React from 'react';

// hooks
import { useLanguageContext } from '../../components/LanguageProvider/context';

// defs
import { ITranslationOption } from 'src/components/LanguageProvider/types';
interface IHashMap {
  [key: string]: string;
}

const useForm = (
  callback: (values?: IHashMap) => void,
  validate?: (
    values: IHashMap,
    t?: (key: string, options?: ITranslationOption | undefined) => string
  ) => IHashMap,
  validateOnChange?: boolean
) => {
  const [values, setValues] = useState<IHashMap>({});
  const [errors, setErrors] = useState<IHashMap>({});
  const { t } = useLanguageContext();
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      if (event) event.preventDefault();

      let localErrors: { [key: string]: string } = {};

      if (validate !== undefined) {
        localErrors = validate(values, t);
        setErrors(localErrors);
      }

      if (Object.keys(localErrors).length === 0) {
        callback(values);
      }
    },
    [callback, t, validate, values]
  );

  const bulkChange = useCallback(
    (allValues: IHashMap, obj: any) => {
      // eslint-disable-next-line
      console.log('values', { values });
      const newValues = {
        ...allValues,
        ...obj,
      };
      setValues(newValues);
      if (validateOnChange && validate !== undefined) {
        setErrors(validate(newValues));
      }
    },
    [validate, validateOnChange, values]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.indexOf(' ') !== 0) {
        const newValues = {
          ...values,
          [event.target.name]: event.target.value,
        };

        setValues(newValues);

        if (validateOnChange && validate !== undefined) {
          setErrors(validate(newValues));
        }
      }
    },
    [validate, validateOnChange, values]
  );

  const handlePhoneNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const onlyDigits = event.target.value.replace(/[^0-9]/g, '');

      const newValues = {
        ...values,
        phone: onlyDigits,
      };

      setValues(newValues);
      if (validateOnChange && validate !== undefined) {
        setErrors(validate(newValues));
      }
    },
    [validate, validateOnChange, values]
  );

  const handleCountryCodeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValues = {
        ...values,
        country_code: event.target.value,
      };

      setValues(newValues);
      if (validateOnChange && validate !== undefined) {
        setErrors(validate(newValues));
      }
    },
    [validate, validateOnChange, values]
  );

  const handleOTPChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const onlyDigits = event.target.value.replace(/[^0-9]/g, '');

      const newValues = {
        ...values,
        pin: onlyDigits,
      };

      setValues(newValues);
      if (validateOnChange && validate !== undefined) {
        setErrors(validate(newValues));
      }
    },
    [validate, validateOnChange, values]
  );

  return {
    handleChange,
    bulkChange,
    handleSubmit,
    handleOTPChange,
    handlePhoneNumberChange,
    handleCountryCodeChange,
    values,
    errors,
  };
};

export default useForm;
