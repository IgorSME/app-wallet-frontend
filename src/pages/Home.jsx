import BalanceTable from 'components/BalanceTable/BalanceTable';
import YourBalance from 'components/YourBalance/YourBalance';

import Modal from 'components/Modal/Modal';
import Media from 'react-media';

const Home = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 768px)',
      }}
    >
      {matches =>
        matches.small ? (
          <>
            <YourBalance />
            <BalanceTable />
            <Modal />
          </>
        ) : (
          <>
            <BalanceTable />
            <Modal />
          </>
        )
      }
    </Media>
  );
};

export default Home;
