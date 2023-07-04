/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const StyledSearchForm = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;

  input {
    background-color: transparent;
    width: min(97vw, 300px);
    height: 50px;
    border: 1px solid #808080;
    border-radius: 10px;
    padding: 10px;
  }
`;

export default function SearchForm({ searchValue, setSearchValue }) {
  return (
    <StyledSearchForm>
      <input
        type="text"
        value={searchValue}
        placeholder="search Item"
        onChange={({ target: { value } }) => setSearchValue(value)}
      />
    </StyledSearchForm>
  );
}
