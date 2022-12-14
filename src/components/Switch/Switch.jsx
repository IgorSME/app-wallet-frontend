import { useTranslation } from 'react-i18next';

import { SwitchContainer } from './Switch.styled';

export function Switch({ id, income, onToggle }) {
  const { t } = useTranslation();

  return (
    <SwitchContainer>
      <p style={income ? { color: '#E0E0E0' } : { color: '#24CCA7' }}>
        {t('income')}
      </p>
      <input type="checkbox" id={id} checked={income} onChange={onToggle} />
      <label htmlFor={id} />
      <p style={income ? { color: '#FF6596' } : { color: '#E0E0E0' }}>
        {t('expense')}
      </p>
    </SwitchContainer>
  );
}
