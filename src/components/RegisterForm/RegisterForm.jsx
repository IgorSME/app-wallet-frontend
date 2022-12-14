import {
  LoginButtonSubmitStyled,
  LoginFormError,
  LoginFormInputStyled,
  LoginFormLabelStyled,
  LoginInputWrap,
  LoginRegisterLink,
} from 'components/LoginForm/LoginForm.styled';
import PasswordProgressBar from 'components/PasswordProgressBar/PasswordProgressBar';
import { Formik } from 'formik';
import { ReactComponent as MailSvg } from 'images/email.svg';
import { ReactComponent as Logo } from 'images/logo.svg';
import { ReactComponent as Name } from 'images/name.svg';
import { ReactComponent as PasswordSvg } from 'images/password.svg';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/auth-operations';
import * as yup from 'yup';
import { RegisterFormStyled } from './RegisterForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ``,
  name: ``,
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
    .required(),
  name: yup.string().required().min(1).max(12),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handlerSubmit = async (values, actions) => {
    const { confirmPassword, ...body } = values;
    dispatch(authOperations.register(body));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handlerSubmit}
      >
        {props => {
          const { values } = props;
          return (
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
              <LoginInputWrap confirmPassword={true}>
                <LoginFormLabelStyled htmlFor="confirm_password_name_input"></LoginFormLabelStyled>
                <LoginFormInputStyled
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  id="confirm_password_name_input"
                />
                <LoginFormError name="confirmPassword" />

                <PasswordSvg />
                {values.confirmPassword && (
                  <PasswordProgressBar password={values.confirmPassword} />
                )}
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
              <LoginButtonSubmitStyled type="submit">
                Register
              </LoginButtonSubmitStyled>
              <LoginRegisterLink to={'/login'}>Log in</LoginRegisterLink>
            </RegisterFormStyled>
          );
        }}
      </Formik>
    </>
  );
}
