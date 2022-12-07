import LoginForm from 'components/LoginForm/LoginForm';
import {
  LoginContainerStyled,
  LoginSectionStyled,
  LoginTitle,
  LoginSideBareStyled,
  BlurBackGround,
  BlurBackGroundOpacity,
} from 'components/LoginForm/LoginForm.styled';

export default function Login() {
  return (
    <>
      <LoginSectionStyled>
        <LoginContainerStyled>
          <LoginSideBareStyled />
          <LoginTitle>Finance App</LoginTitle>
          <BlurBackGround>
            <BlurBackGroundOpacity />
          </BlurBackGround>
          <LoginForm />
        </LoginContainerStyled>
      </LoginSectionStyled>
    </>
  );
}
