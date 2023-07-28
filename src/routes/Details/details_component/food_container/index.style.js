import styled from '@emotion/styled';

const StyledDetailsFoodContainer = styled.section`
  background-color: var(--main-bg);
  box-shadow: 0 0 10px #111111;
  width: min(97%, 1000px);
  height: fit-content;
  min-height: 450px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;

  .food_image {
    position: relative;
    background: linear-gradient(to bottom, #11111126, #11111126, #11111126),
      url(${({ url }) => url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 600px;

    .external_link {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 10px;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      cursor: pointer;
      color: #fff;
    }
  }

  .food_col_2 {
    width: min(100%, 600px);
    word-wrap: break-word;

    .description {
      word-wrap: break-word;
      color: var(--dark-bg);
      padding: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
    }
  }

  @media only screen and (max-width: 900px) {
    .food_image {
      min-height: 600px;
    }
  }

  @media only screen and (max-width: 600px) {
    box-shadow: 0 0 10px #111111;
    width: min(97%, 1000px);
    height: fit-content;
    min-height: 50vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .food_image {
      min-height: 350px;

      .external_link {
        margin: 5px;
      }
    }

    .food_col_2 {
      width: 100%;
      background: none;
    }
  }
`;

export default StyledDetailsFoodContainer;
