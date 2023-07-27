/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

export default function Overlay({ index }) {
  const StyledOverlay = styled.div`
    background: linear-gradient(to bottom, #00000083, #00000083, #00000083);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    z-index: ${index || 3};
  `;

  return <StyledOverlay />;
}
