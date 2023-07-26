import styled from '@emotion/styled';
import { BANNER_IMAGE } from '../../services/constants';

const StyledLandingHero = styled.section`
  background: linear-gradient(to bottom, #11111156, #11111156, #11111156),
    url(${BANNER_IMAGE});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;

  .container {
    background: transparent;
    /* background-color: green; */
    color: #f2f2f2;
    display: flex;
    align-items: flex-start;
    height: fit-content;
    width: var(--general-min-max-width);
    margin: 0 auto;
    padding: 30px var(--general-padding);

    .hero_col_1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      width: 100%;

      h1 {
        font-size: 3rem;
      }

      .cta_btns {
        align-self: flex-start;
      }
    }

    .hero_col_2 {
      width: 100%;
      min-height: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero_col_2 {
      display: none;
    }
  }
`;

export default StyledLandingHero;
