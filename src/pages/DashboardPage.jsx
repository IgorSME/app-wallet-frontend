import { Navigation } from '../components/Navigation/Navigation';
import { YourBalance } from '../components/YourBalance/YourBalance';
import { CurrencyTable } from '../components/CurrencyTable/CurrencyTable';
import { AppBar } from '../components/AppBar/AppBar';
import Media from 'react-media';
import { Outlet } from 'react-router-dom';

const mobStyles = {
  position: 'relative',
  minWidth: '320px',
  margin: '0 auto',
};
const tabStyles = {
  position: 'relative',
  minWidth: '768px',
  margin: '0 auto',
};
const descStyles = {
  position: 'relative',
  minWidth: '1280px',
  margin: '0 auto',
};

const DashboardPage = () => {
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <>
                <AppBar />
                <main style={mobStyles}>
                  <Navigation />
                  <Outlet />
                </main>
              </>
            )}
            {matches.medium && (
              <>
                <AppBar />
                <main style={tabStyles}>
                  <Navigation />
                  <YourBalance />
                  <CurrencyTable />
                  <Outlet />
                </main>
              </>
            )}
            {matches.large && (
              <>
                <AppBar />
                <main style={descStyles}>
                  <Navigation />
                  <YourBalance />
                  <CurrencyTable />
                  <Outlet />
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
