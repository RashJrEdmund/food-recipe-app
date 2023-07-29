/* eslint-disable react/prop-types */
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodData from './data/Data.json';
import LandingNav from './components/navbar/LandingNav';
import LandingPage from './routes/Landing/Landing';
import FoodPage from './routes/Foods/FoodPage';
import DetailsPage from './routes/Details/DetailsPage';
import Favorites from './routes/Favorites/Favorites';
import Settings from './routes/SettingPage/Settings';
import NotFound from './routes/NotFound/NotFound';
import Footer from './components/footer/Footer';
import { LOCALSTORAGE } from './services/storage';
import PageGaurd from './HOC/PageGaurd';
import FoodForm from './components/FoodForm/FoodForm';
import DialogueBox from './components/DialogueBox/DialogueBox';

(() => {
  if (!LOCALSTORAGE.get('foodData')) {
    LOCALSTORAGE.save('foodData', FoodData);
  }
})();

function App() {
  const [pathName, setPathName] = React.useState(
    window.location.pathname.split('/').pop()
  );

  return (
    <BrowserRouter>
      <div className="App" id="App">
        {pathName !== '' && (
          <LandingNav pathName={pathName} setPathName={setPathName} />
        )}

        <Routes>
          <Route index element={<LandingPage setPathName={setPathName} />} />

          <Route path="/foods" element={<FoodPage />}>
            <Route path="createnew" element={<FoodForm />} />
          </Route>

          <Route path="foods/details/:name" element={<DetailsPage />}>
            <Route path="edit" element={<FoodForm />} />
            <Route path="delete" element={<DialogueBox />} />
            <Route path="redirect" element={<DialogueBox />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />

          <Route path="/settings" element={<Settings />}>
            <Route path="reset" element={<DialogueBox />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        {pathName !== '' && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default PageGaurd(App);
