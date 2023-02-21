/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../styles/navbar.css';
import menuIcon from '../images/menu icon.svg';
import closeMenuIcon from '../images/close menu icon.png';
import MyFoodContext from '../context/MyContext';

export default function Navbar() {
  const { activeMenu, setActiveMenu, setShowFoodForm, toggleBodyOverFlow } =
    React.useContext(MyFoodContext);

  return (
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <a href="#hero-section">
          <button id="home-btn" type="button">
            HOME
          </button>
        </a>

        <img
          className={
            !activeMenu ? 'menu-icon' : 'menu-icon active-varying-anything'
          }
          src={menuIcon}
          alt="menu icon"
          onClick={() => setActiveMenu((prev) => !prev)}
        />

        <div
          className={
            activeMenu
              ? 'side-menu-holder'
              : 'side-menu-holder active-side-menu'
          }
        >
          <img
            className="close-menu-icon"
            src={closeMenuIcon}
            alt="close menu icon"
            onClick={() => setActiveMenu((prev) => !prev)}
          />

          <button
            className="add-food-btn"
            type="button"
            onClick={() => {
              setShowFoodForm((prev) => !prev);
              setActiveMenu((prev) => !prev);
              toggleBodyOverFlow();
            }}
          >
            + AddFood
          </button>

          <a href="#App">
            <button
              id="foods-btn"
              type="button"
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              FOODS
            </button>
          </a>

          <button
            id="foods-btn"
            type="button"
            onClick={() => setActiveMenu((prev) => !prev)}
          >
            FAVORITES
          </button>

          <a href="#footer">
            <button
              id="contact-btn"
              type="button"
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              CONTACT
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}
