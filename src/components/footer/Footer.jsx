import React from 'react';
import StyledFooter from './StyledFooter';

export default function Footer() {
  return (
    <StyledFooter>
      <span className="logo">Logo</span>

      <ul>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </StyledFooter>
  );
}
