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
  Amound,
  // DateSelector,
  Comments,
  ModalButtonStyled,
  CalendarImg
} from './ModalAddTransaction.styled';

export default function ModalAddTransaction({ onClose: handleClose, onSubmit } ) {
  const [isToggled, setIsToggled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Select a category');
  const [amound, setAmound] = useState('');
  const [date, setDate] = useState();
  const [comment, setComment] = useState('');


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

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'selected':
        setSelected(value);
        break;
      case 'amound':
        setAmound(value);
        break;
      case 'date':
          setDate(value);
        break;
        case 'comment':
          setComment(value);
          break;

      default:
        break;
        }
    };


  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ selected, amound, date, comment });
    setSelected('');
    setAmound('');
    setDate();
    setComment('');
};

  return (
    <>
      <ModalBackdrop>
        <ModalContainerStyled onSubmit={handleSubmit}>
                        <ModalCloseBtn onClick={handleClose}>
                <CloseBtnIcon/>
            </ModalCloseBtn>
            <ModalTitle>Add transaction</ModalTitle>
          <Switch
            id={inputId}
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)} />
           {/* {isToggled && (  */}
          <SelectWrapper>     
                        <SelectCategoryButton 
              onClick={(e) => setIsActive(!isActive)}
              value={selected}
              name="selected"
              onChange={handleChange}/>
                            {/* {selected } */}
                <SelectIconSvg/>
                {/* </SelectCategoryButton> */}
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
            {/* )} */}
          <AmoundDateWrapper>
            <AmoundWrapper>
            <Amound name='amound' value={amound}  onChange={handleChange}/>     
          </AmoundWrapper>
          <DateWrapper>
              <Calendar
                name='date'
                value={date}
                onChange={handleChange}
              />
              <CalendarImg/>
            {/* <DateSelector type="date" name='Date'/> */}
            </DateWrapper>
            </AmoundDateWrapper>
          <CommentWrapper>
          <Comments placeholder="Comment" name='comment' value={comment}  onChange={handleChange}/>
          </CommentWrapper>
                        <ModalButtonStyled type='submit'>ADD</ModalButtonStyled>
                        <ModalButtonStyled onClick={handleClose}>CANCEL</ModalButtonStyled>
            </ModalContainerStyled>
        </ModalBackdrop>
    </>
  );
}
