import { Logo } from 'components/Logo/Logo';
import { ContainerStyled } from 'components/common/commonComponents.styled';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import {
  Header,
  UserMenu,
  UserName,
  Divider,
  ExitText,
  ExitBtn,
} from './AppBar.styled';
import { ExitIcon } from './ExitIcon';

export const AppBar = () => {
  return (
    <>
      <ContainerStyled>
        <Header>
          <Logo />
          <UserMenu>
            <UserName>Dima</UserName>
            <Divider />
            <ExitBtn onClick={() => {}}>
              <ExitIcon />
              <ExitText>Exit</ExitText>
            </ExitBtn>
          </UserMenu>
        </Header>
      </ContainerStyled>
      <Navigation />
      <Outlet />
    </>
  );
};
