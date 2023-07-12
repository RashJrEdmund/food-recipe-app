/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLandingNav from './StyledLandingNav';
import { Header2Atom, Overlay } from '../atoms/Atoms';
import { MenuIcon, OpenMenuIcon } from '../atoms/Icons';

export default function LandingNav() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = React.useState(false);
  const routeToPage = (route) => {
    navigate(route);
    window.scrollTo(0, 95);
    setOpenMenu(false);
  };

  return (
    <>
      {openMenu && <Overlay action={() => setOpenMenu(false)} />}

      <StyledLandingNav openMenu={openMenu}>
        <div className="nav_container">
          <Header2Atom
            text="Logo"
            size="1.5rem"
            weight="900"
            action={() => navigate('/')}
          />

          <ul>
            <OpenMenuIcon onClick={() => setOpenMenu(false)} />
            <li onClick={() => routeToPage('/')}>Home</li>
            <li onClick={() => routeToPage('/foods')}>Food List</li>
            <li onClick={() => routeToPage('/favorites')}>Favorites</li>
            <li>User</li>
          </ul>

          <MenuIcon onClick={() => setOpenMenu(true)} />
        </div>
      </StyledLandingNav>
    </>
  );
}
