import styled from '@emotion/styled';

const StyledSearchForm = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto 2rem;

  input {
    background-color: transparent;
    width: min(97vw, 300px);
    height: 50px;
    border: 1px solid var(--secondary-bg);
    color: var(--text-color);
    border-radius: 10px;
    padding: 10px;
  }
`;

export default StyledSearchForm;
