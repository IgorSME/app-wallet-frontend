import {
  LoginSectionStyled,
  LoginTitle,
  BlurBackGround,
  BlurBackGroundOpacity,
} from 'components/LoginForm/LoginForm.styled';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import {
  RegisterContainerStyled,
  RegisterSideBareStyled,
} from 'components/RegisterForm/RegisterForm.styled';

export default function Register() {
  return (
    <>
      <LoginSectionStyled>
        <RegisterContainerStyled>
          <RegisterSideBareStyled />
          <LoginTitle>Finance App</LoginTitle>
          <BlurBackGround>
            <BlurBackGroundOpacity />
          </BlurBackGround>
          <RegisterForm />
        </RegisterContainerStyled>
      </LoginSectionStyled>
    </>
  );
}
