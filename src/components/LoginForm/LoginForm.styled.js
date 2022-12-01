import styled from '@emotion/styled';
import {
  ButtonStyled,
  ContainerStyled,
} from 'components/common/commonComponents.styled';

export const LoginSectionStyled = styled.section`
  svg {
    width: 120px;
    height: auto;
    margin-bottom: 60px;
  }
`;
export const LoginContainerStyled = styled(ContainerStyled)`
  padding: 107px 20px;
`;

export const LoginButtonStyled = styled(ButtonStyled)`
  margin: 0 auto;
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
