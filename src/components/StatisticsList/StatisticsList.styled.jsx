import styled from '@emotion/styled';

export const Box = styled.div`
  width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1279px) {
    width: 395px;
  }
`;

export const WrapperHeader = styled.div`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.primaryText};

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 58px;
  padding: 0 20px;
  margin-bottom: 14px;

  border-radius: ${p => p.theme.radii.large};

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const ListCategories = styled.ul`
  /* background-color: ${p => p.theme.colors.placeholder}; */

  padding: 0 20px;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  margin-bottom: 28px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.s};

  &::after {
    content: '';
    width: 280px;
    height: 1px;

    position: absolute;
    left: -20px;
    bottom: -14px;

    background-color: #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }

  &:last-child {
    margin: 0;
  }

  @media (min-width: 768px) {
    &::after {
      width: 336px;
    }
  }
  @media (min-width: 1279px) {
    &::after {
      width: 395px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Color = styled.div`
  height: ${p => p.theme.spacing(6)};
  width: ${p => p.theme.spacing(6)};
  margin-right: ${p => p.theme.spacing(4)};

  border-radius: ${p => p.theme.radii.extraSmall};
  background-color: ${p => p.color};
`;

export const ListSum = styled.ul`
  font-weight: ${p => p.theme.fontWeights.bold};

  padding: 0 20px;
  /* background-color: blue; */
`;

export const ListSumItem = styled.li`
  margin-bottom: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.s};

  &:last-child {
    margin: 0;
  }
`;

export const ListSumText = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ListSumNumber = styled.p`
  color: ${p =>
    p.textColor === 'expense' ? p.theme.colors.expense : p.theme.colors.income};
`;
