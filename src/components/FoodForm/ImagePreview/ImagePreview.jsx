/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import StyledImagePreview from './StyledImagePreview';
import {
  DEFAULT_FOOD_BG,
  MAX_NUMBER_OF_IMAGES,
} from '../../../services/constants';
import { AddIcon, RemoveIcon } from '../../atoms/icons/actions';

export default function ImagePreview({ imgArr = [], imgIndx = 0, setFood }) {
  const handleChangeImg = (indx) => {
    setFood((prev) => ({ ...prev, imgIndx: indx }));
  };

  const removeFoodImg = (indx) => {
    if (imgArr.length <= 1) return;

    const newImgArr = imgArr.filter((_, ind) => ind !== indx);

    if (!newImgArr[imgIndx]) {
      // checking if imgIndx is does not exixt in newImgArr and setting the last existing index as imgIndx
      setFood((prev) => ({
        ...prev,
        imgIndx: newImgArr.length - 1,
        img: newImgArr,
      }));
      return;
    }

    setFood((prev) => ({ ...prev, img: newImgArr }));
  };

  const addImgArrayLength = () => {
    if (imgArr.length >= MAX_NUMBER_OF_IMAGES) return;

    const prevImgArr = imgArr;
    prevImgArr.push(DEFAULT_FOOD_BG);
    setFood((prev) => ({ ...prev, img: prevImgArr }));
  };

  return (
    <StyledImagePreview>
      <div className="image_container">
        {imgArr?.map((img, indx) => (
          <div className="img_holder_div">
            <span
              key={img}
              className="image_preview_span"
              title="select this img"
              style={{
                backgroundImage: `url(${img})`,
                height: '100px',
                border: imgIndx === indx ? '2px solid gold' : '2px solid #000',
              }}
              onClick={() => handleChangeImg(indx)}
            />

            <RemoveIcon
              iconcolor={imgIndx === indx ? 'goldenrod' : 'steelblue'}
              title="remove this img?"
              onClick={() => removeFoodImg(indx)}
            />
          </div>
        ))}

        <div className="max_add_div">
          <span className="max_count">max accepted {MAX_NUMBER_OF_IMAGES}</span>
          <AddIcon
            color="steelblue"
            title={
              imgArr.length >= MAX_NUMBER_OF_IMAGES
                ? 'max number of images reached'
                : 'add new img?'
            }
            onClick={addImgArrayLength}
          />
        </div>
      </div>
    </StyledImagePreview>
  );
}
