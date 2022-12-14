import { useTranslation } from 'react-i18next';
import { Btn } from './ButtonLoadMore.styled';

export function ButtonLoadMore({ onClick }) {
  const { t } = useTranslation();

  return (
    <Btn type="button" onClick={onClick}>
      {t('loadMoreBtn')}
    </Btn>
  );
}
