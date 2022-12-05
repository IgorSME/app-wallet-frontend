import styled from '@emotion/styled';
import { ContainerStyled } from 'components/common/commonComponents.styled';

export const Section = styled.section`
  margin: 0 20px;
  margin-bottom: 32px;
  background-color: #fff;
  /* backdrop-filter: blur(25px); */
  @media screen and (min-width: 768px) {
    margin: 0 32px;
    margin-top: 28px;
    margin-bottom: 20px;
    margin-right: 32px;
  }
`;

export const Container = styled(ContainerStyled)`
  padding-left: 32px;
  padding-top: 8px;
  padding-bottom: 12px;
  background-color: #e7eaf2;
  border-radius: 30px;
  text-align: left;
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    padding-left: 40px;
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;
