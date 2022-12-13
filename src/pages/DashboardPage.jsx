import Media from 'react-media';
import { Outlet } from 'react-router-dom';

import Currency from 'pages/Currency';

import {
  AppBar,
  YourBalance,
  Navigation,
  SectionStyled,
  ContainerNav,
  WrapperNav,
  WrapperDesktop,
} from 'components';

const DashboardPage = () => {
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          other: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <>
                <AppBar />
                <main style={{ position: 'relative' }}>
                  <SectionStyled>
                    <Navigation />
                  </SectionStyled>

                  <Outlet />
                </main>
              </>
            )}
            {matches.other && (
              <>
                <AppBar />
                <main style={{ position: 'relative' }}>
                  <WrapperDesktop>
                    <SectionStyled>
                      <ContainerNav>
                        <WrapperNav>
                          <Navigation />
                          <YourBalance />
                        </WrapperNav>
                        <Currency />
                      </ContainerNav>
                    </SectionStyled>
                    <Outlet />
                  </WrapperDesktop>
                </main>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default DashboardPage;
