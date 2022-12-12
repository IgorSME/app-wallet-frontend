import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.backdropBackground};
  z-index: 99;
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px 20px;

  min-width: 300px;
  /* height: 340px; */

  text-align: center;
  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.radioBtn};

  @media screen and (min-width: 768px) {
    width: 360px;
  }
  @media screen and (min-width: 1279px) {
    width: 420px;
  }
`;

export const Title = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.xl};

  margin-bottom: 30px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 50px;

  margin-right: auto;
  margin-left: auto;

  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.normal};
  transition: transform 250ms;

  &:hover {
    transform: scale(1.08);
    transition: transform 500ms;
  }

  &:first-of-type {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.expense};
  }

  &:last-of-type {
    margin-top: 20px;

    color: ${p => p.theme.colors.activeIcon};
    border: ${p => p.theme.borders.btn};
    background-color: ${p => p.theme.colors.white};
  }
`;

export const ButtonText = styled.span`
  text-transform: uppercase;
`;
