import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Media from 'react-media';
import { Outlet } from 'react-router-dom';

import Currency from 'pages/Currency';
import * as authOperations from 'redux/auth/auth-operations';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.current());
  }, [dispatch]);

  return (
    <>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          other: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile && (
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
