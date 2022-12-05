import { useState } from "react";
import { useId } from "react";

 
import Switch from "components/Switch/Switch";
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
    AmoundDateWrapper,
    Amount,
    DateSelector,
    Comments,
    ModalButtonStyled
} from "./ModalAddTransaction.styled";

// import Calendar from '../Calendar/Calendar';


export default function ModalAddTransaction({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Main', 'Food', 'Auto', 'Development', 'Children', 'House', 'Education', 'Reset'];
    const inputId = useId();

    const [startDate, setStartDate] = useState(new Date());
    const onChange =(value)=> { setStartDate(value)}
    
    return (<>
        {/* <ModalBackdrop> */}
        <ModalContainerStyled>
            <ModalCloseBtn>
                <CloseBtnIcon/>
            </ModalCloseBtn>
            <ModalTitle>Add transaction</ModalTitle>
                <Switch id={ inputId} />
            <SelectWrapper>     
                <SelectCategoryButton onClick={(e) => setIsActive(!isActive)}>{selected}
                <SelectIconSvg/>
                </SelectCategoryButton>
                {isActive && (
                    <SelectCategoryList >
                        {options.map((option) => (
                            <SelectCategoryItem onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}>{option}</SelectCategoryItem>
                        ))}
            </SelectCategoryList>
                )}
            </SelectWrapper>
            <AmoundDateWrapper>
                <Amount />
                {/* <Calendar/> */}
                <DateSelector type="date" value={startDate} onChange={onChange}/>
                </AmoundDateWrapper>
            <Comments placeholder="Comment"/>
            <ModalButtonStyled>ADD</ModalButtonStyled>
                <ModalButtonStyled>CANCEL</ModalButtonStyled>
            </ModalContainerStyled>
            {/* </ModalBackdrop> */}
    </>
    );
}