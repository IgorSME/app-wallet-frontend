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
  Text,
  ListSumText,
  ListSumNumber,
} from './StatisticsList.styled';

import { transformNumber } from 'helpers';

export function StatisticsList({ data: { allCategories, typesTotalSum } }) {
  return (
    <Box>
      <WrapperHeader>
        <p>Category</p>
        <p>Sum</p>
      </WrapperHeader>
      <ListCategories>
        {allCategories.map(({ categoryName, totalSum, color }) => (
          <ListItem key={categoryName}>
            <Wrapper>
              <Color color={color}></Color>
              <Text name={{ categoryName, sum: transformNumber(totalSum) }}>
                {categoryName}
              </Text>
            </Wrapper>
            <p>{transformNumber(totalSum)}</p>
          </ListItem>
        ))}
      </ListCategories>
      <ListSum>
        {typesTotalSum.map(({ typeName, totalSum }) => (
          <ListSumItem key={typeName}>
            <ListSumText>{typeName}:</ListSumText>
            <ListSumNumber textColor={typeName}>
              {transformNumber(totalSum)}
            </ListSumNumber>
          </ListSumItem>
        ))}
      </ListSum>
    </Box>
  );
}
