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
import { NoStatisticsText, LoaderStatistics } from '../../components';

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
        </ContainerTable>
      )}

      <ContainerList>
        <List>
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
              <Element key={_id}>
                <Item>
                  <ItemFirstChild>Date</ItemFirstChild>
                  <ItemLastChild>{date}</ItemLastChild>
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
      </ContainerList>
    </>
  );
};
