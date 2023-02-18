import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-food" />
      <a href="#hero-section">
        <button className="got-to-top" type="button">
          TOP
        </button>
      </a>
    </div>
  );
}
