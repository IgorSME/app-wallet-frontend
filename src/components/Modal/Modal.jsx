import { useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import ModalAddTransaction from "components/ModalAddTransaction/ModalAddTransaction";

import { addTransaction, getAllTransactions } from "redux/transactions/transactions-operations";

import {OpenModalBtn, PlusIconSvg } from "./Modal.styled";

export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllTransactions())
//   }, [dispatch]);

  const onAddTransaction = (payload) => {
      dispatch(addTransaction(payload));
      console.log(dispatch);
  };

    return (
        <>
            <OpenModalBtn onClick={openModal}>
                <PlusIconSvg/>
            </OpenModalBtn>
    
            {isModalOpen &&
                <ModalAddTransaction onClose={closeModal} onSubmit={onAddTransaction} />
    }
    </>
    );
}