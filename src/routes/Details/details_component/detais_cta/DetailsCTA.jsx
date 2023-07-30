/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import ButtonAtom from '../../../../components/atoms/Button';
import { BUTTON_ICON_TYPE, OUTLET_TYPE } from '../../../../services/constants';

const StyledFoodDetCTA = styled.div`
  width: min(97%, 1000px);
  margin: 2rem auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
`;

export default function DetailsCTA({ toggleOutlet }) {
  return (
    <StyledFoodDetCTA>
      <ButtonAtom
        text="Modify"
        color="#ffc145"
        bg="#111111"
        iconType={BUTTON_ICON_TYPE.EDIT}
        iconcolor="#ddd"
        action={() => toggleOutlet(OUTLET_TYPE.FOOD_FORM)}
      />

      <ButtonAtom
        text="Delete"
        color="brown"
        bg="transparent"
        iconType={BUTTON_ICON_TYPE.DELETE}
        iconcolor="#111111"
        margin="0 0 0 3rem"
        action={() => toggleOutlet(OUTLET_TYPE.DIALOGUE)}
      />
    </StyledFoodDetCTA>
  );
}
