import Media from 'react-media';
import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as authOperations from 'redux/auth/auth-operations';
import { getAllTransactions } from 'redux/transactions/transactions-operations';
import { get } from 'redux/categories/categories-operations';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.current());
    dispatch(getAllTransactions());
    dispatch(get());
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
