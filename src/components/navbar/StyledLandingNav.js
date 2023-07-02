import styled from '@emotion/styled';

const StyledLandingNav = styled.nav`
  background-color: var(--main-bg);
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

  @media only screen and (max-width: 600px) {
    .nav_container {
      ul {
        position: fixed;
        z-index: 4;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 400px;
        padding: 0 0 20px;
        flex-direction: column;
        background-color: #111111;
        gap: 0;
        transition: 0.3s;
        transform: translateY(${({ openMenu }) => (openMenu ? 0 : '-120%')});

        li {
          width: 100%;
          text-align: left;
          font-size: 1.3rem;
          color: #fff;
          font-weight: 600;
          padding: 20px 10px;
        }
      }
    }
  }
`;

export default StyledLandingNav;
