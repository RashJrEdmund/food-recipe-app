import styled from 'styled-components';

const StyledFoodContainer = styled.div`
  background-color: brown;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  /* max-width: 1000px; */
  height: fit-content;
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
    z-index: 1;

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
        z-index: 2;
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
        border: none;
        width: fit-content;
        height: fit-content;
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
    }

    .food-image {
      width: 100%;
      min-height: 245px;
    }

    .action-btns {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      margin: 1.5rem auto 0;

      button {
        border: none;
        width: fit-content;
        height: fit-content;
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

    .see-recipe {
      border: none;
      width: fit-content;
      height: fit-content;
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

  @media only screen and(max-width: 768px) {
    background-color: gray;
  }
`;

export default StyledFoodContainer;
