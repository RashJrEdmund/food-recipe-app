import styled from '@emotion/styled';

const StyledLandingHero = styled.section`
  background-color: #111111;
  color: #f2f2f2;
  display: flex;
  align-items: flex-start;
  height: fit-content;
  margin: 0 auto 1.5rem;
  width: var(--general-min-max-width);
  padding: 70px var(--general-padding);

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
`;

export default StyledLandingHero;
