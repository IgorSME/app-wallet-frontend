
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { get } from 'redux/categories/categories-operations'

import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import { OpenModalBtn, PlusIconSvg } from './Modal.styled';

export function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <OpenModalBtn onClick={openModal}>
        <PlusIconSvg />
      </OpenModalBtn>

      {isModalOpen && (
        <ModalAddTransaction
          onClose={closeModal}
          // onSubmit={onAddTransaction}
        />
      )}
    </>
  );
}
