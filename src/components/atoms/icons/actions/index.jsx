import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiEdit } from 'react-icons/fi';
import { RxReset } from 'react-icons/rx';
import { VscColorMode } from 'react-icons/vsc';
import {
  MdDelete,
  MdAddBox,
  MdLockReset,
  MdOutlineCancel,
} from 'react-icons/md';

export const MenuIcon = styled(GiHamburgerMenu)`
  font-size: 50px;
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  display: none;

  @media only screen and (max-width: 600px) {
    display: unset;
  }
`;

export const DeleteIcon = styled(MdDelete)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: 30px;
`;

export const RemoveIcon = styled(MdOutlineCancel)`
  color: ${({ iconcolor }) => iconcolor || '#e00000'};
  font-size: ${({ size = '25px' }) => size};
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transform: translate(50%, -45%);
`;

export const ThemeIcon = styled(VscColorMode)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px 0 0' }) => margin};
  cursor: pointer;
`;

export const ResetFoodIcon = styled(RxReset)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px 0 0' }) => margin};
  cursor: pointer;
`;

export const ResetAllIcon = styled(MdLockReset)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px 0 0' }) => margin};
  cursor: pointer;
`;

export const EditIcon = styled(FiEdit)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
`;

export const AddIcon = styled(MdAddBox)`
  font-size: ${({ size = '50px' }) => size};
  color: ${({ color = '#ddd' }) => color};
  width: fit-content;
  align-self: flex-end;
  cursor: ${({ cursor = 'pointer' }) => cursor};

  & * {
    width: fit-content;
  }
`;
