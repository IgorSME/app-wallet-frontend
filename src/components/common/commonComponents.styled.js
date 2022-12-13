import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  padding-top: 12px;
  padding-bottom: 12px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 63px;

    border-right: 1px solid #e7e5f2;
    border-box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);

    &::after {
      content: '';
    }
  }
`;

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const ButtonStyled = styled.button`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.btn};
  color: ${p => p.theme.colors.btn};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
  text-transform: uppercase;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${p => p.theme.colors.secondaryText};
    border: 1px solid transparent;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const ContainerNav = styled(ContainerStyled)`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;

    display: flex;
  }
  @media screen and (min-width: 1280px) {
    width: auto;
    padding-left: 16px;
    padding-right: 69px;

    flex-direction: column;
  }
`;

export const ContainerTable = styled(ContainerStyled)`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: auto;
    padding-right: 16px;
    padding-left: 69px;
  }
`;

export const WrapperNav = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    padding-top: 8px;
  }
  @media (min-width: 1279px) {
    margin-right: 0;
    padding-top: 0;
    margin-bottom: 32px;
  }
`;

export const WrapperDesktop = styled.div`
  @media (min-width: 1279px) {
    display: flex;
    justify-content: space-between;

    width: 1280px;
    margin: 0 auto;
  }
`;
