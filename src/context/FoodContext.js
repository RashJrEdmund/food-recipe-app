/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */

import React from 'react';
import { getFromLocalStorage } from '../services/utils';

const FoodContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [foodData, setFoodData] = React.useState(null);

  React.useEffect(() => {
    const data = getFromLocalStorage('foodData') || [];

    if (data) setFoodData(data);
  }, []);

  return (
    <FoodContext.Provider value={{ foodData, setFoodData }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => React.useContext(FoodContext);
