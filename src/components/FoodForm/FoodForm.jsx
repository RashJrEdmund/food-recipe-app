/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import StyledFoodForm from './StyledFoodForm';
import { AddIcon, DeleteIcon } from '../atoms/Icons';
import { Overlay } from '../atoms/Atoms';
import { getFromSessionStorage } from '../../services/utils';

export default function FoodForm({ action }) {
  const [food, setFood] = React.useState(null);
  const [useUrl, setUseUrl] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const removeRecipeStep = (step) => {
    step.slice(0, 1);
  };

  React.useEffect(() => {
    const sesSfood = getFromSessionStorage('foodToEdit');

    if (sesSfood) setFood(sesSfood);
  }, []);

  return (
    <>
      <Overlay index="4" opacity="1" />

      <StyledFoodForm url={food?.img} useUrl={useUrl}>
        <div className="food_form">
          <div className="top_section">
            <span className="image_preview_span" />

            <span className="cancel_btn" onClick={() => action()}>
              Cancel
            </span>
          </div>

          <label htmlFor="name" className="name_label">
            <span className="name_span">Name</span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Food Name"
              value={food?.name}
            />
          </label>

          <textarea
            name="description"
            id="description"
            className="description"
            placeholder="food description"
            cols="30"
            rows="10"
            value={food?.description}
          />

          <div className="image_upload_section">
            <input
              type={useUrl ? 'url' : 'file'}
              name="image_file"
              id=""
              className="image_field"
            />

            <span
              className="switch_btwn_link"
              onClick={() => setUseUrl((prev) => !prev)}
            >
              {useUrl ? 'upload file' : 'use Url'} instead
            </span>
          </div>

          <form className="recipe_form" onSubmit={handleFormSubmit}>
            <input type="recipe" placeholder="Add recipe" />

            <AddIcon />
          </form>

          <ul className="recipe_list">
            {food?.recipe.map((step) => (
              <li key={step}>
                <span>{step}</span>

                <DeleteIcon
                  onClick={() => removeRecipeStep(step)}
                  color="brown"
                />
              </li>
            ))}
          </ul>
        </div>
      </StyledFoodForm>
    </>
  );
}
