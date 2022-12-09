import styled from '@emotion/styled';
import { ContainerStyled } from 'components/common/commonComponents.styled';

export const Section = styled.section`
  margin: 0 20px;
  margin-bottom: 32px;
  margin-top: 12px;
  background-color: #fff;
  /* backdrop-filter: blur(25px); */
  @media screen and (min-width: 768px) {
    margin: 0 32px;
    margin-top: 28px;
    margin-bottom: 20px;
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    margin-top: 28px;
    margin-bottom: 32px;
    margin-left: 18px;
  }
`;

export const Container = styled(ContainerStyled)`
  padding-left: 32px;
  padding-top: 8px;
  padding-bottom: 12px;
  background-color: #fff;
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

export const Text = styled.p`
  margin-bottom: 12px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #a6a6a6;
  @media screen and (min-width: 320px) {
  }
`;

export const Score = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  align-items: center;
  color: #000000;
  @media screen and (min-width: 320px) {
  }
`;
