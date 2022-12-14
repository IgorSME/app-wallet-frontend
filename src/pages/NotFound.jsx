import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 {t('err404')} !!!</h1>
      <Link to={'/home'}>{t('err404redirect')}</Link>
    </div>
  );
}
