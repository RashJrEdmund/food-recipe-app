/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyData from './data/Data.json';
import MyFoodContext from './context/MyContext';
import FoodContainer from './components/FoodContainer';
import AddFoodForm from './components/AddFoodForm';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FavoritePage from './components/FavoritePage';

import AlertMessage from './components/AlertMessage';

if (!JSON.parse(localStorage.getItem('MyData'))) {
  localStorage.setItem('MyData', JSON.stringify(MyData));
}

const localData = JSON.parse(localStorage.getItem('MyData'));

function App() {
  const [foodData, setFoodData] = React.useState(localData);

  const [favoriteData, setFavorite] = React.useState(
    JSON.parse(localStorage.getItem('favorites'))
  );

  const [pickedFoodToUpdate, setPickFoodToUpdate] = React.useState({});

  const [showFoodForm, setShowFoodForm] = React.useState({
    form: false,
    uploadImg: false,
  });

  const [showAlert, setShowAlert] = React.useState(false);

  const [showUpdateFrom, setShowUpdateForm] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(false);
  const [resetDialogue, setResetDialogue] = React.useState(false);
  const [imagePath, setImagePath] = React.useState(null);

  const toggleBodyOverFlow = () => {
    if (showFoodForm.form || showUpdateFrom || resetDialogue) {
      document.body.classList.add('body-overflow');
    } else {
      document.body.classList.remove('body-overflow');
    }
  };

  React.useEffect(() => {
    toggleBodyOverFlow();
  }, [showFoodForm.form, showUpdateFrom, resetDialogue]);

  const closeAllOpenRecipes = () => {
    const holder1 = foodData;
    const newHolder1 = holder1.map((food) => ({ ...food, showRecipe: false }));
    setFoodData(newHolder1);

    const newHolderFav = favoriteData
      ? favoriteData.map((food) => ({ ...food, showRecipe: false }))
      : [];

    setFavorite(newHolderFav);
  };

  const toggleAlert = () => {
    setShowAlert((prev) => !prev);

    setTimeout(() => {
      setShowAlert((prev) => !prev);
    }, 2000);
  };

  const handleNavigation = () => {
    toggleAlert();
  };

  return (
    <MyFoodContext.Provider
      value={{
        toggleBodyOverFlow,
        closeAllOpenRecipes,

        MyData,
        localData,

        foodData,
        setFoodData,

        favoriteData,
        setFavorite,

        pickedFoodToUpdate,
        setPickFoodToUpdate,

        showFoodForm,
        setShowFoodForm,

        showUpdateFrom,
        setShowUpdateForm,

        activeMenu,
        setActiveMenu,

        imagePath,
        setImagePath,

        resetDialogue,
        setResetDialogue,
      }}
    >
      <BrowserRouter>
        <Hero />

        {showAlert && (
          <AlertMessage message="This feature is not yet availble" />
        )}

        {showFoodForm.form && <AddFoodForm />}

        <div className="App" id="App">
          <p className="below-are">
            Below are a compilation of a few food recipes
          </p>

          <Routes>
            <Route index element={<FoodContainer />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>

          <div className="app-buttons">
            <button
              className="left-right-btns"
              type="button"
              onClick={() => handleNavigation()}
            >
              &#60;
            </button>

            {foodData.map((piece) => (
              <button
                className="page-number-button"
                type="button"
                key={piece.id}
                onClick={() => handleNavigation()}
              >
                {piece.id + 1}
              </button>
            ))}

            <button
              className="left-right-btns"
              type="button"
              onClick={() => handleNavigation()}
            >
              &#62;
            </button>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </MyFoodContext.Provider>
  );
}

export default App;
