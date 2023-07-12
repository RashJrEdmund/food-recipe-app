/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header2Atom } from '../../components/atoms/Atoms';
import ButtonAtom from '../../components/atoms/Button';
import {
  getFromLocalStorage,
  removeFromSession,
  saveToLocalStorage,
  saveToSessionStorage,
} from '../../services/utils';
import StyledDetailsPage from './StyledDetailsPage';
import FoodForm from '../../components/FoodForm/FoodForm';
import { useFoodContext } from '../../context/FoodContext';
import useDialogue from '../../hooks/useDialogue';

export default function DetailsPage({ setPathName }) {
  const [detailedFood, setDetailedFood] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const navigate = useNavigate();

  const { displayAlert, setFoodData } = useFoodContext();

  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const params = useParams();

  const deleteFood = () => {
    const newFoodlist = getFromLocalStorage('foodData').filter(
      (food) => food.id !== detailedFood.id
    );

    saveToLocalStorage('foodData', newFoodlist);
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

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  React.useEffect(() => {
    const currentFood = getFromLocalStorage('foodData').find(
      (meal) => meal.name === params.name
    );

    saveToSessionStorage('foodToEdit', currentFood);

    if (currentFood) setDetailedFood({ ...currentFood });

    setPathName(window.location.pathname); // helps for my 404 page

    return () => removeFromSession('foodToEdit');
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
          <div className="food_image" />

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
              iconType="EDIT"
              iconcolor="#ddd"
              action={toggleShowForm}
            />

            <ButtonAtom
              text="Delete"
              color="brown"
              bg="transparent"
              iconType="DELETE"
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