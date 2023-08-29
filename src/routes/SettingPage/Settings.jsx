/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import StyledSettings from './StyledSettings';
import { Header2Atom } from '../../components/atoms/Atoms';
import FoodData from '../../data/Data.json';
import { LOCALSTORAGE } from '../../services/storage';
import { useFoodContext } from '../../context/FoodContext';
import {
  ResetAllIcon,
  ResetFoodIcon,
  ThemeIcon,
} from '../../components/atoms/icons/actions';
import { TOAST_TYPE } from '../../services/constants';

export default function User() {
  const { toastAlert, setFoodData } = useFoodContext();

  const navigate = useNavigate();

  const closeDialogue = () => navigate(-1, { replace: true });

  // navigate(-1) is equivalent to hitting the back button

  const resetFood = () => {
    ['foodData'].forEach((key) => LOCALSTORAGE.remove(key));
    LOCALSTORAGE.save('foodData', FoodData);
    setFoodData([...FoodData]);

    toastAlert('reset completed', { type: TOAST_TYPE.SUCCESS });
    closeDialogue();
  };

  const openDialogue = () => {
    navigate('/home/settings/reset');
  };

  const handleChangeTheme = () => {
    toastAlert('this feature is not yet available', {
      type: TOAST_TYPE.WARNING,
    });
  };

  const handleResetAll = () => {
    toastAlert('this feature is not yet available', {
      type: TOAST_TYPE.WARNING,
    });
  };

  const dialogueContext = React.useMemo(
    () => ({
      message2: 'you are about to reset all food data',
      message3: 'this action cannot be undone',
      agreeTxt: 'Reset All',
      fxntoCall: resetFood,
      closeDialogue,
    }),
    []
  );

  return (
    <>
      <Outlet context={dialogueContext} />

      <StyledSettings>
        <Header2Atom
          text="Settings"
          size="1.4rem"
          margin="5rem auto 2rem"
          weight="800"
        />

        <ul>
          <li onClick={handleChangeTheme}>
            <ThemeIcon /> change theme
          </li>

          <li title="restore all default food" onClick={openDialogue}>
            <ResetFoodIcon /> reset food data
          </li>

          <li onClick={handleResetAll}>
            <ResetAllIcon /> reset all data
          </li>
        </ul>
      </StyledSettings>
    </>
  );
}
