/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import StyledFoodForm from './StyledFoodForm';
import { AddIcon, DeleteIcon } from '../atoms/Icons';
import { Overlay } from '../atoms/Atoms';
import {
  getFromLocalStorage,
  getFromSessionStorage,
  saveToLocalStorage,
  saveToSessionStorage,
} from '../../services/utils';
import { useFoodContext } from '../../context/FoodContext';
import { DEFAULT_FOOD_BG } from '../../services/constants';

export default function FoodForm({
  toggleShowForm,
  displayAlert,
  setDetailedFood,
  creatingNew,
}) {
  const [food, setFood] = React.useState(null);
  const [useUrl, setUseUrl] = React.useState(false);

  const { setFoodData } = useFoodContext();

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

  const removeRecipeStep = (step) => {
    const updateRecipe = food.recipe.filter((procedure) => procedure !== step);

    setFood((prev) => ({ ...prev, recipe: updateRecipe }));
  };

  const handleChange = ({ target: { name, value, files } }) => {
    const prev = food;
    if (name === 'image_file') {
      // checking if it's the file upload part
      if (value.trim()) {
        if (useUrl) {
          // meaning value is a link
          prev.img = value;
        } else {
          prev.img = URL.createObjectURL(files[0]);
        }
      } else prev.img = getFromSessionStorage('foodToEdit').img;
    } else prev[`${name}`] = value;

    setFood({ ...prev });
  };

  const handleSaveFood = () => {
    if (
      !(food.name.trim() && food.description.trim() && food.recipe.length > 0)
    ) {
      displayAlert('Missing Form fields');
      return;
    }

    if (creatingNew) {
      // a boolean value. if true, i creat a new food else i know i'm editing one.

      const prev = getFromLocalStorage('foodData') || [];
      saveToLocalStorage('foodData', [...prev, food]);

      setFoodData([...prev, food]);
      toggleShowForm();
    } else {
      const foodToEdit = getFromSessionStorage('foodToEdit');
      const update = getFromLocalStorage('foodData').map((foodObj) => {
        if (foodObj.id === foodToEdit.id) return { ...foodObj, ...food };
        return foodObj;
      });

      saveToLocalStorage('foodData', update);
      saveToSessionStorage('foodToEdit', food);
      setFoodData([...update]);
      setDetailedFood({ ...food });
      displayAlert('Food Saved');
      toggleShowForm();
    }
  };

  React.useEffect(() => {
    const sesSfood = getFromSessionStorage('foodToEdit');

    if (sesSfood) setFood(sesSfood);
    if (creatingNew) {
      const prev = getFromLocalStorage('foodData');
      setFood({
        name: '',
        img: DEFAULT_FOOD_BG,
        description: '',
        recipe: [],
        fav: false,
        id: prev ? prev.pop().id + 1 : 1,
      });
    }
  }, []);

  return (
    <>
      <Overlay index="4" opacity="1" />

      <StyledFoodForm url={food?.img} useUrl={useUrl}>
        <div className="food_form">
          <div className="top_section">
            <span className="image_preview_span" />

            <span className="cancel_btn" onClick={() => toggleShowForm()}>
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
              onChange={handleChange}
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
            onChange={handleChange}
          />

          <div className="image_upload_section">
            <input
              type={useUrl ? 'url' : 'file'}
              name="image_file"
              className="image_field"
              onChange={handleChange}
            />

            <span
              className="switch_btwn_link"
              onClick={() => setUseUrl((prev) => !prev)}
            >
              {useUrl ? 'upload file' : 'use Url'} instead
            </span>
          </div>

          <form className="recipe_form" onSubmit={handleFormSubmit}>
            <input type="recipe" placeholder="Add recipe" name="newrecipe" />

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

          <button type="button" className="submit_btn" onClick={handleSaveFood}>
            Submit Edit
          </button>
        </div>
      </StyledFoodForm>
    </>
  );
}
