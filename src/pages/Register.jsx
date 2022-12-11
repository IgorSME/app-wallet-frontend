import {
  LoginSectionStyled,
  LoginContainerStyled,
  LoginTitle,
  BlurBackGround,
} from 'components/LoginForm/LoginForm.styled';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { RegisterSideBareStyled } from 'components/RegisterForm/RegisterForm.styled';

export default function Register() {
  return (
    <>
      <LoginSectionStyled>
        <LoginContainerStyled>
          <RegisterSideBareStyled />
          <LoginTitle>Finance App</LoginTitle>
        </LoginContainerStyled>
        <RegisterForm />
        <BlurBackGround />
      </LoginSectionStyled>
    </>
  );
}
