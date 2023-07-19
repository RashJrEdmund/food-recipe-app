/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */

import React from 'react';
import { LOCALSTORAGE } from '../services/storage';
import useAlert from '../hooks/UseAlert';

const FoodContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [foodData, setFoodData] = React.useState(null);

  const { AlertComponent, displayAlert, alertMsg } = useAlert();
  // using this only when i want the alert message to persit even
  // when you route to a diff location. like the case of deleting food

  React.useEffect(() => {
    const data = LOCALSTORAGE.get('foodData') || [];

    if (data) setFoodData(data);
  }, []);

  return (
    <FoodContext.Provider value={{ foodData, setFoodData, displayAlert }}>
      {alertMsg.show && <AlertComponent />}

      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => React.useContext(FoodContext);
