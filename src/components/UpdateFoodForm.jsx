/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/updateForm.css';
import MyFoodContext from '../context/MyContext';
import closeIcon from '../images/close menu icon.png';

export default function UpdateFoodForm() {
  const {
    /* setShowFoodForm, foodData, setFoodData,  */ setShowUpdateForm,
    pickedFoodToUpdate,
    setPickFoodToUpdate,
  } = React.useContext(MyFoodContext);

  const handleUpdateFood = (ID) => {
    console.log('handleUpdate entered', ID);
    // setShowUpdateForm((prev) => !prev);
  };

  const handleModifyPickedFoodName = (newNom) => {
    const holder = pickedFoodToUpdate;
    holder.name = newNom;
    setPickFoodToUpdate(holder);
  };

  return (
    <div className="update-overlay">
      <div className="update-form-container">
        <form
          className="update-food-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateFood();
          }}
        >
          <button
            className="close-form-btn"
            type="button"
            onClick={() => {
              // handleSaveFood();
              setShowUpdateForm((prev) => !prev);
            }}
          >
            updateFood
          </button>

          <h2>updateFood</h2>
          <div className="naming-section">
            <label htmlFor="food_name">Input Food Name</label>
            <input
              type="text"
              id="food_name"
              placeholder="Input Food Name here"
              defaultValue={pickedFoodToUpdate.name}
              required
              // onChange={(e) => handleModifyPickedFoodName(e.target.value)}
              onChange={(e) => handleModifyPickedFoodName(e.target.value)}
            />
          </div>

          <div className="add-steps-section">
            <p>Input steps below</p>
            <div>
              <input
                type="text"
                id="next_step"
                placeholder="input Step to Add"
              />
              <button className="add-step-btn" type="submit">
                + Add
              </button>
            </div>
          </div>
        </form>

        <h3 className="form-food-name">
          Name: <span>{pickedFoodToUpdate.name}</span>
        </h3>
        <ol className="display-steps-section">
          {pickedFoodToUpdate.recipe.map((stage, ind) => (
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
          ))}
        </ol>
      </div>
    </div>
  );
}
