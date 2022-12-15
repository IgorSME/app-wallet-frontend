import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTransactions,
  getTransactionsLoading,
  // getPage,
  getTotalTransactions,
} from 'redux/selectors';

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

import { getAllTransactions } from 'redux/transactions/transactions-operations';

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
                    <td>{date}</td>
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
          <Element>
            <Item>
              <ItemFirstChild>Date</ItemFirstChild>
              <ItemLastChild>04.01.19</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Type</ItemFirstChild>
              <ItemLastChild> - </ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Category</ItemFirstChild>
              <ItemLastChild>Other</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Comment</ItemFirstChild>
              <ItemLastChild>Gift for your wife</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Sum</ItemFirstChild>
              <ItemLastChild>300.00</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Balance</ItemFirstChild>
              <ItemLastChild>6 900.00</ItemLastChild>
            </Item>
          </Element>
          <Element>
            <Item>
              <ItemFirstChild>Date</ItemFirstChild>
              <ItemLastChild>04.01.19</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Type</ItemFirstChild>
              <ItemLastChild> - </ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Category</ItemFirstChild>
              <ItemLastChild>Other</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Comment</ItemFirstChild>
              <ItemLastChild>Gift for your wife</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Sum</ItemFirstChild>
              <ItemLastChild>300.00</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Balance</ItemFirstChild>
              <ItemLastChild>6 900.00</ItemLastChild>
            </Item>
          </Element>
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
