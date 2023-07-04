/* eslint-disable react/prop-types */
import React from 'react';
import StyledSampleFoods from './StyledSampleFood';
import FoodCard from '../FoodCard/FoodCard';
import useAlert from '../../hooks/UseAlert';

export default function SampleFoods({ arrayFoods, allowInteraction }) {
  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  return (
    <>
      {alertMsg.show && <AlertComponent />}

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
              displayAlert={displayAlert}
              allowInteraction={allowInteraction}
            />
          ))}
        </div>
      </StyledSampleFoods>
    </>
  );
}
