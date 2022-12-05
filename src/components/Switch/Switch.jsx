import { SwitchContainer } from "./Switch.styled";


export default function Switch({ id }) {
    
    return (
        <SwitchContainer>
            <p>Income</p>
            <input type="checkbox" id={id} />
            <label htmlFor={id}></label>
            <p>Expense</p>
        </SwitchContainer>
    );
}