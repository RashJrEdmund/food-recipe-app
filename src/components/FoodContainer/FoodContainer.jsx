/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FaHeart, FaRegTrashAlt } from 'react-icons/fa';
import StyledFoodContainer from './StyledFoodContainer';
import closeIcon from '../../images/close menu icon.png';
import MyFoodContext from '../../context/MyContext';
import UpdateFoodForm from '../UpdateFoodForm/UpdateFoodForm';

export default function FoodContainer({ toggleMessage }) {
  const {
    foodData,
    setFoodData,

    setFavorite,

    showUpdateFrom,
    setShowUpdateForm,

    setPickFoodToUpdate,
  } = React.useContext(MyFoodContext);

  let localData = JSON.parse(localStorage.getItem('MyData'));

  const handleShowRecipe = (ind) => {
    const holder = foodData;
    holder[ind].showRecipe = !holder[ind].showRecipe;
    setFoodData([...holder]);
  };

  const handleFavorite = (ID) => {
    localData.forEach((food) => {
      if (food.id === ID) {
        food.fav = !food.fav;
      }
    });

    setFoodData([...localData]);
    const Fav = localData.filter(({ fav }) => fav === true);

    localStorage.setItem('MyData', JSON.stringify(localData));
    localStorage.setItem('favorites', JSON.stringify(Fav));

    setFavorite(Fav);
  };

  const handleDeleteFood = (ID) => {
    const holder = localData.filter(({ id }) => id !== ID);
    setFoodData([...holder]);
    localStorage.setItem('MyData', JSON.stringify(holder));
    localData = JSON.parse(localStorage.getItem('MyData'));

    const Fav = localData.filter(({ fav }) => fav === true);

    localStorage.setItem('favorites', JSON.stringify(Fav));

    setFavorite(Fav);
  };

  const chooseFoodToUpdate = (ID) => {
    const newHolder = localData.filter((food) => food.id === ID);
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
                onClick={(e) => {
                  handleFavorite(+e.target.name);
                  toggleMessage('favorite list updated');
                }}
              >
                <FaHeart // heart icon
                  className="fa-icon"
                  name={piece.id}
                  style={{
                    color: piece.fav ? '#ec5766' : '#f5f5f5',
                  }}
                />
              </button>
              <button
                type="button"
                className="del-btn"
                name={piece.id}
                onClick={(e) => {
                  handleDeleteFood(+e.target.name);
                  toggleMessage(`${piece.name} removed`);
                }}
              >
                <FaRegTrashAlt // delete icon
                  className="fa-icon"
                  name={piece.id}
                  style={{ color: '#ec5766' }}
                />
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
