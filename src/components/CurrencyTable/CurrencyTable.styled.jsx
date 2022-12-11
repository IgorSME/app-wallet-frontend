import styled from '@emotion/styled';
import CurrencyBg from 'images/currency/currency-bg.png';
import CurrencyBgDesk from 'images/currency/currency-bg-desk.png';

export const BaseTable = styled.table`
  min-width: 280px;
  height: 174px;

  margin: 0 auto;
  padding-bottom: 52px;

  border-spacing: 0px;
  text-align: left;

  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.activeIcon};
  color: ${p => p.theme.colors.white};

  overflow: hidden;
  background-image: url(${CurrencyBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;

  @media (min-width: 768px) {
    min-width: 336px;
    height: 182px;
    padding-bottom: 56px;
  }
  @media (min-width: 1279px) {
    width: 393px;
    height: 331px;
    padding-bottom: 179px;
    background-image: url(${CurrencyBgDesk});
  }
`;

export const THead = styled.thead`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};

  background-color: ${p => p.theme.colors.icon};
`;

export const TBody = styled.tbody`
  font-size: ${p => p.theme.fontSizes.s};
  /* min-height: 80px;

  @media (min-width: 768px) {
    min-height: 100px;
  }
  @media (min-width: 1279px) {
    min-height: 120px;
  } */
`;

export const Th = styled.th`
  padding-top: 11px;
  padding-bottom: 12px;

  &:first-of-type {
    text-align: left;
    padding-left: 20px;
  }
  &:last-child {
    text-align: right;
    padding-right: 17px;
  }

  @media (min-width: 768px) {
    &:first-of-type {
      padding-left: 20px;
    }
    &:last-child {
      padding-right: 25px;
    }
  }

  @media (min-width: 1279px) {
    min-height: 287px;
    padding-top: 17px;
    padding-bottom: 16px;

    &:first-of-type {
      padding-left: 44px;
    }
    &:last-child {
      padding-right: 64px;
    }
  }
`;

// export const Tr = styled.tr``;

export const Td = styled.td`
  text-align: left;
  padding-top: 12px;

  &:first-of-type {
    padding-left: 20px;
  }
  &:last-child {
    text-align: right;
    padding-left: 0;
    padding-right: 20px;
  }

  @media (min-width: 768px) {
    padding-top: 16px;
    padding-left: 15px;

    &:first-of-type {
      padding-left: 20px;
    }
    &:last-child {
      padding-right: 20px;
    }
  }

  @media (min-width: 1279px) {
    padding-top: 24px;

    &:first-of-type {
      padding-left: 58px;
    }
    &:last-child {
      padding-right: 61px;
    }
  }
`;
