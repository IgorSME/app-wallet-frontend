import { useTranslation } from 'react-i18next';

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

export const BalanceTable = () => {
  const { t } = useTranslation();

  return (
    <>
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
            <TbodyTr>
              <td>04.01.22</td>
              <td> - </td>
              <td>Other</td>
              <td>Gift for your wife</td>
              <td>300.00</td>
              <td>6 900.00</td>
            </TbodyTr>
            <TbodyTr>
              <td>05.01.19</td>
              <td> + </td>
              <td>Regular Income</td>
              <td>January bonus</td>
              <td>8 000.00</td>
              <td>14 900.00</td>
            </TbodyTr>
            <TbodyTr>
              <td>07.01.19</td>
              <td> - </td>
              <td>Car</td>
              <td>Oil</td>
              <td>1 000.00</td>
              <td>13 900.00</td>
            </TbodyTr>
            <TbodyTr>
              <td>07.01.19</td>
              <td> - </td>
              <td>Products</td>
              <td>Vegetables for the week</td>
              <td>280.00</td>
              <td>13 870.00</td>
            </TbodyTr>
            <TbodyTr>
              <td>07.01.19</td>
              <td> + </td>
              <td>Irregular Income</td>
              <td>Gift </td>
              <td>1 000.00</td>
              <td>14870.00</td>
            </TbodyTr>
          </Tbody>
        </Table>
      </ContainerTable>
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
