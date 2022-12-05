
import React from 'react';
import { BaseTable, THead, TBody, Th, Td } from './CurrencyTable.styled';

export default function CurrencyTable({ currency }) {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>Currency</Th>
          <Th>Purchase</Th>
          <Th>Sale</Th>
        </tr>
      </THead>
      <TBody>
        {currency &&
          currency.map(({ ccy, buy, sell }) => (
            <tr key={ccy}>
              <Td>{ccy}</Td>
              <Td>{Number(buy)}</Td>
              <Td>{Number(sell)}</Td>
            </tr>
          ))}
      </TBody>
    </BaseTable>
  );
}

