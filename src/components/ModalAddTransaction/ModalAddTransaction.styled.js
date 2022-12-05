import styled from '@emotion/styled';
import { ReactComponent as SelectIcon } from '../../images/select.svg';
import { ReactComponent as CloseBtn } from '../../images/closeBtn.svg';
import {
  ButtonStyled,
} from 'components/common/commonComponents.styled';
import { type } from '@testing-library/user-event/dist/type';

export const CloseBtnIcon = styled(CloseBtn)`
&:hover * {
stroke: #24CCA7;
}
`

export const SelectIconSvg = styled(SelectIcon)`
margin-left: 95px;
@media screen and (min-width: 768px) {
margin-left: 210px;
}
`;

export const ModalContainerStyled = styled.div`
max-height: 100%;
width: 320px;
margin: 0 auto;
position: relative;
top: 0;
bottom: 0;
left: 0;
right: 0;
padding: 10px;
background-color: ${p => p.theme.colors.modalBackground};

@media screen and (min-width: 768px) {
  width: 540px;
  height: 603px;
  border-radius: ${p => p.theme.radii.normal};
}
`;

export const ModalBackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
overflow-y: scroll;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.backdropBackground};
    transition: all .8s;
`
export const ModalCloseBtn = styled.button`
display: none;
@media screen and (min-width: 768px) {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background-color: ${p => p.theme.colors.modalBackground};
    border: rgba(0, 0, 0, 0);
    border-radius: ${p => p.theme.radii.large};
}
`;

export const ModalTitle = styled.h1`
font-family: ${p => p.theme.fonts.title};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xl};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.primaryText};
text-align: center;
margin-bottom: 40px;
margin-top: 80px;

@media screen and (min-width: 768px) {
  margin-top: 40px;
  font-size: ${p => p.theme.fontSizes.l};
}
`;

export const SelectWrapper = styled.div`
position: relative;

@media screen and (min-width: 768px) {
  display: flex;
justify-content: center;
}
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

@media screen and (min-width: 768px) {
  width: 394px;
}

// &::after{
//   content: "";
//   position: absolute;
//   top: 50%;
//   right: 15px;
//   transform: translateY(-50%);

//   width: 0;
//   height: 0;
//   border-width: 10.4px 6px 0 6px;
//   border-color: #79849B transparent transparent transparent;
//   border-style: solid;

//   pointer-events: none;
//   cursor: pointer;
// }
`;

export const SelectCategoryList = styled.ul`
z-index: 1;
position: absolute;
top: 32px;
padding-left: 10px;
margin-top: 4px;
margin-left: 10px;
margin-right: 10px;
width: 280px;
background-color: ${p => p.theme.colors.selectMenuBackground};
box-shadow: ${p => p.theme.shadows.selectMenu};
border-radius: ${p => p.theme.radii.normal};

@media screen and (max-width: 767px) {
  left: 0;
}

@media screen and (min-width: 768px) {
  width: 394px;
}
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

export const AmoundDateWrapper = styled.div`
  @media screen and (min-width: 768px) {
   display: flex;
   justify-content: center;
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

@media screen and (min-width: 768px) {
  width: 182px;
  margin-right: 30px;
  text-align: center;
}
`;

export const DateSelector = styled.input`
position: relative;
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


@media screen and (min-width: 768px) {
  width: 182px;
  margin-left: 0;
}

// svg {
//     width: 18px;
//     height: 20px;
//     color: ${p => p.theme.colors.activeIcon};
//     margin-left: 137px;
// }
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

@media screen and (min-width: 768px) {
  width: 394px;
  height: 32px;
  padding-bottom: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
`;

export const ModalButtonStyled = styled(ButtonStyled)`
width: 300px;
margin: 0 auto;
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

// @media screen and (min-width: 768px)

// @media screen and (min-width: 1280px)