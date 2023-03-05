/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/updateForm.css';
import MyFoodContext from '../context/MyContext';
import closeIcon from '../images/close menu icon.png';
import UploadImage from './UploadImage';

export default function UpdateFoodForm() {
  const {
    setFoodData,

    setShowUpdateForm,

    setFavorite,

    pickedFoodToUpdate,
    setPickFoodToUpdate,

    imagePath,
    setImagePath,

    setShowFoodForm,
  } = React.useContext(MyFoodContext);

  const handleSaveUpdatedFood = () => {
    const localHolder = JSON.parse(localStorage.getItem('MyData'));
    const holder = localHolder.map((food) => {
      if (food.id === pickedFoodToUpdate.id) {
        return {
          ...pickedFoodToUpdate,
          img: imagePath || food.img, // this a powerfull line, (if imagePath === null, return food.img else imagePath)
        };
      }
      return food;
    });

    localStorage.setItem('MyData', JSON.stringify(holder));

    const Fav = holder.filter(({ fav }) => fav === true);
    localStorage.setItem('favorites', JSON.stringify(Fav));

    setFoodData([...holder]);
    setFavorite([...Fav]);
    setImagePath(null);
    setShowFoodForm((prev) => ({
      ...prev,
      uploadImg: false,
    }));
  };

  const handleModifyPickedFoodName = (newNom) => {
    const holder = pickedFoodToUpdate;
    holder.name = newNom;
    setPickFoodToUpdate({ ...holder });
  };

  const updateChosenFoodSteps = (nextStep) => {
    if (nextStep === '') {
      return;
    }
    const stepHolder = pickedFoodToUpdate.recipe;
    stepHolder.push(nextStep);
    setPickFoodToUpdate((prev) => ({ ...prev, recipe: stepHolder }));
  };

  const handleDeleteUpdateStep = (unWantedStepId) => {
    const stepHolder = pickedFoodToUpdate.recipe;
    const newHolder = stepHolder.filter((rec, inDx) => inDx !== unWantedStepId);

    setPickFoodToUpdate({ ...pickedFoodToUpdate, recipe: [...newHolder] });
  };

  // console.log('name changed to :', { ...pickedFoodToUpdate });

  return (
    <div className="update-overlay">
      <div className="update-form-container">
        <form
          className="update-food-form"
          onSubmit={(e) => {
            e.preventDefault();
            updateChosenFoodSteps(e.target.elements.next_update_step.value);
            e.target.elements.next_update_step.value = '';
          }}
        >
          <button
            className="close-form-btn"
            type="button"
            onClick={() => {
              handleSaveUpdatedFood();
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
              id="food_update_name"
              placeholder="Input Food Name here"
              defaultValue={pickedFoodToUpdate.name}
              required
              // onChange={(e) => handleModifyPickedFoodName(e.target.value)}
              onChange={(e) => {
                handleModifyPickedFoodName(e.target.value);
              }}
            />
          </div>

          <UploadImage />

          <div className="add-steps-section">
            <p>Input steps below</p>
            <div>
              <input
                autoFocus
                type="text"
                id="next_update_step"
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

        <div className="display-steps-container">
          <ol className="display-steps-section">
            {pickedFoodToUpdate.recipe.map((stage, ind) => (
              <li key={ind}>
                {stage}
                <img
                  src={closeIcon}
                  id={ind}
                  alt="delete_food_icon"
                  onClick={(e) => {
                    handleDeleteUpdateStep(+e.target.id);
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
