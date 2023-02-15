/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './addFoodForm.css';
import MyFoodContext from '../context/MyContext';

export default function AddFoodForm() {
  const { setAddFood } = React.useContext(MyFoodContext);
  const [recipe, setRecipe] = React.useState({ name: '', steps: [] });

  return (
    <div className="add-food-overlay">
      <form
        className="add-food-form"
        onSubmit={(e) => {
          e.preventDefault();
          setRecipe(() => {
            const holder = recipe;
            holder.name = e.target.elements.food_name;
            holder.steps = [...holder.steps, e.target.elements.next_step];

            return holder;
          });
        }}
      >
        <button
          className="close-form"
          type="button"
          onClick={() => setAddFood((prev) => !prev)}
        >
          closeForm
        </button>

        <h2>Add Food</h2>
        <div className="naming-section">
          <label htmlFor="food-name">Input Food Name</label>
          <input
            type="text"
            id="food_name"
            placeholder="Input Food Name here"
          />
        </div>

        <div className="steps-section">
          <p>Add steps below</p>
          <div>
            <input
              type="text"
              id="next_step"
              placeholder={
                recipe.lenght > 1 ? 'Input next step' : 'Input first step'
              }
            />
            <button className="add-step-btn" type="submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
