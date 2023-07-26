/* eslint-disable react/prop-types */
import React from 'react';
import LandingHero from '../../components/LandingHero/LandingHero';

export default function LandingPage({ setPathName }) {
  React.useEffect(() => setPathName(window.location.pathname), []); // helps for my 404 page

  return (
    <main>
      <LandingHero />
    </main>
  );
}
