/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  FavortieIcon,
  LinkIcon,
} from '../../../../components/atoms/icons/navigation';
import {
  NAVIGATOR_POSITION_FOR,
  OUTLET_TYPE,
} from '../../../../services/constants';
import ImageNavigators from '../../../../components/FoodCard/ImageNavigators/ImageNavigators';
import { Header2Atom } from '../../../../components/atoms/Atoms';
import StyledDetailsFoodContainer from './index.style';

export default function FoodContainer({
  detailedFood,
  toggleOutlet,
  handleChangeDetailImg,
  addNewFavorite,
}) {
  return (
    <StyledDetailsFoodContainer url={detailedFood?.img[detailedFood?.imgIndx]}>
      <div className="food_image">
        <span className="food_detail_heart" onClick={addNewFavorite}>
          <FavortieIcon
            color={detailedFood?.fav ? '#f00' : '#111111'}
            title={`${
              detailedFood?.fav ? 'remove from ' : 'add to '
            } favorites`}
          />
        </span>

        <ImageNavigators
          img={detailedFood?.img}
          imgIndx={detailedFood?.imgIndx}
          handleChangeimg={handleChangeDetailImg}
          positionFor={NAVIGATOR_POSITION_FOR.FOOD_DETAIL}
        />

        <span
          className="external_link"
          onClick={() => toggleOutlet(OUTLET_TYPE.REDIRECT)}
        >
          full image
          <LinkIcon color="#fff" />
        </span>
      </div>

      <div className="food_col_2">
        <Header2Atom
          text={`${detailedFood?.name || 'Food Name'}`}
          size="1.4rem"
          margin="3rem 10px 2rem"
          color="#000"
          weight="800"
          width="100%"
          align="left"
        />

        <p className="description">
          {detailedFood?.description || 'food description'}
        </p>
      </div>
    </StyledDetailsFoodContainer>
  );
}
