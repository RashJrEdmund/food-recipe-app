import styled from '@emotion/styled';

const StyledDetailsPage = styled.main`
  background-color: #d7d7d7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  margin: 0 auto;
  padding: 3rem 0 10px;

  .food_container {
    background-color: brown;
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
      background: linear-gradient(to bottom, #11111126, #11111126, #11111126),
        url(${({ url }) => url});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      min-height: 600px;
    }

    .description {
      width: 100%;
      word-wrap: break-word;
      padding: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
    }
  }

  .section_2_recipe {
    width: min(97%, 1000px);
    margin: 2rem auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;

    ul {
      width: 100%;
      height: fit-content;
      min-height: 300px;

      .food_step {
        background-color: transparent;
        box-shadow: 0 0 10px #111111;
        margin: 5px 0 10px;
        padding: 1rem 10px;
        cursor: unset;
        color: #111111;
      }
    }
  }

  .food_details_cta {
    width: min(97%, 1000px);
    margin: 2rem auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
  }

  @media only screen and (min-width: 1100px) {
    .section_2_recipe {
      ul {
        li {
          list-style: decimal-leading-zero;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .food_container {
      background-color: brown;
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
        background: linear-gradient(to bottom, #11111126, #11111126, #11111126),
          url(${({ url }) => url});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 600px;
      }
    }
  }
`;

export default StyledDetailsPage;
