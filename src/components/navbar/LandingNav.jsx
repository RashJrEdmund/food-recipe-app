/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledLandingNav from './StyledLandingNav';
import { Header2Atom, Overlay } from '../atoms/Atoms';
import { OpenMenuIcon } from '../atoms/icons/navigation';
import { MenuIcon } from '../atoms/icons/actions';
import { MAX_SROLL_B4_NAV_BAR_FIXES } from '../../services/constants';

const NAV_LIST = [
  { title: 'Home', route: '/home' },
  { title: 'Favorites', route: 'favorites' },
  { title: 'Settings', route: 'settings' },
];

export default function LandingNav({ pathName, setPathName }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  const navigate = useNavigate();
  const navRef = React.useRef();

  const routeToPage = (route) => {
    navigate(route);
    // window.scrollTo(0, 55);
    setOpenMenu(false);
    setPathName(route.split('/').pop());
  };

  React.useEffect(() => {
    let YscrollHolder = 0;

    window.addEventListener('scroll', () => {
      if (
        window.scrollY >= YscrollHolder &&
        window.scrollY >= MAX_SROLL_B4_NAV_BAR_FIXES
      ) {
        navRef.current?.classList.add('active_navbar');
      } else {
        navRef.current?.classList.remove('active_navbar');
      }

      YscrollHolder = window.scrollY;
    });

    return () => window.removeEventListener('scroll', null);
  }, []);

  return (
    <>
      {openMenu && <Overlay action={() => setOpenMenu(false)} />}

      <div className="margin_compliment_div" style={{ margin: '0 0 55px' }} />

      <StyledLandingNav ref={navRef} openMenu={openMenu}>
        <div className="nav_container">
          <Header2Atom
            text="Food App"
            size="2rem"
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
