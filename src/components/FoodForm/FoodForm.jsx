/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import StyledFoodForm from './StyledFoodForm';
import { DeleteIcon } from '../atoms/Icons';
import { Overlay } from '../atoms/Atoms';

export default function FoodForm({ action }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const removeRecipeStep = (step) => {
    step.slice(0, 1);
  };

  return (
    <>
      <Overlay index="4" opacity="1" action={action} />

      <StyledFoodForm>
        <div className="food_form">
          <span className="image_preview_span" />

          <span className="cancel_btn" onClick={() => action()}>
            Cancel
          </span>

          <label htmlFor="name">
            <span className="name_span">Name</span>
            <input type="text" name="name" id="name" placeholder="Food Name" />
          </label>

          <label htmlFor="description">
            <textarea name="description" id="description" cols="30" rows="10" />
          </label>

          <form className="recipe_form" onSubmit={handleFormSubmit}>
            <div className="add_recipe_div">
              <input type="recipe" placeholder="Add recipe" />

              <button className="add_btn" type="submit">
                Add recipe
              </button>
            </div>

            <ul className="recipe_list">
              {['step 1', 'step 2', 'step 3', 'step 4'].map((step) => (
                <li key={step}>
                  <span>{step}</span>

                  <DeleteIcon onClick={() => removeRecipeStep(step)} />
                </li>
              ))}
            </ul>
          </form>
        </div>
      </StyledFoodForm>
    </>
  );
}
