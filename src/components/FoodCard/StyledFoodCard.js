import styled from '@emotion/styled';

const StyledFoodCard = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 350px;
  height: fit-content;
  min-height: 370px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto 15px;
  border-radius: 10px 10px 15px 15px;

  .food_image {
    background: linear-gradient(to bottom, #11111156, #11111156, #11111156),
      url(${({ url }) => url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 240px;
    border-radius: 10px 10px 0 0;
  }

  .food_section_2 {
    background-color: var(--card-bg);
    border-radius: 0 0 10px 10px;
    color: #111111;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px 1.1rem 15px;
    width: 100%;
    position: relative;

    .food_name {
      font-weight: 800;
      margin: 0 0 5px;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .food_description {
      color: #606060;
      width: 100%;
      height: 55px;
      /* white-space: nowrap; */
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .food_cta {
      width: min(100%, 100px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      margin: 10px 0 0;
      border-radius: 0 0 10px 10px;

      .heart,
      .see_more {
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .food_cta {
      width: min(100%, 100px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      margin: 15px 0 0;
      border-radius: 0 0 10px 10px;

      .heart,
      .see_more {
        transition: 0.3s;

        &:hover {
          box-shadow: 0 0 10px #111111;
          border-radius: 5px;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    max-width: 97vw;

    .food_cta {
      max-width: 97vw;
    }
  }
`;

export default StyledFoodCard;
