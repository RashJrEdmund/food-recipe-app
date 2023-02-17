/* eslint-disable react/no-array-index-key */
import React from 'react';
import StyledFoodContainer from '../styles/StyledFoodContainer';
import MyFoodContext from '../context/MyContext';

export default function FoodContainer() {
  const { foodData, setFoodData } = React.useContext(MyFoodContext);

  const handleShowRecipe = (id) => {
    const holder = foodData;
    holder[id].showRecipe = !holder[id].showRecipe;
    setFoodData([...holder]);
  };

  const handleFavorite = (id) => {
    const holder = foodData;
    holder[id].fav = !holder[id].fav;
    setFoodData([...holder]);
  };

  const handleDeleteFood = (ID) => {
    const holder = foodData;
    const newHolder = holder.filter(({ id }) => id !== ID);
    setFoodData([...newHolder]);
  };

  return (
    <StyledFoodContainer>
      {foodData.map((piece, index) => {
        return (
          <div className="food-div" key={index}>
            <div
              className={
                piece.showRecipe
                  ? 'food-recipe active-food-recipe'
                  : 'food-recipe'
              }
            >
              <h1>How to prepare {piece.name} </h1>
              <ol>
                {piece.recipe.map((rec, ind) => (
                  <li key={ind}>{rec}</li>
                ))}
              </ol>

              <button className="update-recipe-btn" type="button">
                UpdateRecipe
              </button>
            </div>

            <h2 className="food-title">{piece.name}</h2>
            <img src={piece.img} alt="food_image" className="food-image" />
            {/* <div
              style={{ backgroundImage: `URL(${piece.img})` }}
              className="food-image"
            /> */}

            <div className="action-btns">
              <button
                type="button"
                className="add-btn"
                name={index}
                onClick={(e) => handleFavorite(e.target.name)}
              >
                {piece.fav ? 'remove from favorite' : '+ to Favorite'}
              </button>
              <button
                type="button"
                className="del-btn"
                name={piece.id}
                onClick={(e) => handleDeleteFood(+e.target.name)}
              >
                DeleFood
              </button>
            </div>

            <button
              className="see-recipe-btn"
              type="button"
              name={index}
              onClick={(e) => handleShowRecipe(e.target.name)}
            >
              {piece.showRecipe ? 'close Recipe' : 'see Recipe'}
            </button>
          </div>
        );
      })}
    </StyledFoodContainer>
  );
}
