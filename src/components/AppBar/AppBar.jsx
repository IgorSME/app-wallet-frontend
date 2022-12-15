import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Logo, ModalLogout, LanguageSwitcher } from 'components';
import { getName } from 'redux/selectors';
import { logout } from 'redux/auth/auth-operations';

import {
  Header,
  Container,
  UserMenu,
  UserName,
  Divider,
  ExitText,
  ExitBtn,
  ExitIconStyled,
  LogoLink,
} from './AppBar.styled';

export const AppBar = () => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const userName = useSelector(getName);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Header>
        <Container>
          <LogoLink to={'/home'}>
            <Logo />
          </LogoLink>
          <UserMenu>
            <LanguageSwitcher />
            <UserName>{userName}</UserName>
            <Divider />
            <ExitBtn
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              <ExitIconStyled />
              <ExitText>{t('exit')}</ExitText>
            </ExitBtn>
          </UserMenu>
        </Container>
      </Header>

      {isOpenModal && (
        <ModalLogout onClose={onCloseModal} onLogout={handleLogOut} />
      )}
    </>
  );
};
