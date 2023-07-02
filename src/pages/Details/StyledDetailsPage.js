import styled from '@emotion/styled';

const StyledDetailsPage = styled.main`
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  margin: 0 auto;

  .food_container {
    width: min(97%, 1000px);
    height: fit-content;
    margin: 0 auto;
  }
`;

export default StyledDetailsPage;
