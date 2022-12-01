import { SectionLoginStyled } from './LoginSection.styled';
import { ReactComponent as Logo } from 'images/logo.svg';
import {
  ButtonStyled,
  ContainerStyled,
} from 'components/common/commonComponents.styled';

export default function LoginSection() {
  return (
    <>
      <SectionLoginStyled>
        <ContainerStyled>
          <Logo />
          <ButtonStyled>Register</ButtonStyled>
        </ContainerStyled>
      </SectionLoginStyled>
    </>
  );
}
