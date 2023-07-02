import styled from '@emotion/styled';

const StyledLandingNav = styled.nav`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;

  .nav_container {
    background-color: transparent;
    margin: 0 auto;
    width: min(97%, 1500px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: fit-content;
      gap: 1.2rem;

      li {
        font-size: 1.3rem;
      }
    }
  }
`;

export default StyledLandingNav;
