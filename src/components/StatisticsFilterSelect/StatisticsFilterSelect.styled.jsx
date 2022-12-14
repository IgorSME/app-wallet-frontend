import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: ${p => p.theme.spacing(5)};

  @media (min-width: 768px) {
    width: 336px;
    flex-direction: row;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 0;

    &:last-of-type {
      margin-left: ${p => p.theme.spacing(4)};
    }
  }
`;

export const SelectButton = styled.button`
  user-select: none;
  position: relative;

  padding: 0 20px;

  width: 100%;
  height: 50px;

  /* background-color: ${p => p.theme.colors.barBackground}; */
  color: ${p => p.theme.colors.primaryText};

  font-size: ${p => p.theme.fontSizes.s};
  text-align: left;

  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: ${p => p.theme.radii.large};

  &::first-letter {
    text-transform: uppercase;
  }

  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    width: 160px;
  }
  @media (min-width: 1279px) {
    width: 182px;
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

export const SelectList = styled.ul`
  z-index: 1;
  position: absolute;
  top: 54px;

  width: 280px;
  padding: 5px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 86px));
  grid-gap: 5px;

  background-color: ${p => p.theme.colors.selectMenuBackground};
  box-shadow: ${p => p.theme.shadows.selectMenu};
  border-radius: ${p => p.theme.radii.normal};
  backdrop-filter: blur(25px);

  @media (min-width: 768px) {
    width: 160px;
    display: block;
    text-align: left;
    padding-left: 20px;
  }
  @media (min-width: 1279px) {
    width: 182px;
  }
`;

export const SelectItem = styled.li`
  padding: 6px;

  /* font-family: ${p => p.theme.fonts.primary}; */
  /* font-weight: ${p => p.theme.fontWeights.bold}; */
  font-size: ${p => p.theme.fontSizes.s};
  /* line-height: ${p => p.theme.lineHeights.normal}; */
  cursor: pointer;

  color: ${p => p.theme.colors.primaryText};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.expense};
    background-color: ${p => p.theme.colors.barBackground};
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const OverlaySelect = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;
