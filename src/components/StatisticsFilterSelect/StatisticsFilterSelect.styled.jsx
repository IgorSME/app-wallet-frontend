import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: ${p => p.theme.spacing(5)};

  @media (min-width: 768px) {
    width: 336px;
    display: inline-block;
  }
  @media (min-width: 1279px) {
    width: 395px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${p => p.theme.spacing(5)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SelectStyled = styled.select`
  width: 280px;
  height: 50px;

  padding: 0 20px;

  outline: none;
  appearance: none;

  font-size: ${p => p.theme.fontSizes.s};

  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: ${p => p.theme.radii.large};

  @media (min-width: 768px) {
    width: 160px;
    display: inline-block;
  }
  @media (min-width: 1279px) {
    width: 182px;
    width: 395px;
  }
`;

export const IconStyled = styled.svg`
  width: 18px;
  height: 9px;

  position: absolute;
  /* stroke: currentColor;
  fill: none; */

  top: 20px;
  right: 20px;
`;

export const OptionStyled = styled.option`
  background-color: blue;
`;
