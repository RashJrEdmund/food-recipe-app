import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiFillHeart, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MdDelete, MdOutlineArrowForwardIos, MdAddBox } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

export const MenuIcon = styled(GiHamburgerMenu)`
  font-size: 50px;
  color: #111111;
  display: none;

  @media only screen and (max-width: 600px) {
    display: unset;
  }
`;

export const OpenMenuIcon = styled(HiMenuAlt3)`
  font-size: 50px;
  color: #fff;
  align-self: flex-end;
  margin: 10px 0;
  display: none;

  @media only screen and (max-width: 600px) {
    display: unset;
  }
`;

export const FavortieIcon = styled(AiFillHeart)`
  color: ${({ fav }) => (fav ? '#f00' : '#111111')};
  font-size: 30px;
`;

export const ActionsIcon = styled(AiOutlineAppstoreAdd)`
  font-size: 30px;
`;

export const DeleteIcon = styled(MdDelete)`
  color: ${({ iconcolor }) => iconcolor || '#111111'};
  font-size: 30px;
`;

export const FowardIcon = styled(MdOutlineArrowForwardIos)`
  color: ${({ iconcolor }) => iconcolor || '#111111'};
  font-size: 24px;
`;

export const EditIcon = styled(FiEdit)`
  color: ${({ iconcolor }) => iconcolor || '#111111'};
`;

export const AddIcon = styled(MdAddBox)`
  font-size: ${({ size = '50px' }) => size};
  color: ${({ color = '#ddd' }) => color};
  width: ${({ width = 'fit-content' }) => width};
  height: ${({ height = 'fit-content' }) => height};
  cursor: ${({ cursor = 'pointer' }) => cursor};
`;
