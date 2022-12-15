import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as authOperations from 'redux/auth/auth-operations';

import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import { OpenModalBtn, PlusIconSvg } from './Modal.styled';

export function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(authOperations.current());
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
