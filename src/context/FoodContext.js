/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOCALSTORAGE } from '../services/storage';
import useAlert from '../hooks/UseAlert';
import { DEFAULT_TOAST_TIME, TOAST_TYPE } from '../services/constants';

const FoodContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [foodData, setFoodData] = React.useState(null);
  const [toastTime, setToastime] = React.useState(
    +LOCALSTORAGE.get('toast_time') || DEFAULT_TOAST_TIME
  );

  const { AlertComponent, displayAlert, alertMsg } = useAlert();
  // using this only when i want the alert message to persit even
  // when you route to a diff location. like the case of deleting food

  const toastTypes = Object.values(TOAST_TYPE); // ['success', 'info', 'warning', 'error'];

  const toastAlert = (message, options) => {
    toast[toastTypes.includes(options?.type) ? options?.type : 'info'](
      `${message}`,
      {
        position: options?.position ?? 'top-right',
        autoClose: options?.autoClose ?? toastTime, // to get it back in milli seconds
        hideProgressBar: options?.hideProgressBar ?? false,
        closeOnClick: options?.closeOnClick ?? true,
        pauseOnHover: options?.pauseOnHover ?? true,
        draggable: options?.draggable ?? true,
        progress: options?.progress ?? undefined,
        theme: options?.theme ?? 'dark',
      }
    );
  };

  React.useEffect(() => {
    const data = LOCALSTORAGE.get('foodData') || [];

    if (data) setFoodData(data);
  }, []);

  return (
    <FoodContext.Provider
      value={{
        foodData,
        setFoodData,
        displayAlert,
        toastAlert,
        toastTime,
        setToastime,
      }}
    >
      {alertMsg.show && <AlertComponent />}

      <ToastContainer
        position="top-right"
        autoClose={toastTime}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => React.useContext(FoodContext);
