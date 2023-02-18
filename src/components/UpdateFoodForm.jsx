/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/updateForm.css';
// import MyFoodContext from '../context/MyContext';
import closeIcon from '../images/close menu icon.png';

export default function UpdateFoodForm() {
  // const { setShowFoodForm, foodData, setFoodData } =
  //   React.useContext(MyFoodContext);

  return (
    <div className="update-overlay">
      <div className="update-form-container">
        <form
          className="update-food-form"
          onSubmit={(e) => {
            e.preventDefault();
            // handleAddStep(e.target.elements.next_step.value);
            // e.target.elements.next_step.value = '';
          }}
        >
          <button
            className="close-form-btn"
            type="button"
            // onClick={handleSaveFood}
          >
            {/* {recipeSteps.length >= 1 ? 'save newFood' : 'closeForm'} */}
            updateFood
          </button>

          <h2>Add Food</h2>
          <div className="naming-section">
            <label htmlFor="food_name">Input Food Name</label>
            <input
              type="text"
              id="food_name"
              placeholder="Input Food Name here"
              required
              // onChange={(e) => setFoodNom(e.target.value)}
            />
          </div>

          <div className="add-steps-section">
            <p>Input steps below</p>
            <div>
              <input
                type="text"
                id="next_step"
                // placeholder={
                //   recipeSteps.length > 1
                //     ? 'Input next step'
                //     : 'Input first step'
                // }
              />
              <button className="add-step-btn" type="submit">
                + Add
              </button>
            </div>
          </div>
        </form>

        <h3 className="form-food-name">
          Name: <span>{/* {foodNom} */} foodName</span>
        </h3>
        <ol className="display-steps-section">
          {/* {recipeSteps.map((stage, ind) => (
            <li key={ind}>
              {stage}
              <img
                src={closeIcon}
                id={ind}
                alt="delete_food_icon"
                // onClick={(e) => {
                //   handleDeleteStep(+e.target.id);
                // }}
              />
            </li>
          ))} */}
        </ol>
      </div>
    </div>
  );
}
