import styled from '@emotion/styled';
import React from 'react';
import { BANNER_IMAGE } from '../../../services/constants';

const StyledLoading = styled.main`
  background: linear-gradient(to bottom, #111111ef, #111111ef, #111111ef),
    url(${BANNER_IMAGE.landing});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading_container {
    background: linear-gradient(to bottom, #11111196, #11111196, #11111196),
      url(${BANNER_IMAGE.loading});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 10px;

    width: min(97vw, 500px);
    height: fit-content;
    padding: 15px;
    min-height: 400px;
    letter-spacing: 3px;
    white-space: nowrap;

    .header {
      color: #ff9d00;
      font-weight: 700;
      font-size: 4.1rem;
      margin: 0 0 10px;
      font-family: 'Caveat'; // an import font-family in index.css
    }

    .loader {
      margin: 10px 0 0;
      font-size: 1.1rem;
      position: relative;
      color: var(--card-bg);

      &::before {
        content: '';
        margin: 0;
        position: absolute;
        right: calc(100% + 10px);
        top: calc(25% - 0);
        border-top: 10px solid #feba49;
        border-bottom: 10px solid #feba49;
        border-right: 10px solid #241e45;
        border-left: 10px solid #241e45;
        border-radius: 50px;

        animation: Loading 0.6s linear infinite;
      }
    }

    @keyframes Loading {
      0% {
        transform: rotate(10deg);
      }
      25% {
        transform: rotate(160deg);
      }
      50% {
        transform: rotate(250deg);
      }
      75% {
        transform: rotate(300deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .loading_container {
      width: min(97vw, 400px);
      min-height: 300px;
    }
  }
`;

export default function Loading() {
  return (
    <StyledLoading>
      <div className="loading_container">
        <span className="header">Food App</span>
        <span className="loader">Loading...</span>
      </div>
    </StyledLoading>
  );
}
