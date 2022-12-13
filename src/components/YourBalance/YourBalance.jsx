import { useSelector } from 'react-redux';
import { getBalance } from 'redux/selectors';

import {
  Wrapper,
  Text,
  Score,
} from 'components/YourBalance/YourBalance.styled';
import { transformNumber } from 'helpers';

export const YourBalance = () => {
  const userBalance = useSelector(getBalance);

  return (
    <Wrapper>
      <Text>Your balance</Text>
      <Score>₴ {transformNumber(userBalance)}</Score>
    </Wrapper>
  );
};
