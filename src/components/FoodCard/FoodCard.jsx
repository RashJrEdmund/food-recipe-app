/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionsIcon, FavortieIcon, NavigatorIcon } from '../atoms/Icons';
import StyledFoodCard from './StyledFoodCard';
import { updateFavorite, updateSlideIndex } from '../../services/foodScripts';

export default function FoodCard({
  id,
  name,
  description,
  img, // an array
  imgIndx,
  fav,
  setArrayFoods,
  displayAlert,
  allowInteraction,
}) {
  const navigate = useNavigate();

  const addNewFavorite = () => {
    updateFavorite(id, setArrayFoods);
    displayAlert(
      `${name.split(/[^a-zA-Z]/).shift()} ${
        fav ? 'removed from ' : 'added to '
      } favorites`
    );
  };

  const handleChangeimg = (indx) => {
    updateSlideIndex({ indx, setArrayFoods, id });
  };

  const goToFoodDetails = () => {
    navigate(`/foods/details/${name}`);
  };

  return (
    <StyledFoodCard url={img[imgIndx]}>
      <div className="food_image" />
      <div className="food_section_2">
        <div className="navigators">
          {img?.map((url, ind) => (
            <NavigatorIcon
              iconcolor={imgIndx === ind ? 'steelblue' : '#111111'}
              margin="0 2px"
              key={url}
              onClick={() => handleChangeimg(ind)}
            />
          ))}
        </div>

        <h3 className="food_name">{name || 'FOOD NAME'}</h3>

        <p className="food_description">{description || 'Food description'}</p>

        {allowInteraction && (
          <div className="food_cta">
            <span className="heart" onClick={addNewFavorite}>
              <FavortieIcon
                color={fav ? '#f00' : '#111111'}
                title={`${fav ? 'remove from ' : 'add to '} favorites`}
              />
            </span>

            <span className="see_more" onClick={goToFoodDetails}>
              <ActionsIcon title="more" />
            </span>
          </div>
        )}
      </div>
    </StyledFoodCard>
  );
}
