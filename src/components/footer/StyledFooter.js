import styled from '@emotion/styled';
import { BANNER_IMAGE } from '../../services/constants';

const StyledFooter = styled.footer`
  border-top: 1px solid #808080;
  background-color: transparent;
  color: var(--text-color);
  display: flex;
  align-items: flex-start;
  width: min(100%, 1500px);
  height: fit-content;
  min-height: 150px;
  margin: 3rem auto 0;
  padding: 15px;

  .media_link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li {
      white-space: nowrap;
      width: fit-content;
      height: fit-content;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin: 0 0 1.3rem;
    }

    .author_holder {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media only screen and (min-height: 768px) {
    .media_link {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      li {
        transition: 400ms;
        position: relative;

        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 3px;
          background-color: var(--secondary-bg);
          opacity: 0;
          transition: opacity 300ms;
        }

        &::before {
          top: -5px;
          left: 0;
        }

        &::after {
          bottom: -5px;
          left: 0;
        }

        &:hover {
          &::before,
          ::after {
            opacity: 1;
          }
        }
      }
    }
  }

  @media only screen and (max-height: 768px) {
    .media_link {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 10px;
    }
  }
`;

export const StyledAuthor = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: fit-content;
  font-weight: 600;
  cursor: pointer;

  .author_img {
    background-color: grey;
    background-image: url(${BANNER_IMAGE.authorimage});
    background-size: cover;
    background-position: center;
    height: 35px;
    width: 35px;
    border-radius: 20px;
    margin: 0 0 0 10px;
  }
`;

export default StyledFooter;
