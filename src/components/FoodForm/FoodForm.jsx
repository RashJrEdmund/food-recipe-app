/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { v4 as uuid4 } from 'uuid';
import { useOutletContext } from 'react-router-dom';
import StyledFoodForm from './StyledFoodForm';
import ImagePreview from './ImagePreview/ImagePreview';
import RecipeForm from './RecipeForm/RecipeForm';
import RecipeList from './RecipeList/RecipeList';
import { Overlay } from '../atoms/Atoms';
import { LOCALSTORAGE, SESSIONSTORAGE } from '../../services/storage';
import { useFoodContext } from '../../context/FoodContext';
import { DEFAULT_FOOD_BG } from '../../services/constants';
import ImageUploadSection from './ImageUploadSection/ImageUploadSection';

export default function FoodForm() {
  const [food, setFood] = React.useState(null); // the food we editing
  const [useUrl, setUseUrl] = React.useState(false);

  const { toggleShowForm, displayAlert, setDetailedFood, creatingNew } =
    useOutletContext();

  const { setFoodData } = useFoodContext();

  const handleChange = ({ target: { name, value, files } }) => {
    const prev = food;
    if (name === 'image_file') {
      // checking if it's the file upload part
      if (value.trim()) {
        if (useUrl) {
          // meaning value is a link
          prev.img[+prev.imgIndx] = value;
        } else {
          prev.img[+prev.imgIndx] = URL.createObjectURL(files[0]);
        }
      } else {
        prev.img = SESSIONSTORAGE.get('foodToEdit').img || [DEFAULT_FOOD_BG]; // will resolve to the || part if (creatingNew)
      }
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

      const prev = LOCALSTORAGE.get('foodData') || [];
      LOCALSTORAGE.save('foodData', [...prev, food]);

      setFoodData([...prev, food]);
      toggleShowForm();
    } else {
      const foodToEdit = SESSIONSTORAGE.get('foodToEdit');
      const update = LOCALSTORAGE.get('foodData').map((foodObj) => {
        if (foodObj.id === foodToEdit.id) return { ...foodObj, ...food };
        return foodObj;
      });

      LOCALSTORAGE.save('foodData', update);
      SESSIONSTORAGE.save('foodToEdit', food);
      setFoodData([...update]);
      setDetailedFood({ ...food });
      displayAlert('Food Saved');
      toggleShowForm();
    }
  };

  React.useEffect(() => {
    const sesSfood = SESSIONSTORAGE.get('foodToEdit');

    if (sesSfood) setFood(sesSfood);
    if (creatingNew) {
      setFood({
        name: '',
        img: [DEFAULT_FOOD_BG],
        imgIndx: 0,
        description: '',
        recipe: [],
        fav: false,
        id: uuid4(),
      });
    }

    document.body.classList.add('body-overflow');

    return () => document.body.classList.remove('body-overflow');
  }, []);

  return (
    <>
      <Overlay index="4" opacity="0" bg="black" />

      <StyledFoodForm url={food?.img[food?.imgIndx]}>
        <div className="food_form">
          <div className="top_section">
            <span className="cancel_btn" onClick={() => toggleShowForm()}>
              Cancel
            </span>

            <ImagePreview
              imgArr={food?.img}
              setFood={setFood}
              imgIndx={food?.imgIndx}
            />
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

          <ImageUploadSection
            useUrl={useUrl}
            handleChange={handleChange}
            setUseUrl={setUseUrl}
          />

          <RecipeForm setFood={setFood} />

          <RecipeList recipeList={food?.recipe} food={food} setFood={setFood} />

          <button type="button" className="submit_btn" onClick={handleSaveFood}>
            {creatingNew ? 'save food' : 'save edit'}
          </button>
        </div>
      </StyledFoodForm>
    </>
  );
}
