import {
  Section,
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
  return (
    <Section>
      <ContainerTable>
        <Table>
          <Thead>
            <TheadTr>
              <TheadTrTh>Date</TheadTrTh>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <TheadTrTh>Balance</TheadTrTh>
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
              <td>14 870.00</td>
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
              <ItemLastChild>05.01.19</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Type</ItemFirstChild>
              <ItemLastChild> + </ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Category</ItemFirstChild>
              <ItemLastChild>Regular Income</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Comment</ItemFirstChild>
              <ItemLastChild>January bonus</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Sum</ItemFirstChild>
              <ItemLastChild>8 000.00</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Balance</ItemFirstChild>
              <ItemLastChild>14 900.00</ItemLastChild>
            </Item>
          </Element>
          <Element>
            <Item>
              <ItemFirstChild>Date</ItemFirstChild>
              <ItemLastChild>07.01.19</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Type</ItemFirstChild>
              <ItemLastChild> - </ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Category</ItemFirstChild>
              <ItemLastChild>Car</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Comment</ItemFirstChild>
              <ItemLastChild>Oil</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Sum</ItemFirstChild>
              <ItemLastChild>1000.00</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Balance</ItemFirstChild>
              <ItemLastChild>13 900.00</ItemLastChild>
            </Item>
          </Element>
          <Element>
            <Item>
              <ItemFirstChild>Date</ItemFirstChild>
              <ItemLastChild>07.01.19</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Type</ItemFirstChild>
              <ItemLastChild> - </ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Category</ItemFirstChild>
              <ItemLastChild>Products</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Comment</ItemFirstChild>
              <ItemLastChild>Vegetables for the week</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Sum</ItemFirstChild>
              <ItemLastChild>280.00</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Balance</ItemFirstChild>
              <ItemLastChild>13 870.00</ItemLastChild>
            </Item>
          </Element>
          <Element>
            <Item>
              <ItemFirstChild>Date</ItemFirstChild>
              <ItemLastChild>07.01.19</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Type</ItemFirstChild>
              <ItemLastChild> + </ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Category</ItemFirstChild>
              <ItemLastChild>Irregular Income</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Comment</ItemFirstChild>
              <ItemLastChild>Gift</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Sum</ItemFirstChild>
              <ItemLastChild>1 000.00</ItemLastChild>
            </Item>
            <Item>
              <ItemFirstChild>Balance</ItemFirstChild>
              <ItemLastChild>14 870.00</ItemLastChild>
            </Item>
          </Element>
        </List>
      </ContainerList>
    </Section>
  );
};
