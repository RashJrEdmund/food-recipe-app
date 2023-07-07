import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingHero from '../../components/LandingHero/LandingHero';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { Header2Atom } from '../../components/atoms/Atoms';
import ButtonAtom from '../../components/atoms/Button';
import { useFoodContext } from '../../context/FoodContext';
import StyledBtnHolder from '../../common/styledBtnHolder';

export default function LandingPage() {
  const navigate = useNavigate();
  const { foodData } = useFoodContext();

  const gotToFoods = () => {
    navigate('/foods');
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <LandingHero />
      <Header2Atom
        text="Heading Text"
        size="1.4rem"
        margin="3rem auto 2rem"
        weight="800"
      />
      <SampleFoods
        arrayFoods={foodData?.slice(0, 12)}
        allowInteraction={false}
      />

      <div style={StyledBtnHolder}>
        <ButtonAtom
          bg="#111111"
          color="#ffc145"
          text="Food List"
          iconType="NEXT"
          iconcolor="#ddd"
          action={() => gotToFoods()}
        />
      </div>
    </main>
  );
}
