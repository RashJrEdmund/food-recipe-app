/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header2Atom } from '../../components/atoms/Atoms';
import ButtonAtom from '../../components/atoms/Button';
import { LOCALSTORAGE, SESSIONSTORAGE } from '../../services/storage';
import StyledDetailsPage from './StyledDetailsPage';
import FoodForm from '../../components/FoodForm/FoodForm';
import { useFoodContext } from '../../context/FoodContext';
import useDialogue from '../../hooks/useDialogue';
import ImageNavigators from '../../components/ImageNavigators/ImageNavigators';
import {
  BUTTON_ICON_TYPE,
  NAVIGATOR_POSITION_FOR,
} from '../../services/constants';

export default function DetailsPage({ setPathName }) {
  const [detailedFood, setDetailedFood] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const navigate = useNavigate();

  const { displayAlert, setFoodData } = useFoodContext();

  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const params = useParams();

  const deleteFood = () => {
    const newFoodlist = LOCALSTORAGE.get('foodData').filter(
      (food) => food.id !== detailedFood.id
    );

    LOCALSTORAGE.save('foodData', newFoodlist);
    setFoodData([...newFoodlist]);
    displayAlert(`${detailedFood?.name} deleted`);
    navigate('/foods');
  };

  const handleDelete = () => {
    const options = {
      message2: `You are about to delete ${detailedFood.name}`,
      agreeTxt: 'Delete Food',
      fxntoCall: deleteFood,
      show: false,
    };

    displayDialogue(options);
  };

  const handleChangeDetailImg = (ind) => {
    const currentFood = detailedFood;
    currentFood.imgIndx = ind;

    SESSIONSTORAGE.save('foodToEdit', currentFood);

    setDetailedFood({ ...currentFood });
  };

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  React.useEffect(() => {
    const currentFood = LOCALSTORAGE.get('foodData').find(
      (meal) => meal.name === params.name
    );

    SESSIONSTORAGE.save('foodToEdit', currentFood);

    if (currentFood) setDetailedFood({ ...currentFood });

    setPathName(window.location.pathname); // helps for my 404 page

    return () => SESSIONSTORAGE.remove('foodToEdit');
  }, [params]);

  return (
    <>
      {showForm && (
        <FoodForm
          toggleShowForm={toggleShowForm}
          displayAlert={displayAlert}
          setDetailedFood={setDetailedFood}
        />
      )}

      {dialogueDetails.show && <DialogueComponent />}

      <StyledDetailsPage url={detailedFood?.img[detailedFood?.imgIndx]}>
        <section className="food_container">
          <div className="food_image">
            <ImageNavigators
              img={detailedFood?.img}
              imgIndx={detailedFood?.imgIndx}
              handleChangeimg={handleChangeDetailImg}
              positionFor={NAVIGATOR_POSITION_FOR.FOOD_DETAIL}
            />
          </div>

          <div className="food_col_2">
            <Header2Atom
              text={`${detailedFood?.name || 'Food Name'}`}
              size="1.4rem"
              margin="3rem 10px 2rem"
              weight="800"
              width="100%"
              align="left"
            />

            <p className="description">
              {detailedFood?.description ||
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum fuga necessitatibus harum reprehenderit?'}
            </p>
          </div>
        </section>

        <section className="section_2_recipe">
          <ul>
            {detailedFood?.recipe?.map((step) => (
              <li key={step} className="food_step">
                {step}
              </li>
            ))}
          </ul>
        </section>

        {detailedFood && (
          <div className="food_details_cta">
            <ButtonAtom
              text="Modify"
              color="#ffc145"
              bg="#111111"
              iconType={BUTTON_ICON_TYPE.EDIT}
              iconcolor="#ddd"
              action={toggleShowForm}
            />

            <ButtonAtom
              text="Delete"
              color="brown"
              bg="transparent"
              iconType={BUTTON_ICON_TYPE.DELETE}
              iconcolor="#111111"
              margin="0 0 0 3rem"
              action={handleDelete}
            />
          </div>
        )}
      </StyledDetailsPage>
    </>
  );
}
