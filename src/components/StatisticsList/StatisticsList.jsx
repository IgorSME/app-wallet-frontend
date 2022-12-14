import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Box>
      <WrapperHeader>
        <p>{t('category')}</p>
        <p>{t('sum')}</p>
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
