import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const StyledAlertMessage = styled.div`
  @keyframes alertAnime {
    from {
      margin: 0;
    }
    to {
      margin: 3rem auto;
    }
  }

  animation-name: alertAnime;
  animation-duration: 0.5s;

  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  margin: 3rem auto;
  padding: 1rem;
  z-index: 10;

  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;

  p {
    color: #fff;

    &::before {
      content: ' ';
      position: absolute;
      bottom: calc(100% - 14.5px);
      background-color: #000;
      border-left: 1px solid gray;
      border-top: 1px solid gray;
      transform: rotate(45deg);
      height: 30px;
      width: 30px;
      z-index: -1;
    }
  }
`;

const useAlert = () => {
  const [alertMsg, setAlertMsg] = useState({
    message: '',
    show: false,
  });

  function AlertComponent() {
    return (
      <StyledAlertMessage>
        <p>{alertMsg.message}</p>
      </StyledAlertMessage>
    );
  }

  useEffect(() => {
    let IntId = 0;
    if (alertMsg.message.trim()) {
      IntId = setTimeout(() => {
        setAlertMsg(() => ({ message: '', show: false }));
      }, 2000);
    }

    return () => clearInterval(IntId);
  }, [alertMsg.message]);

  const displayAlert = (msg) => {
    setAlertMsg(() => ({ message: msg, show: true }));
  };

  return { AlertComponent, displayAlert, alertMsg };
};

export default useAlert;
