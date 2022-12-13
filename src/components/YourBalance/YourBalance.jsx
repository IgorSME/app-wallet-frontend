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

  const balance = userBalance ? transformNumber(userBalance) : '0';

  return (
    <Wrapper>
      <Text>Your balance</Text>
      <Score>₴ {balance}</Score>
    </Wrapper>
  );
};
