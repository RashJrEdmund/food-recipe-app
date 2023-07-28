import styled from '@emotion/styled';

const StyledLandingNav = styled.nav`
  background: transparent;
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
    padding: 0.6rem 0;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: fit-content;
      gap: 1.2rem;

      li {
        font-size: 1.3rem;
        color: var(--text-color);
        white-space: nowrap;

        &.current_route {
          color: var(--secondary-bg);
          position: relative;

          &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--secondary-bg);
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
            border-radius: 10px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    background-color: var(--main-bg);
    background-color: #111111;

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
          font-weight: 600;
          padding: 20px 10px;

          &.current_route {
            &::before {
              width: calc(100% - 20px);
              bottom: 0;
            }
          }
        }
      }
    }
  }
`;

export default StyledLandingNav;
