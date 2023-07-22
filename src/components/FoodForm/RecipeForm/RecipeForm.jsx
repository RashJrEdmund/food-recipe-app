/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { AddIcon } from '../../atoms/Icons';

const StyledRecipeForm = styled.form`
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
  width: 100%;

  align-items: center;

  input {
    width: 100%;
    height: 40px;
    padding: 10px 5px;
  }

  button {
    background-color: transparent;
  }
`;

export default function RecipeForm({ setFood }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      target: {
        newrecipe: { value },
      },
    } = e;

    if (!value.trim()) return;

    setFood((prev) => ({ ...prev, recipe: [...prev.recipe, value] }));
    e.target.newrecipe.value = '';
  };

  return (
    <StyledRecipeForm onSubmit={handleFormSubmit}>
      <input type="recipe" placeholder="Add recipe" name="newrecipe" />

      <button type="submit">
        <AddIcon title="add procedure" />
      </button>
    </StyledRecipeForm>
  );
}
