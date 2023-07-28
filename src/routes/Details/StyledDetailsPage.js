import styled from '@emotion/styled';

const StyledDetailsPage = styled.main`
  background-color: #d7d7d7d7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  margin: 0 auto;
  padding: 3rem 0 10px;

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
        box-shadow: 0 0 5px #111111;
        margin: 5px 0 10px;
        padding: 1rem 10px;
        cursor: unset;
        color: #111111;
      }
    }
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
`;

export default StyledDetailsPage;
