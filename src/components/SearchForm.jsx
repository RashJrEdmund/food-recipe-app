import React from 'react';
import styled from 'styled-components';
import MyFoodContext from '../context/MyContext';
import AlertMessage from './AlertMessage';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
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
  const { foodData, setFoodData, MyData } = React.useContext(MyFoodContext);

  const [showAlert, setShowAlert] = React.useState(false);

  const toggleAlert = () => {
    setShowAlert((prev) => !prev);

    setTimeout(() => {
      setShowAlert((prev) => !prev);
    }, 2000);
  };

  const handleSearch = (foodNom) => {
    if (foodNom === '') {
      setFoodData(MyData);
      return;
    }

    const holder = foodData;
    const Results = holder.filter((food) =>
      food.name.toLowerCase().includes(foodNom.toLowerCase())
    );

    setFoodData(Results);

    if (Results.length < 1) {
      toggleAlert();
    }
  };
  return (
    <StyledForm
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(e.target.elements.search_input.value);
      }}
    >
      {showAlert && <AlertMessage message="no foods match search" />}

      <input
        id="search_input"
        type="text"
        placeholder="search avalaible Food"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">search</button>
    </StyledForm>
  );
}
