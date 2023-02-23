/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import StyledFoodContainer from '../styles/StyledFoodContainer';
import closeIcon from '../images/close menu icon.png';
import MyFoodContext from '../context/MyContext';
import UpdateFoodForm from './UpdateFoodForm';

export default function FoodContainer() {
  const {
    foodData,
    setFoodData,

    setFavorite,

    showUpdateFrom,
    setShowUpdateForm,

    setPickFoodToUpdate,
  } = React.useContext(MyFoodContext);

  const handleShowRecipe = (ind) => {
    const holder = foodData;
    holder[ind].showRecipe = !holder[ind].showRecipe;
    setFoodData([...holder]);
  };

  const handleFavorite = (ID) => {
    const holder = foodData;
    holder[ID].fav = !holder[ID].fav;
    setFoodData([...holder]);

    const Fav = holder.filter(({ fav }) => fav === true);

    setFavorite(Fav);
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
              <h1>
                <span className="how-to-prep">How to prepare</span>{' '}
                <span className="piece-name"> {piece.name}</span>
              </h1>
              <ol>
                {piece.recipe.map((rec, ind) => (
                  <li key={ind}>{rec}</li>
                ))}
              </ol>
              <div className="recipe-btns-holder">
                <img
                  className="close-recipe-btn"
                  src={closeIcon}
                  name={index}
                  alt="delete_food_icon"
                  onClick={(e) => handleShowRecipe(e.target.name)}
                />

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
                onClick={(e) => handleFavorite(+e.target.name)}
              >
                {piece.fav ? 'remove from favorite' : '+ to Favorite'}
              </button>
              <button
                type="button"
                className="
                background-color: gold;del-btn"
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
