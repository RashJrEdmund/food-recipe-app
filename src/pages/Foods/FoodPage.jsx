import React from 'react';
import { Header2Atom } from '../../components/atoms/Atoms';
import SampleFoods from '../../components/SampleFood/SampleFoods';
import { useFoodContext } from '../../context/MyContext';

export default function FoodPage() {
  const { foodData } = useFoodContext();
  return (
    <div>
      <Header2Atom
        text="Food List"
        size="1.5rem"
        margin="3rem auto 2rem"
        weight="700"
      />

      <SampleFoods arrayFoods={foodData} allowInteraction />
    </div>
  );
}
