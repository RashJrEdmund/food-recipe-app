/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './addFoodForm.css';
import MyFoodContext from '../context/MyContext';
import closeIcon from '../images/close menu icon.png';

export default function AddFoodForm() {
  const { setShowFoodForm, foodData, setFoodData } =
    React.useContext(MyFoodContext);

  const [newRecipe, setNewRecipe] = React.useState({
    name: '',
    img: 'src',
    recipe: [],
    showRecipe: false,
    fav: false,
  });

  const [foodNom, setFoodNom] = React.useState('');
  const [recipeSteps, setRecipeSteps] = React.useState(['step 1', 'step 2']);

  const handleAddStep = (nextStep) => {
    console.clear();
    console.log('form submitted, submit entered');
    // if (nextStep === '') {
    //   return;
    // }

    // const HOLDER = recipeSteps;
    // HOLDER.push(nextStep);
    // setRecipeSteps(HOLDER);

    setRecipeSteps((prev) => [...prev, nextStep]);
    console.log('this recipe, steps', recipeSteps);
  };

  const handleSaveFood = () => {
    // if (newRecipe.recipe.length <= 0) {
    //   return;
    // }

    // setNewRecipe((prev) => {
    //   return {
    //     ...prev,
    //     name: foodNom,
    //     recipe: recipeSteps,
    //     id: foodData[foodData.length - 1].id + 1,
    //   };
    // });

    // console.log('this newwRecipe', newRecipe);

    setFoodData((prev) => [
      ...prev,
      {
        ...newRecipe,
        name: foodNom,
        recipe: recipeSteps,
        id: foodData[foodData.length - 1].id + 1,
      },
    ]);
    setShowFoodForm((prev) => !prev);
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
        {/* <ol className="display-steps-section">
          {recipeSteps.map((step, ind) => {
            console.log('recipe did');
            return <li key={ind}>{step} k</li>;
          })}
        </ol> */}

        <ol className="display-steps-section">
          {recipeSteps.map((stage, ind) => (
            <li key={ind}>
              {stage}
              {/* <img
                src={closeIcon}
                id={ind}
                alt="delete_food_icon"
                onClick={(e) => {
                  const HOLDER = recipeSteps;
                  const newHolder = HOLDER.filter(
                    (rec, inDx) => inDx !== e.target.id
                  );
                  console.log('this newHolder', newHolder, e.target.id);

                  setRecipeSteps([...newHolder]);
                }}
              /> */}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
