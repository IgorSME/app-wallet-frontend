import Media from 'react-media';
import { useTranslation } from 'react-i18next';

import {
  AppNav,
  List,
  Item,
  NavLinkStyled,
} from 'components/Navigation/Navigation.styled';
import { ReactComponent as Home } from 'images/navigation/home.svg';
import { ReactComponent as Statistics } from 'images/navigation/statistics.svg';
import { ReactComponent as Currency } from 'images/navigation/currency.svg';

const navItems = [
  {
    href: '/home',
    text: 'home',
    icon: Home,
    isShow: true,
  },
  {
    href: '/statistics',
    text: 'statistics',
    icon: Statistics,
    isShow: true,
  },
  {
    href: '/currency',
    text: 'Currency',
    icon: Currency,
    isShow: false,
  },
];

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          large: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <AppNav>
                <List>
                  {navItems.map(({ href, icon: Icon }) => (
                    <Item key={href}>
                      <NavLinkStyled to={href}>
                        <Icon />
                      </NavLinkStyled>
                    </Item>
                  ))}
                </List>
              </AppNav>
            )}
            {matches.large && (
              <AppNav>
                <List>
                  {navItems.map(({ href, text, icon: Icon, isShow }) => (
                    <Item key={href}>
                      {isShow && (
                        <NavLinkStyled to={href}>
                          <Icon />
                          {t(`nav.${text}`)}
                          {/* {text} */}
                        </NavLinkStyled>
                      )}
                    </Item>
                  ))}
                </List>
              </AppNav>
            )}
          </>
        )}
      </Media>
    </>
  );
};
