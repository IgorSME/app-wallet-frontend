import { Formik } from 'formik';
import * as yup from 'yup';
import {
  LoginButtonSubmitStyled,
  LoginFormError,
  LoginFormInputStyled,
  LoginFormLabelStyled,
  LoginInputWrap,
  LoginRegisterLink,
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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6).max(12),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
    .required(),
  name: yup.string().required().min(1).max(12),
});

export default function RegisterForm() {
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
          <LoginInputWrap>
            <LoginFormLabelStyled htmlFor="confirm_password_name_input"></LoginFormLabelStyled>
            <LoginFormInputStyled
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirm_password_name_input"
            />
            <LoginFormError name="confirmPassword" />

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
            <LoginFormError name="name" />

            <Name />
          </LoginInputWrap>
          <LoginButtonSubmitStyled>Register</LoginButtonSubmitStyled>
          <LoginRegisterLink to={'/login'}>Log in</LoginRegisterLink>
        </RegisterFormStyled>
      </Formik>
    </>
  );
}
