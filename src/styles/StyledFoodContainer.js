import styled from 'styled-components';

const StyledFoodContainer = styled.div`
  background-color: brown;
  display: flex;
  align-items: center;
  width: 90vw;
  max-width: 1000px;
  height: fit-content;
  margin: 2rem auto;

  @media only screen and(max-width: 768px) {
    background-color: gray;
  }
`;

export default StyledFoodContainer;
