import { useState } from 'react';
import { useId } from 'react';
import { useSelector } from 'react-redux';

import get from 'redux/categories/categories-operations';

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
  Comments,
  ModalButtonStyled,
  CalendarImg
} from './ModalAddTransaction.styled';


export default function ModalAddTransaction({ onClose: handleClose, onSubmit, categories: {baseCategories} } ) {
  const [isToggled, setIsToggled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Select a category');
  const [amound, setAmound] = useState('');
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState('');

  const inputId = useId();
 

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'isToggled':
        setIsToggled(value);
        break;
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
    onSubmit({ isToggled, selected, amound, date, comment });
    setSelected('');
    setAmound('');
    setDate(new Date());
    setComment('');
    setIsToggled(false);
    console.log(onSubmit());
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
            value={isToggled}
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
                <SelectIconSvg/>
                {isActive && (
                    <SelectCategoryList >
                        {baseCategories.map(({_id, categoryName, type}) => (
                          <SelectCategoryItem
                            key={_id}
                            name={categoryName}
                            type={type}
                                onClick={(e) => {
                                setSelected(categoryName);
                                setIsActive(false);
                            }}>{categoryName}</SelectCategoryItem>
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
