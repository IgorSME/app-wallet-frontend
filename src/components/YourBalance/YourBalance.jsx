import {
  Section,
  Container,
  Text,
  Score,
} from 'components/YourBalance/YourBalance.styled';

const YourBalance = () => {
  return (
    <Section>
      <Container>
        <Text>Your balance</Text>
        <Score>₴ 24 000.00</Score>
      </Container>
    </Section>
  );
};

export default YourBalance;
