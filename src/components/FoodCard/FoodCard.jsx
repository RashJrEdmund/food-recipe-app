/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { FavortieIcon } from '../atoms/Icons';

const StyledFoodCard = styled.div`
  background-color: #111111;
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
    padding: 15px 5px;
    width: 100%;

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
      width: 100%;
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
`;

export default function FoodCard({ name, description, img, fav }) {
  return (
    <StyledFoodCard url={img}>
      <div className="food_image" />
      <div className="food_section_2">
        <h3 className="food_name">{name || 'FOOD NAME'}</h3>

        <p className="food_description">
          {description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam doloremque recusandae. Harum nobis dicta inventore est natus optio repudiandae sint libero nam. Officia, ad impedit voluptatem nihil dicta at!'}
        </p>

        <div className="food_cta">
          <span className="heart">
            <FavortieIcon fav={fav} />
          </span>
          <span className="see_more">seem more</span>
        </div>
      </div>
    </StyledFoodCard>
  );
}
