/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionsIcon, FavortieIcon } from '../atoms/Icons';
import StyledFoodCard from './StyledFoodCard';
import {
  updateFavorite,
  updateCardSlideImage,
} from '../../services/foodScripts';
import ImageNavigators from '../ImageNavigators/ImageNavigators';
import { POSITION_FOR } from '../../services/constants';

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
    updateCardSlideImage({ indx, setArrayFoods, id });
  };

  const goToFoodDetails = () => {
    navigate(`/foods/details/${name}`);
  };

  return (
    <StyledFoodCard url={img[imgIndx]}>
      <div className="food_image" />
      <div className="food_section_2">
        <ImageNavigators // the sliders below the images
          img={img}
          imgIndx={imgIndx}
          handleChangeimg={handleChangeimg}
          positionFor={POSITION_FOR.FOOD_CARD}
        />

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
              <ActionsIcon title="see details" />
            </span>
          </div>
        )}
      </div>
    </StyledFoodCard>
  );
}
