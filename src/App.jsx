/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodData from './data/Data.json';
import LandingPage from './pages/Landing/LandingPage';
import LandingNav from './components/navbar/LandingNav';
import Footer from './components/footer/Footer';
import FoodPage from './pages/Foods/FoodPage';
import { saveToLocalStorage, getFromLocalStorage } from './services/utils';

if (!getFromLocalStorage('foodData')) {
  saveToLocalStorage('foodData', FoodData);
}

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        <LandingNav />

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/foods" element={<FoodPage />} />
          <Route path="/details/:id" />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
