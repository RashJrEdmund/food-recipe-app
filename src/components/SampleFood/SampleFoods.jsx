/* eslint-disable react/prop-types */
import React from 'react';
import StyledSampleFoods from './StyledSampleFood';
import FoodCard from '../FoodCard/FoodCard';
import useAlert from '../../hooks/UseAlert';

export default function SampleFoods({
  arrayFoods,
  allowInteraction,
  fallbackmessage,
}) {
  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  return (
    <>
      {alertMsg.show && <AlertComponent />}

      <StyledSampleFoods>
        {(arrayFoods?.length > 0 && (
          <div className="cards">
            {arrayFoods?.map(({ id, name, description, recipe, fav, img }) => (
              <FoodCard
                key={id}
                id={id}
                name={name}
                description={description || recipe[0]}
                img={img}
                fav={fav}
                displayAlert={displayAlert}
                allowInteraction={allowInteraction}
              />
            ))}
          </div>
        )) || (
          <p className="fall_back_text">
            {fallbackmessage || 'No Items Listed Here'}
          </p>
        )}
      </StyledSampleFoods>
    </>
  );
}
