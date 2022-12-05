import styled from '@emotion/styled';

import IncomePng from 'images/IncomePng.png';
import ExpensePng from 'images/ExpensePng.png';

export const SwitchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 40px;

@media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
}

p {
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.income};
margin-right: 20px;
}

p:last-child {
    color: ${p => p.theme.colors.placeholder};
    margin-left: 20px;
}

label {
    position: relative;
display: flex;

}
 input {
    opacity: 0;
    width: 0;
    height: 0;
 }

 label::before {
    content: "";
    width: 80px;
    height: 40px;
    background-color: ${p => p.theme.colors.modalBackground};
    border-radius: ${p => p.theme.radii.large};
    border: ${p => p.theme.borders.radioBtn};
    }

    label::after {
        position: absolute;
        content: "";
        background-image: url(${IncomePng});
        background-repeat: no-repeat;
        background-position: center;
        top: -3px;
        left: -8px;
        right: 0;
        bottom: 0;
        width: 44px;
        height: 44px;
        background-color: ${p => (p.theme.colors.income)};
        border-radius: ${p => p.theme.radii.large};
        box-shadow: ${p => p.theme.shadows.addBtn};
        transition: left 0.2s;
        }
        
        input:checked {
              & + label::after {
                background-color: ${p => (p.theme.colors.expense)};
                background-image: url(${ExpensePng});
                left: 40px;
              }}
`;