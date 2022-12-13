import { SwitchContainer } from "./Switch.styled";

export default function Switch({ id, income, onToggle}) {

    return (
        <SwitchContainer>
            <p style={income ? { color: '#E0E0E0' } : { color: '#24CCA7' }}>Income</p>
            <input type="checkbox" id={id} checked={income} onChange={onToggle} />
            <label htmlFor={id}/>
            <p style={income ? { color: '#FF6596' } : { color: '#E0E0E0' }}>Expense</p>
        </SwitchContainer>
    );
}