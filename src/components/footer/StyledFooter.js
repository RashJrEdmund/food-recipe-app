import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  border-top: 1px solid #808080;
  background-color: transparent;
  color: var(--text-color);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: fit-content;
  min-height: 150px;
  margin: 3rem auto 0;
  width: min(100%, 1500px);
  padding: 15px;

  .logo {
    font-weight: 600;
    font-size: 20px;
  }

  ul {
    display: flex;
    align-items: center;

    li:nth-of-type(1) {
      margin: 0 1.3rem 0 0;
    }
  }
`;

export default StyledFooter;
