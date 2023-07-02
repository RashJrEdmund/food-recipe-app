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
