/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyData from './data/Data.json';
import LandingPage from './pages/Landing/LandingPage';

if (!JSON.parse(localStorage.getItem('MyData'))) {
  localStorage.setItem('MyData', JSON.stringify(MyData));
}

const localData = JSON.parse(localStorage.getItem('MyData'));

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/favorites" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
