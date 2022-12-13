import React from 'react';

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

export const BalanceTable = transactions => {
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
            {transactions.map(
              ({ date, type, category, comment, sum, balance }) => (
                <TbodyTr>
                  <td>{date}</td>
                  <td>{type}</td>
                  <td>{category}</td>
                  <td>{comment}</td>
                  <td>{sum}</td>
                  <td>{balance}</td>
                </TbodyTr>
              )
            )}
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
