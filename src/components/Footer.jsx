import React from 'react';
import '../styles/footer.css';
import MyData from '../data/Data.json';
import MyFoodContext from '../context/MyContext';
import AlertMessage from './AlertMessage';

export default function Footer() {
  const { setFoodData, resetDialogue, setResetDialogue, closeAllOpenRecipes } =
    React.useContext(MyFoodContext);

  const [showAlert, setShowAlert] = React.useState(false);

  const toggleAlert = () => {
    setShowAlert((prev) => !prev);

    setTimeout(() => {
      setShowAlert((prev) => !prev);
    }, 2000);
  };

  const handleRestoreDefault = () => {
    localStorage.clear();
    localStorage.setItem('MyData', JSON.stringify(MyData));
    localStorage.setItem('favorites', JSON.stringify([]));
    setFoodData([...JSON.parse(localStorage.getItem('MyData'))]);

    toggleAlert();
    setResetDialogue(false);
  };
  return (
    <div id="footer">
      {showAlert && <AlertMessage message="default state Restored" />}

      {resetDialogue && (
        <div className="dialogue-overlay">
          <div className="dialogue-div">
            <p>are you sure you want to restore default?</p>
            <p>all data will be set to original state</p>

            <div className="dialogue-btns">
              <button
                className="cancel-btn"
                type="button"
                onClick={() => setResetDialogue(false)}
              >
                Cancel
              </button>

              <button
                className="reset"
                type="button"
                onClick={handleRestoreDefault}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="footer-photo" />

      <div className="footer-btns">
        <a href="#hero-section">
          <button
            className="got-to-top"
            type="button"
            onClick={closeAllOpenRecipes}
          >
            TOP
          </button>
        </a>

        <a href="#App">
          <button
            className="reset-btn"
            type="button"
            onClick={() => {
              setResetDialogue(true);
              closeAllOpenRecipes();
            }}
          >
            restore Default
          </button>
        </a>
      </div>
    </div>
  );
}
