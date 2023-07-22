/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from '@emotion/styled';
import React from 'react';

const StyledImageUploadSection = styled.div`
  margin: 15px 0 0;
  display: flex;
  align-items: flex-start;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .image_field {
    padding: 10px 5px;
    height: 30px;
    width: ${({ useUrl }) => (useUrl ? '100%' : 'fit-content')};
  }

  .switch_btwn_link {
    cursor: pointer;
    color: #1da1f2;
    text-decoration: underline;
    width: fit-content;
    white-space: nowrap;
    margin: 0 0 0 10px;
  }
`;

export default function ImageUploadSection({
  useUrl,
  handleChange,
  setUseUrl,
}) {
  return (
    <StyledImageUploadSection useUrl={useUrl}>
      <input
        type={useUrl ? 'url' : 'file'}
        placeholder="example: https://imagepath.png"
        name="image_file"
        className="image_field"
        accept="image/jpeg image/png image/svg/ image/jpg image/ai image/tiff image/gif"
        onChange={handleChange}
      />

      <span
        className="switch_btwn_link"
        onClick={() => setUseUrl((prev) => !prev)}
      >
        {useUrl ? 'upload file' : 'use Url'} instead
      </span>
    </StyledImageUploadSection>
  );
}
