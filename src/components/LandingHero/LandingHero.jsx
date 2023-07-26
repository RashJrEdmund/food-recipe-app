import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLandingHero from './StyledLandingHero';
import ButtonAtom from '../atoms/Button';
import { ICONT_TYPE } from '../../services/constants';

export default function LandingHero() {
  const navigate = useNavigate();

  const gotToFoods = () => {
    navigate('/foods');
    window.scrollTo(0, 0);
  };

  return (
    <StyledLandingHero>
      <div className="container">
        <div className="hero_col_1">
          <h1>HEADER TEXT</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            veniam et, dolorum iusto praesentium modi harum, quam atque
            repellendus rem maiores non ullam rerum aut ad illo incidunt
            aspernatur voluptas? Architecto laborum quas dicta minus magnam
            recusandae, voluptatum rerum quibusdam ab et ut provident reiciendis
            natus molestias, fugit libero consequuntur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
            debitis, dicta placeat incidunt nostrum ipsum dolorum eveniet illum
            laboriosam ducimus ratione saepe molestiae similique error illo
            distinctio ad facilis. Iure veritatis rerum ab animi sequi pariatur
            mollitia nobis, necessitatibus enim, laudantium voluptatem facere
            hic cupiditate voluptate similique odio quis?
          </p>

          <div className="cta_btns">
            <ButtonAtom
              text="Advance"
              radius="5px"
              size="1rem"
              bg="#ffc145"
              iconType={ICONT_TYPE.NEXT}
              action={() => gotToFoods()}
            />
          </div>
        </div>

        <div className="hero_col_2">This is spossed to be an img</div>
      </div>
    </StyledLandingHero>
  );
}
