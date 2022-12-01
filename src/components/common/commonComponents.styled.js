import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
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
  padding: 13px 55px 13px 61px;
  border-radius: 20px;
  border: 1px solid ${p => p.theme.colors.btn};
  color: ${p => p.theme.colors.btn};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${p => p.theme.colors.secondaryText};
    border: 1px solid transparent;
    background-color: ${p => p.theme.colors.accent};
  }
`;
