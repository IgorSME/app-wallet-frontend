import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
  LoaderStatistics,
  NoStatisticsText,
} from 'components';

export default function Statistics() {
  const { t } = useTranslation();

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
    const [income, expense] = statisticsData.typesTotalSum;

    return income.totalSum - expense.totalSum;
  };

  if (errorFetch) toast.error(errorFetch.response.data.message);

  // const isNoStatisticsData = false;
  const isNoStatisticsData = statisticsData.allCategories?.length === 0;

  return (
    <>
      <Section>
        <Container>
          {loading ? (
            <>
              <Title>{t('nav.statistics')}</Title>
              <LoaderStatistics />
            </>
          ) : (
            <>
              <StatisticsWrapper>
                <Title>{t('nav.statistics')}</Title>
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
                  <NoStatisticsText>{t('diagram.text')}</NoStatisticsText>
                ) : (
                  <StatisticsList data={statisticsData} />
                )}
              </StatisticsWrapper>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
