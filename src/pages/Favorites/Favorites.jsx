import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { useFoodContext } from '../../context/FoodContext';
import ButtonAtom from '../../components/atoms/Button';
import useAlert from '../../hooks/UseAlert';
import FoodForm from '../../components/FoodForm/FoodForm';
import StyledBtnHolder from '../../common/styledBtnHolder';

export default function Favorites() {
  const [showForm, setShowForm] = React.useState(false);
  const [favorites, setFavorites] = React.useState(null);

  const { foodData } = useFoodContext();

  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  const createNewFood = () => {
    setShowForm(true);
    //
  };

  React.useEffect(() => {
    if (foodData)
      setFavorites([...foodData.filter((food) => food.fav === true)]);
  }, [foodData]);

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

        <div style={StyledBtnHolder}>
          <ButtonAtom
            bg="#111111"
            color="#ffc145"
            text="Create New"
            iconType="ADD"
            iconcolor="#ddd"
            action={createNewFood}
          />
        </div>
      </div>
    </>
  );
}
