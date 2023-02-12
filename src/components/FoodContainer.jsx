import React from 'react';
import garri from '../data/garri.png';

export default function FoodContainer() {
  const [showRecipe, setShowRecipe] = React.useState(false);

  const handleShowRecipe = () => {
    setShowRecipe((prev) => !prev);
  };

  return (
    <div className="food-container">
      <div className="food-div">
        {showRecipe && (
          <div className="food-recipe">
            <h1>How to prepare Sample food</h1>
            <ol>
              <li>step 1</li>
              <li>step 2 ...stepn</li>
            </ol>
          </div>
        )}
        <h className="food-title">Example Food Title</h>
        <img src={garri} alt="food_image" className="food-image" />

        <div className="action-btns">
          <button type="button">AddToFav</button>
          <button type="button">DeleRecipe</button>
        </div>

        <button className="see-recipe" type="button" onClick={handleShowRecipe}>
          See Recipe
        </button>
      </div>
    </div>
  );
}
