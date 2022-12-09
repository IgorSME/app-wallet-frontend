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
  /* margin-bottom: 14px; */

  border-radius: ${p => p.theme.radii.large};

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  /* @media (min-width: 768px) {
    margin-bottom: 16px;
  } */
`;

export const ListCategories = styled.ul`
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  width: 280px;
  height: 52px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.s};

  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1279px) {
    width: 395px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
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

export const Text = styled.p`
  /* text-align: left; */
  width: 120px;

  line-height: ${({ name, theme }) => {
    const isLongText = name.categoryName.length + name.sum.length > 24;

    return isLongText ? theme.lineHeights.small : theme.lineHeights.normal;
  }};

  @media (min-width: 768px) {
    width: 170px;
  }
  @media (min-width: 1279px) {
    width: 230px;
  }
`;
