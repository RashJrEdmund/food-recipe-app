import styled from '@emotion/styled';

const StyledFoodForm = styled.div`
  /* background: linear-gradient(to bottom, #11111156, #11111156, #11111156),
      url(${({ url }) => url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
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
  margin: 1rem auto;

  .food_form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .cta_btns {
      align-self: flex-start;
    }
  }

  @media only screen and (max-width: 768px) {
    /* .food_form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      .cta_btns {
        align-self: flex-start;
      }
    } */
  }
`;

export default StyledFoodForm;
