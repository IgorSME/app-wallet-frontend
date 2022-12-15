import styled from '@emotion/styled';
import { ContainerStyled } from 'components/common/commonComponents.styled';

export const Section = styled.section`
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin: 0 32px;
    text-align: center;
  }
`;

export const ContainerTable = styled(ContainerStyled)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin: 0;
    width: 704px;
    height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
    margin-right: 0;
    height: 75vh;
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
    margin-right: 0;
  }
`;

export const Thead = styled.thead`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    height: 58px;
    background-color: #fff;
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
    &:first-of-type {
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
  height: 50px;
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

export const ContainerList = styled(ContainerStyled)`
  @media screen and (max-width: 767px) {
    margin: 0;
    width: auto;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const List = styled.ul`
  @media screen and (max-width: 767px) {
    border-radius: 10px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Element = styled.li`
  @media screen and (max-width: 767px) {
    border-radius: 10px;
    border-left: 5px solid teal;
    background-color: #fff;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Item = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    padding: 0 20px;

    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ItemFirstChild = styled.p`
  @media screen and (max-width: 767px) {
    text-align: left;

    &:first-of-type {
      font-family: 'Circe';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.5;
      color: #000000;
    }
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ItemLastChild = styled.p`
  @media screen and (max-width: 767px) {
    text-align: left;

    &:first-of-type {
      font-family: 'Circe';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.5;
      color: #000000;
    }
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const BOxBtn = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
`;
