import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { useFoodContext } from '../../context/FoodContext';
import ButtonAtom from '../../components/atoms/Button';
import useAlert from '../../hooks/UseAlert';
import FoodForm from '../../components/FoodForm/FoodForm';

export default function FoodPage() {
  const [showForm, setShowForm] = React.useState(false);
  const { foodData } = useFoodContext();

  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  const styledBtnHolder = {
    width: 'min(Calc(97vw - 10px), 1450px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '1rem auto',
  };

  const createNewFood = () => {
    setShowForm(true);
    //
  };

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

        <SampleFoods arrayFoods={foodData} allowInteraction />
        <div style={styledBtnHolder}>
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
