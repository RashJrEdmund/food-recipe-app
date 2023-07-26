/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodData from './data/Data.json';
import LandingNav from './components/navbar/LandingNav';
import LandingPage from './routes/Landing/LandingPage';
import FoodPage from './routes/Foods/FoodPage';
import DetailsPage from './routes/Details/DetailsPage';
import Favorites from './routes/Favorites/Favorites';
import Settings from './routes/SettingPage/Settings';
import Footer from './components/footer/Footer';
import { LOCALSTORAGE } from './services/storage';
import PageGaurd from './HOC/PageGaurd';

if (!LOCALSTORAGE.get('foodData')) {
  LOCALSTORAGE.save('foodData', FoodData);
}

function App({ setPathName, pathName }) {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        {pathName !== '/' && <LandingNav />}

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

          <Route
            path="/settings"
            element={<Settings setPathName={setPathName} />}
          />
        </Routes>

        {pathName !== '/' && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default PageGaurd(App);
