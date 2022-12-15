import { useTranslation } from 'react-i18next';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

import { getAllTransactions } from 'redux/transactions/transactions-operations';
import {
  getTransactions,
  getTransactionsLoading,
  getPage,
  getTotalPages,
  // getTotalTransactions,
} from 'redux/selectors';
import { formatDate, transformNumber } from 'helpers';

import {
  ContainerTable,
  Table,
  Thead,
  TheadTr,
  TheadTrTh,
  Tbody,
  TbodyTr,
  ContainerList,
  List,
  Element,
  Item,
  ItemFirstChild,
  ItemLastChild,
  TableSumNumber,
  ListSumNumber,
  BOxBtn,
} from './BalanceTable.styled';
import { NoStatisticsText, LoaderStatistics, ButtonLoadMore } from 'components';

export const BalanceTable = transactions => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const transactionsPage = useSelector(getTransactions);
  const loading = useSelector(getTransactionsLoading);
  const currentPage = +useSelector(getPage);
  const totalPages = +useSelector(getTotalPages);

  const isLastPage = currentPage < totalPages;

  const onClickLoadMoreBtn = () => {
    dispatch(getAllTransactions({ page: +currentPage + 1 }));
  };

  const isNoTransactions = transactionsPage?.length === 0;

  return (
    <>
      {loading ? (
        <LoaderStatistics />
      ) : isNoTransactions ? (
        <NoStatisticsText>{t('transactions.text')}</NoStatisticsText>
      ) : (
        <ContainerTable>
          <Table>
            <Thead>
              <TheadTr>
                <TheadTrTh>{t('transactions.date')}</TheadTrTh>
                <th>{t('transactions.type')}</th>
                <th>{t('transactions.category')}</th>
                <th>{t('transactions.comment')}</th>
                <th>{t('transactions.sum')}</th>
                <TheadTrTh>{t('transactions.balance')}</TheadTrTh>
              </TheadTr>
            </Thead>
            <Tbody>
              {transactionsPage.map(
                ({
                  _id,
                  date,
                  type,
                  category,
                  comment,
                  sum,
                  balanceAfterTransaction,
                }) => (
                  <TbodyTr key={_id}>
                    <td>{formatDate(date)}</td>
                    <td>{type === 'income' ? '+' : '-'}</td>
                    <td>{category}</td>
                    <td>
                      <EllipsisText text={comment} length={18} />
                    </td>

                    <TableSumNumber textColor={type}>
                      {transformNumber(sum)}
                    </TableSumNumber>

                    <td>{transformNumber(balanceAfterTransaction)}</td>
                  </TbodyTr>
                )
              )}
            </Tbody>
          </Table>
          {isLastPage && (
            <BOxBtn>
              <ButtonLoadMore onClick={onClickLoadMoreBtn} />
            </BOxBtn>
          )}
        </ContainerTable>
      )}

      <ContainerList>
        <List>
          {transactionsPage.map(
            ({
              _id,
              date,
              type,
              category,
              comment,
              sum,
              balanceAfterTransaction,
            }) => (
              <Element key={_id} textColor={type}>
                <Item>
                  <ItemFirstChild>{t('transactions.date')}</ItemFirstChild>
                  <ItemLastChild>{formatDate(date)}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Type</ItemFirstChild>
                  <ItemLastChild>{type === 'income' ? '+' : '-'}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>{t('transactions.category')}</ItemFirstChild>
                  <ItemLastChild>{category}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>{t('transactions.comment')}</ItemFirstChild>
                  <ItemLastChild>
                    <EllipsisText text={comment} length={18} />
                  </ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Sum</ItemFirstChild>
                  <ListSumNumber textColor={type}>
                    {transformNumber(sum)}
                  </ListSumNumber>
                </Item>
                <Item>
                  <ItemFirstChild>Balance</ItemFirstChild>

                  <ItemLastChild>
                    {transformNumber(balanceAfterTransaction)}
                  </ItemLastChild>
                </Item>
              </Element>
            )
          )}
        </List>
        {isLastPage && (
          <BOxBtn>
            <ButtonLoadMore onClick={onClickLoadMoreBtn} />
          </BOxBtn>
        )}
      </ContainerList>
    </>
  );
};
