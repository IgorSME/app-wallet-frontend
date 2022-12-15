import { useId, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import { getCategories  } from 'redux/selectors';
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
  // Error,
} from './ModalAddTransaction.styled';

import { useCloseOnEsc } from '../../hooks/useCloseOnEsc';

export default function ModalAddTransaction({ onClose: handleClose }) {
  const { t } = useTranslation();

  useCloseOnEsc(handleClose);

  const [income, setIncome] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const [amound, setAmound] = useState("");
  const [comment, setComment] = useState('');
  
  const [error, setError] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selected.length === 0 || amound.length === 0 || comment.length === 0) {
      setError(true)
    }
    if (selected && amound && comment) {

      dispatch(
        addTransaction({
          date: date,
          type: typeTransaction,
          category: selected,
          comment: comment,
          sum: +amound,
        })
      );
      setSelected("");
      setAmound("");
      setComment('');
      setIncome(true);
      handleClose()
    }

  };

  const typeTransaction = income ? 'expense' : 'income';

  return (
    <>
      <ModalBackdrop
        onClick={e => {
          if (e.currentTarget === e.target) {
            handleClose();
          }
        }}
      >
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
              setSelected('');
            }}
          />          
          <SelectWrapper>
          <SelectCategoryButton
              placeholder={t('addTransactions.select')}
              readOnly
              onClick={() => {
                setIsActive(!isActive);
              }}
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
          {error && selected.length <= 0 ? toast.error("Category is required") : ""}
          <AmoundDateWrapper>
            <AmoundWrapper>
              <Amound
                style={amound ? { color: '#000000' } : { color: '#BDBDBD' }}
                name="amound"
                value={amound}
                min="1"
                placeholder="0.00"
                onChange={handleChange}
              />
            </AmoundWrapper>
            {error && amound.length <= 0 ? toast.error("Sum is required") : ''}
            <DateWrapper>
              <Calendar required name="date" value={date} onChange={handleChange} />
              <CalendarImg />
            </DateWrapper>
          </AmoundDateWrapper>
          
          <CommentWrapper>
            <Comments
              style={comment ? { color: '#000000' } : { color: '#BDBDBD' }}
              placeholder={t('addTransactions.comment')}
              name="comment"
              value={comment}
              onChange={handleChange}
            />
          </CommentWrapper>
          {error && comment.length <= 0 ? toast.error("Comment is required") : ""}
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
