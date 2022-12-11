import Navigation from '../components/Navigation/Navigation';
import YourBalance from '../components/YourBalance/YourBalance';
import { CurrencyTable } from '../components/CurrencyTable/CurrencyTable';
import { AppBar } from '../components/AppBar/AppBar';
import Media from 'react-media';

const DashboardPage = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 768px)',
      }}
    >
      {matches =>
        matches.small ? (
          <>
            <AppBar />
            <Navigation />
          </>
        ) : (
          <>
            <AppBar />
            <Navigation />
            <YourBalance />
            <CurrencyTable />
          </>
        )
      }
    </Media>
  );
};

export default DashboardPage;
