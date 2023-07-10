/* eslint-disable react/prop-types */
import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { useFoodContext } from '../../context/FoodContext';
import useAlert from '../../hooks/UseAlert';
import FoodForm from '../../components/FoodForm/FoodForm';

export default function Favorites({ setPathName }) {
  const [showForm, setShowForm] = React.useState(false);
  const [favorites, setFavorites] = React.useState(null);

  const { foodData } = useFoodContext();

  const { AlertComponent, displayAlert, alertMsg } = useAlert();
  React.useEffect(() => {
    if (foodData)
      setFavorites([...foodData.filter((food) => food.fav === true)]);
  }, [foodData]);

  React.useEffect(() => setPathName(window.location.pathname), []); // helps for my 404 page

  return (
    <>
      {alertMsg.show && <AlertComponent />}

      {showForm && (
        <FoodForm
          toggleShowForm={() => setShowForm((prev) => !prev)}
          displayAlert={displayAlert}
          creatingNew // to signify that it's a new item beeing created
        />
      )}
      <div>
        <Header2Atom
          text="Food List"
          size="1.5rem"
          margin="3rem auto 2rem"
          weight="700"
        />

        <SampleFoods
          arrayFoods={favorites}
          allowInteraction
          fallbackmessage="You Have No Food In Your Favourite List"
        />
      </div>
    </>
  );
}
