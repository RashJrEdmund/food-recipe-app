import React from 'react';
import StyledSampleFoods from './StyledSampleFood';
import { Header2Atom } from '../../atoms/Atoms';

export default function SampleFoods() {
  return (
    <StyledSampleFoods>
      <Header2Atom text="Headert Text" size="1.4rem" />

      <div className="cards" />
    </StyledSampleFoods>
  );
}
