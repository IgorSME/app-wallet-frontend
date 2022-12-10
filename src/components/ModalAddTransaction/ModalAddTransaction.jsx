import { useState } from 'react';
import { useId } from 'react';


import Calendar from '../Calendar/Calendar';
import Switch from 'components/Switch/Switch';
import {
  ModalBackdrop,
  SelectIconSvg,
  CloseBtnIcon,
  ModalContainerStyled,
  ModalCloseBtn,
  ModalTitle,
  SelectWrapper,
  SelectCategoryButton,
  SelectCategoryList,
  SelectCategoryItem,
  CommentWrapper,
  AmoundDateWrapper,
  DateWrapper,
  AmoundWrapper,
  Amount,
  // DateSelector,
  Comments,
  ModalButtonStyled,
  CalendarImg
} from './ModalAddTransaction.styled';

export default function ModalAddTransaction({ onClose: handleClose }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Select a category');
  const options = [
    'Main',
    'Food',
    'Auto',
    'Development',
    'Children',
    'House',
    'Education',
    'Reset',
  ];
  const inputId = useId();

  return (
    <>
      <ModalBackdrop>
        <ModalContainerStyled>
                        <ModalCloseBtn onClick={handleClose}>
                <CloseBtnIcon/>
            </ModalCloseBtn>
            <ModalTitle>Add transaction</ModalTitle>
                    <Switch id={inputId} isToggled={isToggled} onToggle={()=>setIsToggled(!isToggled)} />
            <SelectWrapper>     
                        <SelectCategoryButton 
                            onClick={(e) => setIsActive(!isActive)}>
                            {selected }
                <SelectIconSvg/>
                </SelectCategoryButton>
                {isActive && (
                    <SelectCategoryList >
                        {options.map((option) => (
                            <SelectCategoryItem
                                onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}>{option}</SelectCategoryItem>
                        ))}
            </SelectCategoryList>
                )}
          </SelectWrapper>
          <AmoundDateWrapper>
            <AmoundWrapper>
            <Amount />     
          </AmoundWrapper>
          <DateWrapper>
              <Calendar />
              <CalendarImg/>
            {/* <DateSelector type="date" name='Date'/> */}
            </DateWrapper>
            </AmoundDateWrapper>
          <CommentWrapper>
          <Comments placeholder="Comment" />
          </CommentWrapper>
                        <ModalButtonStyled>ADD</ModalButtonStyled>
                        <ModalButtonStyled onClick={handleClose}>CANCEL</ModalButtonStyled>
            </ModalContainerStyled>
        </ModalBackdrop>
    </>
  );
}
