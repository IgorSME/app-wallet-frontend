import { useState } from "react";
import { useId } from "react";
import {
    // ModalBackdrop,
    ModalContainerStyled,
    ModalTitle,
    IncomeExpenseContainer,
    IncomeLine,
    SwitchLabel,
    SwitchInput,
    ExpenseLine,
    SelectWrapper,
    SelectCategoryButton,
    SelectCategoryList,
    SelectCategoryItem,
    Amount,
    DateSelector,
    Comments,
    ModalButtonStyled
} from "./ModalAddTransaction.styled";


export default function ModalAddTransaction({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Main', 'Food', 'Auto', 'Development', 'Children', 'House', 'Education', 'Reset'];
    const inputId = useId();
    return (<>
        <ModalContainerStyled>
            {/* <ModalBackdrop/> */}
            <ModalTitle>Add transaction</ModalTitle>
            <IncomeExpenseContainer>
                <IncomeLine>Income</IncomeLine>
                <SwitchInput id={inputId}type="checkbox"/>
                <SwitchLabel for={inputId}/>
                <ExpenseLine>Expense</ExpenseLine>
            </IncomeExpenseContainer>
            <SelectWrapper>     
                <SelectCategoryButton onClick={(e)=> setIsActive(!isActive)}>{selected}</SelectCategoryButton>
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
            <Amount/>
            <DateSelector/>
            <Comments placeholder="Comment"/>
            <ModalButtonStyled>ADD</ModalButtonStyled>
            <ModalButtonStyled>CANCEL</ModalButtonStyled>
        </ModalContainerStyled>
    </>
    );
}