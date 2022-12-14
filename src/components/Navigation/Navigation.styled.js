import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppNav = styled.nav`
  z-index: 200;
  position: relative;

  width: 280px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: auto;
    /* margin: 0; */
    margin-bottom: 28px;
    padding: 0;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;

  svg {
    width: 38px;
    height: 38px;

    background-color: transparent;
    fill: ${p => p.theme.colors.icon};
  }

  &.active svg {
    background: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.small};
    fill: ${p => p.theme.colors.activeIcon};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  @media (min-width: 768px) {
    align-items: center;

    font-family: ${p => p.theme.fonts.title};
    font-size: ${p => p.theme.fontSizes.m};

    svg {
      width: 18px;
      height: 18px;

      margin-right: 23px;
    }

    &.active {
      font-weight: ${p => p.theme.fontWeights.bold};
    }
    &.active svg {
      border-radius: ${p => p.theme.radii.extraSmall};
    }
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    /* margin-right: auto;
    width: auto; */
  }
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    &:not(:last-of-type) {
      margin-right: 36px;
    }
  }

  @media screen and (min-width: 767px) {
    /* margin: 0;
    width: auto;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:last-of-type {
      display: none;
    }
    */

    &:first-of-type {
      margin-bottom: 12px;
    }
  }
`;

// export const ItemText = styled.p`
//   display: none;
//   width: 100px;

//   @media screen and (min-width: 768px) {
//     display: block;
//     text-align: left;
//     margin-left: 20px;
//   }
// `;

// export const Container = styled(ContainerStyled)`
//   @media screen and (max-width: 767px) {
//     padding-top: 15px;
//     padding-bottom: 12px;
//     margin: 0 auto;
//   }
//   @media screen and (min-width: 768px) {
//     margin: 0;
//     padding-top: 40px;
//   }
// `;
