import { NavLink } from 'react-router-dom';

import {
  NavigationSectionStyled,
  NavigationContainerStyled,
  NavigationListStyled,
  NavigationItemStyled,
  NavigationItemTextStyled,
} from 'components/Navigation/Navigation.styled';
import { ReactComponent as Home } from 'images/home.svg';
import { ReactComponent as Statistics } from 'images/statistics.svg';
import { ReactComponent as Currency } from 'images/currency.svg';

const Navigation = () => {
  return (
    <>
      <NavigationSectionStyled>
        <NavigationContainerStyled>
          <NavigationListStyled>
            <NavigationItemStyled>
              <NavLink to="/home">
                <Home />
                <NavigationItemTextStyled>Home</NavigationItemTextStyled>
              </NavLink>
            </NavigationItemStyled>
            <NavigationItemStyled>
              <NavLink to="/statistics">
                <Statistics />
                <NavigationItemTextStyled>Statistics</NavigationItemTextStyled>
              </NavLink>
            </NavigationItemStyled>
            <NavigationItemStyled>
              <NavLink to="/currency">
                <Currency />
              </NavLink>
            </NavigationItemStyled>
          </NavigationListStyled>
        </NavigationContainerStyled>
      </NavigationSectionStyled>
    </>
  );
};

export default Navigation;
