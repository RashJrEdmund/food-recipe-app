import React from 'react';
import { useParams } from 'react-router-dom';
import { Header2Atom } from '../../components/atoms/Atoms';
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
    <StyledDetailsPage>
      <section className="food_container">
        <div className="food_image" />
        <Header2Atom
          text={`${food?.name || 'Food Item'}`}
          size="1.4rem"
          margin="3rem auto 2rem"
          weight="800"
        />

        <p className="description">{food?.description}</p>

        <ul>
          {food?.recipe?.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>
    </StyledDetailsPage>
  );
}
