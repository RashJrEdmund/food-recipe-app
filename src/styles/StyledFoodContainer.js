import styled from 'styled-components';

const StyledFoodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
  min-height: 500px;
  margin: 2rem auto;

  .food-div {
    background-color: #cccccc;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 10px;
    margin: 1rem auto;
    max-width: 350px;
    width: 100%;
    height: fit-content;
    border-radius: 20px 0 0;
    box-shadow: 0 0 10px #222;
    z-index: 0;

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
        font-size: 1.3rem;
        margin: 1rem 0;
        border-bottom: 1px solid grey;
        padding-bottom: 10px;
        width: fit-content;
      }

      ol {
        margin: 1.3rem auto;
        padding-left: 1.4rem;
        width: 100%;

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

      .update-recipe-btn {
        background-color: #a5a5a5;
        font-weight: 650;
        padding: 10px;
        border-radius: 10px;
        align-self: flex-end;
        transition: 0.5s;
        margin: 1rem 0 0;

        &:hover {
          box-shadow: 0 0 10px #222;
        }
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

    .action-btns {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      margin: 2.2rem auto 0;

      button {
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 600;
        font-size: 1.05rem;
        transition: 0.5s;

        &:hover {
          box-shadow: 0 0 10px #222;
        }
      }

      .add-btn {
        background-color: #6ee374;
      }

      .del-btn {
        background-color: #ec5766;
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

  @media only screen and (max-width: 768px) {
    gap: 0 1rem;
    grid-template-columns: repeat(2, 1fr);

    .food-div {
      .food-image {
        &:hover {
          transform: scale(1);
        }
      }

      .food-title {
        &:hover {
          color: #000;
          transform: scale(0);
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default StyledFoodContainer;
