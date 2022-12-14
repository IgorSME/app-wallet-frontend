import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getCategories } from 'redux/selectors';
import { addTransaction } from 'redux/transactions/transactions-operations';
import { Switch } from 'components/Switch/Switch';
import Calendar from '../Calendar/Calendar';
import {
  Amound,
  AmoundDateWrapper,
  AmoundWrapper,
  CalendarImg,
  CloseBtnIcon,
  Comments,
  CommentWrapper,
  DateWrapper,
  ModalBackdrop,
  ModalButtonStyled,
  ModalCloseBtn,
  ModalContainerStyled,
  ModalTitle,
  SelectCategoryButton,
  SelectCategoryItem,
  SelectCategoryList,
  SelectIconSvg,
  SelectWrapper,
} from './ModalAddTransaction.styled';

export default function ModalAddTransaction({ onClose: handleClose }) {
  const { t } = useTranslation();

  const [income, setIncome] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(t('addTransactions.select'));
  const [amount, setAmount] = useState();
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('setCategory');

  const inputId = useId();

  const date = Date.now();

  const { baseCategories } = useSelector(getCategories);

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
        setAmount(value);
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
    dispatch(
      addTransaction({
        date: date,
        type: typeTransaction,
        category: selected,
        comment: comment,
        sum: +amount,
      })
    );
    setSelected(t('addTransactions.select'));
    setCategory('setCategory');
    setAmount('');
    setComment('');
    setIncome(false);
  };

  const typeTransaction = income ? 'expense' : 'income';

  return (
    <>
      <ModalBackdrop>
        <ModalContainerStyled onSubmit={handleSubmit}>
          <ModalCloseBtn onClick={handleClose}>
            <CloseBtnIcon />
          </ModalCloseBtn>
          <ModalTitle>{t('addTransactions.text')}</ModalTitle>
          <Switch
            value={income}
            id={inputId}
            income={income}
            onToggle={() => {
              setIncome(!income);
              setSelected();
            }}
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
                {baseCategories
                  .filter(el => el.type === typeTransaction)
                  .map(({ _id, categoryName }) => (
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
              <Amound
                name="amount"
                value={amount}
                type="number"
                min="1"
                onChange={handleChange}
              />
            </AmoundWrapper>
            <DateWrapper>
              <Calendar name="date" value={date} onChange={handleChange} />
              <CalendarImg />
            </DateWrapper>
          </AmoundDateWrapper>
          <CommentWrapper>
            <Comments
              placeholder={t('addTransactions.comment')}
              name="comment"
              value={comment}
              onChange={handleChange}
            />
          </CommentWrapper>
          <ModalButtonStyled type="submit">
            {t('addTransactions.add')}
          </ModalButtonStyled>
          <ModalButtonStyled onClick={handleClose}>
            {t('addTransactions.cancel')}
          </ModalButtonStyled>
        </ModalContainerStyled>
      </ModalBackdrop>
    </>
  );
}
