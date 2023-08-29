import styled from '@emotion/styled';

const StyledSampleFoods = styled.section`
  background-color: transparent;
  color: #111111;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  min-height: 60vh;
  margin: 0 auto;
  width: var(--general-min-max-width);
  padding: var(--general-padding);

  h2 {
    padding: 0 0 1rem;
    width: 100%;
    text-align: center;
  }

  .cards {
    height: fit-content;
    min-height: 550px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin: 1rem auto;
  }

  .fall_back_text {
    color: var(--secondary-bg);
    text-align: center;
    margin: 2rem 0;
    font-weight: 600;
    width: var(--general-min-max-width);
    min-height: 450px;
  }
`;

export default StyledSampleFoods;
