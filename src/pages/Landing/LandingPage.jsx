import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingHero from '../../components/LandingHero/LandingHero';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { ButtonAtom, Header2Atom } from '../../components/atoms/Atoms';
import { useFoodContext } from '../../context/MyContext';

export default function LandingPage() {
  const navigate = useNavigate();
  const { foodData } = useFoodContext();
  const styledBtnHolder = {
    width: '97vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem auto',
  };

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
        arrayFoods={foodData?.slice(0, 6)}
        allowInteraction={false}
      />

      <div style={styledBtnHolder}>
        <ButtonAtom
          bg="#111111"
          color="#ffc145"
          text="Next"
          iconType="NEXT"
          iconcolor="#ddd"
          action={() => gotToFoods()}
        />
      </div>
    </main>
  );
}
