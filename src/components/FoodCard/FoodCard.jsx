/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionsIcon, FavortieIcon } from '../atoms/Icons';
import { useFoodContext } from '../../context/MyContext';
import useAlert from '../../hooks/UseAlert';

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
      width: min(100%, 100px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      margin: 15px 0 0;
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

export default function FoodCard({
  id,
  name,
  description,
  img,
  fav,
  allowInteraction,
}) {
  const navigate = useNavigate();
  const { updateFavorite } = useFoodContext();

  const { AlertComponent, displayAlert, alertMsg } = useAlert();

  const addNewFavorite = () => {
    updateFavorite(id);
    displayAlert(
      `${name.split(/[^a-zA-Z]/).shift()} ${
        fav ? 'removed from ' : 'added to '
      } favorites`
    );
  };

  const goToFoodDetails = () => {
    navigate(`/foods/details/${name}`);
  };

  return (
    <>
      {alertMsg.show && <AlertComponent />}

      <StyledFoodCard url={img}>
        <div className="food_image" />
        <div className="food_section_2">
          <h3 className="food_name">{name || 'FOOD NAME'}</h3>

          <p className="food_description">
            {description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam doloremque recusandae. Harum nobis dicta inventore est natus optio repudiandae sint libero nam. Officia, ad impedit voluptatem nihil dicta at!'}
          </p>

          {allowInteraction && (
            <div className="food_cta">
              <span className="heart" onClick={addNewFavorite}>
                <FavortieIcon
                  fav={fav}
                  title={`${fav ? 'remove from ' : 'add to '} favorites`}
                />
              </span>

              <span className="see_more" onClick={goToFoodDetails}>
                <ActionsIcon title="more" />
              </span>
            </div>
          )}
        </div>
      </StyledFoodCard>
    </>
  );
}
