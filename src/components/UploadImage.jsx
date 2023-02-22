import React from 'react';
import '../styles/uploadImage.css';
import MyFoodContext from '../context/MyContext';

export default function UploadImage() {
  const { showFoodForm, setShowFoodForm, imagePath, setImagePath } =
    React.useContext(MyFoodContext);

  const handleUploadImage = (imageObj) => {
    const path = URL.createObjectURL(imageObj);
    setImagePath(path);
  };

  return (
    <div className="upload-image-container">
      <button
        className="open-add-image-btn"
        type="button"
        style={{
          backgroundColor: showFoodForm.uploadImg ? 'brown' : '#6ee374',
          color: showFoodForm.uploadImg ? '#fff' : '#000',
        }}
        onClick={() => {
          setShowFoodForm((prev) => ({
            ...prev,
            uploadImg: !prev.uploadImg,
          }));
          setImagePath(null);
        }}
      >
        {showFoodForm.uploadImg ? 'Close Image' : 'Add Image'}
      </button>

      {showFoodForm.uploadImg && (
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
            {imagePath && (
              <button
                className="addimg-clear-btn"
                type="button"
                onClick={() => setImagePath(null)}
              >
                clear Image
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
