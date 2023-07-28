import styled from '@emotion/styled';
import React from 'react';
import { BANNER_IMAGE } from '../../../services/constants';

const Styled404Page = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom, #11111196, #11111196, #11111196),
    url(${BANNER_IMAGE[404]});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 10px;
  white-space: nowrap;

  width: min(97vw, 400px);
  height: fit-content;
  padding: 15px;
  min-height: 300px;

  .code {
    color: orange;
    font-size: 2.3rem;
    font-weight: 600;
    margin: 0 5px;
  }

  .text {
    color: #ddd;
    margin: 0 0 10px 0;
    margin: 0 5px;
    font-size: 1.2rem;
  }
`;

export default function NotFound() {
  return (
    <Styled404Page>
      <span className="code">404</span>

      <span className="text">Page Not Found</span>
    </Styled404Page>
  );
}
