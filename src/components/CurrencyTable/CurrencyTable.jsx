import React from 'react';
import { useTranslation } from 'react-i18next';

import { BaseTable, THead, TBody, Th, Td } from './CurrencyTable.styled';

export function CurrencyTable({ currency }) {
  const { t } = useTranslation();

  return (
    <>
      <BaseTable>
        <THead>
          <tr>
            <Th>{t('currency.currency')}</Th>
            <Th>{t('currency.purchase')}</Th>
            <Th>{t('currency.sale')}</Th>
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
    </>
  );
}
