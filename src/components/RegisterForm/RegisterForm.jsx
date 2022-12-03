import { Formik } from 'formik';
import {
  LoginButtonSubmitStyled,
  LoginFormInputStyled,
  LoginFormLabelStyled,
  LoginInputWrap,
  LoginRegisterBtn,
} from 'components/LoginForm/LoginForm.styled';
import { ReactComponent as MailSvg } from 'images/email.svg';
import { ReactComponent as PasswordSvg } from 'images/password.svg';
import { ReactComponent as Logo } from 'images/logo.svg';
import { ReactComponent as Name } from 'images/name.svg';
import { RegisterFormStyled } from './RegisterForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ``,
  name: ``,
};

export default function RegisterForm() {
  const handlerSubmit = (values, actions) => {
    console.log(values, actions);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
        <RegisterFormStyled autoComplete="false">
          <Logo />
          <LoginInputWrap>
            <LoginFormLabelStyled htmlFor="login_name_input"></LoginFormLabelStyled>
            <LoginFormInputStyled
              type="text"
              placeholder="E-mail"
              name="email"
              id="login_name_input"
            />
            <MailSvg />
          </LoginInputWrap>
          <LoginInputWrap>
            <LoginFormLabelStyled htmlFor="password_name_input"></LoginFormLabelStyled>
            <LoginFormInputStyled
              type="password"
              placeholder="Password"
              name="password"
              id="password_name_input"
            />
            <PasswordSvg />
          </LoginInputWrap>
          <LoginInputWrap>
            <LoginFormLabelStyled htmlFor="confirm_password_name_input"></LoginFormLabelStyled>
            <LoginFormInputStyled
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirm_password_name_input"
            />
            <PasswordSvg />
          </LoginInputWrap>
          <LoginInputWrap>
            <LoginFormLabelStyled htmlFor="name_input"></LoginFormLabelStyled>
            <LoginFormInputStyled
              type="text"
              placeholder="First name"
              name="name"
              id="name_input"
            />
            <Name />
          </LoginInputWrap>
          <LoginButtonSubmitStyled>Register</LoginButtonSubmitStyled>
          <LoginRegisterBtn>Log in</LoginRegisterBtn>
        </RegisterFormStyled>
      </Formik>
    </>
  );
}
