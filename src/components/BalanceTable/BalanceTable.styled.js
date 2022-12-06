import styled from '@emotion/styled';
import { ContainerStyled } from 'components/common/commonComponents.styled';

export const Section = styled.section`
  margin: 0 32px;
  @media screen and (min-width: 768px) {
    margin: 0 32px;
  }
`;

export const Container = styled(ContainerStyled)`
  width: 704px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }
`;

export const Table = styled.table`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-collapse: collapse;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Thead = styled.thead`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    height: 58px;
    background-color: #e7eaf2;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TheadTr = styled.tr`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TheadTrTh = styled.th`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    &:first-child {
      border-bottom-left-radius: 30px;
    }
    &:last-child {
      border-bottom-right-radius: 30px;
    }
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Tbody = styled.tbody`
  text-align: center;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  background-color: transparent;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
    background-color: transparent;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TbodyTr = styled.tr`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
      box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    }
  }
  @media screen and (min-width: 1280px) {
  }
`;
