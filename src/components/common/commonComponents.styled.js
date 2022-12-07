import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const ButtonStyled = styled.button`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.btn};
  color: ${p => p.theme.colors.btn};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
  text-transform: uppercase;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${p => p.theme.colors.secondaryText};
    border: 1px solid transparent;
    background-color: ${p => p.theme.colors.accent};
  }
`;
