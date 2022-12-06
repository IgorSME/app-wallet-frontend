import {
  Section,
  Container,
  Table,
  Thead,
  TheadTr,
  TheadTrTh,
  Tbody,
  TbodyTr,
} from 'components/BalanceTable/BalanceTable.styled';

const BalanceTable = () => {
  return (
    <Section>
      <Container>
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
          </Tbody>
        </Table>
      </Container>
    </Section>
  );
};

export default BalanceTable;
