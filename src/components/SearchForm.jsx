import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background-color: gold;
    background-color: #ec5766;
    background-color: #6ee374;
    background-color: #f0b843;
    width: 55vw;
    min-width: 300px;
    padding: 10px;
    min-height: 70px;
    margin: 0;
    border: 1px solid #444;
    font-size: 1.4rem;
  }

  button {
    padding: 1.65rem 2rem;
    font-weight: 700;
    margin: 0;
    border: none;
  }

  @media only screen and (max-width: 600px) {
    input {
      width: 60vw;
      min-width: unset;
      font-size: 1.4rem;
    }

    button {
      padding: 1.65rem 2rem;
      font-weight: 700;
      margin: 0;
      border: none;
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
      <input type="text" placeholder="search avalaible Food" />
      <button type="submit">search</button>
    </StyledForm>
  );
}
