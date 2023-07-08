import styled from '@emotion/styled';
import React from 'react';

const Styled404Page = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000cf;
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
    color: #ddd;
    font-size: 2.1rem;
    font-weight: 600;
    margin: 0 5px;
  }

  .text {
    margin: 0 0 10px 0;
    margin: 0 5px;
    font-size: 1.1rem;
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
