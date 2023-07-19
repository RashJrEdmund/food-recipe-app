/* eslint-disable react/prop-types */
import React from 'react';
import StyledSearchForm from './StyledSearchForm';
import { LOCALSTORAGE, SESSIONSTORAGE } from '../../services/storage';
import { createSearchIdList } from '../../services/utils';

export default function SearchForm({
  setSearchItems,
  searchFallBack, // the fallback value given no search is found
  searchOptions = [],
  placeHolder,
}) {
  const [searchValue, setSearchValue] = React.useState('');

  // const [searchIedtems, setSearchItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const debounceFetch = () => {
    const data = LOCALSTORAGE.get('foodData') || [];

    const results = data.filter((food) => {
      if (searchOptions.includes('FAV'))
        // to search only through favorites
        return (
          food.name
            .trim()
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase()) && food.fav === true
        );

      return food.name
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase());
    });

    createSearchIdList(results); // this stores an array of searched id's to sessionstorage, helps when i want to rerender
    setSearchItems([...results]);

    setLoading(false);
  };

  React.useEffect(() => {
    let intId = null;
    if (searchValue.match(/\w+/)) {
      setLoading(true);
      intId = setTimeout(() => {
        debounceFetch();
      }, 900);
    } else {
      setLoading(false);
      setSearchItems([...searchFallBack]);
      SESSIONSTORAGE.remove('searchIdList');
    }

    SESSIONSTORAGE.save('searchValue', searchValue.trim()); // storing the search value to sessionstorage

    return () => clearTimeout(intId);
  }, [searchValue]);

  return (
    <StyledSearchForm loading={loading}>
      <input
        type="text"
        value={searchValue}
        placeholder={placeHolder || 'search Item'}
        onChange={({ target: { value } }) => setSearchValue(value)}
      />
    </StyledSearchForm>
  );
}
