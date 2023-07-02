import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import FoodData from '../../data/Data.json';

export default function FoodPage() {
  return (
    <div>
      <Header2Atom
        text="Food List"
        size="1.4rem"
        margin="3rem auto 2rem"
        weight="800"
      />

      <SampleFoods arrayFoods={FoodData} allowInteraction />
    </div>
  );
}
