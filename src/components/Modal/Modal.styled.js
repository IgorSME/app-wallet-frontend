import styled from '@emotion/styled';

import { ReactComponent as BtnAddTrans } from '../../images/btn-add-transaction.svg';

export const OpenModalBtn = styled.button`
  position: fixed;
  width: 44px;
  height: 44px;
  background-color: ${p => p.theme.colors.accent};
  outline: none;
  border: transparent;
  border-radius: ${p => p.theme.radii.large};
  box-shadow: ${p => p.theme.shadows.addBtn};
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  display: flex;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 6%;
    right: 6%;
  }
`;

export const PlusIconSvg = styled(BtnAddTrans)`
  margin: auto;
  width: 20px;
  height: 20px;
`;
