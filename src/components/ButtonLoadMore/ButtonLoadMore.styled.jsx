import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 200px;
  height: 40px;

  border-radius: 20px;
  background-color: ${props => props.theme.colors.accent};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: ${props => props.theme.colors.white};
  /* border: 0; */

  /* text-decoration: none; */
  cursor: pointer;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;
