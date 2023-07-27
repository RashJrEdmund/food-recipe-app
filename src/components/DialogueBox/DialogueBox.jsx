import React from 'react';
import styled from '@emotion/styled';
import { useOutletContext } from 'react-router-dom';
import { Overlay } from '../atoms/Atoms';

const StyledDialogueDiv = styled.div`
  background: linear-gradient(to bottom, #000000ce, #000000ce, #000000ce);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: #f5f5f5;
  width: min(95vw, 340px);
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 1rem 10px;

  .dialogue-btns {
    width: min(100%, 200px);
    height: fit-content;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cancel-btn {
      background-color: #6ee374;
      color: #000;
      padding: 10px 15px;
      font-weight: 700;
    }

    .reset {
      background-color: #a52a2a;
      color: #f5f5f5;
      padding: 10px 15px;
      font-weight: 700;
    }
  }
`;

function DialogueBox() {
  const dialogueDetails = useOutletContext();
  /* dialogueDetails dialogue looks like this 
    {
        message1: string,
        message2: string,
        message3: string,
        agreeTxt: string,
        disagreeTxt: string,
        closeDialoue: () =>
        fxntoCall: () =>,
    }
   */

  return (
    <>
      <Overlay onClick={dialogueDetails?.closeDialoue} />

      <StyledDialogueDiv>
        <p>{dialogueDetails?.message1}</p>
        <p>{dialogueDetails?.message2}</p>
        <p>{dialogueDetails?.message3}</p>

        <div className="dialogue-btns">
          <button
            className="cancel-btn"
            type="button"
            onClick={dialogueDetails?.closeDialoue}
          >
            {dialogueDetails?.disagreeTxt || 'Cancel'}
          </button>

          <button
            className="reset"
            type="button"
            onClick={dialogueDetails?.fxntoCall}
          >
            {dialogueDetails?.agreeTxt || 'proceed'}
          </button>
        </div>
      </StyledDialogueDiv>
    </>
  );
}

export default DialogueBox;
