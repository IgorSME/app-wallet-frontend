import styled from '@emotion/styled';
import LoginPurpleBoob from 'images/Login_purple_boob.png';
import LoginPinkBoob from 'images/Login_pink_boob.png';
import DecorationImgTablet from 'images/Login_tablet_decoration_img.png';
import DecorationImgDesktop from 'images/Login_desktop_decoration_img.png';
import LoginPinkBoobDesktop from 'images/Login_pink_boob_desktop.png';
import {
  ButtonStyled,
  ContainerStyled,
} from 'components/common/commonComponents.styled';
import { Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

export const LoginSectionStyled = styled.section`
  background-color: #fff;
  svg {
    width: 120px;
    height: auto;
    margin-bottom: 60px;
  }
`;
export const LoginContainerStyled = styled(ContainerStyled)`
  padding: 107px 20px;
  @media screen and (min-width: 768px) {
    position: relative;
    background-color: ${p => p.theme.colors.background};
    padding-top: 360px;
    padding-bottom: 196px;
    background-image: url(${LoginPurpleBoob}), url(${LoginPinkBoob}),
      url(${DecorationImgTablet});
    background-repeat: no-repeat;
    background-position: 0 100%, 100% 0, 114px 60px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    padding: 0;
    background-image: none;
  }
`;

export const LoginFormStyled = styled(Form)`
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 58px 66px 65px;
    background-color: ${p => p.theme.colors.barBackground};
    border-radius: ${p => p.theme.radii.normal};
    @media screen and (min-width: 1280px) {
      position: absolute;
      z-index: 3;
      top: 136px;
      right: 91px;
      height: 468px;
      width: 533px;
    }
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

export const LoginTitle = styled.h2`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    z-index: 3;
    top: 167px;
    left: 414px;
    font-family: ${p => p.theme.fonts.title};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.normal};
  }
  @media screen and (min-width: 1280px) {
    top: 598px;
    left: 200px;
  }
`;

export const LoginSideBareStyled = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    position: relative;
    z-index: 2;
    width: 549px;
    height: 720px;
    background-color: #e7eaf2;
    background-image: url(${DecorationImgDesktop}), url(${LoginPurpleBoob});
    background-repeat: no-repeat;
    background-position: 76px 150px, 0 100%;
  }
`;

export const BlurBackGround = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    width: 731px;
    height: 720px;
    background-image: url(${LoginPinkBoobDesktop});
    background-repeat: no-repeat;
    background-position: 100% 0;
    filter: blur(15px);
  }
`;

export const BlurBackGroundOpacity = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
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
