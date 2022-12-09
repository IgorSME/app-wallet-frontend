import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  Section,
  Container,
  Title,
  Chart,
  StatisticsFilterSelect,
  StatisticsList,
  StatisticsWrapper,
} from 'components';

const example = {
  allCategories: [
    {
      categoryName: 'Basic expenses',
      color: '#FED057',
      totalSum: 20548.789,
    },
    {
      categoryName: 'Products',
      color: '#FFD8D0',
      totalSum: 4521,
    },
    {
      categoryName: 'Car',
      color: '#FD9498',
      totalSum: 6484.541,
    },
    {
      categoryName: 'Self care',
      color: '#C5BAFF',
      totalSum: 800,
    },
    {
      categoryName: 'Child care',
      color: '#6E78E8',
      totalSum: 1500,
    },
    {
      categoryName: 'Household products',
      color: '#4A56E2',
      totalSum: 35000.785,
    },
    {
      categoryName: 'Education',
      color: '#81E1FF',
      totalSum: 6548.8165,
    },
    {
      categoryName: 'Entertainment',
      color: '#00AD84',
      totalSum: 215,
    },
    {
      categoryName: 'Leisure',
      color: '#24CCA7',
      totalSum: 751,
    },
  ],
  typesTotalSum: [
    {
      typeName: 'expense',
      totalSum: 548631.5874,
    },
    {
      typeName: 'income',
      totalSum: 54863.415,
    },
  ],
};

export default function Statistics() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { year, month } = params;

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchStatistics({ year, month }));
  // }, [dispatch]);

  const handleChangeSearch = (name, value) => {
    const nextParams = value !== '' ? { ...params, [name]: value } : {};

    setSearchParams(nextParams);
  };

  const statisticBalans = () => {
    return (
      example.typesTotalSum[1].totalSum - example.typesTotalSum[0].totalSum
    );
  };

  return (
    <Section>
      <Container>
        <StatisticsWrapper>
          <Title>Statistics</Title>
          <Chart dataDiagram={example.allCategories} sum={statisticBalans()} />
        </StatisticsWrapper>
        <StatisticsWrapper>
          <StatisticsFilterSelect
            handleChangeSearch={handleChangeSearch}
            currentFilter={{ year, month }}
          />
          <StatisticsList data={example} />
        </StatisticsWrapper>
      </Container>
    </Section>
  );
}
