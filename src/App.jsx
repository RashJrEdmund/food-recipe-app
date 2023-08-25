/* eslint-disable react/prop-types */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodData from './data/Data.json';
import { LOCALSTORAGE } from './services/storage';
import PageGaurd from './HOC/PageGaurd';
import FoodForm from './components/FoodForm/FoodForm';
import DialogueBox from './components/DialogueBox/DialogueBox';
import FoodApp from './FoodApp';
import {
  DetailsPage,
  Favorites,
  FoodPage,
  LandingPage,
  NotFound,
  Settings,
} from './routes';

(() => {
  if (!LOCALSTORAGE.get('foodData')) {
    LOCALSTORAGE.save('foodData', FoodData);
  }
})();

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        <Routes>
          <Route path="" element={<LandingPage />} />

          <Route path="/home" element={<FoodApp />}>
            <Route path="" element={<FoodPage />}>
              <Route path="createnew" exact element={<FoodForm />} />
            </Route>

            <Route path="details/:food_id" element={<DetailsPage />}>
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
