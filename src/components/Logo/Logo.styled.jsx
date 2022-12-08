import styled from '@emotion/styled';

export const LogoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15.56px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 181px;
    gap: 20px;
    height: 40px;
  }
`;

export const TextTitle = styled.h1`
  display: none;

  @media screen and (min-width: 768px) {
    font-family: ${props => props.theme.fonts.title};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.primaryText};
    line-height: ${props => props.theme.lineHeights.normal};
    display: flex;
    align-items: center;
  }
`;
