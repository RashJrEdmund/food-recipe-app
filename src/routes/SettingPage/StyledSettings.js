import styled from '@emotion/styled';

const StyledSettings = styled.div`
  margin: 0 auto;
  width: var(--general-min-max-width);

  ul {
    width: 100%;
    min-height: 70vh;
    margin: 0 auto;

    li {
      cursor: pointer;
      margin: 10px 0;
      padding: 15px 10px;
      display: flex;
      align-items: center;
    }
  }

  @media only screen and (min-width: 768px) {
    ul {
      width: 100%;
      min-height: 70vh;
      margin: 0 auto;

      li {
        transition: 0.3s;

        &:hover {
          background-color: grey;
        }
      }
    }
  }
`;

export default StyledSettings;
