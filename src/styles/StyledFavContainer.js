import styled from 'styled-components';

const StyledFavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 2rem auto;

  a {
    background-color: red;
    align-self: flex-start;
    width: fit-content;
    height: fit-content;
    margin: 0 0 1rem;

    .fav-back-btn {
      background-color: brown;
      font-weight: 700;
      color: #fff;
      padding: 10px 16px;
      margin: 0;
    }
  }

  .fav-subcontainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: fit-content;
    min-height: 500px;
    margin: 0;

    .food-div {
      background-color: #cccccc;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 10px;
      margin: 1rem auto;
      max-width: 350px;
      width: Calc(100% - 1rem);
      height: fit-content;
      border-radius: 20px 0 0;
      box-shadow: 0 0 10px #222;

      .food-recipe {
        background-color: #f0b843;
        position: absolute;
        top: 0;
        right: 0;
        width: 90%;
        border-radius: 0 20px 20px 0;
        display: flex;
        flex-direction: column;
        padding: 10px 10px 1rem;
        opacity: 0;
        transition: 0.5s;
        z-index: -1;

        &.active-food-recipe {
          right: -90%;
          opacity: 1;
          z-index: 3;
        }

        h1 {
          margin: 1rem 0;
          width: fit-content;

          .piece-name {
            font-size: 1.3rem;
            border-bottom: 1px solid grey;
            padding-bottom: 10px;
          }

          .how-to-prep {
            font-size: 1rem;
            font-weight: 300;
            font-style: italic;
          }
        }

        ol {
          margin: 1.3rem auto;
          padding-left: 1.4rem;
          width: 100%;
          height: fit-content;
          max-height: 300px;
          overflow-y: auto;

          li {
            word-wrap: break-word;
            word-break: break-all;
            width: 100%;
            font-size: 1.2rem;
            font-style: italic;
            padding: 8px 0;
            margin: 0;
          }
        }

        .close-recipe-btn {
          background-color: brown;
          padding: 0;
          margin: 0;
          height: 40px;
          width: 40px;
          border-radius: 50px;
          cursor: pointer;
        }
      }

      .food-title {
        font-size: 1.2rem;
        border-bottom: 1px solid grey;
        margin: 0 0 10px;
        transition: 0.5s;
        cursor: default;

        &:hover {
          color: #ec5766;
          transform: scale(1.08);
        }
      }

      .food-image {
        background-size: cover;
        background-position: center;
        width: 100%;
        min-height: 245px;
        max-height: 300px;
        transition: 0.5s;
        z-index: 1;

        &:hover {
          transform: scale(1.03);
        }
      }

      .see-recipe-btn {
        padding: 5px 10px;
        margin: 2.5rem auto 0.5rem;
        border-radius: 5px;
        font-weight: 600;
        font-size: 1.05rem;
        transition: 0.5s;

        &:hover {
          box-shadow: 0 0 10px #222;
        }
      }
    }
  }

  @media only screen and (max-width: 850px) {
    .fav-subcontainer {
      gap: 0 1rem;
      grid-template-columns: repeat(2, 1fr);

      .food-div {
        .food-recipe {
          width: 100%;

          &.active-food-recipe {
            right: 0;
            opacity: 1;
            z-index: 3;
            transform: scale(1.08, 1.2);
          }

          .recipe-btns-holder {
            .close-recipe-btn {
              display: unset;
            }
          }
        }
        .food-image {
          &:hover {
            transform: scale(1);
          }
        }

        .food-title {
          &:hover {
            color: #000;
            transform: scale(1);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .fav-subcontainer {
      grid-template-columns: 1fr;

      .food-div {
        margin: 1rem auto;
      }
    }
  }
`;

export default StyledFavContainer;
