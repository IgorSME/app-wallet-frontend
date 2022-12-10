import { BalanceTable, YourBalance } from 'components';

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
