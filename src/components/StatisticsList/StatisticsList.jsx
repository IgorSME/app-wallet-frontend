import React from 'react';
import {
  Box,
  WrapperHeader,
  ListCategories,
  ListItem,
  Wrapper,
  Color,
  ListSum,
  ListSumItem,
  ListSumText,
  ListSumNumber,
} from './StatisticsList.styled';

const example = {
  allCategories: [
    {
      categoryName: 'Car',
      totalSum: 20548,
    },
    {
      categoryName: 'Education',
      totalSum: 6548,
    },
    {
      categoryName: 'Entertainment',
      totalSum: 215,
    },
    {
      categoryName: 'Leisure',
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

export function StatisticsList(arr) {
  const { allCategories, typesTotalSum } = example;
  return (
    <Box>
      <WrapperHeader>
        <p>Category</p>
        <p>Sum</p>
      </WrapperHeader>
      <ListCategories>
        {allCategories.map(({ categoryName, totalSum }) => (
          <ListItem key={categoryName}>
            <Wrapper>
              <Color></Color>
              <p>{categoryName}</p>
            </Wrapper>
            <p>{totalSum}</p>
          </ListItem>
        ))}
      </ListCategories>
      <ListSum>
        {typesTotalSum.map(({ typeName, totalSum }) => (
          <ListSumItem key={typeName}>
            <ListSumText>{typeName}:</ListSumText>
            <ListSumNumber textColor={typeName}>{totalSum}</ListSumNumber>
          </ListSumItem>
        ))}
      </ListSum>
    </Box>
  );
}
