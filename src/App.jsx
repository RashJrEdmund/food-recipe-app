/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodData from './data/Data.json';
import LandingPage from './routes/Landing/LandingPage';
import LandingNav from './components/navbar/LandingNav';
import Footer from './components/footer/Footer';
import FoodPage from './routes/Foods/FoodPage';
import { saveToLocalStorage, getFromLocalStorage } from './services/utils';
import DetailsPage from './routes/Details/DetailsPage';
import Favorites from './routes/Favorites/Favorites';
import PageGaurd from './HOC/PageGaurd';

if (!getFromLocalStorage('foodData')) {
  saveToLocalStorage('foodData', FoodData);
}

function App({ setPathName }) {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        <LandingNav />

        <Routes>
          <Route index element={<LandingPage setPathName={setPathName} />} />
          <Route
            path="/foods"
            element={<FoodPage setPathName={setPathName} />}
          />
          <Route
            path="foods/details/:name"
            element={<DetailsPage setPathName={setPathName} />}
          />
          <Route
            path="/favorites"
            element={<Favorites setPathName={setPathName} />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default PageGaurd(App);
