import styled from '@emotion/styled';

import {
  ButtonStyled,
//   ContainerStyled,
} from 'components/common/commonComponents.styled';

export const ModalContainerStyled = styled.div`
max-height: 100%;
width: 320px;
margin: auto;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
padding: 10px;
background-color: ${p => p.theme.colors.modalBackground};
`;

// export const ModalBackdrop = styled.div`
//     z-index: 10;
//     width: 100%;
//     height: 100%;
//     background-color: ${p => p.theme.colors.backdropBackground};
//     transition: all .8s;
//     position: fixed;
//     top: 0;
//     left: 0;
//     overflow: visible;
// `

export const ModalTitle = styled.h1`
font-family: ${p => p.theme.fonts.title};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.primaryText};
text-align: center;
margin-bottom: 40px;
margin-top: 80px;
`;

export const IncomeExpenseContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;
`;

export const IncomeLine = styled.p`
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.income};
margin-right: 20px;
margin-left: 20px;
`;

export const ExpenseLine = styled.p`
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.expense};
color: #E0E0E0;
margin-right: 20px;
margin-left: 20px;
`;

export const SwitchLabel = styled.label`
position: relative;
display: flex;

&::before {
  content: "";
width: 80px;
height: 40px;
background-color: ${p => p.theme.colors.modalBackground};
border-radius: ${p => p.theme.radii.large};
border: ${p => p.theme.borders.radioBtn};
}

&::after {
position: absolute;
content: "";
top: -3px;
left: -8px;
right: 0;
bottom: 0;
width: 44px;
height: 44px;
background-color: ${p => (p.theme.colors.income)};
border-radius: ${p => p.theme.radii.large};
box-shadow: ${p => p.theme.shadows.addBtn};
transition: left 0.2s;
}
`;

export const SwitchInput = styled.input`
opacity: 0;
width: 0;
height: 0;
&:checked {
  & + label::after {
    background-color: ${p => (p.theme.colors.expense)};
    left: 40px;
  }}
  &:checked {
  & + p {
    color: blue;
  }
 }

`;

export const SelectWrapper = styled.div`
position: relative;
`;

export const SelectCategoryButton = styled.button`
user-select: none;
position: relative;
margin-bottom: 40px;
margin-left: 10px;
margin-right: 10px;
width: 280px;
height: 32px;
background-color: ${p => p.theme.colors.barBackground};
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.placeholder};
border-bottom: ${p => p.theme.borders.radioBtn};
border-top: none;
border-left: none;
border-right: none;
padding-left: 20px;
text-align: left;

&::after{
  content: "";
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);

  width: 0;
  height: 0;
  border-width: 10.4px 6px 0 6px;
  border-color: #79849B transparent transparent transparent;
  border-style: solid;

  pointer-events: none;
  cursor: pointer;
}
`;

export const SelectCategoryList = styled.ul`
z-index: 1;
position: absolute;
left: 0;
top: 32px;
padding-left: 10px;
margin-top: 4px;
margin-left: 10px;
margin-right: 10px;
width: 280px;
background-color: ${p => p.theme.colors.selectMenuBackground};
box-shadow: ${p => p.theme.shadows.selectMenu};
border-radius: ${p => p.theme.radii.normal};
`;

export const SelectCategoryItem = styled.li`
padding: 10px;
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.primaryText};
cursor: pointer;

&:hover,
&:focus {
    color: ${p => p.theme.colors.expense};
}
`;

export const Amount = styled.input`
width: 280px;
height: 32px;
background: ${p => p.theme.colors.barBackground};
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.placeholder};
border-bottom: ${p => p.theme.borders.radioBtn};
padding-left: 20px;
margin-bottom: 40px;
// margin-top: 40px;
margin-left: 10px;
margin-right: 10px;
border-top: none;
border-left: none;
border-right: none;
outline: none;
`;

export const DateSelector = styled.input`
width: 280px;
height: 32px;
background-color: ${p => p.theme.colors.barBackground};
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.primaryText};
border-bottom: ${p => p.theme.borders.radioBtn};
padding-left: 20px;
margin-bottom: 40px;
margin-left: 10px;
margin-right: 10px;
border-top: none;
border-left: none;
border-right: none;
outline: none;

svg {
    width: 18px;
    height: 20px;
    color: ${p => p.theme.colors.activeIcon};
    margin-left: 137px;
}
`;

export const Comments = styled.input`
width: 280px;
height: 84px;
background-color: ${p => p.theme.colors.barBackground};
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.placeholder};
border-bottom: ${p => p.theme.borders.radioBtn};
margin-bottom: 40px;
margin-left: 10px;
margin-right: 10px;
border-top: none;
border-left: none;
border-right: none;
outline: none;
padding-left: 20px;
`;

export const ModalButtonStyled = styled(ButtonStyled)`
width: 300px;
margin: 0 auto;
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;