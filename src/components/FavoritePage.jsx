/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import MyFoodContext from '../context/MyContext';
import StyledFavContainer from '../styles/StyledFavContainer';

export default function FavoritePage() {
  const {
    /* setShowUpdateForm, chooseFoodToUpdate, */ favoriteData,
    setFavorite,
  } = React.useContext(MyFoodContext);

  const handleShowFavsRecipe = (ind) => {
    console.log('handle fav entered', ind);
    const holder = favoriteData;
    holder[ind].showRecipe = !holder[ind].showRecipe;
    setFavorite([...holder]);
  };

  return (
    <StyledFavContainer id="all_food_container">
      {/* {showUpdateFrom && <UpdateFoodForm />} */}
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

                {/* <button
                  className="update-recipe-btn"
                  type="button"
                  id={piece.id}
                  onClick={() => {
                    // chooseFoodToUpdate(+e.target.id);
                    // setShowUpdateForm((prev) => !prev);
                    // handleShowRecipe(index);
                  }}
                >
                  UpdateRecipe
                </button> */}
              </div>

              <h2 className="food-title">{piece.name}</h2>
              {/* <img src={piece.img} alt="food_image" className="food-image" /> */}
              <div
                style={{ backgroundImage: `URL(${piece.img})` }}
                className="food-image"
              />

              {/* <button
                type="button"
                className="add-btn"
                name={piece.id}
                // onClick={(e) => handleShowFavsRecipe(+e.target.name)}
              >
                {piece.fav ? 'remove from favorite' : '+ to Favorite'}
              </button> */}

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
