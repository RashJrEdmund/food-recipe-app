import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';

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
  color: var(--card-bg);
  align-self: flex-end;
  margin: 10px 0;
  display: none;

  @media only screen and (max-width: 600px) {
    display: unset;
  }
`;

export const FavortieIcon = styled(AiFillHeart)`
  color: ${({ fav }) => (fav ? 'red' : '#111111')};
  font-size: 30px;
`;
