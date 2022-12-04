import styled from '@emotion/styled';
import { ContainerStyled } from 'components/common/commonComponents.styled';

export const NavigationSectionStyled = styled.section`
  margin: 0 64px;

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

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const NavigationContainerStyled = styled(ContainerStyled)`
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    width: auto;
  }
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const NavigationListStyled = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: auto;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-right: auto;
    width: auto;
  }
`;

export const NavigationItemStyled = styled(ContainerStyled)`
  @media screen and (min-width: 320px) {
    &:not(:last-child) {
      margin-right: 36px;
    }
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-right: 0;
    margin-left: 32px;
    width: auto;

    &:last-child {
      display: none;
    }

    &:first-child {
      margin-bottom: 21px;
    }
  }
`;

export const NavigationItemTextStyled = styled(ContainerStyled)`
  @media screen and (min-width: 320px) {
    display: none;
    width: auto;
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
