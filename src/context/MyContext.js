/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */

import React from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../services/utils';

const FoodContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [foodData, setFoodData] = React.useState(null);

  React.useEffect(() => {
    const data = getFromLocalStorage('foodData') || [];

    if (data) setFoodData(data);
  }, []);

  const updateFavorite = (id) => {
    const update = getFromLocalStorage('foodData')?.map((food) => {
      if (+food.id === +id) return { ...food, fav: !food.fav };

      return food;
    });

    saveToLocalStorage('foodData', update);

    setFoodData([...update]);
  };

  return (
    <FoodContext.Provider value={{ foodData, setFoodData, updateFavorite }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => React.useContext(FoodContext);
