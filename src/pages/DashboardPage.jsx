import Media from 'react-media';
import { Outlet, useLocation } from 'react-router-dom';

import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

// import * as authOperations from 'redux/auth/auth-operations';
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
  Modal,
} from 'components';

const DashboardPage = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(true);
  const { pathname } = useLocation();

  useMemo(() => {
    if (pathname === '/home') {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pathname]);

  useEffect(() => {
    // dispatch(authOperations.current());
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
                {showModal && <Modal />}
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
