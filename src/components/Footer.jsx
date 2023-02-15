import React from 'react';
import styled from 'styled-components';

const StyleFooter = styled.div`
  background-color: brown;
  width: 100%;
  height: fit-content;
`;

export default function Footer() {
  return (
    <StyleFooter>
      <div>go home</div>
      <div>come home</div>
    </StyleFooter>
  );
}
