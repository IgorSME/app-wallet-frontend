import styled from '@emotion/styled';
import {
  LoginFormStyled,
  LoginSideBareStyled,
} from 'components/LoginForm/LoginForm.styled';

import RegisterDecorationImgTablet from 'images/register/Register_tablet_decoration_img.png';
import RegisterDecorationImgDesktop from 'images/register/Register_desktop_decoration_img.png';

export const RegisterFormStyled = styled(LoginFormStyled)`
  @media (min-width: 768px) {
    height: 616px;
  }
`;

// export const RegisterContainerStyled = styled(LoginContainerStyled)`
//   @media screen and (min-width: 768px) {
//     padding-bottom: 48px;
//     background-image: none;
//     background-image: url(${RegisterDecorationImgTablet});
//   }
//   @media screen and (min-width: 1280px) {
//     padding-bottom: 0;
//     background-image: none;
//   }
// `;

export const RegisterSideBareStyled = styled(LoginSideBareStyled)`
  @media screen and (min-width: 768px) {
    width: 274px;
    height: 250px;

    background-image: url(${RegisterDecorationImgTablet});
  }

  @media screen and (min-width: 1280px) {
    width: 452px;
    height: 413px;

    margin-right: 31;
    margin-bottom: 32px;

    background-image: url(${RegisterDecorationImgDesktop});
  }
`;
