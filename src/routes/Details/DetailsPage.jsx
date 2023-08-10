/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { LOCALSTORAGE, SESSIONSTORAGE } from '../../services/storage';
import StyledDetailsPage from './StyledDetailsPage';
import { useFoodContext } from '../../context/FoodContext';
import { OUTLET_TYPE } from '../../services/constants';
import { updateFavorite } from '../../services/foodScripts';
import DetailsCTA from './details_component/detais_cta/DetailsCTA';
import FoodContainer from './details_component/food_container/FoodContainer';

export default function DetailsPage() {
  const [detailedFood, setDetailedFood] = React.useState(null);
  const [contextData, setContextData] = React.useState({}); // since spreading is overriding and conflicting, how about a state for context option
  const navigate = useNavigate();

  const { displayAlert, foodData, setFoodData } = useFoodContext();

  const params = useParams();

  const deleteFood = () => {
    const newFoodlist = LOCALSTORAGE.get('foodData').filter(
      (food) => food.id !== detailedFood.id
    );

    LOCALSTORAGE.save('foodData', newFoodlist);
    setFoodData([...newFoodlist]);
    displayAlert(`${detailedFood.name} deleted`);

    navigate('/home');
  };

  const addNewFavorite = () => {
    updateFavorite(detailedFood.id, setFoodData);
    displayAlert(
      `${detailedFood.name.split(/[^a-zA-Z]/).shift()} ${
        detailedFood.fav ? 'removed from ' : 'added to '
      } favorites`
    );
  };

  const handleChangeDetailImg = (ind) => {
    const currentFood = detailedFood;
    currentFood.imgIndx = ind;
    const localUpdate = LOCALSTORAGE.get('foodData').map((food) => {
      if (food.id === detailedFood.id) return { ...food, ...currentFood };
      return food;
    });

    LOCALSTORAGE.save('foodData', localUpdate);

    SESSIONSTORAGE.save('foodToEdit', currentFood);

    setDetailedFood({ ...currentFood });
  };

  const openFoodForm = () => {
    navigate(`/home/details/${detailedFood?.name}/edit`);
  };

  const openDialogue = (path) => {
    navigate(`/home/details/${detailedFood?.name}/${path}`);
  };

  const closeOutlet = () => navigate(-1, { replace: true });

  // SETTING OUTLET PARAMETERS

  const generatecontextData = (type) => {
    switch (type) {
      case OUTLET_TYPE.FOOD_FORM:
        setContextData({
          toggleShowForm: closeOutlet,
          displayAlert,
          setDetailedFood,
        });
        break;
      case OUTLET_TYPE.DIALOGUE:
        setContextData({
          message2: `You are about to delete ${detailedFood?.name}`,
          agreeTxt: 'Delete Food',
          fxntoCall: deleteFood,
          closeDialogue: closeOutlet,
        });
        break;
      case OUTLET_TYPE.REDIRECT:
        setContextData({
          message2: `You are about to be redirected`,
          message3: `to this image path`,
          agreeTxt: 'rediret me',
          fxntoCall: () =>
            window.open(detailedFood?.img[detailedFood?.imgIndx]),
          closeDialogue: closeOutlet,
        });
        break;
      default:
        break;
    }

    SESSIONSTORAGE.save('OUT_TYPE', type);
  };

  const toggleOutlet = (type) => {
    generatecontextData(type);

    switch (type) {
      case OUTLET_TYPE.FOOD_FORM:
        openFoodForm();
        break;
      case OUTLET_TYPE.DIALOGUE:
        openDialogue('delete');
        break;
      case OUTLET_TYPE.REDIRECT:
        openDialogue('redirect');
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    const currentFood = LOCALSTORAGE.get('foodData').find(
      (meal) => meal.name === params.name
    );

    SESSIONSTORAGE.save('foodToEdit', currentFood);

    if (currentFood) setDetailedFood({ ...currentFood });

    return () => SESSIONSTORAGE.remove('foodToEdit');
  }, [params, foodData]); // adding foodData to cause a re-render whe food is liked

  React.useEffect(() => {
    if (detailedFood) generatecontextData(SESSIONSTORAGE.get('OUT_TYPE'));
  }, [detailedFood]);

  return (
    <>
      <Outlet context={{ ...contextData }} />

      <StyledDetailsPage>
        <FoodContainer
          detailedFood={detailedFood}
          toggleOutlet={toggleOutlet}
          handleChangeDetailImg={handleChangeDetailImg}
          addNewFavorite={addNewFavorite}
        />

        <section className="section_2_recipe">
          <ul>
            {detailedFood?.recipe?.map((step) => (
              <li key={step} className="food_step">
                {step}
              </li>
            ))}
          </ul>
        </section>

        {detailedFood && <DetailsCTA toggleOutlet={toggleOutlet} />}
      </StyledDetailsPage>
    </>
  );
}
