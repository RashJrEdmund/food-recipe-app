import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { useFoodContext } from '../../context/FoodContext';
import ButtonAtom from '../../components/atoms/Button';
import useAlert from '../../hooks/UseAlert';
import StyledBtnHolder from '../../common/styledBtnHolder';
import SearchForm from '../../components/organisms/SearchForm/SearchForm';
import { LOCALSTORAGE, SESSIONSTORAGE } from '../../services/storage';
import { BUTTON_ICON_TYPE } from '../../services/constants';
import { FoodModule } from '../../api';
import { customLogger } from '../../services/utils';

export default function FoodPage() {
  const [foodList, setFoodList] = React.useState(null);
  const [fetchData, setFetchData] = React.useState(null);
  const { foodData } = useFoodContext();

  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  const navigate = useNavigate();

  const createNewFood = () => {
    navigate('/home/createnew');
  };

  React.useEffect(() => {
    if (fetchData) customLogger(fetchData);
  }, [fetchData]);

  React.useEffect(() => {
    // fetching api
    FoodModule.getAllFood()
      .then(({ data: { items, currentPage, totalPages } }) => {
        // items, currentPage, and totalPages are the 3 main things you'll be using
        customLogger({ currentPage }, { clearConsole: true }); // passing the clearConsole option to clear console.
        customLogger({ totalPages });
        setFetchData(items);
      })
      .catch((err) => customLogger(err.message ?? err, { clearConsole: true }));
    //
    setFoodList([...LOCALSTORAGE.get('foodData')]);

    return () => {
      SESSIONSTORAGE.remove('searchIdList'); // clearing the search id array that is created when a search is made
      SESSIONSTORAGE.remove('searchValue'); // clearing the search value from storage
    };
  }, [foodData]);

  return (
    <>
      {alertMsg.show && <AlertComponent />}

      <Outlet
        context={{
          toggleShowForm: () => navigate('/home'),
          creatingNew: true,
          displayAlert,
        }}
      />

      <div>
        <SearchForm
          setSearchItems={setFoodList}
          searchFallBack={foodData}
          placeHolder="search food"
        />

        <Header2Atom
          text="Food List"
          size="1.5rem"
          margin="2rem auto"
          weight="700"
        />

        <SampleFoods
          arrayFoods={fetchData}
          setArrayFoods={setFoodList}
          allowInteraction
        />

        <div style={StyledBtnHolder}>
          <ButtonAtom
            bg="#111111"
            color="#ffc145"
            text="Create New"
            iconType={BUTTON_ICON_TYPE.CREATE}
            iconcolor="#ddd"
            action={createNewFood}
          />
        </div>
      </div>
    </>
  );
}
