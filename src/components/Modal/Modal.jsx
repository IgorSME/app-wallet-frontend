import { useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import { addTransaction } from "redux/transactions/transactions-operations";
import { getCategories } from 'redux/selectors';
import {get} from 'redux/categories/categories-operations'

import ModalAddTransaction from "components/ModalAddTransaction/ModalAddTransaction";
import {OpenModalBtn, PlusIconSvg } from "./Modal.styled";



export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const categories = useSelector(getCategories);
    console.log(categories);
    

    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(get())
      }, [dispatch]);

    
    const onAddTransaction = (payload) => {
    // dispatch(addTransaction(payload));
        console.log(payload);
};
    const openModal = () => {
        setIsModalOpen(true);

    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    return (
        <>
            <OpenModalBtn onClick={openModal}>
                <PlusIconSvg/>
            </OpenModalBtn>
    
            {isModalOpen &&
                <ModalAddTransaction categories={categories} onClose={closeModal}
                onSubmit={onAddTransaction}
            />
    }
    </>
    );
}