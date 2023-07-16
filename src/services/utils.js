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

export const removeFromLocalStorage = (key) => localStorage.removeItem(key);

//  SESSIONSTORAGE BELOW using it to hold the state of the edit form

export const getFromSessionStorage = (key) =>
  JSON.parse(sessionStorage.getItem(key));

export const saveToSessionStorage = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value));

export const removeFromSession = (key) => sessionStorage.removeItem(key);
