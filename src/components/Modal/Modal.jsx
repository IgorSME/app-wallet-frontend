
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import { OpenModalBtn, PlusIconSvg } from './Modal.styled';

export function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      {isModalOpen && <ModalAddTransaction onClose={closeModal} />}

    </>
  );
}
