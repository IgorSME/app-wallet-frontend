import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Logo, ModalLogout } from 'components';
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
} from './AppBar.styled';
import { ExitIcon } from './ExitIcon';

export const AppBar = () => {
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
          <Logo />
          <UserMenu>
            <UserName>{userName}</UserName>
            <Divider />
            <ExitBtn
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              <ExitIcon />
              <ExitText>Exit</ExitText>
            </ExitBtn>
          </UserMenu>
        </Container>
      </Header>

      {isOpenModal && (
        <ModalLogout onClose={onCloseModal} onLogout={handleLogOut} />
      )}

      {/* <Outlet /> */}
    </>
  );
};
