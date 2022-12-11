import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Logo } from '../Logo/Logo';
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
  const userName = useSelector(getName);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <Header>
        <Container>
          <Logo />
          <UserMenu>
            <UserName>{userName}</UserName>
            <Divider />
            <ExitBtn onClick={handleLogOut}>
              <ExitIcon />
              <ExitText>Exit</ExitText>
            </ExitBtn>
          </UserMenu>
        </Container>
      </Header>

      <Outlet />
    </>
  );
};
