/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../images/close menu icon.png';
import MyFoodContext from '../context/MyContext';
import StyledFavContainer from '../styles/StyledFavContainer';

export default function FavoritePage() {
  const { favoriteData, setFavorite } = React.useContext(MyFoodContext);

  const handleShowFavsRecipe = (ind) => {
    const holder = favoriteData;
    holder[ind].showRecipe = !holder[ind].showRecipe;
    setFavorite([...holder]);
  };

  return (
    <StyledFavContainer id="all_food_container">
      <Link to="/">
        <button className="fav-back-btn" type="button">
          Back
        </button>
      </Link>

      <div className="fav-subcontainer">
        {favoriteData.map((piece, index) => {
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

                <img
                  className="close-recipe-btn"
                  src={closeIcon}
                  name={index}
                  alt="delete_food_icon"
                  onClick={(e) => handleShowFavsRecipe(e.target.name)}
                />
              </div>

              <h2 className="food-title">{piece.name}</h2>
              {/* <img src={piece.img} alt="food_image" className="food-image" /> */}
              <div
                style={{ backgroundImage: `URL(${piece.img})` }}
                className="food-image"
              />

              <button
                className="see-recipe-btn"
                type="button"
                name={index}
                onClick={(e) => handleShowFavsRecipe(e.target.name)}
              >
                {piece.showRecipe ? 'close Recipe' : 'see Recipe'}
              </button>
            </div>
          );
        })}
      </div>
    </StyledFavContainer>
  );
}
