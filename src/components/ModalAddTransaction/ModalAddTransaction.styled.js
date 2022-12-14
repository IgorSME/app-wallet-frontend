import styled from '@emotion/styled';

import { ReactComponent as SelectIcon } from '../../images/select.svg';
import { ReactComponent as CloseBtn } from '../../images/closeBtn.svg';
import { ReactComponent as CalendarSvg } from '../../images/calendar.svg';

import { ButtonStyled } from 'components/common/commonComponents.styled';

export const ModalBackdrop = styled.div`
  z-index: 500;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  min-width: 320px;
  height: 100vh;
  background-color: ${p => p.theme.colors.backdropBackground};
  transition: all 0.8s;

  @media screen and (min-width: 768px) {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.backdropBackground};
    transition: all 0.8s;
  }
`;

export const CloseBtnIcon = styled(CloseBtn)`
  &:hover * {
    stroke: #24cca7;
  }
`;

export const ModalContainerStyled = styled.form`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  top: 0;
  // bottom: 0;
  left: 0;
  // right: 0;
  padding: 10px;
  background-color: ${p => p.theme.colors.modalBackground};

  @media screen and (min-width: 768px) {
    width: 540px;
    height: 603px;
    border-radius: ${p => p.theme.radii.normal};
    top: 20%;
    // left: 50%;
    // transform: translate(-50%,-50%);
  }
`;

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
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const SelectCategoryButton = styled.input`
  user-select: none;
  position: relative;
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
`;

export const SelectIconSvg = styled(SelectIcon)`
  position: absolute;
  top: 10px;
  right: 12%;
  @media screen and (min-width: 768px) {
    left: 420px;
  }
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
  backdrop-filter: blur(25px);

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
  text-align: left;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.expense};
    background-color: ${p => p.theme.colors.barBackground};
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 40px;
`;

export const AmoundWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 32px;
    margin-left: 0;
  }
`;

export const CalendarImg = styled(CalendarSvg)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 8px;
`;

export const DateWrapper = styled.div`
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  & * input {
    padding-left: 10px;
    width: 280px;
    height: 32px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-family: ${p => p.theme.fonts.primary};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.normal};
    color: ${p => p.theme.colors.primaryText};
    border-bottom: ${p => p.theme.borders.radioBtn};

    @media screen and (min-width: 768px) {
      width: 181px;
      margin: 0;
    }
  }
`;

export const AmoundDateWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Amound = styled.input`
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
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  user-select: none;

  @media screen and (min-width: 768px) {
    width: 181px;
    text-align: center;
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
