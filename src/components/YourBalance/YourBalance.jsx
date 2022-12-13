import {
  Wrapper,
  Text,
  Score,
} from 'components/YourBalance/YourBalance.styled';

export const YourBalance = () => {
  return (
    <Wrapper>
      <Text>Your balance</Text>
      <Score>₴ 24 000.00</Score>
    </Wrapper>
  );
};
