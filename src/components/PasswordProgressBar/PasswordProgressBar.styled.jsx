import styled from '@emotion/styled';
import { css } from '@emotion/react';

const stylesCss = props =>
  css`
    background-color: ${props.backgroundColor};
    border: 4px solid ${props.backgroundColor};
    width: ${props.width};
  `;

export const ProgressBarStyled = styled.div`
  position: absolute;
  width: 125px;
  height: 0px;
  left: 0;
  top: 53px;
  border-radius: 5px;
  box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
  ${stylesCss}
  @media screen and (min-width: 768px) {
    width: 183.5px;
    left: 0;
    top: 53px;
    ${stylesCss}
  }
  @media screen and (min-width: 1280px) {
    width: 183.5px;
    left: 0;
    top: 53px;
    ${stylesCss}
  }
`;
