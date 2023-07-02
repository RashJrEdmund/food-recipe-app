/* eslint-disable react/prop-types */
import styled from '@emotion/styled';

export function Header2Atom({ text, color, width, size }) {
  const StyledHeaderAtom = styled.h2`
    color: ${color || '#111111'};
    width: ${width || 'fit-content'};
    font-size: ${size || 'unset'};
  `;

  return <StyledHeaderAtom>{text}</StyledHeaderAtom>;
}

export function ButtonAtom({
  text,
  action,
  bg,
  color,
  size,
  weight,
  padding,
  radius,
}) {
  const StyledAtomBtn = styled.button`
    background-color: ${bg || '#f2f2f2'};
    color: ${color || '#111111'};
    font-size: ${size || 'unset'};
    font-weight: ${weight || 600};
    padding: ${padding || '12px 17px'};
    border-radius: ${radius || '5px'};
  `;

  return (
    <StyledAtomBtn type="button" onClick={action}>
      {text}
    </StyledAtomBtn>
  );
}
