import { Formik } from 'formik';
import * as yup from 'yup';
import {
  LoginFormError,
  LoginButtonSubmitStyled,
  LoginFormInputStyled,
  LoginFormLabelStyled,
  LoginFormStyled,
  LoginInputWrap,
  LoginRegisterLink,
} from './LoginForm.styled';
import { ReactComponent as MailSvg } from 'images/email.svg';
import { ReactComponent as PasswordSvg } from 'images/password.svg';
import { ReactComponent as Logo } from 'images/logo.svg';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6).max(12),
});

export default function LoginForm() {
  const handlerSubmit = (values, actions) => {
    console.log(values, actions);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handlerSubmit}
      >
        <LoginFormStyled autoComplete="false">
          <Logo />
          <LoginInputWrap>
            <LoginFormLabelStyled htmlFor="login_name_input"></LoginFormLabelStyled>
            <LoginFormInputStyled
              type="text"
              placeholder="E-mail"
              name="email"
              id="login_name_input"
            />
            <LoginFormError name="email" />
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
            <LoginFormError name="password" />
            <PasswordSvg />
          </LoginInputWrap>
          <LoginButtonSubmitStyled>Log in</LoginButtonSubmitStyled>
          <LoginRegisterLink to={'/register'}>Register</LoginRegisterLink>
        </LoginFormStyled>
      </Formik>
    </>
  );
}
