import { SwitchContainer } from "./Switch.styled";

export default function Switch({ id, isToggled, onToggle}) {

    return (
        <SwitchContainer>
            <p style={isToggled ? { color: '#E0E0E0' } : { color: '#24CCA7' }}>Income</p>
            <input type="checkbox" id={id} checked={isToggled} onChange={onToggle} />
            <label htmlFor={id}/>
            <p style={isToggled ? { color: '#FF6596' } : { color: '#E0E0E0' }}>Expense</p>
        </SwitchContainer>
    );
}