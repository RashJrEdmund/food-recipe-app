import React from 'react';
import '../styles/hero.css';
import SearchForm from './SearchForm';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div id="hero-section">
      <Navbar />

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
