import { getFromLocalStorage, saveToLocalStorage } from './utils';

export const updateFavorite = (id, setArrayFoods) => {
  const update = getFromLocalStorage('foodData')?.map((food) => {
    if (+food.id === +id) return { ...food, fav: !food.fav };

    return food;
  });

  saveToLocalStorage('foodData', update);

  setArrayFoods([...update]);
};

// UPDATING THE NAVIGATOR SLIDES

export const updateSlideIndex = (args) => {
  const { indx: imgIndx, setArrayFoods, id } = args;
  const foods = getFromLocalStorage('foodData').map((food) => {
    if (food.id === id) {
      return { ...food, imgIndx };
    }

    return food;
  });

  saveToLocalStorage('foodData', foods);

  setArrayFoods([...foods]);
};

// CONVERTING IMAGE TO BASE 64. HAVEN'T REALLY USED IT

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
