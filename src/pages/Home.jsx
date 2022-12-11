import { BalanceTable } from 'components';
import { Navigation } from '../components/Navigation/Navigation';
import { YourBalance } from '../components/YourBalance/YourBalance';
import { CurrencyTable } from '../components/CurrencyTable/CurrencyTable';
import { AppBar } from '../components/AppBar/AppBar';
import Modal from 'components/Modal/Modal';

import Media from 'react-media';

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

const Home = () => {
  return (
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
              <main style={mobStyles}>
                <Navigation />
                <YourBalance />
                <BalanceTable />
                <Modal />
              </main>
            </>
          )}
          {matches.medium && (
            <>
              <main style={tabStyles}>
                <Navigation />
                <YourBalance />
                <CurrencyTable />
                <BalanceTable />
                <Modal />
              </main>
            </>
          )}
          {matches.large && (
            <>
              <main style={descStyles}>
                <Navigation />
                <YourBalance />
                <CurrencyTable />
                <BalanceTable />
                <Modal />
              </main>
            </>
          )}
        </>
      )}
    </Media>
  );
};

export default Home;
