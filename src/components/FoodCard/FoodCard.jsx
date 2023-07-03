/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionsIcon, FavortieIcon } from '../atoms/Icons';
import { useFoodContext } from '../../context/FoodContext';
import useAlert from '../../hooks/UseAlert';
import StyledFoodCard from './StyledFoodCard';
import { updateFavorite } from '../../services/utils';

export default function FoodCard({
  id,
  name,
  description,
  img,
  fav,
  allowInteraction,
}) {
  const navigate = useNavigate();
  const { setFoodData } = useFoodContext();

  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  const addNewFavorite = () => {
    updateFavorite(id, setFoodData);
    displayAlert(
      `${name.split(/[^a-zA-Z]/).shift()} ${
        fav ? 'removed from ' : 'added to '
      } favorites`
    );
  };

  const goToFoodDetails = () => {
    navigate(`/foods/details/${name}`);
  };

  return (
    <>
      {alertMsg.show && <AlertComponent />}

      <StyledFoodCard url={img}>
        <div className="food_image" />
        <div className="food_section_2">
          <h3 className="food_name">{name || 'FOOD NAME'}</h3>

          <p className="food_description">
            {description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam doloremque recusandae. Harum nobis dicta inventore est natus optio repudiandae sint libero nam. Officia, ad impedit voluptatem nihil dicta at!'}
          </p>

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
    </>
  );
}
