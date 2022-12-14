import { useSelector } from 'react-redux';
import { getBalance } from 'redux/selectors';
import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  Text,
  Score,
} from 'components/YourBalance/YourBalance.styled';
import { transformNumber } from 'helpers';

export const YourBalance = () => {
  const { t } = useTranslation();

  const userBalance = useSelector(getBalance);

  const balance = userBalance ? transformNumber(userBalance) : '0';

  return (
    <Wrapper>
      <Text>{t('balanceYour')}</Text>
      <Score>₴ {balance}</Score>
    </Wrapper>
  );
};
