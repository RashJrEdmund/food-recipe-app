import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingNav from './components/navbar/LandingNav';
import Footer from './components/footer/Footer';

export default function FoodApp() {
  const [pathName, setPathName] = React.useState(
    window.location.pathname.split('/').pop()
  );

  return (
    <>
      <LandingNav pathName={pathName} setPathName={setPathName} />
      <Outlet />
      <Footer />
    </>
  );
}
