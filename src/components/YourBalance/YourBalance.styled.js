import styled from '@emotion/styled';
import { ContainerStyled } from 'components';

// export const Box = styled.div`
//   margin: 0 20px;
//   margin-bottom: 32px;
//   margin-top: 12px;
//   background-color: #fff;
//   border-radius: 30px;
//   /* backdrop-filter: blur(25px); */
//   @media screen and (min-width: 768px) {
//     margin: 0 32px;
//     margin-top: 28px;
//     margin-bottom: 20px;
//     width: 336px;
//   }
//   @media screen and (min-width: 1280px) {
//     margin: 0;
//     margin-top: 28px;
//     margin-bottom: 32px;
//     margin-left: 18px;
//   }
// `;

export const Wrapper = styled(ContainerStyled)`
  height: 80px;

  margin-bottom: 32px;
  padding-top: 8px;
  padding-bottom: 11px;

  background-color: ${p => p.theme.colors.white};
  border-radius: 30px;
  text-align: left;

  @media screen and (min-width: 320px), (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;

    width: 336px;
    height: 80px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Text = styled.p`
  padding-left: 32px;
  margin-bottom: 12px;
  height: 13px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;

  color: #a6a6a6;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const Score = styled.p`
  padding-left: 32px;
  height: 36px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  align-items: center;

  color: #000000;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;
