import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchStatistics } from 'redux/statistics/statistics-operations';
import statisticsSelectors from 'redux/statistics/statistics-selectors';
import { getMonthPosition } from 'helpers';

import {
  Section,
  Container,
  Title,
  Chart,
  StatisticsFilterSelect,
  StatisticsList,
  StatisticsWrapper,
  Loader,
  NoStatisticsText,
} from 'components';

const example = {
  allCategories: [
    {
      categoryName: 'Basic expenses',
      color: '#FED057',
      totalSum: 20548,
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
  const statisticsData = useSelector(statisticsSelectors.getStatistics);

  const loading = useSelector(statisticsSelectors.getIsLoading);
  const errorFetch = useSelector(statisticsSelectors.getError);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { year, month } = params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStatistics({ year, month: getMonthPosition(month) }));
  }, [dispatch, year, month]);

  const handleChangeSearch = (name, value) => {
    const nextParams = value !== '' ? { ...params, [name]: value } : {};

    setSearchParams(nextParams);
  };

  const profit = () => {
    return (
      example.typesTotalSum[1].totalSum - example.typesTotalSum[0].totalSum
    );
  };

  if (errorFetch) toast.error(errorFetch.response.data.message);

  const isNoStatisticsData = statisticsData.allCategories?.length === 0;

  return (
    <Chart dataDiagram={example.allCategories} profit={profit()} />

    <Section>
      <Container>
        {loading ? (
          <>
            <Title>Statistics</Title>
            <Loader />
          </>
        ) : (
          <>
            <StatisticsWrapper>
              <Title>Statistics</Title>
              {!isNoStatisticsData && (
                <Chart
                  dataDiagram={statisticsData.allCategories}
                  profit={profit()}
                />
              )}
            </StatisticsWrapper>
            <StatisticsWrapper>
              <StatisticsFilterSelect
                handleChangeSearch={handleChangeSearch}
                currentFilter={{ year, month }}
              />
              {isNoStatisticsData ? (
                <NoStatisticsText>
                  There are no transactions this month
                </NoStatisticsText>
              ) : (
                <StatisticsList data={statisticsData} />
              )}
            </StatisticsWrapper>
          </>
        )}
      </Container>
    </Section>

  );
}
