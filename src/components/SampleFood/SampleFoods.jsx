/* eslint-disable react/prop-types */
import React from 'react';
import StyledSampleFoods from './StyledSampleFood';
import FoodCard from '../FoodCard/FoodCard';

export default function SampleFoods({ arrayFoods, allowInteraction }) {
  return (
    <StyledSampleFoods>
      <div className="cards">
        {arrayFoods?.map(({ name, id, img }) => (
          <FoodCard
            name={name}
            key={id}
            img={img}
            allowInteraction={allowInteraction}
          />
        ))}
      </div>
    </StyledSampleFoods>
  );
}
