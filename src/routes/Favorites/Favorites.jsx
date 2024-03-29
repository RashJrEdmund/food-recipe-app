/* eslint-disable react/prop-types */
import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import FoodForm from '../../components/FoodForm/FoodForm';
import SearchForm from '../../components/organisms/SearchForm/SearchForm';
import { LOCALSTORAGE, SESSIONSTORAGE } from '../../services/storage';
import { useFoodContext } from '../../context/FoodContext';

export default function Favorites() {
  const [showForm, setShowForm] = React.useState(false);
  const [favorites, setFavorites] = React.useState(null);
  const [searchFallBack, setSearchFallBack] = React.useState([]);
  const { foodData } = useFoodContext();

  React.useEffect(() => {
    const data = LOCALSTORAGE.get('foodData') || [];
    const favs = data.filter((food) => food.fav === true);
    setFavorites([...favs]);
    setSearchFallBack([...favs]);

    return () => {
      SESSIONSTORAGE.remove('searchIdList'); // clearing the search id array that is created when a search is made
      SESSIONSTORAGE.remove('searchValue'); // clearing the search value from storage
    };
  }, [foodData]);

  return (
    <>
      {showForm && (
        <FoodForm
          toggleShowForm={() => setShowForm((prev) => !prev)}
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
          margin="2rem auto"
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
