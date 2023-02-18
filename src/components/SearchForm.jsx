import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: gold;
  background-color: #ec5766;
  background-color: #6ee374;
  padding: 10px;

  input {
    background-color: #f0b843;
    min-width: 300px;
    padding: 10px;
    margin: 0;
    border: 1px solid #444;
  }

  button {
    padding: 5px 10px;
    font-weight: 700;
    margin: 0;
    border: none;
    transition: 0.5s;

    &:hover {
      transform: translate(1.04%) scale(1.04);
    }
  }
`;

export default function SearchForm() {
  return (
    <StyledForm
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" placeholder="searchFood" />
      <button type="submit">search</button>
    </StyledForm>
  );
}
