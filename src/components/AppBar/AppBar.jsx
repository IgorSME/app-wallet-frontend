import { Logo } from 'components/Logo/Logo';
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
  );
};
