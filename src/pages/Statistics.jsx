import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Chart,
  ContainerStyled,
  ContainerBoxStyled,
  StatisticsFilterSelect,
  StatisticsList,
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
      totalSum: 6484,
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
      totalSum: 35000,
    },
    {
      categoryName: 'Education',
      color: '#81E1FF',
      totalSum: 6548,
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
      totalSum: 548631,
    },
    {
      typeName: 'income',
      totalSum: 54863,
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

  useEffect(() => {}, []);

  const handleChangeSearch = (name, value) => {
    const nextParams = value !== '' ? { ...params, [name]: value } : {};

    setSearchParams(nextParams);
  };

  return (
    <ContainerStyled as={'section'}>
      <ContainerBoxStyled>
        <h1>Statistics</h1>
        <Chart dataDiagram={example.allCategories} />
        <StatisticsFilterSelect
          handleChangeSearch={handleChangeSearch}
          currentFilter={{ year, month }}
        />
        <StatisticsList data={example} />
      </ContainerBoxStyled>
    </ContainerStyled>
  );
}
