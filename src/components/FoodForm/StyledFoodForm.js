import styled from '@emotion/styled';

const StyledFoodForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background-color: #111111;
  color: #f2f2f2;
  display: flex;
  align-items: flex-start;
  width: min(97vw, 700px);
  height: fit-content;
  /* max-height: 96vh; */
  overflow: auto;
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  .food_form {
    display: flex;
    align-items: flex-start;
    width: 100%;
    background-color: #111111;
    flex-direction: column;

    padding: 2rem 15px 3rem;

    .top_section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      justify-content: space-between;

      .cancel_btn {
        cursor: pointer;
        color: #f00000;
        font-weight: 600;
        width: fit-content;
        margin: 0 0 1rem;
      }
    }

    .name_label {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin: 20px 0 0;

      flex-direction: column;

      input {
        background-color: #111111;
        color: #ddd;
        height: 40px;
        width: 100%;
        margin: 10px 0 0;
        padding: 10px 5px;
      }
    }

    .description {
      display: flex;
      align-items: flex-start;
      width: 100%;
      min-height: 180px;
      margin: 20px 0 0;
      padding: 10px 5px;
    }

    .submit_btn {
      background-color: var(--secondary-bg);
      width: 100%;
      height: 45px;
      font-weight: 600;
      font-size: 1.2rem;
      margin: 1rem 0 0;
    }
  }

  @media only screen and (max-width: 768px) {
    top: 0;
    left: 0;
    transform: unset;
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
  }
`;

export default StyledFoodForm;
