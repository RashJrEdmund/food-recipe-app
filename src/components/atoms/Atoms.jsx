/* eslint-disable react/prop-types */
import styled from '@emotion/styled';

export function Header2Atom({
  text,
  color,
  width,
  size,
  weight,
  align,
  margin,
  action,
}) {
  const StyledHeaderAtom = styled.h2`
    color: ${color || '#111111'};
    width: ${width || 'fit-content'};
    font-size: ${size || 'unset'};
    font-weight: ${weight || 'unset'};
    text-align: ${align || 'unset'};
    margin: ${margin || 'unset'};
    cursor: ${() => (action ? 'pointer' : 'default')};
  `;

  const handleClick = () => action && action();

  return <StyledHeaderAtom onClick={handleClick}>{text}</StyledHeaderAtom>;
}

export function Overlay({ action, index, opacity }) {
  const Styledoverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #1d243264;
    opacity: ${opacity || '0.3'};
    z-index: ${index || 2};
  `;

  return <Styledoverlay onClick={() => action()} />;
}
