/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import { DeleteIcon, EditIcon, FowardIcon } from './Icons';
import { BUTTON_ICON_TYPE } from '../../services/constants';

export default function ButtonAtom({
  text,
  action,
  bg,
  color,
  size,
  weight,
  padding,
  margin,
  radius,
  iconType,
  iconcolor,
}) {
  const StyledAtomBtn = styled.button`
    background-color: ${bg || '#f2f2f2'};
    color: ${color || '#111111'};
    font-size: ${size || 'unset'};
    font-weight: ${weight || 600};
    padding: ${padding || '12px 17px'};
    border-radius: ${radius || '5px'};
    margin: ${margin || 'unset'};
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const handleClick = () => action && action();

  const getIcon = () => {
    switch (iconType) {
      case BUTTON_ICON_TYPE.NEXT:
        return <FowardIcon iconcolor={iconcolor} />;
      case BUTTON_ICON_TYPE.EDIT:
        return <EditIcon iconcolor={iconcolor} />;
      case BUTTON_ICON_TYPE.DELETE:
        return <DeleteIcon iconcolor={iconcolor} />;
      default:
        return '';
    }
  };

  return (
    <StyledAtomBtn type="button" onClick={handleClick}>
      {text} {getIcon()}
    </StyledAtomBtn>
  );
}
