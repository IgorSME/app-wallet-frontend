

import { BaseTable, THead, Td, Th } from '../Statistic/StatisticTable.styled'

export default function StatisticTable() {
    return (
        <BaseTable>
            <THead>
                <tr>
                    <Th>Category Sum</Th>
                </tr>
            </THead>
            <tbody>
                <tr>
                    <Td>Basic expenses 1000</Td>
                </tr>
                <tr>
                    <Td>Products 1000</Td>
                </tr>
                <tr>
                    <Td>Car 1500 </Td>
                </tr>
                <tr>
                    <Td>Self care 1000</Td>
                </tr>
                <tr>
                    <Td>Child care 1000</Td>

                </tr>
                <tr>
                    <Td>Household products 1000</Td>
                </tr>
                <tr>
                    <Td>Education 2000</Td>

                </tr>
                <tr>
                    <Td>Leisure 1000</Td>

                </tr>
                <tr>
                    <Td>Other expenses 1000</Td>

                </tr>
                <tr>
                    <Td>Expenses 2000</Td>
                </tr>
                <tr>
                    <Td>Income 1000</Td>
                </tr>


            </tbody>
        </BaseTable>
    )
}

