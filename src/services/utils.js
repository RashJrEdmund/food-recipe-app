// const toggleBodyOverFlow = () => {
//     if (showFoodForm.form || showUpdateFrom || resetDialogue) {
//       document.body.classList.add('body-overflow');
//     } else {
//       document.body.classList.remove('body-overflow');
//     }
//   };

//   React.useEffect(() => {
//     toggleBodyOverFlow();
//   }, [showFoodForm.form, showUpdateFrom, resetDialogue]);

export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

//  SESSIONSTORAGE BELOW using it to hold the state of the edit form

export const getFromSessionStorage = (key) =>
  JSON.parse(sessionStorage.getItem(key));

export const saveToSessionStorage = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value));

export const removeFromSession = (key) => sessionStorage.removeItem(key);

// DONE WITH SESSIONSTORAGE. MOVING TO UPDATING FAVORITE

export const updateFavorite = (id, setFoodData) => {
  const update = getFromLocalStorage('foodData')?.map((food) => {
    if (+food.id === +id) return { ...food, fav: !food.fav };

    return food;
  });

  saveToLocalStorage('foodData', update);

  setFoodData([...update]);
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
