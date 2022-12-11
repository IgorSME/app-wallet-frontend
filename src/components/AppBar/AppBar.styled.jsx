import styled from '@emotion/styled';
import { ContainerStyled } from 'components/';

export const Header = styled.header`
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  /* width: 100%; */
  height: 60px;

  background-color: ${props => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    height: 80px;
  }
`;

export const Container = styled(ContainerStyled)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  gap: 8px;

  color: ${props => props.theme.colors.placeholder};

  @media screen and (min-width: 768px) {
    height: 30px;
    gap: 12px;
  }
`;

export const UserName = styled.p`
  min-width: 80px;

  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.normal};
  text-align: right;
`;

export const ExitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const ExitText = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-family: ${props => props.theme.fonts.primary};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.normal};
  }
`;

export const Divider = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 0px;
    height: 30px;
    outline: 1px solid #bdbdbd;
  }
`;
