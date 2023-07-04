/* eslint-disable */

import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { getFromLocalStorage, removeFromSession } from '../../services/utils';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function Search() {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchedItems, setSearchItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const debounceFetch = () => {
    const data = getFromLocalStorage('foodData') || [];

    const res = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchItems([...res]);

    setLoading(false);
  };

  React.useEffect(() => {
    if (searchValue.trim()) setLoading(true);
    else setLoading(false);

    const intId = setTimeout(() => {
      if (searchValue.trim()) debounceFetch();
      else setSearchItems([]);
    }, 900);

    return () => clearTimeout(intId);
  }, [searchValue]);

  React.useEffect(() => {
    return () => removeFromSession('search');
  }, []);

  const handleWindowClick = () => {
    if (searchValue.trim()) debounceFetch();
    a;
  };

  React.useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    // this is so that liking an item will cause a re-search and thus render an updated version

    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />

      <Header2Atom
        text="Search Items"
        size="1.5rem"
        margin="3rem auto 2rem"
        weight="700"
      />

      <SampleFoods
        arrayFoods={searchedItems}
        allowInteraction
        fallbackmessage="No Items Listem Yet"
      />

      {loading && (
        <p style={{ width: '100%', textAlign: 'center' }}>Loading...</p>
      )}
    </div>
  );
}
