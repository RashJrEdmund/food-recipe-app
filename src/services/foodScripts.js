import { LOCALSTORAGE } from './storage';

export const updateFavorite = (id, setArrayFoods) => {
  const update = LOCALSTORAGE.get('foodData')?.map((food) => {
    if (+food.id === +id) return { ...food, fav: !food.fav };

    return food;
  });

  LOCALSTORAGE.save('foodData', update);

  setArrayFoods([...update]);
};

// UPDATING THE NAVIGATOR SLIDES.

export const updateCardSlideImage = (args) => {
  const { indx: imgIndx, setArrayFoods, id } = args;
  const foods = LOCALSTORAGE.get('foodData').map((food) => {
    if (food.id === id) {
      return { ...food, imgIndx };
    }

    return food;
  });

  LOCALSTORAGE.save('foodData', foods);

  setArrayFoods([...foods]);
};
