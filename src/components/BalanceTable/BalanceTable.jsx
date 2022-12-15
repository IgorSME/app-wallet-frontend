import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllTransactions } from 'redux/transactions/transactions-operations';
import {
  getTransactions,
  getTransactionsLoading,
  // getPage,
  getTotalTransactions,
} from 'redux/selectors';
import { formatDate } from 'helpers';

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
  BOxBtn,
} from './BalanceTable.styled';
import { NoStatisticsText, LoaderStatistics, ButtonLoadMore } from 'components';

export const BalanceTable = transactions => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const transactionsPage = useSelector(getTransactions);
  const loading = useSelector(getTransactionsLoading);
  // const currentPage = useSelector(getPage);

  //-----костыль------//
  const [page, setPage] = useState(2);

  const totalTransactions = useSelector(getTotalTransactions)?.length;
  const isLastPage = page - 1 < totalTransactions / 5;

  const onClickLoadMoreBtn = () => {
    // dispatch(getAllTransactions({ page: currentPage + 1 }));

    //пока с бека не приходит текущая страница и общее колличество страниц - сделаю костыли//
    setPage(page + 1);

    dispatch(getAllTransactions({ page: page }));
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
                    <td>{type}</td>
                    <td>{category}</td>
                    <td>{comment}</td>
                    <td>{sum}</td>
                    <td>{balanceAfterTransaction}</td>
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
              <Element key={_id}>
                <Item>
                  <ItemFirstChild>Date</ItemFirstChild>
                  <ItemLastChild>{formatDate(date)}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Type</ItemFirstChild>
                  <ItemLastChild>{type}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Category</ItemFirstChild>
                  <ItemLastChild>{category}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Comment</ItemFirstChild>
                  <ItemLastChild>{comment}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Sum</ItemFirstChild>
                  <ItemLastChild>{sum}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Balance</ItemFirstChild>
                  <ItemLastChild>{balanceAfterTransaction}</ItemLastChild>
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
