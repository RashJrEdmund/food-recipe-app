/* eslint-disable react/prop-types */
import React from 'react';
import StyledSampleFoods from './StyledSampleFood';
import FoodCard from '../organisms/FoodCard/FoodCard';
import useAlert from '../../hooks/UseAlert';
import { useFoodContext } from '../../context/FoodContext';

export default function SampleFoods({
  arrayFoods,
  setArrayFoods,
  allowInteraction,
  fallbackmessage,
}) {
  const { setFoodData } = useFoodContext();
  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  return (
    <>
      {alertMsg.show && <AlertComponent />}

      <StyledSampleFoods>
        {(arrayFoods?.length > 0 && (
          <div className="cards">
            {arrayFoods?.map(
              ({ _id, name, description, recipe, fav, img, imgIndx }) => (
                <FoodCard
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description || recipe[0]}
                  img={img}
                  fav={fav}
                  imgIndx={imgIndx}
                  setArrayFoods={setArrayFoods || setFoodData}
                  displayAlert={displayAlert}
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
    </>
  );
}
