/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyData from './data/Data.json';
import LandingPage from './pages/Landing/LandingPage';
import LandingNav from './components/navbar/LandingNav';
import Footer from './components/footer/Footer';
import FoodPage from './pages/Foods/FoodPage';

if (!JSON.parse(localStorage.getItem('MyData'))) {
  localStorage.setItem('MyData', JSON.stringify(MyData));
}

// const localData = JSON.parse(localStorage.getItem('MyData'));

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        <LandingNav />

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/foods" element={<FoodPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
