/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { AddIcon } from '../../atoms/Icons';
import StyledImagePreview from './Styles';

export default function ImagePreview({ imgArr = [], imgIndx = 0, setFood }) {
  //   const borderGradient = 'linear-gradient(to bottom, green, gold, #11111156)';

  const handleChangeImg = (indx) => {
    setFood((prev) => ({ ...prev, imgIndx: indx }));
  };

  return (
    <StyledImagePreview>
      <div className="image_container">
        {imgArr?.map((img, indx) => (
          <div
            key={img}
            className="image_preview_span"
            style={{
              backgroundImage: `url(${img})`,
              height: '100px',
              border:
                imgIndx === indx ? '2px solid gold' : '2px solid transparent',
            }}
            onClick={() => handleChangeImg(indx)}
          />
        ))}

        <div className="max_add_div">
          <span className="max_count">max accepted</span>
          <AddIcon color="green" />
        </div>
      </div>
    </StyledImagePreview>
  );
}
