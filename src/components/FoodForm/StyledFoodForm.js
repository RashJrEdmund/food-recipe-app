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
  max-height: 96vh;
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
      align-items: flex-start;
      width: 100%;
      justify-content: space-between;

      .image_preview_span {
        background: url(${({ url }) => url});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      .cancel_btn {
        cursor: pointer;
        color: #a52a2a;
        font-weight: 600;
        width: fit-content;
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

    .image_upload_section {
      margin: 15px 0 0;
      display: flex;
      align-items: flex-start;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      .image_field {
        padding: 10px 5px;
        height: 30px;
        width: ${({ useUrl }) => (useUrl ? '100%' : 'fit-content')};
      }

      .switch_btwn_link {
        cursor: pointer;
        color: #1da1f2;
        text-decoration: underline;
        width: fit-content;
        white-space: nowrap;
        margin: 0 0 0 10px;
      }
    }

    .recipe_form {
      margin: 20px 0;
      display: flex;
      align-items: flex-start;
      width: 100%;

      align-items: center;

      input {
        width: 100%;
        height: 40px;
        padding: 10px 5px;
      }
    }

    .recipe_list {
      display: flex;
      align-items: flex-start;
      width: 100%;
      flex-direction: column;

      li {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;

        span {
          width: 95%;
          color: #ddd;
          word-break: break-all;
          height: fit-content;
          padding: 10px 0;
        }
      }
    }

    .submit_btn {
      width: 100%;
      height: 45px;
      font-weight: 600;
      font-size: 1.2rem;
      margin: 1rem 0 0;
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
