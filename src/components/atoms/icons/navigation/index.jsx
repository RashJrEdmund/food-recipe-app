import styled from '@emotion/styled';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
import { RxDotFilled } from 'react-icons/rx';
import { RiExternalLinkLine } from 'react-icons/ri';
import {
  IoCaretForwardOutline,
  IoCaretBackOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';

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
  color: ${({ color }) => color};
  font-size: 30px;
`;

export const DetailsIcon = styled(TbListDetails)`
  font-size: 30px;
`;

export const FowardIcon = styled(IoChevronForwardOutline)`
  color: ${({ iconcolor }) => iconcolor || '#111111'};
  font-size: 24px;
`;

export const NavigatorIcon = styled(RxDotFilled)`
  color: ${({ iconcolor }) => iconcolor || '#111111'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px' }) => margin};
  cursor: pointer;
`;

export const SwipeLeftIcon = styled(IoCaretBackOutline)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${({ iconcolor }) => iconcolor || '#111111'};
  font-size: ${({ size = '4rem' }) => size};
  cursor: pointer;
`;

export const SwipeRightIcon = styled(IoCaretForwardOutline)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: ${({ iconcolor }) => iconcolor || '#111111'};
  font-size: ${({ size = '4rem' }) => size};
  cursor: pointer;
`;

export const LinkIcon = styled(RiExternalLinkLine)`
  color: ${({ iconcolor }) => iconcolor || '#111111'};
  font-size: ${({ size = '1.5rem' }) => size};
  cursor: pointer;
`;
