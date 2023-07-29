import styled from '@emotion/styled';
import { BANNER_IMAGE } from '../../services/constants';

const StyledLanding = styled.main`
  background: linear-gradient(to bottom, #11111196, #11111196, #11111196),
    url(${BANNER_IMAGE.landing});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    background: transparent;
    color: #f2f2f2;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: fit-content;
    width: var(--general-min-max-width);
    margin: 0 auto;
    padding: 30px var(--general-padding);

    .top_section {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: flex-start;
      height: fit-content;

      .hero_col_1 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        width: 100%;
        min-height: 70vh;

        h1 {
          font-size: 3rem;
        }
      }

      .hero_col_2 {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;

        .hero_col_2_span {
          position: relative;
          width: 400px;
          height: 400px;
          background: url(${BANNER_IMAGE.landingSlides[1]});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 200px;

          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translate(-30px) scale(0.8);
            width: 130px;
            height: 130px;
            background: url(${BANNER_IMAGE.landingSlides[0]});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 150px;
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(30px);
            width: 150px;
            height: 150px;
            background: url(${BANNER_IMAGE.landingSlides[2]});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 150px;
          }
        }
      }
    }

    .cta_btns {
      align-self: flex-start;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      .top_section {
        flex-direction: column;

        .hero_col_2 {
          margin: 2rem auto 3rem;

          .hero_col_2_span {
            width: 300px;
            height: 300px;
            border-radius: 150px;

            &::before {
              width: 120px;
              height: 120px;
              border-radius: 150px;
            }

            &::after {
              width: 140px;
              height: 140px;
              border-radius: 150px;
            }
          }
        }
      }

      .cta_btns {
        align-self: flex-end;
        margin: 2rem 0 0;
      }
    }
  }
`;

export default StyledLanding;
