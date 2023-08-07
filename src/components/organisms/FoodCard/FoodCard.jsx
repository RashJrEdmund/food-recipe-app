/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledFoodCard from './StyledFoodCard';
import {
  updateFavorite,
  updateCardSlideImage,
} from '../../../services/foodScripts';
import ImageNavigators from './ImageNavigators/ImageNavigators';
import { NAVIGATOR_POSITION_FOR } from '../../../services/constants';
import { SwipeLeftIcon, SwipeRightIcon } from '../../atoms/icons/navigation';
import Foodcta from './food_cta/Food_cta';

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
    navigate(`/home/details/${name}`);
  };

  const gotoNextPhoto = () => {
    if (imgIndx < img.length - 1) {
      updateCardSlideImage({ indx: imgIndx + 1, setArrayFoods, id });
    }
  };

  const gotoPrevPhoto = () => {
    if (imgIndx > 0) {
      updateCardSlideImage({ indx: imgIndx - 1, setArrayFoods, id });
    }
  };

  return (
    <StyledFoodCard url={img[imgIndx]}>
      <div className="food_image">
        <SwipeLeftIcon
          iconcolor={imgIndx === 0 ? '#808080ae' : '#111111'}
          onClick={gotoPrevPhoto}
        />
        <SwipeRightIcon
          iconcolor={imgIndx === img.length - 1 ? '#808080ae' : '#111111'}
          onClick={gotoNextPhoto}
        />
      </div>

      <div className="food_section_2">
        <ImageNavigators // the sliders below the images
          img={img}
          imgIndx={imgIndx}
          handleChangeimg={handleChangeimg}
          positionFor={NAVIGATOR_POSITION_FOR.FOOD_CARD}
        />

        <h3 className="food_name">{name || 'FOOD NAME'}</h3>

        <p className="food_description">{description || 'Food description'}</p>

        {allowInteraction && (
          <Foodcta
            fav={fav}
            addNewFavorite={addNewFavorite}
            goToFoodDetails={goToFoodDetails}
          />
        )}
      </div>
    </StyledFoodCard>
  );
}
