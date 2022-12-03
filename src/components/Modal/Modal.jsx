import { useState } from "react";
import ModalAddTransaction from "components/ModalAddTransaction/ModalAddTransaction";

export default function Modal() {
    
    const [selected, setSelected] = useState('Select a category');
    

    return (
        <ModalAddTransaction selected={selected} setSelected={setSelected} />
    );
}