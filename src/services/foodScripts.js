import { LOCALSTORAGE, SESSIONSTORAGE } from './storage';

export const updateFavorite = (id, setArrayFoods) => {
  const update = LOCALSTORAGE.get('foodData')?.map((food) => {
    if (food.id === id) return { ...food, fav: !food.fav };

    return food;
  });

  LOCALSTORAGE.save('foodData', update);

  if (SESSIONSTORAGE.get('searchIdList')) {
    const localFood = LOCALSTORAGE.get('foodData');
    const results = SESSIONSTORAGE.get('searchIdList').map((foodId) =>
      localFood.find((food) => food.id === foodId)
    );

    setArrayFoods([...results]);
    return;
  }

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
