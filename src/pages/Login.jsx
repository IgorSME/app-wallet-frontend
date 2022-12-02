import {
  LoginButtonStyled,
  LoginContainerStyled,
  LoginSectionStyled,
} from 'components/LoginForm/LoginForm.styled';
import { ReactComponent as Logo } from 'images/logo.svg';

export default function Login() {
  return (
    <>
      <LoginSectionStyled>
        <LoginContainerStyled>
          <Logo />
          <LoginButtonStyled>Log in</LoginButtonStyled>
          <LoginButtonStyled>Register</LoginButtonStyled>
        </LoginContainerStyled>
      </LoginSectionStyled>
    </>
  );
}
