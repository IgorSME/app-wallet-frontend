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
  const [amound, setAmound] = useState();
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState("setCategory");

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
      case 'category':
          setCategory(value);
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
    setCategory("setCategory");
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
            onToggle={() => {setIncome(!income);
              setSelected();
}
            }
          />
          <SelectWrapper>
            <SelectCategoryButton
              readOnly
              onClick={e => setIsActive(!isActive)}
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
                      value={category}
                      name="category"
                      onClick={e => {
                      setSelected(categoryName);
                      setIsActive(false);
                      setCategory(e.target.value);
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
              <Amound name="amound" value={amound} type="number" min="1" onChange={handleChange} />
            </AmoundWrapper>
            <DateWrapper>
              <Calendar name="date" value={date} onChange={handleChange} />
              <CalendarImg />
            </DateWrapper>
          </AmoundDateWrapper>
          <CommentWrapper>
            <Comments
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
