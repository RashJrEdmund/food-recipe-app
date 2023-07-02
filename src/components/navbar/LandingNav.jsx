/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLandingNav from './StyledLandingNav';
import { Header2Atom } from '../atoms/Atoms';

export default function LandingNav() {
  const navigate = useNavigate();

  return (
    <StyledLandingNav>
      <div className="nav_container">
        <Header2Atom text="Logo" size="1.5rem" />

        <ul>
          <li>Home</li>
          <li onClick={() => navigate('/foods')}>Food List</li>
          <li>Favorites</li>
          <li>User</li>
        </ul>
      </div>
    </StyledLandingNav>
  );
}
