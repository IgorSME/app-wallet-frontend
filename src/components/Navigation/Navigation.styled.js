import styled from '@emotion/styled';
import { ContainerStyled } from 'components/common/commonComponents.styled';

export const Section = styled.section`
  @media screen and (max-width: 767px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 32px;
    width: 150px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 18px;
  }

  a.active {
    svg {
      fill: #4a56e2;
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }

  svg {
    width: 38px;
    height: 38px;
    fill: #6e78e8;

    &:hover {
      fill: #4a56e2;
    }

    /* @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    } */
  }
`;

export const Container = styled(ContainerStyled)`
  @media screen and (max-width: 767px) {
    padding-top: 15px;
    padding-bottom: 12px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    padding-top: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: auto;
  list-style: none;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: auto;
    width: auto;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-right: 36px;
    }
  }

  @media screen and (min-width: 767px) {
    margin: 0;
    width: auto;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:last-child {
      display: none;
    }

    &:first-child {
      margin-bottom: 12px;
    }
  }
`;

export const ItemText = styled.p`
  display: none;
  width: 100px;

  @media screen and (min-width: 768px) {
    display: block;
    text-align: left;
    margin-left: 20px;
  }
`;

// @media screen and (min-width: 320px) {
//     width: 320px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 768px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//   }
