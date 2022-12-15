import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import { getTransactions, getTransactionsLoading } from '../../redux/selectors';
import { getAllTransactions } from '../../redux/transactions/transactions-operations';
import { formatDate, transformNumber } from '../../helpers';

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
} from 'components/BalanceTable/BalanceTable.styled';
import { NoStatisticsText, LoaderStatistics } from '../../components';

export const BalanceTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const allTransactions = useSelector(getTransactions);
  const loading = useSelector(getTransactionsLoading);
  console.log(allTransactions[0]);
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
                    <td>{formatDate(date)}</td>
                    <td>{type === 'income' ? '+' : '-'}</td>
                    <td>{category}</td>

                    <td>
                      <EllipsisText text={comment} length={'18'} />
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
              <Element key={_id} textColor={type}>
                <Item>
                  <ItemFirstChild>Date</ItemFirstChild>
                  <ItemLastChild>{formatDate(date)}</ItemLastChild>
                </Item>
                <Item>
                  <ItemFirstChild>Type</ItemFirstChild>
                  <ItemLastChild>{type === 'income' ? '+' : '-'}</ItemLastChild>
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
      </ContainerList>
    </>
  );
};
