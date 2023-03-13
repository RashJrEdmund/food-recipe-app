/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/addFoodForm.css';
import MyFoodContext from '../context/MyContext';
import closeIcon from '../images/close menu icon.png';
import UploadImage from './UploadImage';

export default function AddFoodForm() {
  const {
    setShowFoodForm,

    foodData,
    setFoodData,

    imagePath,
    setImagePath,
  } = React.useContext(MyFoodContext);

  const [foodNom, setFoodNom] = React.useState('');
  const [recipeSteps, setRecipeSteps] = React.useState([]);

  const handleSaveFood = () => {
    if (recipeSteps.length <= 0) {
      setShowFoodForm((prev) => ({ form: !prev.form, uploadImg: false }));
      setImagePath(null);
      return;
    }

    setFoodData((prev) => [
      ...prev,

      {
        name: foodNom,
        img: imagePath,
        recipe: recipeSteps,
        showRecipe: false,
        fav: false,
        id: foodData[foodData.length - 1].id + 1,
      },
    ]);
    setShowFoodForm((prev) => ({ form: !prev.form, uploadImg: false }));
    setImagePath(null);
  };

  const handleAddStep = (nextStep) => {
    if (nextStep === '') {
      return;
    }

    setRecipeSteps((prev) => [...prev, nextStep]);
  };

  const handleDeleteStep = (unWantedStepId) => {
    const HOLDER = recipeSteps;
    const newHolder = HOLDER.filter((rec, inDx) => inDx !== unWantedStepId);

    setRecipeSteps([...newHolder]);
  };

  return (
    <div className="add-food-overlay">
      <div className="form-container">
        <form
          className="add-food-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddStep(e.target.elements.next_step.value);
            e.target.elements.next_step.value = '';
          }}
        >
          <button
            className="close-form-btn"
            type="button"
            style={{
              backgroundColor: recipeSteps.length >= 1 ? '#6ee374' : 'brown',
              color: recipeSteps.length >= 1 ? '#000' : '#fff',
            }}
            onClick={handleSaveFood}
          >
            {recipeSteps.length >= 1 ? 'save newFood' : 'closeForm'}
          </button>

          <h2>Add Food</h2>
          <div className="naming-section">
            <label htmlFor="food_name">Input Food Name</label>
            <input
              type="text"
              id="food_name"
              placeholder="Input Food Name here"
              required
              onChange={(e) => setFoodNom(e.target.value)}
            />
          </div>

          {/* UPLOAD IMAGE SECTION */}

          <UploadImage />

          {/* ENDING UPLOAD IMAGE SECTION */}

          <div className="add-steps-section">
            <p>Input steps below</p>
            <div>
              <input
                type="text"
                id="next_step"
                placeholder={
                  recipeSteps.length > 1
                    ? 'Input next step'
                    : 'Input first step'
                }
              />
              <button className="add-step-btn" type="submit">
                + Add
              </button>
            </div>
          </div>
        </form>

        <h3 className="form-food-name">
          Name: <span>{foodNom}</span>
        </h3>
        <ol className="display-steps-section">
          {recipeSteps.map((stage, ind) => (
            <li key={ind}>
              {stage}
              <img
                src={closeIcon}
                id={ind}
                alt="delete_food_icon"
                onClick={(e) => {
                  handleDeleteStep(+e.target.id);
                }}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
