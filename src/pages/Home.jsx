import BalanceTable from 'components/BalanceTable/BalanceTable';
import YourBalance from 'components/YourBalance/YourBalance';

import Modal from 'components/Modal/Modal';

const Home = () => {
  return (
    <>
      <YourBalance />
      <BalanceTable />
      <Modal/>
    </>
  );
};

export default Home;
