import React from 'react';
import garri from '../data/garri.png';
import StyledFoodContainer from '../styles/StyledFoodContainer';

export default function FoodContainer() {
  const [showRecipe, setShowRecipe] = React.useState(false);

  const handleShowRecipe = () => {
    setShowRecipe((prev) => !prev);
  };

  return (
    <StyledFoodContainer>
      <div className="food-div">
        <div
          className={
            showRecipe ? 'food-recipe active-food-recipe' : 'food-recipe'
          }
        >
          <h1>How to prepare Sample food</h1>
          <ol>
            <li>step 1</li>
            <li>step 2</li>
            <li>step 3</li>
            <li>...step n</li>
          </ol>

          <button className="update-recipe-btn" type="button">
            UpdateRecipe
          </button>
        </div>

        <h className="food-title">Example Food Title</h>
        <img src={garri} alt="food_image" className="food-image" />

        <div className="action-btns">
          <button type="button" className="add-btn">
            AddToFav
          </button>
          <button type="button" className="del-btn">
            DeleRecipe
          </button>
        </div>

        <button className="see-recipe" type="button" onClick={handleShowRecipe}>
          See Recipe
        </button>
      </div>
    </StyledFoodContainer>
  );
}
