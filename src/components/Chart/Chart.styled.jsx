import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const Text = styled.p`
  position: absolute;
  color: ${p =>
    p.profit > 0 ? p.theme.colors.income : p.theme.colors.expense};

  /* font-family: ${p => p.theme.fonts.primary}; */
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 500ms ease 0s;
`;
