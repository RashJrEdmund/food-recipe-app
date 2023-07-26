/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { DeleteIcon } from '../../atoms/icons/actions';

const StyledRecipeList = styled.ul`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  min-height: 150px;

  li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;

    span {
      width: 95%;
      color: #ddd;
      word-break: break-all;
      height: fit-content;
      padding: 10px 0;
    }
  }

  .no_procedure_span {
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    word-wrap: break-word;
  }
`;

export default function RecipeList({ recipeList, food, setFood }) {
  const removeRecipeStep = (step) => {
    const updateRecipe = food.recipe.filter((procedure) => procedure !== step);

    setFood((prev) => ({ ...prev, recipe: updateRecipe }));
  };

  return (
    <StyledRecipeList className="recipe_list">
      {recipeList?.length > 0 ? (
        recipeList.map((step) => (
          <li key={step}>
            <span>{step}</span>

            <DeleteIcon
              title="remove this step"
              onClick={() => removeRecipeStep(step)}
              color="#e00000"
            />
          </li>
        ))
      ) : (
        <span className="no_procedure_span">
          No procedures have been added &#9888;
        </span>
      )}
    </StyledRecipeList>
  );
}
