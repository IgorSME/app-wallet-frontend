import Media from 'react-media';

import {
  BalanceTable,
  YourBalance,
  Modal,
  ContainerNav,
  ContainerTable,
  SectionHomeTable,
} from 'components';

const Home = () => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        other: '(min-width: 768px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && (
            <section style={{ paddingBottom: 40 }}>
              <ContainerNav>
                <YourBalance />
                <BalanceTable />
                <Modal />
              </ContainerNav>
            </section>
          )}
          {matches.other && (
            <SectionHomeTable>
              <ContainerTable>
                <BalanceTable />
              </ContainerTable>
              <Modal />
            </SectionHomeTable>
          )}
        </>
      )}
    </Media>
  );
};

export default Home;
