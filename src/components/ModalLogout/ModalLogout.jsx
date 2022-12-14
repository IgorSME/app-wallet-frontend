import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

import { Overlay, Box, Title, Button, ButtonText } from './ModalLogout.styled';

const modalRef = document.querySelector('#modal-root');

export function ModalLogout({ onClose, onLogout }) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Box>
        <Title>{t('logout.text')}</Title>
        <>
          <Button type="button" onClick={onLogout}>
            <ButtonText>{t('logout.exit')}</ButtonText>
          </Button>
          <Button type="button" onClick={onClose}>
            <ButtonText>{t('logout.cancel')}</ButtonText>
          </Button>
        </>
      </Box>
    </Overlay>,
    modalRef
  );
}
