/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyData from './data/Data.json';
import MyFoodContext from './context/MyContext';
import FoodContainer from './components/FoodContainer/FoodContainer';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import Footer from './components/Footer/Footer';
import FavoritePage from './components/FavoritePage/FavoritePage';

import AlertMessage from './components/AlertMessage';
import Navbar from './components/Navbar/Navbar';

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

  const [showUpdateFrom, setShowUpdateForm] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(false);
  const [resetDialogue, setResetDialogue] = React.useState(false);
  const [imagePath, setImagePath] = React.useState(null);

  const [alertMsg, setAlertMsg] = React.useState({
    message: '',
    show: false,
  });

  const toggleAlert = (msg) => {
    setAlertMsg((prev) => ({ message: msg, show: !prev.show }));

    setTimeout(() => {
      setAlertMsg((prev) => ({ ...prev, show: !prev.show }));
    }, 2000);
  };

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

  const handleNavigation = () => {
    toggleAlert('This feature is not yet availble');
  };

  return (
    <MyFoodContext.Provider
      value={{
        toggleAlert,

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
        <Navbar />

        {alertMsg.show && <AlertMessage message={alertMsg.message} />}

        {showFoodForm.form && <AddFoodForm />}

        <div className="App" id="App">
          <p className="below-are">
            this is a minor compilation of food recipes
          </p>

          <Routes>
            <Route
              index
              element={<FoodContainer toggleMessage={toggleAlert} />}
            />
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
