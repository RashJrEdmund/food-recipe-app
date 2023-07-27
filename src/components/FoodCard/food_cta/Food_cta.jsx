/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from '@emotion/styled';
import { DetailsIcon, FavortieIcon } from '../../atoms/icons/navigation';

const StyledCTA = styled.div`
  width: min(100%, 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 10px 0 0;
  border-radius: 0 0 10px 10px;

  .heart,
  .see_more {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    width: min(100%, 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin: 15px 0 0;
    border-radius: 0 0 10px 10px;

    .heart,
    .see_more {
      transition: 0.3s;

      &:hover {
        box-shadow: 0 0 10px #111111;
        border-radius: 5px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    max-width: 97vw;
  }
`;

export default function Foodcta({ fav, addNewFavorite, goToFoodDetails }) {
  return (
    <StyledCTA className="food_cta">
      <span className="heart" onClick={addNewFavorite}>
        <FavortieIcon
          color={fav ? '#f00' : '#111111'}
          title={`${fav ? 'remove from ' : 'add to '} favorites`}
        />
      </span>

      <span className="see_more" onClick={goToFoodDetails}>
        <DetailsIcon title="see details" />
      </span>
    </StyledCTA>
  );
}
