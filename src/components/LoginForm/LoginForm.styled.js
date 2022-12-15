import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

import {
  ButtonStyled,
  ContainerStyled,
} from 'components/common/commonComponents.styled';

import DecorationImgTablet from 'images/login/Login_tablet_decoration_img.png';
import DecorationImgDesktop from 'images/login/Login_desktop_decoration_img.png';

export const LoginSectionStyled = styled.section`
  /* background-color: rgb(231, 234, 242); */
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  svg {
    width: 120px;
    height: auto;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 768px) {
    min-height: 1028px;

    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1152px) {
    min-height: 720px;
    flex-direction: row;
    align-items: center;
  }
`;

export const LoginContainerStyled = styled(ContainerStyled)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
    padding-top: 60px;
  }

  @media screen and (min-width: 1152px) {
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 43%;
    margin: 0;
    padding: 0;
  }
`;

export const LoginSideBareStyled = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 250px;

    margin-right: 40px;

    display: flex;
    justify-content: center;

    background-image: url(${DecorationImgTablet});
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  @media screen and (min-width: 1152px) {
    width: 435px;
    height: 420px;

    margin-right: 38;
    margin-left: auto;
    margin-bottom: 28px;

    background-image: url(${DecorationImgDesktop});
  }
`;

export const LoginTitle = styled.h2`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    z-index: 3;

    font-family: ${p => p.theme.fonts.title};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.normal};
  }
  @media screen and (min-width: 1152px) {
    margin-right: 162px;
    margin-left: auto;
  }
`;

export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: ${p => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    position: relative;
    margin: 0 auto;
    border-radius: ${p => p.theme.radii.normal};
    padding: 40px 58px 66px 65px;
    width: 533px;
    height: 468px;
  }

  @media screen and (min-width: 1152px) {
    z-index: 10;
    margin-left: 107px;
  }
`;

export const LoginInputWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 40px;
  position: relative;
  svg {
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0;
    left: 10px;
    top: 2px;
    fill: #e0e0e0;
  }
`;

export const LoginFormLabelStyled = styled.label``;

export const LoginFormInputStyled = styled(Field)`
  padding-bottom: 8px;
  padding-left: 54px;
  margin-bottom: 0;
  flex-grow: 1;
  border: none;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.44;
  &::placeholder {
    color: #e0e0e0;
  }
  &:hover,
  :focus {
    outline: none;
  }
`;

export const LoginButtonSubmitStyled = styled(ButtonStyled)`
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const NavLinkBtn = ButtonStyled.withComponent(NavLink);

export const LoginRegisterLink = styled(NavLinkBtn)`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const BlurBackGround = styled.div`
  @media screen and (min-width: 1152px) {
    z-index: 3;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 57vw;
    height: 100vh;

    background-color: ${p => p.theme.colors.homeBackground};
    backdrop-filter: blur(25px);
  }
`;

export const BlurBackGroundOpacity = styled.div`
  display: none;
  @media screen and (min-width: 1152px) {
    display: block;
    width: 731px;
    height: 720px;
    background-color: ${p => p.theme.colors.homeBackground};
  }
`;

export const LoginErrorText = styled.p`
  color: red;
  position: absolute;
  top: 38px;
  left: 34px;
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.normal};
`;

export const LoginFormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <LoginErrorText>{message}</LoginErrorText>}
    />
  );
};
