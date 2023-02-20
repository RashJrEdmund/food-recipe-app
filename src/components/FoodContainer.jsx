/* eslint-disable react/no-array-index-key */
import React from 'react';
import StyledFoodContainer from '../styles/StyledFoodContainer';
import MyFoodContext from '../context/MyContext';
import UpdateFoodForm from './UpdateFoodForm';

export default function FoodContainer() {
  const {
    foodData,
    setFoodData,

    showUpdateFrom,
    setShowUpdateForm,

    setPickFoodToUpdate,
  } = React.useContext(MyFoodContext);

  const handleShowRecipe = (ind) => {
    const holder = foodData;
    holder[ind].showRecipe = !holder[ind].showRecipe;
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

  const chooseFoodToUpdate = (ID) => {
    const holder = foodData;
    const newHolder = holder.filter((food) => food.id === ID);
    setPickFoodToUpdate(...newHolder);
  };

  return (
    <StyledFoodContainer id="all_food_container">
      {showUpdateFrom && <UpdateFoodForm />}

      {foodData.map((piece, index) => {
        return (
          <div className="food-div" key={piece.id}>
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

              <button
                className="update-recipe-btn"
                type="button"
                id={piece.id}
                onClick={(e) => {
                  chooseFoodToUpdate(+e.target.id);
                  setShowUpdateForm((prev) => !prev);
                  handleShowRecipe(index);
                }}
              >
                UpdateRecipe
              </button>
            </div>

            <h2 className="food-title">{piece.name}</h2>
            {/* <img src={piece.img} alt="food_image" className="food-image" /> */}
            <div
              style={{ backgroundImage: `URL(${piece.img})` }}
              className="food-image"
            />

            <div className="action-btns">
              <button
                type="button"
                className="add-btn"
                name={piece.id}
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
