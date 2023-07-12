/* eslint-disable react/prop-types */
import React from 'react';
import StyledSearchForm from './StyledSearchForm';
import { getFromLocalStorage } from '../../services/utils';

export default function SearchForm({
  setSearchItems,
  searchFallBack, // the fallback value given no search is found
  searchOptions = [],
}) {
  const [searchValue, setSearchValue] = React.useState('');
  // const [searchIedtems, setSearchItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const debounceFetch = () => {
    const data = getFromLocalStorage('foodData') || [];

    const results = data.filter((food) => {
      if (searchOptions.includes('FAV'))
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
    }

    return () => clearTimeout(intId);
  }, [searchValue]);

  return (
    <StyledSearchForm loading={loading}>
      <input
        type="text"
        value={searchValue}
        placeholder="search Item"
        onChange={({ target: { value } }) => setSearchValue(value)}
      />
    </StyledSearchForm>
  );
}
