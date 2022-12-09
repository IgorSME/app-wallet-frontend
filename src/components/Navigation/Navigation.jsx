import { NavLink } from 'react-router-dom';

import {
  Section,
  Container,
  List,
  Item,
  ItemText,
} from 'components/Navigation/Navigation.styled';
import { ReactComponent as Home } from 'images/home.svg';
import { ReactComponent as Statistics } from 'images/statistics.svg';
import { ReactComponent as Currency } from 'images/currency.svg';

const Navigation = () => {
  return (
    <>
      <Section>
        <Container>
          <List>
            <Item>
              <NavLink to="/home">
                <Home />
              </NavLink>
              <ItemText>Home</ItemText>
            </Item>
            <Item>
              <NavLink to="/home/statistics">
                <Statistics />
              </NavLink>
              <ItemText>Statistics</ItemText>
            </Item>
            <Item>
              <NavLink to="/home/currency">
                <Currency />
              </NavLink>
            </Item>
          </List>
        </Container>
      </Section>
    </>
  );
};

export default Navigation;
