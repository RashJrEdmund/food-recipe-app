import styled from '@emotion/styled';
import banner from '../../assets/images/barner img.png';

const StyledLandingHero = styled.section`
  background: linear-gradient(to bottom, #11111156, #11111156, #11111156),
    url(${'https://media.istockphoto.com/id/1370772148/photo/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-spain.jpg?s=612x612&w=0&k=20&c=QJn62amhOddkJSbihcjWKHXShMAfcKM0hPN65aCloco=' ||
    banner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: #111111; */
  width: 100%;
  min-height: 95vh;

  .container {
    background: transparent;
    color: #f2f2f2;
    display: flex;
    align-items: flex-start;
    height: fit-content;
    width: var(--general-min-max-width);
    margin: 0 auto 1.5rem;
    padding: 80px var(--general-padding);

    .hero_col_1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      width: 100%;

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
