/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLandingNav from './StyledLandingNav';
import { Header2Atom, Overlay } from '../atoms/Atoms';
import { OpenMenuIcon } from '../atoms/icons/navigation';
import { MenuIcon } from '../atoms/icons/actions';

const NAV_LIST = [
  { title: 'Food List', route: '/foods' },
  { title: 'Favorites', route: '/favorites' },
  { title: 'Settings', route: '/settings' },
];

export default function LandingNav({ pathName, setPathName }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  const navigate = useNavigate();

  const routeToPage = (route) => {
    navigate(route);
    // window.scrollTo(0, 55);
    setOpenMenu(false);
    setPathName(route.split('/').pop());
  };

  return (
    <>
      {openMenu && <Overlay action={() => setOpenMenu(false)} />}

      <StyledLandingNav openMenu={openMenu}>
        <div className="nav_container">
          <Header2Atom
            text="Home"
            size="1.5rem"
            weight="900"
            action={() => {
              navigate('/');
              setPathName('');
            }}
          />

          <ul>
            <OpenMenuIcon onClick={() => setOpenMenu(false)} />

            {NAV_LIST.map(({ title, route }) => (
              <li
                key={title}
                onClick={() => routeToPage(route)}
                className={
                  pathName === route.split('/').pop() ? 'current_route' : ''
                }
              >
                {title}
              </li>
            ))}
          </ul>

          <MenuIcon onClick={() => setOpenMenu(true)} />
        </div>
      </StyledLandingNav>
    </>
  );
}
