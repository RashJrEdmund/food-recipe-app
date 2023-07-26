/* eslint-disable react/prop-types */
import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import useAlert from '../../hooks/UseAlert';
import FoodForm from '../../components/FoodForm/FoodForm';
import SearchForm from '../../components/SearchForm/SearchForm';
import { SESSIONSTORAGE } from '../../services/storage';

export default function Favorites({ setPathName }) {
  const [showForm, setShowForm] = React.useState(false);
  const [favorites, setFavorites] = React.useState(null);
  const [searchFallBack, setSearchFallBack] = React.useState([]);

  const { AlertComponent, displayAlert, alertMsg, foodData } = useAlert();
  React.useEffect(() => {
    const data = foodData || [];
    const favs = data.filter((food) => food.fav === true);
    setFavorites([...favs]);
    setSearchFallBack([...favs]);

    return () => {
      SESSIONSTORAGE.remove('searchIdList'); // clearing the search id array that is created when a search is made
      SESSIONSTORAGE.remove('searchValue'); // clearing the search value from storage
    };
  }, [foodData]);

  React.useEffect(() => setPathName(window.location.pathname), []); // helps for my 404 page

  return (
    <>
      {alertMsg.show && <AlertComponent />}

      {showForm && (
        <FoodForm
          toggleShowForm={() => setShowForm((prev) => !prev)}
          displayAlert={displayAlert}
          creatingNew // to signify that it's a new item beeing created
        />
      )}

      <div>
        <SearchForm
          searchOptions={['FAV']}
          setSearchItems={setFavorites}
          searchFallBack={searchFallBack}
          placeHolder="search favorites"
        />

        <Header2Atom
          text="Favorite List"
          size="1.5rem"
          margin="3rem auto 2rem"
          weight="700"
        />

        <SampleFoods
          arrayFoods={favorites}
          allowInteraction
          fallbackmessage="You Have No Food In Your Favourite List"
        />
      </div>
    </>
  );
}
