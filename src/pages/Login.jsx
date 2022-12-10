import LoginForm from 'components/LoginForm/LoginForm';
import {
  LoginContainerStyled,
  LoginSectionStyled,
  LoginTitle,
  LoginSideBareStyled,
  BlurBackGround,
} from 'components/LoginForm/LoginForm.styled';

export default function Login() {
  return (
    <>
      <LoginSectionStyled>
        <LoginContainerStyled>
          <LoginSideBareStyled />
          <LoginTitle>Finance App</LoginTitle>
        </LoginContainerStyled>
        <LoginForm />
        <BlurBackGround />
      </LoginSectionStyled>
    </>
  );
}
