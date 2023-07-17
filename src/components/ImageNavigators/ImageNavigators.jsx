/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { css } from '@emotion/react';
import { NavigatorIcon } from '../atoms/Icons';
import { POSITION_FOR } from '../../services/constants';

const generateVerticalAlignment = (positionFor) => {
  switch (positionFor) {
    case 'FOOD_DETAIL': {
      return css`
        bottom: 0;
        background-color: #11111156;
      `;
    }
    case 'FOOD_CARD': {
      return css`
        top: 0;
      `;
    }
    default: {
      return '';
    }
  }
};

export default function ImageNavigators({
  img,
  handleChangeimg,
  imgIndx = 0,
  positionFor = POSITION_FOR.FOOD_CARD,
}) {
  const StyledNavigators = styled.div`
    position: absolute;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    ${() => generateVerticalAlignment(positionFor)}
  `;

  // const generateIconColorVariants = (ind) => {
  //   if (imgIndx === ind) return 'steelblue';

  //   if (positionFor === 'FOOD_DETAIL') return 'gold';

  //   if (positionFor === 'FOOD_CARD') return '#111111';

  //   return undefined;
  // };

  const generateIconColorVariants = (ind) => {
    if (imgIndx === ind) return 'steelblue';

    switch (positionFor) {
      case POSITION_FOR.FOOD_DETAIL: {
        return 'gold';
      }
      case POSITION_FOR.FOOD_CARD: {
        return '#111111';
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <StyledNavigators>
      {img?.map((url, ind) => (
        <NavigatorIcon
          iconcolor={() => generateIconColorVariants(ind)}
          margin="0 2px"
          key={url}
          onClick={() => handleChangeimg(ind)}
        />
      ))}
    </StyledNavigators>
  );
}
