// libs
import { useState, useEffect } from 'react';

// helpers
import {
  listenCustomerChange,
  listenTransactionChange,
  listenCustomerDeleted,
  listenBookDeleted,
  listenBookChanged,
  listenInvoiceChange,
} from 'src/helpers/customEvents/listeners';

const useReRenderOnUpdate = () => {
  const [reRenderKey, setReRenderKey] = useState(1);

  // re-render customers list on customer add or edit
  useEffect(() => {
    const onChange = () => {
      setReRenderKey((currentKey) => {
        return currentKey === 1 ? 2 : 1;
      });
    };

    const clearFunc = listenCustomerChange(onChange);

    return clearFunc;
  }, []);

  // re-render customers list on customer delete
  useEffect(() => {
    const onChange = () => {
      setReRenderKey((currentKey) => {
        return currentKey === 1 ? 2 : 1;
      });
    };

    const clearFunc = listenCustomerDeleted(onChange);

    return clearFunc;
  }, []);

  // re-render customers list on transaction add or edit or delete
  useEffect(() => {
    const onChange = () => {
      setReRenderKey((currentKey) => {
        return currentKey === 1 ? 2 : 1;
      });
    };

    const clearFunc = listenTransactionChange(onChange);

    return clearFunc;
  }, []);

  // re-render recycle bin on book deletion
  useEffect(() => {
    const onChange = () => {
      setReRenderKey((currentKey) => {
        return currentKey === 1 ? 2 : 1;
      });
    };

    const clearFunc = listenBookDeleted(onChange);

    return clearFunc;
  }, []);

  // re-render recycle bin on book restore/ update
  useEffect(() => {
    const onChange = () => {
      setReRenderKey((currentKey) => {
        return currentKey === 1 ? 2 : 1;
      });
    };

    const clearFunc = listenBookChanged(onChange);

    return clearFunc;
  }, []);

  // re-render payments history on payments update
  useEffect(() => {
    const onChange = () => {
      setReRenderKey((currentKey) => {
        return currentKey === 1 ? 2 : 1;
      });
    };

    const clearFunc = listenInvoiceChange(onChange);

    return clearFunc;
  }, []);
  return { reRenderKey };
};

export default useReRenderOnUpdate;
