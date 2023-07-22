/* eslint-disable react/prop-types */
import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { useFoodContext } from '../../context/FoodContext';
import ButtonAtom from '../../components/atoms/Button';
import useAlert from '../../hooks/UseAlert';
import FoodForm from '../../components/FoodForm/FoodForm';
import StyledBtnHolder from '../../common/styledBtnHolder';
import SearchForm from '../../components/SearchForm/SearchForm';
import { SESSIONSTORAGE } from '../../services/storage';

export default function FoodPage({ setPathName }) {
  const [showForm, setShowForm] = React.useState(false);
  const [foodList, setFoodList] = React.useState(null);
  const { foodData } = useFoodContext();

  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  const createNewFood = () => {
    setShowForm(true);
  };

  React.useEffect(() => {
    if (foodData) setFoodList([...foodData]);
    setPathName(window.location.pathname); // helps for my 404 page

    return () => {
      SESSIONSTORAGE.remove('searchIdList'); // clearing the search id array that is created when a search is made
      SESSIONSTORAGE.remove('searchValue'); // clearing the search value from storage
    };
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
        <SearchForm
          setSearchItems={setFoodList}
          searchFallBack={foodData}
          placeHolder="search food"
        />

        <Header2Atom
          text="Food List"
          size="1.5rem"
          margin="3rem auto 2rem"
          weight="700"
        />

        <SampleFoods
          arrayFoods={foodList}
          setArrayFoods={setFoodList}
          allowInteraction
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
