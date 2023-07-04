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

export default function DetailsPage() {
  const [detailedFood, setDetailedFood] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const navigate = useNavigate();

  const { displayAlert, setFoodData } = useFoodContext();

  const params = useParams();

  const handleDelete = () => {
    const newFoodlist = getFromLocalStorage('foodData').filter(
      (food) => food.id !== detailedFood.id
    );

    saveToLocalStorage('foodData', newFoodlist);
    setFoodData([...newFoodlist]);
    displayAlert(`${detailedFood?.name} deleted`);
    navigate('/foods');
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

      <StyledDetailsPage url={detailedFood?.img}>
        <section className="food_container">
          <div className="food_image" />

          <div className="food_col_">
            <Header2Atom
              text={`${detailedFood?.name || 'Food Item'}`}
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
