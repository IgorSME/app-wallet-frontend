import { useState } from 'react';
import { useId } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from 'redux/selectors';

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
  CalendarImg,
} from './ModalAddTransaction.styled';
import { addTransaction } from 'redux/transactions/transactions-operations';

export default function ModalAddTransaction({
  onClose: handleClose,
}) {

  const [income, setIncome] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Select a category');
  const [amound, setAmound] = useState(0);
  const [comment, setComment] = useState('');

  const inputId = useId();

  const date = Date.now();
   
  const {baseCategories} = useSelector(getCategories);


  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'income':
        setIncome(value);
        break;
      case 'selected':
        setSelected(value);
        break;
      case 'amound':
        setAmound(value);
        break;
      case 'comment':
        setComment(value);
        break;

      default:
        break;
    }
  };

  const dispatch = useDispatch();

 
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTransaction({
      date: date,
      type: typeTransaction,
      category: selected,
      comment: comment,
      sum: +amound,
    }));
    setSelected('Select a category');
    setAmound("");
    setComment('');
    setIncome(false);
  };

  const typeTransaction = income ? "expense" : "income";

  return (
    <>
      <ModalBackdrop>
        <ModalContainerStyled onSubmit={handleSubmit}>
          <ModalCloseBtn onClick={handleClose}>
            <CloseBtnIcon />
          </ModalCloseBtn>
          <ModalTitle>Add transaction</ModalTitle>
          <Switch
            value={income}
            id={inputId}
            income={income}
            onToggle={() => {
              setIncome(!income);
              setSelected('Select a category');
}
            }
          />
          <SelectWrapper>
            <SelectCategoryButton
              required
              readOnly
              onClick={() => {setIsActive(!isActive)}}
              value={selected}
              name="selected"
              onChange={handleChange}
            />
            <SelectIconSvg />
            {isActive && (
              <SelectCategoryList>
                {baseCategories.filter((el) => el.type === typeTransaction)
                  .map(({ _id, categoryName}) => (
                    <SelectCategoryItem
                      key={_id}
                      value={selected}
                      onClick={() => {
                      setSelected(categoryName);
                        setIsActive(false);
                    }}
                  >
                    {categoryName}
                  </SelectCategoryItem>
                ))}
              </SelectCategoryList>
            )}
          </SelectWrapper>
          <AmoundDateWrapper>
            <AmoundWrapper>
              <Amound
                style={amound ? { color: '#000000' } : { color: '#BDBDBD' }}
                name="amound"
                value={amound}
                type="number"
                min="1"
                onChange={handleChange} />
            </AmoundWrapper>
            <DateWrapper>
              <Calendar name="date" value={date} onChange={handleChange} />
              <CalendarImg />
            </DateWrapper>
          </AmoundDateWrapper>
          <CommentWrapper>
            <Comments
              style={comment ? { color: '#000000' } : { color: '#BDBDBD' }}
              placeholder="Comment"
              name="comment"
              value={comment}
              onChange={handleChange}
            />
          </CommentWrapper>
          <ModalButtonStyled type="submit">ADD</ModalButtonStyled>
          <ModalButtonStyled onClick={handleClose}>CANCEL</ModalButtonStyled>
        </ModalContainerStyled>
      </ModalBackdrop>
    </>
  );
}
