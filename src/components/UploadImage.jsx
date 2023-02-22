import React from 'react';
import MyFoodContext from '../context/MyContext';

export default function UploadImage() {
  const { imagePath, setImagePath } = React.useContext(MyFoodContext);

  const handleUploadImage = (imageObj) => {
    const path = URL.createObjectURL(imageObj);
    setImagePath(path);
  };

  return (
    <div className="image-section">
      <input
        type="file"
        className="image_input"
        placeholder="add an image"
        accept="image/jpeg, image/png, image/jpg, image/svg"
        onChange={(e) => {
          handleUploadImage(e.target.files[0]);
        }}
      />

      <div className="remImg-section">
        <div
          className="output_image"
          style={{ backgroundImage: `URL(${imagePath})` }}
        />
        <button
          className="addimg-clear-btn"
          type="button"
          onClick={() => setImagePath('')}
        >
          clear Image
        </button>
      </div>
    </div>
  );
}
