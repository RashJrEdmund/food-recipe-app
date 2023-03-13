/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import menuIcon from '../images/menu icon.svg';
import closeMenuIcon from '../images/close menu icon.png';
import MyFoodContext from '../context/MyContext';

export default function Navbar() {
  const {
    activeMenu,
    setActiveMenu,

    setShowFoodForm,
    toggleBodyOverFlow,

    closeAllOpenRecipes,
  } = React.useContext(MyFoodContext);

  const navigate = useNavigate();

  return (
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <a href="#hero-section">
          <button
            id="home-btn"
            type="button"
            onClick={() => closeAllOpenRecipes()}
          >
            HOME
          </button>
        </a>

        <img
          className={
            !activeMenu ? 'menu-icon' : 'menu-icon active-varying-anything'
          }
          src={menuIcon}
          alt="menu icon"
          onClick={() => {
            setActiveMenu((prev) => !prev);
            closeAllOpenRecipes();
          }}
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
            onClick={() => {
              setActiveMenu((prev) => !prev);
              closeAllOpenRecipes();
            }}
          />

          <button
            className="add-food-btn"
            type="button"
            onClick={() => {
              setShowFoodForm((prev) => ({ ...prev, form: !prev.form }));
              setActiveMenu((prev) => !prev);
              closeAllOpenRecipes();
              toggleBodyOverFlow();
            }}
          >
            + AddFood
          </button>

          <a href="#App">
            <button
              id="foods-btn"
              type="button"
              onClick={() => {
                setActiveMenu((prev) => !prev);
                closeAllOpenRecipes();
                navigate('/');
              }}
            >
              FOODS
            </button>
          </a>

          <a href="#App">
            <button
              id="foods-btn"
              type="button"
              onClick={() => {
                setActiveMenu((prev) => !prev);
                closeAllOpenRecipes();
                navigate('/favorites');
              }}
            >
              FAVORITES
            </button>
          </a>

          <a href="#footer">
            <button
              id="contact-btn"
              type="button"
              onClick={() => {
                setActiveMenu((prev) => !prev);
                closeAllOpenRecipes();
              }}
            >
              CONTACT
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}
