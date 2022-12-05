import styled from '@emotion/styled';
import {
  LoginContainerStyled,
  LoginFormStyled,
  LoginSideBareStyled,
} from 'components/LoginForm/LoginForm.styled';
import RegisterDecorationImgTablet from 'images/Register_tablet_decoration_img.png';
import LoginPurpleBoob from 'images/Login_purple_boob.png';
import LoginPinkBoob from 'images/Login_pink_boob.png';
import RegisterDecorationImgDesktop from 'images/Register_desktop_decoration_img.png';

export const RegisterFormStyled = styled(LoginFormStyled)`
  @media screen and (min-width: 1280px) {
    height: 616px;
    top: 52px;
  }
`;

export const RegisterContainerStyled = styled(LoginContainerStyled)`
  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
    background-image: none;
    background-image: url(${LoginPurpleBoob}), url(${LoginPinkBoob}),
      url(${RegisterDecorationImgTablet});
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 0;
    background-image: none;
  }
`;

export const RegisterSideBareStyled = styled(LoginSideBareStyled)`
  @media screen and (min-width: 1280px) {
    background-image: none;
    background-image: url(${RegisterDecorationImgDesktop}),
      url(${LoginPurpleBoob});
  }
`;
