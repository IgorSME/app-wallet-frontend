import Media from 'react-media';

import {
  BalanceTable,
  YourBalance,
  Modal,
  ContainerNav,
  ContainerTable,
} from 'components';

const Home = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        other: '(min-width: 768px)',
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <section style={{ paddingBottom: 40 }}>
              <ContainerNav>
                <YourBalance />
                <BalanceTable />
                <Modal />
              </ContainerNav>
            </section>
          )}
          {matches.other && (
            <section style={{ paddingTop: 46 }}>
              <ContainerTable>
                <BalanceTable />
              </ContainerTable>
              <Modal />
            </section>
          )}
        </>
      )}
    </Media>
  );
};

export default Home;
