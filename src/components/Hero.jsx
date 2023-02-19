import React from 'react';
import '../styles/hero.css';
import SearchForm from './SearchForm';

export default function Hero() {
  return (
    <div id="hero-section">
      <nav className="nav-bar">
        <button id="home-btn" type="button">
          HOME
        </button>
        <button id="foods-btn" type="button">
          FOODS
        </button>
        <button id="contact-btn" type="button">
          CONTACT
        </button>
      </nav>

      <div className="hero-header">
        <span className="span1">The</span>
        <span className="span2">Food Recipe App</span>
      </div>
      <div className="search-section">
        <SearchForm />
      </div>
    </div>
  );
}
