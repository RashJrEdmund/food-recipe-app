import React from 'react';
import LandingHero from '../../components/LandingHero/LandingHero';

// eslint-disable-next-line react/prop-types
export default function LandingPage({ setPathName }) {
  return (
    <main>
      <LandingHero setPathName={setPathName} />
    </main>
  );
}
