import styled from '@emotion/styled';
import { BANNER_IMAGE } from '../../services/constants';

const Styled404Page = styled.main`
  background-color: transparent;
  min-height: 75vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;

  .not_found_container {
    background: linear-gradient(to bottom, #11111196, #11111196, #11111196),
      url(${BANNER_IMAGE['404-page']});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 10px;
    white-space: nowrap;

    width: min(97vw, 600px);
    height: fit-content;
    min-height: 600px;
    padding: 15px;
    position: relative;

    .not_found_nav {
      position: absolute;
      top: 0;
      left: 0;
      margin: 15px;

      display: flex;
      align-items: center;
      width: fit-content;

      & button {
        color: #ddd;
        font-size: 1.1rem;
        transition: 300ms;
        border-bottom: 2px solid transparent;

        &:nth-of-type(2) {
          margin: 0 0 0 10px;
        }

        &:hover {
          border-bottom: 2px solid var(--secondary-bg);
        }
      }
    }

    .code {
      color: orange;
      font-size: 4rem;
      font-weight: 600;
      margin: 0 5px;
    }

    .text {
      color: #ddd;
      margin: 0 0 10px 0;
      margin: 0 5px;
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 600px) {
    .not_found_container {
      white-space: unset;

      width: min(97vw, 300px);
      height: fit-content;
      min-height: 300px;

      .code {
        font-size: 2.3rem;
      }

      .text {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Styled404Page;
