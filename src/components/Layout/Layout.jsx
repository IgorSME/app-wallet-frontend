// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// import { AppBar } from 'components';
import { Box } from './Layout.styled';
import Navigation from '../Navigation/Navigation';
import { AppBar } from 'components';
import YourBalance from 'components/YourBalance/YourBalance';
import CurrencyTable from 'components/CurrencyTable/CurrencyTable';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box>
        <p>
          <Navigation />
          <YourBalance />
          <CurrencyTable />
        </p>
        <p>Content</p>
      </Box>
    </>
  );
};
