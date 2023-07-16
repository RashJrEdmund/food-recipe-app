/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyledSettings from './StyledSettings';
import { Header2Atom } from '../../components/atoms/Atoms';
import FoodData from '../../data/Data.json';
import useDialogue from '../../hooks/useDialogue';
import {
  removeFromLocalStorage,
  saveToLocalStorage,
} from '../../services/utils';
import { useFoodContext } from '../../context/FoodContext';

export default function User({ setPathName }) {
  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const { displayAlert, setFoodData } = useFoodContext();

  const resetFood = () => {
    ['foodData'].forEach((key) => removeFromLocalStorage(key));
    saveToLocalStorage('foodData', FoodData);
    setFoodData([...FoodData]);

    displayAlert('reset completed');
  };

  const handleResetFood = () => {
    const options = {
      message2: 'you are about to reset all food data',
      message3: 'this action cannot be undone',
      agreeTxt: 'Reset All',
      fxntoCall: resetFood,
      show: false,
    };

    displayDialogue(options);
  };

  const handleChangeTheme = () => {
    displayAlert('this feature is not yet available');
  };

  const handleResetAll = () => {
    displayAlert('this feature is not yet available');
  };

  React.useEffect(() => setPathName(window.location.pathname), []); // helps for my 404 page

  return (
    <>
      {dialogueDetails.show && <DialogueComponent />}

      <StyledSettings>
        <Header2Atom
          text="Settings"
          size="1.4rem"
          margin="3rem auto 2rem"
          weight="800"
        />

        <ul>
          <li onClick={handleChangeTheme}>change theme</li>
          <li title="restore all default food" onClick={handleResetFood}>
            reset food data
          </li>

          <li onClick={handleResetAll}>reset all data</li>
        </ul>
      </StyledSettings>
    </>
  );
}
