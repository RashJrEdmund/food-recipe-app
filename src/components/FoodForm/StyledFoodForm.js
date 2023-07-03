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

  & * {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .food_form {
    background-color: #111111;
    flex-direction: column;

    padding: 2rem 15px 3rem;

    .top_section {
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
      margin: 20px 0 0;

      flex-direction: column;

      input {
        height: min(40px);
        margin: 10px 0 0;
        padding: 10px 5px;
      }
    }

    .description {
      min-height: 180px;
      margin: 20px 0 0;
      padding: 10px 5px;
    }

    .image_upload_section {
      margin: 15px 0 0;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      & * {
        display: unset;
      }

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

      align-items: center;

      input {
        height: 40px;
        padding: 10px 5px;
      }

      button {
        height: 35px;
        width: fit-content;
        white-space: nowrap;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
      }
    }

    .recipe_list {
      flex-direction: column;

      li {
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;

        & * {
          width: fit-content;
        }

        span {
          width: 100%;
          color: #ddd;
          word-break: break-all;
          height: fit-content;
          padding: 10px 0;
        }
      }
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
