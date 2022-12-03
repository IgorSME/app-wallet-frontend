import styled from '@emotion/styled';
import {
  ButtonStyled,
} from 'components/common/commonComponents.styled';

export const StatisticButtonStyled = styled(ButtonStyled)`
  margin: 0 auto;
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  text-transform: none;
  color: ${p => p.theme.colors.primaryText};
`