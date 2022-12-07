import { useState } from "react";
import ModalAddTransaction from "components/ModalAddTransaction/ModalAddTransaction";


export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <button type="button" onClick={openModal}>Open modal</button>
            {isModalOpen &&
                <ModalAddTransaction onClose={closeModal}/>
            }
            </>
    );
}