import styled from '@emotion/styled';

import { ContainerStyled } from 'components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 48px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 32px;
    padding-bottom: 44px;
  }
`;

export const Container = styled(ContainerStyled)`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    padding: 0;
  }
`;

export const StatisticsWrapper = styled.div`
  margin-bottom: 32px;
  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;

    &:last-of-type {
      margin-top: 20px;
      width: 336px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:first-of-type {
      margin-right: 32px;
    }
    &:last-of-type {
      margin-bottom: 0;
      width: 395px;
    }
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: left;

  margin-bottom: ${p => p.theme.spacing(2)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`;

export const NoStatisticsText = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.expense};

  text-align: center;

  padding: 20px;
`;
