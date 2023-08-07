/* eslint-disable react/prop-types */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodData from './data/Data.json';
import LandingPage from './routes/Landing/Landing';
import FoodPage from './routes/Foods/FoodPage';
import DetailsPage from './routes/Details/DetailsPage';
import Favorites from './routes/Favorites/Favorites';
import Settings from './routes/SettingPage/Settings';
import NotFound from './routes/NotFound/NotFound';
import { LOCALSTORAGE } from './services/storage';
import PageGaurd from './HOC/PageGaurd';
import FoodForm from './components/FoodForm/FoodForm';
import DialogueBox from './components/DialogueBox/DialogueBox';
import FoodApp from './FoodApp';

(() => {
  if (!LOCALSTORAGE.get('foodData')) {
    LOCALSTORAGE.save('foodData', FoodData);
  }
})();

function App() {
  return (
    <BrowserRouter basename="/food_app">
      <div className="App" id="App">
        <Routes>
          <Route index element={<LandingPage />} />

          <Route path="/home" element={<FoodApp />}>
            <Route path="foods" element={<FoodPage />}>
              <Route path="createnew" exact element={<FoodForm />} />
            </Route>

            <Route path="foods/details/:name" element={<DetailsPage />}>
              <Route path="edit" element={<FoodForm />} />
              <Route path="delete" element={<DialogueBox />} />
              <Route path="redirect" element={<DialogueBox />} />
            </Route>

            <Route path="favorites" element={<Favorites />} />

            <Route path="settings" element={<Settings />}>
              <Route path="reset" element={<DialogueBox />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PageGaurd(App);
