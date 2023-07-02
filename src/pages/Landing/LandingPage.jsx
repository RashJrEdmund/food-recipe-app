import React from 'react';
import LandingHero from '../../components/LandingHero/LandingHero';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import FoodData from '../../data/Data.json';
import { Header2Atom } from '../../components/atoms/Atoms';

export default function LandingPage() {
  return (
    <main>
      <LandingHero />
      <Header2Atom
        text="Heading Text"
        size="1.4rem"
        margin="3rem auto 2rem"
        weight="800"
      />

      <SampleFoods arrayFoods={FoodData.slice(0, 6)} allowInteraction={false} />
    </main>
  );
}
