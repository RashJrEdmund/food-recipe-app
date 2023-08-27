/* eslint-disable react/prop-types */
import React from 'react';
import StyledSampleFoods from './StyledSampleFood';
import FoodCard from '../organisms/FoodCard/FoodCard';
import { useFoodContext } from '../../context/FoodContext';

export default function SampleFoods({
  arrayFoods,
  setArrayFoods,
  allowInteraction,
  fallbackmessage,
}) {
  const { setFoodData } = useFoodContext();

  return (
    <StyledSampleFoods>
      {(arrayFoods?.length > 0 && (
        <div className="cards">
          {arrayFoods?.map(
            ({ id, name, description, recipe, fav, img, imgIndx }) => (
              <FoodCard
                key={id}
                id={id}
                name={name}
                description={description || recipe[0]}
                img={img}
                fav={fav}
                imgIndx={imgIndx}
                setArrayFoods={setArrayFoods || setFoodData}
                allowInteraction={allowInteraction}
              />
            )
          )}
        </div>
      )) || (
        <p className="fall_back_text">
          {fallbackmessage || 'No Items Listed Here'}
        </p>
      )}
    </StyledSampleFoods>
  );
}
