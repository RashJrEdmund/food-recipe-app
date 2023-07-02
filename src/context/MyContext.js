/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */

import React from 'react';

const FoodContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [food, setFood] = React.useState(null);

  return (
    <FoodContext.Provider value={{ food, setFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFooContext = () => React.useContext(FoodContext);
