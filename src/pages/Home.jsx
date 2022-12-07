import BalanceTable from 'components/BalanceTable/BalanceTable';
import YourBalance from 'components/YourBalance/YourBalance';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <YourBalance />
      <BalanceTable />
    </>
  );
};

export default Home;
