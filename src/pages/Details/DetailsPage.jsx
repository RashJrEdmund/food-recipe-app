import React from 'react';
import { useParams } from 'react-router-dom';
import { ButtonAtom, Header2Atom } from '../../components/atoms/Atoms';
import { getFromLocalStorage } from '../../services/utils';
import StyledDetailsPage from './StyledDetailsPage';

export default function DetailsPage() {
  const [food, setFood] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    const currentFood = getFromLocalStorage('foodData').find(
      (meal) => meal.name === params.id
    );

    setFood({ ...currentFood });
  }, [params]);

  return (
    <StyledDetailsPage url={food?.img}>
      <section className="food_container">
        <div className="food_image" />

        <div className="food_col_">
          <Header2Atom
            text={`${food?.name || 'Food Item'}`}
            size="1.4rem"
            margin="3rem 10px 2rem"
            weight="800"
            width="100%"
            align="left"
          />

          <p className="description">
            {food?.description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum fuga necessitatibus harum reprehenderit?'}
          </p>
        </div>
      </section>

      <section className="section_2_recipe">
        <ul>
          {food?.recipe?.map((step) => (
            <li key={step} className="food_step">
              {step}
            </li>
          ))}
        </ul>
      </section>

      <div className="food_details_cta">
        <ButtonAtom
          text="Modify"
          color="#ffc145"
          bg="#111111"
          iconType="EDIT"
          iconcolor="#ddd"
        />

        <ButtonAtom
          text="Delete"
          color="brown"
          bg="transparent"
          iconType="DELETE"
          iconcolor="#111111"
        />
      </div>
    </StyledDetailsPage>
  );
}
