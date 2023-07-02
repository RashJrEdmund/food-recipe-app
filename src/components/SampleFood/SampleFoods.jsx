/* eslint-disable react/prop-types */
import React from 'react';
import StyledSampleFoods from './StyledSampleFood';
import FoodCard from '../FoodCard/FoodCard';

export default function SampleFoods({ arrayFoods, allowInteraction }) {
  return (
    <StyledSampleFoods>
      <div className="cards">
        {arrayFoods?.map(({ id, name, description, recipe, fav, img }) => (
          <FoodCard
            key={id}
            id={id}
            name={name}
            description={description || recipe[0]}
            img={img}
            fav={fav}
            allowInteraction={allowInteraction}
          />
        ))}
      </div>
    </StyledSampleFoods>
  );
}
