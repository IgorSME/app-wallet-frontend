import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions, getTransactionsLoading } from '../../redux/selectors';
import { getAllTransactions } from '../../redux/transactions/transactions-operations';

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
} from 'components/BalanceTable/BalanceTable.styled';
import { NoStatisticsText, LoaderStatistics, ButtonLoadMore } from 'components';

export const BalanceTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const allTransactions = useSelector(getTransactions);
  const loading = useSelector(getTransactionsLoading);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const isNoTransactions = allTransactions?.length === 0;

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
              {allTransactions.map(
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
          <ButtonLoadMore />
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
      </ContainerList>
    </>
  );
};
